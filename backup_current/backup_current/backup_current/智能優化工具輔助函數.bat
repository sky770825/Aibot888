@echo off
chcp 65001 >nul

:: ===========================================
:: 智能優化工具輔助函數
:: 功能：提供各種輔助函數支援
:: ===========================================

:create_project_analyzer
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 專案架構分析器
echo function projectAnalyzer() {
echo     console.log('🔍 開始專案架構分析...'^);
echo     
echo     const projectInfo = {
echo         name: 'AI開發網站術語',
echo         type: '前端網站專案',
echo         technologies: [],
echo         structure: {},
echo         patterns: [],
echo         dependencies: []
echo     };
echo     
echo     // 分析檔案結構
echo     const files = ['index.html', 'script.js', 'styles.css'];
echo     files.forEach(file => {
echo         if (fs.existsSync(file^)) {
echo             const content = fs.readFileSync(file, 'utf8'^);
echo             const lines = content.split('\n'^).length;
echo             const size = Math.round(fs.statSync(file^).size / 1024^);
echo             
echo             projectInfo.structure[file] = {
echo                 lines: lines,
echo                 size: size,
echo                 type: file.split('.'^)[1]
echo             };
echo             
echo             // 檢測技術
echo             if (file === 'index.html' && content.includes('React'^)) {
echo                 projectInfo.technologies.push('React'^);
echo             }
echo             if (file === 'styles.css' && content.includes('@media'^)) {
echo                 projectInfo.technologies.push('響應式設計'^);
echo             }
echo             if (file === 'script.js' && content.includes('fetch'^)) {
echo                 projectInfo.technologies.push('API整合'^);
echo             }
echo         }
echo     }^);
echo     
echo     // 檢測架構模式
echo     if (fs.existsSync('js-modules'^)) {
echo         projectInfo.patterns.push('模組化架構'^);
echo     }
echo     if (fs.existsSync('css-modules'^)) {
echo         projectInfo.patterns.push('CSS模組化'^);
echo     }
echo     
echo     // 生成分析報告
echo     const report = \`# 專案架構分析報告
echo.
echo ## 專案概述
echo - 專案名稱: \${projectInfo.name}
echo - 專案類型: \${projectInfo.type}
echo - 主要技術: \${projectInfo.technologies.join(', '^)}
echo.
echo ## 檔案結構
echo \${Object.keys(projectInfo.structure^).map(file => \`- \${file}: \${projectInfo.structure[file].lines} 行, \${projectInfo.structure[file].size} KB\`^).join('\n'^)}
echo.
echo ## 架構模式
echo \${projectInfo.patterns.map(pattern => \`- \${pattern}\`^).join('\n'^)}
echo.
echo ## 建議
echo 1. 保持模組化架構
echo 2. 定期優化性能
echo 3. 更新技術棧
echo \`;
echo     
echo     fs.writeFileSync('project_analysis_report.md', report^);
echo     console.log('✅ 專案架構分析完成！'^);
echo     console.log('📊 分析報告已生成: project_analysis_report.md'^);
echo }
echo.
echo projectAnalyzer(^);
) > temp_project_analyzer.js
goto :eof

:create_readme_generator
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // README文檔生成器
echo function readmeGenerator() {
echo     console.log('📖 開始生成README文檔...'^);
echo     
echo     const readme = \`# AI開發網站術語大全
echo.
echo ## 專案簡介
echo 這是一個專業的AI開發網站術語大全，包含前端、後端、UI/UX設計等專業術語和AI指令模板，幫助開發者快速掌握現代網頁技術。
echo.
echo ## 主要功能
echo - 📚 術語詞典：完整的技術術語解釋
echo - 🤖 AI指令：實用的AI開發指令模板
echo - 🎨 模板庫：各種網頁設計模板
echo - 🔧 開發工具：專案分析和優化工具
echo.
echo ## 技術棧
echo - HTML5
echo - CSS3
echo - JavaScript ES6+
echo - 響應式設計
echo - 模組化架構
echo.
echo ## 安裝和使用
echo 1. 下載或克隆此專案
echo 2. 直接在瀏覽器中開啟 index.html
echo 3. 或使用本地伺服器運行
echo.
echo ## 專案結構
echo \`
echo     + \`\`
echo     ├── index.html          # 主頁面
echo     ├── css-modules/        # CSS模組
echo     │   ├── main.css
echo     │   ├── variables.css
echo     │   └── ...
echo     ├── js-modules/         # JavaScript模組
echo     │   ├── main.js
echo     │   ├── core.js
echo     │   └── ...
echo     └── html-parts/         # HTML模組
echo         ├── terminology-data.html
echo         └── ...
echo     \`\`
echo     + \`
echo.
echo ## 開發指南
echo 1. 遵循模組化開發原則
echo 2. 保持代碼整潔和註解
echo 3. 測試不同設備的響應式效果
echo 4. 定期優化性能和載入速度
echo.
echo ## 貢獻指南
echo 歡迎提交 Issue 和 Pull Request 來改進此專案。
echo.
echo ## 授權
echo MIT License
echo \`;
echo     
echo     fs.writeFileSync('README.md', readme^);
echo     console.log('✅ README文檔生成完成！'^);
echo }
echo.
echo readmeGenerator(^);
) > temp_readme_generator.js
goto :eof

:create_backup_tool
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 自動備份工具
echo function backupTool() {
echo     console.log('🔄 開始自動備份...'^);
echo     
echo     const backupDir = 'backups_' + new Date(^).toISOString(^).slice(0, 10^);
echo     if (!fs.existsSync(backupDir^)) {
echo         fs.mkdirSync(backupDir^);
echo     }
echo     
echo     const files = ['index.html', 'script.js', 'styles.css'];
echo     const backupList = [];
echo     
echo     files.forEach(file => {
echo         if (fs.existsSync(file^)) {
echo             const timestamp = new Date(^).toISOString(^).replace(/[:.]/g, '-'^);
echo             const backupFile = \`\${file}.\${timestamp}.backup\`;
echo             const backupPath = path.join(backupDir, backupFile^);
echo             
echo             fs.copyFileSync(file, backupPath^);
echo             backupList.push(backupFile^);
echo             console.log('✅ 備份:', file, '->', backupFile^);
echo         }
echo     }^);
echo     
echo     // 生成備份清單
echo     const backupManifest = \`# 備份清單
echo 備份時間: \${new Date(^).toISOString(^)}
echo 備份檔案:
echo \${backupList.map(file => \`- \${file}\`^).join('\n'^)}
echo \`;
echo     
echo     fs.writeFileSync(path.join(backupDir, 'backup_manifest.md'^), backupManifest^);
echo     console.log('✅ 自動備份完成！'^);
echo     console.log('📁 備份位置:', backupDir^);
echo }
echo.
echo backupTool(^);
) > temp_backup_tool.js
goto :eof

:create_performance_monitor
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 性能監控工具
echo function performanceMonitor() {
echo     console.log('📊 開始性能監控...'^);
echo     
echo     const performance = {
echo         timestamp: new Date(^).toISOString(^),
echo         files: {},
echo         recommendations: []
echo     };
echo     
echo     // 分析檔案大小
echo     const files = ['index.html', 'script.js', 'styles.css'];
echo     files.forEach(file => {
echo         if (fs.existsSync(file^)) {
echo             const stats = fs.statSync(file^);
echo             const sizeKB = Math.round(stats.size / 1024^);
echo             
echo             performance.files[file] = {
echo                 size: sizeKB,
echo                 status: sizeKB > 100 ? '需要優化' : '正常'
echo             };
echo             
echo             if (sizeKB > 100^) {
echo                 performance.recommendations.push(\`\${file} 檔案過大 (\${sizeKB}KB^)，建議分割或壓縮\`^);
echo             }
echo         }
echo     }^);
echo     
echo     // 檢查模組化
echo     if (!fs.existsSync('js-modules'^) && fs.existsSync('script.js'^)) {
echo         performance.recommendations.push('建議將 script.js 分割成模組'^);
echo     }
echo     if (!fs.existsSync('css-modules'^) && fs.existsSync('styles.css'^)) {
echo         performance.recommendations.push('建議將 styles.css 分割成模組'^);
echo     }
echo     
echo     // 生成性能報告
echo     const report = \`# 性能監控報告
echo 監控時間: \${performance.timestamp}
echo.
echo ## 檔案大小分析
echo \${Object.keys(performance.files^).map(file => \`- \${file}: \${performance.files[file].size}KB (\${performance.files[file].status}^)\`^).join('\n'^)}
echo.
echo ## 優化建議
echo \${performance.recommendations.map(rec => \`- \${rec}\`^).join('\n'^)}
echo \`;
echo     
echo     fs.writeFileSync('performance_report.md', report^);
echo     console.log('✅ 性能監控完成！'^);
echo     console.log('📊 性能報告已生成: performance_report.md'^);
echo }
echo.
echo performanceMonitor(^);
) > temp_performance_monitor.js
goto :eof

:create_testing_tool
(
echo const fs = require('fs'^);
echo const path = require('path'^);
echo.
echo // 代碼測試工具
echo function testingTool() {
echo     console.log('🧪 開始代碼測試...'^);
echo     
echo     const testResults = {
echo         timestamp: new Date(^).toISOString(^),
echo         files: {},
echo         issues: [],
echo         passed: 0,
echo         failed: 0
echo     };
echo     
echo     // 測試 HTML 檔案
echo     if (fs.existsSync('index.html'^)) {
echo         const htmlContent = fs.readFileSync('index.html', 'utf8'^);
echo         const htmlTests = {
echo             hasDoctype: htmlContent.includes('<!DOCTYPE'^),
echo             hasTitle: htmlContent.includes('<title'^),
echo             hasMeta: htmlContent.includes('<meta'^),
echo             hasViewport: htmlContent.includes('viewport'^)
echo         };
echo         
echo         testResults.files['index.html'] = htmlTests;
echo         Object.values(htmlTests^).forEach(test => test ? testResults.passed++ : testResults.failed++^);
echo     }
echo     
echo     // 測試 CSS 檔案
echo     if (fs.existsSync('styles.css'^)) {
echo         const cssContent = fs.readFileSync('styles.css', 'utf8'^);
echo         const cssTests = {
echo             hasReset: cssContent.includes('margin: 0'^) || cssContent.includes('* {'^),
echo             hasResponsive: cssContent.includes('@media'^),
echo             hasVariables: cssContent.includes(':root'^) || cssContent.includes('--'^),
echo             noImportant: !cssContent.includes('!important'^)
echo         };
echo         
echo         testResults.files['styles.css'] = cssTests;
echo         Object.values(cssTests^).forEach(test => test ? testResults.passed++ : testResults.failed++^);
echo     }
echo     
echo     // 測試 JavaScript 檔案
echo     if (fs.existsSync('script.js'^)) {
echo         const jsContent = fs.readFileSync('script.js', 'utf8'^);
echo         const jsTests = {
echo             hasEventListener: jsContent.includes('addEventListener'^),
echo             hasErrorHandling: jsContent.includes('try'^) || jsContent.includes('catch'^),
echo             usesModernJS: jsContent.includes('const '^) || jsContent.includes('let '^),
echo             noConsoleLog: !jsContent.includes('console.log'^)
echo         };
echo         
echo         testResults.files['script.js'] = jsTests;
echo         Object.values(jsTests^).forEach(test => test ? testResults.passed++ : testResults.failed++^);
echo     }
echo     
echo     // 生成測試報告
echo     const report = \`# 代碼測試報告
echo 測試時間: \${testResults.timestamp}
echo 通過測試: \${testResults.passed}
echo 失敗測試: \${testResults.failed}
echo 總測試數: \${testResults.passed + testResults.failed}
echo.
echo ## 測試結果詳情
echo \${Object.keys(testResults.files^).map(file => {
echo         const fileTests = testResults.files[file];
echo         return \`### \${file}
echo \${Object.keys(fileTests^).map(test => \`- \${test}: \${fileTests[test] ? '✅ 通過' : '❌ 失敗'}\`^).join('\n'^)}
echo \`;
echo     }^).join('\n'^)}
echo \`;
echo     
echo     fs.writeFileSync('test_report.md', report^);
echo     console.log('✅ 代碼測試完成！'^);
echo     console.log('📊 測試報告已生成: test_report.md'^);
echo }
echo.
echo testingTool(^);
) > temp_testing_tool.js
goto :eof

echo ✅ 輔助函數文件已創建完成！
echo 📁 文件名: 智能優化工具輔助函數.bat
echo 💡 使用方法: 將此文件與智能優化工具.bat放在同一目錄下
