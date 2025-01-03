<div align="center">

# Markdown To Image Serve

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)
[![Node Version](https://img.shields.io/node/v/next.svg)](https://nodejs.org)
[![Issues](https://img.shields.io/github/issues/your-username/markdown-to-image-serve.svg)](https://github.com/your-username/markdown-to-image-serve/issues)

<h4>A Markdown to Image Service based on Next.js and Puppeteer, supporting Vercel deployment and API integration</h4>

<p>A service that converts Markdown content into beautiful images, providing out-of-the-box API interfaces, supporting quick deployment on Vercel and secondary development</p>

[简体中文](./README.md) | English

</div>

## 🎯 Project Overview

Markdown To Image Serve is an out-of-the-box Markdown to Image API service. You can:

- 🚀 **One-Click Deploy** - Deploy on Vercel with one click, no server required
- 🔄 **API Integration** - Simple and easy-to-use RESTful API interfaces
- 🎨 **Custom Styling** - Support for custom headers, footers, and style templates
- �������� **Responsive Design** - Adaptive image output for different sizes

## 🌐 Quick Access

### Online Service

- 🔗 [Online Service](https://markdown-to-image-serve.jcommon.top) - Direct access
- 📦 [GitHub Repository](https://github.com/wxingheng/markdown-to-image-serve) - Get source code

There are two ways to use Markdown To Image Serve:
1. **API Integration**: Integrate into your project through RESTful API interfaces
2. **Online Usage**: Visit our [online service](https://markdown-to-image-serve.jcommon.top) directly

⭐ [Click Star and Watch to get latest updates](https://github.com/wxingheng/markdown-to-image-serve)

## ⚡️ Quick Deployment

### Vercel Deployment

1. Click the button below to deploy to Vercel
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/markdown-to-image-serve)

2. After deployment, you'll get an API endpoint, e.g.: `https://your-project.vercel.app`

### Docker Deployment

1. Deploy with Docker Compose (Recommended)

```bash
# Start service
docker-compose up -d

# View logs
docker-compose logs -f
```

2. Deploy with Docker directly

```bash
# Build image
docker build -t markdown-to-image-serve .

# Run container
docker run -p 3000:3000 markdown-to-image-serve
```

Visit [http://localhost:3000](http://localhost:3000) to use the service.

## ✨ Features

- 🎯 **Markdown Rendering** - Full Markdown syntax support
- 🔄 **Image Processing** - Support for external image references and optimization
- 🎨 **Custom Templates** - Configurable headers, footers, and styles
- ⚡️ **High Performance** - Efficient rendering based on Puppeteer
- 📦 **Simple Integration** - Easy API implementation

## 📦 Getting Started

### Local Development

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

### API Usage

#### Generate Poster

```bash
curl --location 'https://markdown-to-image-serve.jcommon.top/api/generatePoster' \
--header 'Content-Type: application/json' \
--data '{
    "markdown": "# Title",
    "header": "Header Text",
    "footer": "Footer Text"
}'
```

```bash
curl --location 'http://localhost:3000/api/generatePoster' \
--header 'Content-Type: application/json' \
--data '{
    "markdown": "# Title",
    "header": "Header Text",
    "footer": "Footer Text"
}'
```

#### Generate Image

```bash
curl --location 'https://markdown-to-image-serve.jcommon.top/api/generatePosterImage' \
--header 'Content-Type: application/json' \
--data '{
    "markdown": "# Title"
}'
```

```bash
curl --location 'http://localhost:3000/api/generatePosterImage' \
--header 'Content-Type: application/json' \
--data '{
    "markdown": "# Title"
}'
```

## 📚 API Documentation

### POST /api/generatePoster

Generate a poster with header and footer.

**Request Parameters:**

```json
{
    "markdown": "Markdown content",
    "header": "Header text (optional)",
    "footer": "Footer text (optional)"
}
```

### POST /api/generatePosterImage

Generate a poster in pure image format.

**Request Parameters:**

```json
{
    "markdown": "Markdown content"
}
```

## 🚀 Best Practices

### Running Example Code
1. Enter example directory:
```bash
cd example
```

2. Run example script:
```bash
node api_buffer_2_image.js
```

### Usage Recommendations
- Recommended to use Buffer method for image data processing for better performance
- Refer to example code in the `example` directory for integration
- Recommended to use async API calls to avoid blocking the main thread

## 🛠 Development Plans

- [x] Support Vercel one-click deployment
- [x] Support Docker deployment
- [ ] Optimize image loading performance
- [ ] Add image compression options
- [ ] Support batch generation
- [ ] Fix Chinese character encoding issues

## 🤝 Contributing

Pull requests and issues are welcome!

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push branch: `git push origin feature/AmazingFeature`
5. Submit Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This project is based on [markdown-to-image](https://github.com/gcui-art/markdown-to-image). Thanks to the original author for the open source contribution. markdown-to-image is an excellent React component that renders Markdown into beautiful poster images.

---

If this project helps you, please star to support! ⭐️ 
