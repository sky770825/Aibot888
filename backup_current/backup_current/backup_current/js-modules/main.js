/* ===========================================
   主入口檔案 (Main Entry)
   功能：載入所有模組並初始化
   =========================================== */

// 模組載入順序
const moduleOrder = [
    'core.js',
    'utils.js',
    'ui.js',
    'search.js',
    'project-analyzer.js'
];

// 載入模組
function loadModules() {
    let loadedCount = 0;
    const totalModules = moduleOrder.length;
    
    moduleOrder.forEach(moduleName => {
        const script = document.createElement('script');
        script.src = `js-modules/${moduleName}`;
        script.onload = () => {
            loadedCount++;
            console.log(`✅ ${moduleName} 載入完成`);
            
            if (loadedCount === totalModules) {
                console.log('🎉 所有模組載入完成！');
                initializeApp();
            }
        };
        script.onerror = () => {
            console.error(`❌ ${moduleName} 載入失敗`);
        };
        document.head.appendChild(script);
    });
}

// 初始化應用程式
function initializeApp() {
    console.log('🚀 應用程式初始化開始');
    
    // 等待 DOM 載入完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('📱 應用程式初始化完成');
        });
    } else {
        console.log('📱 應用程式初始化完成');
    }
}

// 開始載入模組
loadModules();
