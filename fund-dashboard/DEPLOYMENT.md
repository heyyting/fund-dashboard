# 基金Dashboard部署指南

## 环境要求
- Node.js 16+
- npm 或 yarn

## 安装步骤
```bash
cd fund-dashboard
npm install
chmod +x start.sh
```

## 数据集成
当前系统使用mock数据，你需要替换为真实数据源：

### 1. 申购数据 (subscriptions)
- 文件: `src/data/mockData.js`
- 字段: distributor, amount, date, currency

### 2. 基金表现数据 (performance)
- 字段: date, nav, return, benchmark

### 3. 归因数据 (attribution)
- 字段: date, assetReturn, fxImpact, totalReturn

### 4. 汇率数据 (fxRates)
- 字段: date, usdCnyRate

## API端点
- `GET /api/subscriptions` - 获取申购数据
- `GET /api/performance` - 获取表现数据  
- `GET /api/attribution` - 获取归因数据
- `GET /api/fx-rates` - 获取汇率数据

## 启动服务
```bash
./start.sh
```

访问 http://localhost:3000 查看dashboard

## 自定义配置
编辑 `src/config.js` 修改：
- 基金名称
- 货币符号
- 日期格式
- 颜色主题

## 安全考虑
- 生产环境请配置HTTPS
- 添加身份验证（建议使用公司SSO）
- 限制API访问权限
- 敏感数据不要硬编码在前端