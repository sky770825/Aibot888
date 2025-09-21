/* ===========================================
   核心模組 (Core Module)
   功能：基本配置、全域變數、初始化
   =========================================== */

// 全域配置
const CONFIG = {
    searchDelay: 500,
    animationDuration: 300,
    maxSearchResults: 15,
    breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1200
    },
    lazyLoadThreshold: 50,
    itemsPerPage: 20
};

// 全域變數
const searchCache = new Map();
const searchIndex = new Map();

// 初始化函數
function init() {
    console.log('核心模組載入完成');
    // 觸發其他模組初始化
    if (window.SearchModule) window.SearchModule.init();
    if (window.UIModule) window.UIModule.init();
    if (window.ProjectAnalyzerModule) window.ProjectAnalyzerModule.init();
}

// 匯出
window.CoreModule = {
    CONFIG,
    searchCache,
    searchIndex,
    init
};

// 自動初始化
document.addEventListener('DOMContentLoaded', init);
