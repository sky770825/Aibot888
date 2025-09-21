/**
 * 客戶端自動更新器
 * 用於檢查和下載最新版本
 */
class AutoUpdater {
    constructor(config = {}) {
        this.config = {
            serverUrl: config.serverUrl || 'http://localhost:3000',
            checkInterval: config.checkInterval || 30000, // 30秒檢查一次
            autoUpdate: config.autoUpdate || false,
            backupBeforeUpdate: config.backupBeforeUpdate || true,
            ...config
        };
        
        this.currentVersion = this.getCurrentVersion();
        this.currentHash = this.getCurrentHash();
        this.isUpdating = false;
        this.updateCallbacks = [];
        
        this.init();
    }
    
    // 初始化
    init() {
        console.log('🔄 自動更新器已初始化');
        console.log(`📱 當前版本: ${this.currentVersion}`);
        console.log(`🔗 服務器: ${this.config.serverUrl}`);
        
        // 定期檢查更新
        if (this.config.checkInterval > 0) {
            setInterval(() => {
                this.checkForUpdates();
            }, this.config.checkInterval);
        }
        
        // 頁面載入時檢查一次
        this.checkForUpdates();
    }
    
    // 獲取當前版本
    getCurrentVersion() {
        // 從 package.json 或 meta 標籤讀取版本
        const versionMeta = document.querySelector('meta[name="app-version"]');
        if (versionMeta) {
            return versionMeta.getAttribute('content');
        }
        
        // 預設版本
        return '1.0.0';
    }
    
    // 計算當前專案雜湊
    getCurrentHash() {
        // 簡化版本：基於頁面內容計算雜湊
        const content = document.documentElement.outerHTML;
        return this.simpleHash(content);
    }
    
