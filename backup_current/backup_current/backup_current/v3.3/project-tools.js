// ===========================================
// AI專案管理工具功能 (AI Project Management Tools)
// ===========================================

// 專案架構分析器
class ProjectAnalyzer {
    constructor() {
        this.projectData = null;
    }

    // 分析專案結構
    async analyzeProject(projectPath) {
        try {
            // 模擬專案分析（實際應用中會讀取檔案系統）
            const mockAnalysis = this.generateMockAnalysis(projectPath);
            this.projectData = mockAnalysis;
            return mockAnalysis;
        } catch (error) {
            console.error('專案分析失敗:', error);
            throw error;
        }
    }

    // 生成模擬分析結果
    generateMockAnalysis(projectPath) {
        const projectName = projectPath.split('/').pop() || '我的專案';
        
        return {
            projectName: projectName,
            structure: {
                files: [
                    { name: 'index.html', type: 'html', size: '15KB', description: '主要HTML檔案' },
                    { name: 'styles.css', type: 'css', size: '25KB', description: '主要樣式檔案' },
                    { name: 'script.js', type: 'javascript', size: '30KB', description: '主要JavaScript檔案' },
                    { name: 'images/', type: 'folder', size: '2MB', description: '圖片資源資料夾' },
                    { name: 'assets/', type: 'folder', size: '500KB', description: '靜態資源資料夾' }
                ],
                dependencies: [
                    { name: 'Font Awesome', version: '6.0.0', type: 'CSS Framework' },
                    { name: 'Google Fonts', version: 'Noto Sans TC', type: 'Font Library' }
                ],
                features: [
                    '響應式設計',
                    '多主題支援',
                    '智能搜尋功能',
                    '無障礙設計',
                    'PWA支援'
                ]
            },
            recommendations: [
                '建議添加Service Worker提升離線體驗',
                '考慮添加圖片懶載入功能',
                '建議優化CSS載入順序',
                '可以添加更多SEO meta標籤'
            ]
        };
    }

    // 生成專案分析報告
    generateReport(analysis) {
        let report = `# 📊 專案架構分析報告\n\n`;
        report += `## 專案資訊\n`;
        report += `- **專案名稱**: ${analysis.projectName}\n`;
        report += `- **分析時間**: ${new Date().toLocaleString('zh-TW')}\n\n`;

        report += `## 📁 檔案結構\n`;
        analysis.structure.files.forEach(file => {
            report += `- \`${file.name}\` (${file.type.toUpperCase()}) - ${file.size} - ${file.description}\n`;
        });

        report += `\n## 📦 依賴項目\n`;
        analysis.structure.dependencies.forEach(dep => {
            report += `- **${dep.name}** v${dep.version} (${dep.type})\n`;
        });

        report += `\n## ✨ 主要功能\n`;
        analysis.structure.features.forEach(feature => {
            report += `- ${feature}\n`;
        });

        report += `\n## 💡 優化建議\n`;
        analysis.recommendations.forEach(rec => {
            report += `- ${rec}\n`;
        });

        report += `\n---\n*此報告由AI專案管理工具自動生成*`;
        
        return report;
    }
}

// AI指令生成器
class AICommandGenerator {
    constructor() {
        this.templates = {
            website: {
                base: '請幫我優化這個網站專案',
                details: '包含響應式設計、效能優化、SEO改進'
            },
            webapp: {
                base: '請幫我開發一個網頁應用程式',
                details: '需要現代化的用戶界面和良好的用戶體驗'
            },
            landing: {
                base: '請幫我創建一個高轉換率的落地頁',
                details: '專注於轉換率優化和用戶引導'
            },
            portfolio: {
                base: '請幫我設計一個專業的作品集網站',
                details: '突出展示作品和個人品牌'
            },
            ecommerce: {
                base: '請幫我建立一個電商網站',
                details: '包含購物車、支付系統和商品管理'
            },
            blog: {
                base: '請幫我創建一個部落格網站',
                details: '支援文章發布、分類和搜尋功能'
            }
        };
    }

