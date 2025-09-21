# 🚀 Vercel 部署完整指南

## 📋 準備工作

### 1. 註冊 Vercel 帳號
1. 訪問：https://vercel.com
2. 點擊「Sign Up」
3. 使用 GitHub 或 Email 註冊
4. 完成驗證

### 2. 安裝 Vercel CLI
```bash
npm install -g vercel
```

## 🚀 部署步驟

### 步驟1: 進入部署目錄
```bash
cd vercel-deploy
```

### 步驟2: 複製檔案
```bash
# 複製所有必要檔案
copy ..\remote-update-server.js .
copy ..\login.html .
copy ..\update-control.html .
copy ..\client-updater.js .
copy ..\index.html .
copy ..\styles.css .
copy ..\script.js .
copy ..\remote-client-config.js .
```

### 步驟3: 安裝依賴
```bash
npm install
```

### 步驟4: 部署到 Vercel
```bash
vercel
```

### 步驟5: 按照提示操作
1. **Set up and deploy?** → 輸入 `y`
2. **Which scope?** → 選擇您的帳號
3. **Link to existing project?** → 輸入 `n`
4. **What's your project's name?** → 輸入 `ai-website-updater`
5. **In which directory is your code located?** → 輸入 `.`
6. **Want to modify settings?** → 輸入 `n`

### 步驟6: 獲得部署網址
部署完成後，您會看到類似：
```
✅ Production: https://ai-website-updater-xxx.vercel.app
```

## 🔧 配置更新

### 1. 修改客戶端配置
編輯 `remote-client-config.js`：
```javascript
const REMOTE_CONFIG = {
    serverUrl: 'https://ai-website-updater-xxx.vercel.app', // 改為您的實際網址
    // ... 其他設定
};
```

### 2. 重新部署
```bash
vercel --prod
```

## 📱 使用您的部署

### 1. 訪問登入頁面
```
https://ai-website-updater-xxx.vercel.app/login.html
```

### 2. 使用測試帳號
- 管理員：`admin` / `admin123`
- 一般用戶：`user1` / `user123`

### 3. 訪問主網站
```
https://ai-website-updater-xxx.vercel.app/index.html
```

## 🔄 更新部署

### 修改檔案後重新部署
```bash
vercel --prod
```

### 查看部署狀態
```bash
vercel ls
```

## 🚨 故障排除

### 常見問題

1. **部署失敗**
   - 檢查檔案是否完整
   - 確認 package.json 正確
   - 查看錯誤日誌

2. **無法訪問**
   - 檢查網址是否正確
   - 確認部署狀態
   - 查看 Vercel Dashboard

3. **功能異常**
   - 檢查環境變數
   - 確認依賴安裝
   - 查看服務器日誌

### 查看日誌
```bash
vercel logs
```

## 💡 進階設定

### 環境變數
在 Vercel Dashboard 中設定：
- `SESSION_SECRET`: 會話密鑰
- `ADMIN_PASSWORD`: 管理員密碼

### 自定義網域
1. 在 Vercel Dashboard 中
2. 選擇您的專案
3. 進入 Settings → Domains
4. 添加自定義網域

## 🎯 完成！

部署完成後，您就有一個完整的遠端更新系統了！

### 功能特色
- ✅ 遠端登入
- ✅ 自動更新檢查
- ✅ 檔案下載
- ✅ 權限管理
- ✅ 備份功能

---

**需要幫助？** 查看 Vercel 文檔：https://vercel.com/docs
