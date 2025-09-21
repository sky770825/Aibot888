@echo off
chcp 65001 >nul
echo ========================================
echo    AI網站會員認證更新服務器部署工具
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

:: 安裝依賴
echo 📦 安裝會員認證服務器依賴...
if not exist "node_modules" (
    npm install express cors express-session
) else (
    echo ✅ 依賴已安裝
)

echo.
echo 🚀 啟動會員認證更新服務器...
echo.
echo 📍 服務器將在以下地址運行:
echo    - 主服務器: http://localhost:3000
echo    - 登入頁面: http://localhost:3000/login.html
echo    - 健康檢查: http://localhost:3000/api/health
echo.
echo 👥 預設測試帳號:
echo    - 管理員: admin / admin123
echo    - 一般用戶: user1 / user123
echo.
echo 💡 使用說明:
echo    1. 先訪問登入頁面進行認證
echo    2. 登入後才能使用自動更新功能
echo    3. 管理員可以進行備份操作
echo.
echo ⚠️  按 Ctrl+C 停止服務器
echo.

:: 啟動服務器
node auth-update-server.js

pause
