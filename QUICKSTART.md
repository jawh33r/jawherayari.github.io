# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

This creates an `out` folder with static files ready for deployment.

## Project Structure

```
myprofile/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact form page
│   ├── links/             # Links/socials page
│   ├── projects/          # Projects page (GitHub integration)
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── Navbar.tsx        # Navigation bar
│   └── ThemeProvider.tsx # Dark/light theme provider
├── public/               # Static assets
│   ├── CNAME             # Custom domain config
│   └── robots.txt        # SEO robots file
└── package.json          # Dependencies and scripts
```

## Features

✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Dark/Light Theme** - Toggle between themes  
✅ **Smooth Animations** - Framer Motion powered  
✅ **GitHub Integration** - Auto-fetches projects from GitHub  
✅ **SEO Optimized** - Meta tags, sitemap, robots.txt  
✅ **Contact Form** - Ready for integration (see DEPLOYMENT.md)  

## Customization

### Update Personal Information

- **Home page**: Edit `app/page.tsx`
- **About page**: Edit `app/about/page.tsx`
- **Links**: Edit `app/links/page.tsx`
- **Meta tags**: Edit `app/layout.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

### GitHub Projects

The projects page automatically fetches from `https://github.com/jawh33r`. To change:
- Edit `app/projects/page.tsx` line 20
- Update the GitHub username in the API call

## Next Steps

1. Customize content to match your profile
2. Set up contact form integration (see DEPLOYMENT.md)
3. Deploy to GitHub Pages or Vercel (see DEPLOYMENT.md)
4. Configure custom domain DNS settings

