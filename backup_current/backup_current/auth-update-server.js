const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cors = require('cors');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(cors({
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000'],
    credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// 會話管理
app.use(session({
    secret: 'ai-website-secret-key-2024',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // 本地開發設為 false
        maxAge: 24 * 60 * 60 * 1000 // 24小時
    }
}));

// 專案配置
const PROJECT_CONFIG = {
    name: 'ai-website-terminology',
    currentVersion: '3.2.0',
    updatePath: './',
    backupPath: './backup_current/',
    excludeFiles: ['node_modules', '.git', 'backup_*', 'v*', '*.log']
};

// 用戶資料庫 (簡化版，實際應用建議使用真實資料庫)
const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123', // 實際應用中應該加密
        email: 'admin@example.com',
        role: 'admin',
        createdAt: new Date()
    },
    {
        id: 2,
        username: 'user1',
        password: 'user123',
        email: 'user1@example.com',
        role: 'user',
        createdAt: new Date()
    }
];

// 認證中間件
function requireAuth(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        return res.status(401).json({
            success: false,
            error: '需要登入才能使用此功能',
            code: 'AUTH_REQUIRED'
        });
    }
}

// 管理員權限檢查
function requireAdmin(req, res, next) {
    if (req.session && req.session.userId) {
        const user = users.find(u => u.id === req.session.userId);
        if (user && user.role === 'admin') {
            return next();
        }
    }
    return res.status(403).json({
        success: false,
        error: '需要管理員權限',
        code: 'ADMIN_REQUIRED'
    });
}

// 獲取檔案清單和版本資訊
function getFileList(dirPath, basePath = '') {
    const files = [];
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativePath = path.join(basePath, item);
        
        if (PROJECT_CONFIG.excludeFiles.some(exclude => 
            relativePath.includes(exclude) || item.startsWith('.'))) {
            continue;
        }
        
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...getFileList(fullPath, relativePath));
        } else {
            const content = fs.readFileSync(fullPath);
            const hash = crypto.createHash('md5').update(content).digest('hex');
            
            files.push({
                path: relativePath.replace(/\\/g, '/'),
                size: stat.size,
                hash: hash,
                modified: stat.mtime.toISOString()
            });
        }
    }
    
    return files;
}

// 計算專案版本雜湊
function calculateProjectHash() {
    const files = getFileList(PROJECT_CONFIG.updatePath);
    const fileHashes = files.map(f => f.hash).sort();
    return crypto.createHash('md5').update(fileHashes.join('')).digest('hex');
}

// ==================== 認證相關 API ====================

// 用戶登入
app.post('/api/auth/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                error: '請輸入用戶名和密碼'
            });
        }
        
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.role = user.role;
            
            res.json({
                success: true,
                message: '登入成功',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            });
        } else {
            res.status(401).json({
                success: false,
                error: '用戶名或密碼錯誤'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 用戶註冊
app.post('/api/auth/register', (req, res) => {
    try {
        const { username, password, email } = req.body;
        
        if (!username || !password || !email) {
            return res.status(400).json({
                success: false,
                error: '請填寫所有必填欄位'
            });
        }
        
        // 檢查用戶名是否已存在
        if (users.find(u => u.username === username)) {
            return res.status(400).json({
                success: false,
                error: '用戶名已存在'
            });
        }
        
        // 創建新用戶
        const newUser = {
            id: users.length + 1,
            username,
            password, // 實際應用中應該加密
            email,
            role: 'user',
            createdAt: new Date()
        };
        
        users.push(newUser);
        
        res.json({
            success: true,
            message: '註冊成功',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 用戶登出
app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: '登出失敗'
            });
        }
        res.json({
            success: true,
            message: '登出成功'
        });
    });
});

// 獲取當前用戶資訊
app.get('/api/auth/me', (req, res) => {
    if (req.session && req.session.userId) {
        const user = users.find(u => u.id === req.session.userId);
        if (user) {
            res.json({
                success: true,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            });
        } else {
            res.status(404).json({
                success: false,
                error: '用戶不存在'
            });
        }
    } else {
        res.status(401).json({
            success: false,
            error: '未登入'
        });
    }
});

// ==================== 更新相關 API (需要認證) ====================

// 檢查版本 (需要登入)
app.get('/api/version', requireAuth, (req, res) => {
    try {
        const projectHash = calculateProjectHash();
        const files = getFileList(PROJECT_CONFIG.updatePath);
        
        res.json({
            success: true,
            version: PROJECT_CONFIG.currentVersion,
            projectHash: projectHash,
            fileCount: files.length,
            lastUpdate: new Date().toISOString(),
            files: files,
            user: {
                username: req.session.username,
                role: req.session.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 檢查更新 (需要登入)
app.post('/api/check-update', requireAuth, (req, res) => {
    try {
        const { clientVersion, clientHash } = req.body;
        const serverHash = calculateProjectHash();
        const needsUpdate = clientVersion !== PROJECT_CONFIG.currentVersion || 
                           clientHash !== serverHash;
        
        res.json({
            success: true,
            needsUpdate: needsUpdate,
            serverVersion: PROJECT_CONFIG.currentVersion,
            serverHash: serverHash,
            updateAvailable: needsUpdate,
            user: {
                username: req.session.username,
                role: req.session.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 下載更新包 (需要登入)
app.get('/api/update-package', requireAuth, (req, res) => {
    try {
        const files = getFileList(PROJECT_CONFIG.updatePath);
        const updatePackage = {
            version: PROJECT_CONFIG.currentVersion,
            projectHash: calculateProjectHash(),
            files: files,
            timestamp: new Date().toISOString(),
            user: {
                username: req.session.username,
                role: req.session.role
            }
        };
        
        res.json({
            success: true,
            updatePackage: updatePackage
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 備份當前版本 (需要管理員權限)
app.post('/api/backup', requireAdmin, (req, res) => {
    try {
        const backupDir = PROJECT_CONFIG.backupPath;
        
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }
        
        const files = getFileList(PROJECT_CONFIG.updatePath);
        for (const file of files) {
            const sourcePath = path.join(PROJECT_CONFIG.updatePath, file.path);
            const backupFilePath = path.join(backupDir, file.path);
            const backupDirPath = path.dirname(backupFilePath);
            
            if (!fs.existsSync(backupDirPath)) {
                fs.mkdirSync(backupDirPath, { recursive: true });
            }
            
            fs.copyFileSync(sourcePath, backupFilePath);
        }
        
        res.json({
            success: true,
            message: '備份完成',
            backupPath: backupDir,
            user: {
                username: req.session.username,
                role: req.session.role
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 健康檢查
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        version: PROJECT_CONFIG.currentVersion,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        authenticated: !!(req.session && req.session.userId)
    });
});

// 啟動服務器
app.listen(PORT, () => {
    console.log(`🚀 會員認證更新服務器已啟動`);
    console.log(`📍 服務器地址: http://localhost:${PORT}`);
    console.log(`🔐 登入頁面: http://localhost:${PORT}/login.html`);
    console.log(`📊 健康檢查: http://localhost:${PORT}/api/health`);
    console.log(`👥 預設帳號: admin/admin123 或 user1/user123`);
});

module.exports = app;
