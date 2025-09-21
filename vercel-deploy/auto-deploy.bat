@echo off
chcp 65001 >nul
echo ========================================
echo    自動部署到 Vercel
echo ========================================
echo.

echo 🚀 開始部署到 Vercel...
echo.

:: 自動回答所有問題
echo y | vercel --prod

echo.
echo ✅ 部署完成！
echo.
echo 📍 您的網站網址將顯示在上方
echo 💡 請記住網址，稍後需要測試
echo.
pause
