# 部署到 GitHub Pages

本文档将指导您如何将此 Vue 项目部署到 GitHub Pages。

## 前置条件

1. 确保您有一个 GitHub 账户
2. 确保您的本地环境已安装 Git

## 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 GitHub，创建一个新的仓库
2. 仓库名建议使用 `LabVue`（与项目配置保持一致）
3. 不要初始化 README、.gitignore 或 license（因为本地已有）

### 2. 连接本地仓库到 GitHub

```bash
# 提交当前代码
git add .
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/LabVue.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings" 选项卡
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "GitHub Actions"

### 4. 自动部署

项目已配置了 GitHub Actions 工作流（`.github/workflows/deploy.yml`），当您推送代码到 `main` 分支时，会自动：

1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

### 5. 访问您的网站

部署完成后，您的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/LabVue/
```

## 手动部署（可选）

如果您想手动部署，可以使用以下命令：

```bash
# 安装依赖（如果还没有安装）
pnpm install

# 构建并部署
pnpm run deploy
```

## 注意事项

1. 确保仓库名与 `vite.config.ts` 中的 `base` 配置一致
2. 如果更改了仓库名，需要同时更新 `vite.config.ts` 中的 `base` 路径
3. 首次部署可能需要几分钟时间
4. 后续更新只需推送代码到 `main` 分支即可自动部署

## 故障排除

- 如果部署失败，检查 GitHub Actions 的日志
- 确保所有依赖都已正确安装
- 检查构建过程中是否有错误