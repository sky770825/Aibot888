# 🌐 遠端部署指南

## 📋 部署方案比較

### 1. **Vercel** (最簡單，免費)
- ✅ 免費額度充足
- ✅ 自動部署
- ✅ 全球CDN
- ✅ 支援Node.js

### 2. **Heroku** (中等難度，免費)
- ✅ 免費額度
- ✅ 支援Node.js
- ✅ 簡單部署

### 3. **DigitalOcean** (完全控制，付費)
- ✅ 完全控制
- ✅ 可自定義
- ✅ 效能最佳

## 🚀 Vercel 部署步驟

### 步驟1: 準備檔案
```bash
# 建立部署目錄
mkdir ai-website-remote
cd ai-website-remote

# 複製必要檔案
cp ../auth-update-server.js .
cp ../login.html .
cp ../update-control.html .
cp ../client-updater.js .
cp ../index.html .
cp ../styles.css .
cp ../script.js .
```

### 步驟2: 建立 package.json
```json
{
  "name": "ai-website-remote",
  "version": "1.0.0",
  "main": "auth-update-server.js",
  "scripts": {
    "start": "node auth-update-server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "express-session": "^1.17.3"
  }
}
```

### 步驟3: 建立 vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "auth-update-server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "auth-update-server.js"
    }
  ]
}
```

### 步驟4: 部署到 Vercel
1. 註冊 Vercel 帳號
2. 安裝 Vercel CLI: `npm i -g vercel`
3. 執行: `vercel`
4. 按照提示完成部署

## 🔧 遠端配置

### 修改服務器配置
```javascript
// 在 auth-update-server.js 中修改
const PROJECT_CONFIG = {
    name: 'ai-website-terminology',
    currentVersion: '3.2.0',
    updatePath: './',
    backupPath: './backup_current/',
    excludeFiles: ['node_modules', '.git', 'backup_*', 'v*', '*.log']
};

// 修改 CORS 設定
app.use(cors({
    origin: ['https://your-domain.vercel.app', 'http://localhost:8000'],
    credentials: true
}));
```

### 修改客戶端配置
```javascript
// 在 index.html 中修改
window.AUTO_UPDATE_CONFIG = {
    serverUrl: 'https://your-domain.vercel.app',
    checkInterval: 300000,
    autoUpdate: false,
    backupBeforeUpdate: true
};
```

## 📱 使用流程

### 1. 遠端登入
- 訪問: `https://your-domain.vercel.app/login.html`
- 使用帳號密碼登入

### 2. 下載更新
- 登入後訪問: `https://your-domain.vercel.app/update-control.html`
- 點擊「檢查更新」
- 點擊「立即更新」下載

### 3. 自動更新
- 訪問: `https://your-domain.vercel.app/index.html`
- 系統會自動檢查更新
- 發現新版本時會提示更新

## 🔐 安全設定

### 環境變數
```bash
# 在 Vercel 中設定
SESSION_SECRET=your-secret-key-here
ADMIN_PASSWORD=your-admin-password
```

### 修改認證
```javascript
// 使用環境變數
app.use(session({
    secret: process.env.SESSION_SECRET || 'default-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // HTTPS 環境設為 true
        maxAge: 24 * 60 * 60 * 1000
    }
}));
```

## 📊 監控和管理

### 1. 查看日誌
- Vercel Dashboard → Functions → Logs

### 2. 監控效能
- Vercel Dashboard → Analytics

### 3. 管理用戶
- 訪問控制面板: `https://your-domain.vercel.app/update-control.html`

## 🚨 故障排除

### 常見問題
1. **CORS 錯誤**: 檢查 origin 設定
2. **會話失效**: 檢查 secure cookie 設定
3. **檔案下載失敗**: 檢查檔案路徑權限

### 除錯步驟
1. 檢查 Vercel 日誌
2. 測試 API 端點
3. 檢查網路連接
4. 驗證認證狀態

## 💡 進階功能

### 1. 自動部署
- 連接 GitHub 倉庫
- 推送代碼自動部署

### 2. 多環境
- 開發環境: `dev.your-domain.vercel.app`
- 生產環境: `your-domain.vercel.app`

### 3. 備份策略
- 定期備份到雲端存儲
- 版本回滾功能

---

**注意**: 免費方案有使用限制，建議先測試再正式使用。
