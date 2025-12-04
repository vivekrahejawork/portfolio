# Vivek Raheja - Portfolio Website

A clean, Apple-inspired personal portfolio website built with Next.js, showcasing professional experience and projects.

## Tech Stack

- **Next.js 14** (App Router) - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible components
- **Framer Motion** - Smooth animations and transitions
- **Lenis** - Buttery smooth scrolling

## Features

- 🎨 Apple-inspired minimalist design
- ✨ Smooth scroll animations powered by Lenis
- 🎭 Fade-in and parallax effects with Framer Motion
- 📱 Fully responsive design
- 🚀 Optimized for Vercel deployment
- ♿ Accessible UI components from ShadCN

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Company Logos

To add company logos to the experience section:

1. Place logo files in `/public/logos/` directory
2. Name them appropriately (e.g., `happyrobot.svg`, `scale.svg`, etc.)
3. Update the `logo` paths in `components/Projects.tsx`

Example logo files needed:

- `/public/logos/happyrobot.svg`
- `/public/logos/scale.svg`
- `/public/logos/whatnot.svg`
- `/public/logos/cher.svg`
- `/public/logos/trojan.svg`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Lenis
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Experience cards
│   ├── Contact.tsx         # Contact information
│   └── ui/
│       └── button.tsx      # ShadCN Button component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── lenis.tsx           # Smooth scroll provider
└── public/
    └── logos/              # Company logos (add manually)
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts` and `app/globals.css` to match your preferred palette.

### Content

Update your personal information in:

- `components/Hero.tsx` - Name and headline
- `components/About.tsx` - Bio and background
- `components/Projects.tsx` - Work experience
- `components/Contact.tsx` - Contact information

### Animations

Adjust animation timing and effects in each component using Framer Motion properties:

- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing

## Deployment

This project is optimized for Vercel deployment:

```bash
npm run build
```

Or deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## License

© 2024 Vivek Raheja. All rights reserved.

## Contact

- Email: vivekraheja.work@gmail.com
- LinkedIn: [linkedin.com/in/vivek-raheja](https://www.linkedin.com/in/vivek-raheja)
- Phone: 630-995-5891
