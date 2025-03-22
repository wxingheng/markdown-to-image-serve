<div align="center">

# Markdown To Image Serve

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Node Version](https://img.shields.io/node/v/next.svg)](https://nodejs.org)
[![Issues](https://img.shields.io/github/issues/your-username/markdown-to-image-serve.svg)](https://github.com/wxingheng/markdown-to-image-serve/issues)

<h4>基于 Next.js 和 Puppeteer 的 Markdown 转图片服务，支持 Docker 一键部署和 API 调用</h4>

<p>一个将 Markdown 内容转换为精美图片的服务，提供开箱即用的 API 接口，支持 Docker 快速部署和二次开发</p>

简体中文 | [English](./README_EN.md)

</div>

## 🎯 项目简介

Markdown To Image Serve 是一个开箱即用的 Markdown 转图片 API 服务。你可以：

- 🚀 **一键部署** - 支持 Docker Compose 一键部署
- 🔄 **API 集成** - 提供简单易用的 RESTful API 接口
- 🎨 **自定义样式** - 支持自定义页眉页脚和样式模板
- 📱 **响应式设计** - 自适应不同尺寸的图片输出
- 🌐 **多平台支持** - 支持 Docker 等多种部署方式
- 🔒 **安全可靠** - 支持图片防盗链和访问控制

## 🌟 核心功能

- 📝 将 Markdown 文本转换为精美图片
- 🎨 支持自定义主题和样式
- 📊 支持代码高亮和表格渲染
- 🖼️ 支持自定义页眉页脚
- 📱 自适应不同设备尺寸
- 🔄 支持批量转换功能
- 📦 提供完整的 API 接口

##  快速使用

### 在线服务(基于Vercel, 可能很慢，且不稳定。建议自行Docker部署)

访问我们的在线服务，立即体验：
- 🌐 [在线服务](https://markdown-to-image-serve.jcommon.top)
- 📦 [GitHub 仓库](https://github.com/wxingheng/markdown-to-image-serve)

### 本地开发

1. 克隆项目
```bash
git clone https://github.com/your-username/markdown-to-image-serve.git
cd markdown-to-image-serve
```

2. 安装依赖
```bash
pnpm install
```

3. 配置环境变量
创建 `.env` 文件：
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CHROME_PATH=/path/to/your/chrome  # Chrome 浏览器路径
```

4. 启动开发服务器
```bash
pnpm dev
```

### Chrome 路径配置指南

根据不同操作系统，Chrome 路径获取方式如下：

**macOS**:
```bash
ls -l /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```

**Linux**:
```bash
which google-chrome
# 或
which chromium
```

**Windows**:
```powershell
Get-Command chrome | Select-Object -ExpandProperty Definition
# 或访问 chrome://version/ 查看"可执行文件路径"
```

### Docker 部署

#### 使用 Docker Compose（推荐 推荐 推荐）
```bash
docker-compose up -d
```

```
docker compose build --no-cache 
```

**注意：**
1. 默认为运行环境为 Intel 或 AMD 处理器的64位 Linux/Mac 系统
2. 如果 Apple Silicon 平台, 请将 docker-compose.yml 中的 platform 设置为 `linux/arm64`
3. 如果 Windows 平台，请将 docker-compose.yml 中的 platform 设置为 `windows/amd64`

#### 或使用 Docker 直接部署
```bash
docker build -t markdown-to-image-serve .
docker run -p 3000:3000 markdown-to-image-serve
```

## 📚 API 文档

### 生成海报 (POST /api/generatePoster)

**请求参数：**
```typescript
{
  markdown: string;       // Markdown 内容
  header?: string;       // 可选：页眉文本
  footer?: string;       // 可选：页脚文本
  theme?: 'light' | 'dark'; // 可选：主题
  width?: number;        // 可选：图片宽度
  height?: number;       // 可选：图片高度
}
```

**示例请求：**
```bash
curl -X POST 'http://localhost:3000/api/generatePoster' \
  -H 'Content-Type: application/json' \
  -d '{
    "markdown": "# Hello World\n\nThis is a test. \n # 你好，世界!",
    "header": "My Header",
    "footer": "My Footer"
  }'
```

### 生成图片 (POST /api/generatePosterImage)

**请求参数：**
```typescript
{
  markdown: string;      // Markdown 内容
  theme?: string;       // 可选：主题
  width?: number;       // 可选：图片宽度
}
```

## 🛠 开发计划

- [x] Docker 部署支持
- [x] 自定义主题功能
- [ ] 图片压缩优化
- [ ] 批量生成功能
- [x] 中文字体优化
- [ ] 自定义模板系统
- [ ] API 访问控制

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交改动：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 致谢

感谢 [markdown-to-image](https://github.com/gcui-art/markdown-to-image) 项目的启发。

如果这个项目对你有帮助，欢迎 star 支持！ ⭐️

