/* ===========================================
   HTML 優化工具
   功能：將大型 HTML 檔案分割成多個小檔案
   =========================================== */

const fs = require('fs');
const path = require('path');

class HTMLOptimizer {
    constructor() {
        this.sections = {
            head: [],
            header: [],
            navigation: [],
            main: [],
            footer: [],
            scripts: []
        };
        this.dataFiles = {
            terminology: [],
            commands: [],
            templates: []
        };
    }
    
    // 分析 HTML 內容
    analyzeHTML(content) {
        const lines = content.split('\n');
        let currentSection = 'head';
        let inDataSection = false;
        let currentDataSection = '';
        let braceCount = 0;
        
        lines.forEach((line, index) => {
            const trimmed = line.trim();
            
            // 檢測主要區段
            if (trimmed.includes('<head>')) {
                currentSection = 'head';
            } else if (trimmed.includes('</head>')) {
                currentSection = 'header';
            } else if (trimmed.includes('<nav') || trimmed.includes('class="nav')) {
                currentSection = 'navigation';
            } else if (trimmed.includes('<main') || trimmed.includes('class="main')) {
                currentSection = 'main';
            } else if (trimmed.includes('<footer') || trimmed.includes('class="footer')) {
                currentSection = 'footer';
            } else if (trimmed.includes('<script')) {
                currentSection = 'scripts';
            }
            
            // 檢測資料區段
            if (trimmed.includes('class="terminology-card"')) {
                inDataSection = true;
                currentDataSection = 'terminology';
            } else if (trimmed.includes('class="command-card"')) {
                inDataSection = true;
                currentDataSection = 'commands';
            } else if (trimmed.includes('class="template-card"')) {
                inDataSection = true;
                currentDataSection = 'templates';
            }
            
            // 處理資料內容
            if (inDataSection && currentDataSection) {
                this.dataFiles[currentDataSection].push(line);
                
                // 檢測資料區段結束
                if (trimmed.includes('</div>') && currentDataSection === 'terminology') {
                    braceCount++;
                    if (braceCount >= 3) {
                        inDataSection = false;
                        currentDataSection = '';
                        braceCount = 0;
                    }
                } else if (trimmed.includes('</div>') && (currentDataSection === 'commands' || currentDataSection === 'templates')) {
                    braceCount++;
                    if (braceCount >= 2) {
                        inDataSection = false;
                        currentDataSection = '';
                        braceCount = 0;
                    }
                }
            } else {
                // 一般 HTML 內容
                this.sections[currentSection].push(line);
            }
        });
    }
    
    // 生成優化的 HTML 檔案
    generateOptimizedHTML() {
        const htmlDir = 'html-parts';
        if (!fs.existsSync(htmlDir)) {
            fs.mkdirSync(htmlDir);
        }
        
        // 生成主要 HTML 結構
        this.generateMainHTML(htmlDir);
        
        // 生成資料檔案
        this.generateDataFiles(htmlDir);
        
        // 生成載入腳本
        this.generateLoaderScript(htmlDir);
    }
    