    // 簡單雜湊函數
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 轉換為32位整數
        }
        return Math.abs(hash).toString(16);
    }
    
    // 檢查更新
    async checkForUpdates() {
        if (this.isUpdating) return;
        
        try {
            console.log('🔍 檢查更新中...');
            
            const response = await fetch(`${this.config.serverUrl}/api/check-update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    clientVersion: this.currentVersion,
                    clientHash: this.currentHash
                })
            });
            
            if (response.status === 401) {
                console.log('🔐 需要登入才能檢查更新');
                this.showLoginRequired();
                return;
            }
            
            const data = await response.json();
            
            if (data.success && data.needsUpdate) {
                console.log('🆕 發現新版本!', {
                    current: this.currentVersion,
                    latest: data.serverVersion
                });
                
                this.notifyUpdateAvailable(data);
                
                if (this.config.autoUpdate) {
                    await this.performUpdate();
                }
            } else {
                console.log('✅ 已是最新版本');
            }
            
        } catch (error) {
            console.error('❌ 檢查更新失敗:', error);
        }
    }
    
    // 通知有更新可用
    notifyUpdateAvailable(updateInfo) {
        this.updateCallbacks.forEach(callback => {
            callback('updateAvailable', updateInfo);
        });
        
        // 顯示更新通知
        this.showUpdateNotification(updateInfo);
    }
    
    // 顯示更新通知
    showUpdateNotification(updateInfo) {
        // 移除現有通知
        const existingNotification = document.getElementById('update-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // 創建通知元素
        const notification = document.createElement('div');
        notification.id = 'update-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                font-family: 'Noto Sans TC', sans-serif;
                max-width: 300px;
                animation: slideIn 0.3s ease-out;
            ">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-download" style="margin-right: 8px;"></i>
                    <strong>發現新版本!</strong>
                </div>
                <div style="font-size: 14px; margin-bottom: 10px;">
                    版本 ${updateInfo.serverVersion} 已可用
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="window.autoUpdater.performUpdate()" style="
                        background: rgba(255,255,255,0.2);
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 5px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">立即更新</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                        background: transparent;
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 5px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">稍後</button>
                </div>
            </div>
            <style>
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
        `;
        
        document.body.appendChild(notification);
        
        // 5秒後自動隱藏
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // 執行更新
    async performUpdate() {
        if (this.isUpdating) return;
        
        this.isUpdating = true;
        
        try {
            console.log('🚀 開始更新...');
            
            // 顯示更新進度
            this.showUpdateProgress();
            
            // 備份當前版本
            if (this.config.backupBeforeUpdate) {
                await this.backupCurrentVersion();
            }
            
            // 下載更新包
            const updatePackage = await this.downloadUpdatePackage();
            
            // 應用更新
            await this.applyUpdate(updatePackage);
            
            // 更新完成
            this.showUpdateComplete();
            
            // 通知更新完成
            this.updateCallbacks.forEach(callback => {
                callback('updateComplete', updatePackage);
            });
            
            // 重新載入頁面
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
        } catch (error) {
            console.error('❌ 更新失敗:', error);
            this.showUpdateError(error);
        } finally {
            this.isUpdating = false;
        }
    }
    
    // 顯示更新進度
    showUpdateProgress() {
        const progress = document.createElement('div');
        progress.id = 'update-progress';
        progress.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 10001;
                text-align: center;
                font-family: 'Noto Sans TC', sans-serif;
            ">
                <div style="margin-bottom: 20px;">
                    <i class="fas fa-sync-alt fa-spin" style="font-size: 24px; color: #667eea;"></i>
                </div>
                <div style="font-size: 18px; margin-bottom: 10px;">正在更新中...</div>
                <div style="font-size: 14px; color: #666;">請稍候，不要關閉頁面</div>
            </div>
        `;
        
        document.body.appendChild(progress);
    }
    
    // 備份當前版本
    async backupCurrentVersion() {
        try {
            const response = await fetch(`${this.config.serverUrl}/api/backup`, {
                method: 'POST'
            });
            
            const data = await response.json();
            if (data.success) {
                console.log('✅ 備份完成');
            }
        } catch (error) {
            console.warn('⚠️ 備份失敗:', error);
        }
    }
    
    // 下載更新包
    async downloadUpdatePackage() {
        const response = await fetch(`${this.config.serverUrl}/api/update-package`, {
            credentials: 'include'
        });
        
        if (response.status === 401) {
            throw new Error('需要登入才能下載更新');
        }
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error || '下載更新包失敗');
        }
        
        return data.updatePackage;
    }
    
    // 應用更新
    async applyUpdate(updatePackage) {
        console.log('📦 應用更新中...', updatePackage.files.length, '個檔案');
        
        // 這裡可以實作實際的檔案更新邏輯
        // 由於瀏覽器安全限制，我們只能重新載入頁面
        // 實際的檔案更新需要在服務器端處理
        
        return true;
    }
    
    // 顯示更新完成
    showUpdateComplete() {
        const progress = document.getElementById('update-progress');
        if (progress) {
            progress.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    z-index: 10001;
                    text-align: center;
                    font-family: 'Noto Sans TC', sans-serif;
                ">
                    <div style="margin-bottom: 20px;">
                        <i class="fas fa-check-circle" style="font-size: 24px; color: #28a745;"></i>
                    </div>
                    <div style="font-size: 18px; margin-bottom: 10px;">更新完成!</div>
                    <div style="font-size: 14px; color: #666;">頁面將自動重新載入</div>
                </div>
            `;
        }
    }
    
    // 顯示需要登入提示
    showLoginRequired() {
        const notification = document.createElement('div');
        notification.id = 'login-required-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                font-family: 'Noto Sans TC', sans-serif;
                max-width: 300px;
                animation: slideIn 0.3s ease-out;
            ">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-lock" style="margin-right: 8px;"></i>
                    <strong>需要登入</strong>
                </div>
                <div style="font-size: 14px; margin-bottom: 10px;">
                    請先登入才能使用自動更新功能
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="window.location.href='login.html'" style="
                        background: rgba(255,255,255,0.2);
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 5px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">立即登入</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                        background: transparent;
                        border: 1px solid rgba(255,255,255,0.3);
                        color: white;
                        padding: 5px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;
                    ">稍後</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 10秒後自動隱藏
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, 10000);
    }
    
    // 顯示更新錯誤
    showUpdateError(error) {
        const progress = document.getElementById('update-progress');
        if (progress) {
            progress.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    z-index: 10001;
                    text-align: center;
                    font-family: 'Noto Sans TC', sans-serif;
                ">
                    <div style="margin-bottom: 20px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 24px; color: #dc3545;"></i>
                    </div>
                    <div style="font-size: 18px; margin-bottom: 10px;">更新失敗</div>
                    <div style="font-size: 14px; color: #666; margin-bottom: 15px;">${error.message}</div>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                        background: #dc3545;
                        color: white;
                        border: none;
                        padding: 8px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    ">關閉</button>
                </div>
            `;
        }
    }
    
    // 註冊更新回調
    onUpdate(callback) {
        this.updateCallbacks.push(callback);
    }
    
    // 手動檢查更新
    async manualCheck() {
        await this.checkForUpdates();
    }
    
    // 手動更新
    async manualUpdate() {
        await this.performUpdate();
    }
}

// 全域實例
window.AutoUpdater = AutoUpdater;

// 自動初始化（如果配置了）
if (window.AUTO_UPDATE_CONFIG) {
    window.autoUpdater = new AutoUpdater(window.AUTO_UPDATE_CONFIG);
}
