@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

:start
echo ================================
echo 🤖 AI指令大全網站 - 完整管理工具
echo ================================
echo.

echo 請選擇操作：
echo 1. 一鍵修復推送問題
echo 2. 檢查檔案上傳問題
echo 3. 部署指定版本 (上架)
echo 4. 下架所有檔案
echo 5. 建立版本備份
echo 6. 查看版本資訊
echo 7. 自動初始化 Git 倉庫
echo 8. 修復 Git 同步問題
echo 9. 快速上傳檔案
echo 10. 連接新的 GitHub 倉庫 (取代現有)
echo 11. 退出
echo.

set /p choice=請輸入選項 (1-11): 

if "%choice%"=="1" goto fix_push
if "%choice%"=="2" goto check_upload
if "%choice%"=="3" goto deploy_version
if "%choice%"=="4" goto cleanup_github
if "%choice%"=="5" goto create_backup
if "%choice%"=="6" goto show_versions
if "%choice%"=="7" goto auto_init_git
if "%choice%"=="8" goto fix_git_sync
if "%choice%"=="9" goto quick_upload
if "%choice%"=="10" goto connect_new_repo
if "%choice%"=="11" goto exit
echo 無效選項
pause
goto start

:fix_push
echo.
echo ================================
echo 🚀 一鍵修復推送問題
echo ================================
echo.

echo 正在修復推送問題...
echo.

echo 步驟1: 下載GitHub內容...
echo 這會將GitHub上的內容下載到您的電腦
git pull origin main --allow-unrelated-histories
if errorlevel 1 (
    echo ❌ 下載失敗，嘗試其他方法...
    echo.
    echo 正在獲取遠端內容...
    git fetch origin main
    echo ✅ 遠端內容已獲取
    echo.
    echo 正在合併內容...
    git merge origin/main --allow-unrelated-histories
    if errorlevel 1 (
        echo ❌ 合併失敗
        echo 請手動解決衝突或選擇強制覆蓋
        pause
        goto start
    )
) else (
    echo ✅ GitHub內容已下載
)

echo.
echo 步驟2: 檢查當前狀態...
git status
echo.

echo 步驟3: 添加所有檔案到Git...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 檔案已添加

echo.
echo 步驟4: 提交檔案...
set commit_msg=修復推送問題 - %date% %time%
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 檔案已提交

echo.
echo 步驟5: 推送到GitHub...
git push origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 需要先同步遠端內容
    echo.
    echo 建議使用「修復 Git 同步問題」功能
    pause
    goto start
)

echo.
echo ================================
echo 🎉 修復成功！
echo ================================
echo.
echo 您的網站已成功更新：
echo GitHub: https://github.com/sky770825/Aibot888
echo 網站: https://sky770825.github.io/Aibot888/
echo.
echo 現在您可以正常使用部署工具了！

echo.
pause
goto start

:check_upload
echo.
echo ================================
echo 🔍 檢查檔案上傳問題
echo ================================
echo.

echo 正在檢查本地檔案...
echo.

echo 本地檔案列表：
echo ================================
dir /b *.html *.css *.js *.txt *.md 2>nul
echo ================================

echo.
echo 正在檢查Git狀態...
echo.

echo Git追蹤的檔案：
echo ================================
git ls-files
echo ================================

echo.
echo 正在檢查未追蹤的檔案...
echo ================================
git status --porcelain
echo ================================

echo.
echo 正在檢查GitHub上的檔案...
echo ================================
git ls-tree -r origin/main --name-only 2>nul
echo ================================

echo.
echo ================================
echo 🔧 修復檔案上傳問題
echo ================================
echo.

echo 步驟1: 添加所有檔案到Git...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 所有檔案已添加

echo.
echo 步驟2: 檢查添加的檔案...
git status --short
echo.

echo 步驟3: 提交檔案...
set commit_msg=添加所有網站檔案 - %date% %time%
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 檔案已提交

echo.
echo 步驟4: 推送到GitHub...
git push origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 需要先同步遠端內容
    echo.
    echo 建議使用「修復 Git 同步問題」功能
    pause
    goto start
)
echo ✅ 推送成功！
echo 所有檔案已上傳到GitHub

