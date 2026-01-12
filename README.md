# GitHub Pages Demo — Page Demo

本仓库示例演示如何使用 GitHub Pages 快速发布静态站点。本示例把站点文件放在 `docs/` 目录（已包含 index.html、styles.css、script.js），这样可以直接通过 GitHub Pages 从 `main` 分支的 `docs/` 目录发布。

如何部署
1. 将 `docs/` 目录及其文件提交到仓库的 `main`（或你当前使用的默认分支）。
2. 在 GitHub 仓库页面，进入 Settings → Pages：
   - Source 选择：Branch: `main`，Folder: `/docs`
   - 点击 Save。几分钟后你的站点会发布。
3. 访问地址通常为：`https://<你的用户名>.github.io/<仓库名>/`

本地预览
1. 在本地打开 `docs/index.html` 即可直接在浏览器查看。
2. 或在本地使用简单的静态服务器：
   - Python 3: `python -m http.server 8000 --directory docs`
   - 然后访问： `http://localhost:8000`