    generateMainHTML(dir) {
        const content = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <!-- ===========================================
         META 標籤與基本設定
         =========================================== -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AI開發網站術語總整理，包含前端、後端、UI/UX設計等專業術語和AI指令模板，幫助開發者快速掌握現代網頁技術">
    <meta name="keywords" content="AI開發,網頁設計,術語,前端開發,後端開發,UI/UX,響應式設計,程式設計,技術詞彙,開發者工具">
    <meta name="author" content="AI開發術語網站">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://sky770825.github.io/Aibot888/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sky770825.github.io/Aibot888/">
    <meta property="og:title" content="AI開發網站術語 - 專業網頁設計">
    <meta property="og:description" content="AI開發網站術語總整理，包含前端、後端、UI/UX設計等專業術語和AI指令模板，幫助開發者快速掌握現代網頁技術">
    <meta property="og:image" content="https://sky770825.github.io/Aibot888/images/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sky770825.github.io/Aibot888/">
    <meta property="twitter:title" content="AI開發網站術語 - 專業網頁設計">
    <meta property="twitter:description" content="AI開發網站術語總整理，包含前端、後端、UI/UX設計等專業術語和AI指令模板，幫助開發者快速掌握現代網頁技術">
    <meta property="twitter:image" content="https://sky770825.github.io/Aibot888/images/og-image.jpg">
    
    <!-- ===========================================
         效能優化 Meta 標籤
         =========================================== -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#daa520">
    
    <!-- ===========================================
         頁面標題
         =========================================== -->
    <title>AI開發網站術語大全 | 前端後端UI/UX設計完整指南</title>
    
    <!-- ===========================================
         外部資源載入
         =========================================== -->
    <link rel="stylesheet" href="css-modules/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
    <!-- ===========================================
         效能優化 - Preload 關鍵資源
         =========================================== -->
    <link rel="preload" href="css-modules/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="js-modules/main.js" as="script">
    
    <!-- DNS 預解析 -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
</head>

<body>
    <!-- ===========================================
         頁面載入指示器
         =========================================== -->
    <div id="loadingIndicator" class="loading-indicator">
        <div class="loading-spinner"></div>
        <p>載入中...</p>
    </div>

    <!-- ===========================================
         主要導航欄
         =========================================== -->
    <header class="main-header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-brand">
                    <h1>AI開發網站術語大全</h1>
                </div>
                
                <div class="nav-menu" id="navMenu">
                    <ul class="nav-links">
                        <li><a href="#home" class="nav-link">首頁</a></li>
                        <li><a href="#glossary" class="nav-link">術語詞典</a></li>
                        <li><a href="#commands" class="nav-link">AI指令</a></li>
                        <li><a href="#templates" class="nav-link">模板庫</a></li>
                        <li><a href="#tools" class="nav-link">開發工具</a></li>
                    </ul>
                </div>
                
                <div class="nav-actions">
                    <button id="themeToggle" class="theme-toggle" aria-label="切換主題">
                        <i class="fas fa-moon"></i>
                    </button>
                    <button class="hamburger" id="hamburger" aria-label="開啟選單">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>

    <!-- ===========================================
         主要內容區域
         =========================================== -->
    <main class="main-content">
        <!-- 首頁區段 -->
        <section id="home" class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h2>AI開發網站術語大全</h2>
                    <p>專業的前端、後端、UI/UX設計術語和AI指令模板</p>
                    <div class="hero-actions">
                        <button class="btn btn-primary" onclick="scrollToSection('glossary')">開始學習</button>
                        <button class="btn btn-secondary" onclick="scrollToSection('commands')">AI指令</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 搜尋區段 -->
        <section class="search-section">
            <div class="container">
                <div class="search-container">
                    <div class="search-box">
                        <input type="text" id="smartSearchInput" placeholder="搜尋術語或指令..." class="search-input">
                        <button id="searchBtn" class="search-btn" aria-label="搜尋">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div id="searchResults" class="search-results"></div>
                </div>
            </div>
        </section>

        <!-- 術語詞典區段 -->
        <section id="glossary" class="glossary-section">
            <div class="container">
                <h2 class="section-title">術語詞典</h2>
                <div id="glossaryGrid" class="glossary-grid">
                    <!-- 術語內容將由 JavaScript 動態載入 -->
                </div>
            </div>
        </section>

        <!-- AI指令區段 -->
        <section id="commands" class="commands-section">
            <div class="container">
                <h2 class="section-title">AI指令模板</h2>
                <div id="commandsGrid" class="commands-grid">
                    <!-- 指令內容將由 JavaScript 動態載入 -->
                </div>
            </div>
        </section>

        <!-- 模板庫區段 -->
        <section id="templates" class="templates-section">
            <div class="container">
                <h2 class="section-title">模板庫</h2>
                <div id="templatesGrid" class="templates-grid">
                    <!-- 模板內容將由 JavaScript 動態載入 -->
                </div>
            </div>
        </section>

        <!-- 開發工具區段 -->
        <section id="tools" class="tools-section">
            <div class="container">
                <h2 class="section-title">開發工具</h2>
                <div class="tools-grid">
                    <div class="tool-card">
                        <h3>專案分析器</h3>
                        <p>分析專案結構和程式碼品質</p>
                        <button class="btn btn-primary" onclick="openProjectAnalyzer()">開啟工具</button>
                    </div>
                    <div class="tool-card">
                        <h3>響應式檢測</h3>
                        <p>檢測網站的響應式設計問題</p>
                        <button class="btn btn-primary" onclick="openResponsiveChecker()">開啟工具</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- ===========================================
         頁腳
         =========================================== -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>AI開發網站術語大全</h3>
                    <p>專業的網頁開發術語和AI指令資源</p>
                </div>
                <div class="footer-section">
                    <h4>快速連結</h4>
                    <ul>
                        <li><a href="#glossary">術語詞典</a></li>
                        <li><a href="#commands">AI指令</a></li>
                        <li><a href="#templates">模板庫</a></li>
                        <li><a href="#tools">開發工具</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>技術支援</h4>
                    <ul>
                        <li><a href="#help">使用說明</a></li>
                        <li><a href="#contact">聯絡我們</a></li>
                        <li><a href="#feedback">意見回饋</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 AI開發網站術語大全. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- ===========================================
         JavaScript 載入
         =========================================== -->
    <script src="js-modules/main.js" defer></script>
    <script src="html-parts/loader.js" defer></script>
</body>
</html>`;
        
        fs.writeFileSync(path.join(dir, 'index-optimized.html'), content);
        console.log('✅ 生成 index-optimized.html');
    }
    
    generateDataFiles(dir) {
        // 生成術語資料檔案
        const terminologyData = this.dataFiles.terminology.join('\n');
        if (terminologyData.trim()) {
            fs.writeFileSync(path.join(dir, 'terminology-data.html'), terminologyData);
            console.log('✅ 生成 terminology-data.html');
        }
        
        // 生成指令資料檔案
        const commandsData = this.dataFiles.commands.join('\n');
        if (commandsData.trim()) {
            fs.writeFileSync(path.join(dir, 'commands-data.html'), commandsData);
            console.log('✅ 生成 commands-data.html');
        }
        
        // 生成模板資料檔案
        const templatesData = this.dataFiles.templates.join('\n');
        if (templatesData.trim()) {
            fs.writeFileSync(path.join(dir, 'templates-data.html'), templatesData);
            console.log('✅ 生成 templates-data.html');
        }
    }
    
    generateLoaderScript(dir) {
        const content = `/* ===========================================
   HTML 資料載入器
   功能：動態載入術語、指令和模板資料
   =========================================== */

class DataLoader {
    constructor() {
        this.loadedData = {
            terminology: null,
            commands: null,
            templates: null
        };
        this.loadingPromises = new Map();
    }
    
    // 載入術語資料
    async loadTerminologyData() {
        if (this.loadedData.terminology) {
            return this.loadedData.terminology;
        }
        
        if (this.loadingPromises.has('terminology')) {
            return this.loadingPromises.get('terminology');
        }
        
        const promise = this.fetchHTMLData('html-parts/terminology-data.html');
        this.loadingPromises.set('terminology', promise);
        
        try {
            this.loadedData.terminology = await promise;
            return this.loadedData.terminology;
        } finally {
            this.loadingPromises.delete('terminology');
        }
    }
    
    // 載入指令資料
    async loadCommandsData() {
        if (this.loadedData.commands) {
            return this.loadedData.commands;
        }
        
        if (this.loadingPromises.has('commands')) {
            return this.loadingPromises.get('commands');
        }
        
        const promise = this.fetchHTMLData('html-parts/commands-data.html');
        this.loadingPromises.set('commands', promise);
        
        try {
            this.loadedData.commands = await promise;
            return this.loadedData.commands;
        } finally {
            this.loadingPromises.delete('commands');
        }
    }
    
    // 載入模板資料
    async loadTemplatesData() {
        if (this.loadedData.templates) {
            return this.loadedData.templates;
        }
        
        if (this.loadingPromises.has('templates')) {
            return this.loadingPromises.get('templates');
        }
        
        const promise = this.fetchHTMLData('html-parts/templates-data.html');
        this.loadingPromises.set('templates', promise);
        
        try {
            this.loadedData.templates = await promise;
            return this.loadedData.templates;
        } finally {
            this.loadingPromises.delete('templates');
        }
    }
    
    // 獲取 HTML 資料
    async fetchHTMLData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return await response.text();
        } catch (error) {
            console.error('載入資料失敗:', error);
            return '';
        }
    }
    