echo.
echo 步驟5: 驗證上傳結果...
echo.
echo GitHub上的檔案：
echo ================================
git ls-tree -r origin/main --name-only
echo ================================

echo.
echo 您的網站地址：
echo https://sky770825.github.io/Aibot888/
echo.

pause
goto start

:deploy_version
echo.
echo ================================
echo 📦 部署指定版本
echo ================================
echo.

echo 可用的本地版本：
dir /b | findstr "^v" 2>nul
echo.

if errorlevel 1 (
    echo  沒有找到版本資料夾！
    echo.
    echo  建議操作：
    echo 1. 使用 "建立版本備份" 建立版本
    echo 2. 或使用 "一鍵修復推送問題" 部署當前版本
    echo.
    pause
    goto start
)

echo.
set /p version=請輸入要部署的版本號 (如 v1.5): 

if "%version%"=="" (
    echo 版本號不能為空！
    pause
    goto start
)

if not exist "%version%" (
    echo 版本資料夾不存在：%version%
    echo 可用的版本：
    dir /b | findstr "^v"
    echo.
    pause
    goto start
)

echo.
echo  正在部署版本：%version%
echo.

echo  步驟1: 備份當前檔案...
if not exist "backup_current" mkdir backup_current
copy index.html backup_current\ 2>nul
copy script.js backup_current\ 2>nul
copy styles.css backup_current\ 2>nul
copy "ai網站管理工具.bat" backup_current\ 2>nul
echo  當前檔案已備份

echo.
echo  步驟2: 下架GitHub舊檔案...
git rm -r --cached .
echo  GitHub舊檔案已下架

echo.
echo  步驟3: 複製版本檔案...
copy "%version%\index.html" . 2>nul
copy "%version%\script.js" . 2>nul
copy "%version%\styles.css" . 2>nul
copy "%version%\ai網站管理工具.bat" . 2>nul
echo  版本檔案已複製

echo.
echo  步驟4: 檢查Git狀態...
git status
echo.

echo  步驟5: 添加版本檔案到Git...
git add .
if errorlevel 1 (
    echo  ❌ 添加檔案失敗
    pause
    goto start
)
echo  版本檔案已添加到Git

echo.
echo  步驟6: 提交變更...
set commit_msg=部署版本 %version% - %date% %time%
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo  ❌ 提交失敗
    pause
    goto start
)
echo  變更已提交

echo.
echo  步驟7: 上架到GitHub...
git push origin main
if errorlevel 1 (
    echo  ❌ 上架失敗
    echo.
    echo  可能的原因：
    echo  1. 網路連接問題
    echo  2. GitHub 認證問題
    echo  3. 需要先同步遠端內容
    echo.
    echo  建議使用「修復 Git 同步問題」功能
    pause
    goto start
)
echo  版本 %version% 已上架到GitHub

echo.
echo ================================
echo  部署完成！
echo ================================
echo.
echo  部署資訊：
echo   版本：%version%
echo   時間：%date% %time%
echo   GitHub：https://github.com/sky770825/Aibot888
echo   網站：https://sky770825.github.io/Aibot888/
echo.

set /p restore=是否恢復到部署前的狀態？(y/n): 
if /i "%restore%"=="y" (
    echo.
    echo 🔄 正在恢復檔案...
    copy backup_current\index.html . 2>nul
    copy backup_current\script.js . 2>nul
    copy backup_current\styles.css . 2>nul
    copy backup_current\ai網站管理工具.bat . 2>nul
    echo  檔案已恢復到部署前狀態
    echo.
    echo  提示：GitHub上仍然是 %version% 版本
    echo     只有本地檔案恢復了
)

echo.
pause
goto start

:cleanup_github
echo.
echo ================================
echo 🗑️ 下架所有檔案
echo ================================
echo.

echo   警告：這將刪除GitHub上的所有檔案！
echo.
echo 下架後的效果：
echo - GitHub Repository 會變成空白
echo - 網站會無法顯示
echo - 所有檔案都會被移除
echo.

