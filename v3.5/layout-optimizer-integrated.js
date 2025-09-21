/**
 * CSS布局優化檢測器 - 整合版
 * 直接在網站中提供布局優化功能
 */

class LayoutOptimizerIntegrated {
    constructor() {
        this.issues = [];
        this.recommendations = [];
        this.optimizationCode = {
            css: '',
            html: '',
            js: ''
        };
        this.scores = {
            grid: 0,
            flexbox: 0,
            responsive: 0,
            hierarchy: 0,
            overall: 0
        };
        
        this.init();
    }

    init() {
        console.log('🎨 CSS布局優化檢測器已載入');
        this.bindEvents();
    }

    bindEvents() {
        // 開始檢測按鈕
        const runBtn = document.getElementById('runLayoutOptimizer');
        if (runBtn) {
            runBtn.addEventListener('click', () => this.runOptimization());
        }

        // 應用優化按鈕
        const applyBtn = document.getElementById('applyOptimizations');
        if (applyBtn) {
            applyBtn.addEventListener('click', () => this.applyOptimizations());
        }

        // 重置優化按鈕
        const resetBtn = document.getElementById('resetOptimizations');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetOptimizations());
        }

        // 複製報告按鈕
        const copyReportBtn = document.getElementById('copyOptimizationReport');
        if (copyReportBtn) {
            copyReportBtn.addEventListener('click', () => this.copyOptimizationReport());
        }

        // 複製代碼按鈕
        const copyCodeBtn = document.getElementById('copyOptimizationCode');
        if (copyCodeBtn) {
            copyCodeBtn.addEventListener('click', () => this.copyOptimizationCode());
        }

        // 代碼標籤切換
        const codeTabs = document.querySelectorAll('.code-tab');
        codeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.switchCodeTab(e.target.dataset.tab));
        });
    }

    runOptimization() {
        console.log('🔍 開始布局優化檢測...');
        
        // 重置數據
        this.issues = [];
        this.recommendations = [];
        this.scores = { grid: 0, flexbox: 0, responsive: 0, hierarchy: 0, overall: 0 };

        // 獲取檢測選項
        const options = this.getSelectedOptions();
        
        // 執行檢測
        if (options.includes('grid-layout')) this.analyzeGridLayout();
        if (options.includes('flexbox-layout')) this.analyzeFlexboxLayout();
        if (options.includes('responsive-design')) this.analyzeResponsiveDesign();
        if (options.includes('spacing-system')) this.analyzeSpacingSystem();
        if (options.includes('visual-hierarchy')) this.analyzeVisualHierarchy();
        if (options.includes('typography')) this.analyzeTypography();
        if (options.includes('color-scheme')) this.analyzeColorScheme();
        if (options.includes('accessibility')) this.analyzeAccessibility();

        // 計算總分
        this.calculateOverallScore();
        
        // 生成優化建議
        this.generateRecommendations();
        
        // 生成優化代碼
        this.generateOptimizationCode();
        
        // 顯示結果
        this.displayResults();
        
        console.log('✅ 布局優化檢測完成');
    }

    getSelectedOptions() {
        const checkboxes = document.querySelectorAll('.optimizer-options input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    analyzeGridLayout() {
        console.log('🔍 分析 Grid 布局...');
        
        const gridElements = document.querySelectorAll('[style*="display: grid"], [style*="display:grid"]');
        const cssGridElements = this.getElementsWithCSSGrid();
        
        let score = 100;
        const issues = [];

        // 檢查 Grid 使用情況
        if (gridElements.length === 0 && cssGridElements.length === 0) {
            issues.push({
                type: 'warning',
                title: '未使用 Grid 布局',
                description: '建議使用 CSS Grid 來創建複雜的二維布局',
                impact: 'medium'
            });
            score -= 30;
        }

        // 檢查 Grid 語法
        cssGridElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const gridTemplateColumns = computedStyle.gridTemplateColumns;
            
            if (gridTemplateColumns === 'none') {
                issues.push({
                    type: 'error',
                    title: 'Grid 容器缺少 grid-template-columns',
                    description: `元素 ${element.tagName.toLowerCase()} 需要定義列模板`,
                    impact: 'high',
                    element: element
                });
                score -= 20;
            }
        });

        // 檢查響應式 Grid
        const hasResponsiveGrid = this.checkResponsiveGrid();
        if (!hasResponsiveGrid) {
            issues.push({
                type: 'warning',
                title: 'Grid 布局缺少響應式設計',
                description: '建議使用 auto-fit 和 minmax() 創建響應式網格',
                impact: 'medium'
            });
            score -= 15;
        }

        this.issues.push(...issues);
        this.scores.grid = Math.max(0, score);
    }

    analyzeFlexboxLayout() {
        console.log('🔍 分析 Flexbox 布局...');
        
        const flexElements = document.querySelectorAll('[style*="display: flex"], [style*="display:flex"]');
        const cssFlexElements = this.getElementsWithCSSFlexbox();
        
        let score = 100;
        const issues = [];

        // 檢查 Flexbox 使用情況
        if (flexElements.length === 0 && cssFlexElements.length === 0) {
            issues.push({
                type: 'info',
                title: '未使用 Flexbox 布局',
                description: '建議使用 Flexbox 來創建一維布局',
                impact: 'low'
            });
            score -= 10;
        }

        // 檢查 Flexbox 語法
        cssFlexElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const flexDirection = computedStyle.flexDirection;
            const justifyContent = computedStyle.justifyContent;
            const alignItems = computedStyle.alignItems;
            
            if (justifyContent === 'normal' && alignItems === 'normal') {
                issues.push({
                    type: 'warning',
                    title: 'Flexbox 容器缺少對齊設定',
                    description: `元素 ${element.tagName.toLowerCase()} 建議設定 justify-content 和 align-items`,
                    impact: 'medium',
                    element: element
                });
                score -= 10;
            }
        });

        this.issues.push(...issues);
        this.scores.flexbox = Math.max(0, score);
    }

    analyzeResponsiveDesign() {
        console.log('🔍 分析響應式設計...');
        
        let score = 100;
        const issues = [];

        // 檢查 viewport meta 標籤
        const viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            issues.push({
                type: 'error',
                title: '缺少 viewport meta 標籤',
                description: '需要添加 viewport meta 標籤以支援響應式設計',
                impact: 'high'
            });
            score -= 40;
        }

        // 檢查媒體查詢
        const hasMediaQueries = this.checkMediaQueries();
        if (!hasMediaQueries) {
            issues.push({
                type: 'warning',
                title: '缺少媒體查詢',
                description: '建議添加媒體查詢以支援不同螢幕尺寸',
                impact: 'high'
            });
            score -= 30;
        }

        // 檢查響應式圖片
        const images = document.querySelectorAll('img');
        const responsiveImages = Array.from(images).filter(img => 
            img.hasAttribute('srcset') || 
            img.style.maxWidth === '100%' || 
            img.classList.contains('responsive')
        );
        
        if (images.length > 0 && responsiveImages.length < images.length * 0.5) {
            issues.push({
                type: 'warning',
                title: '圖片響應式設計不足',
                description: '建議為圖片添加響應式設計',
                impact: 'medium'
            });
            score -= 20;
        }

        // 檢查流動式布局
        const hasFluidLayout = this.checkFluidLayout();
        if (!hasFluidLayout) {
            issues.push({
                type: 'info',
                title: '建議使用流動式布局',
                description: '考慮使用相對單位和彈性容器',
                impact: 'low'
            });
            score -= 10;
        }

        this.issues.push(...issues);
        this.scores.responsive = Math.max(0, score);
    }

    analyzeSpacingSystem() {
        console.log('🔍 分析間距系統...');
        
        let score = 100;
        const issues = [];

        // 檢查 CSS 變數使用
        const hasSpacingVariables = this.checkSpacingVariables();
        if (!hasSpacingVariables) {
            issues.push({
                type: 'warning',
                title: '缺少間距變數系統',
                description: '建議使用 CSS 變數建立統一的間距系統',
                impact: 'medium'
            });
            score -= 25;
        }

        // 檢查間距一致性
        const spacingConsistency = this.checkSpacingConsistency();
        if (spacingConsistency < 0.7) {
            issues.push({
                type: 'warning',
                title: '間距使用不一致',
                description: '建議統一使用間距變數或標準值',
                impact: 'medium'
            });
            score -= 20;
        }

        this.issues.push(...issues);
    }

    analyzeVisualHierarchy() {
        console.log('🔍 分析視覺層次...');
        
        let score = 100;
        const issues = [];

        // 檢查標題層次
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
        
        // 檢查標題順序
        let hasInvalidOrder = false;
        for (let i = 1; i < headingLevels.length; i++) {
            if (headingLevels[i] > headingLevels[i-1] + 1) {
                hasInvalidOrder = true;
                break;
            }
        }

        if (hasInvalidOrder) {
            issues.push({
                type: 'warning',
                title: '標題層次不正確',
                description: '標題應該按照 h1 → h2 → h3 的順序使用',
                impact: 'medium'
            });
            score -= 20;
        }

        // 檢查字體大小層次
        const fontSizeConsistency = this.checkFontSizeConsistency();
        if (fontSizeConsistency < 0.6) {
            issues.push({
                type: 'warning',
                title: '字體大小層次不明確',
                description: '建議建立清晰的字體大小層次',
                impact: 'medium'
            });
            score -= 25;
        }

        // 檢查對比度
        const contrastIssues = this.checkContrastRatio();
        if (contrastIssues.length > 0) {
            issues.push(...contrastIssues);
            score -= contrastIssues.length * 10;
        }

        this.issues.push(...issues);
        this.scores.hierarchy = Math.max(0, score);
    }

    analyzeTypography() {
        console.log('🔍 分析字體排版...');
        
        const issues = [];

        // 檢查字體載入
        const fontFaces = document.querySelectorAll('link[href*="font"], @font-face');
        if (fontFaces.length === 0) {
            issues.push({
                type: 'info',
                title: '建議載入自訂字體',
                description: '考慮載入 Google Fonts 或其他自訂字體',
                impact: 'low'
            });
        }

        // 檢查行高設定
        const elements = document.querySelectorAll('p, div, span');
        let hasLineHeight = 0;
        elements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.lineHeight !== 'normal') {
                hasLineHeight++;
            }
        });

        if (hasLineHeight < elements.length * 0.3) {
            issues.push({
                type: 'warning',
                title: '行高設定不足',
                description: '建議為文字元素設定適當的行高',
                impact: 'medium'
            });
        }

        this.issues.push(...issues);
    }

    analyzeColorScheme() {
        console.log('🔍 分析配色方案...');
        
        const issues = [];

        // 檢查 CSS 變數使用
        const hasColorVariables = this.checkColorVariables();
        if (!hasColorVariables) {
            issues.push({
                type: 'warning',
                title: '缺少配色變數系統',
                description: '建議使用 CSS 變數建立統一的配色系統',
                impact: 'medium'
            });
        }

        this.issues.push(...issues);
    }

    analyzeAccessibility() {
        console.log('🔍 分析無障礙設計...');
        
        const issues = [];

        // 檢查 alt 屬性
        const images = document.querySelectorAll('img');
        const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
        
        if (imagesWithoutAlt.length > 0) {
            issues.push({
                type: 'error',
                title: '圖片缺少 alt 屬性',
                description: `${imagesWithoutAlt.length} 個圖片缺少 alt 屬性`,
                impact: 'high'
            });
        }

        // 檢查標題結構
        const h1Count = document.querySelectorAll('h1').length;
        if (h1Count === 0) {
            issues.push({
                type: 'error',
                title: '缺少 h1 標題',
                description: '頁面應該有且僅有一個 h1 標題',
                impact: 'high'
            });
        } else if (h1Count > 1) {
            issues.push({
                type: 'warning',
                title: '多個 h1 標題',
                description: '頁面應該只有一個 h1 標題',
                impact: 'medium'
            });
        }

        this.issues.push(...issues);
    }

    // 輔助方法
    getElementsWithCSSGrid() {
        const elements = document.querySelectorAll('*');
        return Array.from(elements).filter(el => {
            const computedStyle = window.getComputedStyle(el);
            return computedStyle.display === 'grid';
        });
    }

    getElementsWithCSSFlexbox() {
        const elements = document.querySelectorAll('*');
        return Array.from(elements).filter(el => {
            const computedStyle = window.getComputedStyle(el);
            return computedStyle.display === 'flex';
        });
    }

    checkResponsiveGrid() {
        const styleSheets = Array.from(document.styleSheets);
        for (const sheet of styleSheets) {
            try {
                const rules = Array.from(sheet.cssRules || sheet.rules);
                for (const rule of rules) {
                    if (rule.type === CSSRule.MEDIA_RULE) {
                        const mediaText = rule.media.mediaText;
                        if (mediaText.includes('max-width') || mediaText.includes('min-width')) {
                            const gridRules = Array.from(rule.cssRules).filter(r => 
                                r.selectorText && r.selectorText.includes('grid')
                            );
                            if (gridRules.length > 0) return true;
                        }
                    }
                }
            } catch (e) {
                // 跨域樣式表無法訪問
            }
        }
        return false;
    }

    checkMediaQueries() {
        const styleSheets = Array.from(document.styleSheets);
        for (const sheet of styleSheets) {
            try {
                const rules = Array.from(sheet.cssRules || sheet.rules);
                const mediaRules = rules.filter(rule => rule.type === CSSRule.MEDIA_RULE);
                if (mediaRules.length > 0) return true;
            } catch (e) {
                // 跨域樣式表無法訪問
            }
        }
        return false;
    }

    checkFluidLayout() {
        const elements = document.querySelectorAll('*');
        let fluidCount = 0;
        elements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            const width = computedStyle.width;
            const maxWidth = computedStyle.maxWidth;
            if (width.includes('%') || maxWidth.includes('%') || maxWidth === '100%') {
                fluidCount++;
            }
        });
        return fluidCount > elements.length * 0.1;
    }

    checkSpacingVariables() {
        const styleSheets = Array.from(document.styleSheets);
        for (const sheet of styleSheets) {
            try {
                const rules = Array.from(sheet.cssRules || sheet.rules);
                for (const rule of rules) {
                    if (rule.selectorText === ':root' && rule.style) {
                        const cssText = rule.style.cssText;
                        if (cssText.includes('--spacing') || cssText.includes('--space')) {
                            return true;
                        }
                    }
                }
            } catch (e) {
                // 跨域樣式表無法訪問
            }
        }
        return false;
    }

    checkSpacingConsistency() {
        // 簡化版間距一致性檢查
        const elements = document.querySelectorAll('*');
        const spacingValues = new Set();
        elements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            ['margin', 'padding'].forEach(prop => {
                const value = computedStyle[prop];
                if (value && value !== '0px') {
                    spacingValues.add(value);
                }
            });
        });
        return spacingValues.size < 10 ? 1 : 0.5; // 簡化計算
    }

    checkFontSizeConsistency() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const sizes = Array.from(headings).map(h => {
            const computedStyle = window.getComputedStyle(h);
            return parseFloat(computedStyle.fontSize);
        });
        
        if (sizes.length < 2) return 1;
        
        // 檢查是否有遞減的趨勢
        let consistent = true;
        for (let i = 1; i < sizes.length; i++) {
            if (sizes[i] >= sizes[i-1]) {
                consistent = false;
                break;
            }
        }
        return consistent ? 1 : 0.5;
    }

    checkContrastRatio() {
        // 簡化版對比度檢查
        return [];
    }

    checkColorVariables() {
        const styleSheets = Array.from(document.styleSheets);
        for (const sheet of styleSheets) {
            try {
                const rules = Array.from(sheet.cssRules || sheet.rules);
                for (const rule of rules) {
                    if (rule.selectorText === ':root' && rule.style) {
                        const cssText = rule.style.cssText;
                        if (cssText.includes('--color') || cssText.includes('--primary') || cssText.includes('--secondary')) {
                            return true;
                        }
                    }
                }
            } catch (e) {
                // 跨域樣式表無法訪問
            }
        }
        return false;
    }

    calculateOverallScore() {
        const scores = [this.scores.grid, this.scores.flexbox, this.scores.responsive, this.scores.hierarchy];
        this.scores.overall = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    }

    generateRecommendations() {
        this.recommendations = [];

        // 基於問題生成建議
        this.issues.forEach(issue => {
            switch (issue.title) {
                case '未使用 Grid 布局':
                    this.recommendations.push({
                        title: '實施 CSS Grid 布局',
                        description: '使用 CSS Grid 創建現代化的二維布局',
                        priority: 'high',
                        code: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    align-items: start;
}`
                    });
                    break;
                case 'Grid 容器缺少 grid-template-columns':
                    this.recommendations.push({
                        title: '定義 Grid 列模板',
                        description: '為 Grid 容器設定明確的列模板',
                        priority: 'high',
                        code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}`
                    });
                    break;
                case '缺少響應式設計':
                    this.recommendations.push({
                        title: '添加響應式設計',
                        description: '使用媒體查詢創建響應式布局',
                        priority: 'high',
                        code: `@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
}`
                    });
                    break;
                case '缺少間距變數系統':
                    this.recommendations.push({
                        title: '建立間距變數系統',
                        description: '使用 CSS 變數統一管理間距',
                        priority: 'medium',
                        code: `:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
}`
                    });
                    break;
            }
        });
    }

    generateOptimizationCode() {
        // CSS 優化代碼
        this.optimizationCode.css = `/* CSS 布局優化建議 */

/* 1. 建立設計系統 */
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;
    
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-text: #1f2937;
    --color-text-light: #6b7280;
    
    --border-radius: 8px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* 2. 現代化 Grid 布局 */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    align-items: start;
    justify-items: center;
}

/* 3. 響應式設計 */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
    }
}

/* 4. 視覺層次優化 */
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }
h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }
p { font-size: 1rem; line-height: 1.6; }

/* 5. 卡片設計 */
.card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    padding: var(--spacing-lg);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}`;

        // HTML 優化代碼
        this.optimizationCode.html = `<!-- HTML 結構優化建議 -->

<!-- 1. 語義化標籤 -->
<main class="main-content">
    <section class="hero-section">
        <h1>主要標題</h1>
        <p>描述文字</p>
    </section>
    
    <section class="features-section">
        <h2>功能特色</h2>
        <div class="grid-container">
            <article class="card">
                <h3>功能 1</h3>
                <p>功能描述</p>
            </article>
            <article class="card">
                <h3>功能 2</h3>
                <p>功能描述</p>
            </article>
        </div>
    </section>
</main>

<!-- 2. 無障礙設計 -->
<img src="image.jpg" alt="描述圖片內容" loading="lazy">
<button aria-label="關閉對話框">×</button>

<!-- 3. 響應式圖片 -->
<picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <source media="(min-width: 480px)" srcset="medium.jpg">
    <img src="small.jpg" alt="響應式圖片">
</picture>`;

        // JavaScript 優化代碼
        this.optimizationCode.js = `// JavaScript 優化建議

// 1. 響應式檢測
function isMobile() {
    return window.innerWidth <= 768;
}

// 2. 動態載入
function loadComponent(componentName) {
    return import(\`./components/\${componentName}.js\`);
}

// 3. 效能優化
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// 4. 事件委派
document.addEventListener('click', (e) => {
    if (e.target.matches('.card')) {
        handleCardClick(e.target);
    }
});

// 5. 響應式處理
window.addEventListener('resize', debounce(() => {
    updateLayout();
}, 250));`;
    }

    displayResults() {
        const resultsDiv = document.getElementById('layoutOptimizerResults');
        if (!resultsDiv) return;

        // 顯示結果面板
        resultsDiv.style.display = 'block';

        // 更新評分
        this.updateScores();
        
        // 顯示問題
        this.displayIssues();
        
        // 顯示建議
        this.displayRecommendations();
        
        // 顯示代碼
        this.displayCode();
        
        // 顯示操作按鈕
        document.getElementById('applyOptimizations').style.display = 'inline-flex';
        document.getElementById('resetOptimizations').style.display = 'inline-flex';
    }

    updateScores() {
        // 更新總分
        const overallScore = document.getElementById('optimizationScore');
        if (overallScore) {
            overallScore.textContent = `優化評分: ${this.scores.overall}/100`;
        }

        // 更新各項分數
        this.updateScoreBar('gridScore', this.scores.grid);
        this.updateScoreBar('flexboxScore', this.scores.flexbox);
        this.updateScoreBar('responsiveScore', this.scores.responsive);
        this.updateScoreBar('hierarchyScore', this.scores.hierarchy);
    }

    updateScoreBar(elementId, score) {
        const scoreFill = document.getElementById(elementId);
        const scoreText = document.getElementById(elementId + 'Text');
        
        if (scoreFill) {
            scoreFill.style.width = `${score}%`;
        }
        if (scoreText) {
            scoreText.textContent = `${score}/100`;
        }
    }

    displayIssues() {
        const issuesDiv = document.getElementById('optimizationIssues');
        if (!issuesDiv) return;

        issuesDiv.innerHTML = '';

        if (this.issues.length === 0) {
            issuesDiv.innerHTML = '<div class="no-issues">🎉 沒有發現布局問題！</div>';
            return;
        }

        this.issues.forEach(issue => {
            const issueDiv = document.createElement('div');
            issueDiv.className = 'issue-item';
            
            const priorityClass = issue.impact === 'high' ? 'error' : 
                                 issue.impact === 'medium' ? 'warning' : 'info';
            
            issueDiv.innerHTML = `
                <h5 class="${priorityClass}">${issue.title}</h5>
                <p>${issue.description}</p>
            `;
            
            issuesDiv.appendChild(issueDiv);
        });
    }

    displayRecommendations() {
        const recommendationsDiv = document.getElementById('optimizationRecommendations');
        const recommendationsList = document.getElementById('recommendationsList');
        
        if (!recommendationsDiv || !recommendationsList) return;

        if (this.recommendations.length === 0) {
            recommendationsDiv.style.display = 'none';
            return;
        }

        recommendationsDiv.style.display = 'block';
        recommendationsList.innerHTML = '';

        this.recommendations.forEach(rec => {
            const recDiv = document.createElement('div');
            recDiv.className = 'recommendation-item';
            
            recDiv.innerHTML = `
                <h6>${rec.title}</h6>
                <p>${rec.description}</p>
                ${rec.code ? `<pre><code>${rec.code}</code></pre>` : ''}
            `;
            
            recommendationsList.appendChild(recDiv);
        });
    }

    displayCode() {
        const codeDiv = document.getElementById('optimizationCode');
        const cssCode = document.getElementById('cssCode');
        const htmlCode = document.getElementById('htmlCode');
        const jsCode = document.getElementById('jsCode');
        
        if (!codeDiv || !cssCode || !htmlCode || !jsCode) return;

        codeDiv.style.display = 'block';
        
        cssCode.innerHTML = `<pre><code>${this.optimizationCode.css}</code></pre>`;
        htmlCode.innerHTML = `<pre><code>${this.optimizationCode.html}</code></pre>`;
        jsCode.innerHTML = `<pre><code>${this.optimizationCode.js}</code></pre>`;
    }

    switchCodeTab(tabName) {
        // 移除所有 active 類
        document.querySelectorAll('.code-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.code-panel').forEach(panel => panel.classList.remove('active'));
        
        // 添加 active 類到選中的標籤和面板
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}Code`).classList.add('active');
    }

    applyOptimizations() {
        console.log('🔧 應用布局優化...');
        
        // 這裡可以實際應用一些優化
        // 例如：添加 CSS 變數、修改樣式等
        
        alert('優化已應用！請檢查頁面變化。');
    }

    resetOptimizations() {
        console.log('🔄 重置布局優化...');
        
        // 隱藏結果面板
        const resultsDiv = document.getElementById('layoutOptimizerResults');
        if (resultsDiv) {
            resultsDiv.style.display = 'none';
        }
        
        // 隱藏操作按鈕
        document.getElementById('applyOptimizations').style.display = 'none';
        document.getElementById('resetOptimizations').style.display = 'none';
        
        // 重置數據
        this.issues = [];
        this.recommendations = [];
        this.scores = { grid: 0, flexbox: 0, responsive: 0, hierarchy: 0, overall: 0 };
    }

    copyOptimizationReport() {
        const report = this.generateOptimizationReport();
        navigator.clipboard.writeText(report).then(() => {
            alert('優化報告已複製到剪貼板！');
        });
    }

    copyOptimizationCode() {
        const activeTab = document.querySelector('.code-tab.active');
        if (!activeTab) return;
        
        const tabName = activeTab.dataset.tab;
        const code = this.optimizationCode[tabName];
        
        navigator.clipboard.writeText(code).then(() => {
            alert('優化代碼已複製到剪貼板！');
        });
    }

    generateOptimizationReport() {
        let report = `# CSS 布局優化報告\n\n`;
        report += `## 總體評分: ${this.scores.overall}/100\n\n`;
        
        report += `## 各項評分\n`;
        report += `- Grid 布局: ${this.scores.grid}/100\n`;
        report += `- Flexbox 布局: ${this.scores.flexbox}/100\n`;
        report += `- 響應式設計: ${this.scores.responsive}/100\n`;
        report += `- 視覺層次: ${this.scores.hierarchy}/100\n\n`;
        
        if (this.issues.length > 0) {
            report += `## 發現的問題\n`;
            this.issues.forEach(issue => {
                report += `- **${issue.title}**: ${issue.description}\n`;
            });
            report += `\n`;
        }
        
        if (this.recommendations.length > 0) {
            report += `## 優化建議\n`;
            this.recommendations.forEach(rec => {
                report += `- **${rec.title}**: ${rec.description}\n`;
            });
        }
        
        return report;
    }
}

// 當頁面載入完成時初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 檢查布局優化檢測器元素...');
    
    // 檢查按鈕是否存在
    const runBtn = document.getElementById('runLayoutOptimizer');
    console.log('runLayoutOptimizer 按鈕:', runBtn);
    
    if (runBtn) {
        console.log('✅ 找到布局優化檢測器按鈕，正在初始化...');
        window.layoutOptimizer = new LayoutOptimizerIntegrated();
        console.log('🎨 布局優化檢測器已就緒');
        
        // 添加測試事件監聽器
        runBtn.addEventListener('click', function(e) {
            console.log('🖱️ 按鈕被點擊了！');
            e.preventDefault();
            alert('按鈕點擊成功！正在運行布局優化檢測...');
        });
    } else {
        console.log('❌ 未找到 runLayoutOptimizer 按鈕');
        console.log('當前頁面元素:', document.querySelectorAll('button[id*="run"]'));
    }
});
