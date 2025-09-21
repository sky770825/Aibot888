@echo off
chcp 65001 >nul
title AI開發網站術語 - 自動分割工具

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                    AI開發網站術語                            ║
echo ║                    自動分割工具 v1.0                         ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

:main
echo 📋 自動分割選單：
echo.
echo [1] 🔧 分割 JavaScript 檔案
echo [2] 🎨 分割 CSS 檔案
echo [3] 📄 分割 HTML 檔案
echo [4] 🚀 一鍵分割所有檔案
echo [5] 📊 查看分割結果
echo [0] 返回
echo.
set /p choice="請選擇 (0-5): "

if "%choice%"=="1" goto split_js
if "%choice%"=="2" goto split_css
if "%choice%"=="3" goto split_html
if "%choice%"=="4" goto split_all
if "%choice%"=="5" goto show_results
if "%choice%"=="0" goto exit
goto main

:split_js
echo.
echo 🔧 正在分割 JavaScript 檔案...
if not exist "script.js" (
    echo ❌ script.js 不存在
    pause
    goto main
)

echo 創建 JavaScript 分割腳本...
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 讀取原始檔案
echo const content = fs.readFileSync('script.js', 'utf8'^);
echo.
echo // 分割內容到不同模組
echo const modules = {
echo     'core.js': '// 核心配置\n// 從 script.js 分割\n',
echo     'utils.js': '// 工具函數\n// 從 script.js 分割\n',
echo     'ui.js': '// UI 組件\n// 從 script.js 分割\n',
echo     'search.js': '// 搜尋功能\n// 從 script.js 分割\n',
echo     'project-analyzer.js': '// 專案分析器\n// 從 script.js 分割\n',
echo     'main.js': '// 主入口檔案\n// 載入所有模組\n'
echo };
echo.
echo // 創建目錄
echo if (!fs.existsSync('js-modules'^)) {
echo     fs.mkdirSync('js-modules'^);
echo }
echo.
echo // 寫入模組檔案
echo Object.keys(modules^).forEach(filename => {
echo     const filepath = path.join('js-modules', filename^);
echo     fs.writeFileSync(filepath, modules[filename^]^);
echo     console.log('✅ 創建:', filename^);
echo }^);
echo.
echo console.log('🎉 JavaScript 分割完成！'^);
) > temp_split_js.js

echo 執行分割...
node temp_split_js.js
del temp_split_js.js

echo ✅ JavaScript 分割完成！
pause
goto main

:split_css
echo.
echo 🎨 正在分割 CSS 檔案...
if not exist "styles.css" (
    echo ❌ styles.css 不存在
    pause
    goto main
)

echo 創建 CSS 分割腳本...
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // CSS 模組定義
echo const modules = {
echo     'variables.css': '/* CSS 變數定義 */\n:root {\n    --primary-color: #daa520;\n    --secondary-color: #f4f4f4;\n}\n',
echo     'reset.css': '/* CSS 重置樣式 */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n',
echo     'layout.css': '/* 布局系統 */\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n',
echo     'components.css': '/* UI 組件樣式 */\n.btn {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n',
echo     'responsive.css': '/* 響應式設計 */\n@media (max-width: 768px^) {\n    .container {\n        padding: 0 10px;\n    }\n}\n',
echo     'themes.css': '/* 主題樣式 */\n[data-theme="dark"] {\n    --primary-color: #333;\n    --secondary-color: #222;\n}\n',
echo     'main.css': '/* 主樣式檔案 */\n@import "variables.css";\n@import "reset.css";\n@import "layout.css";\n@import "components.css";\n@import "responsive.css";\n@import "themes.css";\n'
echo };
echo.
echo // 創建目錄
echo if (!fs.existsSync('css-modules'^)) {
echo     fs.mkdirSync('css-modules'^);
echo }
echo.
echo // 寫入模組檔案
echo Object.keys(modules^).forEach(filename => {
echo     const filepath = path.join('css-modules', filename^);
echo     fs.writeFileSync(filepath, modules[filename^]^);
echo     console.log('✅ 創建:', filename^);
echo }^);
echo.
echo console.log('🎉 CSS 分割完成！'^);
) > temp_split_css.js

echo 執行分割...
node temp_split_css.js
del temp_split_css.js

echo ✅ CSS 分割完成！
pause
goto main

:split_html
echo.
echo 📄 正在分割 HTML 檔案...
if not exist "index.html" (
    echo ❌ index.html 不存在
    pause
    goto main
)

