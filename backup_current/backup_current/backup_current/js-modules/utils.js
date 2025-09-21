/* ===========================================
   工具模組 (Utils Module)
   功能：工具函數、輔助功能
   =========================================== */

class UtilsModule {
    constructor() {
        this.debounceCache = new Map();
        this.throttleCache = new Map();
    }
    
    // 防抖函數
    debounce(func, wait) {
        const key = func.toString() + wait;
        if (this.debounceCache.has(key)) {
            return this.debounceCache.get(key);
        }
        
        let timeout;
        const debounced = function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
        
        this.debounceCache.set(key, debounced);
        return debounced;
    }
    
    // 節流函數
    throttle(func, limit) {
        const key = func.toString() + limit;
        if (this.throttleCache.has(key)) {
            return this.throttleCache.get(key);
        }
        
        let inThrottle;
        const throttled = function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
        
        this.throttleCache.set(key, throttled);
        return throttled;
    }
    
    // 平滑滾動
    smoothScrollTo(element, offset = 0) {
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // 格式化檔案大小
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // 生成唯一 ID
    generateId() {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    }
    
    // 深拷貝
    deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => this.deepClone(item));
        if (typeof obj === 'object') {
            const clonedObj = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    clonedObj[key] = this.deepClone(obj[key]);
                }
            }
            return clonedObj;
        }
    }
}

// 建立實例並匯出
window.UtilsModule = new UtilsModule();
