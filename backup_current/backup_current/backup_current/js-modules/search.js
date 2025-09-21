/* ===========================================
   搜尋模組 (Search Module)
   功能：智能搜尋、搜尋索引、搜尋結果
   =========================================== */

class SearchModule {
    constructor() {
        this.searchCache = new Map();
        this.searchIndex = new Map();
    }
    
    // 建立搜尋索引
    buildSearchIndex() {
        const terms = document.querySelectorAll('.terminology-card, .command-card');
        terms.forEach((term, index) => {
            const text = term.textContent.toLowerCase();
            const words = text.split(/\s+/);
            words.forEach(word => {
                if (word.length > 2) {
                    if (!this.searchIndex.has(word)) {
                        this.searchIndex.set(word, []);
                    }
                    this.searchIndex.get(word).push({
                        element: term,
                        index: index,
                        text: text
                    });
                }
            });
        });
    }
    
    // 執行搜尋
    performSearch(term) {
        if (term.length < 2) return [];
        
        const results = [];
        const searchWords = term.split(/\s+/);
        
        searchWords.forEach(word => {
            if (this.searchIndex.has(word)) {
                results.push(...this.searchIndex.get(word));
            }
        });
        
        const uniqueResults = [...new Map(results.map(item => [item.index, item])).values()];
        return uniqueResults.slice(0, 15);
    }
    
    // 顯示搜尋結果
    displayResults(results) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>沒有找到相關結果</p>';
        } else {
            const html = results.map(result => `
                <div class="search-result-item">
                    <h4>${result.element.querySelector('h3')?.textContent || '術語'}</h4>
                    <p>${result.element.querySelector('p')?.textContent || ''}</p>
                </div>
            `).join('');
            
            searchResults.innerHTML = html;
        }
        
        searchResults.style.display = 'block';
    }
    
    // 初始化
    init() {
        this.buildSearchIndex();
        
        const searchInput = document.getElementById('smartSearchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query) {
                    const results = this.performSearch(query);
                    this.displayResults(results);
                }
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput?.value.trim();
                if (query) {
                    const results = this.performSearch(query);
                    this.displayResults(results);
                }
            });
        }
        
        console.log('搜尋模組載入完成');
    }
}

// 建立實例並匯出
window.SearchModule = new SearchModule();