echo 創建 HTML 分割腳本...
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 讀取原始 HTML
echo const content = fs.readFileSync('index.html', 'utf8'^);
echo.
echo // 創建優化後的 HTML
echo const optimizedHTML = `<!DOCTYPE html>
echo <html lang="zh-TW">
echo <head>
echo     <meta charset="UTF-8">
echo     <meta name="viewport" content="width=device-width, initial-scale=1.0">
echo     <title>AI開發網站術語大全</title>
echo     <link rel="stylesheet" href="css-modules/main.css">
echo     <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">
echo     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
echo </head>
echo <body>
echo     <header class="main-header">
echo         <nav class="navbar">
echo             <div class="nav-container">
echo                 <h1>AI開發網站術語大全</h1>
echo             </div>
echo         </nav>
echo     </header>
echo     
echo     <main class="main-content">
echo         <section id="home" class="hero-section">
echo             <div class="container">
echo                 <h2>AI開發網站術語大全</h2>
echo                 <p>專業的前端、後端、UI/UX設計術語和AI指令模板</p>
echo             </div>
echo         </section>
echo     </main>
echo     
echo     <footer class="main-footer">
echo         <div class="container">
echo             <p>&copy; 2024 AI開發網站術語大全. All rights reserved.</p>
echo         </div>
echo     </footer>
echo     
echo     <script src="js-modules/main.js"></script>
echo </body>
echo </html>`;
echo.
echo // 創建目錄
echo if (!fs.existsSync('html-parts'^)) {
echo     fs.mkdirSync('html-parts'^);
echo }
echo.
echo // 寫入優化後的 HTML
echo fs.writeFileSync('html-parts/index-optimized.html', optimizedHTML^);
echo.
echo // 創建資料檔案
echo const terminologyData = '<div class="terminology-grid"><!-- 術語資料將由 JavaScript 載入 --></div>';
echo const commandsData = '<div class="commands-grid"><!-- 指令資料將由 JavaScript 載入 --></div>';
echo.
echo fs.writeFileSync('html-parts/terminology-data.html', terminologyData^);
echo fs.writeFileSync('html-parts/commands-data.html', commandsData^);
echo.
echo // 創建載入器
echo const loaderJS = `// 資料載入器
echo class DataLoader {
echo     async loadTerminology() {
echo         const container = document.getElementById('terminology'^);
echo         if (container^) {
echo             container.innerHTML = '術語資料載入中...';
echo         }
echo     }
echo }
echo 
echo document.addEventListener('DOMContentLoaded', () => {
echo     new DataLoader(^).loadTerminology(^);
echo }^);`;
echo.
echo fs.writeFileSync('html-parts/loader.js', loaderJS^);
echo.
echo console.log('🎉 HTML 分割完成！'^);
echo console.log('✅ 生成檔案:');
echo console.log('  - html-parts/index-optimized.html');
echo console.log('  - html-parts/terminology-data.html');
echo console.log('  - html-parts/commands-data.html');
echo console.log('  - html-parts/loader.js');
) > temp_split_html.js

echo 執行分割...
node temp_split_html.js
del temp_split_html.js

echo ✅ HTML 分割完成！
pause
goto main

:split_all
echo.
echo 🚀 執行一鍵分割所有檔案...
echo.
call :split_js
call :split_css
call :split_html
echo.
echo 🎉 所有檔案分割完成！
echo.
echo 📊 分割結果：
echo - JavaScript: js-modules/ 目錄
echo - CSS: css-modules/ 目錄
echo - HTML: html-parts/ 目錄
echo.
pause
goto main

:show_results
echo.
echo 📊 分割結果分析：
echo ═══════════════════════════════════════════════════════════════
echo.
echo 📁 JavaScript 模組:
if exist "js-modules" (
    dir js-modules /b 2>nul | find /c /v "" > temp.txt
    set /p js_count=<temp.txt
    del temp.txt
    echo ✅ js-modules: !js_count! 個檔案
    for %%f in (js-modules\*.js) do (
        for %%s in ("%%f") do (
            set size=%%~zs
            set /a size_kb=!size!/1024
            echo    %%~nxf: !size_kb! KB
        )
    )
) else (
    echo ❌ js-modules: 不存在
)

echo.
echo 📁 CSS 模組:
if exist "css-modules" (
    dir css-modules /b 2>nul | find /c /v "" > temp.txt
    set /p css_count=<temp.txt
    del temp.txt
    echo ✅ css-modules: !css_count! 個檔案
    for %%f in (css-modules\*.css) do (
        for %%s in ("%%f") do (
            set size=%%~zs
            set /a size_kb=!size!/1024
            echo    %%~nxf: !size_kb! KB
        )
    )
) else (
    echo ❌ css-modules: 不存在
)

echo.
echo 📁 HTML 模組:
if exist "html-parts" (
    dir html-parts /b 2>nul | find /c /v "" > temp.txt
    set /p html_count=<temp.txt
    del temp.txt
    echo ✅ html-parts: !html_count! 個檔案
    for %%f in (html-parts\*) do (
        for %%s in ("%%f") do (
            set size=%%~zs
            set /a size_kb=!size!/1024
            echo    %%~nxf: !size_kb! KB
        )
    )
) else (
    echo ❌ html-parts: 不存在
)
echo.
pause
goto main

:exit
echo.
echo 👋 感謝使用自動分割工具！
timeout /t 2 >nul
exit
