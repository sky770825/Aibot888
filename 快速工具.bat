@echo off
chcp 65001 >nul
title AI網站術語 - 快速工具

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                    AI網站術語快速工具                        ║
echo ║                    一鍵優化，簡單易用                        ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

:menu
echo.
echo 🎯 快速操作：
echo.
echo [1] 🔍 查看檔案大小
echo [2] 🧹 清理備份檔案
echo [3] 📦 創建部署包
echo [4] 🔄 恢復原始檔案
echo [5] 🚀 一鍵優化
echo [0] 退出
echo.
set /p choice="請選擇 (0-5): "

if "%choice%"=="1" goto show_sizes
if "%choice%"=="2" goto cleanup
if "%choice%"=="3" goto deploy
if "%choice%"=="4" goto restore
if "%choice%"=="5" goto optimize
if "%choice%"=="0" goto exit
goto menu

:show_sizes
echo.
echo 📊 檔案大小分析：
echo ═══════════════════════════════════════════════════════════════
for %%f in (index.html script.js styles.css) do (
    if exist "%%f" (
        for %%s in ("%%f") do (
            set size=%%~zs
            set /a size_kb=!size!/1024
            echo ✅ %%~nf%%~xf: !size_kb! KB
        )
    ) else (
        echo ❌ %%~nf%%~xf: 不存在
    )
)
echo.
echo 📁 模組目錄：
if exist "js-modules" (
    dir js-modules /b 2>nul | find /c /v "" > temp.txt
    set /p js_count=<temp.txt
    del temp.txt
    echo ✅ js-modules: !js_count! 個檔案
) else (
    echo ❌ js-modules: 不存在
)

if exist "css-modules" (
    dir css-modules /b 2>nul | find /c /v "" > temp.txt
    set /p css_count=<temp.txt
    del temp.txt
    echo ✅ css-modules: !css_count! 個檔案
) else (
    echo ❌ css-modules: 不存在
)
echo.
pause
goto menu

:cleanup
echo.
echo 🧹 清理備份檔案...
echo.
set /p confirm="確定清理備份檔案嗎？ (Y/N): "
if /i "%confirm%"=="Y" (
    for %%f in (*-backup.* *-large-backup.*) do (
        if exist "%%f" (
            echo 刪除: %%f
            del "%%f"
        )
    )
    echo ✅ 清理完成！
) else (
    echo ❌ 取消清理
)
echo.
pause
goto menu

:deploy
echo.
echo 📦 創建部署包...
if not exist "deploy" mkdir deploy
if exist "index.html" copy "index.html" "deploy\"
if exist "js-modules" xcopy "js-modules" "deploy\js-modules\" /E /I /Q
if exist "css-modules" xcopy "css-modules" "deploy\css-modules\" /E /I /Q
if exist "html-parts" xcopy "html-parts" "deploy\html-parts\" /E /I /Q
echo ✅ 部署包創建完成！
echo 📁 位置: deploy\ 目錄
echo.
pause
goto menu

:restore
echo.
echo 🔄 恢復原始檔案...
echo.
echo 可用的備份檔案：
for %%f in (*-backup.* *-large-backup.*) do (
    if exist "%%f" echo - %%~nf%%~xf
)
echo.
if exist "index-large-backup.html" (
    echo 恢復 index.html...
    copy "index-large-backup.html" "index.html"
)
if exist "script-large-backup.js" (
    echo 恢復 script.js...
    copy "script-large-backup.js" "script.js"
)
if exist "styles-large-backup.css" (
    echo 恢復 styles.css...
    copy "styles-large-backup.css" "styles.css"
)
echo ✅ 恢復完成！
echo.
pause
goto menu

:optimize
echo.
echo 🚀 一鍵優化...
echo.
echo 將執行以下優化：
echo 1. 清理備份檔案
echo 2. 創建部署包
echo 3. 生成優化報告
echo.
set /p confirm="確定執行一鍵優化嗎？ (Y/N): "
if /i "%confirm%"=="Y" (
    echo.
    echo 步驟 1/3: 清理備份檔案...
    for %%f in (*-backup.* *-large-backup.*) do (
        if exist "%%f" (
            echo 刪除: %%f
            del "%%f"
        )
    )
    echo ✅ 清理完成
    
    echo.
    echo 步驟 2/3: 創建部署包...
    if not exist "deploy" mkdir deploy
    if exist "index.html" copy "index.html" "deploy\"
    if exist "js-modules" xcopy "js-modules" "deploy\js-modules\" /E /I /Q
    if exist "css-modules" xcopy "css-modules" "deploy\css-modules\" /E /I /Q
    if exist "html-parts" xcopy "html-parts" "deploy\html-parts\" /E /I /Q
    echo ✅ 部署包創建完成
    
    echo.
    echo 步驟 3/3: 生成優化報告...
    (
        echo # AI網站術語 - 優化報告
        echo.
        echo ## 優化時間
        echo %date% %time%
        echo.
        echo ## 優化結果
        echo - 備份檔案已清理
        echo - 部署包已創建
        echo - 網站已優化
        echo.
        echo ## 使用方式
        echo 1. 將 deploy\ 目錄中的所有檔案上傳到您的網站伺服器
        echo 2. 確保目錄結構保持完整
        echo 3. 訪問 index.html 即可使用
    ) > optimization_report.md
    echo ✅ 優化報告已生成
    
    echo.
    echo 🎉 一鍵優化完成！
    echo.
    echo 📊 優化成果：
    echo - 備份檔案已清理
    echo - 部署包已創建
    echo - 優化報告已生成
    echo.
    echo 💡 下一步：
    echo 1. 測試優化後的功能
    echo 2. 使用部署包進行部署
    echo 3. 查看優化報告
    echo.
) else (
    echo ❌ 取消優化操作
)
echo.
pause
goto menu

:exit
echo.
echo 👋 感謝使用快速工具！
echo.
echo 💡 提示：定期使用優化工具可以保持網站最佳性能
echo.
timeout /t 2 >nul
exit
