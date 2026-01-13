# Deployment Guide

This guide covers deploying the portfolio to GitHub Pages and Vercel.

## GitHub Pages Deployment

### Option 1: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   # Install gh-pages if not already installed
   npm install --save-dev gh-pages

   # Add to package.json scripts:
   # "deploy": "npm run build && gh-pages -d out"

   # Deploy
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to your repository Settings > Pages
   - Select the `gh-pages` branch as the source
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: './out'
      - uses: actions/deploy-pages@v2
```

### Custom Domain Setup

1. The `CNAME` file is already configured for `jawherayari.me`
2. In your repository Settings > Pages, add your custom domain
3. Update your DNS records:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `yourusername.github.io`

## Vercel Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or connect via GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

4. **Custom Domain:**
   - In Vercel dashboard, go to Project Settings > Domains
   - Add `jawherayari.me`
   - Update your DNS records as instructed by Vercel

## Contact Form Integration

The contact form currently simulates submission. To make it functional, choose one of these options:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `app/contact/page.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Configure your email service
3. Install: `npm install @emailjs/browser`
4. Update the contact form to use EmailJS SDK

### Option 3: Backend API

Create your own API endpoint to handle form submissions.

## Environment Variables

If you need environment variables (e.g., for API keys), create a `.env.local` file:

```
NEXT_PUBLIC_API_KEY=your_key_here
```

Note: For static export (GitHub Pages), only `NEXT_PUBLIC_*` variables work.