set /p confirm=確定要下架所有檔案嗎？(y/n): 

if /i not "%confirm%"=="y" (
    echo 操作已取消
    pause
    goto start
)

echo.
echo  步驟1: 備份當前檔案...
if not exist "backup_before_cleanup" mkdir backup_before_cleanup
copy index.html backup_before_cleanup\ 2>nul
copy styles.css backup_before_cleanup\ 2>nul
copy script.js backup_before_cleanup\ 2>nul
copy "ai網站管理工具.bat" backup_before_cleanup\ 2>nul
copy *.txt backup_before_cleanup\ 2>nul
copy *.md backup_before_cleanup\ 2>nul
echo  檔案已備份到 backup_before_cleanup 資料夾

echo.
echo  步驟2: 下架GitHub檔案...
git rm -r --cached .
echo  GitHub檔案已從暫存區移除

echo.
echo  步驟3: 提交下架變更...
git commit -m "下架所有檔案 - %date% %time%"
echo  下架變更已提交

echo.
echo  步驟4: 推送到GitHub...
git push origin main
echo  下架完成，已推送到GitHub

echo.
echo ================================
echo  下架完成！
echo ================================
echo.
echo  下架資訊：
echo   時間：%date% %time%
echo   GitHub：https://github.com/sky770825/Aibot888 (現在是空白)
echo   網站：https://sky770825.github.io/Aibot888/ (無法顯示)
echo.
echo  備份位置：backup_before_cleanup 資料夾
echo.
echo  提示：可以選擇 "部署指定版本" 重新上架版本
echo.

pause
goto start

:create_backup
echo.
echo ================================
echo 💾 建立版本備份
echo ================================
echo.

set /p version=請輸入版本號 (如 v1.5): 

if "%version%"=="" (
    echo 版本號不能為空！
    pause
    goto start
)

echo 正在建立 %version% 資料夾...
mkdir %version% 2>nul

echo 正在複製檔案...
copy index.html %version%\ 2>nul
copy script.js %version%\ 2>nul
copy styles.css %version%\ 2>nul
copy "ai網站管理工具.bat" %version%\ 2>nul

echo.
echo 複製完成！
echo 版本資料夾：%version%
echo.

set /p deploy_now=是否立即部署此版本？(y/n): 
if /i "%deploy_now%"=="y" (
    echo 正在部署版本 %version%...
    goto deploy_version
)

echo.
pause
goto start

:show_versions
echo.
echo ================================
echo 📋 版本資訊
echo ================================
echo.

echo 本地版本：
dir /b | findstr "^v" 2>nul
if errorlevel 1 (
    echo  沒有找到版本資料夾
) else (
    echo  找到以上版本
)
echo.

echo GitHub狀態：
git status 2>nul
if errorlevel 1 (
    echo  Git未初始化
) else (
    echo  Git已初始化
)
echo.

echo 最近提交記錄：
git log --oneline -5 2>nul
echo.

pause
goto start

:auto_init_git
echo.
echo ================================
echo 🚀 自動初始化 Git 倉庫
echo ================================
echo.

echo 正在檢查 Git 是否已安裝...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git 未安裝或未正確配置
    echo 請先安裝 Git: https://git-scm.com/
    pause
    goto start
)
echo ✅ Git 已安裝

echo.
echo 正在檢查是否已初始化 Git 倉庫...
if exist ".git" (
    echo ✅ Git 倉庫已存在
    echo 當前狀態：
    git status --short
) else (
    echo 正在初始化 Git 倉庫...
    git init
    if errorlevel 1 (
        echo ❌ 初始化失敗
        pause
        goto start
    )
    echo ✅ Git 倉庫已初始化
)

echo.
echo 正在檢查遠端倉庫...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo 正在添加遠端倉庫...
    git remote add origin https://github.com/sky770825/Aibot888.git
    echo ✅ 遠端倉庫已添加
) else (
    echo ✅ 遠端倉庫已存在
    git remote -v
)

