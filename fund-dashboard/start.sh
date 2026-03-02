#!/bin/bash
# Fund Dashboard 启动脚本

echo "🚀 启动基金Dashboard系统..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 启动开发服务器
echo "🌐 启动服务 (http://localhost:3000)..."
npm start

echo "✅ 系统已启动！"
echo "📋 访问 http://localhost:3000 查看Dashboard"