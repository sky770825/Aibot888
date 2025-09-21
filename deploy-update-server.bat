@echo off
chcp 65001 >nul
echo ========================================
echo    AI網站自動更新服務器部署工具
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
echo 📦 安裝更新服務器依賴...
if not exist "node_modules" (
    npm install --prefix . express cors
) else (
    echo ✅ 依賴已安裝
)

echo.
echo 🚀 啟動自動更新服務器...
echo.
echo 📍 服務器將在以下地址運行:
echo    - 主服務器: http://localhost:3000
echo    - 健康檢查: http://localhost:3000/api/health
echo    - 版本檢查: http://localhost:3000/api/version
echo.
echo 💡 使用說明:
echo    1. 服務器會自動檢查專案檔案變化
echo    2. 客戶端會定期檢查更新
echo    3. 發現新版本時會自動提示更新
echo.
echo ⚠️  按 Ctrl+C 停止服務器
echo.

:: 啟動服務器
node update-server.js

pause
