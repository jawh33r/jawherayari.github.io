# Jawher Ayari - Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS.

## Features

- 🎨 Modern, clean design with dark/light theme toggle
- 📱 Fully responsive (mobile-first)
- ✨ Smooth animations with Framer Motion
- 🔗 Integration with GitHub API for projects
- 📧 Contact form
- 🚀 SEO optimized
- 🎭 Tech-themed animated background
- 📸 Professional profile picture display

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile picture:
   - Place your profile image as `profile.jpg` in the `public/` folder
   - Recommended size: 400x400px or larger (square aspect ratio)
   - Supported formats: JPG, PNG, WebP

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This creates an `out` folder with static files ready for deployment.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Start

**GitHub Pages:**
```bash
npm run build
# Then deploy the 'out' folder to gh-pages branch
```

**Vercel:**
```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository directly in the Vercel dashboard.

## Custom Domain

The `CNAME` file is configured for `jawherayari.me`. Update your DNS settings to point to your hosting provider.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Profile Picture

To update your profile picture:
1. Replace `public/profile.jpg` with your image
2. Ensure it's a square image (recommended: 400x400px or larger)
3. The image will automatically appear on the Home and About pages
