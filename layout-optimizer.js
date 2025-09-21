/**
 * CSS 布局優化工具
 * 功能：自動檢測和優化網站的 CSS 布局問題
 */

class LayoutOptimizer {
    constructor() {
        this.issues = [];
        this.recommendations = [];
        this.init();
    }

    init() {
        console.log('🎨 CSS 布局優化工具已啟動');
        this.analyzeLayout();
        this.generateRecommendations();
        this.displayResults();
    }

    /**
     * 分析當前布局問題
     */
    analyzeLayout() {
        this.checkGridLayouts();
        this.checkFlexboxUsage();
        this.checkSpacingConsistency();
        this.checkResponsiveDesign();
        this.checkVisualHierarchy();
    }

    /**
     * 檢查 Grid 布局
     */
    checkGridLayouts() {
        const grids = document.querySelectorAll('[style*="grid"], .grid, [class*="grid"]');
        
        grids.forEach((grid, index) => {
            const computedStyle = window.getComputedStyle(grid);
            const display = computedStyle.display;
            
            if (display === 'grid') {
                const gap = computedStyle.gap;
                const gridTemplateColumns = computedStyle.gridTemplateColumns;
                
                // 檢查間距是否適當
                if (gap === '0px' || gap === 'normal') {
                    this.issues.push({
                        type: 'grid',
                        element: grid,
                        issue: 'Grid 缺少適當的間距',
                        severity: 'medium',
                        suggestion: '添加 gap 屬性，建議使用 clamp(1rem, 2vw, 2rem)'
                    });
                }

                // 檢查響應式設計
                if (gridTemplateColumns.includes('repeat(auto-fit') && !gridTemplateColumns.includes('minmax')) {
                    this.issues.push({
                        type: 'grid',
                        element: grid,
                        issue: 'Grid 缺少 minmax 約束',
                        severity: 'high',
                        suggestion: '使用 minmax(280px, 1fr) 確保響應式效果'
                    });
                }
            }
        });
    }

    /**
     * 檢查 Flexbox 使用
     */
    checkFlexboxUsage() {
        const flexContainers = document.querySelectorAll('[style*="flex"], .flex, [class*="flex"]');
        
        flexContainers.forEach((container, index) => {
            const computedStyle = window.getComputedStyle(container);
            const display = computedStyle.display;
            
            if (display === 'flex') {
                const alignItems = computedStyle.alignItems;
                const justifyContent = computedStyle.justifyContent;
                
                // 檢查對齊方式
                if (alignItems === 'normal' || alignItems === 'stretch') {
                    this.issues.push({
                        type: 'flexbox',
                        element: container,
                        issue: 'Flexbox 缺少明確的對齊方式',
                        severity: 'low',
                        suggestion: '明確設定 align-items 和 justify-content'
                    });
                }

                // 檢查是否應該使用 Grid
                const children = container.children;
                if (children.length > 3 && !container.classList.contains('flex-col')) {
                    this.issues.push({
                        type: 'flexbox',
                        element: container,
                        issue: '多個子元素可能更適合使用 Grid 布局',
                        severity: 'medium',
                        suggestion: '考慮使用 CSS Grid 進行二維布局'
                    });
                }
            }
        });
    }

