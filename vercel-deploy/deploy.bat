@echo off
chcp 65001 >nul
echo ========================================
echo    Vercel 部署腳本
echo ========================================
echo.

:: 複製檔案
echo 📋 複製部署檔案...
copy ..\remote-update-server.js . >nul
copy ..\login.html . >nul
copy ..\update-control.html . >nul
copy ..\client-updater.js . >nul
copy ..\index.html . >nul
copy ..\styles.css . >nul
copy ..\script.js . >nul
copy ..\remote-client-config.js . >nul

echo ✅ 檔案複製完成
echo.

:: 安裝依賴
echo 📦 安裝依賴...
npm install

echo.
echo 🚀 開始部署到 Vercel...
echo.

:: 部署到 Vercel
vercel

echo.
echo ✅ 部署完成！
echo.
echo 📍 您的網站網址將顯示在上方
echo 💡 請記住網址，稍後需要修改配置
echo.
pause