echo.
echo 正在配置 Git 用戶資訊...
git config user.name "AI網站管理工具" >nul 2>&1
git config user.email "ai@example.com" >nul 2>&1
echo ✅ Git 用戶資訊已配置

echo.
echo 正在添加所有檔案...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 檔案已添加

echo.
echo 正在提交初始版本...
git commit -m "初始化 AI 網站管理工具 - %date% %time%"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 初始版本已提交

echo.
echo 正在推送到 GitHub...
git push -u origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 需要先同步遠端內容
    echo.
    echo 建議使用「修復 Git 同步問題」功能
    pause
    goto start
)

echo.
echo ================================
echo 🎉 Git 倉庫初始化完成！
echo ================================
echo.
echo 您的網站地址：
echo https://sky770825.github.io/Aibot888/
echo.
echo 現在可以使用其他管理功能了！

echo.
pause
goto start

:fix_git_sync
echo.
echo ================================
echo 🔧 修復 Git 同步問題
echo ================================
echo.

echo 正在診斷 Git 同步問題...
echo.

echo 步驟1: 檢查 Git 狀態...
git status
echo.

echo 步驟2: 檢查遠端倉庫...
git remote -v
echo.

echo 步驟3: 檢查分支資訊...
git branch -a
echo.

echo 步驟4: 嘗試獲取遠端內容...
git fetch origin
if errorlevel 1 (
    echo ❌ 獲取遠端內容失敗
    echo 正在嘗試重新添加遠端倉庫...
    git remote remove origin
    git remote add origin https://github.com/sky770825/Aibot888.git
    git fetch origin
    if errorlevel 1 (
        echo ❌ 仍然無法獲取遠端內容
        echo 請檢查網路連接和 GitHub 認證
        pause
        goto start
    )
)
echo ✅ 遠端內容已獲取

echo.
echo 步驟5: 檢查本地和遠端的差異...
git log --oneline -5
echo.
echo 遠端最新提交：
git log --oneline origin/main -5
echo.

echo 步驟6: 嘗試合併遠端內容...
git merge origin/main --allow-unrelated-histories
if errorlevel 1 (
    echo ❌ 合併失敗，可能有衝突
    echo 正在嘗試強制合併...
    git reset --hard origin/main
    if errorlevel 1 (
        echo ❌ 強制合併也失敗
        echo 請手動解決衝突
        pause
        goto start
    )
    echo ✅ 強制合併成功
) else (
    echo ✅ 合併成功
)

echo.
echo 步驟7: 添加所有檔案...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 檔案已添加

echo.
echo 步驟8: 提交變更...
git commit -m "修復同步問題 - %date% %time%"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 變更已提交

echo.
echo 步驟9: 推送到 GitHub...
git push origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 權限問題
    echo.
    echo 建議檢查：
    echo - 網路連接
    echo - GitHub 認證設定
    echo - 倉庫權限
    pause
    goto start
)

echo.
echo ================================
echo 🎉 Git 同步問題已修復！
echo ================================
echo.
echo 您的網站地址：
echo https://sky770825.github.io/Aibot888/
echo.
echo 現在可以正常使用所有功能了！

echo.
pause
goto start

:quick_upload
echo.
echo ================================
echo ⚡ 快速上傳檔案
echo ================================
echo.

echo 正在快速上傳所有檔案到 GitHub...
echo.

echo 步驟1: 檢查 Git 狀態...
git status --short
echo.

echo 步驟2: 添加所有檔案...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 檔案已添加

echo.
echo 步驟3: 檢查添加的檔案...
git status --short
echo.

echo 步驟4: 提交變更...
set commit_msg=快速上傳 - %date% %time%
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 變更已提交

echo.
echo 步驟5: 推送到 GitHub...
git push origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 需要先同步遠端內容
    echo.
    echo 建議使用「修復 Git 同步問題」功能
    pause
    goto start
)

echo.
echo ================================
echo 🎉 快速上傳完成！
echo ================================
echo.
echo 您的網站地址：
echo https://sky770825.github.io/Aibot888/
echo.
echo 所有檔案已成功上傳到 GitHub！

echo.
pause
goto start

