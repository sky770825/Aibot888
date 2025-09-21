@echo off
chcp 65001 >nul
title AI開發網站術語 - 快速優化工具

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                    AI開發網站術語                            ║
echo ║                    快速優化工具 v1.0                         ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

:menu
echo 📋 快速操作選單：
echo.
echo [1] 🔍 查看檔案大小
echo [2] 🧹 清理備份檔案
echo [3] 📦 創建部署包
echo [4] 🔄 恢復原始檔案
echo [5] 📊 生成報告
echo [0] 退出
echo.
set /p choice="請選擇 (0-5): "

if "%choice%"=="1" goto show_sizes
if "%choice%"=="2" goto cleanup
if "%choice%"=="3" goto deploy
if "%choice%"=="4" goto restore
if "%choice%"=="5" goto report
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

:report
echo.
echo 📊 優化報告：
echo ═══════════════════════════════════════════════════════════════
echo.
echo 📈 當前狀態：
call :show_sizes
echo.
echo 💡 優化建議：
echo 1. 如果檔案過大，建議使用分割功能
echo 2. 定期清理備份檔案節省空間
echo 3. 使用部署包進行生產環境部署
echo.
pause
goto menu

:exit
echo.
echo 👋 感謝使用快速優化工具！
timeout /t 2 >nul
exit
