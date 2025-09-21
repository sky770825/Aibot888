/**
 * 遠端客戶端配置
 * 用於配置遠端更新服務器連接
 */

// 遠端服務器配置
const REMOTE_CONFIG = {
    // 請替換為您的實際部署網址
    serverUrl: 'https://your-project.vercel.app', // 或您的 Heroku 網址
    
    // 更新設定
    checkInterval: 300000, // 5分鐘檢查一次
    autoUpdate: false,     // 手動確認更新
    backupBeforeUpdate: true,
    
    // 認證設定
    requireAuth: true,     // 需要登入
    loginUrl: '/login.html',
    
    // 調試模式
    debug: false
};

// 本地測試配置
const LOCAL_CONFIG = {
    serverUrl: 'http://localhost:3000',
    checkInterval: 30000,  // 30秒檢查一次
    autoUpdate: false,
    backupBeforeUpdate: true,
    requireAuth: true,
    loginUrl: '/login.html',
    debug: true
};

// 根據環境選擇配置
const isProduction = window.location.protocol === 'https:';
const config = isProduction ? REMOTE_CONFIG : LOCAL_CONFIG;

// 設定全域配置
window.AUTO_UPDATE_CONFIG = config;

// 輸出配置資訊
console.log('🔧 更新配置已載入:', {
    serverUrl: config.serverUrl,
    environment: isProduction ? 'production' : 'development',
    requireAuth: config.requireAuth
});

// 如果配置了遠端服務器，顯示提示
if (isProduction && config.serverUrl.includes('your-project')) {
    console.warn('⚠️ 請先配置正確的遠端服務器網址！');
    console.log('📝 修改 remote-client-config.js 中的 serverUrl');
}