    // 生成AI指令
    generateCommand(settings) {
        const { projectType, mainTech, requirements, specialRequirements } = settings;
        
        let command = `# 🤖 AI開發指令\n\n`;
        command += `## 專案需求\n`;
        command += `**專案類型**: ${this.getProjectTypeName(projectType)}\n`;
        command += `**主要技術**: ${this.getTechName(mainTech)}\n\n`;

        command += `## 具體要求\n`;
        requirements.forEach(req => {
            command += `- ${this.getRequirementDescription(req)}\n`;
        });

        if (specialRequirements.trim()) {
            command += `\n## 特殊需求\n`;
            command += `${specialRequirements}\n`;
        }

        command += `\n## 請幫我完成以下任務：\n\n`;
        
        // 根據專案類型生成具體指令
        command += this.generateSpecificInstructions(projectType, mainTech, requirements);

        command += `\n## 注意事項\n`;
        command += `- 請確保代碼品質和最佳實踐\n`;
        command += `- 提供完整的實現方案和說明\n`;
        command += `- 考慮跨瀏覽器相容性\n`;
        command += `- 優化載入效能和用戶體驗\n\n`;

        command += `---\n*指令生成時間: ${new Date().toLocaleString('zh-TW')}*`;

        return command;
    }

    getProjectTypeName(type) {
        const names = {
            website: '網站專案',
            webapp: '網頁應用',
            landing: '落地頁',
            portfolio: '作品集',
            ecommerce: '電商網站',
            blog: '部落格'
        };
        return names[type] || type;
    }

    getTechName(tech) {
        const names = {
            'html-css-js': 'HTML/CSS/JavaScript',
            react: 'React',
            vue: 'Vue.js',
            angular: 'Angular',
            wordpress: 'WordPress',
            nextjs: 'Next.js'
        };
        return names[tech] || tech;
    }

    getRequirementDescription(req) {
        const descriptions = {
            responsive: '實現響應式設計，確保在各種裝置上正常顯示',
            performance: '優化載入效能，提升網站速度',
            seo: '實施SEO最佳實踐，提升搜尋引擎排名',
            accessibility: '確保無障礙設計，支援螢幕閱讀器',
            mobile: '特別優化手機版體驗',
            layout: '調整版面佈局，改善視覺效果'
        };
        return descriptions[req] || req;
    }

    generateSpecificInstructions(projectType, mainTech, requirements) {
        let instructions = '';

        switch (projectType) {
            case 'website':
                instructions += `1. 分析現有代碼結構和設計\n`;
                instructions += `2. 提供響應式設計改進方案\n`;
                instructions += `3. 優化CSS和JavaScript效能\n`;
                break;
            case 'webapp':
                instructions += `1. 設計現代化的用戶界面\n`;
                instructions += `2. 實現互動功能和動畫效果\n`;
                instructions += `3. 確保良好的用戶體驗流程\n`;
                break;
            case 'landing':
                instructions += `1. 設計高轉換率的版面佈局\n`;
                instructions += `2. 優化用戶引導和行動呼籲\n`;
                instructions += `3. 實施A/B測試建議\n`;
                break;
            default:
                instructions += `1. 根據專案需求提供客製化解決方案\n`;
                instructions += `2. 確保代碼品質和維護性\n`;
                instructions += `3. 提供完整的實現指南\n`;
        }

        if (requirements.includes('responsive')) {
            instructions += `4. 實現完整的響應式設計\n`;
        }
        if (requirements.includes('performance')) {
            instructions += `5. 實施效能優化策略\n`;
        }
        if (requirements.includes('seo')) {
            instructions += `6. 優化SEO相關元素\n`;
        }

        return instructions;
    }
}

// 版面優化檢測器
class LayoutOptimizer {
    constructor() {
        this.issues = [];
    }

    // 檢查版面問題
    checkLayout(checkTypes) {
        this.issues = [];
        
        checkTypes.forEach(type => {
            switch (type) {
                case 'overlap':
                    this.checkOverlaps();
                    break;
                case 'spacing':
                    this.checkSpacing();
                    break;
                case 'alignment':
                    this.checkAlignment();
                    break;
                case 'sizing':
                    this.checkSizing();
                    break;
                case 'mobile-layout':
                    this.checkMobileLayout();
                    break;
                case 'typography':
                    this.checkTypography();
                    break;
            }
        });

        return this.issues;
    }

    checkOverlaps() {
        // 模擬重疊檢測
        this.issues.push({
            type: 'warning',
            title: '元素重疊檢測',
            description: '檢測到部分元素在小螢幕上可能重疊，建議調整z-index或間距'
        });
    }