    /**
     * 檢查間距一致性
     */
    checkSpacingConsistency() {
        const elements = document.querySelectorAll('*');
        const margins = new Set();
        const paddings = new Set();
        
        elements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const margin = computedStyle.margin;
            const padding = computedStyle.padding;
            
            if (margin !== '0px') margins.add(margin);
            if (padding !== '0px') paddings.add(padding);
        });

        if (margins.size > 10) {
            this.issues.push({
                type: 'spacing',
                element: document.body,
                issue: '間距值過於分散，缺乏一致性',
                severity: 'high',
                suggestion: '建立統一的間距系統，使用 CSS 變數'
            });
        }
    }

    /**
     * 檢查響應式設計
     */
    checkResponsiveDesign() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            this.issues.push({
                type: 'responsive',
                element: document.head,
                issue: '缺少 viewport meta 標籤',
                severity: 'high',
                suggestion: '添加 <meta name="viewport" content="width=device-width, initial-scale=1">'
            });
        }

        // 檢查是否有響應式圖片
        const images = document.querySelectorAll('img');
        const responsiveImages = Array.from(images).filter(img => 
            img.style.maxWidth === '100%' || img.classList.contains('responsive')
        );

        if (images.length > 0 && responsiveImages.length < images.length * 0.5) {
            this.issues.push({
                type: 'responsive',
                element: document.body,
                issue: '部分圖片缺少響應式設計',
                severity: 'medium',
                suggestion: '為圖片添加 max-width: 100% 和 height: auto'
            });
        }
    }

    /**
     * 檢查視覺層次
     */
    checkVisualHierarchy() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headingSizes = Array.from(headings).map(h => 
            parseInt(window.getComputedStyle(h).fontSize)
        );

        // 檢查標題大小是否合理遞減
        for (let i = 1; i < headingSizes.length; i++) {
            if (headingSizes[i] >= headingSizes[i-1]) {
                this.issues.push({
                    type: 'hierarchy',
                    element: headings[i],
                    issue: '標題層次不明確',
                    severity: 'medium',
                    suggestion: '確保標題大小按層次遞減'
                });
                break;
            }
        }
    }

    /**
     * 生成優化建議
     */
    generateRecommendations() {
        this.recommendations = [
            {
                title: '建立設計系統',
                description: '使用統一的間距、顏色和字體變數',
                priority: 'high',
                code: `
:root {
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
}`
            },
            {
                title: '優化 Grid 布局',
                description: '使用現代 Grid 語法提升響應式效果',
                priority: 'high',
                code: `
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
    align-items: start;
    justify-items: center;
}`
            },
            {
                title: '改善卡片設計',
                description: '提升卡片的視覺層次和互動效果',
                priority: 'medium',
                code: `
.card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #f1f5f9;
}

.card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}`
            },
            {
                title: '響應式容器',
                description: '使用彈性容器適配不同螢幕尺寸',
                priority: 'high',
                code: `
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 4vw, 2rem);
    width: 100%;
    box-sizing: border-box;
}`
            },
            {
                title: '改善間距系統',
                description: '使用 clamp() 函數創建響應式間距',
                priority: 'medium',
                code: `
.section {
    padding: clamp(2rem, 5vw, 4rem) 0;
    margin: clamp(1rem, 3vw, 2rem) 0;
}`
            }
        ];
    }

    /**
     * 顯示分析結果
     */
    displayResults() {
        console.group('🎨 CSS 布局分析結果');
        
        console.log(`📊 發現 ${this.issues.length} 個問題:`);
        this.issues.forEach((issue, index) => {
            console.group(`${index + 1}. ${issue.type.toUpperCase()} - ${issue.severity.toUpperCase()}`);
            console.log(`問題: ${issue.issue}`);
            console.log(`建議: ${issue.suggestion}`);
            console.log('元素:', issue.element);
            console.groupEnd();
        });

        console.log(`\n💡 優化建議 (${this.recommendations.length} 項):`);
        this.recommendations.forEach((rec, index) => {
            console.group(`${index + 1}. ${rec.title} (${rec.priority})`);
            console.log(rec.description);
            console.log('代碼範例:');
            console.log(rec.code);
            console.groupEnd();
        });

        console.groupEnd();
        
        this.createOptimizationPanel();
    }

    /**
     * 創建優化面板
     */
    createOptimizationPanel() {
        const panel = document.createElement('div');
        panel.id = 'layout-optimizer-panel';
        panel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 350px;
            max-height: 80vh;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            overflow-y: auto;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.5;
        `;

        panel.innerHTML = `
            <div style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
                <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 18px;">
                    🎨 布局優化工具
                </h3>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                    發現 ${this.issues.length} 個問題，${this.recommendations.length} 個建議
                </p>
            </div>
            <div style="padding: 20px;">
                ${this.generateIssuesHTML()}
                ${this.generateRecommendationsHTML()}
            </div>
            <div style="padding: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
                    關閉面板
                </button>
            </div>
        `;

        document.body.appendChild(panel);
    }

    generateIssuesHTML() {
        if (this.issues.length === 0) {
            return '<div style="color: #10b981; font-weight: 500;">✅ 沒有發現布局問題</div>';
        }

        return `
            <div style="margin-bottom: 20px;">
                <h4 style="margin: 0 0 10px 0; color: #dc2626;">發現的問題</h4>
                ${this.issues.map(issue => `
                    <div style="margin-bottom: 12px; padding: 12px; background: #fef2f2; border-left: 3px solid #dc2626; border-radius: 4px;">
                        <div style="font-weight: 500; color: #dc2626; margin-bottom: 4px;">
                            ${issue.type.toUpperCase()} - ${issue.severity.toUpperCase()}
                        </div>
                        <div style="color: #374151; margin-bottom: 4px;">${issue.issue}</div>
                        <div style="color: #6b7280; font-size: 12px;">${issue.suggestion}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateRecommendationsHTML() {
        return `
            <div>
                <h4 style="margin: 0 0 10px 0; color: #059669;">優化建議</h4>
                ${this.recommendations.map(rec => `
                    <div style="margin-bottom: 12px; padding: 12px; background: #f0fdf4; border-left: 3px solid #059669; border-radius: 4px;">
                        <div style="font-weight: 500; color: #059669; margin-bottom: 4px;">
                            ${rec.title} (${rec.priority})
                        </div>
                        <div style="color: #374151; margin-bottom: 8px;">${rec.description}</div>
                        <details style="margin-top: 8px;">
                            <summary style="cursor: pointer; color: #3b82f6; font-size: 12px;">查看代碼範例</summary>
                            <pre style="margin: 8px 0 0 0; padding: 8px; background: #f8fafc; border-radius: 4px; font-size: 11px; overflow-x: auto;">${rec.code.trim()}</pre>
                        </details>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * 應用優化建議
     */
    applyOptimization(type) {
        switch(type) {
            case 'design-system':
                this.applyDesignSystem();
                break;
            case 'grid-layout':
                this.applyGridLayout();
                break;
            case 'card-design':
                this.applyCardDesign();
                break;
            case 'responsive-container':
                this.applyResponsiveContainer();
                break;
            case 'spacing-system':
                this.applySpacingSystem();
                break;
        }
    }

    applyDesignSystem() {
        const style = document.createElement('style');
        style.textContent = `
:root {
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;
    
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
        `;
        document.head.appendChild(style);
        console.log('✅ 設計系統已應用');
    }

    applyGridLayout() {
        const grids = document.querySelectorAll('.terminology-grid, .command-examples, .glossary-grid');
        grids.forEach(grid => {
            grid.style.cssText += `
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: clamp(1.5rem, 3vw, 2.5rem);
                align-items: start;
                justify-items: center;
            `;
        });
        console.log('✅ Grid 布局已優化');
    }

    applyCardDesign() {
        const cards = document.querySelectorAll('.terminology-card, .command-card, .resource-card');
        cards.forEach(card => {
            card.style.cssText += `
                border-radius: 16px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid #f1f5f9;
            `;
        });
        console.log('✅ 卡片設計已優化');
    }

    applyResponsiveContainer() {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.cssText += `
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 clamp(1rem, 4vw, 2rem);
                width: 100%;
                box-sizing: border-box;
            `;
        });
        console.log('✅ 響應式容器已優化');
    }

    applySpacingSystem() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.cssText += `
                padding: clamp(2rem, 5vw, 4rem) 0;
                margin: clamp(1rem, 3vw, 2rem) 0;
            `;
        });
        console.log('✅ 間距系統已優化');
    }
}

// 自動啟動優化工具
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new LayoutOptimizer());
} else {
    new LayoutOptimizer();
}

// 導出到全域
window.LayoutOptimizer = LayoutOptimizer;
