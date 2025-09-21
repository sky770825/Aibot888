/* ===========================================
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
                throw new Error(`HTTP error! status: ${response.status}`);
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