    checkSpacing() {
        // 模擬間距分析
        this.issues.push({
            type: 'info',
            title: '間距分析',
            description: '整體間距設計良好，但建議在移動端增加更多留白空間'
        });
    }

    checkAlignment() {
        // 模擬對齊檢查
        this.issues.push({
            type: 'error',
            title: '對齊問題',
            description: '發現部分文字和圖像對齊不一致，建議統一使用CSS Grid或Flexbox'
        });
    }

    checkSizing() {
        // 模擬尺寸檢查
        this.issues.push({
            type: 'warning',
            title: '尺寸合理性',
            description: '某些按鈕尺寸在小螢幕上可能過小，建議增加最小觸控面積'
        });
    }

    checkMobileLayout() {
        // 模擬手機版檢查
        this.issues.push({
            type: 'info',
            title: '手機版版面',
            description: '手機版整體設計良好，但建議優化導航選單的觸控體驗'
        });
    }

    checkTypography() {
        // 模擬字體檢查
        this.issues.push({
            type: 'warning',
            title: '字體排版',
            description: '建議統一字體大小層級，確保良好的閱讀體驗'
        });
    }
}

// 手機版適配檢查器
class MobileChecker {
    constructor() {
        this.deviceProfiles = {
            iphone: { width: 375, height: 812, name: 'iPhone X/11/12' },
            android: { width: 360, height: 640, name: 'Android 標準' },
            tablet: { width: 768, height: 1024, name: 'iPad' }
        };
    }

    // 檢查手機版適配
    checkMobile(deviceType = 'iphone') {
        const device = this.deviceProfiles[deviceType];
        const issues = [];
        
        // 模擬手機版檢查
        issues.push({
            type: 'success',
            title: '視窗寬度適配',
            description: `${device.name} 視窗寬度適配良好`
        });

        issues.push({
            type: 'warning',
            title: '觸控目標大小',
            description: '部分按鈕在手機上可能觸控困難，建議增加至44px以上'
        });

        issues.push({
            type: 'error',
            title: '文字可讀性',
            description: '某些文字在手機上可能過小，建議調整字體大小'
        });

        // 計算響應式評分
        const score = this.calculateResponsiveScore(issues);
        
        return {
            device: device,
            issues: issues,
            score: score
        };
    }

    calculateResponsiveScore(issues) {
        const totalIssues = issues.length;
        const errorCount = issues.filter(issue => issue.type === 'error').length;
        const warningCount = issues.filter(issue => issue.type === 'warning').length;
        
        // 計算評分：錯誤扣20分，警告扣10分
        let score = 100 - (errorCount * 20) - (warningCount * 10);
        score = Math.max(0, score);
        
        return {
            value: score,
            level: score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low',
            text: `${score}/100`
        };
    }
}

