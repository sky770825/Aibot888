const {
    searchDelay: 500,
    animationDuration: 300,
    maxSearchResults: 15,
    breakpoints:{
    mobile: 768,
    tablet: 1024,
    desktop: 1200
}
,
    lazyLoadThreshold: 50,
    itemsPerPage: 20
}
;
const new Map();
const new Map();
function debounce(func,
    wait){
    let timeout;
return function executedFunction(...args){
    const ()=>{
    clearTimeout(timeout);
func.apply(this,
    args);

}
;
clearTimeout(timeout);
timeout=setTimeout(later,
    wait);

}
;

}
function throttle(func,
    limit){
    let inThrottle;
return function(){
    const arguments;
const this;
if (!inThrottle){
    func.apply(context,
    args);
inThrottle=true;
setTimeout(()=> inThrottle=false,
    limit);

}

}
;

}
function buildSearchIndex(){
    const document.querySelectorAll('.terminology-card,
    .command-card');
terms.forEach((term,
    index)=>{
    const term.textContent.toLowerCase();
const text.split(/\s+/);
words.forEach(word=>{
    if (word.length > 2){
    if (!searchIndex.has(word)){
    searchIndex.set(word,
    []);

}
searchIndex.get(word).push({
    element: term,
    index: index,
    text: text
}
);

}

}
);

}
);

}
function performSearch(term){
    if (term.length < 2)
    return [];
const [];
const term.split(/\s+/);
searchWords.forEach(word=>{
    if (searchIndex.has(word)){
    results.push(...searchIndex.get(word));

}

}
);
const [...new Map(results.map(item=> [item.index,
    item])).values()];
return uniqueResults.slice(0,
    CONFIG.maxSearchResults);

}
function initLazyLoading(){
    const {
    root: null,
    rootMargin: `${
    CONFIG.lazyLoadThreshold
}
px`,
    threshold: 0.1
}
;
const new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
    if (entry.isIntersecting){
    const entry.target;
element.classList.add('loaded');
element.style.opacity='0';
element.style.transform='translateY(20px)';
element.style.transition='opacity 0.3s ease,
    transform 0.3s ease';
requestAnimationFrame(()=>{
    element.style.opacity='1';
element.style.transform='translateY(0)';

}
);
observer.unobserve(element);

}

}
);

}
,
    observerOptions);
document.querySelectorAll('.terminology-card,
    .command-card').forEach(card=>{
    observer.observe(card);

}
);

}
function initPagination(){
    const document.getElementById('glossaryGrid');
if (!glossaryGrid)return;
const Array.from(glossaryGrid.children);
const Math.ceil(allItems.length / CONFIG.itemsPerPage);
let 1;
function showPage(page){
    const (page - 1)* CONFIG.itemsPerPage;
const startIndex + CONFIG.itemsPerPage;
allItems.forEach((item,
    index)=>{
    if (index >=startIndex && index < endIndex){
    item.style.display='block';
item.classList.add('loaded');

}
else{
    item.style.display='none';

}

}
);

}
function addLoadMoreButton(){
    if (currentPage >=totalPages)return;
const document.createElement('button');
loadMoreBtn.className='load-more-btn';
loadMoreBtn.textContent='載入更多術語';
loadMoreBtn.style.cssText=` display: block;
margin: 20px auto;
padding: 12px 24px;
background: var(--primary-color);
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
font-size: 16px;
transition: all 0.3s ease;
`;
loadMoreBtn.addEventListener('click',
    ()=>{
    currentPage++;
showPage(currentPage);
if (currentPage >=totalPages){
    loadMoreBtn.style.display='none';

}

}
);
glossaryGrid.parentNode.insertBefore(loadMoreBtn,
    glossaryGrid.nextSibling);

}
showPage(1);
addLoadMoreButton();

}
document.addEventListener('DOMContentLoaded',
    function(){
    buildSearchIndex();
initLazyLoading();
initPagination();
const document.querySelector('.hamburger');
const document.querySelector('.nav-menu');
const document.querySelectorAll('.nav-link');
hamburger.addEventListener('click',
    function(){
    hamburger.classList.toggle('active');
navMenu.classList.toggle('active');

}
);
navLinks.forEach(link=>{
    link.addEventListener('click',
    function(){
    hamburger.classList.remove('active');
navMenu.classList.remove('active');

}
);

}
);
navLinks.forEach(link=>{
    link.addEventListener('click',
    function(e){
    e.preventDefault();
const this.getAttribute('href');
const document.querySelector(targetId);
if (targetSection){
    const targetSection.offsetTop - 80;
window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
}
);

}

}
);

}
);
const document.querySelectorAll('.tab-btn');
const document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn=>{
    btn.addEventListener('click',
    function(){
    const this.getAttribute('data-tab');
tabBtns.forEach(b=> b.classList.remove('active'));
tabPanels.forEach(p=> p.classList.remove('active'));
this.classList.add('active');
const document.getElementById(targetTab);
if (targetPanel){
    targetPanel.classList.add('active');
+ '...');

}
else{
    
}

}
);

}
);
let scrollTimeout;
window.addEventListener('scroll',
    function(){
    clearTimeout(scrollTimeout);
scrollTimeout=setTimeout(()=>{
    const document.querySelector('.navbar');
if (window.scrollY > 100){
    navbar.style.background='rgba(102,
    126,
    234,
    0.95)';
navbar.style.backdropFilter='blur(10px)';

}
else{
    navbar.style.background='linear-gradient(135deg,
    #667eea 0%,
    #764ba2 100%)';
navbar.style.backdropFilter='none';

}

}
,
    10);

}
);
const {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}
;
function debounce(func,
    wait){
    let timeout;
return function executedFunction(...args){
    const ()=>{
    clearTimeout(timeout);
func(...args);

}
;
clearTimeout(timeout);
timeout=setTimeout(later,
    wait);

}
;

}
const new IntersectionObserver(function(entries){
    requestAnimationFrame(()=>{
    entries.forEach(entry=>{
    if (entry.isIntersecting){
    entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';
observer.unobserve(entry.target);

}

}
);

}
);

}
,
    observerOptions);
function initializeAnimations(){
    const document.querySelectorAll('.terminology-card,
    .command-card,
    .resource-card');
const 10;
let 0;
function processBatch(){
    const currentBatch * batchSize;
const Math.min(start + batchSize,
    animatedElements.length);
for (
let start;
i < end;
i++){
    const animatedElements[i];
el.style.opacity='0';
el.style.transform='translateY(30px)';
el.style.transition='opacity 0.6s ease,
    transform 0.6s ease';
observer.observe(el);

}
currentBatch++;
if (end < animatedElements.length){
    setTimeout(processBatch,
    16);

}

}
processBatch();

}
setTimeout(initializeAnimations,
    100);
function animateCodeLines(){
    const document.querySelectorAll('.code-line');
codeLines.forEach((line,
    index)=>{
    setTimeout(()=>{
    line.style.animation='none';
line.offsetHeight;
line.style.animation='codeTyping 2s ease-in-out infinite';

}
,
    index * 200);

}
);

}
setTimeout(animateCodeLines,
    1000);
const document.querySelectorAll('.btn,
    .resource-link');
buttons.forEach(btn=>{
    btn.addEventListener('click',
    function(e){
    const document.createElement('span');
const this.getBoundingClientRect();
const Math.max(rect.width,
    rect.height);
const e.clientX - rect.left - size / 2;
const e.clientY - rect.top - size / 2;
ripple.style.width=ripple.style.height=size + 'px';
ripple.style.left=x + 'px';
ripple.style.top=y + 'px';
ripple.classList.add('ripple');
this.appendChild(ripple);
setTimeout(()=>{
    ripple.remove();

}
,
    600);

}
);

}
);
const document.createElement('style');
style.textContent=` .btn,
    .resource-link{
    position: relative;
overflow: hidden;

}
.ripple{
    position: absolute;
border-radius: 50%;
background: rgba(255,
    255,
    255,
    0.6);
transform: scale(0);
animation: ripple-animation 0.6s linear;
pointer-events: none;

}
@keyframes ripple-animation{
    to{
    transform: scale(4);
opacity: 0;

}

}
`;
document.head.appendChild(style);
const document.getElementById('themeToggle');
const localStorage.getItem('theme')|| 'light';
document.documentElement.setAttribute('data-theme',
    currentTheme);
updateThemeIcon(currentTheme);
themeToggle.addEventListener('click',
    function(){
    const document.documentElement.getAttribute('data-theme');
const currentTheme==='dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme',
    newTheme);
localStorage.setItem('theme',
    newTheme);
updateThemeIcon(newTheme);

}
);
function updateThemeIcon(theme){
    const themeToggle.querySelector('i');
if (theme==='dark'){
    icon.className='fas fa-sun';
themeToggle.setAttribute('aria-label',
    '切換到明亮主題');
themeToggle.setAttribute('title',
    '切換到明亮主題');

}
else{
    icon.className='fas fa-moon';
themeToggle.setAttribute('aria-label',
    '切換到暗色主題');
themeToggle.setAttribute('title',
    '切換到暗色主題');

}

}
const document.querySelectorAll('.theme-option');
const localStorage.getItem('colorTheme')|| 'golden';
document.documentElement.setAttribute('data-color-theme',
    currentColorTheme);
updateActiveColorTheme(currentColorTheme);
colorThemeOptions.forEach(option=>{
    option.addEventListener('click',
    function(){
    const this.getAttribute('data-theme');
document.documentElement.setAttribute('data-color-theme',
    selectedTheme);
localStorage.setItem('colorTheme',
    selectedTheme);
updateActiveColorTheme(selectedTheme);
document.body.style.transition='all 0.5s ease';
setTimeout(()=>{
    document.body.style.transition='';

}
,
    500);

}
);

}
);
function updateActiveColorTheme(theme){
    colorThemeOptions.forEach(option=>{
    option.classList.remove('active');
if (option.getAttribute('data-theme')===theme){
    option.classList.add('active');

}

}
);

}
function addLoadingProgress(){
    const document.createElement('div');
progressBar.className='loading-progress';
progressBar.innerHTML='<div class="progress-fill"></div>';
document.body.appendChild(progressBar);
window.addEventListener('load',
    function(){
    progressBar.style.opacity='0';
setTimeout(()=>{
    progressBar.remove();

}
,
    500);

}
);

}
function addTooltips(){
    const document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(element=>{
    element.addEventListener('mouseenter',
    function(){
    const document.createElement('div');
tooltip.className='tooltip';
tooltip.textContent=this.getAttribute('data-tooltip');
document.body.appendChild(tooltip);
const this.getBoundingClientRect();
tooltip.style.left=rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
tooltip.style.top=rect.top - tooltip.offsetHeight - 10 + 'px';

}
);
element.addEventListener('mouseleave',
    function(){
    const document.querySelector('.tooltip');
if (tooltip){
    tooltip.remove();

}

}
);

}
);

}
document.addEventListener('keydown',
    function(e){
    if (e.key==='Escape'){
    hamburger.classList.remove('active');
navMenu.classList.remove('active');

}
if (e.key >='1' && e.key <='6'){
    const parseInt(e.key)- 1;
if (tabBtns[tabIndex]){
    tabBtns[tabIndex].click();

}

}

}
);
const document.getElementById('backToTop');
let backToTopTimeout;
window.addEventListener('scroll',
    function(){
    clearTimeout(backToTopTimeout);
backToTopTimeout=setTimeout(()=>{
    if (window.pageYOffset > 300){
    backToTopBtn.classList.add('show');

}
else{
    backToTopBtn.classList.remove('show');

}

}
,
    10);

}
);
backToTopBtn.addEventListener('click',
    function(){
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
}
);

}
);
addLoadingProgress();
addTooltips();
initializeGlossary();
initializeSmartSearch();
initMobileChecker();
initOrientationDetection();
initLayoutOptimizationChecker();
initProjectAnalyzer();
if ('serviceWorker' in navigator){
    window.addEventListener('load',
    function(){
    navigator.serviceWorker.register('/sw.js').then(function(registration){
    
}
).catch(function(error){
    
}
);

}
);

}
if (window.location.hostname==='localhost' || window.location.hostname==='127.0.0.1'){
    window.addEventListener('load',
    function(){
    const performance.timing.loadEventEnd - performance.timing.navigationStart;

}
);

}

}
);
function initializeSmartSearch(){
    const document.getElementById('smartSearchInput');
const document.getElementById('searchBtn');
const document.getElementById('searchResults');
const [{
    id: 'frontend-component',
    title: '元件開發',
    category: '前端開發',
    keywords: [ '元件',
    'component',
    '組件',
    '按鈕',
    'button',
    '表單',
    'form',
    '卡片',
    'card',
    '登入',
    'login',
    '註冊',
    'register',
    '響應式',
    'responsive',
    '輸入框',
    'input',
    '下拉選單',
    'select',
    'checkbox',
    'radio',
    'textarea',
    'modal',
    'popup',
    '彈窗',
    'header',
    'footer',
    'sidebar',
    'navbar',
    'menu',
    '導航',
    'navigation',
    'breadcrumb',
    'pagination',
    '分頁',
    'carousel',
    '輪播',
    'slider',
    'tabs',
    '標籤頁',
    'accordion',
    '手風琴',
    'tooltip',
    '提示',
    'dropdown',
    '下拉',
    'modal',
    'dialog',
    '對話框',
    'loading',
    '載入',
    'spinner',
    '進度條',
    'progress',
    'alert',
    '警告',
    'notification',
    '通知',
    'badge',
    '徽章',
    'avatar',
    '頭像',
    'icon',
    '圖標',
    'logo',
    '標誌',
    '區塊',
    'block',
    '區塊寬度',
    'block width',
    '區塊高度',
    'block height',
    '區塊大小',
    '寬度調整',
    'width adjust',
    '高度調整',
    'height adjust',
    '大小調整',
    'size adjust',
    '欄位',
    'column',
    '欄寬',
    'column width',
    '欄高',
    'column height',
    '欄位大小',
    '容器',
    'container',
    '容器寬度',
    'container width',
    '容器高度',
    'container height',
    '外框',
    'frame',
    '邊框',
    'border',
    '邊框寬度',
    'border width',
    '邊框樣式',
    'border style',
    '內邊距',
    'padding',
    '外邊距',
    'margin',
    '間距',
    'spacing',
    '空隙',
    'gap',
    '對齊',
    'align',
    '置中',
    'center',
    '靠左',
    'left',
    '靠右',
    'right',
    '分散',
    'justify',
    '排列',
    'arrange',
    '佈局',
    'layout',
    '排版',
    'typography',
    '位置',
    'position',
    '浮動',
    'float',
    '清除',
    'clear',
    '顯示',
    'display',
    '隱藏',
    'hide',
    '可見',
    'visible',
    '透明度',
    'opacity',
    '可見性',
    'visibility',
    '層級',
    'z-index',
    '層疊',
    'stack' ],
    description: '建立可重用的前端元件，支援響應式設計和互動功能',
    template: `請幫我建立一個 [元件名稱] 元件： - 功能：[具體功能描述] - 樣式：[設計風格要求] - 響應式：[斷點設定] - 可重用性：[參數化需求]`,
    customizable: true,
    options: [{
    id: 'component-type',
    label: '元件類型',
    description: '選擇要建立的元件類型',
    default: true
}
,
    {
    id: 'functionality',
    label: '功能需求',
    description: '定義元件的具體功能',
    default: true
}
,
    {
    id: 'styling',
    label: '樣式設計',
    description: '元件的視覺設計要求',
    default: true
}
,
    {
    id: 'responsive',
    label: '響應式設計',
    description: '適配不同螢幕尺寸',
    default: true
}
,
    {
    id: 'reusability',
    label: '可重用性',
    description: '參數化和模組化設計',
    default: true
}
,
    {
    id: 'accessibility',
    label: '無障礙支援',
    description: '鍵盤導航和螢幕閱讀器支援',
    default: true
}
,
    {
    id: 'interactions',
    label: '互動效果',
    description: '懸停、點擊等互動效果',
    default: true
}
,
    {
    id: 'state-management',
    label: '狀態管理',
    description: '元件的狀態處理',
    default: true
}
,
    {
    id: 'testing',
    label: '測試支援',
    description: '單元測試和整合測試',
    default: false
}
,
    {
    id: 'documentation',
    label: '文檔說明',
    description: '使用說明和API文檔',
    default: false
}
]
}
,
    {
    id: 'frontend-state',
    title: '狀態管理',
    category: '前端開發',
    keywords: [ '狀態',
    'state',
    '資料',
    '管理',
    '全域',
    'global',
    '本地',
    'local',
    '非同步',
    'async',
    'API',
    '資料擷取',
    'data fetching',
    'redux',
    'vuex',
    'mobx',
    'zustand',
    'recoil',
    'context',
    'provider',
    'store',
    'store',
    'action',
    'reducer',
    'dispatch',
    'commit',
    'mutation',
    'getter',
    'computed',
    'watch',
    'subscribe',
    'observable',
    'reactive',
    '響應式',
    'reactive',
    '單向資料流',
    'unidirectional',
    'flux',
    'mvc',
    'mvvm',
    '狀態提升',
    'lifting state',
    'props drilling',
    '狀態共享',
    'state sharing',
    '快取',
    'cache',
    '持久化',
    'persistence',
    'localStorage',
    'sessionStorage',
    '狀態同步',
    'state sync',
    '樂觀更新',
    'optimistic update',
    '悲觀更新',
    'pessimistic' ],
    description: '設計和管理應用程式的狀態，包括全域和本地狀態',
    template: `請幫我設計狀態管理方案： - 全域狀態：[需要共享的資料] - 本地狀態：[元件內部狀態] - 非同步處理：[API 呼叫邏輯] - 快取策略：[資料快取需求]`,
    customizable: true,
    options: [{
    id: 'state-architecture',
    label: '狀態架構',
    description: '選擇狀態管理架構（Redux/Vuex/Zustand等）',
    default: true
}
,
    {
    id: 'global-state',
    label: '全域狀態',
    description: '需要跨元件共享的狀態',
    default: true
}
,
    {
    id: 'local-state',
    label: '本地狀態',
    description: '元件內部的私有狀態',
    default: true
}
,
    {
    id: 'async-handling',
    label: '非同步處理',
    description: 'API呼叫和異步操作處理',
    default: true
}
,
    {
    id: 'caching-strategy',
    label: '快取策略',
    description: '資料快取和持久化方案',
    default: true
}
,
    {
    id: 'state-persistence',
    label: '狀態持久化',
    description: '使用localStorage等持久化狀態',
    default: true
}
,
    {
    id: 'devtools',
    label: '開發工具',
    description: '狀態管理的調試工具',
    default: true
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '狀態更新的效能優化',
    default: true
}
,
    {
    id: 'testing',
    label: '測試支援',
    description: '狀態管理的測試策略',
    default: false
}
,
    {
    id: 'middleware',
    label: '中介軟體',
    description: '日誌、異步等中介軟體',
    default: false
}
]
}
,
    {
    id: 'frontend-data',
    title: '資料擷取',
    category: '前端開發',
    keywords: [ '資料',
    'data',
    'API',
    '擷取',
    'fetch',
    '載入',
    'loading',
    '非同步',
    'async',
    'await',
    'fetch',
    'axios',
    'request',
    'response',
    'http',
    'https',
    'rest',
    'graphql',
    'websocket',
    'socket',
    '實時',
    'realtime',
    'polling',
    '輪詢',
    'subscription',
    '訂閱',
    'query',
    '查詢',
    'mutation',
    '變更',
    'get',
    'post',
    'put',
    'delete',
    'patch',
    'head',
    'options',
    '狀態碼',
    'status code',
    '200',
    '404',
    '500',
    '錯誤處理',
    'error handling',
    'try',
    'catch',
    'finally',
    'throw',
    'error',
    '重試',
    'retry',
    'timeout',
    '超時',
    'abort',
    '取消',
    'cancel',
    'debounce',
    '防抖',
    'throttle',
    '節流',
    'cache',
    '快取',
    'memoization',
    '記憶化',
    'loading state',
    '載入狀態',
    'skeleton',
    '骨架屏',
    'placeholder',
    '佔位符',
    'optimistic update',
    '樂觀更新',
    'pessimistic update',
    '悲觀更新' ],
    description: '處理資料擷取和API呼叫，確保資料載入完成後才渲染',
    template: `請使用 Async/Await 處理資料擷取： - 在頁面載入時執行 API Call - 確保資料載入完成後才渲染 - 添加錯誤處理和載入狀態 - 實作重試機制和超時處理`,
    customizable: true,
    options: [{
    id: 'api-client',
    label: 'API客戶端',
    description: '選擇API客戶端（fetch/axios等）',
    default: true
}
,
    {
    id: 'loading-states',
    label: '載入狀態',
    description: '資料載入時的UI狀態處理',
    default: true
}
,
    {
    id: 'error-handling',
    label: '錯誤處理',
    description: 'API錯誤的處理和顯示',
    default: true
}
,
    {
    id: 'retry-mechanism',
    label: '重試機制',
    description: '失敗時的自動重試邏輯',
    default: true
}
,
    {
    id: 'timeout',
    label: '超時處理',
    description: '設定請求超時時間',
    default: true
}
,
    {
    id: 'caching',
    label: '快取策略',
    description: '資料快取和記憶化',
    default: true
}
,
    {
    id: 'optimistic-updates',
    label: '樂觀更新',
    description: '預先更新UI的樂觀策略',
    default: false
}
,
    {
    id: 'real-time',
    label: '即時更新',
    description: 'WebSocket或輪詢的即時資料',
    default: false
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '防抖動、節流等效能優化',
    default: true
}
,
    {
    id: 'testing',
    label: '測試支援',
    description: 'API呼叫的測試策略',
    default: false
}
]
}
,
    {
    id: 'ui-modal',
    title: '進階互動元件',
    category: 'UI/UX設計',
    keywords: [ '彈出',
    'modal',
    'dialog',
    '視窗',
    'window',
    'popup',
    'overlay',
    '覆蓋層',
    '彈跳視窗',
    '彈出視窗',
    '彈窗',
    '彈出框',
    '對話框',
    '對話視窗',
    '彈出層',
    '表單',
    'form',
    '登入',
    'login',
    '註冊',
    'register',
    '訂閱',
    'subscribe',
    '彈出式',
    'popup',
    'lightbox',
    '燈箱',
    'drawer',
    '抽屜',
    'sidebar',
    '側邊欄',
    'tooltip',
    '提示框',
    'hint',
    '提示',
    'dropdown',
    '下拉選單',
    'select',
    '選擇器',
    'accordion',
    '手風琴',
    'collapse',
    '摺疊',
    'tabs',
    '標籤頁',
    'tab',
    '頁籤',
    'carousel',
    '輪播',
    'slider',
    '滑塊',
    'swiper',
    'swipe',
    '滑動',
    'scroll',
    'scrollbar',
    '滾動條',
    'infinite scroll',
    '無限滾動',
    'lazy loading',
    '懶載入',
    'skeleton',
    '骨架屏',
    'placeholder',
    '佔位符',
    'loading',
    '載入中',
    'spinner',
    'progress',
    '進度條',
    'stepper',
    '步驟器',
    'wizard',
    '精靈',
    'onboarding',
    '引導',
    'tour',
    '導覽',
    'walkthrough',
    'tutorial',
    '教學',
    'help',
    '幫助',
    'notification',
    '通知',
    'alert',
    '警告',
    'toast',
    '吐司',
    'snackbar',
    '快照',
    'badge',
    '徽章',
    'chip',
    '標籤',
    'tag',
    'label',
    '標籤',
    'avatar',
    '頭像',
    'icon',
    '圖標',
    'button',
    '按鈕',
    'link',
    '連結',
    'breadcrumb',
    '麵包屑',
    '浮層',
    '浮動視窗',
    '遮罩',
    'mask',
    'backdrop',
    '背景',
    '關閉',
    'close',
    '懸浮按鈕',
    'floating button',
    'FAB',
    'floating action button',
    '固定按鈕',
    'fixed button',
    'speed dial',
    '快速撥號',
    '展開按鈕',
    'expand button',
    '圓形按鈕',
    'circular button',
    'material design',
    'material ui',
    'fab',
    'fab button',
    '懸浮動作',
    'floating action',
    '確認',
    'confirm',
    '取消',
    'cancel',
    '確定',
    'ok',
    '是',
    'yes',
    '否',
    'no' ],
    description: '建立彈出式視窗和互動元件，提升使用者體驗',
    template: `請建立 Modal 彈出式視窗： - 當使用者點擊觸發按鈕時顯示 - 包含表單輸入功能 - 支援背景遮蔽和關閉功能 - 響應式設計適配各種螢幕`,
    customizable: true,
    options: [{
    id: 'modal-type',
    label: '視窗類型',
    description: '選擇彈出視窗的類型',
    default: true
}
,
    {
    id: 'trigger-action',
    label: '觸發方式',
    description: '設定視窗的觸發動作',
    default: true
}
,
    {
    id: 'backdrop',
    label: '背景遮罩',
    description: '顯示半透明背景遮罩',
    default: true
}
,
    {
    id: 'close-options',
    label: '關閉選項',
    description: '提供多種關閉方式',
    default: true
}
,
    {
    id: 'form-elements',
    label: '表單元素',
    description: '包含輸入欄位和按鈕',
    default: true
}
,
    {
    id: 'animation',
    label: '動畫效果',
    description: '添加開啟/關閉動畫',
    default: true
}
,
    {
    id: 'responsive',
    label: '響應式設計',
    description: '適配不同螢幕尺寸',
    default: true
}
,
    {
    id: 'accessibility',
    label: '無障礙支援',
    description: '支援鍵盤導航和螢幕閱讀器',
    default: true
}
,
    {
    id: 'positioning',
    label: '位置設定',
    description: '設定視窗在螢幕中的位置',
    default: true
}
,
    {
    id: 'size-options',
    label: '尺寸選項',
    description: '提供不同尺寸的視窗',
    default: false
}
]
}
,
    {
    id: 'ui-floating-button',
    title: '懸浮按鈕',
    category: 'UI/UX設計',
    keywords: [ '懸浮按鈕',
    'floating button',
    'FAB',
    'floating action button',
    '固定按鈕',
    'fixed button',
    'speed dial',
    '快速撥號',
    '展開按鈕',
    'expand button',
    '圓形按鈕',
    'circular button',
    'material design',
    'material ui',
    'fab',
    'fab button',
    '懸浮動作',
    'floating action',
    '回到頂部',
    'back to top',
    'scroll to top',
    '滾動到頂部',
    '固定位置',
    'fixed position',
    '右下角',
    'bottom right',
    '角落',
    'corner',
    'z-index',
    '層級',
    '陰影',
    'shadow',
    '漸層',
    'gradient',
    'hover',
    '懸停',
    '點擊',
    'click',
    '動畫',
    'animation',
    '展開',
    'expand',
    '收起',
    'collapse',
    '子按鈕',
    'sub button',
    '扇形',
    'fan',
    '直線',
    'linear',
    '背景遮罩',
    'backdrop',
    '半透明',
    'semi-transparent' ],
    description: '建立懸浮動作按鈕，提供快速存取主要功能',
    template: `請建立懸浮按鈕(Floating Action Button)： - 點擊後回到頂部或開啟選單 - 響應式設計，適配不同螢幕尺寸 - 支援展開式子按鈕功能 - 添加懸停動畫效果`,
    customizable: true,
    options: [{
    id: 'fixed-position',
    label: '位置設定',
    description: '固定在螢幕右下角',
    default: true
}
,
    {
    id: 'circular-shape',
    label: '形狀設計',
    description: '圓形設計',
    default: true
}
,
    {
    id: 'back-to-top',
    label: '回到頂部功能',
    description: '點擊後平滑滾動到頁面頂部',
    default: true
}
,
    {
    id: 'speed-dial',
    label: '展開式子按鈕',
    description: '點擊主按鈕後展開多個子按鈕',
    default: false
}
,
    {
    id: 'backdrop',
    label: '背景遮罩效果',
    description: '展開時顯示半透明背景遮罩',
    default: false
}
,
    {
    id: 'hover-animation',
    label: '懸停動畫',
    description: '滑鼠懸停時的動畫效果',
    default: true
}
,
    {
    id: 'responsive',
    label: '響應式設計',
    description: '適配不同螢幕尺寸',
    default: true
}
,
    {
    id: 'material-design',
    label: 'Material Design 風格',
    description: '遵循 Google Material Design 規範',
    default: true
}
,
    {
    id: 'gradient-bg',
    label: '漸層背景',
    description: '使用漸層色彩作為按鈕背景',
    default: true
}
,
    {
    id: 'shadow-effect',
    label: '陰影效果',
    description: '添加立體陰影效果',
    default: true
}
]
}
,
    {
    id: 'ui-animation',
    title: '動畫效果',
    category: 'UI/UX設計',
    keywords: [ '動畫',
    'animation',
    '過渡',
    'transition',
    'keyframes',
    '效果',
    'effect',
    '旋轉',
    'rotate',
    '淡入',
    'fade',
    '懸停',
    'hover',
    '點擊',
    'click',
    '滑動',
    'slide',
    '縮放',
    'scale',
    '變形',
    'transform',
    '位移',
    'translate',
    '透明度',
    'opacity',
    '可見性',
    'visibility',
    '顯示',
    'show',
    '隱藏',
    'hide',
    '彈跳',
    'bounce',
    '搖擺',
    'shake',
    '震動',
    'vibrate',
    '脈動',
    'pulse',
    '閃爍',
    'blink',
    '閃光',
    'flash',
    '發光',
    'glow',
    '陰影',
    'shadow',
    '漸變',
    'gradient',
    '背景',
    'background',
    '顏色',
    'color',
    '邊框',
    'border',
    '圓角',
    'border-radius',
    '陰影',
    'box-shadow',
    '文字陰影',
    'text-shadow',
    '3D',
    'perspective',
    '景深',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    '傾斜',
    'timing',
    '時間',
    'duration',
    '延遲',
    'delay',
    'easing',
    '緩動',
    'cubic-bezier',
    'linear',
    '線性',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'step',
    '步驟',
    'infinite',
    '無限',
    'alternate',
    '交替',
    'reverse',
    '反向',
    'forwards',
    '保持',
    'backwards',
    'backward',
    'both',
    '兩者',
    'none',
    '無',
    'paused',
    '暫停',
    'running',
    '運行',
    'will-change',
    'transform',
    'opacity',
    '效能',
    'performance',
    'GPU',
    '硬體加速',
    'hardware acceleration',
    'composite',
    '合成',
    'layer',
    '圖層',
    '彈跳視窗',
    '彈出動畫',
    '彈出效果',
    '彈出動畫',
    '彈出動畫效果',
    '彈出動畫效果',
    '滑入',
    'slide in',
    '滑出',
    'slide out',
    '淡入淡出',
    'fade in out',
    '淡入',
    'fade in',
    '淡出',
    'fade out',
    '縮放動畫',
    'scale animation',
    '旋轉動畫',
    'rotate animation',
    '移動動畫',
    'move animation',
    '變形動畫',
    'transform animation',
    '變換',
    'transform',
    '動畫時間',
    'animation time',
    '動畫速度',
    'animation speed',
    '動畫延遲',
    'animation delay',
    '動畫持續時間',
    'animation duration',
    '動畫方向',
    'animation direction',
    '動畫填充',
    'animation fill',
    '動畫播放',
    'animation play',
    '動畫暫停',
    'animation pause',
    '動畫停止',
    'animation stop',
    '動畫重置',
    'animation reset',
    '動畫循環',
    'animation loop',
    '動畫重複',
    'animation repeat' ],
    description: '使用CSS動畫和過渡效果，提升視覺體驗',
    template: `請使用 CSS Keyframes 製作動畫： - 為網站元素製作動畫效果 - 按鈕懸停時的平滑變色效果 - 頁面載入時的淡入動畫 - 元件切換時的過渡動畫`,
    customizable: true,
    options: [{
    id: 'animation-type',
    label: '動畫類型',
    description: '選擇動畫的類型（旋轉、縮放、淡入等）',
    default: true
}
,
    {
    id: 'trigger-event',
    label: '觸發事件',
    description: '設定動畫的觸發時機',
    default: true
}
,
    {
    id: 'duration',
    label: '動畫時長',
    description: '設定動畫的持續時間',
    default: true
}
,
    {
    id: 'easing',
    label: '緩動效果',
    description: '選擇動畫的緩動函數',
    default: true
}
,
    {
    id: 'direction',
    label: '動畫方向',
    description: '設定動畫的播放方向',
    default: true
}
,
    {
    id: 'iteration',
    label: '重複次數',
    description: '設定動畫的重複次數',
    default: true
}
,
    {
    id: 'delay',
    label: '延遲時間',
    description: '設定動畫開始前的延遲',
    default: false
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '使用硬體加速優化動畫效能',
    default: true
}
,
    {
    id: 'accessibility',
    label: '無障礙支援',
    description: '支援減少動畫偏好設定',
    default: true
}
,
    {
    id: '3d-effects',
    label: '3D效果',
    description: '添加3D變換效果',
    default: false
}
]
}
,
    {
    id: 'responsive-design',
    title: '響應式設計',
    category: 'UI/UX設計',
    keywords: [ '響應式',
    'responsive',
    '斷點',
    'breakpoint',
    '行動',
    'mobile',
    '手機',
    'phone',
    '平板',
    'tablet',
    '桌面',
    'desktop',
    '適配',
    'adapt',
    '螢幕',
    'screen',
    'viewport',
    '視窗',
    '媒體查詢',
    'media query',
    '@media',
    'min-width',
    'max-width',
    'grid',
    '網格',
    'flexbox',
    'flex',
    'grid-template',
    'grid-area',
    'grid-gap',
    'gap',
    '間距',
    'padding',
    'margin',
    'width',
    'height',
    'max-width',
    'min-width',
    'em',
    'rem',
    'px',
    'vw',
    'vh',
    'vmin',
    'vmax',
    '百分比',
    'percentage',
    '%',
    '流體',
    'fluid',
    '彈性',
    'flexible',
    '自適應',
    'adaptive',
    'mobile-first',
    '行動優先',
    'desktop-first',
    '桌面優先',
    'progressive enhancement',
    '漸進增強',
    'graceful degradation',
    '優雅降級',
    'touch',
    '觸控',
    'gesture',
    '手勢',
    'swipe',
    '滑動',
    'pinch',
    '縮放',
    'zoom',
    '縮放',
    'orientation',
    '方向',
    'portrait',
    '直向',
    'landscape',
    '橫向',
    'device-pixel-ratio',
    '像素比',
    'retina',
    '高解析度',
    'high dpi',
    'density',
    '密度',
    'resolution',
    '解析度',
    '區塊',
    'block',
    '欄位',
    'column',
    '欄寬',
    'column width',
    '欄高',
    'column height',
    '寬度',
    'width',
    '高度',
    'height',
    '大小',
    'size',
    '尺寸',
    'dimension',
    '調整',
    'adjust',
    '設定',
    'set',
    '修改',
    'modify',
    '改變',
    'change',
    '佈局',
    'layout',
    '排版',
    'typography',
    '排列',
    'arrange',
    '對齊',
    'align',
    '置中',
    'center',
    '靠左',
    'left',
    '靠右',
    'right',
    '分散',
    'justify',
    '容器',
    'container',
    '包裝',
    'wrapper',
    '外框',
    'frame',
    '邊框',
    'border',
    '內邊距',
    'padding',
    '外邊距',
    'margin',
    '間距',
    'spacing',
    '空隙',
    'gap',
    '行高',
    'line-height',
    '字體大小',
    'font-size',
    '字重',
    'font-weight',
    '顏色',
    'color',
    '背景色',
    'background',
    '前景色',
    'foreground',
    '文字色',
    'text color' ],
    description: '設計響應式佈局，適配各種螢幕尺寸',
    template: `請設定響應式斷點： - 行動裝置：[320px-768px] - 平板：[768px-1024px] - 桌面：[1024px+] - 大螢幕：[1440px+]`,
    customizable: true,
    options: [{
    id: 'breakpoints',
    label: '斷點設定',
    description: '自訂響應式斷點',
    default: true
}
,
    {
    id: 'layout-system',
    label: '佈局系統',
    description: '選擇佈局方式（Grid/Flexbox）',
    default: true
}
,
    {
    id: 'mobile-first',
    label: '行動優先',
    description: '採用行動優先設計策略',
    default: true
}
,
    {
    id: 'typography',
    label: '字體響應',
    description: '字體大小的響應式調整',
    default: true
}
,
    {
    id: 'images',
    label: '圖片響應',
    description: '圖片的自適應處理',
    default: true
}
,
    {
    id: 'navigation',
    label: '導航響應',
    description: '導航選單的響應式設計',
    default: true
}
,
    {
    id: 'touch-optimization',
    label: '觸控優化',
    description: '針對觸控設備的優化',
    default: true
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '響應式設計的效能考量',
    default: true
}
,
    {
    id: 'testing',
    label: '測試工具',
    description: '響應式設計的測試方法',
    default: false
}
,
    {
    id: 'accessibility',
    label: '無障礙支援',
    description: '響應式設計的無障礙考量',
    default: true
}
]
}
,
    {
    id: 'backend-api',
    title: 'API設計',
    category: '後端開發',
    keywords: ['API',
    '後端',
    '伺服器',
    '端點',
    'REST',
    '資料',
    'CRUD',
    '資料庫'],
    description: '設計RESTful API，處理資料的增刪改查操作',
    template: `請設計 RESTful API： - 資源：[資料實體列表] - 端點：[CRUD 操作] - 請求格式：[JSON Schema] - 回應格式：[標準化回應] - 錯誤處理：[錯誤碼和訊息]`,
    customizable: true,
    options: [{
    id: 'api-architecture',
    label: 'API架構',
    description: '選擇API架構（REST/GraphQL/gRPC）',
    default: true
}
,
    {
    id: 'endpoints',
    label: '端點設計',
    description: '定義API端點和路由結構',
    default: true
}
,
    {
    id: 'data-models',
    label: '資料模型',
    description: '定義資料實體和關聯',
    default: true
}
,
    {
    id: 'request-response',
    label: '請求回應格式',
    description: 'JSON Schema和標準化回應',
    default: true
}
,
    {
    id: 'error-handling',
    label: '錯誤處理',
    description: '錯誤碼、訊息和處理策略',
    default: true
}
,
    {
    id: 'authentication',
    label: '身份驗證',
    description: 'API身份驗證和授權',
    default: true
}
,
    {
    id: 'rate-limiting',
    label: '速率限制',
    description: 'API呼叫頻率限制',
    default: true
}
,
    {
    id: 'validation',
    label: '資料驗證',
    description: '請求資料的驗證規則',
    default: true
}
,
    {
    id: 'documentation',
    label: 'API文檔',
    description: 'Swagger/OpenAPI文檔生成',
    default: false
}
,
    {
    id: 'testing',
    label: '測試策略',
    description: 'API測試和模擬',
    default: false
}
]
}
,
    {
    id: 'backend-auth',
    title: '身份驗證',
    category: '後端開發',
    keywords: ['登入',
    '註冊',
    '驗證',
    '身份',
    '認證',
    'JWT',
    'OAuth',
    '權限',
    '安全'],
    description: '實作使用者身份驗證和權限管理系統',
    template: `請實作身份驗證系統： - 註冊流程：[使用者註冊邏輯] - 登入驗證：[JWT/OAuth 實作] - 權限控制：[角色權限管理] - 安全性：[密碼加密、會話管理]`,
    customizable: true,
    options: [{
    id: 'auth-method',
    label: '驗證方式',
    description: '選擇驗證方式（JWT/OAuth/Session等）',
    default: true
}
,
    {
    id: 'registration',
    label: '註冊流程',
    description: '使用者註冊和驗證流程',
    default: true
}
,
    {
    id: 'login',
    label: '登入驗證',
    description: '登入驗證和會話管理',
    default: true
}
,
    {
    id: 'password-security',
    label: '密碼安全',
    description: '密碼加密和強度驗證',
    default: true
}
,
    {
    id: 'role-permissions',
    label: '角色權限',
    description: '角色管理和權限控制',
    default: true
}
,
    {
    id: 'two-factor',
    label: '雙因素驗證',
    description: '2FA/MFA多因素驗證',
    default: false
}
,
    {
    id: 'social-login',
    label: '社交登入',
    description: 'Google/Facebook等社交登入',
    default: false
}
,
    {
    id: 'session-management',
    label: '會話管理',
    description: '會話超時、刷新、登出',
    default: true
}
,
    {
    id: 'security-features',
    label: '安全功能',
    description: '防止暴力破解、帳號鎖定等',
    default: true
}
,
    {
    id: 'audit-logging',
    label: '審計日誌',
    description: '登入活動和安全性日誌',
    default: false
}
]
}
,
    {
    id: 'performance-optimization',
    title: '效能優化',
    category: '效能優化',
    keywords: ['效能',
    '優化',
    '速度',
    '載入',
    '快取',
    'CDN',
    '壓縮',
    '圖片',
    '程式碼'],
    description: '優化網站載入速度和執行效能',
    template: `請優化網站載入速度： - 程式碼分割：[lazy loading] - 圖片優化：[WebP、壓縮] - 快取策略：[browser cache] - CDN 設定：[內容分發網路]`,
    customizable: true,
    options: [{
    id: 'code-splitting',
    label: '程式碼分割',
    description: '實作程式碼分割和懶載入',
    default: true
}
,
    {
    id: 'image-optimization',
    label: '圖片優化',
    description: 'WebP格式、壓縮、響應式圖片',
    default: true
}
,
    {
    id: 'caching-strategy',
    label: '快取策略',
    description: '瀏覽器快取、CDN快取、API快取',
    default: true
}
,
    {
    id: 'cdn-setup',
    label: 'CDN設定',
    description: '內容分發網路配置',
    default: true
}
,
    {
    id: 'bundle-optimization',
    label: '打包優化',
    description: 'Webpack/Vite打包優化',
    default: true
}
,
    {
    id: 'database-optimization',
    label: '資料庫優化',
    description: '查詢優化、索引、連線池',
    default: true
}
,
    {
    id: 'api-optimization',
    label: 'API優化',
    description: 'API響應時間、分頁、快取',
    default: true
}
,
    {
    id: 'monitoring',
    label: '效能監控',
    description: '效能指標監控和告警',
    default: true
}
,
    {
    id: 'testing',
    label: '效能測試',
    description: '負載測試、壓力測試',
    default: false
}
,
    {
    id: 'advanced-techniques',
    label: '進階技術',
    description: 'Service Worker、預載入等',
    default: false
}
]
}
,
    {
    id: 'analytics-user-journey',
    title: '使用者旅程分析',
    category: '數據分析',
    keywords: ['使用者',
    '旅程',
    '分析',
    '流程',
    '結帳',
    '轉換',
    '優化',
    '體驗'],
    description: '分析使用者行為流程，優化轉換率',
    template: `請根據我們的使用者旅程，設計一個簡潔的結帳流程： - 減少中途放棄的機率 - 優化每個步驟的使用者體驗 - 添加進度指示器 - 簡化表單欄位`,
    customizable: true,
    options: [{
    id: 'journey-mapping',
    label: '旅程地圖',
    description: '繪製完整的使用者旅程流程',
    default: true
}
,
    {
    id: 'conversion-optimization',
    label: '轉換優化',
    description: '識別和優化轉換瓶頸',
    default: true
}
,
    {
    id: 'user-behavior',
    label: '行為分析',
    description: '分析使用者行為模式和偏好',
    default: true
}
,
    {
    id: 'funnel-analysis',
    label: '漏斗分析',
    description: '分析各階段的流失率',
    default: true
}
,
    {
    id: 'touchpoint-optimization',
    label: '接觸點優化',
    description: '優化關鍵接觸點體驗',
    default: true
}
,
    {
    id: 'data-collection',
    label: '資料收集',
    description: '設定資料收集和追蹤機制',
    default: true
}
,
    {
    id: 'segmentation',
    label: '用戶分群',
    description: '根據行為特徵進行用戶分群',
    default: true
}
,
    {
    id: 'personalization',
    label: '個人化',
    description: '基於旅程的個人化體驗',
    default: false
}
,
    {
    id: 'testing-framework',
    label: '測試框架',
    description: 'A/B測試和多元測試',
    default: false
}
,
    {
    id: 'reporting',
    label: '報告儀表板',
    description: '視覺化報告和儀表板',
    default: false
}
]
}
,
    {
    id: 'analytics-ab-testing',
    title: 'A/B 測試',
    category: '數據分析',
    keywords: ['A/B',
    '測試',
    '比較',
    '版本',
    '按鈕',
    '顏色',
    '文案',
    '轉換率'],
    description: '進行A/B測試，比較不同版本的效果',
    template: `請對首頁的 CTA 按鈕進行 A/B 測試： - 比較紅色和藍色按鈕的點擊率 - 測試不同的按鈕文案 - 分析轉換率差異 - 設定統計顯著性標準`,
    customizable: true,
    options: [{
    id: 'test-design',
    label: '測試設計',
    description: '設計測試假設和變數',
    default: true
}
,
    {
    id: 'variant-creation',
    label: '變體創建',
    description: '創建不同的測試版本',
    default: true
}
,
    {
    id: 'traffic-splitting',
    label: '流量分配',
    description: '設定流量分配比例',
    default: true
}
,
    {
    id: 'metric-selection',
    label: '指標選擇',
    description: '選擇關鍵指標和轉換目標',
    default: true
}
,
    {
    id: 'statistical-significance',
    label: '統計顯著性',
    description: '設定統計顯著性標準',
    default: true
}
,
    {
    id: 'test-duration',
    label: '測試週期',
    description: '確定測試持續時間',
    default: true
}
,
    {
    id: 'data-collection',
    label: '資料收集',
    description: '設定資料收集和分析工具',
    default: true
}
,
    {
    id: 'multivariate-testing',
    label: '多元測試',
    description: '多變數同時測試',
    default: false
}
,
    {
    id: 'personalization',
    label: '個人化測試',
    description: '基於用戶特徵的個人化測試',
    default: false
}
,
    {
    id: 'reporting',
    label: '結果報告',
    description: '測試結果分析和報告',
    default: false
}
]
}
,
    {
    id: 'deploy-strategy',
    title: '部署策略',
    category: '部署維護',
    keywords: [ '部署',
    'deploy',
    '環境',
    'environment',
    'Docker',
    'CI/CD',
    '自動化',
    'automation',
    '生產',
    'production',
    '測試',
    'test',
    '開發',
    'development',
    'staging',
    '預發布',
    'container',
    '容器',
    'kubernetes',
    'k8s',
    'orchestration',
    '編排',
    'service',
    '服務',
    'microservice',
    '微服務',
    'monolith',
    '單體',
    'serverless',
    '無伺服器',
    'lambda',
    'function',
    '函數',
    'edge',
    '邊緣',
    'CDN',
    '內容分發',
    'cloud',
    '雲端',
    'aws',
    'azure',
    'gcp',
    'google cloud',
    '阿里雲',
    '騰訊雲',
    '華為雲',
    'digital ocean',
    'heroku',
    'vercel',
    'netlify',
    'github pages',
    'gitlab pages',
    'firebase',
    'hosting',
    '託管',
    'domain',
    '域名',
    'ssl',
    'https',
    'certificate',
    '憑證',
    'load balancer',
    '負載均衡',
    'scaling',
    '擴展',
    'horizontal',
    '水平',
    'vertical',
    '垂直',
    'monitoring',
    '監控',
    'logging',
    '日誌',
    'metrics',
    '指標',
    'alerting',
    '告警',
    'health check',
    '健康檢查',
    'uptime',
    '可用性',
    'downtime',
    '停機',
    'backup',
    '備份',
    'disaster recovery',
    '災難恢復',
    'rollback',
    '回滾',
    'blue-green',
    '藍綠部署',
    'canary',
    '金絲雀',
    'feature flag',
    '功能開關',
    'toggle',
    '切換',
    'config',
    '配置' ],
    description: '設計自動化部署和環境管理策略',
    template: `請設計部署方案： - 環境配置：[開發/測試/生產] - 容器化：[Docker 配置] - CI/CD：[自動化部署] - 回滾機制：[版本管理]`,
    customizable: true,
    options: [{
    id: 'environment-setup',
    label: '環境配置',
    description: '開發、測試、生產環境設定',
    default: true
}
,
    {
    id: 'containerization',
    label: '容器化',
    description: 'Docker和Kubernetes配置',
    default: true
}
,
    {
    id: 'cicd-pipeline',
    label: 'CI/CD管道',
    description: '自動化建置、測試、部署',
    default: true
}
,
    {
    id: 'deployment-strategy',
    label: '部署策略',
    description: '藍綠部署、金絲雀部署等',
    default: true
}
,
    {
    id: 'rollback-mechanism',
    label: '回滾機制',
    description: '版本管理和快速回滾',
    default: true
}
,
    {
    id: 'monitoring',
    label: '監控告警',
    description: '系統監控和告警機制',
    default: true
}
,
    {
    id: 'scaling',
    label: '擴展策略',
    description: '水平擴展和負載均衡',
    default: true
}
,
    {
    id: 'security',
    label: '安全配置',
    description: 'SSL憑證、防火牆、存取控制',
    default: true
}
,
    {
    id: 'backup-recovery',
    label: '備份復原',
    description: '資料備份和災難復原',
    default: true
}
,
    {
    id: 'feature-flags',
    label: '功能開關',
    description: '功能切換和灰度發布',
    default: false
}
]
}
,
    {
    id: 'seo-optimization',
    title: 'SEO 優化',
    category: '效能優化',
    keywords: [ 'SEO',
    '搜尋引擎',
    'search engine',
    '優化',
    'optimization',
    '排名',
    'ranking',
    '關鍵字',
    'keyword',
    'meta',
    '標籤',
    'tag',
    'title',
    'description',
    '描述',
    'heading',
    '標題',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'alt',
    '圖片替代文字',
    'sitemap',
    '網站地圖',
    'robots.txt',
    '爬蟲',
    'crawler',
    '索引',
    'index',
    'schema',
    '結構化資料',
    'structured data',
    'json-ld',
    'microdata',
    'rdfa',
    'breadcrumb',
    '麵包屑',
    'canonical',
    '標準網址',
    'url',
    '網址',
    'slug',
    'permalink',
    '永久連結',
    'redirect',
    '重定向',
    '301',
    '302',
    '404',
    '錯誤頁面',
    'page speed',
    '頁面速度',
    'core web vitals',
    '核心網頁指標',
    'lcp',
    'fid',
    'cls',
    'lighthouse',
    '頁面體驗',
    'page experience',
    'mobile-friendly',
    '行動友善',
    'responsive',
    '響應式',
    'amp',
    'accelerated mobile pages',
    'pwa',
    '漸進式網頁應用',
    'service worker',
    '快取',
    'cache',
    'compression',
    '壓縮',
    'gzip',
    'brotli',
    'minification',
    '壓縮',
    'minify',
    'css',
    'javascript',
    'html',
    '圖片優化',
    'image optimization',
    'webp',
    'avif',
    'lazy loading',
    '懶載入',
    'preload',
    'prefetch',
    'dns-prefetch',
    'preconnect',
    'critical css',
    '關鍵CSS' ],
    description: '優化網站SEO，提升搜尋引擎排名和頁面載入速度',
    template: `請優化網站 SEO： - 標題標籤：[title、meta 標籤] - 結構化資料：[Schema.org] - 網站地圖：[sitemap.xml] - 內部連結：[連結結構]`,
    customizable: true,
    options: [{
    id: 'meta-tags',
    label: 'Meta標籤',
    description: 'title、description、keywords等標籤',
    default: true
}
,
    {
    id: 'structured-data',
    label: '結構化資料',
    description: 'Schema.org、JSON-LD標記',
    default: true
}
,
    {
    id: 'sitemap',
    label: '網站地圖',
    description: 'sitemap.xml和robots.txt',
    default: true
}
,
    {
    id: 'internal-linking',
    label: '內部連結',
    description: '麵包屑、導航、相關連結',
    default: true
}
,
    {
    id: 'url-structure',
    label: '網址結構',
    description: 'SEO友好的URL設計',
    default: true
}
,
    {
    id: 'page-speed',
    label: '頁面速度',
    description: 'Core Web Vitals優化',
    default: true
}
,
    {
    id: 'mobile-optimization',
    label: '行動優化',
    description: '行動友善和響應式設計',
    default: true
}
,
    {
    id: 'content-optimization',
    label: '內容優化',
    description: '關鍵字密度、標題結構',
    default: true
}
,
    {
    id: 'technical-seo',
    label: '技術SEO',
    description: '重定向、404處理、HTTPS',
    default: true
}
,
    {
    id: 'analytics-tracking',
    label: '分析追蹤',
    description: 'Google Analytics、Search Console',
    default: false
}
]
}
,
    {
    id: 'accessibility',
    title: '無障礙設計',
    category: 'UI/UX設計',
    keywords: [ '無障礙',
    'accessibility',
    'a11y',
    '可訪問性',
    '殘障',
    'disability',
    '視障',
    'visual',
    '聽障',
    'hearing',
    '行動不便',
    'motor',
    '認知',
    'cognitive',
    'aria',
    'role',
    'label',
    '標籤',
    'alt',
    '替代文字',
    'screen reader',
    '螢幕閱讀器',
    'keyboard',
    '鍵盤',
    'tab',
    '導航',
    'navigation',
    'focus',
    '焦點',
    'outline',
    '對比',
    'contrast',
    'color',
    '顏色',
    'font size',
    '字體大小',
    'line height',
    '行高',
    'spacing',
    '間距',
    'touch target',
    '觸控目標',
    'minimum size',
    '最小尺寸',
    'skip link',
    '跳過連結',
    'landmark',
    '地標',
    'heading',
    '標題',
    'list',
    '列表',
    'table',
    '表格',
    'form',
    '表單',
    'fieldset',
    'legend',
    'label',
    '標籤',
    'error',
    '錯誤',
    'validation',
    '驗證',
    'message',
    '訊息',
    'alert',
    '警告',
    'live region',
    '動態區域',
    'polite',
    'assertive',
    'off',
    '關閉',
    'semantic',
    '語義',
    'html5',
    'section',
    'article',
    'aside',
    'nav',
    'main',
    'header',
    'footer',
    'figure',
    'figcaption',
    'time',
    'mark',
    'highlight',
    'wcag',
    'guidelines',
    'guideline',
    'guidelines',
    '2.1',
    '2.2',
    'aa',
    'aaa',
    'level',
    '等級',
    'conformance',
    '符合性',
    'compliance',
    '合規',
    'audit',
    '稽核' ],
    description: '實作無障礙設計，確保所有使用者都能正常使用網站',
    template: `請實作無障礙功能： - 鍵盤導航：[Tab 鍵操作] - 螢幕閱讀器：[ARIA 標籤] - 色彩對比：[視覺可讀性] - 文字大小：[可調整字體]`,
    customizable: true,
    options: [{
    id: 'keyboard-navigation',
    label: '鍵盤導航',
    description: '支援鍵盤操作和導航',
    default: true
}
,
    {
    id: 'screen-reader',
    label: '螢幕閱讀器',
    description: 'ARIA標籤和語義化標記',
    default: true
}
,
    {
    id: 'color-contrast',
    label: '色彩對比',
    description: '確保足夠的色彩對比度',
    default: true
}
,
    {
    id: 'text-scaling',
    label: '文字縮放',
    description: '支援文字大小調整',
    default: true
}
,
    {
    id: 'focus-management',
    label: '焦點管理',
    description: '清晰的焦點指示器',
    default: true
}
,
    {
    id: 'alternative-text',
    label: '替代文字',
    description: '圖片和媒體的替代文字',
    default: true
}
,
    {
    id: 'form-accessibility',
    label: '表單無障礙',
    description: '表單元素的無障礙設計',
    default: true
}
,
    {
    id: 'skip-links',
    label: '跳過連結',
    description: '提供跳過導航的連結',
    default: true
}
,
    {
    id: 'landmarks',
    label: '地標標記',
    description: '使用語義化地標標記',
    default: true
}
,
    {
    id: 'testing-tools',
    label: '測試工具',
    description: '無障礙測試工具和方法',
    default: false
}
]
}
,
    {
    id: 'testing-strategy',
    title: '測試策略',
    category: '專案管理與維護',
    keywords: [ '測試',
    'testing',
    '單元測試',
    'unit test',
    '整合測試',
    'integration test',
    '端對端測試',
    'e2e',
    'end-to-end',
    '功能測試',
    'functional test',
    '回歸測試',
    'regression test',
    '冒煙測試',
    'smoke test',
    '驗收測試',
    'acceptance test',
    '效能測試',
    'performance test',
    '負載測試',
    'load test',
    '壓力測試',
    'stress test',
    '安全測試',
    'security test',
    '滲透測試',
    'penetration test',
    '漏洞掃描',
    'vulnerability scan',
    'jest',
    'mocha',
    'chai',
    'cypress',
    'playwright',
    'selenium',
    'puppeteer',
    'testing library',
    'enzyme',
    'react testing',
    'vue test utils',
    'angular testing',
    'karma',
    'jasmine',
    'vitest',
    'coverage',
    '覆蓋率',
    'mocking',
    '模擬',
    'stub',
    '存根',
    'spy',
    '間諜',
    'fixture',
    '固定裝置',
    'setup',
    'teardown',
    'before',
    'after',
    'describe',
    'it',
    'test',
    'expect',
    'assert',
    'assertion',
    'mock',
    '模擬',
    'fake',
    'double',
    'test double',
    'dummy',
    '虛擬',
    'fake',
    '偽造',
    'stub',
    '存根',
    'spy',
    '間諜',
    'mock',
    '模擬',
    'test data',
    '測試資料',
    'test case',
    '測試案例',
    'test suite',
    '測試套件',
    'test runner',
    '測試執行器',
    'ci',
    'cd',
    'pipeline' ],
    description: '建立完整的測試策略，確保程式碼品質和功能正確性',
    template: `請建立測試策略： - 單元測試：[Jest/Vitest] - 測試覆蓋率：[coverage 目標] - Mock 資料：[測試資料模擬] - 邊界測試：[異常情況處理]`,
    customizable: true,
    options: [{
    id: 'unit-testing',
    label: '單元測試',
    description: 'Jest、Vitest等單元測試框架',
    default: true
}
,
    {
    id: 'integration-testing',
    label: '整合測試',
    description: '組件間整合和API測試',
    default: true
}
,
    {
    id: 'e2e-testing',
    label: '端對端測試',
    description: 'Cypress、Playwright等E2E測試',
    default: true
}
,
    {
    id: 'test-coverage',
    label: '測試覆蓋率',
    description: '程式碼覆蓋率目標和監控',
    default: true
}
,
    {
    id: 'mocking',
    label: '模擬測試',
    description: 'Mock、Stub、Spy等測試替身',
    default: true
}
,
    {
    id: 'test-data',
    label: '測試資料',
    description: '測試資料管理和固定裝置',
    default: true
}
,
    {
    id: 'performance-testing',
    label: '效能測試',
    description: '負載測試、壓力測試',
    default: false
}
,
    {
    id: 'security-testing',
    label: '安全測試',
    description: '安全漏洞掃描和滲透測試',
    default: false
}
,
    {
    id: 'automation',
    label: '測試自動化',
    description: 'CI/CD中的自動化測試',
    default: true
}
,
    {
    id: 'testing-tools',
    label: '測試工具',
    description: '測試工具選擇和配置',
    default: false
}
]
}
,
    {
    id: 'common-design-terms',
    title: '常用設計術語',
    category: 'UI/UX設計',
    keywords: [ '彈跳視窗',
    '彈出視窗',
    '彈窗',
    '彈出框',
    '對話框',
    '對話視窗',
    '彈出層',
    '區塊',
    'block',
    '區塊寬度',
    'block width',
    '區塊高度',
    'block height',
    '區塊大小',
    '寬度',
    'width',
    '高度',
    'height',
    '大小',
    'size',
    '尺寸',
    'dimension',
    '調整',
    'adjust',
    '設定',
    'set',
    '修改',
    'modify',
    '改變',
    'change',
    '欄位',
    'column',
    '欄寬',
    'column width',
    '欄高',
    'column height',
    '欄位大小',
    '容器',
    'container',
    '容器寬度',
    'container width',
    '容器高度',
    'container height',
    '外框',
    'frame',
    '邊框',
    'border',
    '邊框寬度',
    'border width',
    '邊框樣式',
    'border style',
    '內邊距',
    'padding',
    '外邊距',
    'margin',
    '間距',
    'spacing',
    '空隙',
    'gap',
    '對齊',
    'align',
    '置中',
    'center',
    '靠左',
    'left',
    '靠右',
    'right',
    '分散',
    'justify',
    '排列',
    'arrange',
    '佈局',
    'layout',
    '排版',
    'typography',
    '位置',
    'position',
    '浮動',
    'float',
    '清除',
    'clear',
    '顯示',
    'display',
    '隱藏',
    'hide',
    '可見',
    'visible',
    '透明度',
    'opacity',
    '可見性',
    'visibility',
    '層級',
    'z-index',
    '層疊',
    'stack',
    '顏色',
    'color',
    '背景色',
    'background',
    '前景色',
    'foreground',
    '文字色',
    'text color',
    '字體',
    'font',
    '字體大小',
    'font-size',
    '字重',
    'font-weight',
    '字體樣式',
    'font-style',
    '行高',
    'line-height',
    '字間距',
    'letter-spacing',
    '詞間距',
    'word-spacing',
    '圓角',
    'border-radius',
    '陰影',
    'box-shadow',
    '文字陰影',
    'text-shadow',
    '漸變',
    'gradient',
    '線性漸變',
    'linear-gradient',
    '徑向漸變',
    'radial-gradient',
    '動畫',
    'animation',
    '過渡',
    'transition',
    '效果',
    'effect',
    '變換',
    'transform',
    '懸停',
    'hover',
    '點擊',
    'click',
    '焦點',
    'focus',
    '活動',
    'active',
    '選中',
    'selected',
    '禁用',
    'disabled',
    '啟用',
    'enabled',
    '只讀',
    'readonly',
    '必填',
    'required',
    '驗證',
    'validation',
    '錯誤',
    'error',
    '警告',
    'warning',
    '成功',
    'success',
    '資訊',
    'info' ],
    description: '處理常用的網頁設計術語和佈局調整需求',
    template: `請處理 [設計需求] ： - 區塊大小：[寬度 x 高度] - 間距設定：[內邊距/外邊距] - 對齊方式：[左/中/右/分散] - 視覺效果：[顏色/陰影/圓角]`
}
,
    {
    id: 'git-automation',
    title: 'Git 與 GitHub 自動化腳本',
    category: '專案管理與維護',
    keywords: [ 'git',
    'github',
    '自動化',
    'automation',
    '腳本',
    'script',
    '批次檔',
    'bat',
    '版本控制',
    'version control',
    '提交',
    'commit',
    '推送',
    'push',
    '標籤',
    'tag',
    '儲存庫',
    'repository',
    '本機',
    'local',
    '遠端',
    'remote',
    '暫存區',
    'staging',
    'git add',
    'git commit',
    'git push',
    'git tag',
    'git push --tags',
    '提交訊息',
    'commit message',
    '版本標籤',
    'version tag',
    '備份',
    'backup',
    '批次處理',
    'batch',
    'windows',
    '命令列',
    'command line',
    'cmd',
    'powershell',
    '自動化流程',
    'automated workflow',
    'ci',
    'cd',
    '持續整合',
    'continuous integration',
    '部署',
    'deployment',
    '發布',
    'release',
    '版本管理',
    'version management',
    '程式碼管理',
    'code management',
    '協作',
    'collaboration',
    '團隊開發',
    'team development',
    '分支',
    'branch',
    '合併',
    'merge',
    '拉取',
    'pull',
    '克隆',
    'clone',
    '衝突',
    'conflict',
    '解決',
    'resolve',
    '歷史記錄',
    'history',
    '日誌',
    'log',
    '差異',
    'diff',
    '狀態',
    'status',
    '檢查',
    'check',
    '驗證',
    'verify',
    '回滾',
    'rollback',
    '復原',
    'revert',
    '重置',
    'reset',
    '清理',
    'clean',
    '忽略',
    'ignore',
    'gitignore',
    '排除',
    'exclude',
    '包含',
    'include',
    '遠端倉庫',
    'remote repository',
    'origin',
    'upstream',
    'fork',
    '分叉',
    'pull request',
    'pr',
    'merge request',
    'mr',
    'code review',
    '程式碼審查',
    'issue',
    '問題',
    'bug',
    '錯誤',
    'feature',
    '功能',
    'enhancement',
    '增強',
    'hotfix',
    '熱修復',
    'patch',
    '修補',
    'security',
    '安全',
    'vulnerability',
    '漏洞' ],
    description: '建立Git與GitHub自動化腳本，簡化日常開發流程和版本管理',
    template: `請為我編寫一個名為 git-push.bat 的腳本。這個腳本的目的是自動化 Git 提交與推送流程，同時也支援為特定版本建立標籤。 腳本需要能接受一個可選的參數，用於定義提交訊息。如果沒有提供參數，則使用預設訊息 "Auto-commit"。 腳本需要依序執行以下步驟： 1. 執行 git add .，將所有新增與修改的檔案加入 Git 暫存區。 2. 執行 git commit -m "[提交訊息]"，使用傳入的參數作為提交訊息。 3. 執行 git push，將變更推送到遠端 GitHub 儲存庫。 4. 在成功推送後，請顯示一則訊息：程式碼已成功上傳至 GitHub。 此外，請為腳本新增一個額外功能： 如果在執行腳本時提供第二個參數，例如 git-push.bat "Update homepage" "v1.0.1"，則腳本在推送後，會自動創建一個標籤。 這個標籤的名稱為第二個參數，例如 "v1.0.1"。 創建標籤的指令為 git tag [標籤名稱]，並隨後使用 git push --tags 將標籤推送到遠端。 請在每個步驟執行前與執行後加上簡潔明確的文字說明，以便使用者知道目前腳本的執行進度。`
}
,
    {
    id: 'css-variables-theme',
    title: 'CSS 變數與主題切換',
    category: 'UI/UX設計',
    keywords: [ 'CSS Variables',
    'CSS 變數',
    '自定義屬性',
    'custom properties',
    '主題',
    'theme',
    '主題切換',
    'theme toggle',
    '明暗主題',
    'dark theme',
    'light theme',
    '色彩變數',
    'color variables',
    '動態樣式',
    'dynamic styles',
    ':root',
    'var()',
    'fallback',
    '預設值',
    'default value',
    '繼承',
    'inheritance',
    '作用域',
    'scope',
    '主題色彩',
    'theme colors',
    '主色',
    'primary color',
    '輔色',
    'secondary color',
    '強調色',
    'accent color',
    '背景色',
    'background color',
    '文字色',
    'text color',
    '邊框色',
    'border color',
    '陰影色',
    'shadow color',
    '漸變',
    'gradient',
    '響應式主題',
    'responsive theme',
    '系統主題',
    'system theme',
    '偏好設定',
    'preferences',
    'localStorage',
    'sessionStorage',
    '持久化',
    'persistence',
    'JavaScript 主題',
    'JS theme',
    '動態切換',
    'dynamic toggle',
    '按鈕切換',
    'button toggle',
    '圖示切換',
    'icon toggle',
    '月亮',
    'moon',
    '太陽',
    'sun',
    '自動偵測',
    'auto detect',
    '媒體查詢',
    'media query',
    'prefers-color-scheme' ],
    description: '使用CSS變數實現主題切換功能，支援明暗主題動態切換',
    template: `請幫我建立一個完整的主題切換系統： 1. CSS 變數設定： - 在 :root 中定義明亮主題的變數 - 在 [data-theme="dark"] 中定義暗色主題的變數 - 包含主色、輔色、背景色、文字色、邊框色等 2. JavaScript 功能： - 主題切換按鈕點擊事件 - 使用 localStorage 儲存用戶選擇 - 頁面載入時讀取儲存的主題設定 - 動態更新 data-theme 屬性 3. 無障礙設計： - 按鈕的 aria-label 和 title 屬性 - 圖示的動態切換（月亮/太陽） - 鍵盤導航支援 4. 響應式設計： - 按鈕在不同螢幕尺寸下的適配 - 主題切換的平滑過渡動畫`,
    customizable: true,
    options: [{
    id: 'theme-types',
    label: '主題類型',
    description: '選擇支援的主題類型（明暗/多色）',
    default: true
}
,
    {
    id: 'color-scheme',
    label: '色彩方案',
    description: '定義主題的色彩變數',
    default: true
}
,
    {
    id: 'toggle-button',
    label: '切換按鈕',
    description: '主題切換按鈕的設計',
    default: true
}
,
    {
    id: 'persistence',
    label: '持久化儲存',
    description: '使用localStorage儲存用戶選擇',
    default: true
}
,
    {
    id: 'system-detection',
    label: '系統偵測',
    description: '自動偵測系統主題偏好',
    default: true
}
,
    {
    id: 'smooth-transition',
    label: '平滑過渡',
    description: '主題切換的動畫效果',
    default: true
}
,
    {
    id: 'accessibility',
    label: '無障礙支援',
    description: '鍵盤導航和螢幕閱讀器支援',
    default: true
}
,
    {
    id: 'responsive',
    label: '響應式設計',
    description: '在不同螢幕尺寸下的適配',
    default: true
}
,
    {
    id: 'advanced-features',
    label: '進階功能',
    description: '多主題、自訂主題等進階功能',
    default: false
}
,
    {
    id: 'testing',
    label: '測試工具',
    description: '主題切換的測試方法',
    default: false
}
]
}
,
    {
    id: 'performance-optimization-advanced',
    title: '進階效能優化',
    category: '效能優化',
    keywords: [ '效能優化',
    'performance optimization',
    'Debounce',
    '防抖動',
    'Throttle',
    '節流',
    'RequestAnimationFrame',
    'RAF',
    'Intersection Observer',
    '批次處理',
    'batch processing',
    '主線程',
    'main thread',
    '阻塞',
    'blocking',
    '非同步',
    'async',
    '異步處理',
    '動畫優化',
    'animation optimization',
    '滾動優化',
    'scroll optimization',
    '懶載入',
    'lazy loading',
    '虛擬滾動',
    'virtual scrolling',
    '分頁',
    'pagination',
    '記憶化',
    'memoization',
    '快取',
    'cache',
    'CDN',
    '內容分發網路',
    '圖片優化',
    'image optimization',
    'WebP',
    'AVIF',
    '壓縮',
    'compression',
    '程式碼分割',
    'code splitting',
    'Tree Shaking',
    '搖樹優化',
    'Bundle 優化',
    'Gzip',
    'Brotli',
    '壓縮演算法',
    'compression algorithm',
    'HTTP/2',
    'HTTP/3',
    'Service Worker',
    'PWA',
    '離線快取',
    'offline cache',
    '背景同步',
    'background sync',
    'Web Workers',
    'Web 工作者',
    '多線程',
    'multithreading',
    '並行處理',
    'parallel processing',
    'Critical CSS',
    '關鍵 CSS',
    '內聯樣式',
    'inline styles',
    '預載入',
    'preload',
    '預取',
    'prefetch',
    'DNS 預解析',
    'DNS prefetch',
    '預連接',
    'preconnect',
    '資源提示',
    'resource hints',
    '優先級',
    'priority',
    '載入策略',
    'loading strategy' ],
    description: '使用現代技術優化網站效能，包括防抖動、批次處理、動畫優化等',
    template: `請幫我優化網站效能，實作以下功能： 1. 防抖動與節流： - 搜尋輸入框的防抖動處理 - 滾動事件的節流優化 - 視窗大小調整的防抖動 2. 動畫效能優化： - 使用 RequestAnimationFrame 優化動畫 - Intersection Observer 實現滾動動畫 - 批次處理大量動畫元素 3. 載入優化： - 圖片懶載入實作 - 關鍵 CSS 內聯 - 非關鍵資源延遲載入 4. 快取策略： - Service Worker 快取策略 - 靜態資源長期快取 - API 資料快取機制 5. 效能監控： - Core Web Vitals 監控 - 載入時間測量 - 使用者體驗指標追蹤`,
    customizable: true,
    options: [{
    id: 'debounce-throttle',
    label: '防抖動與節流',
    description: '搜尋、滾動等事件的效能優化',
    default: true
}
,
    {
    id: 'animation-optimization',
    label: '動畫優化',
    description: 'RAF、Intersection Observer等動畫優化',
    default: true
}
,
    {
    id: 'lazy-loading',
    label: '懶載入',
    description: '圖片、組件、路由的懶載入',
    default: true
}
,
    {
    id: 'critical-css',
    label: '關鍵CSS',
    description: '關鍵CSS內聯和優化',
    default: true
}
,
    {
    id: 'service-worker',
    label: 'Service Worker',
    description: '離線快取和背景同步',
    default: true
}
,
    {
    id: 'web-workers',
    label: 'Web Workers',
    description: '多線程處理和並行計算',
    default: false
}
,
    {
    id: 'resource-hints',
    label: '資源提示',
    description: '預載入、預取、DNS預解析',
    default: true
}
,
    {
    id: 'bundle-optimization',
    label: '打包優化',
    description: 'Tree Shaking、程式碼分割',
    default: true
}
,
    {
    id: 'monitoring',
    label: '效能監控',
    description: 'Core Web Vitals、載入時間監控',
    default: true
}
,
    {
    id: 'advanced-caching',
    label: '進階快取',
    description: '多層快取、智能失效策略',
    default: false
}
]
}
,
    {
    id: 'accessibility-advanced',
    title: '進階無障礙設計',
    category: 'UI/UX設計',
    keywords: [ '無障礙設計',
    'accessibility',
    'a11y',
    '可訪問性',
    '殘障友善',
    'disability friendly',
    'Focus-visible',
    '焦點樣式',
    'focus styles',
    '鍵盤導航',
    'keyboard navigation',
    'Tab 鍵',
    'tab key',
    'Enter 鍵',
    'enter key',
    'Escape 鍵',
    'escape key',
    'ARIA',
    'aria-label',
    'aria-describedby',
    'aria-live',
    'aria-expanded',
    'role',
    'role button',
    'role menuitem',
    'role navigation',
    'role main',
    '螢幕閱讀器',
    'screen reader',
    'NVDA',
    'JAWS',
    'VoiceOver',
    'TalkBack',
    '語義化標籤',
    'semantic HTML',
    'section',
    'article',
    'aside',
    'nav',
    'main',
    'header',
    'footer',
    'figure',
    'figcaption',
    'time',
    'mark',
    'highlight',
    '色彩對比',
    'color contrast',
    'WCAG',
    '4.5:1',
    '3:1',
    '對比度',
    'contrast ratio',
    '字體大小',
    'font size',
    '可調整字體',
    'resizable text',
    '200% 縮放',
    '200% zoom',
    '觸控目標',
    'touch target',
    '44px',
    '最小尺寸',
    'minimum size',
    '點擊區域',
    'click area',
    '間距',
    'spacing',
    '行高',
    'line height',
    '字間距',
    'letter spacing',
    '跳過連結',
    'skip link',
    '地標',
    'landmark',
    '標題層級',
    'heading hierarchy',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    '標題順序',
    'heading order',
    '表單無障礙',
    'form accessibility',
    'label',
    'fieldset',
    'legend',
    'error message',
    '驗證訊息',
    'validation message',
    '必填欄位',
    'required field',
    '錯誤提示',
    'error alert',
    '成功提示',
    'success message',
    '動態內容',
    'dynamic content',
    'live region',
    'polite',
    'assertive',
    'off',
    '關閉',
    '動態更新',
    'dynamic update' ],
    description: '實作完整的無障礙設計，確保所有用戶都能正常使用網站',
    template: `請幫我實作完整的無障礙設計功能： 1. 鍵盤導航： - 所有互動元素支援 Tab 鍵導航 - 使用 :focus-visible 提供清晰的焦點樣式 - 支援 Enter、Space、Escape 鍵操作 2. 螢幕閱讀器支援： - 添加適當的 ARIA 標籤和角色 - 使用語義化 HTML 標籤 - 提供 alt 文字和 aria-label 3. 視覺無障礙： - 確保色彩對比度符合 WCAG 標準 - 支援 200% 縮放不影響使用 - 提供足夠的觸控目標尺寸 4. 表單無障礙： - 每個輸入欄位都有對應的 label - 提供清楚的錯誤和成功訊息 - 使用 fieldset 和 legend 組織相關欄位 5. 動態內容： - 使用 aria-live 區域通知內容變更 - 提供適當的載入狀態提示 - 確保動畫不會造成癲癇發作`
}
,
    {
    id: 'database-design',
    title: '資料庫設計與優化',
    category: '後端開發',
    keywords: [ '資料庫',
    'database',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'SQLite',
    '資料表',
    'table',
    '欄位',
    'column',
    '索引',
    'index',
    '主鍵',
    'primary key',
    '外鍵',
    'foreign key',
    '關聯',
    'relationship',
    '正規化',
    'normalization',
    '反正規化',
    'denormalization',
    '查詢優化',
    'query optimization',
    'SQL',
    'NoSQL',
    '關聯式',
    'relational',
    '非關聯式',
    'document',
    'key-value',
    '圖資料庫',
    'graph database',
    'Neo4j',
    '時間序列',
    'time series',
    '資料倉儲',
    'data warehouse',
    'ETL',
    '資料湖',
    'data lake',
    '備份',
    'backup',
    '復原',
    'recovery',
    '複製',
    'replication',
    '分片',
    'sharding',
    '分區',
    'partitioning',
    '負載均衡',
    'load balancing',
    '快取',
    'cache',
    '記憶體',
    'memory',
    '磁碟',
    'disk',
    'SSD',
    'HDD',
    '效能調校',
    'performance tuning',
    '慢查詢',
    'slow query',
    '執行計畫',
    'execution plan',
    '統計資訊',
    'statistics',
    '資料型別',
    'data type',
    '約束',
    'constraint',
    '觸發器',
    'trigger',
    '預存程序',
    'stored procedure',
    '檢視',
    'view',
    '函數',
    'function',
    '交易',
    'transaction',
    'ACID',
    '隔離層級',
    'isolation level',
    '鎖定',
    'locking',
    '死鎖',
    'deadlock',
    '並發',
    'concurrency',
    '並行',
    'parallelism',
    '擴展性',
    'scalability' ],
    description: '設計和優化資料庫結構，提升查詢效能和資料完整性',
    template: `請幫我設計資料庫結構： 1. 資料表設計： - 定義 [實體名稱] 的資料表結構 - 設定適當的主鍵和外鍵關聯 - 選擇合適的資料型別和約束 2. 索引策略： - 為常用查詢欄位建立索引 - 考慮複合索引的設計 - 避免過多索引影響寫入效能 3. 查詢優化： - 分析慢查詢並提供優化建議 - 使用適當的 JOIN 策略 - 實作分頁和排序的最佳實踐 4. 資料完整性： - 設定適當的約束條件 - 實作資料驗證規則 - 設計備份和復原策略`,
    customizable: true,
    options: [{
    id: 'database-type',
    label: '資料庫類型',
    description: '選擇資料庫類型（MySQL/PostgreSQL/MongoDB等）',
    default: true
}
,
    {
    id: 'table-design',
    label: '資料表設計',
    description: '資料表結構和關聯設計',
    default: true
}
,
    {
    id: 'indexing',
    label: '索引策略',
    description: '索引設計和查詢優化',
    default: true
}
,
    {
    id: 'data-types',
    label: '資料型別',
    description: '選擇適當的資料型別和約束',
    default: true
}
,
    {
    id: 'relationships',
    label: '關聯設計',
    description: '主鍵、外鍵和關聯關係',
    default: true
}
,
    {
    id: 'normalization',
    label: '正規化',
    description: '資料正規化和反正規化策略',
    default: true
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '查詢優化和效能調校',
    default: true
}
,
    {
    id: 'backup-recovery',
    label: '備份復原',
    description: '資料備份和災難復原策略',
    default: true
}
,
    {
    id: 'scalability',
    label: '擴展性',
    description: '分片、複製和負載均衡',
    default: false
}
,
    {
    id: 'security',
    label: '資料安全',
    description: '資料加密和存取控制',
    default: false
}
]
}
,
    {
    id: 'security-implementation',
    title: '安全性實作',
    category: '後端開發',
    keywords: [ '安全性',
    'security',
    '加密',
    'encryption',
    '雜湊',
    'hash',
    '密碼',
    'password',
    'JWT',
    'token',
    'OAuth',
    'OAuth2',
    'OIDC',
    'OpenID Connect',
    'SAML',
    'HTTPS',
    'SSL',
    'TLS',
    '憑證',
    'certificate',
    'CA',
    '憑證授權',
    'CORS',
    '跨域',
    'cross-origin',
    'CSRF',
    'XSS',
    'SQL注入',
    'SQL injection',
    '輸入驗證',
    'input validation',
    '輸出編碼',
    'output encoding',
    '消毒',
    'sanitization',
    '速率限制',
    'rate limiting',
    'DDoS',
    '防護',
    '防護',
    'WAF',
    'Web Application Firewall',
    '漏洞掃描',
    'vulnerability scanning',
    '滲透測試',
    'penetration testing',
    '安全標頭',
    'security headers',
    'CSP',
    'Content Security Policy',
    'HSTS',
    'X-Frame-Options',
    'X-Content-Type-Options',
    'Referrer-Policy',
    '會話管理',
    'session management',
    'Cookie',
    'Secure',
    'HttpOnly',
    'SameSite',
    '雙因子認證',
    '2FA',
    'MFA',
    '多因子認證',
    'TOTP',
    'SMS',
    'Email驗證',
    '權限控制',
    'authorization',
    'RBAC',
    '角色權限',
    'ACL',
    '存取控制清單',
    'API安全',
    'API security',
    'API金鑰',
    'API key',
    'API閘道',
    'API gateway',
    '資料加密',
    'data encryption',
    'AES',
    'RSA',
    '對稱加密',
    '非對稱加密',
    '金鑰管理',
    'key management',
    'KMS',
    '金鑰輪換',
    'key rotation',
    '日誌記錄',
    'logging',
    '稽核',
    'audit',
    '監控',
    'monitoring',
    '告警',
    'alerting',
    '合規性',
    'compliance',
    'GDPR',
    '個資法',
    'PCI DSS',
    'SOC 2',
    'ISO 27001' ],
    description: '實作網站安全防護措施，保護用戶資料和系統安全',
    template: `請幫我實作安全性功能： 1. 身份驗證： - 實作安全的登入系統 - 密碼加密和強度驗證 - 支援雙因子認證(2FA)2. 資料保護： - 敏感資料加密儲存 - 實作適當的權限控制 - 防止 SQL 注入和 XSS 攻擊 3. API 安全： - 實作 API 金鑰管理 - 設定速率限制和 CORS 政策 - 使用 HTTPS 和適當的安全標頭 4. 監控與稽核： - 實作安全事件日誌記錄 - 設定異常行為監控 - 建立安全告警機制`
}
,
    {
    id: 'mobile-app-development',
    title: '行動應用開發',
    category: '前端開發',
    keywords: [ '行動應用',
    'mobile app',
    'React Native',
    'Flutter',
    'Ionic',
    'Cordova',
    'PhoneGap',
    'Xamarin',
    '原生開發',
    'native development',
    'iOS',
    'Android',
    'Swift',
    'Kotlin',
    'Java',
    'Objective-C',
    '混合應用',
    'hybrid app',
    'PWA',
    '漸進式網頁應用',
    'Service Worker',
    '離線功能',
    'offline',
    '推送通知',
    'push notification',
    'FCM',
    'APNs',
    '本地通知',
    'local notification',
    '相機',
    'camera',
    'GPS',
    '定位',
    'location',
    '感應器',
    'sensor',
    '加速度計',
    'accelerometer',
    '陀螺儀',
    'gyroscope',
    '指紋',
    'fingerprint',
    '生物識別',
    'biometric',
    'Face ID',
    'Touch ID',
    '支付',
    'payment',
    'Apple Pay',
    'Google Pay',
    'Samsung Pay',
    '應用商店',
    'App Store',
    'Google Play',
    '上架',
    'publishing',
    '審核',
    'review',
    '版本管理',
    '版本控制',
    'version control',
    '熱更新',
    'hot update',
    'OTA',
    'over-the-air',
    '崩潰報告',
    'crash reporting',
    '分析',
    'analytics',
    'Firebase',
    'Crashlytics',
    '效能監控',
    'performance monitoring',
    '記憶體',
    'memory',
    'CPU',
    '電池',
    'battery',
    '網路',
    'network',
    '離線同步',
    'offline sync',
    '資料同步',
    'data sync',
    '快取',
    'cache',
    '本地儲存',
    'local storage',
    'SQLite',
    'Realm',
    'Core Data',
    'Room',
    '資料庫',
    'database',
    'API 整合',
    'API integration',
    'REST',
    'GraphQL',
    'WebSocket',
    '即時通訊',
    'real-time' ],
    description: '開發跨平台行動應用程式，支援 iOS 和 Android 平台',
    template: `請幫我開發行動應用功能： 1. 跨平台開發： - 使用 [React Native/Flutter] 開發跨平台應用 - 實作原生模組整合 - 優化不同平台的用戶體驗 2. 核心功能： - 實作 [具體功能需求] - 整合相機和 GPS 功能 - 支援離線資料同步 3. 用戶體驗： - 設計直觀的導航結構 - 實作手勢操作和動畫效果 - 優化載入速度和效能 4. 發布與維護： - 設定 CI/CD 自動化流程 - 實作崩潰報告和效能監控 - 準備應用商店上架資料`,
    customizable: true,
    options: [{
    id: 'platform',
    label: '開發平台',
    description: '選擇開發平台（React Native/Flutter/原生）',
    default: true
}
,
    {
    id: 'core-features',
    label: '核心功能',
    description: '定義應用的核心功能需求',
    default: true
}
,
    {
    id: 'device-integration',
    label: '設備整合',
    description: '相機、GPS、感應器等設備功能',
    default: true
}
,
    {
    id: 'offline-support',
    label: '離線支援',
    description: '離線資料同步和快取',
    default: true
}
,
    {
    id: 'push-notifications',
    label: '推送通知',
    description: '本地和遠端推送通知',
    default: true
}
,
    {
    id: 'user-interface',
    label: '用戶介面',
    description: '導航、手勢、動畫等UI設計',
    default: true
}
,
    {
    id: 'performance',
    label: '效能優化',
    description: '載入速度、記憶體、電池優化',
    default: true
}
,
    {
    id: 'security',
    label: '安全性',
    description: '生物識別、支付、資料加密',
    default: true
}
,
    {
    id: 'testing',
    label: '測試策略',
    description: '單元測試、整合測試、E2E測試',
    default: false
}
,
    {
    id: 'deployment',
    label: '部署發布',
    description: 'CI/CD、應用商店上架、版本管理',
    default: false
}
]
}
,
    {
    id: 'ai-ml-integration',
    title: 'AI/機器學習整合',
    category: '新技術與趨勢',
    keywords: [ '人工智慧',
    'AI',
    '機器學習',
    'machine learning',
    '深度學習',
    'deep learning',
    '神經網路',
    'neural network',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'Scikit-learn',
    '自然語言處理',
    'NLP',
    '電腦視覺',
    'computer vision',
    '語音識別',
    'speech recognition',
    '文字分析',
    'text analysis',
    '情感分析',
    'sentiment analysis',
    '分類',
    'classification',
    '回歸',
    'regression',
    '聚類',
    'clustering',
    '推薦系統',
    'recommendation system',
    '預測',
    'prediction',
    '預測模型',
    'predictive model',
    '特徵工程',
    'feature engineering',
    '資料預處理',
    'data preprocessing',
    '模型訓練',
    'model training',
    '模型評估',
    'model evaluation',
    '交叉驗證',
    'cross validation',
    '過擬合',
    'overfitting',
    '欠擬合',
    'underfitting',
    '正則化',
    'regularization',
    '梯度下降',
    'gradient descent',
    '優化器',
    'optimizer',
    '損失函數',
    'loss function',
    '準確率',
    'accuracy',
    '精確率',
    'precision',
    '召回率',
    'recall',
    'F1分數',
    'F1 score',
    '混淆矩陣',
    'confusion matrix',
    'ROC曲線',
    'ROC curve',
    'AUC',
    'AUC score',
    'API整合',
    'API integration',
    'REST API',
    'GraphQL',
    '微服務',
    'microservice',
    '容器化',
    'containerization',
    'Docker',
    'Kubernetes',
    '雲端',
    'cloud',
    'AWS',
    'Azure',
    'GCP',
    'Google Cloud',
    'SageMaker',
    'AutoML',
    'MLOps',
    '模型部署',
    'model deployment',
    'A/B測試',
    'A/B testing',
    '模型監控',
    'model monitoring',
    '資料漂移',
    'data drift',
    '模型漂移',
    'model drift',
    '即時預測',
    'real-time prediction',
    '批次預測',
    'batch prediction',
    '邊緣計算',
    'edge computing',
    'IoT',
    '物聯網',
    '感應器',
    'sensor' ],
    description: '整合AI和機器學習功能到網站應用中，提供智能化服務',
    template: `請幫我整合AI/機器學習功能： 1. 資料準備： - 收集和清理 [特定領域] 的資料 - 進行特徵工程和資料預處理 - 分割訓練、驗證和測試資料集 2. 模型開發： - 選擇適合的機器學習演算法 - 訓練和調優模型參數 - 評估模型效能和準確率 3. API整合： - 建立模型預測API端點 - 實作即時預測服務 - 整合到現有的網站架構中 4. 部署與監控： - 使用容器化技術部署模型 - 設定模型效能監控 - 實作模型版本管理和回滾機制`,
    customizable: true,
    options: [{
    id: 'data-preparation',
    label: '資料準備',
    description: '資料收集、清理和特徵工程',
    default: true
}
,
    {
    id: 'model-development',
    label: '模型開發',
    description: '演算法選擇、訓練和調優',
    default: true
}
,
    {
    id: 'model-evaluation',
    label: '模型評估',
    description: '效能指標和交叉驗證',
    default: true
}
,
    {
    id: 'api-integration',
    label: 'API整合',
    description: '預測API和即時服務',
    default: true
}
,
    {
    id: 'model-deployment',
    label: '模型部署',
    description: '容器化部署和版本管理',
    default: true
}
,
    {
    id: 'model-monitoring',
    label: '模型監控',
    description: '效能監控和資料漂移檢測',
    default: true
}
,
    {
    id: 'mlops',
    label: 'MLOps',
    description: '機器學習運維和自動化',
    default: true
}
,
    {
    id: 'cloud-platform',
    label: '雲端平台',
    description: 'AWS SageMaker、Azure ML等',
    default: true
}
,
    {
    id: 'edge-computing',
    label: '邊緣計算',
    description: '邊緣部署和IoT整合',
    default: false
}
,
    {
    id: 'real-time-prediction',
    label: '即時預測',
    description: '即時預測和批次處理',
    default: false
}
]
}
,
    {
    id: 'devops-monitoring',
    title: 'DevOps與監控',
    category: '專案管理與維護',
    keywords: [ 'DevOps',
    '開發運維',
    'CI/CD',
    '持續整合',
    '持續部署',
    'continuous integration',
    'continuous deployment',
    'Jenkins',
    'GitHub Actions',
    'GitLab CI',
    'Azure DevOps',
    '自動化',
    'automation',
    '腳本',
    'script',
    'Shell',
    'Bash',
    'PowerShell',
    'Python',
    'Ansible',
    'Terraform',
    'Infrastructure as Code',
    'IaC',
    '容器化',
    'containerization',
    'Docker',
    'Kubernetes',
    'K8s',
    'Pod',
    'Service',
    'Deployment',
    'ConfigMap',
    'Secret',
    'Ingress',
    'Helm',
    'Chart',
    '監控',
    'monitoring',
    'Prometheus',
    'Grafana',
    'ELK Stack',
    'Elasticsearch',
    'Logstash',
    'Kibana',
    'Splunk',
    'New Relic',
    'Datadog',
    'AppDynamics',
    '日誌',
    'logging',
    '集中化日誌',
    'centralized logging',
    '結構化日誌',
    'structured logging',
    '日誌等級',
    'log level',
    'DEBUG',
    'INFO',
    'WARN',
    'ERROR',
    '指標',
    'metrics',
    '計數器',
    'counter',
    '計量器',
    'gauge',
    '直方圖',
    'histogram',
    '摘要',
    'summary',
    '告警',
    'alerting',
    'PagerDuty',
    'Slack',
    'Email',
    '健康檢查',
    'health check',
    '存活探針',
    'liveness probe',
    '就緒探針',
    'readiness probe',
    '效能監控',
    'performance monitoring',
    'APM',
    'Application Performance Monitoring',
    '追蹤',
    'tracing',
    'Jaeger',
    'Zipkin',
    'OpenTelemetry',
    '分散式追蹤',
    '負載測試',
    'load testing',
    '壓力測試',
    'stress testing',
    'JMeter',
    'K6',
    '容量規劃',
    'capacity planning',
    '擴展',
    'scaling',
    '水平擴展',
    'horizontal scaling',
    '垂直擴展',
    'vertical scaling',
    '自動擴展',
    'auto scaling',
    'HPA',
    'VPA',
    '災難恢復',
    'disaster recovery',
    '備份',
    'backup',
    '復原',
    'recovery',
    '高可用性',
    'high availability',
    'HA',
    '容錯',
    'fault tolerance',
    '藍綠部署',
    'blue-green deployment',
    '金絲雀部署',
    'canary deployment',
    '滾動更新',
    'rolling update',
    '回滾',
    'rollback',
    '版本管理',
    'version management' ],
    description: '建立完整的DevOps流程和監控系統，確保應用穩定運行',
    template: `請幫我建立DevOps和監控系統： 1. CI/CD流程： - 設定自動化建置和測試流程 - 實作多環境部署策略 - 建立代碼品質檢查和安全性掃描 2. 基礎設施管理： - 使用 Infrastructure as Code 管理環境 - 實作容器化和編排策略 - 設定自動擴展和負載均衡 3. 監控與告警： - 建立應用效能監控(APM)- 設定日誌收集和分析系統 - 實作告警機制和通知系統 4. 災難恢復： - 設計備份和復原策略 - 實作高可用性架構 - 建立災難恢復測試流程`,
    customizable: true,
    options: [{
    id: 'cicd-pipeline',
    label: 'CI/CD管道',
    description: '自動化建置、測試、部署流程',
    default: true
}
,
    {
    id: 'infrastructure-as-code',
    label: '基礎設施即代碼',
    description: 'Terraform、Ansible等IaC工具',
    default: true
}
,
    {
    id: 'containerization',
    label: '容器化',
    description: 'Docker和Kubernetes編排',
    default: true
}
,
    {
    id: 'monitoring',
    label: '監控系統',
    description: 'Prometheus、Grafana等監控工具',
    default: true
}
,
    {
    id: 'logging',
    label: '日誌管理',
    description: 'ELK Stack、集中化日誌收集',
    default: true
}
,
    {
    id: 'alerting',
    label: '告警機制',
    description: '告警規則和通知系統',
    default: true
}
,
    {
    id: 'performance-monitoring',
    label: '效能監控',
    description: 'APM、分散式追蹤',
    default: true
}
,
    {
    id: 'scaling',
    label: '自動擴展',
    description: '水平擴展和負載均衡',
    default: true
}
,
    {
    id: 'disaster-recovery',
    label: '災難恢復',
    description: '備份策略和高可用性',
    default: true
}
,
    {
    id: 'testing',
    label: '測試策略',
    description: '負載測試、壓力測試',
    default: false
}
]
}
,
    {
    id: 'microservices-architecture',
    title: '微服務架構',
    category: '後端開發',
    keywords: [ '微服務',
    'microservices',
    '服務導向架構',
    'SOA',
    'Service-Oriented Architecture',
    '單體應用',
    'monolith',
    '單體架構',
    'monolithic architecture',
    '服務拆分',
    'service decomposition',
    '領域驅動設計',
    'DDD',
    'Domain-Driven Design',
    '有界上下文',
    'bounded context',
    '聚合',
    'aggregate',
    '實體',
    'entity',
    '值物件',
    'value object',
    '領域服務',
    'domain service',
    '應用服務',
    'application service',
    'API閘道',
    'API Gateway',
    '服務發現',
    'service discovery',
    'Consul',
    'Eureka',
    'Etcd',
    'Zookeeper',
    '負載均衡',
    'load balancing',
    '熔斷器',
    'circuit breaker',
    'Hystrix',
    'Resilience4j',
    '重試',
    'retry',
    '超時',
    'timeout',
    '隔離',
    'isolation',
    '限流',
    'rate limiting',
    '服務網格',
    'service mesh',
    'Istio',
    'Linkerd',
    'Envoy',
    'sidecar',
    '分散式追蹤',
    'distributed tracing',
    'Jaeger',
    'Zipkin',
    'OpenTelemetry',
    '分散式日誌',
    'distributed logging',
    'ELK Stack',
    'Fluentd',
    'Fluent Bit',
    '事件驅動',
    'event-driven',
    '事件溯源',
    'event sourcing',
    'CQRS',
    'Command Query Responsibility Segregation',
    '事件總線',
    'event bus',
    '訊息佇列',
    'message queue',
    'RabbitMQ',
    'Apache Kafka',
    'Redis Streams',
    'AWS SQS',
    'Azure Service Bus',
    'Google Pub/Sub',
    '非同步通訊',
    'asynchronous communication',
    '同步通訊',
    'synchronous communication',
    'REST',
    'GraphQL',
    'gRPC',
    'WebSocket',
    'HTTP/2',
    '序列化',
    'serialization',
    'JSON',
    'XML',
    'Protocol Buffers',
    'Avro',
    '資料庫分離',
    'database per service',
    '共享資料庫',
    'shared database',
    '最終一致性',
    'eventual consistency',
    '強一致性',
    'strong consistency',
    'CAP定理',
    'CAP theorem',
    'BASE',
    'Basically Available,
    Soft state,
    Eventual consistency',
    'Saga模式',
    'Saga pattern',
    '兩階段提交',
    '2PC',
    '補償交易',
    'compensating transaction',
    '容器化',
    'containerization',
    'Docker',
    'Kubernetes',
    'Helm',
    'Operator',
    '服務編排',
    'service orchestration',
    '工作流',
    'workflow',
    'Camunda',
    'Zeebe',
    'Temporal',
    'Cadence',
    '狀態機',
    'state machine' ],
    description: '設計和實作微服務架構，提升系統的可擴展性和維護性',
    template: `請幫我設計微服務架構： 1. 服務拆分： - 根據業務領域劃分微服務邊界 - 識別服務間的依賴關係 - 設計服務間的通信機制 2. 基礎設施： - 設定API閘道和服務發現 - 實作熔斷器和重試機制 - 建立分散式追蹤和監控 3. 資料管理： - 設計每個服務的獨立資料庫 - 實作事件驅動的資料同步 - 處理分散式交易和一致性 4. 部署與運維： - 使用容器化技術部署服務 - 設定自動擴展和負載均衡 - 建立服務監控和告警機制`,
    customizable: true,
    options: [{
    id: 'service-decomposition',
    label: '服務拆分',
    description: '根據業務領域劃分微服務邊界',
    default: true
}
,
    {
    id: 'communication',
    label: '服務通信',
    description: '設計服務間的通信機制',
    default: true
}
,
    {
    id: 'api-gateway',
    label: 'API閘道',
    description: '設定API閘道和路由規則',
    default: true
}
,
    {
    id: 'service-discovery',
    label: '服務發現',
    description: '實作服務註冊和發現機制',
    default: true
}
,
    {
    id: 'resilience',
    label: '彈性設計',
    description: '熔斷器、重試、限流等機制',
    default: true
}
,
    {
    id: 'data-management',
    label: '資料管理',
    description: '分散式資料庫和一致性處理',
    default: true
}
,
    {
    id: 'event-driven',
    label: '事件驅動',
    description: '事件總線和訊息佇列',
    default: true
}
,
    {
    id: 'monitoring',
    label: '監控追蹤',
    description: '分散式追蹤和日誌管理',
    default: true
}
,
    {
    id: 'containerization',
    label: '容器化',
    description: 'Docker和Kubernetes部署',
    default: true
}
,
    {
    id: 'testing',
    label: '測試策略',
    description: '微服務的測試和模擬',
    default: false
}
]
}
,
    {
    id: 'cloud-native-development',
    title: '雲原生開發',
    category: '新技術與趨勢',
    keywords: [ '雲原生',
    'cloud native',
    '12-Factor App',
    '十二要素應用',
    '無狀態',
    'stateless',
    '配置外化',
    'config externalization',
    '環境變數',
    'environment variables',
    '依賴注入',
    'dependency injection',
    '反向控制',
    'IoC',
    'Inversion of Control',
    '雲端平台',
    'cloud platform',
    'AWS',
    'Amazon Web Services',
    'Azure',
    'Microsoft Azure',
    'GCP',
    'Google Cloud Platform',
    '阿里雲',
    'Alibaba Cloud',
    '騰訊雲',
    'Tencent Cloud',
    '華為雲',
    'Huawei Cloud',
    '無伺服器',
    'serverless',
    'Function as a Service',
    'FaaS',
    'AWS Lambda',
    'Azure Functions',
    'Google Cloud Functions',
    '阿里雲函數計算',
    '事件驅動',
    'event-driven',
    '事件源',
    'event source',
    '事件流',
    'event stream',
    '雲端函數',
    'cloud function',
    '觸發器',
    'trigger',
    '定時器',
    'timer',
    'cron',
    'HTTP觸發',
    'HTTP trigger',
    '資料庫觸發',
    'database trigger',
    '訊息觸發',
    'message trigger',
    '檔案觸發',
    'file trigger',
    'API閘道',
    'API Gateway',
    'AWS API Gateway',
    'Azure API Management',
    'Google Cloud Endpoints',
    '容器服務',
    'container service',
    'AWS ECS',
    'AWS EKS',
    'Azure Container Instances',
    'Azure AKS',
    'Google Cloud Run',
    'Google GKE',
    '容器註冊表',
    'container registry',
    'Docker Hub',
    'AWS ECR',
    'Azure Container Registry',
    'Google Container Registry',
    '持續整合',
    'continuous integration',
    '持續部署',
    'continuous deployment',
    'GitOps',
    'ArgoCD',
    'Flux',
    'Tekton',
    'Spinnaker',
    'Jenkins X',
    '基礎設施即代碼',
    'Infrastructure as Code',
    'Terraform',
    'CloudFormation',
    'ARM Templates',
    'Deployment Manager',
    'Pulumi',
    'CDK',
    'Cloud Development Kit',
    '配置管理',
    'configuration management',
    'Ansible',
    'Chef',
    'Puppet',
    'SaltStack',
    '秘密管理',
    'secret management',
    'AWS Secrets Manager',
    'Azure Key Vault',
    'Google Secret Manager',
    'HashiCorp Vault',
    '環境管理',
    'environment management',
    '多環境',
    'multi-environment',
    '開發環境',
    'development',
    '測試環境',
    'testing',
    '預發布環境',
    'staging',
    '生產環境',
    'production',
    '環境隔離',
    'environment isolation',
    '雲端監控',
    'cloud monitoring',
    'AWS CloudWatch',
    'Azure Monitor',
    'Google Cloud Monitoring',
    '雲端日誌',
    'cloud logging',
    'AWS CloudTrail',
    'Azure Log Analytics',
    'Google Cloud Logging',
    '成本優化',
    'cost optimization',
    '資源標籤',
    'resource tagging',
    '成本分析',
    'cost analysis',
    '預算告警',
    'budget alerting',
    '自動關閉',
    'auto-shutdown',
    '彈性擴展',
    'elastic scaling',
    '自動擴展',
    'auto scaling',
    '水平擴展',
    'horizontal scaling',
    '垂直擴展',
    'vertical scaling',
    '預測性擴展',
    'predictive scaling',
    '目標追蹤',
    'target tracking',
    '步進擴展',
    'step scaling',
    '簡單擴展',
    'simple scaling' ],
    description: '開發雲原生應用程式，充分利用雲端平台的彈性和可擴展性',
    template: `請幫我開發雲原生應用： 1. 應用設計： - 遵循12-Factor App原則設計應用 - 實作無狀態和配置外化 - 設計事件驅動的架構 2. 雲端服務整合： - 選擇合適的雲端平台和服務 - 實作無伺服器函數和API閘道 - 整合雲端資料庫和儲存服務 3. 容器化與編排： - 使用Docker容器化應用 - 設定Kubernetes編排和自動擴展 - 實作健康檢查和服務發現 4. 監控與運維： - 建立雲端監控和日誌系統 - 設定告警和自動化運維 - 實作成本優化和資源管理`,
    customizable: true,
    options: [{
    id: 'twelve-factor',
    label: '12-Factor App',
    description: '遵循十二要素應用原則',
    default: true
}
,
    {
    id: 'cloud-platform',
    label: '雲端平台',
    description: '選擇AWS、Azure、GCP等平台',
    default: true
}
,
    {
    id: 'serverless',
    label: '無伺服器',
    description: 'Lambda、Functions等FaaS服務',
    default: true
}
,
    {
    id: 'containerization',
    label: '容器化',
    description: 'Docker和Kubernetes編排',
    default: true
}
,
    {
    id: 'event-driven',
    label: '事件驅動',
    description: '事件源和事件流架構',
    default: true
}
,
    {
    id: 'infrastructure-as-code',
    label: '基礎設施即代碼',
    description: 'Terraform、CloudFormation等',
    default: true
}
,
    {
    id: 'monitoring',
    label: '雲端監控',
    description: 'CloudWatch、Azure Monitor等',
    default: true
}
,
    {
    id: 'cost-optimization',
    label: '成本優化',
    description: '資源標籤和成本分析',
    default: true
}
,
    {
    id: 'security',
    label: '安全配置',
    description: '秘密管理和存取控制',
    default: true
}
,
    {
    id: 'cicd',
    label: 'CI/CD',
    description: 'GitOps和自動化部署',
    default: false
}
]
}
,
    {
    id: 'beauty-recruitment-website',
    title: '美業招募網站範本',
    category: '行業範本',
    keywords: [ '美業',
    '美容',
    '美髮',
    '美甲',
    '招募',
    '求職',
    '作品集',
    '美髮師',
    '美甲師',
    '美容師',
    '彩妝師',
    '紋繡師',
    '美睫師',
    '美髮助理',
    '美容助理',
    'beauty',
    'hairdresser',
    'nail artist',
    'makeup artist',
    'beauty salon',
    'spa',
    '作品展示',
    'portfolio',
    '技能展示',
    '證照',
    '證書',
    '專業技能',
    '地理位置',
    '附近工作',
    '薪資',
    '工作時間',
    '全職',
    '兼職',
    '接案',
    '即時聊天',
    '預約面試',
    '履歷',
    '個人資料',
    '聯絡方式',
    '社群分享',
    'Instagram',
    'Facebook',
    '作品分享',
    '客戶評價',
    '服務項目',
    '價格',
    '營業時間',
    '店家資訊',
    '分店',
    '連鎖店',
    '獨立工作室',
    '個人工作室' ],
    description: '一鍵生成美業招募網站，包含職位發布、作品集展示、即時聊天等功能',
    template: `請幫我建立一個完整的美業招募網站，包含以下功能： **專案需求：** - 目標用戶：美業從業者（美髮師、美甲師、美容師等）和雇主 - 核心功能：職位發布、求職搜尋、作品集展示、即時聊天、預約面試 - 設計風格：優雅、專業、視覺吸引力強，使用玫瑰金和米色配色 - 技術要求：響應式設計、行動端優先、快速載入 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（美業專用色彩、字體、組件） 3. 用戶註冊登入系統（支援社群登入） 4. 職位管理系統（美業專業分類、技能標籤、薪資篩選） 5. 作品集展示系統（圖片/影片上傳、美業分類、社群分享） 6. 即時聊天系統（作品集快速分享、預約時間選擇器） 7. 地理位置服務（Google Maps、距離計算、路線規劃） 8. 預約面試系統（日曆選擇、時段預約、提醒通知） 9. 效能優化（圖片優化、懶載入、CDN） 10. SEO優化（美業關鍵字、結構化資料、社群標籤） **美業特殊功能：** - 專業技能標籤（剪髮、染髮、美甲、彩妝、紋繡等） - 作品集分類展示（美髮作品、美甲作品、美容作品） - 證照資格展示 - 服務項目和價格資訊 - 客戶評價系統 - 社群媒體整合（Instagram、Facebook分享） 請提供完整的程式碼實作和部署指南。`,
    customizable: true,
    options: [{
    id: 'user-management',
    label: '用戶管理',
    description: '註冊登入、社群登入、個人資料',
    default: true
}
,
    {
    id: 'job-management',
    label: '職位管理',
    description: '職位發布、搜尋、篩選、分類',
    default: true
}
,
    {
    id: 'portfolio-system',
    label: '作品集系統',
    description: '作品展示、分類、上傳、分享',
    default: true
}
,
    {
    id: 'messaging',
    label: '即時聊天',
    description: '即時通訊、作品分享、預約',
    default: true
}
,
    {
    id: 'location-services',
    label: '地理位置',
    description: 'Google Maps、距離計算、路線',
    default: true
}
,
    {
    id: 'appointment-system',
    label: '預約系統',
    description: '面試預約、日曆選擇、提醒',
    default: true
}
,
    {
    id: 'skill-tags',
    label: '技能標籤',
    description: '美業專業技能分類和標籤',
    default: true
}
,
    {
    id: 'certification',
    label: '證照展示',
    description: '專業證照和資格展示',
    default: true
}
,
    {
    id: 'social-integration',
    label: '社群整合',
    description: 'Instagram、Facebook分享',
    default: true
}
,
    {
    id: 'seo-optimization',
    label: 'SEO優化',
    description: '美業關鍵字、結構化資料',
    default: false
}
]
}
,
    {
    id: 'real-estate-agent-website',
    title: '房仲個人網頁範本',
    category: '行業範本',
    keywords: [ '房仲',
    '不動產',
    '房地產',
    '仲介',
    'agent',
    'real estate',
    'property',
    '房屋',
    '買房',
    '賣房',
    '租屋',
    '出租',
    '出售',
    '成交',
    '委託',
    '物件',
    '房源',
    '建案',
    '新成屋',
    '中古屋',
    '預售屋',
    '店面',
    '辦公室',
    '土地',
    '透天',
    '大樓',
    '公寓',
    '套房',
    '別墅',
    '豪宅',
    '投資',
    '房價',
    '行情',
    '估價',
    '貸款',
    '頭期款',
    '利率',
    '稅務',
    '過戶',
    '看屋',
    '帶看',
    '議價',
    '簽約',
    '交屋',
    '產權',
    '地籍',
    '謄本',
    '實價登錄',
    '成交記錄',
    '區域分析',
    '交通',
    '學區',
    '生活機能',
    '捷運',
    '公車',
    '停車',
    '公園',
    '學校',
    '醫院',
    '購物',
    '美食',
    '聯絡方式',
    'LINE',
    '電話',
    '地址',
    '營業時間',
    '服務區域',
    '專業證照',
    '不動產經紀人',
    '地政士',
    '代書',
    '履歷',
    '經歷',
    '客戶見證',
    '推薦',
    '評價',
    '五星',
    '服務品質',
    '專業度' ],
    description: '一鍵生成房仲個人專業網頁，包含物件展示、客戶見證、聯絡功能等',
    template: `請幫我建立一個房仲個人專業網頁，包含以下功能： **專案需求：** - 目標用戶：房仲從業人員個人品牌網站 - 核心功能：物件展示、客戶見證、專業介紹、聯絡預約 - 設計風格：專業、信賴、現代化，使用藍色和金色配色 - 技術要求：響應式設計、SEO優化、快速載入 **請依序實作：** 1. 專案架構設計（React + Next.js + 靜態生成） 2. 設計系統建立（房仲專業配色、字體、組件） 3. 首頁設計（個人介紹、專業優勢、服務區域） 4. 物件展示系統（圖片輪播、詳細資訊、地圖位置） 5. 客戶見證區塊（推薦文、成交記錄、五星評價） 6. 專業證照展示（不動產經紀人、地政士等證照） 7. 服務區域地圖（Google Maps整合、熱點標記） 8. 聯絡預約系統（表單、LINE連結、電話直撥） 9. 房市資訊區塊（最新成交、區域分析、政策動態） 10. SEO優化（房仲關鍵字、結構化資料、本地SEO） **房仲特殊功能：** - 物件搜尋篩選（價格、坪數、房型、區域） - 實價登錄整合顯示 - 房貸試算工具 - 看屋預約系統 - 客戶推薦碼系統 - 成交記錄統計 - 服務區域熱點圖 - 房市趨勢分析 **必備頁面：** - 首頁（個人介紹、熱門物件） - 物件列表（所有在售物件） - 物件詳情（單一物件詳細資訊） - 關於我（專業經歷、證照、服務理念） - 客戶見證（推薦文、成交案例） - 服務區域（地圖、熱點分析） - 聯絡我（預約看屋、諮詢表單） - 房市資訊（最新消息、政策動態） 請提供完整的程式碼實作和部署指南。`
}
,
    {
    id: 'restaurant-website',
    title: '餐飲業網頁範本',
    category: '行業範本',
    keywords: [ '餐廳',
    '美食',
    '料理',
    '菜單',
    '訂位',
    '外送',
    '外帶',
    'restaurant',
    'food',
    'menu',
    'reservation',
    'delivery',
    'takeout',
    'dining',
    '中餐',
    '西餐',
    '日式',
    '韓式',
    '泰式',
    '義式',
    '法式',
    '美式',
    '火鍋',
    '燒烤',
    '壽司',
    '拉麵',
    '披薩',
    '牛排',
    '海鮮',
    '素食',
    '咖啡',
    '甜點',
    '下午茶',
    '早午餐',
    '宵夜',
    '酒吧',
    '居酒屋',
    '套餐',
    '單點',
    '自助餐',
    '吃到飽',
    '包廂',
    '宴會',
    '婚宴',
    '價格',
    '優惠',
    '折扣',
    '會員',
    '集點',
    '生日',
    '節慶',
    '活動',
    '營業時間',
    '公休',
    '地址',
    '電話',
    '停車',
    '交通',
    '捷運',
    '環境',
    '裝潢',
    '氣氛',
    '音樂',
    '燈光',
    '座位',
    '容納人數',
    '廚師',
    '主廚',
    '推薦',
    '招牌',
    '特色',
    '食材',
    '新鮮',
    '有機',
    '評價',
    '評論',
    '星級',
    '推薦',
    '人氣',
    '熱門',
    '必吃',
    '訂位系統',
    '線上點餐',
    '外送平台',
    'Uber Eats',
    'foodpanda',
    '社群媒體',
    'Instagram',
    'Facebook',
    'Google評論',
    '部落格' ],
    description: '一鍵生成餐飲業網站，包含菜單展示、線上訂位、外送整合等功能',
    template: `請幫我建立一個餐飲業網站，包含以下功能： **專案需求：** - 目標用戶：餐廳、咖啡廳、小吃店等餐飲業者 - 核心功能：菜單展示、線上訂位、外送整合、優惠活動 - 設計風格：溫馨、誘人、現代化，使用暖色調配色 - 技術要求：響應式設計、行動端優化、快速載入 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（餐飲業配色、字體、組件） 3. 首頁設計（餐廳介紹、招牌菜、環境照片） 4. 菜單展示系統（分類瀏覽、圖片展示、價格標示） 5. 線上訂位系統（日期選擇、時段預約、人數選擇） 6. 外送整合（Uber Eats、foodpanda連結、外送範圍） 7. 優惠活動區塊（促銷資訊、會員優惠、節慶活動） 8. 聯絡資訊（地址、電話、營業時間、交通方式） 9. 客戶評價展示（Google評論、社群媒體評價） 10. SEO優化（餐廳關鍵字、本地SEO、結構化資料） **餐飲業特殊功能：** - 菜單分類瀏覽（前菜、主菜、甜點、飲料） - 線上點餐系統（購物車、結帳、付款） - 訂位管理系統（預約確認、取消、修改） - 外送範圍地圖顯示 - 優惠券系統（折扣碼、滿額優惠） - 會員系統（集點、生日優惠、專屬活動） - 多語言支援（中英文菜單） - 過敏原標示 - 營養資訊顯示 - 素食選項標記 **必備頁面：** - 首頁（餐廳介紹、招牌菜、環境） - 菜單（完整菜單、價格、圖片） - 訂位（線上預約系統） - 外送（外送平台連結、範圍） - 優惠活動（促銷資訊、會員專屬） - 關於我們（餐廳故事、主廚介紹） - 聯絡我們（地址、電話、營業時間） - 客戶評價（Google評論、社群評價） **整合功能：** - Google Maps 位置顯示 - 社群媒體分享按鈕 - 線上付款系統（信用卡、行動支付） - 簡訊/Email 訂位確認 - 排隊叫號系統 - 外送追蹤功能 請提供完整的程式碼實作和部署指南。`
}
,
    {
    id: 'fitness-gym-website',
    title: '健身中心網頁範本',
    category: '行業範本',
    keywords: [ '健身',
    '健身房',
    '運動',
    'fitness',
    'gym',
    'workout',
    'training',
    '重訓',
    '有氧',
    '瑜珈',
    '皮拉提斯',
    '拳擊',
    '游泳',
    '跑步',
    '教練',
    '私人教練',
    '團體課程',
    '課程表',
    '會員',
    '會籍',
    '器材',
    '設備',
    '環境',
    '更衣室',
    '淋浴',
    '停車',
    '交通',
    '價格',
    '方案',
    '月費',
    '年費',
    '體驗',
    '試用',
    '優惠',
    '營業時間',
    '24小時',
    '地址',
    '電話',
    '預約',
    '課程預約',
    '教練預約',
    '私人課程',
    '團體課程',
    '課程內容',
    '難度',
    '初學者',
    '進階',
    '專業',
    '證照',
    '資格',
    '經歷',
    '推薦',
    '成果',
    '見證',
    '減重',
    '增肌',
    '塑身',
    '健康',
    '體態',
    '營養',
    '飲食',
    '補充品',
    '蛋白粉',
    '維生素',
    '諮詢',
    '體測',
    'InBody',
    '體脂',
    '肌肉量',
    '基礎代謝',
    '目標',
    '社群',
    '打卡',
    '分享',
    '挑戰',
    '比賽',
    '活動',
    '派對' ],
    description: '一鍵生成健身中心網站，包含課程預約、教練介紹、會員方案等功能',
    template: `請幫我建立一個健身中心網站，包含以下功能： **專案需求：** - 目標用戶：健身中心、健身房、運動工作室 - 核心功能：課程預約、教練介紹、會員方案、器材展示 - 設計風格：動感、專業、激勵，使用橙色和黑色配色 - 技術要求：響應式設計、行動端優化、即時預約 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（健身業配色、字體、組件） 3. 首頁設計（健身房介紹、環境展示、熱門課程） 4. 課程預約系統（課程表、教練選擇、時段預約） 5. 教練介紹頁面（個人資料、專長、證照、評價） 6. 會員方案展示（價格方案、優惠活動、比較表） 7. 器材設備展示（器材介紹、使用說明、環境照片） 8. 會員專區（個人資料、預約記錄、體測數據） 9. 社群功能（成果分享、打卡、挑戰活動） 10. SEO優化（健身關鍵字、本地SEO、結構化資料） **健身業特殊功能：** - 課程分類（重訓、有氧、瑜珈、拳擊等） - 教練預約系統（私人課程、團體課程） - 會員等級管理（一般會員、VIP、年費會員） - 體測數據追蹤（體重、體脂、肌肉量記錄） - 營養諮詢預約 - 器材使用教學影片 - 健身挑戰活動 - 成果分享社群 - 會員專屬優惠 - 24小時營業狀態顯示 **必備頁面：** - 首頁（健身房介紹、環境、熱門課程） - 課程（課程表、預約、教練介紹） - 教練（教練團隊、專長、預約） - 會員方案（價格、優惠、比較） - 器材設備（器材介紹、環境展示） - 會員專區（個人資料、預約記錄） - 關於我們（健身房故事、理念） - 聯絡我們（地址、電話、營業時間） **整合功能：** - Google Maps 位置顯示 - 社群媒體分享（Instagram、Facebook） - 線上付款系統 - 簡訊/Email 預約確認 - 體測數據圖表顯示 - 健身APP整合 - 穿戴裝置數據同步 請提供完整的程式碼實作和部署指南。`
}
,
    {
    id: 'e-commerce-store',
    title: '電商購物網站範本',
    category: '行業範本',
    keywords: [ '電商',
    '購物',
    '商城',
    '商店',
    'e-commerce',
    'shop',
    'store',
    'mall',
    '商品',
    '產品',
    '購物車',
    '結帳',
    '付款',
    '訂單',
    '物流',
    '配送',
    '分類',
    '搜尋',
    '篩選',
    '排序',
    '價格',
    '折扣',
    '優惠',
    '促銷',
    '會員',
    '登入',
    '註冊',
    '個人資料',
    '訂單記錄',
    '收藏',
    '願望清單',
    '評價',
    '評論',
    '評分',
    '推薦',
    '熱門',
    '新品',
    '特價',
    '清倉',
    '庫存',
    '現貨',
    '預購',
    '缺貨',
    '補貨',
    '通知',
    '到貨通知',
    '退貨',
    '換貨',
    '保固',
    '售後',
    '客服',
    'FAQ',
    '常見問題',
    '運費',
    '免運',
    '滿額',
    '優惠券',
    '折扣碼',
    '會員價',
    'VIP',
    '金流',
    '信用卡',
    'ATM',
    '超商',
    '貨到付款',
    '分期',
    '零利率',
    '發票',
    '統編',
    '電子發票',
    '載具',
    '紙本發票',
    '三聯式',
    '物流',
    '宅配',
    '超商取貨',
    '店到店',
    '自取',
    '配送時間',
    '追蹤',
    '物流查詢',
    '配送狀態',
    '簽收',
    '包裹',
    '包裝' ],
    description: '一鍵生成電商購物網站，包含商品展示、購物車、結帳、會員系統等功能',
    template: `請幫我建立一個電商購物網站，包含以下功能： **專案需求：** - 目標用戶：電商賣家、品牌商、零售商 - 核心功能：商品展示、購物車、結帳付款、會員管理 - 設計風格：現代、簡潔、專業，使用藍色和白色配色 - 技術要求：響應式設計、SEO優化、安全付款 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Redis） 2. 設計系統建立（電商配色、字體、組件） 3. 首頁設計（熱門商品、優惠活動、分類導航） 4. 商品展示系統（商品列表、詳情頁、圖片輪播） 5. 購物車功能（加入購物車、數量調整、價格計算） 6. 結帳付款系統（訂單確認、付款方式、發票選擇） 7. 會員系統（註冊登入、個人資料、訂單記錄） 8. 商品管理（分類、搜尋、篩選、排序） 9. 優惠系統（折扣碼、滿額優惠、會員價） 10. SEO優化（商品關鍵字、結構化資料、sitemap） **電商特殊功能：** - 商品分類瀏覽（多層級分類、標籤篩選） - 商品搜尋（關鍵字搜尋、自動完成、搜尋建議） - 購物車持久化（本地儲存、登入同步） - 多種付款方式（信用卡、ATM、超商、貨到付款） - 發票系統（電子發票、統編、載具） - 物流整合（宅配、超商取貨、配送追蹤） - 庫存管理（現貨、預購、缺貨通知） - 優惠券系統（折扣碼、滿額優惠、會員專屬） - 商品評價系統（評分、評論、圖片上傳） - 推薦系統（相關商品、熱門商品、個人化推薦） **必備頁面：** - 首頁（熱門商品、優惠活動、分類導航） - 商品列表（分類瀏覽、搜尋結果、篩選） - 商品詳情（詳細資訊、圖片、評價、規格） - 購物車（商品清單、數量調整、優惠券） - 結帳頁面（訂單確認、付款方式、配送資訊） - 會員中心（個人資料、訂單記錄、收藏清單） - 關於我們（品牌故事、服務理念） - 聯絡我們（客服資訊、FAQ、退換貨政策） **整合功能：** - 金流整合（綠界、藍新、智付通） - 物流整合（黑貓、新竹、超商） - 發票整合（財政部電子發票） - 社群分享（Facebook、LINE、Instagram） - 客服系統（線上客服、LINE客服） - 分析工具（Google Analytics、Facebook Pixel） 請提供完整的程式碼實作和部署指南。`
}
];
function searchCommands(query){
    if (!query.trim()){
    searchResults.style.display='none';
return;

}
showSearchLoading();
const commandDatabase.map(command=>{
    const calculateMatchScore(query,
    command);
return{
    ...command,
    score
}
;

}
).filter(command=> command.score > 0).sort((a,
    b)=> b.score - a.score);
hideSearchLoading();
displayResults(results);

}
function showSearchLoading(){
    searchResults.innerHTML=` <div class="search-loading"> <div class="loading-spinner"></div> <p>正在搜尋相關指令...</p> </div> `;
searchResults.classList.add('show');

}
function hideSearchLoading(){
    
}
function calculateMatchScore(query,
    command){
    const query.toLowerCase().trim();
const queryLower.split(/\s+/).filter(word=> word.length > 0);
let 0;
if (command.title.toLowerCase()===queryLower){
    score +=100;

}
else 
if (command.title.toLowerCase().includes(queryLower)){
    score +=50;

}
if (command.category.toLowerCase()===queryLower){
    score +=40;

}
else 
if (command.category.toLowerCase().includes(queryLower)){
    score +=20;

}
command.keywords.forEach(keyword=>{
    const keyword.toLowerCase();
if (keywordLower===queryLower){
    score +=30;

}
else 
if (queryLower.includes(keywordLower)|| keywordLower.includes(queryLower)){
    score +=15;

}
else 
if (keywordLower.includes(queryLower)|| queryLower.includes(keywordLower)){
    score +=8;

}

}
);
let 0;
queryWords.forEach(word=>{
    if (word.length > 1){
    const command.keywords.some(keyword=> keyword.toLowerCase().includes(word)|| word.includes(keyword.toLowerCase()))|| command.title.toLowerCase().includes(word)|| command.description.toLowerCase().includes(word)|| command.category.toLowerCase().includes(word);
if (hasMatch){
    matchedWords++;

}

}

}
);
if (matchedWords > 1){
    score +=matchedWords * 5;

}
if (command.description.toLowerCase().includes(queryLower)){
    score +=10;

}
queryWords.forEach(word=>{
    if (word.length > 2 && command.description.toLowerCase().includes(word)){
    score +=3;

}

}
);
const ['api',
    'css',
    'html',
    'js',
    'javascript',
    'react',
    'vue',
    'angular',
    'node',
    'php',
    'python',
    'java',
    'sql',
    'mongodb',
    'mysql',
    'redis',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'gcp'];
techTerms.forEach(term=>{
    if (queryLower.includes(term)&& command.keywords.some(keyword=> keyword.toLowerCase().includes(term))){
    score +=12;

}

}
);
return score;

}
function displayResults(results){
    if (results.length===0){
    searchResults.innerHTML=` <div class="no-results"> <i class="fas fa-search" style="font-size: 2rem;
margin-bottom: 1rem;
color: #ccc;
"></i> <p>沒有找到相關的指令，請嘗試其他關鍵字</p> <div class="search-tips"> <p><strong>搜尋提示：</strong></p> <ul> <li>嘗試使用更簡單的關鍵字</li> <li>使用中文或英文術語</li> <li>點擊下方的熱門搜尋標籤</li> </ul> </div> </div> `;

}
else{
    const 5;
const results.slice(0,
    maxResults);
const smartSearchInput.value.trim();
searchResults.innerHTML=` <div class="results-header"> <span>找到 ${
    results.length
}
個相關指令</span> ${
    results.length > maxResults ? `<span class="more-results">顯示前 ${
    maxResults
}
個結果</span>` : ''
}
</div> ${
    limitedResults.map(command=> ` <div class="recommended-command" data-command-id="${
    command.id
}
"> <div class="command-match"> <div> <div class="command-title">${
    highlightSearchTerms(command.title,
    searchQuery)
}
</div> <div style="color: var(--primary-color);
font-size: 0.9rem;
">${
    highlightSearchTerms(command.category,
    searchQuery)
}
</div> </div> <div class="command-actions"> <div class="match-score">${
    Math.round(command.score)
}
% 匹配</div> <button class="favorite-btn" data-command-id="${
    command.id
}
" title="收藏此指令"> <i class="far fa-heart"></i> </button> </div> </div> <div class="command-description">${
    highlightSearchTerms(command.description,
    searchQuery)
}
</div> ${
    command.customizable ? ` <div class="customization-options"> <div class="customization-header" data-command-id="${
    command.id
}
"> <h4>🎛️ 自訂功能選項</h4> <i class="fas fa-chevron-down toggle-icon" id="toggle-icon-${
    command.id
}
"></i> </div> <div class="customization-content" id="customization-content-${
    command.id
}
" style="display: none;
"> <div class="options-grid"> ${
    command.options.map(option=> ` <label class="option-item"> <input type="checkbox" data-option-id="${
    option.id
}
" ${
    option.default ? 'checked' : ''
}
class="customization-checkbox"> <span class="option-label">${
    option.label
}
</span> <span class="option-description">${
    option.description
}
</span> </label> `).join('')
}
</div> <div class="custom-text-section"> <label class="custom-text-label"> <span>✏️ 自訂需求描述：</span> <textarea class="custom-text-input" data-command-id="${
    command.id
}
" placeholder="請描述您的特殊需求，例如：按鈕顏色、大小、位置等..."></textarea> </label> </div> <div class="customization-actions"> <button class="generate-custom-btn" data-command-id="${
    command.id
}
"> <i class="fas fa-magic"></i> 生成客製化指令 </button> <button class="copy-custom-btn" data-command-id="${
    command.id
}
" style="display: none;
"> <i class="fas fa-copy"></i> 複製客製化指令 </button> </div> <div class="custom-command-preview" data-command-id="${
    command.id
}
" style="display: none;
"> <h5>📝 客製化指令預覽：</h5> <div class="custom-template"> <code></code> </div> </div> </div> </div> ` : ''
}
<div class="command-template"> <div class="template-header"> <span>📋 預設指令</span> <button class="copy-default-btn" data-command-id="${
    command.id
}
" title="複製預設指令"> <i class="fas fa-copy"></i> 複製 </button> </div> <code>${
    command.template
}
</code> </div> </div> `).join('')
}
`;

}
searchResults.classList.add('show');
setTimeout(()=>{
    favoritesManager.updateFavoriteButtons();
initializeCustomizationOptions();

}
,
    100);

}
function highlightSearchTerms(text,
    query){
    if (!query || !text)
    return text;
const query.trim().split(/\s+/).filter(word=> word.length > 0);
let text;
queryWords.forEach(word=>{
    const new RegExp(`(${
    word
}
)`,
    'gi');
highlightedText=highlightedText.replace(regex,
    '<span class="search-highlight">$1</span>');

}
);
return highlightedText;

}
function initializeCustomizationOptions(){
    document.querySelectorAll('.generate-custom-btn').forEach(btn=>{
    btn.addEventListener('click',
    function(){
    const this.getAttribute('data-command-id');
generateCustomCommand(commandId);

}
);

}
);
document.querySelectorAll('.copy-default-btn').forEach(btn=>{
    btn.addEventListener('click',
    function(){
    const this.getAttribute('data-command-id');
copyDefaultCommand(commandId);

}
);

}
);
document.querySelectorAll('.custom-text-input').forEach(textarea=>{
    textarea.addEventListener('input',
    function(){
    const this.getAttribute('data-command-id');
const document.querySelector(`[data-command-id="${
    commandId
}
"] .custom-command-preview`);
if (previewElement && previewElement.style.display !=='none'){
    generateCustomCommand(commandId);

}

}
);

}
);
document.querySelectorAll('.customization-checkbox').forEach(checkbox=>{
    checkbox.addEventListener('change',
    function(){
    const this.closest('[data-command-id]').getAttribute('data-command-id');
const document.querySelector(`[data-command-id="${
    commandId
}
"] .custom-command-preview`);
if (previewElement && previewElement.style.display !=='none'){
    generateCustomCommand(commandId);

}

}
);

}
);
document.querySelectorAll('.copy-custom-btn').forEach(btn=>{
    btn.addEventListener('click',
    function(){
    const this.getAttribute('data-command-id');
generateCustomCommand(commandId);
copyCustomCommand(commandId);

}
);

}
);
document.querySelectorAll('.customization-header').forEach(header=>{
    header.addEventListener('click',
    function(){
    const this.getAttribute('data-command-id');
toggleCustomization(commandId);

}
);

}
);

}
function toggleCustomization(commandId){
    const document.getElementById(`customization-content-${
    commandId
}
`);
const document.getElementById(`toggle-icon-${
    commandId
}
`);
if (content.style.display==='none'){
    content.style.display='block';
icon.classList.remove('fa-chevron-down');
icon.classList.add('fa-chevron-up');

}
else{
    content.style.display='none';
icon.classList.remove('fa-chevron-up');
icon.classList.add('fa-chevron-down');

}

}
function copyDefaultCommand(commandId){
    const commandDatabase.find(cmd=> cmd.id===commandId);
if (!command)return;
if (navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(command.template).then(()=>{
    showCopySuccess('預設指令已複製到剪貼簿！');

}
).catch(()=>{
    fallbackCopyTextToClipboard(command.template);

}
);

}
else{
    fallbackCopyTextToClipboard(command.template);

}

}
function generateCustomCommand(commandId){
    const commandDatabase.find(cmd=> cmd.id===commandId);
if (!command || !command.customizable)return;
const document.querySelector(`[data-command-id="${
    commandId
}
"]`);
const commandElement.querySelectorAll('.customization-checkbox');
const Array.from(checkboxes).filter(cb=> cb.checked).map(cb=> cb.getAttribute('data-option-id'));
const commandElement.querySelector('.custom-text-input');
const customTextInput ? customTextInput.value.trim(): '';
let `請${
    command.title
}
：\n`;
let false;
selectedOptions.forEach(optionId=>{
    const command.options.find(opt=> opt.id===optionId);
if (option){
    customTemplate +=`- ${
    option.description
}
\n`;
hasSelectedOptions=true;

}

}
);
if (customText){
    customTemplate +=`\n- 特殊需求：${
    customText
}
\n`;
hasSelectedOptions=true;

}
if (!hasSelectedOptions){
    customTemplate=`請${
    command.title
}
： ⚠️ 請至少選擇一個功能選項或輸入自訂需求`;

}
const commandElement.querySelector('.custom-command-preview');
const previewElement.querySelector('.custom-template code');
templateElement.textContent=customTemplate;
previewElement.style.display='block';
const commandElement.querySelector('.copy-custom-btn');
const commandElement.querySelector('.generate-custom-btn');
if (hasSelectedOptions){
    copyBtn.style.display='inline-flex';
copyBtn.setAttribute('data-custom-template',
    customTemplate);
generateBtn.style.display='none';

}
else{
    copyBtn.style.display='none';
generateBtn.style.display='inline-flex';

}

}
function copyCustomCommand(commandId){
    const document.querySelector(`[data-command-id="${
    commandId
}
"]`);
const commandElement.querySelector('.copy-custom-btn');
const copyBtn.getAttribute('data-custom-template');
if (navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(customTemplate).then(()=>{
    showCopySuccess();

}
).catch(()=>{
    fallbackCopyTextToClipboard(customTemplate);

}
);

}
else{
    fallbackCopyTextToClipboard(customTemplate);

}

}
function fallbackCopyTextToClipboard(text){
    const document.createElement("textarea");
textArea.value=text;
textArea.style.top="0";
textArea.style.left="0";
textArea.style.position="fixed";
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try{
    document.execCommand('copy');
showCopySuccess();

}
catch(err){
    
}
document.body.removeChild(textArea);

}
function showCopySuccess(message='客製化指令已複製到剪貼簿！'){
    const document.querySelector('.copy-success');
if (existingToast){
    existingToast.remove();

}
const document.createElement('div');
toast.className='copy-success';
toast.innerHTML=` <i class="fas fa-check-circle"></i> <span>${
    message
}
</span> `;
document.body.appendChild(toast);
setTimeout(()=>{
    toast.remove();

}
,
    3000);

}
const document.getElementById('clearBtn');
const document.getElementById('searchHistory');
const document.getElementById('historyList');
const document.getElementById('clearHistoryBtn');
class SearchHistory{
    constructor(){
    this.history=JSON.parse(localStorage.getItem('searchHistory')|| '[]');
this.maxHistory=10;

}
add(query){
    if (!query.trim())return;
this.history=this.history.filter(item=> item !==query);
this.history.unshift(query);
if (this.history.length > this.maxHistory){
    this.history=this.history.slice(0,
    this.maxHistory);

}
this.save();
this.display();

}
remove(query){
    this.history=this.history.filter(item=> item !==query);
this.save();
this.display();

}
clear(){
    this.history=[];
this.save();
this.display();

}
save(){
    localStorage.setItem('searchHistory',
    JSON.stringify(this.history));

}
display(){
    if (this.history.length===0){
    searchHistory.style.display='none';
return;

}
searchHistory.style.display='block';
historyList.innerHTML=this.history.map(query=> ` <div class="history-item"> <span class="history-query" data-query="${
    query
}
">${
    query
}
</span> <button class="remove-history-btn" data-query="${
    query
}
" title="移除"> <i class="fas fa-times"></i> </button> </div> `).join('');
historyList.querySelectorAll('.history-query').forEach(item=>{
    item.addEventListener('click',
    (e)=>{
    const e.target.getAttribute('data-query');
smartSearchInput.value=query;
searchCommands(query);

}
);

}
);
historyList.querySelectorAll('.remove-history-btn').forEach(btn=>{
    btn.addEventListener('click',
    (e)=>{
    e.stopPropagation();
const e.target.closest('.remove-history-btn').getAttribute('data-query');
this.remove(query);

}
);

}
);

}

}
class Favorites{
    constructor(){
    this.favorites=JSON.parse(localStorage.getItem('favorites')|| '[]');

}
add(commandId){
    if (!this.favorites.includes(commandId)){
    this.favorites.push(commandId);
this.save();
this.updateFavoriteButtons();

}

}
remove(commandId){
    this.favorites=this.favorites.filter(id=> id !==commandId);
this.save();
this.updateFavoriteButtons();

}
toggle(commandId){
    if (this.isFavorite(commandId)){
    this.remove(commandId);

}
else{
    this.add(commandId);

}

}
isFavorite(commandId){
    return this.favorites.includes(commandId);

}
save(){
    localStorage.setItem('favorites',
    JSON.stringify(this.favorites));

}
updateFavoriteButtons(){
    document.querySelectorAll('.favorite-btn').forEach(btn=>{
    const btn.getAttribute('data-command-id');
const btn.querySelector('i');
if (this.isFavorite(commandId)){
    icon.className='fas fa-heart';
btn.classList.add('favorited');

}
else{
    icon.className='far fa-heart';
btn.classList.remove('favorited');

}

}
);

}
getFavorites(){
    return this.favorites;

}

}
const new SearchHistory();
const new Favorites();
searchBtn.addEventListener('click',
    ()=>{
    const smartSearchInput.value.trim();
if (query){
    searchHistoryManager.add(query);
searchCommands(query);

}

}
);
clearBtn.addEventListener('click',
    ()=>{
    smartSearchInput.value='';
searchResults.classList.remove('show');
clearBtn.style.display='none';
smartSearchInput.focus();

}
);
clearHistoryBtn.addEventListener('click',
    ()=>{
    if (confirm('確定要清除所有搜尋歷史嗎？')){
    searchHistoryManager.clear();

}

}
);
document.addEventListener('click',
    (e)=>{
    if (e.target.closest('.favorite-btn')){
    e.preventDefault();
const e.target.closest('.favorite-btn');
const btn.getAttribute('data-command-id');
favoritesManager.toggle(commandId);

}

}
);
smartSearchInput.addEventListener('keypress',
    (e)=>{
    if (e.key==='Enter'){
    const smartSearchInput.value.trim();
if (query){
    searchHistoryManager.add(query);
searchCommands(query);

}

}

}
);
const debounce((query)=>{
    if (query.length > 1){
    searchCommands(query);

}
else 
if (query.length===0){
    searchResults.classList.remove('show');

}

}
,
    CONFIG.searchDelay);
smartSearchInput.addEventListener('input',
    (e)=>{
    const e.target.value.trim();
if (query.length > 0){
    clearBtn.style.display='flex';

}
else{
    clearBtn.style.display='none';

}
debouncedSearch(query);

}
);
function addSearchSuggestions(){
    const [ '建立登入表單',
    '響應式設計',
    'API 呼叫',
    '動畫效果',
    '狀態管理',
    'SEO 優化',
    '無障礙設計',
    '測試策略',
    '部署方案',
    '效能優化',
    '彈出視窗',
    '資料擷取',
    'A/B 測試',
    '使用者體驗',
    'CSS 動畫',
    '彈跳視窗',
    '區塊寬度',
    '高度調整',
    '欄位大小',
    '容器設定',
    '間距調整',
    '對齊方式',
    '顏色設定',
    '字體大小',
    '圓角效果',
    'Git 自動化',
    'GitHub 腳本',
    '版本控制',
    '提交推送',
    '標籤管理',
    'CSS 變數',
    '焦點樣式',
    '防抖動',
    '本地儲存',
    '主題切換',
    '回到頂部',
    '載入動畫',
    '搜尋高亮',
    '社群分享',
    '推文卡片',
    '滾動監聽',
    '動畫優化',
    '批次處理',
    '媒體查詢',
    '無障礙設計',
    '平滑滾動',
    '效能優化',
    '響應式斷點' ];
const document.createElement('div');
suggestionContainer.className='search-suggestions';
suggestionContainer.innerHTML=` <div class="suggestion-header"> <span>熱門搜尋：</span> </div> <div class="suggestion-tags"> ${
    suggestions.map(suggestion=> `<span class="suggestion-tag" data-suggestion="${
    suggestion
}
">${
    suggestion
}
</span>`).join('')
}
</div> `;
smartSearchInput.parentNode.appendChild(suggestionContainer);
suggestionContainer.addEventListener('click',
    (e)=>{
    if (e.target.classList.contains('suggestion-tag')){
    const e.target.getAttribute('data-suggestion');
smartSearchInput.value=suggestion;
searchCommands(suggestion);

}

}
);
smartSearchInput.addEventListener('focus',
    ()=>{
    if (smartSearchInput.value.length===0){
    suggestionContainer.style.display='block';

}

}
);
smartSearchInput.addEventListener('input',
    ()=>{
    if (smartSearchInput.value.length > 0){
    suggestionContainer.style.display='none';

}
else{
    suggestionContainer.style.display='block';

}

}
);

}
addSearchSuggestions();
searchHistoryManager.display();
initializeTemplateCopy();
initializeFeatureCombiner();
if (typeof initializeProjectToolsSimple !=='undefined'){
    initializeProjectToolsSimple();

}
else{
    
}

}
function initializeGlossary(){
    const [{
    term: "Container width",
    category: "版面與視覺",
    description: "容器寬度，用於控制內容區域的最大寬度，確保在不同螢幕尺寸下的可讀性。",
    example: "設定 max-width: 1200px 確保內容在大型螢幕上不會過寬。"
}
,
    {
    term: "Grid system",
    category: "版面與視覺",
    description: "網格系統，提供結構化的佈局框架，讓設計師和開發者能夠快速建立一致的版面。",
    example: "使用 CSS Grid 或 Flexbox 建立響應式的 12 欄網格系統。"
}
,
    {
    term: "Mobile-first",
    category: "響應式與互動",
    description: "行動裝置優先的設計方法，先設計行動版本，再逐步增強為桌面版本。",
    example: "先設計 320px 寬度的版面，再使用 min-width 媒體查詢擴展到更大螢幕。"
}
,
    {
    term: "Breakpoint",
    category: "響應式與互動",
    description: "響應式斷點，定義不同螢幕尺寸的切換點，用於調整佈局和樣式。",
    example: "設定 768px、1024px、1440px 作為主要的響應式斷點。"
}
,
    {
    term: "Modal",
    category: "響應式與互動",
    description: "彈出式視窗，用於顯示重要資訊或表單，通常會遮蔽背景內容。",
    example: "當使用者點擊『訂閱』按鈕時，顯示包含電子郵件輸入欄位的 Modal。"
}
,
    {
    term: "Tooltip",
    category: "響應式與互動",
    description: "提示框，當滑鼠懸停在元素上時顯示的簡短說明文字。",
    example: "在圖示旁加上 Tooltip，說明該圖示的功能或用途。"
}
,
    {
    term: "Accordion",
    category: "響應式與互動",
    description: "手風琴選單，可收合的內容區塊，常用於 FAQ 或分類內容展示。",
    example: "將常見問題列表設計成 Accordion，點擊標題即可展開或收合內容。"
}
,
    {
    term: "CSS Transitions",
    category: "響應式與互動",
    description: "CSS 過渡效果，讓元素屬性變化時產生平滑的動畫效果。",
    example: "使用 transition: background-color 0.3s ease 讓按鈕懸停時平滑變色。"
}
,
    {
    term: "CSS Keyframes",
    category: "響應式與互動",
    description: "CSS 關鍵影格動畫，用於創建複雜的多步驟動畫效果。",
    example: "使用 @keyframes 為網站 Logo 製作旋轉動畫效果。"
}
,
    {
    term: "API Call",
    category: "網站功能與開發",
    description: "API 呼叫，向伺服器發送請求以取得或發送資料的過程。",
    example: "在頁面載入時執行 API Call 從後端資料庫取得商品清單。"
}
,
    {
    term: "Async/Await",
    category: "網站功能與開發",
    description: "非同步處理語法，讓非同步程式碼讀起來更像同步執行，避免回呼地獄。",
    example: "使用 async/await 處理資料擷取，確保資料載入完成後才渲染頁面。"
}
,
    {
    term: "State Management",
    category: "網站功能與開發",
    description: "狀態管理，管理應用程式中共享資料的方法和工具。",
    example: "使用 Redux 或 Vuex 管理全域的用戶登入狀態和購物車資料。"
}
,
    {
    term: "Caching",
    category: "效能與數據",
    description: "快取機制，將常用資料暫存在記憶體中，提高存取速度。",
    example: "實作瀏覽器快取和 CDN 快取，減少重複的資料請求。"
}
,
    {
    term: "CDN",
    category: "效能與數據",
    description: "內容傳遞網路，透過全球分散的伺服器節點提供更快的內容存取。",
    example: "使用 Cloudflare 或 AWS CloudFront 加速靜態資源的載入速度。"
}
,
    {
    term: "User Journey",
    category: "效能與數據",
    description: "使用者旅程，描述使用者從初次接觸到完成目標的完整路徑。",
    example: "分析從首頁瀏覽到完成購買的完整使用者旅程，找出優化點。"
}
,
    {
    term: "A/B Testing",
    category: "效能與數據",
    description: "A/B 測試，同時展示兩個版本並比較效果，找出最佳方案。",
    example: "對首頁的 CTA 按鈕進行 A/B 測試，比較紅色和藍色按鈕的點擊率。"
}
,
    {
    term: "Heatmap",
    category: "效能與數據",
    description: "熱力圖，以顏色深淺表示使用者點擊或關注的區域。",
    example: "使用熱力圖分析首頁的使用者行為，優化按鈕位置和內容佈局。"
}
,
    {
    term: "Headless CMS",
    category: "新技術與趨勢",
    description: "無頭內容管理系統，只提供內容管理後台和 API，不包含前端介面。",
    example: "使用 Strapi 或 Contentful 讓後端人員管理內容，前端使用 React 呈現。"
}
,
    {
    term: "GraphQL",
    category: "新技術與趨勢",
    description: "API 查詢語言，讓客戶端精確指定需要的資料，避免過度或不足的傳輸。",
    example: "使用 GraphQL 取代 REST API，讓前端能更有效率地獲取所需資料。"
}
,
    {
    term: "Serverless Architecture",
    category: "新技術與趨勢",
    description: "無伺服器架構，將功能拆分成獨立的微服務，根據需求彈性擴展。",
    example: "將圖片處理功能部署在 AWS Lambda 上，應對高流量時的負載。"
}
,
    {
    term: "PWA",
    category: "新技術與趨勢",
    description: "漸進式網頁應用程式，結合網頁和原生應用的優點。",
    example: "將網站升級為 PWA，支援離線瀏覽和推送通知功能。"
}
,
    {
    term: "Version Control",
    category: "專案管理與維護",
    description: "版本控制，追蹤和管理程式碼變更的系統。",
    example: "使用 Git 管理程式碼版本，支援多人協作和程式碼回滾。"
}
,
    {
    term: "CI/CD",
    category: "專案管理與維護",
    description: "持續整合/持續部署，自動化測試和部署流程。",
    example: "設定 GitHub Actions 自動執行測試並部署到生產環境。"
}
,
    {
    term: "CSS Variables",
    category: "版面與視覺",
    description: "CSS 自定義屬性，允許在樣式表中定義可重用的值，支援主題切換和動態樣式。",
    example: "使用 :root{
    --primary-color: #667eea;

}
定義主題色彩變數。"
}
,
    {
    term: "Focus-visible",
    category: "響應式與互動",
    description: "CSS 偽類選擇器，只在鍵盤導航時顯示焦點樣式，提升無障礙體驗。",
    example: "使用 :focus-visible 替代 :focus，避免滑鼠點擊時顯示焦點框。"
}
,
    {
    term: "Debounce",
    category: "效能與數據",
    description: "防抖動技術，延遲執行函數直到停止觸發事件一段時間後，優化效能。",
    example: "搜尋輸入框使用 debounce 避免每次輸入都觸發 API 請求。"
}
,
    {
    term: "RequestAnimationFrame",
    category: "效能與數據",
    description: "瀏覽器 API，在下次重繪前執行動畫，提供更流暢的動畫效果。",
    example: "使用 requestAnimationFrame 優化滾動動畫的效能。"
}
,
    {
    term: "Intersection Observer",
    category: "效能與數據",
    description: "瀏覽器 API，非同步監控元素是否進入視窗，用於實現滾動動畫和懶載入。",
    example: "使用 Intersection Observer 實現元素進入視窗時的淡入動畫。"
}
,
    {
    term: "Open Graph",
    category: "效能與數據",
    description: "Facebook 開發的 meta 標籤協議，控制社群媒體分享時的預覽內容。",
    example: "設定 og:title 和 og:description 讓分享連結顯示正確的標題和描述。"
}
,
    {
    term: "Twitter Card",
    category: "效能與數據",
    description: "Twitter 的 meta 標籤協議，優化推文中的連結預覽顯示效果。",
    example: "使用 twitter:card 和 twitter:image 讓推文顯示豐富的預覽卡片。"
}
,
    {
    term: "Local Storage",
    category: "網站功能與開發",
    description: "瀏覽器本地儲存 API，在客戶端持久化儲存資料，支援主題設定和用戶偏好。",
    example: "使用 localStorage.setItem('theme',
    'dark')儲存用戶的主題選擇。"
}
,
    {
    term: "Back to Top",
    category: "響應式與互動",
    description: "回到頂部按鈕，長頁面時提供快速導航到頁面頂部的功能。",
    example: "當滾動超過 300px 時顯示回到頂部按鈕，點擊平滑滾動到頂部。"
}
,
    {
    term: "Loading Spinner",
    category: "響應式與互動",
    description: "載入動畫，在資料載入過程中顯示的視覺回饋，提升用戶體驗。",
    example: "搜尋時顯示旋轉的載入動畫，讓用戶知道系統正在處理請求。"
}
,
    {
    term: "Search Highlight",
    category: "響應式與互動",
    description: "搜尋結果高亮，將搜尋關鍵字在結果中以不同樣式標示，提升可讀性。",
    example: "搜尋 'CSS' 時，結果中的 'CSS' 文字會以黃色背景高亮顯示。"
}
,
    {
    term: "Theme Toggle",
    category: "響應式與互動",
    description: "主題切換功能，允許用戶在明暗主題之間切換，提供個人化體驗。",
    example: "點擊月亮圖示切換到暗色主題，太陽圖示切換回明亮主題。"
}
,
    {
    term: "Batch Processing",
    category: "效能與數據",
    description: "批次處理技術，將大量操作分成小批次執行，避免阻塞主線程。",
    example: "動畫元素分批處理，每次處理 10 個元素，避免一次性處理造成卡頓。"
}
,
    {
    term: "Media Query",
    category: "響應式與互動",
    description: "CSS 媒體查詢，根據設備特性（螢幕尺寸、方向等）應用不同樣式。",
    example: "@media(max-width: 768px){
    .container{
    padding: 0 15px;

}

}
"
}
,
    {
    term: "Accessibility(a11y)",
    category: "響應式與互動",
    description: "無障礙設計，確保網站能被所有用戶（包括殘障人士）正常使用。",
    example: "使用 aria-label、role 屬性和鍵盤導航支援螢幕閱讀器用戶。"
}
,
    {
    term: "CSS Custom Properties",
    category: "版面與視覺",
    description: "CSS 自定義屬性的另一種稱呼，提供動態樣式變更的能力。",
    example: "定義 --primary-color 變數，可在 JavaScript 中動態修改主題色彩。"
}
,
    {
    term: "Smooth Scrolling",
    category: "響應式與互動",
    description: "平滑滾動效果，讓頁面滾動更加流暢自然，提升用戶體驗。",
    example: "使用 scroll-behavior: smooth 或 window.scrollTo({
    behavior: 'smooth'
}
)實現。"
}
,
    {
    term: "Performance Optimization",
    category: "效能與數據",
    description: "效能優化，通過各種技術手段提升網站的載入速度和執行效率。",
    example: "使用 debounce、requestAnimationFrame、批次處理等技術優化動畫效能。"
}
,
    {
    term: "Responsive Breakpoints",
    category: "響應式與互動",
    description: "響應式斷點，定義不同螢幕尺寸的切換點，確保網站在各種設備上正常顯示。",
    example: "設定 768px、1024px、1440px 作為手機、平板、桌面的主要斷點。"
}
,
    {
    term: "Floating Action Button",
    category: "響應式與互動",
    description: "懸浮動作按鈕，通常固定在螢幕角落的圓形按鈕，用於快速存取主要功能。",
    example: "在右下角放置 FAB 按鈕，點擊後回到頁面頂部或開啟主要選單。"
}
,
    {
    term: "FAB(Floating Action Button)",
    category: "響應式與互動",
    description: "懸浮動作按鈕的簡稱，Material Design 中的核心元件，提供快速存取主要操作。",
    example: "使用 position: fixed 和 z-index 讓 FAB 始終顯示在螢幕上。"
}
,
    {
    term: "Speed Dial",
    category: "響應式與互動",
    description: "快速撥號按鈕，點擊主按鈕後展開多個子按鈕的互動模式。",
    example: "主 FAB 點擊後以扇形或直線方式展開多個功能按鈕。"
}
,
    {
    term: "Backdrop",
    category: "響應式與互動",
    description: "背景遮罩，用於模態框或展開式選單的背景覆蓋層。",
    example: "FAB 展開時顯示半透明背景遮罩，點擊後關閉選單。"
}
,
    {
    term: "Material Design",
    category: "版面與視覺",
    description: "Google 設計語言，提供統一的視覺設計規範和互動模式。",
    example: "FAB 按鈕遵循 Material Design 的圓形設計和陰影效果規範。"
}
];
const document.getElementById('searchInput');
const document.getElementById('glossaryGrid');
function renderGlossary(terms=glossaryData){
    glossaryGrid.innerHTML=terms.map(term=> ` <div class="glossary-item"> <div class="glossary-term">${
    term.term
}
</div> <div class="glossary-category">${
    term.category
}
</div> <div class="glossary-description">${
    term.description
}
</div> <div class="glossary-example"> <strong>範例：</strong>${
    term.example
}
</div> </div> `).join('');

}
function searchTerms(query){
    if (!query.trim()){
    renderGlossary();
return;

}
const glossaryData.filter(term=> term.term.toLowerCase().includes(query.toLowerCase())|| term.category.toLowerCase().includes(query.toLowerCase())|| term.description.toLowerCase().includes(query.toLowerCase()));
const filteredTerms.map(term=>({
    ...term,
    term: highlightText(term.term,
    query),
    category: highlightText(term.category,
    query),
    description: highlightText(term.description,
    query)
}
));
renderGlossary(highlightedTerms);

}
function highlightText(text,
    query){
    if (!query.trim())
    return text;
const new RegExp(`(${
    query
}
)`,
    'gi');
return text.replace(regex,
    '<span class="highlight">$1</span>');

}
searchInput.addEventListener('input',
    function(){
    searchTerms(this.value);

}
);
renderGlossary();

}
window.addEventListener('error',
    function(e){
    
}
);
window.addEventListener('unhandledrejection',
    function(e){
    
}
);
if (window.performance && window.performance.mark){
    window.performance.mark('website-loaded');

}
function initializeTemplateCopy(){
    const {
    '2025-design-demo': `請幫我建立一個2025年現代化設計示範網站，採用最新設計趨勢和視覺效果： **🎯 專案需求：** - 目標用戶：前端開發者、設計師、學習者 - 核心功能：設計示範、技術展示、模板參考 - 設計風格：現代化、簡潔、使用漸層和玻璃質感 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 大間距設計：增加所有元素間的呼吸空間 - 流動式佈局：充分利用手機螢幕寬度 - 玻璃擬態（Glassmorphism）：半透明毛玻璃效果 - 漸層背景：多色彩漸變和動態效果 - 響應式導航：手機/桌機自適應 - 卡片懸停效果：3D變換、陰影動畫 - Masonry流式排版：手機專用瀑布流佈局 - Skeleton Loading：載入動畫和shimmer效果 - 深色模式支援：自動適配系統主題偏好 **📱 手機版優化：** - 更大的觸控目標：按鈕和互動元素尺寸優化 - 清晰的視覺層次：通過字體大小和間距引導視線 - 舒適的閱讀體驗：優化的行高和字體大小 - 現代化間距：符合2025年設計趨勢的大間距 **🎨 視覺設計要求：** - 字體：使用 Inter 和 Noto Sans TC 字體 - 字體大小：標題 2-3rem，內容 1.1rem，行高 1.7 - 字體權重：標題 700-800，內容 400-600 - 間距：使用統一的間距系統（24px,
    32px等） - 圓角：卡片 20px，按鈕 12px，圖片 16px - 陰影：多層次陰影營造深度感 - 動效：流暢的過渡動畫和微交互 **🔧 技術實作要求：** - 使用CSS Grid和Flexbox進行佈局 - 實現CSS變數系統管理顏色和間距 - 使用CSS動畫和過渡效果 - 實現響應式圖片和媒體查詢 - 使用backdrop-filter實現玻璃質感 - 實現深色模式自動切換 - 優化載入性能和用戶體驗 **📋 頁面結構：** 1. 響應式導航列（玻璃質感） 2. Hero區塊（全螢幕背景、漸層遮罩） 3. 特色卡片展示區 4. 圖片展示區（網格佈局） 5. Masonry流式排版區 6. Glassmorphism效果區 7. Skeleton Loading示範區 請提供完整的程式碼實作和部署指南。`,
    'beauty': `請幫我建立一個完整的美業招募網站，包含以下功能： **專案需求：** - 目標用戶：美業從業者（美髮師、美甲師、美容師等）和雇主 - 核心功能：職位發布、求職搜尋、作品集展示、即時聊天、預約面試 - 設計風格：優雅、專業、視覺吸引力強，使用玫瑰金和米色配色 - 技術要求：響應式設計、行動端優先、快速載入 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（美業專用色彩、字體、組件） 3. 用戶註冊登入系統（支援社群登入） 4. 職位管理系統（美業專業分類、技能標籤、薪資篩選） 5. 作品集展示系統（圖片/影片上傳、美業分類、社群分享） 6. 即時聊天系統（作品集快速分享、預約時間選擇器） 7. 地理位置服務（Google Maps、距離計算、路線規劃） 8. 預約面試系統（日曆選擇、時段預約、提醒通知） 9. 效能優化（圖片優化、懶載入、CDN） 10. SEO優化（美業關鍵字、結構化資料、社群標籤） **美業特殊功能：** - 專業技能標籤（剪髮、染髮、美甲、彩妝、紋繡等） - 作品集分類展示（美髮作品、美甲作品、美容作品） - 證照資格展示 - 服務項目和價格資訊 - 客戶評價系統 - 社群媒體整合（Instagram、Facebook分享） 請提供完整的程式碼實作和部署指南。`,
    'real-estate': `請幫我建立一個房仲個人專業網頁，包含以下功能： **專案需求：** - 目標用戶：房仲從業人員個人品牌網站 - 核心功能：物件展示、客戶見證、專業介紹、聯絡預約 - 設計風格：專業、信賴、現代化，使用藍色和金色配色 - 技術要求：響應式設計、SEO優化、快速載入 **請依序實作：** 1. 專案架構設計（React + Next.js + 靜態生成） 2. 設計系統建立（房仲專業配色、字體、組件） 3. 首頁設計（個人介紹、專業優勢、服務區域） 4. 物件展示系統（圖片輪播、詳細資訊、地圖位置） 5. 客戶見證區塊（推薦文、成交記錄、五星評價） 6. 專業證照展示（不動產經紀人、地政士等證照） 7. 服務區域地圖（Google Maps整合、熱點標記） 8. 聯絡預約系統（表單、LINE連結、電話直撥） 9. 房市資訊區塊（最新成交、區域分析、政策動態） 10. SEO優化（房仲關鍵字、結構化資料、本地SEO） **房仲特殊功能：** - 物件搜尋篩選（價格、坪數、房型、區域） - 實價登錄整合顯示 - 房貸試算工具 - 看屋預約系統 - 客戶推薦碼系統 - 成交記錄統計 - 服務區域熱點圖 - 房市趨勢分析 **必備頁面：** - 首頁（個人介紹、熱門物件） - 物件列表（所有在售物件） - 物件詳情（單一物件詳細資訊） - 關於我（專業經歷、證照、服務理念） - 客戶見證（推薦文、成交案例） - 服務區域（地圖、熱點分析） - 聯絡我（預約看屋、諮詢表單） - 房市資訊（最新消息、政策動態） 請提供完整的程式碼實作和部署指南。`,
    'restaurant': `請幫我建立一個餐飲業網站，包含以下功能： **專案需求：** - 目標用戶：餐廳、咖啡廳、小吃店等餐飲業者 - 核心功能：菜單展示、線上訂位、外送整合、優惠活動 - 設計風格：溫馨、誘人、現代化，使用暖色調配色 - 技術要求：響應式設計、行動端優化、快速載入 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（餐飲業配色、字體、組件） 3. 首頁設計（餐廳介紹、招牌菜、環境照片） 4. 菜單展示系統（分類瀏覽、圖片展示、價格標示） 5. 線上訂位系統（日期選擇、時段預約、人數選擇） 6. 外送整合（Uber Eats、foodpanda連結、外送範圍） 7. 優惠活動區塊（促銷資訊、會員優惠、節慶活動） 8. 聯絡資訊（地址、電話、營業時間、交通方式） 9. 客戶評價展示（Google評論、社群媒體評價） 10. SEO優化（餐廳關鍵字、本地SEO、結構化資料） **餐飲業特殊功能：** - 菜單分類瀏覽（前菜、主菜、甜點、飲料） - 線上點餐系統（購物車、結帳、付款） - 訂位管理系統（預約確認、取消、修改） - 外送範圍地圖顯示 - 優惠券系統（折扣碼、滿額優惠） - 會員系統（集點、生日優惠、專屬活動） - 多語言支援（中英文菜單） - 過敏原標示 - 營養資訊顯示 - 素食選項標記 **必備頁面：** - 首頁（餐廳介紹、招牌菜、環境） - 菜單（完整菜單、價格、圖片） - 訂位（線上預約系統） - 外送（外送平台連結、範圍） - 優惠活動（促銷資訊、會員專屬） - 關於我們（餐廳故事、主廚介紹） - 聯絡我們（地址、電話、營業時間） - 客戶評價（Google評論、社群評價） **整合功能：** - Google Maps 位置顯示 - 社群媒體分享按鈕 - 線上付款系統（信用卡、行動支付） - 簡訊/Email 訂位確認 - 排隊叫號系統 - 外送追蹤功能 請提供完整的程式碼實作和部署指南。`,
    'fitness': `請幫我建立一個健身中心網站，包含以下功能： **專案需求：** - 目標用戶：健身中心、健身房、運動工作室 - 核心功能：課程預約、教練介紹、會員方案、器材展示 - 設計風格：動感、專業、激勵，使用橙色和黑色配色 - 技術要求：響應式設計、行動端優化、即時預約 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（健身業配色、字體、組件） 3. 首頁設計（健身房介紹、環境展示、熱門課程） 4. 課程預約系統（課程表、教練選擇、時段預約） 5. 教練介紹頁面（個人資料、專長、證照、評價） 6. 會員方案展示（價格方案、優惠活動、比較表） 7. 器材設備展示（器材介紹、使用說明、環境照片） 8. 會員專區（個人資料、預約記錄、體測數據） 9. 社群功能（成果分享、打卡、挑戰活動） 10. SEO優化（健身關鍵字、本地SEO、結構化資料） **健身業特殊功能：** - 課程分類（重訓、有氧、瑜珈、拳擊等） - 教練預約系統（私人課程、團體課程） - 會員等級管理（一般會員、VIP、年費會員） - 體測數據追蹤（體重、體脂、肌肉量記錄） - 營養諮詢預約 - 器材使用教學影片 - 健身挑戰活動 - 成果分享社群 - 會員專屬優惠 - 24小時營業狀態顯示 **必備頁面：** - 首頁（健身房介紹、環境、熱門課程） - 課程（課程表、預約、教練介紹） - 教練（教練團隊、專長、預約） - 會員方案（價格、優惠、比較） - 器材設備（器材介紹、環境展示） - 會員專區（個人資料、預約記錄） - 關於我們（健身房故事、理念） - 聯絡我們（地址、電話、營業時間） **整合功能：** - Google Maps 位置顯示 - 社群媒體分享（Instagram、Facebook） - 線上付款系統 - 簡訊/Email 預約確認 - 體測數據圖表顯示 - 健身APP整合 - 穿戴裝置數據同步 請提供完整的程式碼實作和部署指南。`,
    'ecommerce': `請幫我建立一個電商購物網站，包含以下功能： **專案需求：** - 目標用戶：電商賣家、品牌商、零售商 - 核心功能：商品展示、購物車、結帳付款、會員管理 - 設計風格：現代、簡潔、專業，使用藍色和白色配色 - 技術要求：響應式設計、SEO優化、安全付款 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Redis） 2. 設計系統建立（電商配色、字體、組件） 3. 首頁設計（熱門商品、優惠活動、分類導航） 4. 商品展示系統（商品列表、詳情頁、圖片輪播） 5. 購物車功能（加入購物車、數量調整、價格計算） 6. 結帳付款系統（訂單確認、付款方式、發票選擇） 7. 會員系統（註冊登入、個人資料、訂單記錄） 8. 商品管理（分類、搜尋、篩選、排序） 9. 優惠系統（折扣碼、滿額優惠、會員價） 10. SEO優化（商品關鍵字、結構化資料、sitemap） **電商特殊功能：** - 商品分類瀏覽（多層級分類、標籤篩選） - 商品搜尋（關鍵字搜尋、自動完成、搜尋建議） - 購物車持久化（本地儲存、登入同步） - 多種付款方式（信用卡、ATM、超商、貨到付款） - 發票系統（電子發票、統編、載具） - 物流整合（宅配、超商取貨、配送追蹤） - 庫存管理（現貨、預購、缺貨通知） - 優惠券系統（折扣碼、滿額優惠、會員專屬） - 商品評價系統（評分、評論、圖片上傳） - 推薦系統（相關商品、熱門商品、個人化推薦） **必備頁面：** - 首頁（熱門商品、優惠活動、分類導航） - 商品列表（分類瀏覽、搜尋結果、篩選） - 商品詳情（詳細資訊、圖片、評價、規格） - 購物車（商品清單、數量調整、優惠券） - 結帳頁面（訂單確認、付款方式、配送資訊） - 會員中心（個人資料、訂單記錄、收藏清單） - 關於我們（品牌故事、服務理念） - 聯絡我們（客服資訊、FAQ、退換貨政策） **整合功能：** - 金流整合（綠界、藍新、智付通） - 物流整合（黑貓、新竹、超商） - 發票整合（財政部電子發票） - 社群分享（Facebook、LINE、Instagram） - 客服系統（線上客服、LINE客服） - 分析工具（Google Analytics、Facebook Pixel） 請提供完整的程式碼實作和部署指南。`,
    'project-management': `請幫我建立一個專案管理工具，包含以下功能： **專案需求：** - 目標用戶：專案經理、團隊成員、自由工作者 - 核心功能：任務管理、團隊協作、進度追蹤、時間統計 - 設計風格：現代、直觀、高效，使用藍色和綠色配色 - 技術要求：響應式設計、即時同步、離線支援 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Socket.io） 2. 設計系統建立（專案管理配色、字體、組件） 3. 看板管理系統（拖拽任務、狀態更新、優先級設定） 4. 甘特圖功能（時間軸視圖、依賴關係、里程碑） 5. 團隊協作功能（即時聊天、檔案分享、評論系統） 6. 時間追蹤系統（計時器、時間記錄、工時統計） 7. 報表分析（進度圖表、工時分析、團隊效能） 8. 通知系統（任務提醒、截止日期、狀態變更） 9. 權限管理（角色設定、存取控制、資料安全） 10. 整合功能（日曆同步、郵件通知、第三方工具） **專案管理特殊功能：** - 看板視圖（待辦、進行中、已完成、已取消） - 甘特圖視圖（時間軸、依賴關係、資源分配） - 清單視圖（任務列表、篩選、排序） - 日曆視圖（時間安排、截止日期、會議） - 任務模板（重複任務、專案模板） - 子任務管理（任務分解、進度追蹤） - 標籤系統（分類標籤、優先級標籤） - 檔案附件（文件上傳、版本控制） - 時間追蹤（手動記錄、自動計時） - 團隊效能分析（工時統計、完成率） **必備頁面：** - 儀表板（專案概覽、重要任務、團隊狀態） - 專案列表（所有專案、篩選、搜尋） - 專案詳情（任務看板、甘特圖、團隊成員） - 任務詳情（任務資訊、評論、附件、時間記錄） - 團隊管理（成員邀請、角色設定、權限管理） - 報表分析（進度報表、工時統計、效能分析） - 個人設定（個人資料、通知設定、偏好設定） - 整合設定（第三方工具、API設定） **整合功能：** - 日曆同步（Google Calendar、Outlook） - 郵件通知（任務提醒、狀態更新） - 檔案儲存（Google Drive、Dropbox） - 通訊工具（Slack、Microsoft Teams） - 時間追蹤（Toggl、RescueTime） - 版本控制（GitHub、GitLab） 請提供完整的程式碼實作和部署指南。`,
    'note-taking': `請幫我建立一個個人筆記系統，包含以下功能： **專案需求：** - 目標用戶：學生、研究人員、知識工作者、創作者 - 核心功能：筆記編輯、標籤分類、搜尋功能、雲端同步 - 設計風格：簡潔、專注、易讀，使用灰色和藍色配色 - 技術要求：響應式設計、離線支援、快速搜尋 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Elasticsearch） 2. 設計系統建立（筆記系統配色、字體、組件） 3. Markdown編輯器（即時預覽、語法高亮、快捷鍵） 4. 筆記管理系統（建立、編輯、刪除、複製筆記） 5. 標籤分類系統（標籤管理、分類篩選、自動標籤） 6. 搜尋功能（全文搜尋、標籤搜尋、模糊搜尋） 7. 雲端同步（即時同步、衝突解決、版本控制） 8. 匯出功能（PDF、Word、Markdown、HTML） 9. 離線支援（本地儲存、離線編輯、同步恢復） 10. 協作功能（分享筆記、協作編輯、評論系統） **筆記系統特殊功能：** - Markdown編輯器（即時預覽、語法高亮、快捷鍵） - 富文本編輯器（格式化、插入圖片、表格） - 筆記模板（日記、會議記錄、讀書筆記、待辦清單） - 標籤系統（多標籤、標籤層級、自動標籤建議） - 筆記連結（內部連結、外部連結、反向連結） - 全文搜尋（關鍵字搜尋、正則表達式、搜尋歷史） - 筆記版本控制（版本歷史、差異比較、回滾功能） - 筆記匯出（多種格式、批次匯出、自訂樣式） - 離線模式（本地編輯、自動同步、衝突解決） - 筆記分享（公開連結、權限控制、協作編輯） **必備頁面：** - 筆記列表（所有筆記、篩選、搜尋、排序） - 筆記編輯器（Markdown編輯、即時預覽、工具列） - 標籤管理（標籤列表、標籤編輯、標籤統計） - 搜尋結果（搜尋結果、高亮顯示、搜尋建議） - 筆記詳情（筆記內容、標籤、建立時間、修改時間） - 設定頁面（個人資料、同步設定、編輯器設定） - 匯出頁面（匯出選項、格式選擇、批次匯出） - 協作頁面（分享設定、協作者管理、權限控制） **整合功能：** - 雲端儲存（Google Drive、Dropbox、OneDrive） - 版本控制（Git整合、自動提交、分支管理） - 備份還原（自動備份、手動備份、還原功能） - 同步工具（多裝置同步、即時同步、離線同步） - 匯出工具（PDF生成、Word轉換、HTML匯出） - 搜尋引擎（Elasticsearch、全文索引、搜尋優化） 請提供完整的程式碼實作和部署指南。`,
    'personal-finance': `請幫我建立一個個人理財工具，包含以下功能： **專案需求：** - 目標用戶：個人用戶、小家庭、理財初學者 - 核心功能：記帳管理、預算規劃、投資追蹤、財務報表 - 設計風格：簡潔、專業、易用，使用綠色和藍色配色 - 技術要求：響應式設計、資料安全、圖表展示 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Chart.js） 2. 設計系統建立（理財工具配色、字體、組件） 3. 記帳系統（收入支出記錄、分類管理、快速記帳） 4. 預算管理（預算設定、支出控制、預算提醒） 5. 投資追蹤（投資組合、收益計算、風險分析） 6. 財務報表（收支報表、資產負債表、現金流量表） 7. 圖表分析（圓餅圖、長條圖、趨勢圖、比較圖） 8. 目標設定（儲蓄目標、投資目標、債務清償） 9. 提醒系統（帳單提醒、預算警告、投資建議） 10. 資料安全（加密儲存、備份還原、隱私保護） **理財工具特殊功能：** - 快速記帳（一鍵記帳、語音記帳、拍照記帳） - 分類管理（收入分類、支出分類、子分類） - 預算控制（月度預算、年度預算、分類預算） - 投資組合（股票、基金、債券、加密貨幣） - 收益計算（投資報酬率、年化報酬率、風險評估） - 財務目標（短期目標、長期目標、進度追蹤） - 債務管理（債務清單、還款計畫、利息計算） - 稅務管理（收入申報、扣除項目、稅務提醒） - 保險管理（保單追蹤、保費提醒、理賠記錄） - 財務分析（收支分析、投資分析、風險分析） **必備頁面：** - 儀表板（財務概覽、重要指標、快速記帳） - 記帳頁面（收入記錄、支出記錄、轉帳記錄） - 預算管理（預算設定、預算追蹤、預算分析） - 投資追蹤（投資組合、收益分析、風險評估） - 財務報表（收支報表、資產負債、現金流量） - 目標設定（儲蓄目標、投資目標、債務清償） - 設定頁面（個人資料、分類設定、提醒設定） - 報表分析（圖表分析、趨勢分析、比較分析） **整合功能：** - 銀行整合（帳戶同步、交易匯入、餘額查詢） - 投資平台（券商API、基金平台、加密貨幣） - 稅務系統（國稅局API、稅務計算、申報提醒） - 保險公司（保單查詢、理賠申請、保費繳納） - 信用卡（帳單匯入、消費分析、優惠提醒） - 記帳APP（資料匯入、格式轉換、同步更新） 請提供完整的程式碼實作和部署指南。`,
    'online-learning': `請幫我建立一個線上學習平台，包含以下功能： **專案需求：** - 目標用戶：教育機構、培訓公司、個人講師、學生 - 核心功能：課程管理、學習進度、測驗系統、證書頒發 - 設計風格：專業、激勵、易用，使用藍色和橙色配色 - 技術要求：響應式設計、影片播放、即時互動 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Redis） 2. 設計系統建立（學習平台配色、字體、組件） 3. 課程管理系統（課程建立、章節管理、內容上傳） 4. 影片播放器（自適應播放、字幕支援、播放速度） 5. 學習進度追蹤（完成狀態、學習時間、進度條） 6. 測驗系統（選擇題、填空題、問答題、自動評分） 7. 證書系統（證書生成、下載、驗證、分享） 8. 討論區（課程討論、問答、同儕互動） 9. 通知系統（課程提醒、作業通知、成績發布） 10. 分析報表（學習數據、課程統計、學員分析） **學習平台特殊功能：** - 課程建立（影片上傳、文件上傳、測驗建立） - 章節管理（章節排序、解鎖條件、學習路徑） - 影片播放（自適應品質、字幕、筆記功能） - 學習進度（完成百分比、學習時間、最後學習） - 測驗系統（多種題型、隨機出題、時間限制） - 作業系統（作業提交、評分、回饋） - 證書管理（證書模板、自動生成、數位簽章） - 討論區（主題討論、回覆系統、點讚功能） - 筆記功能（影片筆記、個人筆記、分享筆記） - 學習路徑（推薦課程、先修課程、學習順序） **必備頁面：** - 首頁（熱門課程、推薦課程、最新課程） - 課程列表（分類瀏覽、搜尋、篩選、排序） - 課程詳情（課程介紹、章節列表、講師資訊） - 學習頁面（影片播放、章節導航、筆記功能） - 測驗頁面（測驗題目、計時器、提交功能） - 證書頁面（證書展示、下載、分享） - 討論區（主題列表、討論內容、回覆功能） - 個人中心（學習記錄、證書、設定） **整合功能：** - 影片平台（YouTube、Vimeo、自建CDN） - 支付系統（課程購買、訂閱制、優惠券） - 郵件系統（課程通知、作業提醒、成績通知） - 社群媒體（課程分享、學習成果分享） - 分析工具（Google Analytics、學習行為分析） - 認證系統（第三方認證、學分認證、證書驗證） 請提供完整的程式碼實作和部署指南。`,
    'medical-clinic': `請幫我建立一個醫療診所網站，包含以下功能： **專案需求：** - 目標用戶：診所、醫院、醫療機構、患者 - 核心功能：線上掛號、醫師介紹、服務項目、健康資訊 - 設計風格：專業、信賴、溫馨，使用藍色和白色配色 - 技術要求：響應式設計、資料安全、即時更新 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Redis） 2. 設計系統建立（醫療配色、字體、組件） 3. 線上掛號系統（醫師選擇、時段預約、掛號確認） 4. 醫師管理（醫師資料、專長介紹、排班表） 5. 服務項目（科別介紹、檢查項目、治療項目） 6. 健康資訊（衛教文章、健康檢查、預防保健） 7. 患者管理（就診記錄、病歷查詢、用藥提醒） 8. 通知系統（掛號確認、就診提醒、檢查結果） 9. 資料安全（加密傳輸、隱私保護、合規性） 10. 整合功能（健保卡、電子病歷、檢驗報告） **醫療診所特殊功能：** - 線上掛號（醫師選擇、時段預約、掛號取消） - 醫師排班（班表顯示、休假管理、緊急調班） - 科別介紹（各科特色、醫師陣容、設備介紹） - 服務項目（門診服務、檢查項目、治療項目） - 健康資訊（衛教文章、健康檢查、預防保健） - 就診記錄（病歷查詢、處方箋、檢驗報告） - 用藥提醒（服藥時間、劑量提醒、副作用） - 預約管理（預約查詢、修改預約、取消預約） - 候診查詢（即時候診、叫號顯示、等待時間） - 費用查詢（掛號費、檢查費、健保給付） **必備頁面：** - 首頁（診所介紹、服務特色、最新消息） - 線上掛號（醫師選擇、時段預約、掛號確認） - 醫師介紹（醫師資料、專長、學經歷） - 服務項目（科別介紹、檢查項目、治療項目） - 健康資訊（衛教文章、健康檢查、預防保健） - 就診須知（掛號流程、就診流程、注意事項） - 聯絡我們（地址、電話、交通資訊、停車資訊） - 個人中心（就診記錄、預約查詢、資料修改） **整合功能：** - 健保系統（健保卡驗證、給付查詢、就醫記錄） - 電子病歷（病歷查詢、處方箋、檢驗報告） - 檢驗中心（檢驗預約、報告查詢、異常提醒） - 藥局系統（處方箋、用藥查詢、藥物交互作用） - 急診系統（急診掛號、急診狀態、急診流程） - 預約系統（電話預約、網路預約、APP預約） 請提供完整的程式碼實作和部署指南。`,
    'community-management': `請幫我建立一個社區管理系統，包含以下功能： **專案需求：** - 目標用戶：社區管委會、住戶、物業管理公司 - 核心功能：公告發布、維修申請、費用繳納、鄰里交流 - 設計風格：親切、實用、易用，使用綠色和藍色配色 - 技術要求：響應式設計、即時通知、資料安全 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Socket.io） 2. 設計系統建立（社區配色、字體、組件） 3. 公告系統（公告發布、分類管理、重要公告置頂） 4. 維修申請（線上申請、進度追蹤、維修記錄） 5. 費用管理（管理費繳納、費用查詢、繳費記錄） 6. 鄰里交流（討論區、活動發布、二手交易） 7. 住戶管理（住戶資料、權限管理、身份驗證） 8. 通知系統（公告通知、維修通知、費用提醒） 9. 報表統計（費用統計、維修統計、住戶分析） 10. 整合功能（銀行轉帳、簡訊通知、郵件通知） **社區管理特殊功能：** - 公告管理（公告分類、重要公告、緊急通知） - 維修申請（線上申請、照片上傳、進度追蹤） - 費用管理（管理費、水電費、停車費、其他費用） - 鄰里交流（討論區、活動發布、二手交易、失物招領） - 住戶認證（身份驗證、住戶資料、權限管理） - 投票系統（社區決議、投票統計、結果公布） - 訪客管理（訪客登記、訪客通知、訪客記錄） - 停車管理（停車位分配、停車費、違規記錄） - 設備管理（電梯、門禁、監控、消防設備） - 活動管理（社區活動、報名系統、活動記錄） **必備頁面：** - 首頁（最新公告、重要通知、快速功能） - 公告中心（所有公告、分類瀏覽、搜尋功能） - 維修申請（申請表單、進度查詢、維修記錄） - 費用繳納（費用查詢、線上繳費、繳費記錄） - 鄰里交流（討論區、活動發布、二手交易） - 住戶中心（個人資料、住戶資訊、權限設定） - 投票中心（投票列表、投票結果、投票統計） - 聯絡我們（管委會聯絡、物業聯絡、緊急聯絡） **整合功能：** - 銀行系統（轉帳繳費、自動扣款、繳費確認） - 簡訊系統（通知發送、驗證碼、緊急通知） - 郵件系統（公告通知、費用通知、活動通知） - 門禁系統（門禁卡、訪客登記、進出記錄） - 監控系統（監控畫面、錄影查詢、異常警報） - 消防系統（消防警報、設備檢查、演習記錄） 請提供完整的程式碼實作和部署指南。`,
    'goal-tracking': `請幫我建立一個目標追蹤工具，包含以下功能： **專案需求：** - 目標用戶：個人用戶、學生、職場人士、健身愛好者 - 核心功能：目標設定、進度追蹤、習慣養成、成就系統 - 設計風格：激勵、清晰、動感，使用橙色和紫色配色 - 技術要求：響應式設計、資料視覺化、提醒功能 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Chart.js） 2. 設計系統建立（目標追蹤配色、字體、組件） 3. 目標設定系統（目標建立、分類管理、優先級設定） 4. 進度追蹤（進度記錄、里程碑設定、完成度計算） 5. 習慣養成（習慣建立、打卡系統、連續天數統計） 6. 成就系統（成就徽章、等級系統、排行榜） 7. 資料視覺化（進度圖表、趨勢分析、統計報表） 8. 提醒系統（目標提醒、習慣提醒、里程碑提醒） 9. 社交功能（目標分享、好友互動、挑戰系統） 10. 激勵系統（勵志語句、進度慶祝、成就分享） **目標追蹤特殊功能：** - 目標分類（健康、學習、工作、財務、個人成長） - 目標類型（一次性目標、重複目標、習慣目標） - 進度記錄（數值記錄、文字記錄、照片記錄） - 里程碑設定（階段性目標、完成獎勵、慶祝方式） - 習慣養成（每日打卡、連續天數、習慣強度） - 成就徽章（完成徽章、里程碑徽章、特殊成就） - 等級系統（經驗值、等級提升、權限解鎖） - 挑戰系統（個人挑戰、好友挑戰、社群挑戰） - 資料分析（進度分析、趨勢分析、效能分析） - 激勵內容（勵志語句、成功故事、專家建議） **必備頁面：** - 儀表板（目標概覽、進度摘要、今日任務） - 目標列表（所有目標、分類篩選、狀態篩選） - 目標詳情（目標資訊、進度記錄、里程碑） - 習慣追蹤（習慣列表、打卡記錄、統計分析） - 成就中心（成就徽章、等級資訊、排行榜） - 統計分析（進度圖表、趨勢分析、效能報表） - 社交功能（好友列表、挑戰系統、分享功能） - 設定頁面（個人資料、提醒設定、隱私設定） **整合功能：** - 日曆整合（Google Calendar、Outlook、Apple Calendar） - 健康APP（Apple Health、Google Fit、Fitbit） - 學習平台（Coursera、Udemy、Khan Academy） - 健身APP（MyFitnessPal、Strava、Nike Training） - 社群媒體（Facebook、Instagram、Twitter分享） - 提醒工具（手機通知、郵件提醒、簡訊提醒） 請提供完整的程式碼實作和部署指南。`,
    'event-management': `請幫我建立一個活動管理平台，包含以下功能： **專案需求：** - 目標用戶：活動主辦方、企業、學校、社團組織 - 核心功能：活動發布、報名管理、票務系統、活動統計 - 設計風格：活潑、專業、吸引人，使用紅色和黃色配色 - 技術要求：響應式設計、即時更新、支付整合 **請依序實作：** 1. 專案架構設計（React + Node.js + MongoDB + Stripe） 2. 設計系統建立（活動平台配色、字體、組件） 3. 活動發布系統（活動建立、資訊編輯、圖片上傳） 4. 報名管理（線上報名、報名表單、報名審核） 5. 票務系統（票種設定、票價管理、座位選擇） 6. 支付系統（線上付款、發票開立、退款處理） 7. 活動統計（報名人數、收入統計、參與分析） 8. 通知系統（報名確認、活動提醒、變更通知） 9. 社群功能（活動分享、評論系統、評分系統） 10. 整合功能（日曆同步、地圖整合、社群分享） **活動管理特殊功能：** - 活動分類（會議、研討會、展覽、演出、體育、教育） - 活動狀態（草稿、發布、進行中、已結束、已取消） - 報名表單（自訂欄位、必填項目、驗證規則） - 票種管理（免費票、付費票、早鳥票、團體票） - 座位選擇（座位圖、座位選擇、座位預留） - 報名審核（自動審核、人工審核、候補名單） - 活動提醒（報名確認、活動前提醒、變更通知） - 活動統計（報名人數、收入統計、參與分析） - 活動分享（社群分享、邀請連結、QR Code） - 活動評價（參與者評價、活動評分、回饋收集） **必備頁面：** - 首頁（熱門活動、最新活動、分類瀏覽） - 活動列表（所有活動、篩選搜尋、排序功能） - 活動詳情（活動資訊、報名按鈕、分享功能） - 報名頁面（報名表單、票種選擇、付款頁面） - 我的活動（已報名活動、主辦活動、歷史記錄） - 活動管理（活動建立、編輯、統計、設定） - 票務管理（票種設定、座位管理、票券列印） - 統計報表（報名統計、收入報表、參與分析） **整合功能：** - 支付系統（信用卡、行動支付、銀行轉帳） - 發票系統（電子發票、統編、載具） - 日曆整合（Google Calendar、Outlook、Apple Calendar） - 地圖服務（Google Maps、活動地點、交通資訊） - 社群媒體（Facebook、Instagram、LINE分享） - 郵件系統（報名確認、活動提醒、變更通知） 請提供完整的程式碼實作和部署指南。`,
    'personal-brand': `請幫我建立一個個人形象網站，包含以下功能： **專案需求：** - 目標用戶：自由工作者、設計師、攝影師、顧問、專業人士 - 核心功能：個人簡介、作品集展示、技能展示、聯絡方式、部落格 - 設計風格：專業、現代、個人化，使用個人品牌色彩 - 技術要求：響應式設計、SEO優化、快速載入 **請依序實作：** 1. 專案架構設計（React + Next.js + Styled Components + Contentful） 2. 設計系統建立（個人品牌配色、字體、組件庫） 3. 首頁設計（個人簡介、核心價值、CTA按鈕） 4. 作品集展示（作品分類、圖片展示、詳細描述） 5. 技能展示（技術技能、軟技能、證照資格） 6. 關於我頁面（個人故事、專業經歷、成就展示） 7. 部落格系統（文章發布、分類標籤、搜尋功能） 8. 聯絡頁面（聯絡表單、社群媒體、地圖位置） 9. 履歷下載（PDF履歷、線上履歷、多語言版本） 10. SEO優化（Meta標籤、結構化資料、網站地圖） **個人品牌特殊功能：** - 個人故事時間軸 - 技能雷達圖 - 作品集燈箱效果 - 客戶推薦輪播 - 社群媒體整合 - 多語言支援 - 深色/淺色主題切換 - 個人化動畫效果 **整合服務：** - 郵件服務（聯絡表單、訂閱功能） - 社群媒體（Instagram、LinkedIn、GitHub） - 分析工具（Google Analytics、個人化分析） - 內容管理（Contentful、Strapi、自建CMS） 請提供完整的程式碼實作和部署指南。`
}
;
const {
    '2025-design-demo-html': `請幫我建立一個2025年現代化設計示範網站（HTML方案），採用最新設計趨勢和視覺效果： **🎯 專案需求：** - 目標用戶：前端開發者、設計師、學習者 - 核心功能：設計示範、技術展示、模板參考 - 設計風格：現代化、簡潔、使用漸層和玻璃質感 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 大間距設計：增加所有元素間的呼吸空間 - 流動式佈局：充分利用手機螢幕寬度 - 玻璃擬態（Glassmorphism）：半透明毛玻璃效果 - 漸層背景：多色彩漸變和動態效果 - 響應式導航：手機/桌機自適應 - 卡片懸停效果：3D變換、陰影動畫 - Masonry流式排版：手機專用瀑布流佈局 - Skeleton Loading：載入動畫和shimmer效果 - 深色模式支援：自動適配系統主題偏好 **📱 手機版優化：** - 更大的觸控目標：按鈕和互動元素尺寸優化 - 清晰的視覺層次：通過字體大小和間距引導視線 - 舒適的閱讀體驗：優化的行高和字體大小 - 現代化間距：符合2025年設計趨勢的大間距 **🎨 視覺設計要求：** - 字體：使用 Inter 和 Noto Sans TC 字體 - 字體大小：標題 2-3rem，內容 1.1rem，行高 1.7 - 字體權重：標題 700-800，內容 400-600 - 間距：使用統一的間距系統（24px,
    32px等） - 圓角：卡片 20px，按鈕 12px，圖片 16px - 陰影：多層次陰影營造深度感 - 動效：流暢的過渡動畫和微交互 **🔧 技術實作要求：** - 使用CSS Grid和Flexbox進行佈局 - 實現CSS變數系統管理顏色和間距 - 使用CSS動畫和過渡效果 - 實現響應式圖片和媒體查詢 - 使用backdrop-filter實現玻璃質感 - 實現深色模式自動切換 - 優化載入性能和用戶體驗 **📋 頁面結構：** 1. 響應式導航列（玻璃質感） 2. Hero區塊（全螢幕背景、漸層遮罩） 3. 特色卡片展示區 4. 圖片展示區（網格佈局） 5. Masonry流式排版區 6. Glassmorphism效果區 7. Skeleton Loading示範區 請提供完整的程式碼實作和部署指南。`,
    'beauty-html': `請幫我建立一個2025年現代化美業基本展示型網站（HTML方案），採用最新設計趨勢和時尚視覺效果： **🎯 專案需求：** - 目標用戶：美髮師、美甲師、美容師、美業從業者和潛在客戶 - 核心功能：工作室介紹、服務展示、環境照片、聯絡資訊 - 設計風格：時尚優雅、專業精緻、使用玫瑰金和米色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 時尚優雅風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調舒適的用戶體驗 - AI輔助作品展示，動態畫廊和互動效果 - 包容性設計，考慮不同年齡和審美需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、關於我們、服務項目、環境展示、聯絡我們） 2. **時尚CSS樣式**（優雅色彩、專業字體、精美卡片設計、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（工作室照片、名稱、理念、CTA按鈕） 5. **關於我們區塊**（理念、特色、專業團隊、成就展示） 6. **服務展示區塊**（美髮、美甲、美容、化妝等服務項目） 7. **環境照片展示**（工作室環境、設備、氛圍照片、燈箱效果） 8. **聯絡資訊區塊**（地址、電話、營業時間、地圖位置、表單） **🎨 視覺設計要求：** - 使用玫瑰金背景 + 米色點綴（優雅時尚配色） - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Playfair Display） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 圖片燈箱展示 - 服務項目篩選 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 美業特色：** - 動態作品畫廊 - 服務價格展示 - 客戶評價輪播 - 營業時間顯示 - 地理位置地圖 - 預約系統整合 **💰 服務類型參考：** - 美髮服務：NT$800-3,
    000 - 美甲服務：NT$500-2,
    000 - 美容服務：NT$1,
    000-5,
    000 - 整體造型：NT$2,
    000-8,
    000 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'beauty-rental-html': `請幫我建立一個2025年現代化美業租賃預約型網站（HTML方案），採用最新設計趨勢和租賃服務體驗優化： **🎯 專案需求：** - 目標用戶：美業從業者、工作室業主、空間租賃需求者 - 核心功能：租賃方案展示、線上預約、收費標準、空間管理 - 設計風格：現代專業、信任感、使用藍色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調便利和信任感 - AI輔助租賃服務，智能推薦和預約管理 - 包容性設計，考慮不同租賃需求和預算 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、租賃方案、預約系統、收費標準、聯絡） 2. **專業CSS樣式**（現代設計、清晰收費表格、預約表單、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（租賃概覽、熱門方案、快速預約、CTA按鈕） 5. **租賃方案展示區塊**（時租、日租、月租方案比較、特色說明） 6. **收費標準表格區塊**（美甲桌位、美髮床位、化妝台位價格） 7. **線上預約系統區塊**（日期選擇、時段預約、空間類型選擇） 8. **空間展示區塊**（工作空間照片、設備介紹、環境氛圍） **🎨 視覺設計要求：** - 使用藍色背景 + 白色點綴（現代專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 線上預約系統 - 價格計算器 - 表單驗證 - 預約管理 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 租賃服務特色：** - 智能預約系統 - 即時可用性查詢 - 價格透明化 - 空間設備展示 - 預約確認通知 - 客戶評價系統 **💰 收費模式參考：** - 時租：美甲桌位 NT$150-200/小時，美髮床位 NT$200-300/小時 - 日租：美甲桌位 NT$1,
    200-1,
    500/天，美髮床位 NT$1,
    500-2,
    000/天 - 月租：美甲桌位 NT$25,
    000-35,
    000/月，美髮床位 NT$35,
    000-45,
    000/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'beauty-course-html': `請幫我建立一個2025年現代化美業課程培訓型網站（HTML方案），採用最新設計趨勢和教育體驗優化： **🎯 專案需求：** - 目標用戶：美業學習者、專業人士進修、工作室培訓、美業創業者 - 核心功能：課程展示、線上報名、講師介紹、學習進度追蹤 - 設計風格：教育專業、現代激勵、使用紫色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 教育專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調學習和專業成長 - AI輔助教育服務，智能推薦和個性化學習 - 包容性設計，考慮不同學習需求和能力 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、課程列表、講師介紹、報名系統、學習資源） 2. **專業CSS樣式**（專業設計、課程卡片、進度條、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（課程概覽、熱門課程、快速報名、CTA按鈕） 5. **課程展示區塊**（美甲技術、美髮造型、化妝技巧、經營管理課程） 6. **講師介紹區塊**（專業背景、教學經驗、作品展示、評價系統） 7. **線上報名系統區塊**（課程選擇、時間安排、付款資訊、確認流程） 8. **學習進度追蹤區塊**（課程完成度、證書下載、學習記錄、成就系統） **🎨 視覺設計要求：** - 使用紫色背景 + 金色點綴（教育專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Playfair Display） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 課程篩選和搜尋 - 線上報名系統 - 學習進度追蹤 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 美業課程特色：** - 專業講師團隊 - 實作課程設計 - 證照考試準備 - 就業輔導服務 - 學習社群平台 - 終身學習支援 **📚 課程類型參考：** - 基礎課程：NT$3,
    000-8,
    000 - 進階課程：NT$8,
    000-15,
    000 - 專業課程：NT$15,
    000-30,
    000 - 證照課程：NT$20,
    000-50,
    000 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'real-estate-html': `請幫我建立一個2025年現代化房仲基本展示型網站（HTML方案），採用最新設計趨勢和專業視覺效果： **🎯 專案需求：** - 目標用戶：房仲業務員、房地產專業人士和潛在客戶 - 核心功能：物件展示、專業介紹、客戶見證、聯絡資訊 - 設計風格：專業信任、現代簡約、使用深藍色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業商務風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調信任和專業感 - AI輔助物件展示，動態搜尋和篩選功能 - 包容性設計，考慮不同年齡和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、物件展示、關於我、客戶見證、聯絡） 2. **專業CSS樣式**（商務設計、信任感、現代化元素、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（專業照片、姓名、職稱、核心價值、CTA按鈕） 5. **物件展示區塊**（物件列表、詳細資訊、圖片展示、價格資訊） 6. **關於我區塊**（專業背景、認證資格、服務理念、成功案例） 7. **客戶見證區塊**（推薦信、評分、成功案例、客戶故事） 8. **聯絡資訊區塊**（聯絡表單、聯絡方式、地圖位置、營業時間） **🎨 視覺設計要求：** - 使用深藍色背景 + 白色點綴（專業信任配色） - 圓角設計和專業陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 物件篩選和搜尋 - 圖片燈箱展示 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 房仲特色：** - 動態物件展示 - 價格資訊顯示 - 地理位置地圖 - 客戶見證輪播 - 專業認證展示 - 服務流程圖解 **💰 服務類型參考：** - 買房服務：成交價1-3% - 賣房服務：成交價2-4% - 租賃服務：月租金50% - 諮詢服務：NT$2,
    000-5,
    000/小時 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'real-estate-rental-html': `請幫我建立一個2025年現代化房仲租賃管理型網站（HTML方案），採用最新設計趨勢和租賃服務體驗優化： **🎯 專案需求：** - 目標用戶：房東、租客、租賃管理需求者、物業管理公司 - 核心功能：租賃物件展示、線上預約看房、租賃申請、合約管理 - 設計風格：現代實用、專業信任、使用綠色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代實用風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調便利和信任感 - AI輔助租賃服務，智能推薦和價格分析 - 包容性設計，考慮不同租賃需求和預算 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、租賃物件、預約看房、申請流程、聯絡） 2. **專業CSS樣式**（現代設計、租賃表格、預約系統、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（租賃概覽、熱門物件、快速搜尋、CTA按鈕） 5. **租賃物件展示區塊**（照片、租金、坪數、位置、設備、360度看房） 6. **線上預約看房區塊**（日期選擇、時段預約、聯絡方式、地圖導航） 7. **租賃申請表單區塊**（個人資料、收入證明、推薦人、文件上傳） 8. **合約管理區塊**（租賃條款、押金說明、注意事項、電子簽名） **🎨 視覺設計要求：** - 使用綠色背景 + 白色點綴（現代實用配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 物件篩選和搜尋 - 線上預約系統 - 表單驗證 - 地圖整合 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 租賃服務特色：** - 智能物件推薦 - 360度虛擬看房 - 即時價格比較 - 租賃申請追蹤 - 合約電子化管理 - 客戶評價系統 **💰 租賃服務參考：** - 看房預約：免費，需提前1天預約 - 申請費：NT$500（含背景調查） - 押金：通常為1-2個月租金 - 管理費：月租金的5-10% 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'real-estate-investment-html': `請幫我建立一個2025年現代化房仲投資顧問型網站（HTML方案），採用最新設計趨勢和投資服務體驗優化： **🎯 專案需求：** - 目標用戶：房地產投資者、置產需求者、投資顧問、財富管理需求者 - 核心功能：投資物件分析、市場趨勢、投資計算、顧問服務 - 設計風格：專業高端、現代簡約、使用金色和深色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業高端風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調專業和信任感 - AI輔助投資分析，智能推薦和風險評估 - 包容性設計，考慮不同投資需求和風險承受度 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、投資物件、市場分析、投資計算、顧問服務） 2. **高端CSS樣式**（高端設計、數據圖表、投資工具、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（投資概覽、市場趨勢、核心服務、CTA按鈕） 5. **投資物件分析區塊**（投報率、增值潛力、風險評估、投資建議） 6. **市場趨勢分析區塊**（區域發展、價格走勢、投資建議、數據視覺化） 7. **投資計算工具區塊**（貸款試算、投報率計算、稅務規劃、ROI分析） 8. **顧問服務區塊**（投資諮詢、物件評估、投資組合規劃、預約系統） **🎨 視覺設計要求：** - 使用金色背景 + 深色點綴（專業高端配色） - 圓角設計和高端陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 投資計算工具 - 數據圖表互動 - 諮詢預約系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 投資顧問特色：** - 智能投資分析 - 即時市場數據 - 投資風險評估 - 個性化投資建議 - 專業顧問服務 - 投資組合管理 **💰 投資服務參考：** - 投資諮詢：NT$2,
    000-5,
    000/小時 - 物件評估：NT$5,
    000-15,
    000/件 - 投資組合規劃：NT$10,
    000-30,
    000/案 - 市場分析報告：NT$3,
    000-8,
    000/份 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'restaurant-html': `請幫我建立一個2025年現代化餐飲基本展示型網站（HTML方案），採用最新設計趨勢和美食視覺效果： **🎯 專案需求：** - 目標用戶：餐廳顧客、美食愛好者和潛在客戶 - 核心功能：菜單展示、餐廳介紹、環境照片、聯絡資訊 - 設計風格：溫馨誘人、現代簡約、使用暖色調配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 美食誘人風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調溫馨和舒適感 - AI輔助菜單展示，動態搜尋和分類功能 - 包容性設計，考慮不同年齡和飲食需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、菜單、關於我們、環境、聯絡） 2. **美食CSS樣式**（溫馨色彩、誘人設計、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（餐廳照片、名稱、理念、CTA按鈕） 5. **菜單展示區塊**（分類、圖片、價格、描述、篩選） 6. **關於我們區塊**（故事、特色、理念、團隊介紹） 7. **環境照片展示**（用餐環境、廚房、氛圍、燈箱效果） 8. **聯絡資訊區塊**（地址、電話、營業時間、地圖、表單） **🎨 視覺設計要求：** - 使用暖色調背景（橙色、紅色、黃色）+ 白色點綴 - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Playfair Display） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 菜單篩選和分類 - 圖片燈箱展示 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 餐飲特色：** - 動態菜單展示 - 美食圖片畫廊 - 營業時間顯示 - 地理位置地圖 - 客戶評價輪播 - 線上訂餐整合 **💰 菜單類型參考：** - 前菜：NT$150-300 - 主菜：NT$300-800 - 飲品：NT$80-200 - 甜點：NT$120-250 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'restaurant-delivery-html': `請幫我建立一個2025年現代化餐飲外送訂餐型網站（HTML方案），採用最新設計趨勢和訂餐體驗優化： **🎯 專案需求：** - 目標用戶：外送顧客、線上訂餐用戶、美食愛好者 - 核心功能：線上訂餐、外送服務、付款系統、訂單追蹤 - 設計風格：現代簡潔、便利友善、使用藍色和橙色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代簡潔風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調便利和美食體驗 - AI輔助訂餐服務，智能推薦和個性化菜單 - 包容性設計，考慮不同飲食需求和偏好 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、菜單、購物車、結帳、訂單追蹤） 2. **外送CSS樣式**（現代設計、購物體驗優化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（餐廳介紹、熱門餐點、快速訂餐、CTA按鈕） 5. **菜單展示區塊**（分類、圖片、價格、描述、加購選項、評分） 6. **購物車功能區塊**（添加、移除、數量調整、總計、優惠券） 7. **結帳流程區塊**（送餐資訊、付款方式、優惠券、確認訂單） 8. **訂單追蹤區塊**（訂單狀態、預計送達時間、即時位置、評價） **🎨 視覺設計要求：** - 使用藍色背景 + 橙色點綴（現代簡潔配色） - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 菜單篩選和搜尋 - 購物車操作 - 表單驗證 - 即時價格計算 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 外送服務特色：** - 智能菜單推薦 - 即時庫存顯示 - 動態價格計算 - 訂單追蹤系統 - 多種付款方式 - 客戶評價系統 **💰 外送服務參考：** - 外送費：NT$30-50（滿額免運） - 送餐時間：30-45分鐘 - 付款方式：現金、信用卡、行動支付 - 服務範圍：3公里內 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'restaurant-catering-html': `請幫我建立一個2025年現代化餐飲宴會外燴型網站（HTML方案），採用最新設計趨勢和宴會服務體驗優化： **🎯 專案需求：** - 目標用戶：企業客戶、活動主辦方、宴會需求者、婚禮策劃師 - 核心功能：宴會方案、外燴服務、線上詢價、活動規劃 - 設計風格：專業高級、現代簡約、使用金色和深色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業高級風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調奢華和專業服務 - AI輔助宴會規劃，智能推薦和客製化服務 - 包容性設計，考慮不同活動類型和預算需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、宴會方案、外燴服務、詢價表單、案例展示） 2. **高級CSS樣式**（高級設計、方案比較、案例展示、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（宴會概覽、核心服務、成功案例、CTA按鈕） 5. **宴會方案展示區塊**（婚宴、商務宴會、慶生會、尾牙等方案） 6. **外燴服務區塊**（場地佈置、餐點準備、服務人員、設備提供） 7. **線上詢價表單區塊**（活動類型、人數、預算、特殊需求、即時報價） 8. **案例展示區塊**（成功案例、客戶見證、作品集、360度展示） **🎨 視覺設計要求：** - 使用金色背景 + 深色點綴（專業高級配色） - 圓角設計和奢華陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Playfair Display） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 方案比較工具 - 即時詢價系統 - 案例瀏覽展示 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 宴會外燴特色：** - 客製化宴會方案 - 專業場地佈置 - 精緻餐點服務 - 一站式活動規劃 - 客戶見證展示 - 即時報價系統 **💰 宴會方案參考：** - 婚宴：NT$800-1,
    500/人（含佈置、服務） - 商務宴會：NT$600-1,
    200/人（含簡報設備） - 慶生會：NT$400-800/人（含蛋糕、佈置） - 尾牙：NT$500-1,
    000/人（含表演、抽獎） 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'fitness-html': `請幫我建立一個2025年現代化健身基本展示型網站（HTML方案），採用最新設計趨勢和活力視覺效果： **🎯 專案需求：** - 目標用戶：健身愛好者、運動愛好者和潛在會員 - 核心功能：課程展示、教練介紹、環境展示、聯絡資訊 - 設計風格：活力動感、現代簡約、使用橙色和黑色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 活力動感風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調活力和激勵感 - AI輔助課程展示，動態搜尋和分類功能 - 包容性設計，考慮不同年齡和體能需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、課程、教練、環境、聯絡） 2. **活力CSS樣式**（動感色彩、活力設計、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（健身房照片、名稱、理念、CTA按鈕） 5. **課程展示區塊**（時間表、類型、強度標示、篩選） 6. **教練介紹區塊**（照片、專長、經歷、證照、預約） 7. **環境展示區塊**（器材、空間、氛圍照片、燈箱效果） 8. **聯絡資訊區塊**（地址、電話、營業時間、地圖、表單） **🎨 視覺設計要求：** - 使用橙色背景 + 黑色點綴（活力動感配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 課程篩選和分類 - 圖片燈箱展示 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 健身特色：** - 動態課程展示 - 教練預約系統 - 營業時間顯示 - 地理位置地圖 - 會員評價輪播 - 線上預約整合 **💰 課程類型參考：** - 團體課程：NT$300-800/堂 - 個人教練：NT$1,
    500-3,
    000/小時 - 月費會員：NT$1,
    500-3,
    500/月 - 年費會員：NT$15,
    000-35,
    000/年 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'fitness-personal-html': `請幫我建立一個2025年現代化健身個人教練型網站（HTML方案），採用最新設計趨勢和健身服務體驗優化： **🎯 專案需求：** - 目標用戶：尋找個人教練的學員、健身愛好者、體態改善需求者 - 核心功能：教練預約、課程安排、進度追蹤、付款系統 - 設計風格：專業激勵、現代簡約、使用藍色和綠色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業激勵風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調健康和激勵感 - AI輔助健身服務，智能推薦和個性化訓練 - 包容性設計，考慮不同體能和健身需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、教練介紹、課程預約、進度追蹤、付款） 2. **專業CSS樣式**（專業設計、預約系統、進度圖表、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（教練介紹、核心服務、成功案例、CTA按鈕） 5. **教練介紹區塊**（專業背景、專長領域、成功案例、證照展示） 6. **課程預約系統區塊**（時間選擇、課程類型、地點選擇、預約確認） 7. **進度追蹤區塊**（體重記錄、體脂測量、目標設定、圖表顯示） 8. **付款系統區塊**（課程包購買、單次課程、會員方案、付款處理） **🎨 視覺設計要求：** - 使用藍色背景 + 綠色點綴（專業激勵配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 課程預約系統 - 進度圖表展示 - 表單驗證 - 付款處理 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 個人教練特色：** - 智能課程推薦 - 個性化訓練計劃 - 即時進度追蹤 - 多種付款方式 - 線上預約系統 - 客戶評價展示 **💰 個人教練服務參考：** - 單次課程：NT$1,
    500-2,
    500/小時 - 課程包：10堂課 NT$12,
    000-20,
    000 - 月費制：NT$8,
    000-15,
    000/月（含4-8堂課） - 線上指導：NT$500-1,
    000/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'fitness-studio-html': `請幫我建立一個2025年現代化健身工作室租賃型網站（HTML方案），採用最新設計趨勢和租賃服務體驗優化： **🎯 專案需求：** - 目標用戶：健身教練、工作室業主、空間租賃需求者、健身創業者 - 核心功能：空間租賃、設備展示、預約管理、收費標準 - 設計風格：現代專業、簡約實用、使用灰色和藍色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調便利和專業服務 - AI輔助租賃服務，智能推薦和預約管理 - 包容性設計，考慮不同租賃需求和預算 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、空間展示、租賃方案、預約系統、收費標準） 2. **專業CSS樣式**（現代設計、空間展示、租賃表格、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（工作室概覽、熱門空間、快速預約、CTA按鈕） 5. **空間展示區塊**（不同類型工作室、設備介紹、環境照片、360度展示） 6. **租賃方案區塊**（時租、日租、月租方案比較、特色說明） 7. **預約系統區塊**（空間選擇、時間預約、設備需求、即時確認） 8. **收費標準區塊**（不同空間類型、設備使用費、清潔費、透明化定價） **🎨 視覺設計要求：** - 使用灰色背景 + 藍色點綴（現代專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 空間篩選和搜尋 - 線上預約系統 - 費用計算器 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 工作室租賃特色：** - 智能空間推薦 - 即時可用性查詢 - 透明化定價 - 設備完整展示 - 預約確認通知 - 客戶評價系統 **💰 租賃方案參考：** - 時租：NT$200-500/小時（含基本設備） - 日租：NT$1,
    500-3,
    000/天（含所有設備） - 月租：NT$25,
    000-50,
    000/月（專屬空間） - 設備租賃：NT$500-1,
    500/天（特殊設備） 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'ecommerce-html': `請幫我建立一個2025年現代化電商基本展示型網站（HTML方案），採用最新設計趨勢和購物體驗優化： **🎯 專案需求：** - 目標用戶：線上購物者、電商賣家和潛在客戶 - 核心功能：商品展示、購物車、結帳流程、會員登入 - 設計風格：現代簡潔、專業商務、使用藍色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代商務風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調購物體驗和信任感 - AI輔助商品推薦，動態搜尋和分類功能 - 包容性設計，考慮不同年齡和購物需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、商品列表、購物車、結帳、會員） 2. **電商CSS樣式**（現代設計、購物體驗優化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（品牌展示、熱門商品、促銷活動、CTA按鈕） 5. **商品展示區塊**（圖片、價格、描述、分類、篩選） 6. **購物車功能區塊**（添加、移除、數量調整、總計） 7. **結帳流程區塊**（表單、總計、付款方式、訂單確認） 8. **會員登入區塊**（註冊、登入表單、個人資料管理） **🎨 視覺設計要求：** - 使用藍色背景 + 白色點綴（專業商務配色） - 圓角設計和現代陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 商品篩選和搜尋 - 購物車操作 - 表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 電商特色：** - 動態商品展示 - 購物車功能 - 價格計算 - 庫存顯示 - 客戶評價 - 推薦商品 **💰 商品類型參考：** - 電子產品：NT$1,
    000-50,
    000 - 服飾配件：NT$200-5,
    000 - 生活用品：NT$100-2,
    000 - 美妝保養：NT$300-3,
    000 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'ecommerce-marketplace-html': `請幫我建立一個2025年現代化電商多賣家市集型網站（HTML方案），採用最新設計趨勢和市集體驗優化： **🎯 專案需求：** - 目標用戶：多個賣家、買家、市集管理員、電商創業者 - 核心功能：賣家註冊、商品管理、訂單處理、佣金系統 - 設計風格：多元活潑、現代簡約、使用彩色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 多元活潑風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調多元化和便利性 - AI輔助市集服務，智能推薦和賣家分析 - 包容性設計，考慮不同賣家和買家需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、賣家專區、商品瀏覽、訂單管理、客服） 2. **多元CSS樣式**（多元設計、賣家專區、商品分類、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（市集介紹、熱門商品、賣家展示、CTA按鈕） 5. **賣家註冊系統區塊**（賣家資料、商店設定、商品上架、審核流程） 6. **商品管理區塊**（商品分類、庫存管理、價格設定、促銷活動） 7. **訂單處理區塊**（訂單追蹤、出貨管理、退換貨、客戶服務） 8. **佣金系統區塊**（銷售報表、佣金計算、提現申請、財務管理） **🎨 視覺設計要求：** - 使用彩色背景（藍色、綠色、橙色、紫色）+ 白色點綴 - 圓角設計和現代陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 賣家篩選和搜尋 - 商品分類瀏覽 - 訂單管理系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 市集服務特色：** - 智能商品推薦 - 賣家評分系統 - 即時庫存顯示 - 多種付款方式 - 訂單追蹤系統 - 客戶評價管理 **💰 市集服務參考：** - 賣家註冊費：NT$500（一次性） - 平台佣金：3-8%（依商品類別） - 金流手續費：2-3% - 廣告推廣：NT$1,
    000-5,
    000/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'ecommerce-subscription-html': `請幫我建立一個2025年現代化電商訂閱制型網站（HTML方案），採用最新設計趨勢和訂閱服務體驗優化： **🎯 專案需求：** - 目標用戶：訂閱制服務提供者、訂閱用戶、定期消費需求者 - 核心功能：訂閱方案、定期配送、會員管理、自動續費 - 設計風格：簡約專業、現代便利、使用綠色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 簡約專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調便利和持續價值 - AI輔助訂閱服務，智能推薦和個性化配送 - 包容性設計，考慮不同訂閱需求和預算 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、訂閱方案、會員專區、配送管理、客服） 2. **簡約CSS樣式**（簡約設計、方案比較、會員專區、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（訂閱概覽、熱門方案、快速訂閱、CTA按鈕） 5. **訂閱方案展示區塊**（月費、季費、年費方案比較、優惠說明） 6. **會員專區區塊**（訂閱狀態、配送記錄、偏好設定、個人化推薦） 7. **配送管理區塊**（配送地址、配送時間、暫停配送、即時追蹤） 8. **自動續費區塊**（付款方式、續費提醒、取消訂閱、帳單管理） **🎨 視覺設計要求：** - 使用綠色背景 + 白色點綴（簡約專業配色） - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 方案比較工具 - 會員登入系統 - 配送設定管理 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 訂閱制特色：** - 智能方案推薦 - 個性化配送 - 自動續費管理 - 會員專屬優惠 - 配送追蹤系統 - 客戶服務支援 **💰 訂閱服務參考：** - 月費方案：NT$299-999/月 - 季費方案：NT$799-2,
    499/季（9折優惠） - 年費方案：NT$2,
    999-9,
    999/年（8折優惠） - 配送費：NT$60-120（滿額免運） 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'project-management-html': `請幫我建立一個2025年現代化專案管理基本型網站（HTML方案），採用最新設計趨勢和協作體驗優化： **🎯 專案需求：** - 目標用戶：專案經理、團隊成員、協作工作者 - 核心功能：任務追蹤、團隊協作、進度管理、時間統計 - 設計風格：專業清晰、現代簡約、使用綠色和灰色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業協作風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調協作和效率 - AI輔助任務管理，智能推薦和自動化 - 包容性設計，考慮不同角色和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、看板、任務、團隊、統計） 2. **專業CSS樣式**（清晰設計、狀態指示、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（專案概覽、進度指示、快速操作、CTA按鈕） 5. **看板管理區塊**（待辦、進行中、已完成、拖拽功能） 6. **任務卡片區塊**（標題、描述、負責人、截止日期、狀態） 7. **團隊協作區塊**（成員列表、角色分配、溝通工具） 8. **進度統計區塊**（完成率、時間追蹤、圖表展示） **🎨 視覺設計要求：** - 使用綠色背景 + 灰色點綴（專業協作配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 任務拖拽排序 - 狀態篩選和搜尋 - 表單驗證 - 即時更新 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 專案管理特色：** - 看板式任務管理 - 進度追蹤圖表 - 團隊協作工具 - 時間統計功能 - 狀態指示器 - 自動化提醒 **📊 功能類型參考：** - 任務管理：基本版免費 - 團隊協作：NT$200-500/人/月 - 進階功能：NT$500-1,
    000/人/月 - 企業版：NT$1,
    000-2,
    000/人/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'project-management-agile-html': `請幫我建立一個2025年現代化專案管理敏捷開發型網站（HTML方案），採用最新設計趨勢和敏捷開發體驗優化： **🎯 專案需求：** - 目標用戶：敏捷開發團隊、Scrum Master、產品經理、開發團隊成員 - 核心功能：Sprint規劃、用戶故事、燃盡圖、回顧會議 - 設計風格：活潑動態、現代簡約、使用藍色和橙色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 活潑動態風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調協作和效率 - AI輔助敏捷開發，智能估算和進度預測 - 包容性設計，考慮不同角色和開發需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、Sprint看板、用戶故事、燃盡圖、回顧） 2. **動態CSS樣式**（動態設計、Sprint視覺化、燃盡圖表、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（專案概覽、Sprint進度、團隊統計、CTA按鈕） 5. **Sprint規劃區塊**（Sprint目標、時間範圍、容量規劃、團隊分配） 6. **用戶故事管理區塊**（故事點估算、優先級、驗收標準、狀態追蹤） 7. **燃盡圖顯示區塊**（剩餘工作、完成進度、趨勢分析、預測） 8. **回顧會議區塊**（Sprint回顧、改進建議、行動項目、團隊反饋） **🎨 視覺設計要求：** - 使用藍色背景 + 橙色點綴（活潑動態配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 故事拖拽排序 - 點數估算系統 - 圖表互動更新 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 敏捷開發特色：** - 智能故事估算 - 自動化燃盡圖 - 團隊協作工具 - Sprint進度追蹤 - 回顧會議管理 - 績效分析報告 **📊 敏捷開發參考：** - Sprint長度：1-4週 - 每日站會：15分鐘 - Sprint規劃：2-4小時 - 回顧會議：1-2小時 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'project-management-consulting-html': `請幫我建立一個2025年現代化專案管理顧問服務型網站（HTML方案），採用最新設計趨勢和顧問服務體驗優化： **🎯 專案需求：** - 目標用戶：企業客戶、專案管理顧問、諮詢服務提供者、企業轉型需求者 - 核心功能：顧問服務、專案評估、培訓課程、諮詢預約 - 設計風格：專業高端、現代權威、使用深藍色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業高端風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調專業和權威感 - AI輔助顧問服務，智能分析和建議功能 - 包容性設計，考慮不同企業規模和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、服務介紹、專案評估、培訓課程、諮詢預約） 2. **高端CSS樣式**（高端設計、服務展示、客戶見證、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（顧問概覽、核心服務、成功案例、CTA按鈕） 5. **顧問服務介紹區塊**（專案管理諮詢、流程改善、團隊培訓、專業認證） 6. **專案評估工具區塊**（專案健康度檢查、風險評估、改善建議、數據分析） 7. **培訓課程區塊**（PMP認證、敏捷認證、專案管理基礎、企業內訓） 8. **諮詢預約系統區塊**（時間選擇、服務類型、預約確認、客戶管理） **🎨 視覺設計要求：** - 使用深藍色背景 + 金色點綴（專業高端配色） - 圓角設計和權威陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 專案評估工具 - 課程報名系統 - 諮詢預約管理 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 顧問服務特色：** - 智能專案分析 - 個性化改善建議 - 專業認證培訓 - 企業轉型輔導 - 客戶成功案例 - 持續支援服務 **💰 顧問服務參考：** - 專案評估：NT$10,
    000-30,
    000/案 - 流程改善：NT$50,
    000-150,
    000/案 - 團隊培訓：NT$20,
    000-50,
    000/天 - 諮詢服務：NT$3,
    000-8,
    000/小時 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'note-taking-html': `請幫我建立一個2025年現代化個人筆記系統（HTML方案），採用最新設計趨勢和知識管理體驗優化： **🎯 專案需求：** - 目標用戶：個人用戶、知識工作者、學生、專業人士 - 核心功能：筆記管理、標籤分類、搜尋功能、雲端同步 - 設計風格：簡潔專注、現代簡約、使用紫色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 簡潔專注風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調專注和效率 - AI輔助筆記管理，智能分類和搜尋功能 - 包容性設計，考慮不同學習和工作需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、筆記列表、編輯器、標籤、搜尋） 2. **簡潔CSS樣式**（簡潔設計、閱讀體驗優化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（快速筆記、統計概覽、快速操作、CTA按鈕） 5. **筆記列表區塊**（標題、預覽、日期、標籤、篩選） 6. **筆記編輯器區塊**（標題、內容、格式化、自動儲存） 7. **標籤系統區塊**（分類、篩選、管理、顏色標示） 8. **搜尋功能區塊**（全文搜尋、標籤搜尋、進階篩選） **🎨 視覺設計要求：** - 使用紫色背景 + 白色點綴（簡潔專注配色） - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Code Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時搜尋和篩選 - 拖拽排序 - 表單驗證 - 自動儲存 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 筆記系統特色：** - 即時編輯器 - 智能標籤系統 - 全文搜尋功能 - 自動備份 - 匯出功能 - 統計分析 **📝 功能類型參考：** - 基本筆記：免費 - 進階功能：NT$99-299/月 - 雲端同步：NT$199-499/月 - 團隊協作：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'note-taking-knowledge-html': `請幫我建立一個2025年現代化知識管理型筆記網站（HTML方案），採用最新設計趨勢和知識管理體驗優化： **🎯 專案需求：** - 目標用戶：研究人員、學者、知識工作者、企業團隊、學術機構 - 核心功能：知識庫建立、關聯圖、引用系統、協作編輯 - 設計風格：專業結構化、學術權威、使用深綠色和米色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業結構化風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調知識管理和學術嚴謹性 - AI輔助知識管理，智能推薦和關聯分析 - 包容性設計，考慮不同研究領域和知識需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、知識庫、關聯圖、引用管理、協作） 2. **專業CSS樣式**（專業設計、關聯圖、引用卡片、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（知識概覽、核心功能、快速建立、CTA按鈕） 5. **知識庫建立區塊**（主題分類、子分類、知識點管理、結構化編輯） 6. **關聯圖功能區塊**（知識點關聯、視覺化圖表、關係探索、智能分析） 7. **引用系統區塊**（文獻引用、來源追蹤、參考資料管理、自動引用） 8. **協作編輯區塊**（多人編輯、版本控制、評論系統、即時同步） **🎨 視覺設計要求：** - 使用深綠色背景 + 米色點綴（專業學術配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 知識點關聯探索 - 即時協作編輯 - 智能搜尋功能 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 知識管理特色：** - 智能知識分類 - 視覺化關聯圖 - 自動引用管理 - 版本控制系統 - 協作編輯功能 - 知識搜尋引擎 **📚 功能類型參考：** - 個人版：免費 - 團隊版：NT$199-499/月 - 企業版：NT$499-1,
    299/月 - 學術版：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'note-taking-collaborative-html': `請幫我建立一個2025年現代化協作筆記型網站（HTML方案），採用最新設計趨勢和團隊協作體驗優化： **🎯 專案需求：** - 目標用戶：團隊、小組、專案團隊、學習小組、企業協作需求者 - 核心功能：多人協作、權限管理、即時同步、討論區 - 設計風格：現代協作、互動友善、使用橙色和藍色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 現代協作風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調團隊協作和互動性 - AI輔助協作功能，智能推薦和自動化管理 - 包容性設計，考慮不同團隊規模和協作需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、團隊空間、協作筆記、討論區、成員管理） 2. **協作CSS樣式**（現代設計、協作指示、討論氣泡、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（團隊概覽、協作功能、快速建立、CTA按鈕） 5. **多人協作功能區塊**（即時編輯、游標顯示、變更追蹤、協作指示） 6. **權限管理區塊**（角色設定、編輯權限、檢視權限、安全控制） 7. **即時同步區塊**（變更通知、自動儲存、衝突解決、版本管理） 8. **討論區功能區塊**（筆記評論、團隊討論、@提及、即時通訊） **🎨 視覺設計要求：** - 使用橙色背景 + 藍色點綴（現代協作配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時協作編輯 - 權限管理系統 - 討論區互動 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 協作筆記特色：** - 即時多人編輯 - 智能權限管理 - 自動同步備份 - 團隊討論功能 - 成員活動追蹤 - 協作分析報告 **📝 功能類型參考：** - 基本協作：免費 - 進階功能：NT$149-399/月 - 團隊版：NT$299-799/月 - 企業版：NT$499-1,
    299/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-finance-html': `請幫我建立一個2025年現代化個人理財工具（HTML方案），採用最新設計趨勢和財務管理體驗優化： **🎯 專案需求：** - 目標用戶：個人用戶、理財愛好者、投資者、家庭理財需求者 - 核心功能：記帳管理、預算規劃、投資追蹤、財務報表 - 設計風格：專業信任、現代簡約、使用綠色和藍色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業信任風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調財務安全和成長 - AI輔助理財管理，智能分析和建議功能 - 包容性設計，考慮不同財務狀況和目標 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、記帳、預算、投資、報表） 2. **專業CSS樣式**（專業設計、數據視覺化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（財務概覽、快速記帳、目標進度、CTA按鈕） 5. **記帳功能區塊**（收入、支出、分類、日期、快速輸入） 6. **預算規劃區塊**（設定、追蹤、提醒、目標管理） 7. **投資追蹤區塊**（投資組合、收益計算、市場分析） 8. **財務報表區塊**（圖表、統計、趨勢、匯出功能） **🎨 視覺設計要求：** - 使用綠色背景 + 藍色點綴（專業信任配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時數據更新 - 圖表互動 - 表單驗證 - 自動計算 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 理財工具特色：** - 智能記帳系統 - 預算警報功能 - 投資組合追蹤 - 財務圖表分析 - 目標設定管理 - 數據匯出功能 **💰 功能類型參考：** - 基本記帳：免費 - 進階分析：NT$99-299/月 - 投資追蹤：NT$199-499/月 - 專業版：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-finance-budget-html': `請幫我建立一個2025年現代化個人理財預算規劃型網站（HTML方案），採用最新設計趨勢和預算管理體驗優化： **🎯 專案需求：** - 目標用戶：預算規劃者、理財初學者、家庭理財需求者、財務管理愛好者 - 核心功能：預算設定、支出追蹤、預算警報、財務目標 - 設計風格：直觀警示、目標導向、使用紅色和綠色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 直觀警示風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調財務健康和目標達成 - AI輔助預算管理，智能分析和建議功能 - 包容性設計，考慮不同財務狀況和目標 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、預算設定、支出追蹤、警報、目標） 2. **直觀CSS樣式**（直觀設計、警示系統、進度條、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（財務概覽、預算進度、快速記錄、CTA按鈕） 5. **預算設定功能區塊**（類別預算、月度預算、年度預算、自動分配） 6. **支出追蹤區塊**（即時記錄、類別分析、趨勢圖表、智能分類） 7. **預算警報區塊**（超支提醒、目標達成通知、智能建議） 8. **財務目標區塊**（儲蓄目標、債務清償、投資目標、進度追蹤） **🎨 視覺設計要求：** - 使用紅色背景 + 綠色點綴（直觀警示配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時預算更新 - 支出分類管理 - 警報系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 預算規劃特色：** - 智能預算建議 - 自動支出分類 - 即時警報系統 - 目標進度追蹤 - 財務健康評分 - 個性化建議 **📊 功能類型參考：** - 基本預算：免費 - 進階分析：NT$99-299/月 - 家庭版：NT$199-499/月 - 專業版：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-finance-investment-html': `請幫我建立一個2025年現代化個人理財投資追蹤型網站（HTML方案），採用最新設計趨勢和投資管理體驗優化： **🎯 專案需求：** - 目標用戶：投資者、理財進階者、投資組合管理者、專業投資人 - 核心功能：投資組合、績效追蹤、風險分析、投資建議 - 設計風格：專業數據導向、風險警示、使用深藍色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業數據導向風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調投資安全和成長 - AI輔助投資分析，智能推薦和風險預警 - 包容性設計，考慮不同投資經驗和風險承受度 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、投資組合、績效分析、風險評估、建議） 2. **專業CSS樣式**（專業設計、圖表展示、風險指示、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（投資概覽、績效摘要、快速操作、CTA按鈕） 5. **投資組合管理區塊**（股票、基金、債券、其他投資、資產配置） 6. **績效追蹤區塊**（投資報酬率、累積收益、年化報酬、比較分析） 7. **風險分析區塊**（投資組合風險、個別標的風險、相關性分析、壓力測試） 8. **投資建議區塊**（再平衡建議、風險調整、投資機會、AI建議） **🎨 視覺設計要求：** - 使用深藍色背景 + 金色點綴（專業數據導向配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時數據更新 - 圖表互動分析 - 風險警報系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 投資追蹤特色：** - 智能投資組合分析 - 即時風險監控 - 自動化再平衡建議 - 投資績效比較 - 市場資訊整合 - 投資決策支援 **💰 功能類型參考：** - 基本追蹤：免費 - 進階分析：NT$199-499/月 - 專業版：NT$499-1,
    299/月 - 機構版：NT$1,
    299-2,
    999/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'online-learning-html': `請幫我建立一個2025年現代化線上學習平台（HTML方案），採用最新設計趨勢和教育體驗優化： **🎯 專案需求：** - 目標用戶：學習者、教育工作者、企業培訓師、學生 - 核心功能：課程管理、學習進度、測驗系統、證書頒發 - 設計風格：教育專業、現代簡約、使用藍色和橙色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 教育專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調學習和成長體驗 - AI輔助學習管理，智能推薦和個性化學習 - 包容性設計，考慮不同學習需求和能力 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、課程、進度、測驗、證書） 2. **教育CSS樣式**（專業設計、學習體驗優化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（課程概覽、學習統計、快速開始、CTA按鈕） 5. **課程展示區塊**（分類、描述、講師、時長、評分） 6. **學習進度區塊**（完成率、章節、時間追蹤、成就系統） 7. **測驗系統區塊**（題目、答案、評分、錯題回顧） 8. **證書管理區塊**（完成證書、下載功能、分享功能） **🎨 視覺設計要求：** - 使用藍色背景 + 橙色點綴（教育專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 課程篩選和搜尋 - 進度追蹤 - 測驗互動 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 學習平台特色：** - 個性化學習路徑 - 進度追蹤系統 - 互動測驗功能 - 成就徽章系統 - 學習社群 - 證書管理 **📚 課程類型參考：** - 基礎課程：免費 - 進階課程：NT$299-999/課程 - 專業認證：NT$1,
    999-4,
    999/課程 - 企業培訓：NT$5,
    000-20,
    000/課程 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'online-learning-interactive-html': `請幫我建立一個2025年現代化線上學習互動型網站（HTML方案），採用最新設計趨勢和互動學習體驗優化： **🎯 專案需求：** - 目標用戶：互動學習愛好者、線上教育者、學習社群、遊戲化學習需求者 - 核心功能：互動課程、即時問答、學習社群、遊戲化學習 - 設計風格：互動活潑、遊戲化、使用彩色和動畫效果 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 互動活潑風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調互動和學習樂趣 - AI輔助互動學習，智能推薦和個性化體驗 - 包容性設計，考慮不同學習風格和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、互動課程、即時問答、學習社群、成就系統） 2. **互動CSS樣式**（動畫效果、遊戲化元素、社群介面、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（學習概覽、熱門課程、互動功能、CTA按鈕） 5. **互動課程區塊**（影片互動、即時測驗、模擬練習、進度追蹤） 6. **即時問答區塊**（線上討論、講師回答、同儕互助、智能推薦） 7. **學習社群區塊**（討論區、學習小組、經驗分享、社交功能） 8. **遊戲化學習區塊**（積分系統、成就徽章、排行榜、挑戰任務） **🎨 視覺設計要求：** - 使用彩色背景（藍色、綠色、橙色、紫色）+ 白色點綴 - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時互動功能 - 遊戲化元素 - 社群互動 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 互動學習特色：** - 智能課程推薦 - 即時互動功能 - 遊戲化學習體驗 - 學習社群管理 - 成就系統 - 個性化學習路徑 **📚 課程類型參考：** - 互動課程：NT$199-999/課程 - 即時問答：NT$99-299/月 - 學習社群：NT$149-499/月 - 遊戲化學習：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'online-learning-certification-html': `請幫我建立一個2025年現代化線上學習證照考試型網站（HTML方案），採用最新設計趨勢和證照考試體驗優化： **🎯 專案需求：** - 目標用戶：證照考生、專業人士、企業培訓、職業發展需求者 - 核心功能：證照課程、模擬考試、成績分析、證書管理 - 設計風格：專業嚴謹、權威可信、使用深藍色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業嚴謹風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調學習和認證權威性 - AI輔助證照學習，智能推薦和個性化學習 - 包容性設計，考慮不同學習需求和能力 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、證照課程、模擬考試、成績分析、證書中心） 2. **專業CSS樣式**（專業設計、考試介面、證書展示、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（證照概覽、學習進度、快速考試、CTA按鈕） 5. **證照課程區塊**（課程大綱、學習進度、重點整理、學習路徑） 6. **模擬考試區塊**（題庫練習、模擬測驗、時間限制、考試環境） 7. **成績分析區塊**（詳細分析、弱點識別、改善建議、學習建議） 8. **證書管理區塊**（證書申請、進度追蹤、下載列印、數位證書） **🎨 視覺設計要求：** - 使用深藍色背景 + 金色點綴（專業嚴謹配色） - 圓角設計和權威陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 模擬考試系統 - 成績分析圖表 - 學習進度追蹤 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 證照考試特色：** - 智能學習路徑 - 個性化題庫推薦 - 即時成績分析 - 防作弊監控 - 數位證書管理 - 學習社群支援 **📚 證照類型參考：** - 基礎證照：NT$299-999/課程 - 專業證照：NT$1,
    999-4,
    999/課程 - 國際認證：NT$4,
    999-9,
    999/課程 - 企業培訓：NT$5,
    000-20,
    000/課程 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'medical-clinic-html': `請幫我建立一個2025年現代化醫療診所網站（HTML方案），採用最新設計趨勢和醫療服務體驗優化： **🎯 專案需求：** - 目標用戶：病患、潛在客戶、醫療服務需求者 - 核心功能：線上掛號、醫師介紹、服務項目、健康資訊 - 設計風格：專業信任、現代簡約、使用藍色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業信任風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調醫療安全和信任感 - AI輔助醫療服務，智能掛號和健康建議 - 包容性設計，考慮不同年齡和健康需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、醫師介紹、服務項目、掛號、聯絡） 2. **專業CSS樣式**（醫療設計、信任感建立、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（診所介紹、核心服務、緊急聯絡、CTA按鈕） 5. **醫師介紹區塊**（照片、專長、經歷、時段、預約） 6. **服務項目區塊**（科別、檢查、治療項目、價格資訊） 7. **線上掛號區塊**（日期、時段、醫師選擇、表單驗證） 8. **健康資訊區塊**（文章、衛教、常見問題、健康檢測） **🎨 視覺設計要求：** - 使用藍色背景 + 白色點綴（專業信任配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 線上掛號預約 - 醫師時段查詢 - 表單驗證 - 健康資訊搜尋 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 醫療診所特色：** - 智能掛號系統 - 醫師時段管理 - 健康資訊平台 - 線上預約確認 - 緊急聯絡功能 - 衛教資源中心 **💰 服務類型參考：** - 一般門診：NT$150-300 - 專科門診：NT$300-600 - 健康檢查：NT$1,
    000-5,
    000 - 急診服務：NT$500-1,
    000 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'medical-clinic-telemedicine-html': `請幫我建立一個2025年現代化醫療診所遠距醫療型網站（HTML方案），採用最新設計趨勢和遠距醫療體驗優化： **🎯 專案需求：** - 目標用戶：遠距醫療患者、偏遠地區患者、慢性病患者、行動不便患者 - 核心功能：視訊看診、線上處方、健康監測、遠距照護 - 設計風格：醫療科技、現代便利、使用藍色和綠色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 醫療科技風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調醫療安全和便利性 - AI輔助遠距醫療，智能診斷和健康分析 - 包容性設計，考慮不同年齡和健康需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、視訊看診、健康監測、處方管理、照護記錄） 2. **科技CSS樣式**（科技感設計、視訊介面、健康圖表、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（遠距醫療介紹、核心服務、快速預約、CTA按鈕） 5. **視訊看診區塊**（預約系統、視訊通話、診療記錄、即時通訊） 6. **線上處方區塊**（處方開立、藥品查詢、用藥提醒、藥物互動） 7. **健康監測區塊**（生命徵象記錄、健康趨勢、異常警報、數據分析） 8. **遠距照護區塊**（照護計劃、追蹤提醒、家屬通知、健康指導） **🎨 視覺設計要求：** - 使用藍色背景 + 綠色點綴（醫療科技配色） - 圓角設計和科技感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 視訊通話整合 - 健康數據視覺化 - 智能提醒系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 遠距醫療特色：** - 智能預約系統 - 即時視訊看診 - 健康數據監測 - 自動用藥提醒 - 遠距照護管理 - 緊急聯絡功能 **💰 服務類型參考：** - 視訊看診：NT$500-1,
    500/次 - 健康監測：NT$299-799/月 - 遠距照護：NT$1,
    999-4,
    999/月 - 緊急諮詢：NT$300-800/次 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'medical-clinic-management-html': `請幫我建立一個2025年現代化醫療診所管理型網站（HTML方案），採用最新設計趨勢和診所管理體驗優化： **🎯 專案需求：** - 目標用戶：診所管理員、醫護人員、行政人員、醫療機構管理者 - 核心功能：病患管理、排班系統、庫存管理、財務報表 - 設計風格：管理專業、效率導向、使用深灰色和藍色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 管理專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調效率和專業管理 - AI輔助診所管理，智能分析和自動化功能 - 包容性設計，考慮不同角色和操作需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、病患管理、排班系統、庫存管理、財務報表） 2. **專業CSS樣式**（專業設計、數據表格、管理介面、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（管理概覽、核心功能、快速操作、CTA按鈕） 5. **病患管理區塊**（病歷記錄、就診歷史、聯絡資訊、健康檔案） 6. **排班系統區塊**（醫師排班、護理排班、診間安排、時段管理） 7. **庫存管理區塊**（藥品庫存、醫療用品、進銷存管理、自動補貨） 8. **財務報表區塊**（收入統計、支出分析、營運報表、數據視覺化） **🎨 視覺設計要求：** - 使用深灰色背景 + 藍色點綴（管理專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時數據更新 - 排班管理系統 - 庫存警報功能 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 診所管理特色：** - 智能病患管理 - 自動排班系統 - 即時庫存監控 - 財務分析報表 - 權限管理系統 - 數據備份還原 **💰 功能類型參考：** - 基本管理：免費 - 進階功能：NT$299-799/月 - 專業版：NT$799-1,
    999/月 - 企業版：NT$1,
    999-4,
    999/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'community-management-html': `請幫我建立一個2025年現代化社區管理系統（HTML方案），採用最新設計趨勢和社區服務體驗優化： **🎯 專案需求：** - 目標用戶：社區住戶、管理員、物業管理公司 - 核心功能：公告發布、維修申請、費用繳納、鄰里交流 - 設計風格：親切實用、現代簡約、使用綠色和白色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 親切實用風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調社區和諧和便利性 - AI輔助社區管理，智能分析和建議功能 - 包容性設計，考慮不同年齡和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、公告、維修、費用、交流、聯絡） 2. **親切CSS樣式**（親切設計、實用性優先、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（社區概覽、重要公告、快速服務、CTA按鈕） 5. **公告系統區塊**（重要通知、活動公告、分類、即時推送） 6. **維修申請區塊**（問題描述、照片上傳、進度追蹤、狀態通知） 7. **費用管理區塊**（繳費記錄、帳單查詢、線上繳費、發票管理） 8. **鄰里交流區塊**（討論區、活動分享、聯絡資訊、鄰里互助） **🎨 視覺設計要求：** - 使用綠色背景 + 白色點綴（親切實用配色） - 圓角設計和柔和陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時通知系統 - 維修進度追蹤 - 線上繳費功能 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 社區管理特色：** - 智能公告系統 - 維修申請追蹤 - 線上繳費管理 - 鄰里交流平台 - 活動組織功能 - 緊急聯絡系統 **💰 服務類型參考：** - 基本管理：免費 - 進階功能：NT$99-299/月 - 專業版：NT$299-599/月 - 企業版：NT$599-1,
    299/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'community-management-social-html': `請幫我建立一個2025年現代化社群管理社交互動型網站（HTML方案），採用最新設計趨勢和社交互動體驗優化： **🎯 專案需求：** - 目標用戶：活躍社群成員、社交愛好者、鄰里互動需求者、社區建設者 - 核心功能：社交互動、活動組織、鄰里交流、興趣小組 - 設計風格：社交活潑、互動友善、使用彩色和動態效果 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 社交活潑風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調社交互動和社區連結 - AI輔助社交功能，智能推薦和個性化體驗 - 包容性設計，考慮不同年齡和社交需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、社交動態、活動中心、興趣小組、鄰里地圖） 2. **社交CSS樣式**（動態設計、互動元素、社群介面、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（社群概覽、熱門動態、快速互動、CTA按鈕） 5. **社交動態區塊**（貼文分享、按讚評論、即時互動、內容推薦） 6. **活動組織區塊**（活動發布、報名系統、活動管理、參與統計） 7. **興趣小組區塊**（小組建立、成員管理、討論區、興趣匹配） 8. **鄰里交流區塊**（聊天室、訊息系統、通知中心、鄰里地圖） **🎨 視覺設計要求：** - 使用彩色背景（藍色、綠色、橙色、紫色）+ 白色點綴 - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時社交互動 - 活動報名系統 - 興趣小組管理 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 社交互動特色：** - 智能內容推薦 - 即時互動功能 - 活動自動匹配 - 興趣小組推薦 - 鄰里地圖整合 - 社群分析報告 **📱 功能類型參考：** - 基本社交：免費 - 進階功能：NT$99-299/月 - 社群版：NT$199-499/月 - 企業版：NT$499-1,
    299/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'community-management-moderator-html': `請幫我建立一個2025年現代化社群管理管理員工具型網站（HTML方案），採用最新設計趨勢和管理工具體驗優化： **🎯 專案需求：** - 目標用戶：社群管理員、版主、系統管理員、社群運營者 - 核心功能：內容審核、用戶管理、數據分析、系統設定 - 設計風格：管理專業、效率導向、使用深藍色和灰色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 管理專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調效率和專業管理 - AI輔助管理功能，智能分析和自動化處理 - 包容性設計，考慮不同管理角色和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、內容審核、用戶管理、數據分析、系統設定） 2. **專業CSS樣式**（專業設計、管理介面、數據表格、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（管理概覽、核心功能、快速操作、CTA按鈕） 5. **內容審核區塊**（貼文審核、違規處理、舉報管理、自動化審核） 6. **用戶管理區塊**（用戶權限、封鎖解封、行為記錄、批量操作） 7. **數據分析區塊**（活躍度統計、內容分析、用戶行為、趨勢預測） 8. **系統設定區塊**（權限設定、規則管理、通知設定、自動化規則） **🎨 視覺設計要求：** - 使用深藍色背景 + 灰色點綴（管理專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時數據更新 - 批量管理操作 - 自動化規則設定 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 管理工具特色：** - 智能內容審核 - 自動化用戶管理 - 即時數據分析 - 批量操作功能 - 權限管理系統 - 備份還原功能 **📊 功能類型參考：** - 基本管理：免費 - 進階功能：NT$199-499/月 - 專業版：NT$499-1,
    299/月 - 企業版：NT$1,
    299-2,
    999/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'goal-tracking-html': `請幫我建立一個2025年現代化目標追蹤工具（HTML方案），採用最新設計趨勢和目標管理體驗優化： **🎯 專案需求：** - 目標用戶：個人用戶、目標導向者、習慣養成需求者、自我提升愛好者 - 核心功能：目標設定、進度追蹤、習慣養成、成就系統 - 設計風格：激勵清晰、現代簡約、使用橙色和紫色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 激勵清晰風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調激勵和成就感 - AI輔助目標管理，智能分析和建議功能 - 包容性設計，考慮不同目標和習慣需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、目標、進度、習慣、成就、統計） 2. **激勵CSS樣式**（激勵設計、進度視覺化、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（目標概覽、進度統計、快速設定、CTA按鈕） 5. **目標設定區塊**（標題、描述、期限、類別、優先級） 6. **進度追蹤區塊**（完成率、里程碑、時間軸、視覺化圖表） 7. **習慣養成區塊**（每日打卡、連續天數、提醒、習慣分析） 8. **成就系統區塊**（徽章、等級、獎勵、分享功能） **🎨 視覺設計要求：** - 使用橙色背景 + 紫色點綴（激勵清晰配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 進度視覺化 - 習慣打卡系統 - 成就分享功能 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 目標追蹤特色：** - 智能目標建議 - 進度視覺化 - 習慣養成系統 - 成就徽章系統 - 社交分享功能 - 個性化激勵 **📊 功能類型參考：** - 基本追蹤：免費 - 進階分析：NT$99-299/月 - 習慣養成：NT$149-399/月 - 專業版：NT$299-599/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'goal-tracking-habit-html': `請幫我建立一個2025年現代化目標追蹤習慣養成型網站（HTML方案），採用最新設計趨勢和習慣養成體驗優化： **🎯 專案需求：** - 目標用戶：習慣養成者、自律追求者、生活改善者、自我提升愛好者 - 核心功能：習慣追蹤、連擊記錄、習慣分析、激勵系統 - 設計風格：激勵簡潔、成就感導向、使用綠色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 激勵簡潔風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調激勵和成就感 - AI輔助習慣養成，智能分析和建議功能 - 包容性設計，考慮不同習慣和目標需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、習慣列表、連擊記錄、習慣分析、激勵中心） 2. **激勵CSS樣式**（激勵設計、連擊動畫、進度條、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（習慣概覽、連擊統計、快速記錄、CTA按鈕） 5. **習慣追蹤區塊**（習慣建立、每日記錄、完成狀態、智能提醒） 6. **連擊記錄區塊**（連續天數、最佳記錄、里程碑、成就展示） 7. **習慣分析區塊**（完成率、趨勢分析、弱點識別、改善建議） 8. **激勵系統區塊**（成就徽章、獎勵機制、社交分享、激勵訊息） **🎨 視覺設計要求：** - 使用綠色背景 + 金色點綴（激勵簡潔配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 習慣打卡系統 - 連擊動畫效果 - 進度視覺化 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 習慣養成特色：** - 智能習慣建議 - 個性化提醒系統 - 連擊成就系統 - 習慣分析報告 - 社群激勵功能 - 科學習慣建議 **📱 功能類型參考：** - 基本習慣：免費 - 進階分析：NT$99-299/月 - 專業版：NT$199-499/月 - 社群版：NT$299-799/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'goal-tracking-team-html': `請幫我建立一個2025年現代化目標追蹤團隊目標型網站（HTML方案），採用最新設計趨勢和團隊協作體驗優化： **🎯 專案需求：** - 目標用戶：團隊、小組、專案團隊、協作組織、企業團隊 - 核心功能：團隊目標、協作追蹤、進度同步、團隊激勵 - 設計風格：協作團隊、激勵導向、使用藍色和橙色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 協作團隊風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調團隊協作和激勵 - AI輔助團隊管理，智能分析和建議功能 - 包容性設計，考慮不同團隊規模和協作需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、團隊目標、協作看板、進度同步、團隊激勵） 2. **協作CSS樣式**（協作設計、看板介面、團隊元素、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（團隊概覽、目標進度、快速協作、CTA按鈕） 5. **團隊目標區塊**（目標設定、責任分配、里程碑規劃、目標分解） 6. **協作追蹤區塊**（任務分配、進度更新、協作記錄、即時同步） 7. **進度同步區塊**（即時更新、狀態同步、通知系統、進度視覺化） 8. **團隊激勵區塊**（團隊成就、個人貢獻、激勵機制、獎勵系統） **🎨 視覺設計要求：** - 使用藍色背景 + 橙色點綴（協作團隊配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時協作更新 - 團隊看板管理 - 進度同步系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 團隊目標特色：** - 智能目標分解 - 即時協作追蹤 - 團隊進度同步 - 個人貢獻分析 - 團隊激勵系統 - 協作分析報告 **📊 功能類型參考：** - 基本團隊：免費 - 進階協作：NT$199-499/月 - 專業版：NT$499-1,
    299/月 - 企業版：NT$1,
    299-2,
    999/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'event-management-html': `請幫我建立一個2025年現代化活動管理平台（HTML方案），採用最新設計趨勢和活動管理體驗優化： **🎯 專案需求：** - 目標用戶：活動主辦方、參與者、活動策劃師、企業活動管理者 - 核心功能：活動發布、報名管理、票務系統、活動統計 - 設計風格：活潑吸引、現代簡約、使用紅色和黃色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 活潑吸引風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調活動體驗和互動性 - AI輔助活動管理，智能推薦和數據分析 - 包容性設計，考慮不同活動類型和需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、活動、報名、票務、統計、管理） 2. **活潑CSS樣式**（活潑設計、吸引力強、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（活動概覽、熱門活動、快速報名、CTA按鈕） 5. **活動展示區塊**（標題、描述、時間、地點、票價、活動詳情） 6. **報名系統區塊**（個人資訊、票種選擇、付款、確認流程） 7. **票務管理區塊**（票券生成、驗證、統計、電子票券） 8. **活動統計區塊**（報名人數、收入、參與度、數據分析） **🎨 視覺設計要求：** - 使用紅色背景 + 黃色點綴（活潑吸引配色） - 圓角設計和動感陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Roboto） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 活動篩選和搜尋 - 線上報名系統 - 票務驗證 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 活動管理特色：** - 智能活動推薦 - 即時報名統計 - 電子票務系統 - 活動數據分析 - 社交分享功能 - 活動提醒系統 **💰 活動類型參考：** - 免費活動：基本功能免費 - 付費活動：平台費2-5% - 企業活動：NT$1,
    000-5,
    000/場 - 大型活動：NT$5,
    000-20,
    000/場 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'custom-html': `請幫我建立一個2025年現代化客製化網站（HTML方案），採用最新設計趨勢和個性化體驗優化： **🎯 專案需求：** - 目標用戶：根據您的需求自訂 - 核心功能：根據您的需求自訂 - 設計風格：根據您的需求自訂 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 個性化設計風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調用戶體驗和個性化 - AI輔助功能整合，智能推薦和自動化 - 包容性設計，考慮不同用戶需求和使用情境 **📱 請依序實作：** 1. **現代化HTML結構**（根據需求設計導航和區塊） 2. **客製化CSS樣式**（根據需求設計色彩和佈局、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **核心功能實作區塊**（根據需求實作主要功能） 5. **互動功能區塊**（根據需求實作用戶互動） 6. **表單處理區塊**（根據需求實作表單驗證和提交） 7. **內容管理區塊**（根據需求實作內容展示） 8. **SEO優化區塊**（根據需求實作搜尋引擎優化） **🎨 視覺設計要求：** - 根據需求自訂配色方案 - 圓角設計和現代陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 根據需求自訂互動功能 - 表單驗證和處理 - 內容篩選和搜尋 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 客製化特色：** - 個性化設計方案 - 智能功能整合 - 用戶體驗優化 - 數據分析整合 - 社交媒體整合 - 多語言支援 **💰 開發類型參考：** - 基本版：NT$5,
    000-15,
    000 - 進階版：NT$15,
    000-35,
    000 - 專業版：NT$35,
    000-80,
    000 - 企業版：NT$80,
    000-200,
    000 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'event-management-ticketing-html': `請幫我建立一個2025年現代化活動管理票務銷售型網站（HTML方案），採用最新設計趨勢和票務銷售體驗優化： **🎯 專案需求：** - 目標用戶：票務銷售者、活動主辦方、票務代理商、票務平台運營者 - 核心功能：票務銷售、座位選擇、付款處理、票券管理 - 設計風格：商業專業、信任導向、使用深藍色和金色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 商業專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調信任和便利性 - AI輔助票務銷售，智能推薦和動態定價 - 包容性設計，考慮不同購票需求和偏好 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、票務銷售、座位選擇、付款處理、票券管理） 2. **專業CSS樣式**（商業設計、座位圖、付款介面、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（活動概覽、票務資訊、快速購票、CTA按鈕） 5. **票務銷售區塊**（票價設定、座位圖、票券類型、動態定價） 6. **座位選擇區塊**（互動座位圖、座位狀態、選擇確認、視覺化選擇） 7. **付款處理區塊**（多種付款方式、安全驗證、收據生成、即時確認） 8. **票券管理區塊**（票券生成、驗證系統、退票處理、電子票券） **🎨 視覺設計要求：** - 使用深藍色背景 + 金色點綴（商業專業配色） - 圓角設計和權威陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 互動座位選擇 - 即時付款處理 - 票券驗證系統 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 票務銷售特色：** - 智能座位推薦 - 動態票價調整 - 即時庫存顯示 - 多種付款方式 - 電子票券管理 - 銷售分析報告 **💰 票務服務參考：** - 票務銷售：3-8%佣金 - 付款手續費：2-3% - 退票手續費：5-10% - 平台服務費：NT$50-100/張 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'event-management-corporate-html': `請幫我建立一個2025年現代化活動管理企業活動型網站（HTML方案），採用最新設計趨勢和企業活動管理體驗優化： **🎯 專案需求：** - 目標用戶：企業活動主辦方、HR部門、企業培訓師、企業管理者 - 核心功能：企業活動、員工管理、培訓課程、活動分析 - 設計風格：企業專業、效率導向、使用深灰色和藍色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 企業專業風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調效率和專業管理 - AI輔助企業活動管理，智能分析和建議功能 - 包容性設計，考慮不同企業規模和活動需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、企業活動、員工管理、培訓課程、活動分析） 2. **企業CSS樣式**（專業設計、企業風格、管理介面、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（企業概覽、活動統計、快速管理、CTA按鈕） 5. **企業活動區塊**（會議、培訓、團建、年會、活動規劃） 6. **員工管理區塊**（員工資料、權限設定、參與記錄、部門管理） 7. **培訓課程區塊**（課程安排、講師管理、學習追蹤、證書管理） 8. **活動分析區塊**（參與率、滿意度、效果評估、數據視覺化） **🎨 視覺設計要求：** - 使用深灰色背景 + 藍色點綴（企業專業配色） - 圓角設計和清晰陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 即時活動管理 - 員工權限設定 - 培訓進度追蹤 - 表單驗證 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 企業活動特色：** - 智能活動規劃 - 自動化員工管理 - 培訓課程追蹤 - 活動效果分析 - 權限管理系統 - 企業數據報告 **📊 功能類型參考：** - 基本管理：免費 - 進階功能：NT$299-799/月 - 專業版：NT$799-1,
    999/月 - 企業版：NT$1,
    999-4,
    999/月 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-brand-html': `請幫我建立一個現代化個人形象基本展示型網站（HTML方案），採用當今最流行的一頁式微網站設計： **🎯 專案需求：** - 目標用戶：專業人士、自由工作者、設計師、攝影師、顧問、企業家 - 核心功能：個人品牌展示、專業簡介、服務項目、聯絡方式 - 設計風格：現代極簡、專業商務、使用漸層背景和玻璃質感效果 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 現代化設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 漸層背景 + 玻璃質感（Glassmorphism）效果 - 現代字體（Inter、Poppins）和微互動動畫 - 深色/淺色主題切換功能 - 平滑滾動和視差效果 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、關於我、服務項目、作品展示、聯絡方式） 2. **時尚CSS樣式**（CSS Grid/Flexbox佈局、漸層背景、玻璃質感、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（個人照片、姓名、職稱、一鍵聯絡按鈕、背景動畫） 5. **關於我區塊**（專業簡介、核心價值、個人特色、統計數據） 6. **服務項目展示**（服務卡片、價格方案、特色說明、CTA按鈕） 7. **作品集展示**（作品卡片、分類篩選、燈箱效果、詳細描述） 8. **聯絡資訊區塊**（聯絡表單、社群媒體連結、地圖嵌入、QR Code） **🎨 視覺設計要求：** - 使用現代漸層色彩（藍紫色系 + 金色點綴） - 圓角設計和陰影效果 - 卡片式佈局和網格系統 - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 主題切換（深色/淺色） - 作品集篩選功能 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2024年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-brand-portfolio-html': `請幫我建立一個2025年現代化個人形象作品集型網站（HTML方案），採用最新設計趨勢和創意視覺效果： **🎯 專案需求：** - 目標用戶：設計師、攝影師、藝術家、創作者、視覺工作者、UI/UX設計師 - 核心功能：作品集展示、個人品牌、創意服務、聯絡方式 - 設計風格：創意極簡、視覺衝擊力、使用深色背景和霓虹色點綴 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 深色模式 + 霓虹色點綴（Cyberpunk風格） - 玻璃質感（Glassmorphism）+ 新擬態設計（Neumorphism） - 早期現代主義回歸，融入新藝術風格元素 - AI輔助創意設計，動態背景和粒子效果 - 包容性設計，考慮不同用戶群體需求 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、作品集、關於我、服務項目、聯絡方式） 2. **創意CSS樣式**（深色主題、霓虹效果、玻璃質感、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（個人照片、姓名、創意職稱、動態背景、CTA按鈕） 5. **作品集展示**（作品卡片、分類篩選、燈箱效果、詳細描述、互動動畫） 6. **關於我區塊**（創作故事、專業經歷、成就展示、時間軸、統計數據） 7. **服務項目展示**（創意服務、價格方案、特色說明、作品預覽） 8. **聯絡資訊區塊**（聯絡表單、社群媒體連結、地圖嵌入、作品下載） **🎨 視覺設計要求：** - 使用深色背景 + 霓虹色點綴（紫色、藍色、綠色、粉色） - 圓角設計和發光效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Space Grotesk） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 作品集篩選和分類 - 燈箱圖片展示 - 聯絡表單驗證 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 特殊效果：** - 粒子背景動畫 - 滑鼠跟隨效果 - 打字機效果 - 滾動視差效果 - 圖片懶加載 - 音效反饋（可選） 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`,
    'personal-brand-consultant-html': `請幫我建立一個2025年現代化個人形象顧問服務型網站（HTML方案），採用最新商務設計趨勢和專業視覺效果： **🎯 專案需求：** - 目標用戶：商業顧問、財務顧問、法律顧問、企業教練、專業服務提供者 - 核心功能：服務介紹、專業認證、客戶見證、預約諮詢、信任建立 - 設計風格：專業商務、權威信任、現代簡約，使用深藍色和銀色配色 - 技術要求：純HTML + CSS + JavaScript，完全響應式設計 **🚀 2025年最新設計特色：** - 一頁式滾動設計，流暢的頁面轉場動畫 - 專業商務風格 + 玻璃質感（Glassmorphism）效果 - 深色/淺色主題切換，適應不同使用情境 - 人本數位化設計，強調人性化互動體驗 - AI輔助專業展示，動態數據和統計圖表 - 包容性設計，考慮不同年齡和文化背景 **📱 請依序實作：** 1. **現代化HTML結構**（Hero區塊、服務介紹、關於我、客戶見證、聯絡方式） 2. **專業CSS樣式**（商務設計、權威感、信任元素、動畫效果） 3. **完全響應式設計**（Mobile-first、平板、桌面完美適配） 4. **Hero首頁區塊**（專業照片、姓名、職稱、核心價值、CTA按鈕） 5. **服務介紹區塊**（服務項目、專業領域、服務流程、價格方案） 6. **關於我區塊**（專業背景、認證資格、工作經驗、成就展示） 7. **客戶見證區塊**（客戶評價、成功案例、推薦信、合作夥伴） 8. **聯絡資訊區塊**（預約表單、聯絡方式、地圖嵌入、履歷下載） **🎨 視覺設計要求：** - 使用深藍色背景 + 銀色/金色點綴 - 圓角設計和專業陰影效果 - 卡片式佈局和網格系統 - 現代字體（Inter、Poppins、Source Sans Pro） - 微互動和懸停效果 - 載入動畫和頁面轉場 **💡 互動功能：** - 平滑滾動導航 - 服務項目篩選 - 價格計算器 - 預約表單驗證 - 客戶見證輪播 - 社交媒體分享 - 回到頂部按鈕 - 深色/淺色主題切換 **🌟 專業特色：** - 動態統計數據展示 - 專業證照展示 - 客戶成功案例 - 服務流程圖解 - 信任指標展示 - 專業背景時間軸 **📊 商務功能：** - 線上預約系統 - 服務價格計算 - 客戶評價系統 - 聯絡表單驗證 - 專業履歷下載 - 合作夥伴展示 **💰 服務類型參考：** - 商業顧問：NT$3,
    000-8,
    000/小時 - 職涯教練：NT$2,
    000-5,
    000/小時 - 專業講師：NT$10,
    000-50,
    000/場次 - 一對一諮詢：NT$1,
    500-4,
    000/小時 請提供完整的現代化HTML、CSS、JavaScript程式碼，確保符合2025年最新設計趨勢，可直接在瀏覽器中完美運行。`
}
;
document.addEventListener('click',
    function(e){
    if (e.target.classList.contains('copy-template-btn')){
    const e.target.getAttribute('data-template');
if (templateType && templateCommands[templateType]){
    copyTemplateCommand(templateCommands[templateType],
    e.target);

}

}
else 
if (e.target.classList.contains('copy-html-btn')){
    const e.target.getAttribute('data-template');
if (templateType && htmlTemplateCommands[templateType]){
    copyTemplateCommand(htmlTemplateCommands[templateType],
    e.target);

}

}

}
);
function copyTemplateCommand(command,
    button){
    if (navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(command).then(()=>{
    showCopySuccess(button);

}
).catch(err=>{
    fallbackCopy(command,
    button);

}
);

}
else{
    fallbackCopy(command,
    button);

}

}
function fallbackCopy(command,
    button){
    const document.createElement('textarea');
textArea.value=command;
textArea.style.position='fixed';
textArea.style.left='-999999px';
textArea.style.top='-999999px';
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try{
    document.execCommand('copy');
showCopySuccess(button);

}
catch(err){
    showCopyError(button);

}
document.body.removeChild(textArea);

}
function showCopySuccess(button){
    const button.textContent;
const button.style.background || '';
button.textContent='✅ 已複製！';
button.style.background='linear-gradient(135deg,
    #48bb78 0%,
    #38a169 100%)';
button.disabled=true;
const document.createElement('div');
successToast.className='copy-success';
successToast.textContent='指令已複製到剪貼簿！';
document.body.appendChild(successToast);
setTimeout(()=>{
    button.textContent=originalText;
button.style.background=originalBackground;
button.disabled=false;
if (successToast.parentNode){
    successToast.parentNode.removeChild(successToast);

}

}
,
    2000);

}

}
function initializeFeatureCombiner(){
    const document.getElementById('featureCombinerModal');
const document.getElementById('openFeatureCombiner');
const document.querySelector('.close');
const document.getElementById('copyGeneratedCommand');
const document.getElementById('commandPreview');
const document.getElementById('targetUsers');
const document.getElementById('customTargetUsers');
const {
    'user-auth': '用戶註冊登入系統（支援多種登入方式、密碼重設、帳戶驗證）',
    'user-profile': '個人資料管理（個人資訊編輯、頭像上傳、偏好設定）',
    'search': '搜尋功能（全文搜尋、篩選器、搜尋建議、搜尋歷史）',
    'notifications': '通知系統（即時通知、郵件通知、推播通知、通知設定）',
    'file-upload': '檔案上傳（多格式支援、檔案預覽、雲端儲存、檔案管理）',
    'email-system': '郵件系統（郵件發送、模板管理、郵件追蹤、自動回覆）',
    'calendar': '日曆功能（事件管理、提醒通知、日曆同步、會議排程）',
    'bookmark': '書籤收藏（網頁收藏、分類管理、標籤系統、分享功能）',
    'payment': '線上付款（多種付款方式、安全加密、發票開立、退款處理）',
    'inventory': '庫存管理（商品庫存、進銷存、庫存警報、庫存報表）',
    'orders': '訂單管理（訂單建立、訂單追蹤、訂單狀態、訂單歷史）',
    'catalog': '商品目錄（商品展示、分類管理、商品搜尋、商品比較）',
    'subscription': '訂閱服務（定期付款、會員管理、方案選擇、自動續費）',
    'coupons': '優惠券系統（折扣碼、優惠活動、使用限制、統計分析）',
    'affiliate': '聯盟行銷（推薦連結、佣金計算、推廣追蹤、分潤管理）',
    'loyalty': '會員積點（積點累積、兌換系統、等級管理、專屬優惠）',
    'chat': '即時聊天（一對一聊天、群組聊天、檔案分享、聊天記錄）',
    'comments': '評論系統（評論發布、評論回覆、評論管理、評論審核）',
    'reviews': '評價系統（評分功能、評價展示、評價統計、評價管理）',
    'social': '社群分享（社群媒體分享、分享統計、分享追蹤、病毒式傳播）',
    'forum': '討論區（主題討論、分類管理、用戶互動、內容審核）',
    'live-stream': '直播功能（即時串流、互動聊天、錄影回放、觀眾管理）',
    'poll': '投票系統（問卷調查、投票統計、結果分析、匿名投票）',
    'gamification': '遊戲化元素（成就系統、排行榜、挑戰任務、獎勵機制）',
    'dashboard': '數據儀表板（關鍵指標、圖表展示、即時數據、自訂儀表板）',
    'reports': '報表生成（自動報表、自訂報表、報表排程、報表分享）',
    'tracking': '行為追蹤（用戶行為、點擊追蹤、轉換追蹤、漏斗分析）',
    'charts': '圖表視覺化（多種圖表、互動圖表、圖表匯出、圖表分享）',
    'heatmap': '熱力圖分析（點擊熱力圖、滾動追蹤、注意力分析、優化建議）',
    'ab-testing': 'A/B測試（版本比較、統計分析、結果評估、自動化測試）',
    'conversion': '轉換追蹤（轉換路徑、轉換率分析、優化建議、ROI計算）',
    'funnel': '漏斗分析（用戶流程、轉換階段、流失分析、優化機會）',
    'admin': '管理後台（系統管理、用戶管理、內容管理、設定管理）',
    'permissions': '權限管理（角色設定、權限控制、存取控制、安全設定）',
    'logs': '操作日誌（操作記錄、審計日誌、錯誤日誌、效能日誌）',
    'backup': '資料備份（自動備份、手動備份、備份還原、備份管理）',
    'cms': '內容管理（文章編輯、頁面管理、媒體庫、版本控制）',
    'workflow': '工作流程（審核流程、自動化任務、狀態管理、通知提醒）',
    'api-management': 'API管理（API文檔、版本控制、使用限制、監控分析）',
    'monitoring': '系統監控（效能監控、錯誤追蹤、資源使用、警報通知）',
    'blog': '部落格系統（文章發布、分類管理、標籤系統、SEO優化）',
    'media-gallery': '媒體庫（圖片管理、影片管理、檔案分類、批量處理）',
    'video-player': '影片播放器（自適應播放、字幕支援、播放控制、統計追蹤）',
    'image-editor': '圖片編輯器（裁剪調整、濾鏡效果、文字添加、批量處理）',
    'document-viewer': '文件檢視器（多格式支援、註解功能、下載分享、權限控制）',
    'rss-feed': 'RSS訂閱（內容聚合、自動更新、訂閱管理、推送通知）',
    'seo-tools': 'SEO工具（關鍵字分析、內容優化、排名追蹤、報告生成）',
    'two-factor': '雙重驗證（簡訊驗證、APP驗證、備用碼、安全設定）',
    'encryption': '資料加密（傳輸加密、儲存加密、金鑰管理、合規性）',
    'captcha': '驗證碼（圖片驗證、reCAPTCHA、行為驗證、防機器人）',
    'rate-limiting': '速率限制（API限制、請求頻率、IP封鎖、動態調整）',
    'audit-trail': '審計追蹤（操作記錄、資料變更、安全事件、合規報告）',
    'firewall': '防火牆（IP過濾、規則管理、攻擊防護、即時監控）',
    'vulnerability': '漏洞掃描（安全檢測、弱點分析、修復建議、定期掃描）',
    'compliance': '合規檢查（法規遵循、資料保護、隱私政策、稽核報告）',
    'social-login': '社群登入（Google、Facebook、LINE、Apple ID登入）',
    'payment-gateway': '金流整合（Stripe、PayPal、綠界、藍新金流）',
    'map-service': '地圖服務（Google Maps、位置搜尋、路線規劃、地點標記）',
    'sms-service': '簡訊服務（驗證碼、通知簡訊、行銷簡訊、國際簡訊）',
    'cloud-storage': '雲端儲存（AWS S3、Google Drive、Dropbox、檔案同步）',
    'ai-service': 'AI服務（機器學習、自然語言處理、圖像識別、推薦系統）',
    'webhook': 'Webhook（事件通知、資料同步、第三方整合、自動化觸發）',
    'api-gateway': 'API閘道（請求路由、認證授權、限流控制、監控分析）',
    'ai-chatbot': 'AI聊天機器人（智能對話、多輪對話、上下文理解、情感分析）',
    'ai-content-generation': 'AI內容生成（文章撰寫、產品描述、標題優化、創意文案）',
    'ai-translation': 'AI翻譯服務（多語言翻譯、即時翻譯、文檔翻譯、語音翻譯）',
    'ai-image-generation': 'AI圖像生成（文字轉圖片、圖片編輯、風格轉換、圖像優化）',
    'ai-voice-assistant': 'AI語音助手（語音識別、語音合成、語音指令、語音搜索）',
    'ai-code-assistant': 'AI程式碼助手（代碼生成、代碼審查、錯誤修復、代碼優化）',
    'ai-data-analysis': 'AI數據分析（智能報表、趨勢預測、異常檢測、數據可視化）',
    'ai-personalization': 'AI個人化（個性化推薦、用戶畫像、行為分析、智能匹配）',
    'ai-automation': 'AI自動化（工作流程自動化、智能排程、自動回覆、任務分配）',
    'ai-search': 'AI智能搜索（語義搜索、智能推薦、搜索優化、相關性排序）',
    'pwa': 'PWA支援（離線功能、安裝提示、推播通知、原生體驗）',
    'push-notification': '推播通知（即時通知、分群推送、個性化內容、統計分析）',
    'offline-mode': '離線模式（資料快取、離線編輯、同步機制、衝突解決）',
    'geolocation': '地理位置（位置獲取、地圖顯示、距離計算、位置分享）',
    'camera': '相機功能（拍照上傳、即時預覽、圖片處理、權限管理）',
    'qr-scanner': 'QR掃描（條碼掃描、連結跳轉、資訊識別、歷史記錄）',
    'touch-gestures': '手勢操作（滑動、縮放、旋轉、手勢識別）',
    'device-sync': '裝置同步（多裝置登入、資料同步、狀態同步、離線同步）'
}
;
const {
    'user-auth': 5,
    'user-profile': 4,
    'search': 5,
    'notifications': 4,
    'file-upload': 4,
    'email-system': 3,
    'calendar': 3,
    'bookmark': 2,
    'payment': 5,
    'inventory': 4,
    'orders': 5,
    'catalog': 4,
    'subscription': 4,
    'coupons': 3,
    'affiliate': 3,
    'loyalty': 3,
    'chat': 4,
    'comments': 4,
    'reviews': 4,
    'social': 5,
    'forum': 3,
    'live-stream': 3,
    'poll': 2,
    'gamification': 2,
    'dashboard': 5,
    'reports': 4,
    'tracking': 5,
    'charts': 4,
    'heatmap': 3,
    'ab-testing': 4,
    'conversion': 4,
    'funnel': 3,
    'admin': 5,
    'permissions': 4,
    'logs': 4,
    'backup': 4,
    'cms': 4,
    'workflow': 3,
    'api-management': 3,
    'monitoring': 4,
    'blog': 3,
    'media-gallery': 3,
    'video-player': 3,
    'image-editor': 2,
    'document-viewer': 2,
    'rss-feed': 2,
    'seo-tools': 4,
    'two-factor': 4,
    'encryption': 5,
    'captcha': 4,
    'rate-limiting': 4,
    'audit-trail': 3,
    'firewall': 4,
    'vulnerability': 3,
    'compliance': 3,
    'social-login': 4,
    'payment-gateway': 5,
    'map-service': 3,
    'sms-service': 3,
    'cloud-storage': 4,
    'ai-service': 5,
    'webhook': 3,
    'api-gateway': 3,
    'ai-chatbot': 5,
    'ai-content-generation': 4,
    'ai-translation': 4,
    'ai-image-generation': 3,
    'ai-voice-assistant': 3,
    'ai-code-assistant': 4,
    'ai-data-analysis': 4,
    'ai-personalization': 5,
    'ai-automation': 4,
    'ai-search': 5,
    'pwa': 4,
    'push-notification': 4,
    'offline-mode': 3,
    'geolocation': 3,
    'camera': 2,
    'qr-scanner': 2,
    'touch-gestures': 2,
    'device-sync': 3
}
;
const {
    'user-auth': '使用 JWT 或 Session 進行身份驗證，整合 OAuth 2.0 支援第三方登入',
    'user-profile': '建立用戶資料表，支援檔案上傳和資料驗證',
    'search': '整合 Elasticsearch 或 Algolia 提供強大的搜尋功能',
    'notifications': '使用 WebSocket 或 Server-Sent Events 實現即時通知',
    'file-upload': '整合雲端儲存服務，支援多格式檔案上傳和預覽',
    'email-system': '使用 SendGrid 或 AWS SES 實現郵件發送和模板管理',
    'calendar': '整合 Google Calendar API 或自建日曆系統',
    'bookmark': '建立書籤資料模型，支援分類和標籤管理',
    'payment': '整合 Stripe、PayPal 或本地金流服務，確保 PCI 合規',
    'inventory': '建立庫存管理系統，包含進銷存邏輯和庫存警報',
    'orders': '設計訂單狀態機，支援訂單生命週期管理',
    'catalog': '建立商品資料模型，支援多層級分類和屬性管理',
    'subscription': '設計訂閱計費系統，支援定期付款和方案管理',
    'coupons': '建立優惠券系統，支援折扣碼生成和使用追蹤',
    'affiliate': '設計聯盟行銷系統，支援推薦連結和佣金計算',
    'loyalty': '建立積點系統，支援積點累積和兌換機制',
    'chat': '使用 Socket.io 或 WebRTC 實現即時通訊功能',
    'comments': '建立評論系統，支援嵌套回覆和內容審核',
    'reviews': '設計評分系統，支援多維度評分和評價分析',
    'social': '整合社群媒體 API，實現一鍵分享和追蹤功能',
    'forum': '建立討論區系統，支援主題分類和用戶互動',
    'live-stream': '整合 WebRTC 或 CDN 服務實現即時串流',
    'poll': '建立投票系統，支援問卷設計和結果統計',
    'gamification': '設計遊戲化系統，支援成就、排行榜和獎勵機制',
    'dashboard': '使用 Chart.js 或 D3.js 建立互動式儀表板',
    'reports': '建立報表引擎，支援多種格式和自動化生成',
    'tracking': '整合 Google Analytics 或自建追蹤系統',
    'charts': '使用資料視覺化庫建立豐富的圖表功能',
    'heatmap': '整合 Hotjar 或自建熱力圖分析系統',
    'ab-testing': '建立 A/B 測試框架，支援版本比較和統計分析',
    'conversion': '設計轉換追蹤系統，支援漏斗分析和優化建議',
    'funnel': '建立漏斗分析工具，支援用戶流程追蹤',
    'admin': '建立管理後台，提供完整的系統管理功能',
    'permissions': '設計 RBAC 權限模型，實現細粒度權限控制',
    'logs': '建立日誌系統，支援結構化日誌和日誌分析',
    'backup': '設計備份策略，支援增量備份和災難恢復',
    'cms': '建立內容管理系統，支援文章編輯和版本控制',
    'workflow': '設計工作流程引擎，支援審核流程和自動化任務',
    'api-management': '建立 API 管理平台，支援文檔、版本控制和監控',
    'monitoring': '整合監控工具，支援效能監控和警報通知',
    'blog': '建立部落格系統，支援文章發布和 SEO 優化',
    'media-gallery': '建立媒體庫，支援圖片、影片管理和批量處理',
    'video-player': '整合影片播放器，支援自適應播放和統計追蹤',
    'image-editor': '整合圖片編輯庫，支援裁剪、濾鏡和文字添加',
    'document-viewer': '建立文件檢視器，支援多格式文件和註解功能',
    'rss-feed': '建立 RSS 訂閱系統，支援內容聚合和自動更新',
    'seo-tools': '整合 SEO 分析工具，支援關鍵字分析和排名追蹤',
    'two-factor': '整合 TOTP 或 SMS 驗證，實現雙重驗證功能',
    'encryption': '使用 AES 加密和 HTTPS 確保資料傳輸和儲存安全',
    'captcha': '整合 reCAPTCHA 或 hCaptcha 防止機器人攻擊',
    'rate-limiting': '使用 Redis 實現 API 速率限制和 IP 封鎖',
    'audit-trail': '建立審計日誌系統，記錄所有敏感操作',
    'firewall': '配置 WAF 和防火牆規則，防護常見攻擊',
    'vulnerability': '整合安全掃描工具，定期檢測系統弱點',
    'compliance': '建立合規檢查系統，確保符合 GDPR、CCPA 等法規',
    'social-login': '整合 OAuth 2.0 提供者，支援多平台登入',
    'payment-gateway': '整合多個金流服務，提供統一的付款介面',
    'map-service': '整合 Google Maps API 提供地圖和位置服務',
    'sms-service': '整合 Twilio 或本地簡訊服務提供簡訊功能',
    'cloud-storage': '整合 AWS S3、Google Cloud 等雲端儲存服務',
    'ai-service': '整合 OpenAI、Google AI 等服務提供 AI 功能',
    'webhook': '建立 Webhook 系統，支援事件通知和資料同步',
    'api-gateway': '使用 Kong 或 AWS API Gateway 管理 API 流量',
    'ai-chatbot': '整合 OpenAI GPT、Claude 或本地 LLM，實現智能對話和上下文理解',
    'ai-content-generation': '使用 GPT-4、Claude 或 Gemini 進行內容創作和文案優化',
    'ai-translation': '整合 Google Translate API、DeepL 或 Azure Translator 提供多語言支援',
    'ai-image-generation': '使用 DALL-E、Midjourney API 或 Stable Diffusion 生成和編輯圖像',
    'ai-voice-assistant': '整合 Speech-to-Text 和 Text-to-Speech API 實現語音交互',
    'ai-code-assistant': '使用 GitHub Copilot API 或 CodeT5 提供代碼生成和審查功能',
    'ai-data-analysis': '整合 Pandas、NumPy 和機器學習庫進行智能數據分析和預測',
    'ai-personalization': '使用協同過濾和深度學習算法實現個性化推薦系統',
    'ai-automation': '建立基於 AI 的工作流程引擎，實現智能任務分配和自動化',
    'ai-search': '使用 Elasticsearch 和向量搜索實現語義搜索和智能推薦',
    'pwa': '使用 Service Worker 和 Web App Manifest 實現 PWA',
    'push-notification': '整合 FCM 或 Web Push API 實現推播通知',
    'offline-mode': '使用 IndexedDB 和 Service Worker 實現離線功能',
    'geolocation': '使用 Geolocation API 獲取用戶位置資訊',
    'camera': '使用 getUserMedia API 實現相機拍照功能',
    'qr-scanner': '整合 QR 碼掃描庫，支援條碼識別功能',
    'touch-gestures': '使用 Hammer.js 或自建手勢識別系統',
    'device-sync': '建立跨裝置同步機制，支援即時資料同步'
}
;
function initializeStarRatings(){
    const document.querySelectorAll('.feature-option');
featureOptions.forEach(option=>{
    const option.querySelector('input[type="checkbox"]');
const checkbox.dataset.feature;
const featureRatings[feature] || 1;
const option.childNodes[option.childNodes.length - 1];
if (textNode && textNode.nodeType===Node.TEXT_NODE){
    const textNode.textContent.trim();
textNode.remove();
const document.createElement('span');
nameSpan.className='feature-name';
nameSpan.textContent=featureName;
const document.createElement('span');
starsSpan.className='feature-stars';
starsSpan.setAttribute('data-rating',
    rating);
starsSpan.textContent='★'.repeat(rating)+ '☆'.repeat(5 - rating);
option.appendChild(nameSpan);
option.appendChild(starsSpan);

}

}
);

}
let false;
function initializeFiltering(){
    const document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn=>{
    btn.addEventListener('click',
    ()=>{
    filterBtns.forEach(b=> b.classList.remove('active'));
btn.classList.add('active');
const btn.dataset.filter;
filterFeatures(filter);

}
);

}
);

}
function initializeSorting(){
    const document.getElementById('toggleSort');
sortBtn.addEventListener('click',
    ()=>{
    isSorted=!isSorted;
sortBtn.classList.toggle('active',
    isSorted);
if (isSorted){
    sortAllFeatures();

}
else{
    resetSorting();

}

}
);

}
function sortAllFeatures(){
    const document.querySelectorAll('.category-section');
categorySections.forEach(section=>{
    const Array.from(section.querySelectorAll('.feature-option'));
featureOptions.sort((a,
    b)=>{
    const parseInt(a.querySelector('.feature-stars')?.getAttribute('data-rating')|| 0);
const parseInt(b.querySelector('.feature-stars')?.getAttribute('data-rating')|| 0);
if (ratingA !==ratingB){
    return ratingB - ratingA;

}
const a.querySelector('.feature-name')?.textContent || '';
const b.querySelector('.feature-name')?.textContent || '';
return nameA.localeCompare(nameB,
    'zh-TW');

}
);
const section.querySelector('.feature-options');
featureOptions.forEach(option=>{
    container.appendChild(option);

}
);

}
);

}
function resetSorting(){
    const document.querySelectorAll('.category-section');
categorySections.forEach(section=>{
    const Array.from(section.querySelectorAll('.feature-option'));
featureOptions.sort((a,
    b)=>{
    const a.querySelector('input[type="checkbox"]').dataset.feature;
const b.querySelector('input[type="checkbox"]').dataset.feature;
return featureA.localeCompare(featureB);

}
);
const section.querySelector('.feature-options');
featureOptions.forEach(option=>{
    container.appendChild(option);

}
);

}
);

}
function filterFeatures(rating){
    const document.querySelectorAll('.feature-option');
featureOptions.forEach(option=>{
    const option.querySelector('.feature-stars');
if (stars){
    const stars.getAttribute('data-rating');
if (rating==='all' || optionRating===rating){
    option.style.display='flex';

}
else{
    option.style.display='none';

}

}

}
);

}
openBtn.addEventListener('click',
    ()=>{
    modal.classList.add('show');
modal.style.display='flex';
initializeStarRatings();
initializeFiltering();
initializeSorting();
setTimeout(()=>{
    const document.getElementById('toggleSort');
if (sortBtn && !isSorted){
    sortBtn.click();

}
applyUserPreset('一般用戶');

}
,
    100);
updateCommandPreview();

}
);
closeBtn.addEventListener('click',
    ()=>{
    modal.classList.remove('show');
modal.style.display='none';

}
);
modal.addEventListener('click',
    (e)=>{
    if (e.target===modal){
    modal.classList.remove('show');
modal.style.display='none';

}

}
);
document.addEventListener('change',
    (e)=>{
    if (e.target.type==='checkbox' && e.target.dataset.feature){
    updateCommandPreview();

}

}
);
document.addEventListener('input',
    (e)=>{
    if (e.target.id==='projectName' || e.target.id==='targetUsers'){
    updateCommandPreview();

}

}
);
document.addEventListener('change',
    (e)=>{
    if (e.target.id==='designStyle' || e.target.id==='colorScheme'){
    updateCommandPreview();

}

}
);
copyBtn.addEventListener('click',
    ()=>{
    const commandPreview.textContent;
if (command && command !=='請先選擇功能...'){
    copyToClipboard(command,
    copyBtn);

}

}
);
const {
    '一般用戶':{
    description: '✨ 已為您選擇適合一般用戶的基礎功能配置（包含用戶管理、支付、社交、安全、AI助手等核心功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'catalog',
    'chat',
    'comments',
    'reviews',
    'social',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'ai-service',
    'ai-chatbot',
    'ai-content-generation',
    'ai-translation',
    'ai-search',
    'pwa',
    'push-notification']
}
,
    '企業客戶':{
    description: '🏢 已為您選擇適合企業客戶的專業功能配置（包含企業級管理、API整合、合規性、AI自動化等進階功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'payment',
    'inventory',
    'orders',
    'catalog',
    'subscription',
    'coupons',
    'affiliate',
    'loyalty',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'funnel',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'api-management',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'audit-trail',
    'firewall',
    'compliance',
    'social-login',
    'payment-gateway',
    'map-service',
    'sms-service',
    'cloud-storage',
    'ai-service',
    'ai-chatbot',
    'ai-content-generation',
    'ai-translation',
    'ai-data-analysis',
    'ai-personalization',
    'ai-automation',
    'ai-search',
    'webhook',
    'api-gateway',
    'pwa',
    'push-notification',
    'offline-mode',
    'geolocation',
    'device-sync']
}
,
    '個人用戶':{
    description: '👤 已為您選擇適合個人用戶的簡潔功能配置（包含基礎管理、社交互動、內容創作等個人化功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'chat',
    'comments',
    'reviews',
    'social',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'admin',
    'permissions',
    'backup',
    'cms',
    'blog',
    'media-gallery',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'pwa',
    'push-notification']
}
,
    '學生群體':{
    description: '🎓 已為您選擇適合學生群體的教育功能配置（包含學習工具、互動功能、遊戲化元素等教育特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'catalog',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'poll',
    'gamification',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'blog',
    'media-gallery',
    'video-player',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'offline-mode',
    'device-sync']
}
,
    '專業人士':{
    description: '💼 已為您選擇適合專業人士的進階功能配置（包含專業工具、進階分析、合規性等專業級功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'inventory',
    'orders',
    'catalog',
    'subscription',
    'coupons',
    'affiliate',
    'loyalty',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'live-stream',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'heatmap',
    'ab-testing',
    'conversion',
    'funnel',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'api-management',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'image-editor',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'audit-trail',
    'firewall',
    'vulnerability',
    'compliance',
    'social-login',
    'payment-gateway',
    'map-service',
    'sms-service',
    'cloud-storage',
    'ai-service',
    'webhook',
    'api-gateway',
    'pwa',
    'push-notification',
    'offline-mode',
    'geolocation',
    'device-sync']
}
,
    '小型企業':{
    description: '🏪 已為您選擇適合小型企業的實用功能配置（包含電商基礎、客戶管理、行銷工具等實用功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'payment',
    'inventory',
    'orders',
    'catalog',
    'subscription',
    'coupons',
    'loyalty',
    'chat',
    'comments',
    'reviews',
    'social',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'monitoring',
    'blog',
    'media-gallery',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'firewall',
    'social-login',
    'payment-gateway',
    'map-service',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'geolocation']
}
,
    '中大型企業':{
    description: '🏢 已為您選擇適合中大型企業的企業級功能配置（包含完整企業管理、進階分析、合規性等企業級功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'payment',
    'inventory',
    'orders',
    'catalog',
    'subscription',
    'coupons',
    'affiliate',
    'loyalty',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'live-stream',
    'poll',
    'gamification',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'heatmap',
    'ab-testing',
    'conversion',
    'funnel',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'api-management',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'image-editor',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'audit-trail',
    'firewall',
    'vulnerability',
    'compliance',
    'social-login',
    'payment-gateway',
    'map-service',
    'sms-service',
    'cloud-storage',
    'ai-service',
    'webhook',
    'api-gateway',
    'pwa',
    'push-notification',
    'offline-mode',
    'geolocation',
    'device-sync']
}
,
    '電商賣家':{
    description: '🛒 已為您選擇適合電商賣家的電商功能配置（包含完整電商功能、庫存管理、行銷工具等電商特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'payment',
    'inventory',
    'orders',
    'catalog',
    'subscription',
    'coupons',
    'affiliate',
    'loyalty',
    'chat',
    'comments',
    'reviews',
    'social',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'funnel',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'firewall',
    'social-login',
    'payment-gateway',
    'map-service',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'geolocation']
}
,
    '內容創作者':{
    description: '🎨 已為您選擇適合內容創作者的創作功能配置（包含內容創作、媒體管理、互動功能、AI創作工具等創作特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'live-stream',
    'poll',
    'gamification',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'blog',
    'media-gallery',
    'video-player',
    'image-editor',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'ai-service',
    'ai-chatbot',
    'ai-content-generation',
    'ai-translation',
    'ai-image-generation',
    'ai-voice-assistant',
    'ai-personalization',
    'ai-search',
    'pwa',
    'push-notification',
    'offline-mode',
    'device-sync']
}
,
    '教育機構':{
    description: '🎓 已為您選擇適合教育機構的教學功能配置（包含學習管理、互動教學、評估工具等教育特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'catalog',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'poll',
    'gamification',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'blog',
    'media-gallery',
    'video-player',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'offline-mode',
    'device-sync']
}
,
    '醫療機構':{
    description: '🏥 已為您選擇適合醫療機構的醫療功能配置（包含患者管理、預約系統、合規性等醫療特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'payment',
    'orders',
    'catalog',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'audit-trail',
    'firewall',
    'compliance',
    'social-login',
    'payment-gateway',
    'map-service',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'geolocation',
    'device-sync']
}
,
    '非營利組織':{
    description: '🤝 已為您選擇適合非營利組織的公益功能配置（包含志工管理、募款功能、社群互動等公益特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'poll',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'blog',
    'media-gallery',
    'video-player',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'social-login',
    'payment-gateway',
    'cloud-storage',
    'ai-service',
    'pwa',
    'push-notification',
    'offline-mode',
    'device-sync']
}
,
    '政府機關':{
    description: '🏛️ 已為您選擇適合政府機關的政府功能配置（包含公共服務、合規性、安全性等政府特色功能）',
    features: ['user-auth',
    'user-profile',
    'search',
    'notifications',
    'file-upload',
    'email-system',
    'calendar',
    'bookmark',
    'payment',
    'orders',
    'catalog',
    'subscription',
    'chat',
    'comments',
    'reviews',
    'social',
    'forum',
    'poll',
    'dashboard',
    'reports',
    'tracking',
    'charts',
    'ab-testing',
    'conversion',
    'admin',
    'permissions',
    'logs',
    'backup',
    'cms',
    'workflow',
    'api-management',
    'monitoring',
    'blog',
    'media-gallery',
    'video-player',
    'document-viewer',
    'rss-feed',
    'seo-tools',
    'two-factor',
    'encryption',
    'captcha',
    'rate-limiting',
    'audit-trail',
    'firewall',
    'vulnerability',
    'compliance',
    'social-login',
    'payment-gateway',
    'map-service',
    'cloud-storage',
    'ai-service',
    'webhook',
    'api-gateway',
    'pwa',
    'push-notification',
    'offline-mode',
    'geolocation',
    'device-sync']
}

}
;
targetUsersSelect.addEventListener('change',
    ()=>{
    if (targetUsersSelect.value==='其他'){
    customTargetUsersDiv.style.display='flex';

}
else{
    customTargetUsersDiv.style.display='none';

}
applyUserPreset(targetUsersSelect.value);
updateCommandPreview();

}
);
const document.getElementById('customTargetUsersInput');
if (customTargetUsersInput){
    customTargetUsersInput.addEventListener('input',
    updateCommandPreview);

}
function applyUserPreset(userType){
    if (userType==='其他' || !userPresets[userType]){
    return;

}
const userPresets[userType];
const document.querySelectorAll('.feature-option input[type="checkbox"]');
allCheckboxes.forEach(checkbox=>{
    checkbox.checked=false;

}
);
preset.features.forEach(featureId=>{
    const document.querySelector(`input[data-feature="${
    featureId
}
"]`);
if (checkbox){
    checkbox.checked=true;

}

}
);
showPresetDescription(preset.description);

}
function showPresetDescription(description){
    const document.querySelector('.preset-description');
if (existingDescription){
    existingDescription.remove();

}
const document.createElement('div');
descriptionDiv.className='preset-description';
descriptionDiv.innerHTML=` <div class="preset-info"> <span class="preset-icon">✨</span> <span class="preset-text">${
    description
}
</span> <button class="preset-close" onclick="this.parentElement.parentElement.remove()">×</button> </div> `;
const document.querySelector('.feature-categories');
featureCategories.parentNode.insertBefore(descriptionDiv,
    featureCategories);

}
function updateCommandPreview(){
    const getSelectedFeatures();
const getProjectSettings();
if (selectedFeatures.length===0){
    commandPreview.textContent='請先選擇功能...';
copyBtn.disabled=true;
return;

}
const generateCommand(selectedFeatures,
    projectSettings);
commandPreview.textContent=command;
copyBtn.disabled=false;

}
function getSelectedFeatures(){
    const document.querySelectorAll('input[type="checkbox"]:checked');
return Array.from(checkboxes).map(cb=>({
    category: cb.dataset.category,
    feature: cb.dataset.feature,
    description: featureDescriptions[cb.dataset.feature] || '',
    technical: technicalImplementations[cb.dataset.feature] || ''
}
));

}
function getProjectSettings(){
    const document.getElementById('targetUsers').value;
const document.getElementById('customTargetUsersInput').value;
return{
    name: document.getElementById('projectName').value || '我的網站專案',
    users: targetUsers==='其他' ? customTargetUsers : targetUsers,
    design: document.getElementById('designStyle').value || 'modern',
    colors: document.getElementById('colorScheme').value || 'blue-white'
}
;

}
function generateCommand(features,
    settings){
    const {
    'modern': '現代簡約風格，使用簡潔的線條和大量留白',
    'professional': '專業商務風格，注重信賴感和專業性',
    'creative': '創意活潑風格，使用鮮豔色彩和動態元素',
    'elegant': '優雅精緻風格，注重細節和質感',
    'minimal': '極簡主義風格，去除多餘元素，專注核心功能'
}
;
const {
    'blue-white': '藍色和白色配色方案',
    'green-blue': '綠色和藍色配色方案',
    'purple-pink': '紫色和粉色配色方案',
    'orange-red': '橙色和紅色配色方案',
    'gray-black': '灰色和黑色配色方案'
}
;
let `請幫我建立一個完整的網站專案：${
    settings.name
}
**專案需求：** - 目標用戶：${
    settings.users
}
- 設計風格：${
    designStyles[settings.design]
}
，使用${
    colorSchemes[settings.colors]
}
- 技術要求：響應式設計、行動端優化、快速載入、SEO優化 **核心功能需求：** `;
const {
    
}
;
features.forEach(feature=>{
    if (!featuresByCategory[feature.category]){
    featuresByCategory[feature.category]=[];

}
featuresByCategory[feature.category].push(feature);

}
);
const {
    'basic': '基本功能',
    'business': '商業功能',
    'interaction': '互動功能',
    'analytics': '分析功能',
    'management': '管理功能',
    'content': '內容功能',
    'security': '安全功能',
    'integration': '整合功能',
    'mobile': '行動功能'
}
;
Object.keys(featuresByCategory).forEach(category=>{
    command +=`\n**${
    categoryNames[category]
}
：**\n`;
featuresByCategory[category].forEach(feature=>{
    command +=`- ${
    feature.description
}
\n`;

}
);

}
);
command +=`\n**技術實作要求：** 1. 專案架構設計（React + Node.js + MongoDB） 2. 設計系統建立（${
    designStyles[settings.design]
}
，${
    colorSchemes[settings.colors]
}
） 3. 資料庫設計（根據功能需求設計資料表結構） 4. API設計（RESTful API 或 GraphQL） 5. 前端實作（響應式設計、元件化開發） 6. 後端實作（業務邏輯、資料處理、API端點） 7. 安全性實作（身份驗證、資料驗證、安全防護） 8. 效能優化（快取策略、資料庫優化、前端優化） 9. 測試實作（單元測試、整合測試、端到端測試） 10. 部署配置（Docker容器化、CI/CD流程、監控設定） **詳細技術實作：** `;
features.forEach(feature=>{
    command +=`\n**${
    feature.description
}
：**\n${
    feature.technical
}
\n`;

}
);
command +=`\n**必備頁面：** - 首頁（功能展示、導航、重要資訊） - 用戶相關頁面（註冊、登入、個人資料） - 主要功能頁面（根據選定功能設計） - 管理頁面（後台管理、設定頁面） - 其他必要頁面（關於我們、聯絡我們、說明文件） **整合功能：** - 第三方服務整合（根據功能需求） - 社群媒體整合（分享、登入） - 分析工具整合（Google Analytics、自建分析） - 通知服務整合（郵件、簡訊、推播） - 支付服務整合（根據商業功能需求） 請提供完整的程式碼實作、資料庫設計、API文件、部署指南和維護說明。`;
return command;

}
function copyToClipboard(text,
    button){
    if (navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(()=>{
    showCopySuccess(button);

}
).catch(err=>{
    fallbackCopy(text,
    button);

}
);

}
else{
    fallbackCopy(text,
    button);

}

}
function fallbackCopy(text,
    button){
    const document.createElement('textarea');
textArea.value=text;
textArea.style.position='fixed';
textArea.style.left='-999999px';
textArea.style.top='-999999px';
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try{
    document.execCommand('copy');
showCopySuccess(button);

}
catch(err){
    showCopyError(button);

}
document.body.removeChild(textArea);

}
function showCopyError(button){
    const button.textContent;
button.textContent='❌ 複製失敗';
button.style.background='linear-gradient(135deg,
    #e53e3e 0%,
    #c53030 100%)';
setTimeout(()=>{
    button.textContent=originalText;
button.style.background='linear-gradient(135deg,
    #48bb78 0%,
    #38a169 100%)';

}
,
    2000);

}

}
function initMobileChecker(){
    const document.getElementById('checkMobile');
const document.getElementById('mobileResults');
const document.querySelectorAll('.device-btn');
const document.getElementById('customDeviceBtn');
const document.getElementById('customWidth');
const document.getElementById('customHeight');
if (!checkMobileBtn || !mobileResults)return;
let null;
let ['layout',
    'typography',
    'touch',
    'performance',
    'accessibility'];
deviceButtons.forEach(btn=>{
    btn.addEventListener('click',
    function(){
    deviceButtons.forEach(b=> b.classList.remove('active'));
this.classList.add('active');
selectedDevice={
    name: this.textContent.trim(),
    width: parseInt(this.dataset.width)|| 375,
    height: parseInt(this.dataset.height)|| 667,
    device: this.dataset.device
}
;

}
);

}
);
if (customDeviceBtn){
    customDeviceBtn.addEventListener('click',
    function(){
    const parseInt(customWidth.value)|| 375;
const parseInt(customHeight.value)|| 667;
if (width < 320 || width > 1920 || height < 568 || height > 1080){
    alert('請輸入有效的尺寸範圍：寬度 320-1920px，高度 568-1080px');
return;

}
deviceButtons.forEach(b=> b.classList.remove('active'));
selectedDevice={
    name: `自訂尺寸(${
    width
}
×${
    height
}
)`,
    width: width,
    height: height,
    device: 'custom'
}
;
this.classList.add('active');

}
);

}
const document.querySelectorAll('.option-checkboxes input[type="checkbox"]');
optionCheckboxes.forEach(checkbox=>{
    checkbox.addEventListener('change',
    function(){
    if (this.checked){
    selectedOptions.push(this.value);

}
else{
    selectedOptions=selectedOptions.filter(opt=> opt !==this.value);

}

}
);

}
);
const document.getElementById('autoDetectOrientation');
if (autoDetectBtn){
    autoDetectBtn.addEventListener('click',
    function(){
    const getCurrentOrientation();
const window.innerWidth;
const window.innerHeight;
const {
    name: `自動檢測(${
    currentWidth
}
×${
    currentHeight
}
)`,
    width: currentOrientation==='landscape' ? currentHeight : currentWidth,
    height: currentOrientation==='landscape' ? currentWidth : currentHeight,
    device: 'auto-detect'
}
;
deviceButtons.forEach(b=> b.classList.remove('active'));
selectedDevice=device;
const document.getElementById('orientationIndicator');
if (orientationIndicator){
    orientationIndicator.textContent=currentOrientation==='landscape' ? '橫向' : '直向';
orientationIndicator.className=`orientation-indicator ${
    currentOrientation
}
`;

}
checkMobileBtn.click();

}
);

}
checkMobileBtn.addEventListener('click',
    function(){
    if (!selectedDevice){
    alert('請先選擇要測試的裝置');
return;

}
if (selectedOptions.length===0){
    alert('請至少選擇一項檢測選項');
return;

}
checkMobileBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> 檢測中...';
checkMobileBtn.disabled=true;
performMobileCheck(selectedDevice,
    selectedOptions);
mobileResults.style.display='block';
smoothScrollTo(mobileResults);
checkMobileBtn.innerHTML='<i class="fas fa-search"></i> 開始檢測';
checkMobileBtn.disabled=false;

}
);

}
function performMobileCheck(device,
    options){
    const document.getElementById('responsiveScore');
const document.getElementById('scoreText');
const document.getElementById('mobileIssues');
const document.getElementById('currentDevice');
const document.getElementById('currentResolution');
const document.getElementById('layoutScore');
const document.getElementById('typographyScore');
const document.getElementById('touchScore');
const document.getElementById('performanceScore');
const document.getElementById('accessibilityScore');
const document.getElementById('mobileRecommendations');
const getCurrentOrientation();
const currentOrientation==='landscape';
const currentOrientation==='portrait';
currentDevice.textContent=device.name;
currentResolution.textContent=`${
    device.width
}
×${
    device.height
}
(${
    isLandscape ? '橫向' : '直向'
}
)`;
const {
    layout:{
    score: 0,
    issues: []
}
,
    typography:{
    score: 0,
    issues: []
}
,
    touch:{
    score: 0,
    issues: []
}
,
    performance:{
    score: 0,
    issues: []
}
,
    accessibility:{
    score: 0,
    issues: []
}

}
;
let 0;
let [];
if (options.includes('layout')){
    const checkLayout(device);
results.layout=layoutResult;
totalScore +=layoutResult.score;
totalIssues=totalIssues.concat(layoutResult.issues);

}
if (options.includes('typography')){
    const checkTypography(device);
results.typography=typographyResult;
totalScore +=typographyResult.score;
totalIssues=totalIssues.concat(typographyResult.issues);

}
if (options.includes('touch')){
    const checkTouch(device);
results.touch=touchResult;
totalScore +=touchResult.score;
totalIssues=totalIssues.concat(touchResult.issues);

}
if (options.includes('performance')){
    const checkPerformance(device);
results.performance=performanceResult;
totalScore +=performanceResult.score;
totalIssues=totalIssues.concat(performanceResult.issues);

}
if (options.includes('accessibility')){
    const checkAccessibility(device);
results.accessibility=accessibilityResult;
totalScore +=accessibilityResult.score;
totalIssues=totalIssues.concat(accessibilityResult.issues);

}
const Math.round(totalScore / options.length);
responsiveScore.style.width=averageScore + '%';
scoreText.textContent=averageScore + '/100';
responsiveScore.className='score-fill';
if (averageScore >=80){
    responsiveScore.classList.add('high');

}
else 
if (averageScore >=60){
    responsiveScore.classList.add('medium');

}
else{
    responsiveScore.classList.add('low');

}
layoutScore.textContent=results.layout.score + '/100';
typographyScore.textContent=results.typography.score + '/100';
touchScore.textContent=results.touch.score + '/100';
performanceScore.textContent=results.performance.score + '/100';
accessibilityScore.textContent=results.accessibility.score + '/100';
displayMobileIssues(totalIssues);
displayRecommendations(device,
    results);

}
function getCurrentOrientation(){
    if (window.screen && window.screen.orientation){
    return window.screen.orientation.angle===0 || window.screen.orientation.angle===180 ? 'portrait' : 'landscape';

}
else 
if (window.orientation !==undefined){
    return Math.abs(window.orientation)===90 ? 'landscape' : 'portrait';

}
else{
    return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

}

}
function initOrientationDetection(){
    if (window.screen && window.screen.orientation){
    window.screen.orientation.addEventListener('change',
    handleOrientationChange);

}
else{
    window.addEventListener('orientationchange',
    handleOrientationChange);
window.addEventListener('resize',
    handleOrientationChange);

}

}
function handleOrientationChange(){
    const getCurrentOrientation();
const document.getElementById('orientationIndicator');
if (orientationIndicator){
    orientationIndicator.textContent=orientation==='landscape' ? '橫向' : '直向';
orientationIndicator.className=`orientation-indicator ${
    orientation
}
`;

}
const document.getElementById('mobileResults');
if (mobileResults && mobileResults.style.display !=='none'){
    const document.getElementById('checkMobile');
if (checkMobileBtn && !checkMobileBtn.disabled){
    setTimeout(()=>{
    checkMobileBtn.click();

}
,
    500);

}

}

}
function checkLayout(device){
    const [];
let 100;
const getCurrentOrientation();
const currentOrientation==='landscape';
const currentOrientation==='portrait';
const document.querySelector('meta[name="viewport"]');
if (!viewport){
    issues.push({
    type: 'error',
    title: '缺少 Viewport Meta Tag',
    description: '未設定 viewport meta tag，可能導致手機版顯示異常',
    solution: '添加 <meta name="viewport" content="width=device-width,
    initial-scale=1.0">',
    priority: 'high'
}
);
score -=25;

}
const isLandscape ? device.height : device.width;
if (document.documentElement.scrollWidth > currentWidth){
    issues.push({
    type: 'error',
    title: '存在水平滾動',
    description: `頁面寬度 ${
    document.documentElement.scrollWidth
}
px 超過${
    isLandscape ? '橫向' : '直向'
}
模式寬度 ${
    currentWidth
}
px`,
    solution: '檢查並修復超出視窗寬度的元素，使用 max-width: 100%',
    priority: 'high'
}
);
score -=30;

}
const document.querySelectorAll('img');
let 0;
images.forEach(img=>{
    if (img.srcset || img.sizes || img.classList.contains('responsive')|| img.style.maxWidth==='100%' || img.style.width==='100%'){
    responsiveImages++;

}

}
);
if (images.length > 0 && responsiveImages < images.length * 0.5){
    issues.push({
    type: 'warning',
    title: '響應式圖片不足',
    description: `只有 ${
    Math.round(responsiveImages/images.length*100)
}
% 的圖片是響應式的`,
    solution: '使用 srcset 和 sizes 屬性或 CSS max-width: 100%',
    priority: 'medium'
}
);
score -=15;

}
if (isLandscape && device.width < 768){
    const document.querySelectorAll('.container,
    .wrapper,
    .content');
let 0;
containers.forEach(container=>{
    const container.getBoundingClientRect();
if (rect.width < device.height * 0.8){
    narrowContainers++;

}

}
);
if (narrowContainers > 0){
    issues.push({
    type: 'warning',
    title: '橫向模式容器過窄',
    description: `在橫向模式下，有 ${
    narrowContainers
}
個容器寬度過窄，可能影響閱讀體驗`,
    solution: '在橫向模式下增加容器寬度，使用 @media(orientation: landscape)',
    priority: 'medium'
}
);
score -=10;

}

}
if (device.device && device.device.includes('ipad-pro')){
    if (device.width >=1024){
    const document.querySelector('main,
    .main-content,
    .content');
if (mainContent){
    const mainContent.getBoundingClientRect();
if (rect.width < device.width * 0.7){
    issues.push({
    type: 'warning',
    title: 'iPad Pro 大螢幕空間利用不足',
    description: `在 iPad Pro 12.9" 上，主內容區域寬度僅為 ${
    Math.round(rect.width)
}
px，未充分利用大螢幕空間`,
    solution: '為 iPad Pro 設計多欄布局，充分利用寬螢幕空間',
    priority: 'medium'
}
);
score -=15;

}

}
const parseFloat(getComputedStyle(document.body).fontSize);
if (bodyFontSize < 18){
    issues.push({
    type: 'warning',
    title: 'iPad Pro 字體過小',
    description: `在 iPad Pro 大螢幕上，字體大小 ${
    bodyFontSize
}
px 可能過小，影響閱讀體驗`,
    solution: '為 iPad Pro 增加字體大小，建議至少 18px',
    priority: 'medium'
}
);
score -=10;

}

}
const document.querySelectorAll('button,
    .btn,
    a,
    input,
    select,
    textarea');
let 0;
interactiveElements.forEach(element=>{
    const element.getBoundingClientRect();
if (rect.width < 44 || rect.height < 44){
    smallTouchTargets++;

}

}
);
if (smallTouchTargets > 0){
    issues.push({
    type: 'warning',
    title: 'iPad Pro 觸控目標過小',
    description: `有 ${
    smallTouchTargets
}
個觸控目標小於 44px，可能影響 Apple Pencil 操作`,
    solution: '增加觸控目標尺寸，確保 Apple Pencil 操作便利性',
    priority: 'medium'
}
);
score -=10;

}

}
if (isPortrait && device.width < 768){
    const window.innerHeight;
const document.documentElement.scrollHeight;
if (contentHeight < viewportHeight * 0.5){
    issues.push({
    type: 'warning',
    title: '直向模式空間利用不足',
    description: '在直向模式下，內容高度過小，可能造成空間浪費',
    solution: '優化直向模式的內容布局，充分利用垂直空間',
    priority: 'low'
}
);
score -=5;

}

}
return{
    score: Math.max(0,
    score),
    issues
}
;

}
function checkTypography(device){
    const [];
let 100;
const parseFloat(getComputedStyle(document.body).fontSize);
const device.width < 480 ? 14 : 16;
if (bodyFontSize < minFontSize){
    issues.push({
    type: 'warning',
    title: '字體過小',
    description: `主字體大小 ${
    bodyFontSize
}
px 在 ${
    device.width
}
px 寬度下可能難以閱讀`,
    solution: `將主字體大小設定為至少 ${
    minFontSize
}
px`,
    priority: 'medium'
}
);
score -=15;

}
return{
    score: Math.max(0,
    score),
    issues
}
;

}
function checkTouch(device){
    const [];
let 100;
const document.querySelectorAll('button,
    .btn,
    a[role="button"],
    input[type="button"],
    input[type="submit"]');
let 0;
const 44;
buttons.forEach(btn=>{
    const btn.getBoundingClientRect();
if (rect.width < minTouchSize || rect.height < minTouchSize){
    smallButtons++;

}

}
);
if (smallButtons > 0){
    issues.push({
    type: 'warning',
    title: '觸控目標過小',
    description: `有 ${
    smallButtons
}
個按鈕尺寸小於建議的 ${
    minTouchSize
}
px`,
    solution: '增加按鈕的最小尺寸到 44px × 44px',
    priority: 'high'
}
);
score -=20;

}
return{
    score: Math.max(0,
    score),
    issues
}
;

}
function checkPerformance(device){
    const [];
let 100;
const document.querySelectorAll('img');
let 0;
images.forEach(img=>{
    const img.src || img.getAttribute('src');
if (src && !src.match(/\.(webp|avif)$/i)&& !img.srcset){
    unoptimizedImages++;

}

}
);
if (unoptimizedImages > 0){
    issues.push({
    type: 'warning',
    title: '圖片未優化',
    description: `有 ${
    unoptimizedImages
}
張圖片未使用現代格式或響應式載入`,
    solution: '使用 WebP/AVIF 格式和 srcset 屬性',
    priority: 'medium'
}
);
score -=15;

}
return{
    score: Math.max(0,
    score),
    issues
}
;

}
function checkAccessibility(device){
    const [];
let 100;
const document.querySelectorAll('img');
let 0;
images.forEach(img=>{
    if (!img.alt && !img.getAttribute('aria-label')){
    missingAlt++;

}

}
);
if (missingAlt > 0){
    issues.push({
    type: 'warning',
    title: '圖片缺少替代文字',
    description: `有 ${
    missingAlt
}
張圖片缺少 alt 屬性`,
    solution: '為所有圖片添加有意義的 alt 屬性',
    priority: 'medium'
}
);
score -=15;

}
return{
    score: Math.max(0,
    score),
    issues
}
;

}
function displayMobileIssues(issues){
    const document.getElementById('mobileIssues');
if (issues.length===0){
    mobileIssues.innerHTML=` <div class="no-issues"> <i class="fas fa-check-circle"></i> <h4>🎉 太棒了！</h4> <p>未發現手機版適配問題，您的網站已經針對行動裝置進行了良好的優化。</p> </div> `;
return;

}
const {
    'high': 3,
    'medium': 2,
    'low': 1
}
;
issues.sort((a,
    b)=>(priorityOrder[b.priority] || 0)-(priorityOrder[a.priority] || 0));
let '<div class="issues-list">';
issues.forEach((issue,
    index)=>{
    const issue.type==='error' ? 'fas fa-exclamation-triangle' : 'fas fa-exclamation-circle';
const issue.type==='error' ? 'error' : 'warning';
const issue.priority || 'medium';
issuesHTML +=` <div class="issue-item ${
    colorClass
}
${
    priorityClass
}
"> <div class="issue-header"> <i class="${
    icon
}
"></i> <h4>${
    issue.title
}
</h4> <span class="priority-badge ${
    priorityClass
}
">${
    priorityClass.toUpperCase()
}
</span> </div> <p class="issue-description">${
    issue.description
}
</p> <div class="issue-solution"> <strong>解決方案：</strong> <code>${
    issue.solution
}
</code> </div> </div> `;

}
);
issuesHTML +='</div>';
mobileIssues.innerHTML=issuesHTML;

}
function displayRecommendations(device,
    results){
    const document.getElementById('mobileRecommendations');
const [];
if (results.layout.score < 80){
    recommendations.push({
    title: '優化版面布局',
    description: '使用 CSS Grid 和 Flexbox 建立響應式布局，確保在不同裝置上都能正常顯示。'
}
);

}
if (results.typography.score < 80){
    recommendations.push({
    title: '改善字體排版',
    description: '調整字體大小和行高，確保在小螢幕上的可讀性。'
}
);

}
if (results.touch.score < 80){
    recommendations.push({
    title: '優化觸控體驗',
    description: '增加按鈕和連結的尺寸，改善觸控操作的便利性。'
}
);

}
if (results.performance.score < 80){
    recommendations.push({
    title: '提升載入效能',
    description: '優化圖片格式，壓縮 CSS 和 JavaScript 檔案。'
}
);

}
if (results.accessibility.score < 80){
    recommendations.push({
    title: '改善無障礙設計',
    description: '添加 alt 屬性，改善標題結構，提升螢幕閱讀器支援。'
}
);

}
if (device.width < 480){
    recommendations.push({
    title: '小螢幕優化',
    description: '針對小螢幕裝置，考慮使用單欄布局和更大的觸控目標。'
}
);

}
if (device.width >=768 && device.width <=1024){
    recommendations.push({
    title: '平板優化',
    description: '利用平板螢幕空間，考慮使用多欄布局和更大的字體。'
}
);

}
if (device.device && device.device.includes('ipad-pro')){
    recommendations.push({
    title: 'iPad Pro 大螢幕優化',
    description: '充分利用 iPad Pro 的大螢幕空間，使用多欄布局、更大的字體和更豐富的視覺元素。'
}
);
recommendations.push({
    title: 'Apple Pencil 支援',
    description: '優化觸控目標尺寸，確保 Apple Pencil 操作的便利性和精確性。'
}
);
recommendations.push({
    title: 'iPad Pro 橫向模式',
    description: '在橫向模式下，考慮使用分屏布局或多視窗設計，充分利用寬螢幕空間。'
}
);

}
const getCurrentOrientation();
if (currentOrientation==='landscape'){
    recommendations.push({
    title: '橫向模式優化',
    description: '在橫向模式下，充分利用寬螢幕空間，考慮使用多欄布局和水平導航。'
}
);

}
else{
    recommendations.push({
    title: '直向模式優化',
    description: '在直向模式下，優化垂直空間利用，確保內容易於滾動瀏覽。'
}
);

}
recommendations.push({
    title: '方向切換適配',
    description: '使用 @media(orientation: landscape)和 @media(orientation: portrait)來適配不同方向。'
}
);
let '';
recommendations.forEach(rec=>{
    recommendationsHTML +=` <div class="recommendation-item"> <h6>${
    rec.title
}
</h6> <p>${
    rec.description
}
</p> </div> `;

}
);
mobileRecommendations.innerHTML=recommendationsHTML;
initMobileSolutionGenerator(device,
    results);

}
function initMobileSolutionGenerator(device,
    results){
    const document.getElementById('generateMobileSolution');
const document.getElementById('mobileSolutionPanel');
const document.getElementById('mobileSolutionContent');
const document.getElementById('copyMobileSolution');
if (!generateMobileSolutionBtn || !mobileSolutionPanel || !mobileSolutionContent)return;
generateMobileSolutionBtn.style.display='flex';
generateMobileSolutionBtn.addEventListener('click',
    function(){
    const generateMobileSolution(device,
    results);
mobileSolutionContent.textContent=solution;
mobileSolutionPanel.style.display='block';
mobileSolutionPanel.scrollIntoView({
    behavior: 'smooth'
}
);

}
);
if (copyMobileSolutionBtn){
    copyMobileSolutionBtn.addEventListener('click',
    function(){
    navigator.clipboard.writeText(mobileSolutionContent.textContent).then(()=>{
    copyMobileSolutionBtn.innerHTML='<i class="fas fa-check"></i> 已複製';
setTimeout(()=>{
    copyMobileSolutionBtn.innerHTML='<i class="fas fa-copy"></i> 複製解決方案';

}
,
    2000);

}
);

}
);

}

}
function generateMobileSolution(device,
    results){
    let ` html{
    font-size: 16px;
scroll-behavior: smooth;

}
body{
    margin: 0;
padding: 0;
overflow-x: hidden;
max-width: 100%;
-webkit-overflow-scrolling: touch;

}
.container{
    max-width: 100%;
margin: 0 auto;
padding: 0 15px;
box-sizing: border-box;

}
@media(max-width: 480px){
    .container{
    padding: 0 10px;

}
h1{
    font-size: 1.8rem;

}
h2{
    font-size: 1.5rem;

}
h3{
    font-size: 1.3rem;

}
.terminology-grid{
    grid-template-columns: 1fr;
gap: 10px;

}
.tool-section{
    margin: 10px 0;
padding: 15px;

}

}
@media(min-width: 481px)and(max-width: 768px){
    .container{
    padding: 0 20px;

}
.terminology-grid{
    grid-template-columns: repeat(2,
    1fr);
gap: 15px;

}

}
@media(min-width: 769px)and(max-width: 1024px){
    .terminology-grid{
    grid-template-columns: repeat(3,
    1fr);
gap: 20px;

}

}
button,
    .btn,
    input[type="button"],
    input[type="submit"]{
    min-width: 44px;
min-height: 44px;
padding: 12px 20px;
font-size: 16px;
border-radius: 8px;
cursor: pointer;
transition: all 0.3s ease;

}
a{
    min-height: 44px;
display: inline-flex;
align-items: center;
text-decoration: none;
color: inherit;

}
input,
    select,
    textarea{
    min-height: 44px;
padding: 12px;
font-size: 16px;
border-radius: 6px;
border: 1px solid #ddd;

}
body{
    font-family: -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
line-height: 1.6;
color: #333;

}
h1{
    font-size: 2rem;
font-weight: 700;

}
h2{
    font-size: 1.75rem;
font-weight: 600;

}
h3{
    font-size: 1.5rem;
font-weight: 600;

}
h4{
    font-size: 1.25rem;
font-weight: 500;

}
h5{
    font-size: 1.1rem;
font-weight: 500;

}
h6{
    font-size: 1rem;
font-weight: 500;

}
p,
    .text{
    font-size: 1rem;
line-height: 1.6;
margin-bottom: 1rem;

}
.navbar{
    position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
background: rgba(255,
    255,
    255,
    0.95);
backdrop-filter: blur(10px);
padding: 10px 0;

}
.nav-menu{
    display: flex;
flex-direction: column;
gap: 10px;

}
.nav-menu a{
    padding: 12px 20px;
border-radius: 6px;
transition: background-color 0.3s ease;

}
.nav-menu a:hover{
    background-color: rgba(0,
    0,
    0,
    0.1);

}
.terminology-card,
    .command-card,
    .feature-card{
    background: white;
border-radius: 12px;
padding: 20px;
margin-bottom: 20px;
box-shadow: 0 2px 10px rgba(0,
    0,
    0,
    0.1);
transition: transform 0.3s ease,
    box-shadow 0.3s ease;

}
.terminology-card:hover,
    .command-card:hover,
    .feature-card:hover{
    transform: translateY(-2px);
box-shadow: 0 4px 20px rgba(0,
    0,
    0,
    0.15);

}
.terminology-grid{
    display: grid;
grid-template-columns: repeat(auto-fit,
    minmax(280px,
    1fr));
gap: 20px;
margin: 20px 0;

}
img{
    max-width: 100%;
height: auto;
loading: lazy;
object-fit: cover;

}
.container,
    .section,
    .tool-section,
    .terminology-card{
    will-change: transform;
transform: translateZ(0);

}
button:focus,
    .btn:focus,
    input:focus,
    select:focus,
    textarea:focus{
    outline: 2px solid #007AFF;
outline-offset: 2px;

}
@media(prefers-contrast: high){
    body{
    color: #000;
background: #fff;

}
.terminology-card,
    .command-card,
    .feature-card{
    border: 2px solid #000;

}

}
@media(prefers-reduced-motion: reduce){
    *,
    *::before,
    *::after{
    animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;

}

}
@media(orientation: landscape)and(max-height: 500px){
    .navbar{
    padding: 5px 0;

}
.container{
    padding: 0 10px;

}
.terminology-grid{
    grid-template-columns: repeat(3,
    1fr);
gap: 15px;

}

}
@media(orientation: portrait){
    .terminology-grid{
    grid-template-columns: 1fr;
gap: 15px;

}

}
@media(max-width: 375px){
    .container{
    padding: 0 8px;

}
h1{
    font-size: 1.6rem;

}
h2{
    font-size: 1.4rem;

}
.terminology-card,
    .command-card,
    .feature-card{
    padding: 15px;
margin-bottom: 15px;

}

}
@media(min-width: 768px)and(max-width: 1024px){
    .terminology-grid{
    grid-template-columns: repeat(3,
    1fr);
gap: 25px;

}
.terminology-card,
    .command-card,
    .feature-card{
    padding: 25px;

}

}
`;
return solution;

}
function initLayoutOptimizationChecker(){
    const document.getElementById('checkLayout');
const document.getElementById('layoutResults');
const document.getElementById('layoutIssues');
const document.getElementById('issueCount');
if (!checkLayoutBtn || !layoutResults)return;
checkLayoutBtn.addEventListener('click',
    function(){
    checkLayoutBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> 檢測中...';
checkLayoutBtn.disabled=true;
const document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
const Array.from(checkboxes).map(cb=> cb.value);
if (selectedChecks.length===0){
    alert('請至少選擇一項檢測選項');
checkLayoutBtn.innerHTML='<i class="fas fa-search"></i> 開始檢測';
checkLayoutBtn.disabled=false;
return;

}
try{
    const performLayoutCheck(selectedChecks);
displayLayoutResults(results);
layoutResults.style.display='block';
smoothScrollTo(layoutResults);

}
catch(error){
    alert('檢測過程中發生錯誤，請稍後再試');

}
finally{
    checkLayoutBtn.innerHTML='<i class="fas fa-search"></i> 開始檢測';
checkLayoutBtn.disabled=false;

}

}
);

}
function performLayoutCheck(selectedChecks){
    const {
    totalIssues: 0,
    issues: [],
    score: 100,
    categories:{
    overlap:{
    count: 0,
    issues: []
}
,
    spacing:{
    count: 0,
    issues: []
}
,
    alignment:{
    count: 0,
    issues: []
}
,
    sizing:{
    count: 0,
    issues: []
}
,
    mobileLayout:{
    count: 0,
    issues: []
}
,
    typography:{
    count: 0,
    issues: []
}

}

}
;
if (selectedChecks.includes('overlap')){
    const checkElementOverlap();
results.categories.overlap=overlapResult;
results.totalIssues +=overlapResult.count;
results.issues=results.issues.concat(overlapResult.issues);

}
if (selectedChecks.includes('spacing')){
    const checkSpacingAnalysis();
results.categories.spacing=spacingResult;
results.totalIssues +=spacingResult.count;
results.issues=results.issues.concat(spacingResult.issues);

}
if (selectedChecks.includes('alignment')){
    const checkAlignment();
results.categories.alignment=alignmentResult;
results.totalIssues +=alignmentResult.count;
results.issues=results.issues.concat(alignmentResult.issues);

}
if (selectedChecks.includes('sizing')){
    const checkSizing();
results.categories.sizing=sizingResult;
results.totalIssues +=sizingResult.count;
results.issues=results.issues.concat(sizingResult.issues);

}
if (selectedChecks.includes('mobile-layout')){
    const checkMobileLayout();
results.categories.mobileLayout=mobileLayoutResult;
results.totalIssues +=mobileLayoutResult.count;
results.issues=results.issues.concat(mobileLayoutResult.issues);

}
if (selectedChecks.includes('typography')){
    const checkTypographyLayout();
results.categories.typography=typographyResult;
results.totalIssues +=typographyResult.count;
results.issues=results.issues.concat(typographyResult.issues);

}
if (results.totalIssues > 50){
    results.issues=results.issues.slice(0,
    50);
results.totalIssues=50;
results.issues.push({
    type: 'info',
    title: '檢測結果已優化',
    description: `為避免性能問題，已將檢測結果限制為前 50 個問題。實際發現 ${
    results.issues.length
}
個問題。`,
    solution: '建議分批檢測或優化頁面結構以減少問題數量',
    priority: 'low'
}
);

}
results.score=Math.max(0,
    100 -(results.totalIssues * 5));
return results;

}
function checkElementOverlap(){
    const [];
let 0;
const [ '.container',
    '.section',
    '.tool-section',
    '.terminology-card',
    '.navbar',
    '.hero',
    '.feature-card',
    '.command-item',
    '.mobile-checker',
    '.layout-results',
    '.analysis-content',
    '.terminology-grid',
    '.solutions-list',
    '.project-section' ];
const [];
mainSelectors.forEach(selector=>{
    const document.querySelectorAll(selector);
elements.push(...Array.from(found));

}
);
const elements.filter(el=>{
    const getComputedStyle(el);
return style.display !=='none' && style.visibility !=='hidden' && style.opacity !=='0' && el.offsetWidth > 0 && el.offsetHeight > 0;

}
);
const Math.min(30,
    visibleElements.length);
for (
let 0;
i < maxElements;
i++){
    for (
let i + 1;
j < maxElements;
j++){
    const visibleElements[i];
const visibleElements[j];
if (isOverlapping(el1,
    el2)){
    const el1.getBoundingClientRect();
const el2.getBoundingClientRect();
issues.push({
    type: 'error',
    title: '元素重疊',
    description: `元素 "${
    el1.tagName.toLowerCase()
}
" 與 "${
    el2.tagName.toLowerCase()
}
" 發生重疊`,
    solution: '調整元素位置或使用 z-index 控制層級',
    priority: 'high',
    elements: [el1,
    el2],
    overlapArea: calculateOverlapArea(rect1,
    rect2)
}
);
count++;
if (count >=10)break;

}

}
if (count >=10)break;

}
return{
    count,
    issues
}
;

}
function checkSpacingAnalysis(){
    const [];
let 0;
const document.querySelectorAll('.container,
    .wrapper,
    .content,
    .section');
const Math.min(10,
    containers.length);
for (
let 0;
i < maxContainers;
i++){
    const containers[i];
const getComputedStyle(container);
const parseFloat(style.paddingTop)+ parseFloat(style.paddingBottom);
const parseFloat(style.marginTop)+ parseFloat(style.marginBottom);
const padding + margin;
if (totalSpacing < 20){
    issues.push({
    type: 'warning',
    title: '容器間距不足',
    description: `容器 "${
    container.className || container.tagName
}
" 的上下間距僅 ${
    totalSpacing
}
px`,
    solution: '增加容器的 padding 或 margin 以改善視覺呼吸感',
    priority: 'medium',
    element: container
}
);
count++;

}
if (count >=5)break;

}
const document.querySelectorAll('.card,
    .terminology-card,
    .command-card');
const Math.min(20,
    cards.length);
for (
let 0;
i < maxCards;
i++){
    const cards[i];
const getComputedStyle(card);
const parseFloat(style.marginBottom);
if (margin < 16){
    issues.push({
    type: 'warning',
    title: '卡片間距過小',
    description: `卡片間距僅 ${
    margin
}
px，建議至少 16px`,
    solution: '增加卡片的 margin-bottom 以改善視覺分離',
    priority: 'low',
    element: card
}
);
count++;

}
if (count >=10)break;

}
return{
    count,
    issues
}
;

}
function checkAlignment(){
    const [];
let 0;
const document.querySelectorAll('h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    .text');
const Math.min(50,
    textElements.length);
const {
    
}
;
for (
let 0;
i < maxTextElements;
i++){
    const textElements[i];
const getComputedStyle(el);
const style.textAlign;
if (textAlign && textAlign !=='initial'){
    if (!alignments[textAlign]){
    alignments[textAlign]=[];

}
alignments[textAlign].push(el);

}

}
const Object.keys(alignments);
if (alignmentTypes.length > 2){
    issues.push({
    type: 'warning',
    title: '文字對齊不一致',
    description: `發現 ${
    alignmentTypes.length
}
種不同的文字對齊方式`,
    solution: '統一文字對齊方式，建議主要使用 left 或 center',
    priority: 'medium'
}
);
count++;

}
const document.querySelectorAll('.flex,
    .d-flex,
    [style*="display: flex"]');
const Math.min(20,
    flexContainers.length);
for (
let 0;
i < maxFlexContainers;
i++){
    const flexContainers[i];
const getComputedStyle(container);
const style.alignItems;
const style.justifyContent;
if (alignItems==='stretch' && justifyContent==='stretch'){
    issues.push({
    type: 'warning',
    title: 'Flexbox 對齊可能過於拉伸',
    description: '容器同時使用 stretch 對齊可能導致元素變形',
    solution: '考慮使用更合適的對齊方式，如 center 或 flex-start',
    priority: 'low',
    element: container
}
);
count++;

}
if (count >=5)break;

}
return{
    count,
    issues
}
;

}
function checkSizing(){
    const [];
let 0;
const document.querySelectorAll('button,
    .btn,
    input[type="button"],
    input[type="submit"]');
const Math.min(30,
    buttons.length);
for (
let 0;
i < maxButtons;
i++){
    const buttons[i];
const btn.getBoundingClientRect();
if (rect.width < 44 || rect.height < 44){
    issues.push({
    type: 'error',
    title: '按鈕尺寸過小',
    description: `按鈕尺寸 ${
    Math.round(rect.width)
}
×${
    Math.round(rect.height)
}
px 小於建議的 44×44px`,
    solution: '增加按鈕的最小尺寸以改善觸控體驗',
    priority: 'high',
    element: btn
}
);
count++;

}
if (count >=10)break;

}
const document.querySelectorAll('img');
const Math.min(20,
    images.length);
for (
let 0;
i < maxImages;
i++){
    const images[i];
const img.getBoundingClientRect();
const img.naturalWidth;
const img.naturalHeight;
if (naturalWidth > 0 && naturalHeight > 0){
    const rect.width / rect.height;
const naturalWidth / naturalHeight;
const Math.abs(aspectRatio - naturalAspectRatio);
if (ratioDiff > 0.1){
    issues.push({
    type: 'warning',
    title: '圖片比例失真',
    description: `圖片顯示比例與原始比例差異 ${
    Math.round(ratioDiff * 100)
}
%`,
    solution: '使用 object-fit: cover 或調整容器尺寸以保持圖片比例',
    priority: 'medium',
    element: img
}
);
count++;

}

}
if (count >=10)break;

}
return{
    count,
    issues
}
;

}
function checkMobileLayout(){
    const [];
let 0;
if (document.documentElement.scrollWidth > window.innerWidth){
    issues.push({
    type: 'error',
    title: '存在水平滾動',
    description: `頁面寬度 ${
    document.documentElement.scrollWidth
}
px 超過視窗寬度 ${
    window.innerWidth
}
px`,
    solution: '檢查並修復超出視窗寬度的元素',
    priority: 'high'
}
);
count++;

}
const document.querySelectorAll('img');
let 0;
images.forEach(img=>{
    if (img.srcset || img.sizes || img.style.maxWidth==='100%'){
    responsiveImages++;

}

}
);
if (images.length > 0 && responsiveImages < images.length * 0.5){
    issues.push({
    type: 'warning',
    title: '響應式圖片不足',
    description: `只有 ${
    Math.round(responsiveImages/images.length*100)
}
% 的圖片是響應式的`,
    solution: '使用 srcset 和 sizes 屬性或 CSS max-width: 100%',
    priority: 'medium'
}
);
count++;

}
return{
    count,
    issues
}
;

}
function checkTypographyLayout(){
    const [];
let 0;
const document.querySelectorAll('h1,
    h2,
    h3,
    h4,
    h5,
    h6');
const Math.min(30,
    headings.length);
const {
    
}
;
for (
let 0;
i < maxHeadings;
i++){
    const headings[i];
const parseFloat(getComputedStyle(heading).fontSize);
const heading.tagName.toLowerCase();
if (!fontSizeMap[tagName]){
    fontSizeMap[tagName]=[];

}
fontSizeMap[tagName].push(fontSize);

}
const fontSizeMap.h1 || [];
const fontSizeMap.h2 || [];
if (h1Sizes.length > 0 && h2Sizes.length > 0){
    const h1Sizes.reduce((a,
    b)=> a + b,
    0)/ h1Sizes.length;
const h2Sizes.reduce((a,
    b)=> a + b,
    0)/ h2Sizes.length;
if (avgH2 >=avgH1){
    issues.push({
    type: 'error',
    title: '標題層級不合理',
    description: 'H2 標題字體大小不應大於或等於 H1',
    solution: '調整標題字體大小，確保層級清晰',
    priority: 'high'
}
);
count++;

}

}
const document.querySelectorAll('p,
    .text,
    .content');
const Math.min(20,
    textElements.length);
for (
let 0;
i < maxTextElements;
i++){
    const textElements[i];
const getComputedStyle(el);
const parseFloat(style.lineHeight);
const parseFloat(style.fontSize);
const lineHeight / fontSize;
if (lineHeightRatio < 1.2){
    issues.push({
    type: 'warning',
    title: '行高不足',
    description: `行高比例 ${
    lineHeightRatio.toFixed(2)
}
過小，影響閱讀體驗`,
    solution: '增加 line-height 至至少 1.4',
    priority: 'medium',
    element: el
}
);
count++;

}
if (count >=10)break;

}
return{
    count,
    issues
}
;

}
function isOverlapping(el1,
    el2){
    const el1.getBoundingClientRect();
const el2.getBoundingClientRect();
return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);

}
function calculateOverlapArea(rect1,
    rect2){
    const Math.max(rect1.left,
    rect2.left);
const Math.min(rect1.right,
    rect2.right);
const Math.max(rect1.top,
    rect2.top);
const Math.min(rect1.bottom,
    rect2.bottom);
if (left < right && top < bottom){
    return(right - left)*(bottom - top);

}
return 0;

}
function displayLayoutResults(results){
    const document.getElementById('layoutIssues');
const document.getElementById('issueCount');
const document.getElementById('generateSolution');
issueCount.textContent=`發現 ${
    results.totalIssues
}
個問題`;
issueCount.className=`issue-count ${
    results.totalIssues > 0 ? 'has-issues' : 'no-issues'
}
`;
if (generateSolutionBtn){
    generateSolutionBtn.style.display=results.totalIssues > 0 ? 'flex' : 'none';

}
if (results.totalIssues===0){
    layoutIssues.innerHTML=` <div class="no-issues"> <i class="fas fa-check-circle"></i> <h4>🎉 版面檢測通過！</h4> <p>未發現版面問題，您的網站版面設計良好。</p> </div> `;
return;

}
const {
    'high': 3,
    'medium': 2,
    'low': 1
}
;
results.issues.sort((a,
    b)=>(priorityOrder[b.priority] || 0)-(priorityOrder[a.priority] || 0));
let '<div class="issues-list">';
results.issues.forEach((issue,
    index)=>{
    const issue.type==='error' ? 'fas fa-exclamation-triangle' : 'fas fa-exclamation-circle';
const issue.type==='error' ? 'error' : 'warning';
const issue.priority || 'medium';
issuesHTML +=` <div class="issue-item ${
    colorClass
}
${
    priorityClass
}
"> <div class="issue-header"> <i class="${
    icon
}
"></i> <h4>${
    issue.title
}
</h4> <span class="priority-badge ${
    priorityClass
}
">${
    priorityClass.toUpperCase()
}
</span> </div> <p class="issue-description">${
    issue.description
}
</p> <div class="issue-solution"> <strong>解決方案：</strong> <code>${
    issue.solution
}
</code> </div> ${
    issue.overlapArea ? `<div class="issue-details">重疊面積：${
    Math.round(issue.overlapArea)
}
px²</div>` : ''
}
</div> `;

}
);
issuesHTML +='</div>';
layoutIssues.innerHTML=issuesHTML;
initSolutionGenerator(results);

}
function initSolutionGenerator(results){
    const document.getElementById('generateSolution');
const document.getElementById('solutionPanel');
const document.getElementById('solutionContent');
const document.getElementById('copySolution');
if (!generateSolutionBtn || !solutionPanel || !solutionContent)return;
generateSolutionBtn.addEventListener('click',
    function(){
    const generateComprehensiveSolution(results);
solutionContent.textContent=solution;
solutionPanel.style.display='block';
solutionPanel.scrollIntoView({
    behavior: 'smooth'
}
);

}
);
if (copySolutionBtn){
    copySolutionBtn.addEventListener('click',
    function(){
    navigator.clipboard.writeText(solutionContent.textContent).then(()=>{
    copySolutionBtn.innerHTML='<i class="fas fa-check"></i> 已複製';
setTimeout(()=>{
    copySolutionBtn.innerHTML='<i class="fas fa-copy"></i> 複製解決方案';

}
,
    2000);

}
);

}
);

}

}
function generateComprehensiveSolution(results){
    let ` `;
const {
    overlap: [],
    spacing: [],
    alignment: [],
    sizing: [],
    mobileLayout: [],
    typography: []
}
;
results.issues.forEach(issue=>{
    if (issue.title.includes('重疊')){
    categories.overlap.push(issue);

}
else 
if (issue.title.includes('間距')|| issue.title.includes('間距')){
    categories.spacing.push(issue);

}
else 
if (issue.title.includes('對齊')){
    categories.alignment.push(issue);

}
else 
if (issue.title.includes('尺寸')|| issue.title.includes('按鈕')|| issue.title.includes('圖片')){
    categories.sizing.push(issue);

}
else 
if (issue.title.includes('手機')|| issue.title.includes('滾動')){
    categories.mobileLayout.push(issue);

}
else 
if (issue.title.includes('字體')|| issue.title.includes('行高')|| issue.title.includes('標題')){
    categories.typography.push(issue);

}

}
);
if (categories.overlap.length > 0){
    solution +=` .container,
    .section,
    .tool-section,
    .terminology-card{
    position: relative;
z-index: 1;

}
.navbar{
    z-index: 1000;

}
.modal{
    z-index: 2000;

}
.tooltip{
    z-index: 3000;

}
.clearfix::after{
    content: "";
display: table;
clear: both;

}
`;

}
if (categories.spacing.length > 0){
    solution +=` .container,
    .wrapper,
    .content,
    .section{
    padding: 20px;
margin: 20px 0;

}
.terminology-card,
    .command-card,
    .feature-card{
    margin-bottom: 20px;
padding: 20px;

}
@media(max-width: 768px){
    .container,
    .wrapper,
    .content,
    .section{
    padding: 15px;
margin: 15px 0;

}
.terminology-card,
    .command-card,
    .feature-card{
    margin-bottom: 15px;
padding: 15px;

}

}
`;

}
if (categories.alignment.length > 0){
    solution +=` h1,
    h2,
    h3,
    h4,
    h5,
    h6{
    text-align: left;

}
p,
    .text,
    .content{
    text-align: left;
line-height: 1.6;

}
.flex,
    .d-flex{
    display: flex;
align-items: center;
justify-content: flex-start;

}
.grid{
    display: grid;
align-items: start;
justify-items: start;

}
`;

}
if (categories.sizing.length > 0){
    solution +=` button,
    .btn,
    input[type="button"],
    input[type="submit"]{
    min-width: 44px;
min-height: 44px;
padding: 12px 20px;

}
img{
    max-width: 100%;
height: auto;
object-fit: cover;

}
@media(max-width: 768px){
    button,
    .btn{
    min-width: 48px;
min-height: 48px;
padding: 14px 22px;

}

}
`;

}
if (categories.mobileLayout.length > 0){
    solution +=` body{
    overflow-x: hidden;
max-width: 100%;

}
.container{
    max-width: 100%;
padding: 0 15px;
box-sizing: border-box;

}
@media(max-width: 768px){
    .terminology-grid{
    grid-template-columns: 1fr;
gap: 15px;

}
.tool-section{
    margin: 10px 0;
padding: 15px;

}

}
`;

}
if (categories.typography.length > 0){
    solution +=` h1{
    font-size: 2.5rem;
font-weight: 700;

}
h2{
    font-size: 2rem;
font-weight: 600;

}
h3{
    font-size: 1.75rem;
font-weight: 600;

}
h4{
    font-size: 1.5rem;
font-weight: 500;

}
h5{
    font-size: 1.25rem;
font-weight: 500;

}
h6{
    font-size: 1rem;
font-weight: 500;

}
p,
    .text,
    .content{
    line-height: 1.6;
font-size: 1rem;

}
@media(max-width: 768px){
    h1{
    font-size: 2rem;

}
h2{
    font-size: 1.75rem;

}
h3{
    font-size: 1.5rem;

}
p,
    .text,
    .content{
    font-size: 0.9rem;

}

}
`;

}
solution +=` :root{
    --primary-color: #667eea;
--secondary-color: #764ba2;
--text-color: #2c3e50;
--bg-color: #ffffff;
--border-color: #e9ecef;
--shadow: rgba(0,
    0,
    0,
    0.1);

}
*,
    *::before,
    *::after{
    box-sizing: border-box;

}
html{
    scroll-behavior: smooth;

}
.container,
    .section,
    .tool-section,
    .terminology-card{
    will-change: transform;
transform: translateZ(0);

}
`;
return solution;

}
function smoothScrollTo(element,
    offset=0){
    if (element){
    setTimeout(()=>{
    element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
}
);

}
,
    100);

}

}
function initProjectAnalyzer(){
    const document.getElementById('analyzeProject');
const document.getElementById('analyzeUploadedFiles');
const document.getElementById('analysisResults');
const document.getElementById('analysisContent');
const document.getElementById('copyAnalysis');
const document.getElementById('projectFiles');
initAnalysisTabs();
initFileDragAndDrop();
if (!analyzeBtn || !analysisResults)return;
analyzeBtn.addEventListener('click',
    function(){
    const document.getElementById('projectPath').value.trim();
if (!projectPath){
    alert('請輸入專案路徑或網址');
return;

}
analyzeBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> 分析中...';
analyzeBtn.disabled=true;
performProjectAnalysis(projectPath).then(analysisData=>{
    displayAnalysisResults(analysisData);
analysisResults.style.display='block';
analyzeBtn.innerHTML='<i class="fas fa-analytics"></i> 分析專案結構';
analyzeBtn.disabled=false;

}
).catch(error=>{
    alert('專案分析失敗，請檢查網址是否正確或嘗試使用檔案上傳功能');
analyzeBtn.innerHTML='<i class="fas fa-analytics"></i> 分析專案結構';
analyzeBtn.disabled=false;

}
);
smoothScrollTo(analysisResults);

}
);
if (analyzeUploadBtn && projectFiles){
    analyzeUploadBtn.addEventListener('click',
    function(){
    const projectFiles.files;
if (files.length===0){
    alert('請選擇要分析的檔案');
return;

}
analyzeUploadBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> 分析中...';
analyzeUploadBtn.disabled=true;
analyzeUploadedFiles(files).then(analysisData=>{
    displayAnalysisResults(analysisData);
analysisResults.style.display='block';
smoothScrollTo(analysisResults);
analyzeUploadBtn.innerHTML='<i class="fas fa-upload"></i> 分析上傳檔案';
analyzeUploadBtn.disabled=false;

}
).catch(error=>{
    alert('檔案分析失敗，請檢查檔案格式是否正確');
analyzeUploadBtn.innerHTML='<i class="fas fa-upload"></i> 分析上傳檔案';
analyzeUploadBtn.disabled=false;

}
);

}
);

}
if (copyAnalysisBtn){
    copyAnalysisBtn.addEventListener('click',
    function(){
    const analysisContent.textContent;
navigator.clipboard.writeText(content).then(()=>{
    copyAnalysisBtn.innerHTML='<i class="fas fa-check"></i> 已複製';
setTimeout(()=>{
    copyAnalysisBtn.innerHTML='<i class="fas fa-copy"></i> 複製分析報告';

}
,
    2000);

}
);

}
);

}

}
function initAnalysisTabs(){
    const document.querySelectorAll('.analysis-input .tab-btn');
const document.querySelectorAll('.analysis-input .tab-content');
tabBtns.forEach(btn=>{
    btn.addEventListener('click',
    function(){
    const this.getAttribute('data-tab');
tabBtns.forEach(b=> b.classList.remove('active'));
tabContents.forEach(c=> c.classList.remove('active'));
this.classList.add('active');
document.getElementById(targetTab + '-tab').classList.add('active');

}
);

}
);

}
function initFileDragAndDrop(){
    const document.getElementById('fileUploadArea');
const document.getElementById('projectFiles');
const document.getElementById('fileListPreview');
const document.getElementById('selectedFilesList');
if (!uploadArea || !fileInput)return;
uploadArea.addEventListener('dragover',
    function(e){
    e.preventDefault();
e.stopPropagation();
uploadArea.classList.add('dragover');

}
);
uploadArea.addEventListener('dragleave',
    function(e){
    e.preventDefault();
e.stopPropagation();
uploadArea.classList.remove('dragover');

}
);
uploadArea.addEventListener('drop',
    function(e){
    e.preventDefault();
e.stopPropagation();
uploadArea.classList.remove('dragover');
const e.dataTransfer.files;
if (files.length > 0){
    handleFileSelection(files);

}

}
);
uploadArea.addEventListener('click',
    function(){
    fileInput.click();

}
);
fileInput.addEventListener('change',
    function(e){
    if (e.target.files.length > 0){
    handleFileSelection(e.target.files);

}

}
);
function handleFileSelection(files){
    const Array.from(files);
const fileArray.filter(file=> isValidFileType(file));
if (validFiles.length===0){
    alert('請選擇支援的檔案格式');
return;

}
const new DataTransfer();
validFiles.forEach(file=> dataTransfer.items.add(file));
fileInput.files=dataTransfer.files;
displaySelectedFiles(validFiles);

}
function isValidFileType(file){
    const [ '.html',
    '.htm',
    '.css',
    '.js',
    '.json',
    '.md',
    '.txt',
    '.xml',
    '.php',
    '.py',
    '.java',
    '.cpp',
    '.c',
    '.h',
    '.hpp',
    '.cs',
    '.rb',
    '.go',
    '.rs',
    '.ts',
    '.jsx',
    '.tsx',
    '.vue',
    '.svelte' ];
const file.name.toLowerCase();
return validExtensions.some(ext=> fileName.endsWith(ext));

}
function displaySelectedFiles(files){
    selectedFilesList.innerHTML='';
files.forEach((file,
    index)=>{
    const document.createElement('li');
li.innerHTML=` <i class="fas fa-file-code file-item-icon"></i> <div class="file-item-info"> <p class="file-item-name">${
    file.name
}
</p> <p class="file-item-size">${
    formatFileSize(file.size)
}
</p> </div> <button class="file-item-remove" onclick="removeFile(${
    index
}
)"> <i class="fas fa-times"></i> </button> `;
selectedFilesList.appendChild(li);

}
);
fileListPreview.style.display='block';

}
window.removeFile=function(index){
    const Array.from(fileInput.files);
fileArray.splice(index,
    1);
const new DataTransfer();
fileArray.forEach(file=> dataTransfer.items.add(file));
fileInput.files=dataTransfer.files;
if (fileArray.length > 0){
    displaySelectedFiles(fileArray);

}
else{
    fileListPreview.style.display='none';

}

}
;

}
async 
function analyzeUploadedFiles(files){
    const [];
const [];
for (
let 0;
i < files.length;
i++){
    const files[i];
const new Promise((resolve,
    reject)=>{
    const new FileReader();
reader.onload=function(e){
    resolve({
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    content: e.target.result
}
);

}
;
reader.onerror=reject;
reader.readAsText(file,
    'UTF-8');

}
);
filePromises.push(promise);

}
try{
    const await Promise.all(filePromises);
return performRealProjectAnalysis(fileContents);

}
catch(error){
    throw new Error('檔案讀取失敗: ' + error.message);

}

}
function performRealProjectAnalysis(fileContents){
    const {
    projectInfo:{
    name: '智能專案分析',
    type: '多檔案專案',
    technology: detectTechnologies(fileContents),
    status: '智能分析完成',
    lastUpdate: new Date().toLocaleDateString(),
    fileCount: fileContents.length
}
,
    projectStructure:{
    files: fileContents.map(file=>({
    name: file.name,
    size: formatFileSize(file.size),
    type: getFileType(file.name),
    lines: countLines(file.content),
    lastModified: new Date(file.lastModified).toLocaleDateString(),
    complexity: calculateFileComplexity(file.content,
    getFileExtension(file.name)),
    patterns: detectCodePatterns(file.content,
    getFileExtension(file.name))
}
)),
    directories: []
}
,
    projectFeatures: detectFeatures(fileContents),
    recommendations: generateIntelligentRecommendations(fileContents),
    issues: detectIntelligentIssues(fileContents),
    statistics: calculateStatistics(fileContents),
    codeAnalysis: analyzeCodeQuality(fileContents),
    architecture: analyzeArchitecture(fileContents),
    patterns: detectProjectPatterns(fileContents),
    security: analyzeSecurity(fileContents),
    performance: analyzePerformance(fileContents),
    maintainability: analyzeMaintainability(fileContents)
}
;
return analysisData;

}
function detectTechnologies(fileContents){
    const new Set();
fileContents.forEach(file=>{
    const getFileExtension(file.name);
const file.content.toLowerCase();
switch (ext){
    case 'html': case 'htm': technologies.add('HTML5');
if (content.includes('react')|| content.includes('jsx'))technologies.add('React');
if (content.includes('vue'))technologies.add('Vue.js');
if (content.includes('angular'))technologies.add('Angular');
break;
case 'css': technologies.add('CSS3');
if (content.includes('scss')|| content.includes('sass'))technologies.add('Sass/SCSS');
if (content.includes('less'))technologies.add('Less');
if (content.includes('stylus'))technologies.add('Stylus');
break;
case 'js': technologies.add('JavaScript');
if (content.includes('import ')|| content.includes('export '))technologies.add('ES6+');
if (content.includes('require('))technologies.add('CommonJS');
break;
case 'ts': technologies.add('TypeScript');
break;
case 'jsx': technologies.add('React');
technologies.add('JSX');
break;
case 'tsx': technologies.add('React');
technologies.add('TypeScript');
technologies.add('TSX');
break;
case 'vue': technologies.add('Vue.js');
break;
case 'svelte': technologies.add('Svelte');
break;
case 'php': technologies.add('PHP');
break;
case 'py': technologies.add('Python');
break;
case 'java': technologies.add('Java');
break;
case 'cpp': case 'c': case 'h': case 'hpp': technologies.add('C/C++');
break;
case 'cs': technologies.add('C#');
break;
case 'rb': technologies.add('Ruby');
break;
case 'go': technologies.add('Go');
break;
case 'rs': technologies.add('Rust');
break;

}

}
);
return Array.from(technologies).join(',
    ');

}
function detectFeatures(fileContents){
    const [];
fileContents.forEach(file=>{
    const file.content.toLowerCase();
const getFileExtension(file.name);
if (ext==='html' || ext==='htm'){
    if (content.includes('form'))features.push('表單功能');
if (content.includes('canvas'))features.push('Canvas 繪圖');
if (content.includes('video')|| content.includes('audio'))features.push('多媒體播放');
if (content.includes('localstorage')|| content.includes('sessionstorage'))features.push('本地儲存');
if (content.includes('websocket'))features.push('即時通訊');
if (content.includes('serviceworker')|| content.includes('manifest'))features.push('PWA 支援');

}
if (ext==='css'){
    if (content.includes('@media'))features.push('響應式設計');
if (content.includes('animation')|| content.includes('@keyframes'))features.push('動畫效果');
if (content.includes('flex')|| content.includes('grid'))features.push('現代化佈局');
if (content.includes('var('))features.push('CSS 變數');

}
if (ext==='js' || ext==='ts'){
    if (content.includes('fetch(')|| content.includes('axios')|| content.includes('ajax'))features.push('API 呼叫');
if (content.includes('addEventListener'))features.push('事件處理');
if (content.includes('class ')|| content.includes('extends'))features.push('物件導向程式設計');
if (content.includes('async')|| content.includes('await'))features.push('非同步處理');
if (content.includes('localStorage')|| content.includes('sessionStorage'))features.push('本地儲存');

}

}
);
return [...new Set(features)];

}
function generateRecommendations(fileContents){
    const [];
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (ext==='html' || ext==='htm'){
    if (!content.includes('<meta name="viewport"')){
    recommendations.push({
    title: '添加響應式設計 Meta 標籤',
    description: '建議添加 viewport meta 標籤以支援行動裝置顯示。',
    priority: 'high'
}
);

}
if (!content.includes('<meta name="description"')){
    recommendations.push({
    title: '添加 SEO Meta 標籤',
    description: '建議添加 description 和 keywords meta 標籤以提升 SEO。',
    priority: 'medium'
}
);

}
if (content.includes('<img')&& !content.includes('alt=')){
    recommendations.push({
    title: '圖片無障礙優化',
    description: '建議為所有圖片添加 alt 屬性以提升無障礙性。',
    priority: 'high'
}
);

}

}
if (ext==='css'){
    if (file.size > 50000){
    recommendations.push({
    title: 'CSS 檔案壓縮',
    description: 'CSS 檔案較大，建議進行壓縮以提升載入速度。',
    priority: 'medium'
}
);

}
if (!content.includes('@media')){
    recommendations.push({
    title: '添加響應式設計',
    description: '建議添加媒體查詢以支援不同螢幕尺寸。',
    priority: 'high'
}
);

}

}
if (ext==='js' || ext==='ts'){
    if (file.size > 100000){
    recommendations.push({
    title: 'JavaScript 檔案優化',
    description: 'JavaScript 檔案較大，建議進行程式碼分割或壓縮。',
    priority: 'medium'
}
);

}
if (content.includes('var ')&& !content.includes('let ')&& !content.includes('const ')){
    recommendations.push({
    title: '現代化 JavaScript',
    description: '建議使用 let 和 const 替代 var 以提升程式碼品質。',
    priority: 'low'
}
);

}

}

}
);
return recommendations;

}
function detectIssues(fileContents){
    const [];
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (file.size > 200000){
    issues.push({
    type: 'warning',
    title: `${
    file.name
}
檔案過大`,
    description: `檔案大小 ${
    formatFileSize(file.size)
}
，建議進行壓縮或分割。`
}
);

}
if (ext==='html' || ext==='htm'){
    if (content.includes('<script')&& !content.includes('defer')&& !content.includes('async')){
    issues.push({
    type: 'info',
    title: 'JavaScript 載入優化',
    description: '建議為 script 標籤添加 defer 或 async 屬性。'
}
);

}

}
if (ext==='css'){
    const content.split('\n').length;
if (lines > 1000){
    issues.push({
    type: 'info',
    title: 'CSS 檔案複雜度',
    description: `CSS 檔案有 ${
    lines
}
行，建議考慮模組化。`
}
);

}

}

}
);
return issues;

}
function calculateStatistics(fileContents){
    let 0;
let 0;
let 0;
let {
    
}
;
fileContents.forEach(file=>{
    totalSize +=file.size;
const countLines(file.content);
const countComments(file.content,
    getFileExtension(file.name));
totalLines +=lines;
totalComments +=comments;
const getFileExtension(file.name);
fileTypes[ext]=(fileTypes[ext] || 0)+ 1;

}
);
return{
    totalFiles: fileContents.length,
    totalSize: formatFileSize(totalSize),
    totalLines: totalLines,
    commentLines: totalComments,
    commentRatio: totalLines > 0 ? Math.round((totalComments / totalLines)* 100): 0,
    fileTypes: fileTypes,
    complexity: calculateComplexity(totalLines,
    fileContents.length)
}
;

}
function analyzeCodeQuality(fileContents){
    const {
    html:{
    score: 0,
    issues: []
}
,
    css:{
    score: 0,
    issues: []
}
,
    js:{
    score: 0,
    issues: []
}
,
    overall:{
    score: 0,
    grade: 'A'
}

}
;
fileContents.forEach(file=>{
    const getFileExtension(file.name);
const file.content;
if (ext==='html' || ext==='htm'){
    analysis.html=analyzeHTML(content);

}
else 
if (ext==='css'){
    analysis.css=analyzeCSS(content);

}
else 
if (ext==='js' || ext==='ts'){
    analysis.js=analyzeJavaScript(content);

}

}
);
const [analysis.html.score,
    analysis.css.score,
    analysis.js.score].filter(s=> s > 0);
analysis.overall.score=scores.length > 0 ? Math.round(scores.reduce((a,
    b)=> a + b,
    0)/ scores.length): 0;
analysis.overall.grade=getGrade(analysis.overall.score);
return analysis;

}
function getFileExtension(filename){
    return filename.split('.').pop().toLowerCase();

}
function getFileType(filename){
    const getFileExtension(filename);
const {
    'html': 'HTML 檔案',
    'htm': 'HTML 檔案',
    'css': 'CSS 樣式表',
    'js': 'JavaScript 檔案',
    'ts': 'TypeScript 檔案',
    'json': 'JSON 資料',
    'md': 'Markdown 文檔',
    'txt': '文字檔案',
    'xml': 'XML 檔案',
    'php': 'PHP 檔案',
    'py': 'Python 檔案',
    'java': 'Java 檔案',
    'cpp': 'C++ 檔案',
    'c': 'C 檔案',
    'h': 'C 標頭檔案',
    'hpp': 'C++ 標頭檔案',
    'cs': 'C# 檔案',
    'rb': 'Ruby 檔案',
    'go': 'Go 檔案',
    'rs': 'Rust 檔案',
    'jsx': 'React JSX 檔案',
    'tsx': 'React TSX 檔案',
    'vue': 'Vue.js 檔案',
    'svelte': 'Svelte 檔案'
}
;
return typeMap[ext] || '未知檔案類型';

}
function formatFileSize(bytes){
    if (bytes===0)
    return '0 Bytes';
const 1024;
const ['Bytes',
    'KB',
    'MB',
    'GB'];
const Math.floor(Math.log(bytes)/ Math.log(k));
return parseFloat((bytes / Math.pow(k,
    i)).toFixed(2))+ ' ' + sizes[i];

}
function countLines(content){
    return content.split('\n').length;

}
function countComments(content,
    ext){
    let 0;
const content.split('\n');
lines.forEach(line=>{
    const line.trim();
if (ext==='css' && trimmed.startsWith('')){
    commentCount++;

}
else 
if ((ext==='js' || ext==='ts')&&(trimmed.startsWith(' 
if (cleanSelector && !htmlContent.includes(cleanSelector)&& !cleanSelector.includes(':')){
    recommendations.push({
    title: `可能未使用的 CSS 選擇器: ${
    cleanSelector
}
`,
    description: `CSS 選擇器 "${
    cleanSelector
}
" 在 HTML 中未找到對應元素。`,
    priority: 'low',
    file: file.name,
    type: 'unused-css',
    solution: '檢查選擇器是否真的未使用，如果確認未使用則可以移除。',
    beforeCode: selector,
    afterCode: ''
}
);

}

}
);
const content.match(/#[0-9a-fA-F]{
    3,
    6
}
|rgb\(|rgba\(/g)|| [];
if (hardcodedColors.length > 5){
    recommendations.push({
    title: '過多硬編碼顏色',
    description: `發現 ${
    hardcodedColors.length
}
個硬編碼顏色值，建議使用 CSS 變數統一管理。`,
    priority: 'medium',
    file: file.name,
    type: 'hardcoded-colors',
    solution: generateCSSVariablesSolution(hardcodedColors),
    beforeCode: hardcodedColors.slice(0,
    3).join(',
    '),
    afterCode: generateCSSVariablesCode(hardcodedColors)
}
);

}

}

}
);
return recommendations;

}
function detectIntelligentIssues(fileContents){
    const [];
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (ext==='js' || ext==='ts'){
    const (content.match(/console\.log/g)|| []).length;
if (consoleLogs > 0){
    issues.push({
    type: 'warning',
    title: `發現 ${
    consoleLogs
}
個 console.log`,
    description: '生產環境中應移除 console.log 語句。',
    file: file.name
}
);

}
if (content.includes('eval(')){
    issues.push({
    type: 'error',
    title: '使用 eval()函數',
    description: 'eval()函數存在安全風險，建議避免使用。',
    file: file.name
}
);

}
const content.match(/Promise\s*\(|fetch\s*\(/g)|| [];
const content.match(/\.catch\s*\(/g)|| [];
if (promises.length > catchBlocks.length){
    issues.push({
    type: 'warning',
    title: '未處理的 Promise 錯誤',
    description: '部分 Promise 缺少錯誤處理，建議添加 .catch()。',
    file: file.name
}
);

}

}
if (ext==='html' || ext==='htm'){
    if (!content.includes('<!DOCTYPE html>')){
    issues.push({
    type: 'error',
    title: '缺少 DOCTYPE 聲明',
    description: 'HTML 文件缺少 DOCTYPE 聲明，可能導致樣式問題。',
    file: file.name
}
);

}
if (!content.includes('name="viewport"')){
    issues.push({
    type: 'warning',
    title: '缺少響應式 viewport',
    description: '缺少 viewport meta 標籤，影響行動裝置顯示。',
    file: file.name
}
);

}

}

}
);
return issues;

}
function analyzeArchitecture(fileContents){
    const {
    type: '未知',
    patterns: [],
    layers: [],
    complexity: '簡單'
}
;
const fileContents.filter(f=> f.name.endsWith('.html'));
const fileContents.filter(f=> f.name.endsWith('.css'));
const fileContents.filter(f=> f.name.endsWith('.js'));
if (htmlFiles.length > 0 && cssFiles.length > 0 && jsFiles.length > 0){
    architecture.type='傳統多頁面應用';

}
else 
if (jsFiles.some(f=> f.content.includes('React')|| f.content.includes('jsx'))){
    architecture.type='React 單頁應用';

}
else 
if (jsFiles.some(f=> f.content.includes('Vue'))){
    architecture.type='Vue.js 應用';

}
else 
if (jsFiles.some(f=> f.content.includes('Angular'))){
    architecture.type='Angular 應用';

}
const fileContents.map(f=> f.content).join('\n');
if (allContent.includes('module.exports')|| allContent.includes('require(')){
    architecture.patterns.push('CommonJS 模組');

}
if (allContent.includes('import ')|| allContent.includes('export ')){
    architecture.patterns.push('ES6 模組');

}
if (allContent.includes('class ')&& allContent.includes('extends ')){
    architecture.patterns.push('物件導向設計');

}
if (allContent.includes('function ')&& allContent.includes('
    return ')){
    architecture.patterns.push('函數式設計');

}
return architecture;

}
function detectProjectPatterns(fileContents){
    const [];
const fileContents.map(f=> f.content).join('\n');
if (allContent.includes('addEventListener')&& allContent.includes('removeEventListener')){
    patterns.push('觀察者模式');

}
if (allContent.includes('class ')&& allContent.includes('extends ')){
    patterns.push('繼承模式');

}
if (allContent.includes('new ')&& allContent.includes('class ')){
    patterns.push('工廠模式');

}
if (allContent.includes('Promise')|| allContent.includes('async')){
    patterns.push('異步模式');

}
if (allContent.includes('module.exports')|| allContent.includes('export ')){
    patterns.push('模組模式');

}
return patterns;

}
function analyzeSecurity(fileContents){
    const {
    score: 100,
    issues: [],
    recommendations: []
}
;
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (ext==='js' || ext==='ts'){
    if (content.includes('eval(')){
    security.score -=30;
security.issues.push('使用 eval()函數');

}
if (content.includes('innerHTML')&& content.includes('+')){
    security.score -=20;
security.issues.push('可能的 XSS 風險');

}
if (content.includes('localStorage')&& !content.includes('JSON.parse')){
    security.score -=10;
security.issues.push('localStorage 數據未驗證');

}

}
if (ext==='html' || ext==='htm'){
    if (content.includes('<script')&& !content.includes('integrity=')){
    security.score -=15;
security.issues.push('外部腳本缺少完整性檢查');

}

}

}
);
return security;

}
function analyzePerformance(fileContents){
    const {
    score: 100,
    issues: [],
    recommendations: []
}
;
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (ext==='js' || ext==='ts'){
    if (content.includes('
for (')&& content.includes('
for (')){
    performance.score -=10;
performance.issues.push('嵌套迴圈可能影響效能');

}
if (content.includes('document.getElementById')&& content.includes('
for (')){
    performance.score -=15;
performance.issues.push('在迴圈中查詢 DOM 元素');

}

}
if (ext==='css'){
    if (file.size > 50000){
    performance.score -=20;
performance.issues.push('CSS 檔案過大');

}

}

}
);
return performance;

}
function analyzeMaintainability(fileContents){
    const {
    score: 100,
    issues: [],
    recommendations: []
}
;
fileContents.forEach(file=>{
    const file.content;
const getFileExtension(file.name);
if (ext==='js' || ext==='ts'){
    const (content.match(/function\s+\w+/g)|| []).length;
const (content.match(/\/\/|\/\*/g)|| []).length;
if (functions > 0 && comments < functions){
    maintainability.score -=15;
maintainability.issues.push('函數缺少註解');

}
if (content.includes('var ')){
    maintainability.score -=10;
maintainability.issues.push('使用過時的 var 關鍵字');

}

}

}
);
return maintainability;

}
function generateUnusedVariableSolution(varName,
    content){
    const content.split('\n');
const lines.find(line=> line.includes(`let ${
    varName
}
`)|| line.includes(`const ${
    varName
}
`)|| line.includes(`var ${
    varName
}
`));
if (varLine && varLine.includes('=')){
    return `變數 "${
    varName
}
" 已宣告但未使用。建議：\n1. 檢查是否真的不需要這個變數\n2. 如果不需要，直接移除這行：\n ${
    varLine.trim()
}
\n3. 如果需要，檢查變數名是否正確`;

}
return `變數 "${
    varName
}
" 已宣告但未使用，建議檢查或移除。`;

}
function generateRefactoredFunction(func,
    functionName){
    const func.split('\n');
const Math.floor(lines.length / 2);
return ` function ${
    functionName
}
(){
    ${
    lines.slice(1,
    middle).join('\n ')
}
${
    lines.slice(middle,
    -1).join('\n ')
}

}
`;

}
function generateExtractedFunction(line){
    const line.trim();
const generateFunctionName(trimmed);
return ` function ${
    functionName
}
(){
    ${
    trimmed
}

}
${
    functionName
}
();
`;

}
function generateFunctionName(line){
    if (line.includes('console.log'))
    return 'logMessage';
if (line.includes('document.getElementById'))
    return 'getElementById';
if (line.includes('addEventListener'))
    return 'addEvent';
if (line.includes('style.'))
    return 'updateStyle';
return 'extractedFunction';

}
function detectPerformanceIssues(content){
    const [];
if (content.includes('
for (')&& content.includes('document.getElementById')){
    issues.push({
    title: '在迴圈中查詢 DOM',
    description: '在迴圈中重複查詢 DOM 元素會影響效能。',
    priority: 'high',
    solution: '將 DOM 查詢移到迴圈外，或使用 querySelectorAll 一次性獲取所有元素。',
    beforeCode: '
for (
let 0;
i < items.length;
i++){
    \n 
const document.getElementById(`item-${
    i
}
`);
\n
}
',
    afterCode: '
const document.querySelectorAll(\'[id^="item-"]\');
\n
for (
let 0;
i < elements.length;
i++){
    \n 
const elements[i];
\n
}
'
}
);

}
if (content.includes('addEventListener')&& !content.includes('removeEventListener')){
    issues.push({
    title: '缺少事件監聽器清理',
    description: '添加了事件監聽器但沒有對應的清理機制。',
    priority: 'medium',
    solution: '在適當的時機移除事件監聽器，避免記憶體洩漏。',
    beforeCode: 'element.addEventListener(\'click\',
    handler);
',
    afterCode: 'element.addEventListener(\'click\',
    handler);
\n
}
);

}
if (content.includes('XMLHttpRequest')&& content.includes('false')){
    issues.push({
    title: '使用同步 AJAX 請求',
    description: '同步 AJAX 請求會阻塞瀏覽器，影響用戶體驗。',
    priority: 'high',
    solution: '使用異步請求或 Promise/async-await 來處理 AJAX 請求。',
    beforeCode: 'xhr.open(\'GET\',
    url,
    false);
',
    afterCode: 'xhr.open(\'GET\',
    url,
    true);
\n
}
);

}
return issues;

}
function detectStyleIssues(content){
    const [];
if (content.includes('var ')){
    issues.push({
    title: '使用過時的 var 關鍵字',
    description: 'var 關鍵字存在作用域問題，建議使用 let 或 const。',
    priority: 'medium',
    solution: '將 var 替換為 let（可變）或 const（不可變），提升程式碼可讀性和安全性。',
    beforeCode: '
var value;
',
    afterCode: '
const value;

}
);

}
const content.split('\n');
const lines.filter(line=>{
    const line.trim();
return trimmed && !trimmed.endsWith(';
')&& !trimmed.endsWith('{
    ')&& !trimmed.endsWith('
}
')&& !trimmed.startsWith('
}
async 
function performProjectAnalysis(projectPath){
    if (projectPath.startsWith('http: 
    return await analyzeWebProject(projectPath);

}
else{
    return analyzeLocalProject(projectPath);

}

}
async 
function analyzeWebProject(url){
    try{
    if (isGitHubUrl(url)){
    return await analyzeGitHubProject(url);

}
if (isWebsiteUrl(url)){
    return await analyzeWebsiteProject(url);

}
return createDefaultWebAnalysis(url);

}
catch(error){
    return createErrorWebAnalysis(url,
    error.message);

}

}
function isGitHubUrl(url){
    return url.includes('github.com')&&(url.includes('/blob/')|| url.includes('/tree/')|| url.includes('/raw/'));

}
function isWebsiteUrl(url){
    return url.startsWith('http:
}
async 
function analyzeGitHubProject(url){
    try{
    const extractGitHubInfo(url);
const await fetchGitHubContent(url);
return{
    projectInfo:{
    name: projectInfo.name,
    type: 'GitHub 專案',
    technology: detectTechnologiesFromContent(content),
    status: '分析完成',
    lastUpdate: new Date().toLocaleDateString(),
    url: url,
    repository: projectInfo.repository,
    branch: projectInfo.branch
}
,
    projectStructure:{
    files: analyzeGitHubFiles(content),
    directories: []
}
,
    projectFeatures: detectFeaturesFromContent(content),
    recommendations: generateWebRecommendations(content,
    'github'),
    issues: detectWebIssues(content),
    statistics: calculateWebStatistics(content),
    codeAnalysis: analyzeWebCodeQuality(content),
    architecture: analyzeWebArchitecture(content),
    patterns: detectWebPatterns(content),
    security: analyzeWebSecurity(content),
    performance: analyzeWebPerformance(content),
    maintainability: analyzeWebMaintainability(content)
}
;

}
catch(error){
    return createErrorWebAnalysis(url,
    `GitHub 分析失敗: ${
    error.message
}
`);

}

}
async 
function analyzeWebsiteProject(url){
    try{
    const await fetchWebsiteContent(url);
return{
    projectInfo:{
    name: extractDomainName(url),
    type: '網站專案',
    technology: detectTechnologiesFromContent(content),
    status: '分析完成',
    lastUpdate: new Date().toLocaleDateString(),
    url: url
}
,
    projectStructure:{
    files: analyzeWebsiteFiles(content),
    directories: []
}
,
    projectFeatures: detectFeaturesFromContent(content),
    recommendations: generateWebRecommendations(content,
    'website'),
    issues: detectWebIssues(content),
    statistics: calculateWebStatistics(content),
    codeAnalysis: analyzeWebCodeQuality(content),
    architecture: analyzeWebArchitecture(content),
    patterns: detectWebPatterns(content),
    security: analyzeWebSecurity(content),
    performance: analyzeWebPerformance(content),
    maintainability: analyzeWebMaintainability(content)
}
;

}
catch(error){
    return createErrorWebAnalysis(url,
    `網站分析失敗: ${
    error.message
}
`);

}

}
function extractGitHubInfo(url){
    const url.match(/github\.com\/([^\/]+)\/([^\/]+)(?:\/(?:blob|tree|raw)\/([^\/]+))?/);
if (match){
    return{
    owner: match[1],
    repository: match[2],
    branch: match[3] || 'main',
    name: match[2]
}
;

}
return{
    name: '未知專案',
    repository: '',
    branch: 'main'
}
;

}
async 
function fetchGitHubContent(url){
    const url.replace('github.com',
    'raw.githubusercontent.com').replace('/blob/',
    '/').replace('/tree/',
    '/');
try{
    const await fetch(rawUrl);
if (!response.ok){
    throw new Error(`HTTP ${
    response.status
}
: ${
    response.statusText
}
`);

}
return await response.text();

}
catch(error){
    return await fetchGitHubApiContent(url);

}

}
async 
function fetchGitHubApiContent(url){
    const extractGitHubInfo(url);
const `https: try{
    const await fetch(apiUrl);
if (!response.ok){
    throw new Error(`GitHub API 錯誤: ${
    response.status
}
`);

}
const await response.json();
const data.filter(file=> file.name.endsWith('.html')|| file.name.endsWith('.css')|| file.name.endsWith('.js')|| file.name==='package.json' || file.name==='README.md');
let '';
for (const file of mainFiles.slice(0,
    5)){
    try{
    const await fetch(file.download_url);
if (fileResponse.ok){
    content +=await fileResponse.text()+ '\n\n';

}

}
catch(e){
    
}

}
return content;

}
catch(error){
    throw new Error(`GitHub API 請求失敗: ${
    error.message
}
`);

}

}
async 
function fetchWebsiteContent(url){
    try{
    const `https: 
const await fetch(proxyUrl);
if (!response.ok){
    throw new Error(`CORS 代理錯誤: ${
    response.status
}
`);

}
const await response.json();
return data.contents;

}
catch(error){
    try{
    const await fetch(url,
    {
    mode: 'cors',
    headers:{
    'Accept': 'text/html,
    application/xhtml+xml,
    application/xml;
q=0.9,
    *g)|| []).length;
if (functions > 0 && comments < functions){
    maintainability.score -=15;
maintainability.issues.push('函數缺少註解');

}
if (content.includes('var ')){
    maintainability.score -=10;
maintainability.issues.push('使用過時的 var 關鍵字');

}
return maintainability;

}
function extractDomainName(url){
    try{
    const new URL(url);
return urlObj.hostname.replace('www.',
    '');

}
catch(error){
    return '未知網站';

}

}
function createDefaultWebAnalysis(url){
    return{
    projectInfo:{
    name: extractDomainName(url),
    type: '網址專案',
    technology: '未知',
    status: '分析中',
    lastUpdate: new Date().toLocaleDateString(),
    url: url
}
,
    projectStructure:{
    files: [],
    directories: []
}
,
    projectFeatures: [],
    recommendations: [{
    title: '網址分析限制',
    description: '由於瀏覽器安全限制，無法直接分析外部網址的程式碼。建議使用檔案上傳功能進行分析。',
    priority: 'high'
}
],
    issues: [{
    type: 'info',
    title: '建議使用檔案上傳',
    description: '請將專案檔案下載後使用「檔案上傳」功能進行詳細分析。'
}
],
    statistics:{
    totalFiles: 0,
    totalSize: '0 Bytes',
    totalLines: 0,
    commentLines: 0,
    complexity: '未知'
}

}
;

}
function createErrorWebAnalysis(url,
    errorMessage){
    return{
    projectInfo:{
    name: extractDomainName(url),
    type: '網址專案',
    technology: '未知',
    status: '分析失敗',
    lastUpdate: new Date().toLocaleDateString(),
    url: url
}
,
    projectStructure:{
    files: [],
    directories: []
}
,
    projectFeatures: [],
    recommendations: [{
    title: '網址分析失敗',
    description: `無法分析網址：${
    errorMessage
}
`,
    priority: 'high'
}
],
    issues: [{
    type: 'error',
    title: '分析失敗',
    description: errorMessage
}
],
    statistics:{
    totalFiles: 0,
    totalSize: '0 Bytes',
    totalLines: 0,
    commentLines: 0,
    complexity: '未知'
}

}
;

}
function analyzeLocalProject(path){
    const extractProjectNameFromPath(path);
return{
    projectInfo:{
    name: projectName,
    type: '本地專案',
    technology: '未知（需要實際讀取檔案）',
    status: '分析中',
    lastUpdate: new Date().toLocaleDateString(),
    path: path
}
,
    projectStructure:{
    files: [],
    directories: []
}
,
    projectFeatures: [],
    recommendations: [{
    title: '本地路徑分析限制',
    description: '由於瀏覽器安全限制，無法直接讀取本地檔案系統。建議使用以下方式進行分析：',
    priority: 'high',
    solution: '1. 使用「檔案上傳」功能選擇專案檔案\n2. 將專案檔案拖拽到上傳區域\n3. 使用「專案資料夾選擇」功能（如果支援）\n4. 將專案上傳到 GitHub 後使用網址分析'
}
],
    issues: [{
    type: 'info',
    title: '建議使用檔案上傳',
    description: '請使用「檔案上傳」功能選擇專案檔案進行詳細分析。'
}
],
    statistics:{
    totalFiles: 0,
    totalSize: '0 Bytes',
    totalLines: 0,
    commentLines: 0,
    complexity: '未知'
}

}
;

}
function extractProjectNameFromPath(path){
    const path.replace(/[\\\/]/g,
    '/').replace(/^\.\ 
const cleanPath.split('/');
let pathParts[pathParts.length - 1];
if (!projectName || projectName==='..' || projectName==='.'){
    projectName=pathParts[pathParts.length - 2] || '未知專案';

}
projectName=projectName.replace(/[<>:"|?*]/g,
    '').trim();
return projectName || '本地專案';

}
function displayAnalysisResults(data){
    const document.getElementById('analysisContent');
let ` <div class="project-section project-info"> <h5>📊 專案資訊</h5> <p><strong>專案名稱：</strong>${
    data.projectInfo.name
}
</p> <p><strong>專案類型：</strong>${
    data.projectInfo.type
}
</p> <p><strong>主要技術：</strong>${
    data.projectInfo.technology
}
</p> <p><strong>專案狀態：</strong>${
    data.projectInfo.status
}
</p> <p><strong>最後更新：</strong>${
    data.projectInfo.lastUpdate
}
</p> ${
    data.projectInfo.fileCount ? `<p><strong>檔案數量：</strong>${
    data.projectInfo.fileCount
}
個檔案</p>` : ''
}
</div> <div class="project-section project-structure"> <h5>📁 專案結構</h5> <p><strong>檔案列表：</strong></p> <div class="file-list"> ${
    data.projectStructure.files.map(file=>{
    if (typeof file==='string'){
    return `<div class="file-item"><i class="fas fa-file"></i> ${
    file
}
</div>`;

}
else{
    return ` <div class="file-item"> <i class="fas fa-file"></i> <div class="file-details"> <span class="file-name">${
    file.name
}
</span> <span class="file-info">${
    file.type
}
• ${
    file.size
}
• ${
    file.lines
}
行</span> ${
    file.complexity ? `<span class="file-complexity ${
    file.complexity.toLowerCase().replace(' ',
    '-')
}
">${
    file.complexity
}
</span>` : ''
}
</div> ${
    file.patterns && file.patterns.length > 0 ? ` <div class="file-patterns"> ${
    file.patterns.map(pattern=> `<span class="pattern-tag small">${
    pattern
}
</span>`).join('')
}
</div> ` : ''
}
</div> `;

}

}
).join('')
}
</div> ${
    data.projectStructure.directories && data.projectStructure.directories.length > 0 ? ` <p><strong>目錄結構：</strong></p> <ul> ${
    data.projectStructure.directories.map(dir=> `<li>${
    dir
}
</li>`).join('')
}
</ul> ` : ''
}
</div> <div class="project-section project-features"> <h5>✨ 專案功能</h5> <ul> ${
    data.projectFeatures.map(feature=> `<li>${
    feature
}
</li>`).join('')
}
</ul> </div> ${
    data.statistics ? ` <div class="project-section project-statistics"> <h5>📈 專案統計</h5> <div class="stats-grid"> <div class="stat-item"> <span class="stat-label">總檔案數：</span> <span class="stat-value">${
    data.statistics.totalFiles
}
</span> </div> <div class="stat-item"> <span class="stat-label">總大小：</span> <span class="stat-value">${
    data.statistics.totalSize
}
</span> </div> <div class="stat-item"> <span class="stat-label">總行數：</span> <span class="stat-value">${
    data.statistics.totalLines
}
</span> </div> <div class="stat-item"> <span class="stat-label">註解行數：</span> <span class="stat-value">${
    data.statistics.commentLines
}
</span> </div> <div class="stat-item"> <span class="stat-label">註解比例：</span> <span class="stat-value">${
    data.statistics.commentRatio
}
%</span> </div> <div class="stat-item"> <span class="stat-label">複雜度：</span> <span class="stat-value">${
    data.statistics.complexity
}
</span> </div> </div> </div> ` : ''
}
${
    data.codeAnalysis ? ` <div class="project-section project-quality"> <h5>🔍 程式碼品質分析</h5> <div class="quality-scores"> <div class="quality-item"> <span class="quality-label">整體評分：</span> <span class="quality-score grade-${
    data.codeAnalysis.overall.grade.toLowerCase()
}
">${
    data.codeAnalysis.overall.score
}
/100(${
    data.codeAnalysis.overall.grade
}
)</span> </div> ${
    data.codeAnalysis.html.score > 0 ? ` <div class="quality-item"> <span class="quality-label">HTML 品質：</span> <span class="quality-score">${
    data.codeAnalysis.html.score
}
/100</span> </div> ` : ''
}
${
    data.codeAnalysis.css.score > 0 ? ` <div class="quality-item"> <span class="quality-label">CSS 品質：</span> <span class="quality-score">${
    data.codeAnalysis.css.score
}
/100</span> </div> ` : ''
}
${
    data.codeAnalysis.js.score > 0 ? ` <div class="quality-item"> <span class="quality-label">JavaScript 品質：</span> <span class="quality-score">${
    data.codeAnalysis.js.score
}
/100</span> </div> ` : ''
}
</div> </div> ` : ''
}
${
    data.architecture ? ` <div class="project-section project-architecture"> <h5>🏗️ 架構分析</h5> <div class="architecture-info"> <div class="arch-item"> <span class="arch-label">架構類型：</span> <span class="arch-value">${
    data.architecture.type
}
</span> </div> ${
    data.architecture.patterns.length > 0 ? ` <div class="arch-item"> <span class="arch-label">設計模式：</span> <span class="arch-value">${
    data.architecture.patterns.join(',
    ')
}
</span> </div> ` : ''
}
</div> </div> ` : ''
}
${
    data.patterns && data.patterns.length > 0 ? ` <div class="project-section project-patterns"> <h5>🎨 程式碼模式</h5> <div class="patterns-list"> ${
    data.patterns.map(pattern=> ` <span class="pattern-tag">${
    pattern
}
</span> `).join('')
}
</div> </div> ` : ''
}
${
    data.security ? ` <div class="project-section project-security"> <h5>🔒 安全性分析</h5> <div class="security-score"> <div class="score-item"> <span class="score-label">安全評分：</span> <span class="score-value ${
    data.security.score >=80 ? 'good' : data.security.score >=60 ? 'warning' : 'danger'
}
">${
    data.security.score
}
/100</span> </div> ${
    data.security.issues.length > 0 ? ` <div class="security-issues"> <h6>安全問題：</h6> <ul> ${
    data.security.issues.map(issue=> `<li>${
    issue
}
</li>`).join('')
}
</ul> </div> ` : ''
}
</div> </div> ` : ''
}
${
    data.performance ? ` <div class="project-section project-performance"> <h5>⚡ 效能分析</h5> <div class="performance-score"> <div class="score-item"> <span class="score-label">效能評分：</span> <span class="score-value ${
    data.performance.score >=80 ? 'good' : data.performance.score >=60 ? 'warning' : 'danger'
}
">${
    data.performance.score
}
/100</span> </div> ${
    data.performance.issues.length > 0 ? ` <div class="performance-issues"> <h6>效能問題：</h6> <ul> ${
    data.performance.issues.map(issue=> `<li>${
    issue
}
</li>`).join('')
}
</ul> </div> ` : ''
}
</div> </div> ` : ''
}
${
    data.maintainability ? ` <div class="project-section project-maintainability"> <h5>🔧 可維護性分析</h5> <div class="maintainability-score"> <div class="score-item"> <span class="score-label">可維護性評分：</span> <span class="score-value ${
    data.maintainability.score >=80 ? 'good' : data.maintainability.score >=60 ? 'warning' : 'danger'
}
">${
    data.maintainability.score
}
/100</span> </div> ${
    data.maintainability.issues.length > 0 ? ` <div class="maintainability-issues"> <h6>可維護性問題：</h6> <ul> ${
    data.maintainability.issues.map(issue=> `<li>${
    issue
}
</li>`).join('')
}
</ul> </div> ` : ''
}
</div> </div> ` : ''
}
${
    data.issues && data.issues.length > 0 ? ` <div class="project-section project-issues"> <h5>⚠️ 發現問題</h5> ${
    data.issues.map(issue=> ` <div class="issue-item ${
    issue.type
}
"> <i class="fas fa-${
    issue.type==='warning' ? 'exclamation-triangle' : 'info-circle'
}
"></i> <div class="issue-content"> <h6>${
    issue.title
}
</h6> <p>${
    issue.description
}
</p> </div> </div> `).join('')
}
</div> ` : ''
}
<div class="project-section project-recommendations"> <h5>💡 AI 優化建議與解決方案</h5> ${
    data.recommendations.map(rec=> ` <div class="recommendation-item ${
    rec.priority || ''
}
" data-type="${
    rec.type || ''
}
"> <div class="recommendation-header"> <h6>${
    rec.title
}
</h6> ${
    rec.priority ? `<span class="priority-badge priority-${
    rec.priority
}
">${
    rec.priority==='high' ? '高' : rec.priority==='medium' ? '中' : '低'
}
優先級</span>` : ''
}
</div> <p>${
    rec.description
}
</p> ${
    rec.file ? `<small class="recommendation-file">檔案: ${
    rec.file
}
</small>` : ''
}
${
    rec.solution ? ` <div class="recommendation-solution"> <h6>🔧 解決方案：</h6> <p>${
    rec.solution.replace(/\n/g,
    '<br>')
}
</p> </div> ` : ''
}
${
    rec.beforeCode && rec.afterCode ? ` <div class="code-comparison"> <div class="code-tabs"> <button class="code-tab active" data-tab="before">修改前</button> <button class="code-tab" data-tab="after">修改後</button> </div> <div class="code-content"> <div class="code-block active" id="before-${
    data.recommendations.indexOf(rec)
}
"> <pre><code>${
    rec.beforeCode
}
</code></pre> </div> <div class="code-block" id="after-${
    data.recommendations.indexOf(rec)
}
"> <pre><code>${
    rec.afterCode
}
</code></pre> </div> </div> </div> ` : ''
}
</div> `).join('')
}
</div> `;
analysisContent.innerHTML=html;
initProjectSolutionGenerator(data);
initCodeComparisonTabs();
initExportFunctionality();

}
function initCodeComparisonTabs(){
    const document.querySelectorAll('.code-tab');
codeTabs.forEach(tab=>{
    tab.addEventListener('click',
    function(){
    const this.getAttribute('data-tab');
const this.closest('.code-comparison');
const comparison.querySelectorAll('.code-tab');
const comparison.querySelectorAll('.code-block');
allTabs.forEach(t=> t.classList.remove('active'));
allBlocks.forEach(b=> b.classList.remove('active'));
this.classList.add('active');
const comparison.querySelector(`#${
    tabType
}
-${
    this.closest('.recommendation-item').getAttribute('data-index')|| '0'
}
`);
if (targetBlock){
    targetBlock.classList.add('active');

}

}
);

}
);

}
function initExportFunctionality(){
    const document.getElementById('exportBtn');
const document.getElementById('exportMenu');
const document.querySelectorAll('.export-option');
if (!exportBtn || !exportMenu)return;
exportBtn.addEventListener('click',
    function(e){
    e.stopPropagation();
const this.closest('.export-dropdown');
dropdown.classList.toggle('open');

}
);
document.addEventListener('click',
    function(e){
    if (!exportBtn.contains(e.target)&& !exportMenu.contains(e.target)){
    exportBtn.closest('.export-dropdown').classList.remove('open');

}

}
);
exportOptions.forEach(option=>{
    option.addEventListener('click',
    function(){
    const this.getAttribute('data-format');
exportAnalysisResults(format);
exportBtn.closest('.export-dropdown').classList.remove('open');

}
);

}
);

}
function exportAnalysisResults(format){
    const document.getElementById('analysisContent');
if (!analysisContent){
    alert('沒有可匯出的分析結果');
return;

}
const getCurrentAnalysisData();
if (!analysisData){
    alert('無法獲取分析數據');
return;

}
switch (format){
    case 'pdf': exportToPDF(analysisData);
break;
case 'json': exportToJSON(analysisData);
break;
case 'markdown': exportToMarkdown(analysisData);
break;
case 'excel': exportToExcel(analysisData);
break;
default: alert('不支援的匯出格式');

}

}
function getCurrentAnalysisData(){
    const document.getElementById('analysisContent');
if (!analysisContent)
    return null;
return{
    projectInfo:{
    name: '專案分析結果',
    type: '分析報告',
    technology: '多技術棧',
    status: '分析完成',
    lastUpdate: new Date().toLocaleDateString()
}
,
    content: analysisContent.innerHTML,
    timestamp: new Date().toISOString()
}
;

}
function exportToPDF(data){
    try{
    const generatePDFContent(data);
if (typeof window.jsPDF !=='undefined'){
    const new window.jsPDF();
doc.html(pdfContent,
    {
    callback: function(doc){
    doc.save(`專案分析報告_${
    new Date().toISOString().split('T')[0]
}
.pdf`);

}
,
    x: 15,
    y: 15,
    width: 170,
    windowWidth: 650
}
);

}
else{
    printToPDF(data);

}

}
catch(error){
    alert('PDF 匯出失敗，請嘗試其他格式');

}

}
function exportToJSON(data){
    try{
    const {
    projectInfo: data.projectInfo,
    analysisData: data,
    exportInfo:{
    format: 'JSON',
    timestamp: new Date().toISOString(),
    version: '1.0'
}

}
;
const JSON.stringify(jsonData,
    null,
    2);
const new Blob([jsonString],
    {
    type: 'application/json'
}
);
const URL.createObjectURL(blob);
const document.createElement('a');
a.href=url;
a.download=`專案分析報告_${
    new Date().toISOString().split('T')[0]
}
.json`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

}
catch(error){
    alert('JSON 匯出失敗');

}

}
function exportToMarkdown(data){
    try{
    const generateMarkdownContent(data);
const new Blob([markdownContent],
    {
    type: 'text/markdown'
}
);
const URL.createObjectURL(blob);
const document.createElement('a');
a.href=url;
a.download=`專案分析報告_${
    new Date().toISOString().split('T')[0]
}
.md`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

}
catch(error){
    alert('Markdown 匯出失敗');

}

}
function exportToExcel(data){
    try{
    const generateExcelData(data);
if (typeof window.XLSX !=='undefined'){
    const window.XLSX.utils.json_to_sheet(excelData);
const window.XLSX.utils.book_new();
window.XLSX.utils.book_append_sheet(wb,
    ws,
    '專案分析');
window.XLSX.writeFile(wb,
    `專案分析報告_${
    new Date().toISOString().split('T')[0]
}
.xlsx`);

}
else{
    exportToCSV(excelData);

}

}
catch(error){
    alert('Excel 匯出失敗，請嘗試其他格式');

}

}
function generatePDFContent(data){
    return ` <div style="font-family: Arial,
    sans-serif;
max-width: 800px;
margin: 0 auto;
"> <h1 style="color: #2c3e50;
text-align: center;
margin-bottom: 30px;
"> 📊 專案分析報告 </h1> <div style="background: #f8f9fa;
padding: 20px;
border-radius: 8px;
margin-bottom: 20px;
"> <h2 style="color: #495057;
margin-top: 0;
">專案資訊</h2> <p><strong>專案名稱：</strong>${
    data.projectInfo.name
}
</p> <p><strong>專案類型：</strong>${
    data.projectInfo.type
}
</p> <p><strong>主要技術：</strong>${
    data.projectInfo.technology
}
</p> <p><strong>分析狀態：</strong>${
    data.projectInfo.status
}
</p> <p><strong>分析時間：</strong>${
    data.projectInfo.lastUpdate
}
</p> </div> <div style="margin-top: 30px;
"> <h2 style="color: #495057;
">詳細分析結果</h2> <div style="background: white;
padding: 20px;
border: 1px solid #dee2e6;
border-radius: 8px;
"> ${
    data.content.replace(/<[^>]*>/g,
    '').replace(/\n\s*\n/g,
    '\n\n')
}
</div> </div> <div style="text-align: center;
margin-top: 40px;
color: #6c757d;
font-size: 12px;
"> 此報告由 AI 專案管理工具生成於 ${
    new Date().toLocaleString()
}
</div> </div> `;

}
function generateMarkdownContent(data){
    return `# 📊 專案分析報告 ## 專案資訊 - **專案名稱**: ${
    data.projectInfo.name
}
- **專案類型**: ${
    data.projectInfo.type
}
- **主要技術**: ${
    data.projectInfo.technology
}
- **分析狀態**: ${
    data.projectInfo.status
}
- **分析時間**: ${
    data.projectInfo.lastUpdate
}
## 詳細分析結果 ${
    data.content.replace(/<[^>]*>/g,
    '').replace(/\n\s*\n/g,
    '\n\n')
}
--- *此報告由 AI 專案管理工具生成於 ${
    new Date().toLocaleString()
}
* `;

}
function generateExcelData(data){
    const [];
excelData.push({
    '類別': '專案資訊',
    '項目': '專案名稱',
    '值': data.projectInfo.name
}
);
excelData.push({
    '類別': '專案資訊',
    '項目': '專案類型',
    '值': data.projectInfo.type
}
);
excelData.push({
    '類別': '專案資訊',
    '項目': '主要技術',
    '值': data.projectInfo.technology
}
);
excelData.push({
    '類別': '專案資訊',
    '項目': '分析狀態',
    '值': data.projectInfo.status
}
);
excelData.push({
    '類別': '專案資訊',
    '項目': '分析時間',
    '值': data.projectInfo.lastUpdate
}
);
return excelData;

}
function printToPDF(data){
    const window.open('',
    '_blank');
printWindow.document.write(generatePDFContent(data));
printWindow.document.close();
printWindow.focus();
printWindow.print();

}
function exportToCSV(data){
    try{
    const generateCSVContent(data);
const new Blob([csvContent],
    {
    type: 'text/csv;
charset=utf-8;
'
}
);
const URL.createObjectURL(blob);
const document.createElement('a');
a.href=url;
a.download=`專案分析報告_${
    new Date().toISOString().split('T')[0]
}
.csv`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

}
catch(error){
    alert('CSV 匯出失敗');

}

}
function generateCSVContent(data){
    const [ ['類別',
    '項目',
    '值'],
    ['專案資訊',
    '專案名稱',
    data.projectInfo.name],
    ['專案資訊',
    '專案類型',
    data.projectInfo.type],
    ['專案資訊',
    '主要技術',
    data.projectInfo.technology],
    ['專案資訊',
    '分析狀態',
    data.projectInfo.status],
    ['專案資訊',
    '分析時間',
    data.projectInfo.lastUpdate] ];
return rows.map(row=> row.map(cell=> `"${
    cell
}
"`).join(',
    ')).join('\n');

}
function initProjectSolutionGenerator(data){
    const document.getElementById('generateProjectSolution');
const document.getElementById('projectSolutionPanel');
const document.getElementById('projectSolutionContent');
const document.getElementById('copyProjectSolution');
if (!generateProjectSolutionBtn || !projectSolutionPanel || !projectSolutionContent)return;
generateProjectSolutionBtn.style.display='flex';
generateProjectSolutionBtn.addEventListener('click',
    function(){
    const generateProjectSolution(data);
projectSolutionContent.textContent=solution;
projectSolutionPanel.style.display='block';
projectSolutionPanel.scrollIntoView({
    behavior: 'smooth'
}
);

}
);
if (copyProjectSolutionBtn){
    copyProjectSolutionBtn.addEventListener('click',
    function(){
    navigator.clipboard.writeText(projectSolutionContent.textContent).then(()=>{
    copyProjectSolutionBtn.innerHTML='<i class="fas fa-check"></i> 已複製';
setTimeout(()=>{
    copyProjectSolutionBtn.innerHTML='<i class="fas fa-copy"></i> 複製解決方案';

}
,
    2000);

}
);

}
);

}

}
function generateProjectSolution(data){
    let ` :root{
    --primary-color: #667eea;
--secondary-color: #764ba2;
--accent-color: #f093fb;
--text-color: #2c3e50;
--text-light: #6c757d;
--bg-color: #ffffff;
--bg-light: #f8f9fa;
--border-color: #e9ecef;
--shadow: rgba(0,
    0,
    0,
    0.1);
--font-family: -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
--font-size-base: 16px;
--line-height-base: 1.6;
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-xxl: 3rem;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;

}
*,
    *::before,
    *::after{
    box-sizing: border-box;
margin: 0;
padding: 0;

}
body{
    font-family: var(--font-family);
font-size: var(--font-size-base);
line-height: var(--line-height-base);
color: var(--text-color);
background-color: var(--bg-color);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

}
.container{
    max-width: 1200px;
margin: 0 auto;
padding: 0 var(--spacing-md);

}
`;
return solution;

}
window.AITerminologyWebsite={
    CONFIG,
    initializeSmartSearch,
    initializeGlossary,
    addLoadingProgress,
    addTooltips,
    initializeTemplateCopy,
    initializeFeatureCombiner,
    initializeProjectTools,
    initMobileChecker,
    initLayoutOptimizationChecker,
    initProjectAnalyzer
}
;