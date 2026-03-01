# Markdown to Image Serve - Claude AI 开发指南

## 项目概述

这是一个基于 Next.js 的 Markdown 转图片服务，提供 Web 编辑器和 RESTful API。用户可以输入 Markdown 内容，系统会生成精美的海报图片。

**核心价值**: 将 Markdown 内容转换为可在社交媒体分享的精美图片

**主要功能**:
- Markdown 实时预览编辑器
- 9 种内置主题 (blue, pink, purple, green, yellow, gray, red, indigo, SpringGradientWave)
- 自定义页眉、页脚、Logo
- 中文字体支持 (SimSun)
- RESTful API 接口
- Docker 容器化部署

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14.2.3 (App Router + Pages Router 混合模式) |
| 语言 | TypeScript 5 |
| UI | React 18 + Tailwind CSS 3.4 + Radix UI + shadcn/ui |
| 图表生成 | Puppeteer Core + @sparticuz/chromium-min |
| Markdown | markdown-to-poster 0.0.9 + @uiw/react-md-editor |
| 部署 | Docker + Railway/Render/Fly.io 支持 |

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页 - Markdown 编辑器
│   ├── docs/page.tsx      # 文档页面
│   ├── layout.tsx         # 根布局 (Header + Footer)
│   └── globals.css        # 全局样式
│
├── pages/                  # Next.js Pages Router (API)
│   ├── api/
│   │   ├── generatePoster.ts       # 返回图片 Buffer
│   │   ├── generatePosterImage.ts  # 返回图片 URL
│   │   └── images/[filename].ts    # 图片服务端点
│   └── poster/index.tsx            # 海报渲染页面
│
├── components/            # React 组件
│   ├── Editor.tsx        # Markdown 编辑器主组件
│   ├── PosterView.tsx    # 海报预览组件
│   ├── Header.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   └── ui/               # shadcn/ui 组件
│
├── lib/                   # 工具函数
│   └── utils.ts          # 通用工具 (cn 函数等)
│
└── markdown/              # MDX 内容文件
    ├── docs.mdx
    └── home.mdx

public/
├── fonts/SimSun.ttf      # 中文字体
└── uploads/posters/      # 开发环境图片存储

patches/
└── markdown-to-poster+0.0.9.patch  # 移除 CORS 代理
```

## API 端点

### POST `/api/generatePosterImage`
生成海报并返回图片 URL

**请求体**:
```json
{
  "markdown": "string (必填) - Markdown 内容",
  "header": "string (可选) - 页眉文字",
  "footer": "string (可选) - 页脚文字",
  "logo": "string (可选) - Logo URL",
  "theme": "string (可选, 默认: SpringGradientWave) - 主题名称"
}
```

**响应**:
```json
{
  "url": "http://localhost:3000/api/images/poster-1234567890.png"
}
```

### POST `/api/generatePoster`
生成海报并返回原始图片 Buffer (PNG)

**响应**: Content-Type: image/png, 最大执行时间 60 秒

### GET `/api/images/[filename]`
获取生成的图片 (存储在 `/tmp/uploads/posters/`)

## 图片生成流程

```
API 请求 → Puppeteer 启动浏览器 → 访问 /poster 页面
    → markdown-to-poster 渲染海报 → 截图 .poster-content 元素
    → 保存图片 → 返回 URL/Buffer
```

## 开发指南

### 环境要求
- Node.js 18+
- 本地开发需要 Chrome/Chromium 浏览器

### 环境变量
```bash
# .env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CHROME_PATH=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

### 常用命令
```bash
npm run dev      # 启动开发服务器 (端口 3000)
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 代码检查
```

### 代码规范
- 使用 TypeScript 严格模式
- 组件使用函数式组件 + Hooks
- 样式使用 Tailwind CSS
- UI 组件遵循 shadcn/ui 模式

## 部署指南

### Docker 部署
```bash
# 使用 docker-compose
docker-compose up -d

# 生产环境
docker-compose -f docker-compose.prod.yml up -d
```

### 云平台部署
- **Railway**: 使用 `railway.json` 配置
- **Render**: 使用 `render.yaml` 配置
- **Fly.io**: 使用 `fly.toml` 配置

### Docker 镜像
基础镜像: `wxingheng/node-chrome-base:latest` (包含 Node.js + Chrome)

## 重要注意事项

### 1. Patch Package
项目使用 `patch-package` 修改了 `markdown-to-poster` 库，移除了图片 CORS 代理:
```diff
- const f = o && `https://api.allorigins.win/raw?url=${encodeURIComponent(o)}`;
+ const f = o && `${o}`;
```
安装依赖后会自动应用补丁 (`npm postinstall`)

### 2. 字体处理
- 中文字体位于 `public/fonts/SimSun.ttf`
- Puppeteer 需要加载字体才能正确渲染中文

### 3. 图片存储路径
- 开发环境: `public/uploads/posters/`
- 生产环境: `/tmp/uploads/posters/`

### 4. 路由模式
项目使用 App Router + Pages Router 混合模式:
- `/app/*` - 页面组件 (App Router)
- `/pages/api/*` - API 路由 (Pages Router)

### 5. 主题配置
可用主题: `blue`, `pink`, `purple`, `green`, `yellow`, `gray`, `red`, `indigo`, `SpringGradientWave`

## 常见问题

### Q: 本地开发时截图失败?
A: 检查 `.env` 中的 `CHROME_PATH` 是否正确指向 Chrome 可执行文件

### Q: 生产环境中文显示乱码?
A: 确保服务器已安装中文字体，或使用包含中文字体的 Docker 镜像

### Q: API 超时?
A: 默认最大执行时间 60 秒，复杂内容可能需要更长时间

## 相关文档

- `README.md` - 完整中文文档
- `README_EN.md` - 英文文档
- `DEPLOYMENT.md` - 部署指南
- `DOCKER_SETUP.md` - Docker 配置指南
- `TROUBLESHOOTING.md` - 故障排除
