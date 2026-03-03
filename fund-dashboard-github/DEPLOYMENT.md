# 基金Dashboard GitHub Pages部署指南

## 🎯 你的专属网址
部署完成后，访问：
```
https://heyyting.github.io/fund-dashboard/
```

## 📋 部署步骤

### 第1步：创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击 "New repository" 
3. 仓库名称：`fund-dashboard`
4. 选择 "Public"（必须是公开仓库才能用GitHub Pages）
5. 点击 "Create repository"

### 第2步：上传文件
1. 下载我提供的所有文件到本地
2. 在GitHub仓库页面，点击 "Add file" → "Upload files"
3. 上传以下文件：
   - `index.html`（主程序）
   - `.nojekyll`（配置文件）

### 第3步：启用GitHub Pages
1. 进入仓库的 "Settings" 
2. 左侧菜单选择 "Pages"
3. 在 "Source" 部分：
   - Branch: `main` 或 `master`
   - Folder: `/ (root)`
4. 点击 "Save"

### 第4步：等待部署
- GitHub会自动部署（通常1-2分钟）
- 部署完成后，你会看到绿色的 "Your site is published at..." 消息
- 点击链接就能访问你的dashboard！

## 🎨 功能特点
- ✅ 完整的基金dashboard界面
- ✅ 申购情况监控（按分销商）
- ✅ 业绩表现分析（YTD/ITD/3M）
- ✅ 归因分析（底层资产 vs 汇率影响）
- ✅ 风险指标卡片
- ✅ 响应式设计（适配手机/电脑）
- ✅ 交互式图表（悬停查看数据）

## 🔧 后续更新
- 要修改数据？直接编辑 `index.html` 中的模拟数据
- 要添加功能？告诉我需求，我帮你生成新代码
- 要自定义样式？修改CSS部分即可

## 💡 注意事项
- GitHub Pages免费且永久可用
- 由于是静态页面，数据是模拟的
- 如需连接真实数据源，需要后端服务（可后续升级）

---
**有任何问题随时问我！祝你部署成功！** 🚀