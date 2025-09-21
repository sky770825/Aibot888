# 🚀 AI網站自動更新系統

## 📋 系統概述

這是一個完整的自動更新系統，讓您的AI網站術語專案能夠：
- 🔍 自動檢查版本更新
- 📦 下載最新檔案
- 🔄 無縫更新到最新版本
- 💾 自動備份舊版本
- 🌐 支援遠端部署

## 🛠️ 系統架構

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   客戶端網站     │    │   更新服務器     │    │   檔案系統       │
│                 │    │                 │    │                 │
│ • 檢查更新      │◄──►│ • 版本管理      │◄──►│ • 專案檔案      │
│ • 下載更新      │    │ • 檔案同步      │    │ • 備份管理      │
│ • 應用更新      │    │ • API服務       │    │ • 版本控制      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📁 檔案結構

```
專案根目錄/
├── update-server.js          # 更新服務器主程式
├── client-updater.js         # 客戶端更新器
├── package-update.json       # 更新系統依賴
├── deploy-update-server.bat  # 部署腳本
└── README-自動更新系統.md    # 說明文件
```

## 🚀 快速開始

### 1. 安裝依賴

```bash
# 安裝更新服務器依賴
npm install express cors

# 或使用提供的腳本
deploy-update-server.bat
```

### 2. 啟動更新服務器

```bash
# 方法1: 使用腳本
deploy-update-server.bat

# 方法2: 直接執行
node update-server.js
```

### 3. 配置客戶端

在 `index.html` 中已自動配置：

```html
<meta name="app-version" content="3.0.0">
<script>
    window.AUTO_UPDATE_CONFIG = {
        serverUrl: 'http://localhost:3000',
        checkInterval: 30000,  // 30秒檢查一次
        autoUpdate: false,     // 手動確認更新
        backupBeforeUpdate: true
    };
</script>
```

## 🔧 API 端點

### 版本檢查
```
GET /api/version
```
返回當前服務器版本和檔案資訊

### 檢查更新
```
POST /api/check-update
Body: { "clientVersion": "3.0.0", "clientHash": "abc123" }
```
檢查是否需要更新

### 下載更新包
```
GET /api/update-package
```
獲取完整的更新包資訊

### 備份當前版本
```
POST /api/backup
```
備份當前版本到 backup_current 目錄

### 健康檢查
```
GET /api/health
```
檢查服務器狀態

## ⚙️ 配置選項

### 服務器配置 (update-server.js)

```javascript
const PROJECT_CONFIG = {
    name: 'ai-website-terminology',
    currentVersion: '3.0.0',
    updatePath: './',
    backupPath: './backup_current/',
    excludeFiles: ['node_modules', '.git', 'backup_*', 'v*', '*.log']
};
```

### 客戶端配置

```javascript
window.AUTO_UPDATE_CONFIG = {
    serverUrl: 'http://localhost:3000',  // 服務器地址
    checkInterval: 30000,                // 檢查間隔(毫秒)
    autoUpdate: false,                   // 是否自動更新
    backupBeforeUpdate: true             // 更新前是否備份
};
```

## 🔄 更新流程

1. **檢查更新**: 客戶端定期向服務器檢查版本
2. **版本比較**: 比較客戶端和服務器版本/雜湊
3. **下載更新**: 如有新版本，下載更新包
4. **備份當前**: 備份當前版本（可選）
5. **應用更新**: 應用新版本檔案
6. **重新載入**: 重新載入頁面完成更新

## 📊 監控和日誌

### 服務器日誌
- 啟動資訊
- API 請求記錄
- 錯誤日誌

### 客戶端日誌
- 更新檢查記錄
- 下載進度
- 更新狀態

## 🛡️ 安全考量

1. **檔案路徑驗證**: 防止目錄遍歷攻擊
2. **CORS 配置**: 控制跨域請求
3. **備份機制**: 更新失敗時可恢復
4. **版本驗證**: 確保檔案完整性

## 🚀 部署建議

### 本地開發
```bash
# 啟動服務器
node update-server.js

# 訪問網站
http://localhost:8000
```

### 生產環境
1. 使用 PM2 管理進程
2. 配置 Nginx 反向代理
3. 設定 SSL 證書
4. 配置防火牆規則

### 雲端部署
- **Vercel**: 適合靜態網站
- **Heroku**: 適合 Node.js 應用
- **AWS EC2**: 適合自定義部署
- **DigitalOcean**: 適合中小型專案

## 🔧 故障排除

### 常見問題

1. **服務器無法啟動**
   - 檢查端口是否被占用
   - 確認 Node.js 版本
   - 檢查依賴是否安裝

2. **客戶端無法連接**
   - 檢查服務器地址
   - 確認 CORS 配置
   - 檢查防火牆設定

3. **更新失敗**
   - 檢查檔案權限
   - 確認磁碟空間
   - 查看錯誤日誌

### 日誌位置
- 服務器: 控制台輸出
- 客戶端: 瀏覽器控制台

## 📈 效能優化

1. **檔案壓縮**: 使用 gzip 壓縮
2. **快取策略**: 設定適當的快取頭
3. **增量更新**: 只下載變更的檔案
4. **CDN 加速**: 使用 CDN 分發檔案

## 🔮 未來功能

- [ ] 增量更新支援
- [ ] 多環境部署
- [ ] 更新回滾功能
- [ ] 使用者通知系統
- [ ] 統計和分析面板

## 📞 支援

如有問題，請檢查：
1. 控制台錯誤訊息
2. 網路連接狀態
3. 服務器日誌
4. 檔案權限設定

---

**版本**: 1.0.0  
**更新日期**: 2024年12月  
**作者**: AI開發術語網站團隊
