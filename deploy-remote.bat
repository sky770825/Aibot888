@echo off
chcp 65001 >nul
echo ========================================
echo    AI網站遠端部署工具
echo ========================================
echo.

:: 檢查 Node.js 是否安裝
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 錯誤: 未安裝 Node.js
    echo 請先安裝 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 已安裝
echo.

:: 建立遠端部署目錄
if not exist "remote-deploy" mkdir remote-deploy
cd remote-deploy

echo 📁 建立遠端部署目錄...
echo.

:: 複製必要檔案
echo 📋 複製部署檔案...
copy "..\remote-update-server.js" "."
copy "..\package-remote.json" "package.json"
copy "..\vercel.json" "."
copy "..\login.html" "."
copy "..\update-control.html" "."
copy "..\client-updater.js" "."
copy "..\index.html" "."
copy "..\styles.css" "."
copy "..\script.js" "."

echo ✅ 檔案複製完成
echo.

:: 安裝依賴
echo 📦 安裝依賴...
npm install

echo.
echo 🚀 準備部署到 Vercel...
echo.

:: 檢查 Vercel CLI
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📥 安裝 Vercel CLI...
    npm install -g vercel
)

echo.
echo ========================================
echo    部署選項
echo ========================================
echo.
echo 1. 部署到 Vercel (推薦)
echo 2. 部署到 Heroku
echo 3. 本地測試
echo 4. 退出
echo.

set /p choice=請選擇 (1-4): 

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto heroku
if "%choice%"=="3" goto local
if "%choice%"=="4" goto exit

:vercel
echo.
echo 🚀 部署到 Vercel...
echo.
echo 請按照以下步驟操作:
echo 1. 註冊 Vercel 帳號: https://vercel.com
echo 2. 在瀏覽器中完成登入
echo 3. 執行: vercel
echo 4. 按照提示完成部署
echo.
echo 部署完成後，您將獲得一個網址，例如:
echo https://your-project.vercel.app
echo.
echo 然後修改 index.html 中的 serverUrl 為您的網址
echo.
pause
goto end

:heroku
echo.
echo 🚀 部署到 Heroku...
echo.
echo 請按照以下步驟操作:
echo 1. 註冊 Heroku 帳號: https://heroku.com
echo 2. 安裝 Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
echo 3. 執行: heroku login
echo 4. 執行: heroku create your-app-name
echo 5. 執行: git init
echo 6. 執行: git add .
echo 7. 執行: git commit -m "Initial commit"
echo 8. 執行: git push heroku main
echo.
pause
goto end

:local
echo.
echo 🧪 本地測試...
echo.
echo 啟動本地服務器...
node remote-update-server.js
pause
goto end

:exit
echo 退出部署工具
goto end

:end
echo.
echo 部署完成！
echo.
echo 📋 使用說明:
echo 1. 訪問您的部署網址
echo 2. 使用 admin/admin123 登入
echo 3. 下載更新檔案
echo.
pause