// 初始化AI專案管理工具
function initializeProjectTools() {
    try {
        console.log('🚀 正在初始化AI專案管理工具...');
        
        // 檢查DOM元素是否存在
        console.log('🔍 檢查DOM元素...');
        console.log('analyzeProject:', document.getElementById('analyzeProject'));
        console.log('projectPath:', document.getElementById('projectPath'));
        console.log('generateCommand:', document.getElementById('generateCommand'));
        console.log('checkLayout:', document.getElementById('checkLayout'));
        console.log('checkMobile:', document.getElementById('checkMobile'));
        
        const analyzer = new ProjectAnalyzer();
    const commandGenerator = new AICommandGenerator();
    const layoutOptimizer = new LayoutOptimizer();
    const mobileChecker = new MobileChecker();

    // 專案分析器事件
    const analyzeBtn = document.getElementById('analyzeProject');
    const projectPathInput = document.getElementById('projectPath');
    const analysisResults = document.getElementById('analysisResults');
    const analysisContent = document.getElementById('analysisContent');
    const copyAnalysisBtn = document.getElementById('copyAnalysis');

    if (analyzeBtn && projectPathInput) {
        console.log('✅ 專案分析器按鈕已找到');
        analyzeBtn.addEventListener('click', async () => {
            console.log('🔄 專案分析器按鈕被點擊');
            const projectPath = projectPathInput.value.trim();
            if (!projectPath) {
                alert('請輸入專案路徑');
                return;
            }

            try {
                analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 分析中...';
                const analysis = await analyzer.analyzeProject(projectPath);
                const report = analyzer.generateReport(analysis);
                
                analysisContent.textContent = report;
                analysisResults.style.display = 'block';
                
                // 複製功能
                copyAnalysisBtn.onclick = () => {
                    navigator.clipboard.writeText(report).then(() => {
                        showNotification('分析報告已複製到剪貼簿！');
                    });
                };
            } catch (error) {
                alert('分析失敗：' + error.message);
            } finally {
                analyzeBtn.innerHTML = '<i class="fas fa-analytics"></i> 分析專案結構';
            }
        });
    }

    // AI指令生成器事件
    const generateBtn = document.getElementById('generateCommand');
    const generatedCommand = document.getElementById('generatedCommand');
    const commandContent = document.getElementById('commandContent');
    const copyCommandBtn = document.getElementById('copyCommand');

    if (generateBtn) {
        console.log('✅ AI指令生成器按鈕已找到');
        generateBtn.addEventListener('click', () => {
            const settings = {
                projectType: document.getElementById('projectType').value,
                mainTech: document.getElementById('mainTech').value,
                requirements: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value),
                specialRequirements: document.getElementById('specialRequirements').value
            };

            const command = commandGenerator.generateCommand(settings);
            commandContent.textContent = command;
            generatedCommand.style.display = 'block';

            // 複製功能
            copyCommandBtn.onclick = () => {
                navigator.clipboard.writeText(command).then(() => {
                    showNotification('AI指令已複製到剪貼簿！');
                });
            };
        });
    }

    // 版面優化檢測器事件
    const checkLayoutBtn = document.getElementById('checkLayout');
    const layoutResults = document.getElementById('layoutResults');
    const layoutIssues = document.getElementById('layoutIssues');
    const issueCount = document.getElementById('issueCount');

    if (checkLayoutBtn) {
        console.log('✅ 版面優化檢測器按鈕已找到');
        checkLayoutBtn.addEventListener('click', () => {
            const checkTypes = Array.from(document.querySelectorAll('#project-tools input[type="checkbox"]:checked')).map(cb => cb.value);
            
            const issues = layoutOptimizer.checkLayout(checkTypes);
            
            // 顯示結果
            layoutIssues.innerHTML = '';
            issues.forEach(issue => {
                const issueElement = document.createElement('div');
                issueElement.className = `issue-item ${issue.type}`;
                issueElement.innerHTML = `
                    <div class="issue-title">${issue.title}</div>
                    <div class="issue-description">${issue.description}</div>
                `;
                layoutIssues.appendChild(issueElement);
            });

            issueCount.textContent = `發現 ${issues.length} 個問題`;
            layoutResults.style.display = 'block';
        });
    }

    // 手機版適配檢查器事件
    const checkMobileBtn = document.getElementById('checkMobile');
    const mobileResults = document.getElementById('mobileResults');
    const mobileIssues = document.getElementById('mobileIssues');
    const responsiveScore = document.getElementById('responsiveScore');
    const scoreText = document.getElementById('scoreText');
    const deviceButtons = document.querySelectorAll('.device-btn');

    // 裝置選擇
    deviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            deviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    if (checkMobileBtn) {
        console.log('✅ 手機版適配檢查器按鈕已找到');
        checkMobileBtn.addEventListener('click', () => {
            const activeDevice = document.querySelector('.device-btn.active').dataset.device;
            const result = mobileChecker.checkMobile(activeDevice);
            
            // 顯示問題
            mobileIssues.innerHTML = '';
            result.issues.forEach(issue => {
                const issueElement = document.createElement('div');
                issueElement.className = `issue-item ${issue.type}`;
                issueElement.innerHTML = `
                    <div class="issue-title">${issue.title}</div>
                    <div class="issue-description">${issue.description}</div>
                `;
                mobileIssues.appendChild(issueElement);
            });

            // 顯示評分
            responsiveScore.style.width = `${result.score.value}%`;
            responsiveScore.className = `score-fill ${result.score.level}`;
            scoreText.textContent = result.score.text;
            
            mobileResults.style.display = 'block';
        });
    }
    
    console.log('✅ AI專案管理工具初始化完成');
    } catch (error) {
        console.error('❌ AI專案管理工具初始化失敗:', error);
    }
}

// 通知函數
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加通知動畫CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);