:connect_new_repo
echo.
echo ================================
echo 🔗 連接新的 GitHub 倉庫 (取代現有)
echo ================================
echo.

echo 請輸入新的 GitHub 倉庫連結：
echo 範例：https://github.com/username/repository-name
echo.
set /p repo_url=請輸入 GitHub 連結: 

if "%repo_url%"=="" (
    echo ❌ 連結不能為空！
    pause
    goto start
)

echo.
echo 正在驗證連結格式...
echo %repo_url% | findstr "github.com" >nul
if errorlevel 1 (
    echo ❌ 無效的 GitHub 連結格式
    echo 請確保連結包含 github.com
    pause
    goto start
)
echo ✅ 連結格式正確

echo.
echo 正在檢查 Git 是否已安裝...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git 未安裝或未正確配置
    echo 請先安裝 Git: https://git-scm.com/
    pause
    goto start
)
echo ✅ Git 已安裝

echo.
echo 正在處理現有 Git 設定...
if exist ".git" (
    echo ✅ Git 倉庫已存在
    echo 當前遠端倉庫：
    git remote -v
    echo.
    echo 正在移除現有遠端倉庫...
    git remote remove origin 2>nul
    echo ✅ 現有遠端倉庫已移除
) else (
    echo 正在初始化 Git 倉庫...
    git init
    if errorlevel 1 (
        echo ❌ 初始化失敗
        pause
        goto start
    )
    echo ✅ Git 倉庫已初始化
)

echo.
echo 正在添加新的遠端倉庫...
git remote add origin %repo_url%
if errorlevel 1 (
    echo ❌ 添加遠端倉庫失敗
    pause
    goto start
)
echo ✅ 遠端倉庫已添加

echo.
echo 正在配置 Git 用戶資訊...
git config user.name "AI網站管理工具" >nul 2>&1
git config user.email "ai@example.com" >nul 2>&1
echo ✅ Git 用戶資訊已配置

echo.
echo 正在獲取遠端內容...
git fetch origin
if errorlevel 1 (
    echo ❌ 獲取遠端內容失敗
    echo 可能的原因：
    echo 1. 倉庫不存在或無權限
    echo 2. 網路連接問題
    echo 3. 倉庫連結錯誤
    pause
    goto start
)
echo ✅ 遠端內容已獲取

echo.
echo 正在檢查分支...
git branch -a
echo.

echo 正在添加所有檔案...
git add .
if errorlevel 1 (
    echo ❌ 添加檔案失敗
    pause
    goto start
)
echo ✅ 檔案已添加

echo.
echo 正在提交變更...
git commit -m "連接自定義倉庫 - %date% %time%"
if errorlevel 1 (
    echo ❌ 提交失敗
    pause
    goto start
)
echo ✅ 變更已提交

echo.
echo 正在推送到新倉庫...
git push -u origin main
if errorlevel 1 (
    echo ❌ 推送失敗
    echo.
    echo 可能的原因：
    echo 1. 網路連接問題
    echo 2. GitHub 認證問題
    echo 3. 倉庫權限問題
    echo 4. 分支名稱不匹配
    echo.
    echo 正在嘗試推送到 master 分支...
    git push -u origin master
    if errorlevel 1 (
        echo ❌ 推送到 master 也失敗
        echo 請檢查倉庫設定和權限
        pause
        goto start
    )
    echo ✅ 已推送到 master 分支
) else (
    echo ✅ 已推送到 main 分支
)

echo.
echo ================================
echo 🎉 新倉庫連接完成！
echo ================================
echo.
echo 倉庫資訊：
echo 連結：%repo_url%
echo 時間：%date% %time%
echo.
echo 如果這是 GitHub Pages 倉庫，您的網站地址可能是：
echo %repo_url:~0,-4%.github.io/%repo_url:~19%
echo.
echo 現在可以使用其他管理功能了！

echo.
pause
goto start

:exit
echo.
echo ================================
echo 👋 感謝使用AI指令大全網站管理工具！
echo ================================
echo.
echo 您的網站地址：
echo https://sky770825.github.io/Aibot888/
echo.
pause
exit
