# 💑 Love-Log

![Love Days](https://img.shields.io/badge/Love%20Days-365-pink)
![Status](https://img.shields.io/badge/Status-Happy-brightgreen)
![License](https://img.shields.io/badge/License-Love-red)


## 💝 快速开始

1. 克隆项目
```bash
git clone https://github.com/tuhang/love-log.git
```

2. 安装依赖
```bash
# 安装基础依赖
npm install

# 添加 shadcn-ui 组件
npm install @radix-ui/react-avatar @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
```

3. 修改配置
```bash
# 在 src/config/config.js 中修改你们的信息
COUPLE_NAME_1="[Name1]"
COUPLE_NAME_2="[Name2]"
FIRST_MEET="2024-01-01"
```

4. 启动项目
```bash
npm run dev
```

## 🎨 功能特色

- [x] 💌 情侣空间展示
- [x] 📅 恋爱计时器
- [ ] 🎁 纪念日提醒
- [ ] 📝 甜蜜日记
- [ ] 🖼️ 照片墙
- [ ] 💕 爱情宣言


## 🚀 技术栈

### 核心技术
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI

### 部署工具
- Vercel - 自动化部署平台

### 项目特点
- 📱 完全响应式设计
- 🎨 优雅的渐变背景
- 💫 流畅的动画效果
- 🌓 可自定义主题
- 🔧 易于配置
- 🚀 一键部署

## 📝 使用说明

1. Fork 本项目
2. 修改 `src/config/config.js` 中的个人信息
3. 在 `public/avatars/` 目录下放置你们的头像
4. 部署项目：
   ```bash
   # 使用 Vercel CLI 部署
   npm i -g vercel
   vercel login
   vercel --prod
   ```
   或者直接在 [Vercel](https://vercel.com) 导入你的 GitHub 仓库

## 💡 开发指南

### 样式开发
- 使用 Tailwind CSS 的工具类
- 自定义样式在 `tailwind.config.js` 中配置
- 组件样式优先使用 Shadcn UI 提供的预设

### 组件开发
- 使用 Shadcn UI 提供的组件
- 组件存放在 `src/components` 目录
- 页面组件存放在 `src/pages` 目录

## 💖 贡献

欢迎提交 PR 让这个项目变得更好！

## 📄 开源协议

[MIT License](LICENSE)
