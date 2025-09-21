/* ===========================================
   UI 模組 (UI Module)
   功能：導航、響應式設計、主題切換
   =========================================== */

class UIModule {
    constructor() {
        this.isMobile = false;
        this.isTablet = false;
        this.isDesktop = false;
    }
    
    // 初始化導航
    initNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });
    }
    
    // 初始化主題切換
    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
            });
            
            // 載入保存的主題
            if (localStorage.getItem('darkTheme') === 'true') {
                document.body.classList.add('dark-theme');
            }
        }
    }
    
    // 初始化響應式設計
    initResponsive() {
        this.updateLayout();
        window.addEventListener('resize', () => {
            this.updateLayout();
        });
    }
    
    // 更新布局
    updateLayout() {
        const width = window.innerWidth;
        const body = document.body;
        
        if (width < 768) {
            this.isMobile = true;
            this.isTablet = false;
            this.isDesktop = false;
            body.classList.add('mobile-layout');
            body.classList.remove('tablet-layout', 'desktop-layout');
        } else if (width < 1024) {
            this.isMobile = false;
            this.isTablet = true;
            this.isDesktop = false;
            body.classList.add('tablet-layout');
            body.classList.remove('mobile-layout', 'desktop-layout');
        } else {
            this.isMobile = false;
            this.isTablet = false;
            this.isDesktop = true;
            body.classList.add('desktop-layout');
            body.classList.remove('mobile-layout', 'tablet-layout');
        }
    }
    
    // 初始化
    init() {
        this.initNavigation();
        this.initTheme();
        this.initResponsive();
        console.log('UI 模組載入完成');
    }
}

// 建立實例並匯出
window.UIModule = new UIModule();