    // 渲染術語詞典
    async renderTerminology() {
        const container = document.getElementById('glossaryGrid');
        if (!container) return;
        
        try {
            const data = await this.loadTerminologyData();
            container.innerHTML = data;
            console.log('✅ 術語詞典載入完成');
        } catch (error) {
            console.error('術語詞典載入失敗:', error);
            container.innerHTML = '<p>術語詞典載入失敗，請重新整理頁面</p>';
        }
    }
    
    // 渲染指令列表
    async renderCommands() {
        const container = document.getElementById('commandsGrid');
        if (!container) return;
        
        try {
            const data = await this.loadCommandsData();
            container.innerHTML = data;
            console.log('✅ 指令列表載入完成');
        } catch (error) {
            console.error('指令列表載入失敗:', error);
            container.innerHTML = '<p>指令列表載入失敗，請重新整理頁面</p>';
        }
    }
    
    // 渲染模板庫
    async renderTemplates() {
        const container = document.getElementById('templatesGrid');
        if (!container) return;
        
        try {
            const data = await this.loadTemplatesData();
            container.innerHTML = data;
            console.log('✅ 模板庫載入完成');
        } catch (error) {
            console.error('模板庫載入失敗:', error);
            container.innerHTML = '<p>模板庫載入失敗，請重新整理頁面</p>';
        }
    }
    
