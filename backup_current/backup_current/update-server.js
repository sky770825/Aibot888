const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 專案配置
const PROJECT_CONFIG = {
    name: 'ai-website-terminology',
    currentVersion: '3.1.0',
    updatePath: './',
    backupPath: './backup_current/',
    excludeFiles: ['node_modules', '.git', 'backup_*', 'v*', '*.log']
};

// 獲取檔案清單和版本資訊
function getFileList(dirPath, basePath = '') {
    const files = [];
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativePath = path.join(basePath, item);
        
        // 跳過排除的檔案
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

// API 路由

// 檢查版本
app.get('/api/version', (req, res) => {
    try {
        const projectHash = calculateProjectHash();
        const files = getFileList(PROJECT_CONFIG.updatePath);
        
        res.json({
            success: true,
            version: PROJECT_CONFIG.currentVersion,
            projectHash: projectHash,
            fileCount: files.length,
            lastUpdate: new Date().toISOString(),
            files: files
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 檢查更新
app.post('/api/check-update', (req, res) => {
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
            updateAvailable: needsUpdate
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 下載檔案
app.get('/api/download/*', (req, res) => {
    try {
        const filePath = path.join(PROJECT_CONFIG.updatePath, req.params[0]);
        
        // 安全檢查
        if (!filePath.startsWith(path.resolve(PROJECT_CONFIG.updatePath))) {
            return res.status(403).json({ success: false, error: 'Access denied' });
        }
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ success: false, error: 'File not found' });
        }
        
        res.download(filePath);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 下載更新包
app.get('/api/update-package', (req, res) => {
    try {
        const files = getFileList(PROJECT_CONFIG.updatePath);
        const updatePackage = {
            version: PROJECT_CONFIG.currentVersion,
            projectHash: calculateProjectHash(),
            files: files,
            timestamp: new Date().toISOString()
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

// 備份當前版本
app.post('/api/backup', (req, res) => {
    try {
        const backupDir = PROJECT_CONFIG.backupPath;
        
        // 確保備份目錄存在
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }
        
        // 複製檔案到備份目錄
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
            message: 'Backup completed successfully',
            backupPath: backupDir
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
        timestamp: new Date().toISOString()
    });
});

// 啟動服務器
app.listen(PORT, () => {
    console.log(`🚀 自動更新服務器已啟動`);
    console.log(`📍 服務器地址: http://localhost:${PORT}`);
    console.log(`📊 健康檢查: http://localhost:${PORT}/api/health`);
    console.log(`🔍 版本檢查: http://localhost:${PORT}/api/version`);
    console.log(`📦 更新包: http://localhost:${PORT}/api/update-package`);
});

module.exports = app;
