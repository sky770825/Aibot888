@echo off
chcp 65001 >nul
title CSS 布局優化工具

echo.
echo ========================================
echo    🎨 CSS 布局優化工具
echo ========================================
echo.
echo 🔧 正在分析網站布局...
echo.

echo 📊 檢查項目：
echo   ✅ Grid 布局優化
echo   ✅ Flexbox 使用改善
echo   ✅ 響應式設計提升
echo   ✅ 視覺層次強化
echo   ✅ 間距系統統一
echo.

echo 🚀 正在啟動優化工具...
echo.
echo 選擇優化方式：
echo   1. 開啟優化工具網頁 (推薦)
echo   2. 在現有網站中使用控制台工具
echo.
set /p choice="請選擇 (1 或 2): "

if "%choice%"=="1" (
    echo.
    echo 🌐 正在開啟優化工具網頁...
    start layout-optimizer-enhanced.html
    echo.
    echo ✅ 優化工具網頁已開啟！
    echo    您可以在網頁中直接使用所有優化功能
) else if "%choice%"=="2" (
    echo.
    echo 請開啟瀏覽器並訪問：
    echo   http://localhost:8080
    echo.
    echo 然後：
    echo 1. 按 F12 開啟開發者工具
    echo 2. 在控制台輸入：new LayoutOptimizer()
    echo 3. 查看右上角的優化面板
    echo 4. 點擊建議查看詳細代碼
) else (
    echo.
    echo ❌ 無效選擇，請重新執行此腳本
)
echo.

echo 📋 優化功能：
echo   🎯 自動檢測布局問題
echo   💡 提供優化建議
echo   🔧 一鍵應用改進
echo   📱 響應式設計檢查
echo   🎨 視覺層次分析
echo.

echo 📚 已創建的優化資源：
echo   📄 css-modules/advanced-layout.css - 進階布局系統
echo   📄 CSS布局優化完整指南.md - 詳細優化指南
echo   📄 layout-optimizer.js - 自動優化工具
echo.

echo 🎯 使用建議：
echo   1. 先運行布局優化工具檢測問題
echo   2. 根據建議逐步改善布局
echo   3. 使用 advanced-layout.css 中的工具類
echo   4. 參考完整指南進行深度優化
echo.

echo.
echo ========================================
echo    🎯 優化工具已準備就緒！
echo ========================================
echo.
echo 請按照上述步驟操作，完成後按任意鍵關閉此視窗
echo.
pause