    // 初始化載入器
    init() {
        // 隱藏載入指示器
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
            }, 1000);
        }
        
        // 載入初始內容
        this.renderTerminology();
        
        // 當用戶滾動到對應區段時載入內容
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId === 'commands') {
                        this.renderCommands();
                    } else if (sectionId === 'templates') {
                        this.renderTemplates();
                    }
                }
            });
        }, { threshold: 0.1 });
        
        // 觀察指令和模板區段
        const commandsSection = document.getElementById('commands');
        const templatesSection = document.getElementById('templates');
        
        if (commandsSection) observer.observe(commandsSection);
        if (templatesSection) observer.observe(templatesSection);
        
        console.log('✅ 資料載入器初始化完成');
    }
}

// 全域函數
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function openProjectAnalyzer() {
    alert('專案分析器功能開發中...');
}

function openResponsiveChecker() {
    alert('響應式檢測工具功能開發中...');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    window.dataLoader = new DataLoader();
    window.dataLoader.init();
});
`;
        
        fs.writeFileSync(path.join(dir, 'loader.js'), content);
        console.log('✅ 生成 loader.js');
    }
    
    // 主要執行函數
    run() {
        console.log('🚀 開始優化 HTML 檔案...\n');
        
        try {
            const content = fs.readFileSync('index.html', 'utf8');
            this.analyzeHTML(content);
            this.generateOptimizedHTML();
            
            console.log('\n🎉 HTML 優化完成！');
            console.log('\n📁 生成的檔案：');
            console.log('   - html-parts/index-optimized.html (優化後的主頁面)');
            console.log('   - html-parts/terminology-data.html (術語資料)');
            console.log('   - html-parts/commands-data.html (指令資料)');
            console.log('   - html-parts/templates-data.html (模板資料)');
            console.log('   - html-parts/loader.js (資料載入器)');
            
            console.log('\n💡 使用方式：');
            console.log('   1. 將 index-optimized.html 重新命名為 index.html');
            console.log('   2. 重新整理頁面測試功能');
            console.log('   3. 資料將按需載入，提升載入速度');
            
        } catch (error) {
            console.error('❌ HTML 優化失敗:', error.message);
        }
    }
}

// 如果直接運行此腳本
if (require.main === module) {
    const optimizer = new HTMLOptimizer();
    optimizer.run();
}

module.exports = HTMLOptimizer;
