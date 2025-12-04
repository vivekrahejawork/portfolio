# Quick Setup Guide

Follow these steps to get your portfolio website up and running.

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lenis (smooth scrolling)
- ShadCN UI components
- TypeScript

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Step 3: Add Company Logos (Optional but Recommended)

1. Create logo files for your companies (SVG or PNG format)
2. Place them in `/public/logos/` directory with these names:

   - `happyrobot.svg` (or .png)
   - `scale.svg`
   - `whatnot.svg`
   - `cher.svg`
   - `trojan.svg`

3. To use the logos, update `components/Projects.tsx` around line 51-56:

Replace the placeholder div with:

```tsx
<div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
  <Image
    src={logo}
    alt={`${company} logo`}
    width={200}
    height={200}
    className="object-contain"
  />
</div>
```

Don't forget to import Image at the top of the file (already imported).

## Step 4: Customize Content

### Personal Information

- **Hero Section**: Edit `components/Hero.tsx` to update your name and tagline
- **About Section**: Edit `components/About.tsx` to update your bio
- **Experience**: Edit `components/Projects.tsx` to modify job descriptions
- **Contact**: Edit `components/Contact.tsx` for contact information

### Styling

- **Colors**: Update `tailwind.config.ts` and `app/globals.css`
- **Fonts**: Modify font settings in `app/layout.tsx`
- **Animations**: Adjust Framer Motion settings in each component

## Step 5: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Step 6: Deploy to Vercel

### Option A: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Option C: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Click "Deploy"

## Troubleshooting

### Issue: Smooth scrolling not working

- Make sure Lenis is properly initialized in `lib/lenis.tsx`
- Check browser console for any JavaScript errors

### Issue: Animations not triggering

- Verify Framer Motion is installed: `npm list framer-motion`
- Check that `useInView` hooks are properly configured

### Issue: Build errors

- Run `npm run lint` to check for linting errors
- Ensure all TypeScript types are correct
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Issue: Missing company logos

- Verify logo files exist in `/public/logos/`
- Check file names match exactly (case-sensitive)
- Update the `logo` property in the experiences array

## Performance Optimization Tips

1. **Images**: Use Next.js Image component for automatic optimization
2. **Fonts**: Use next/font for optimized font loading
3. **Code Splitting**: Next.js automatically code-splits by page
4. **Analytics**: Add Vercel Analytics for performance monitoring

## Next Steps

- Add a blog section with MDX
- Integrate a contact form with email service
- Add project showcase with live demos
- Implement dark mode toggle
- Add resume download functionality

## Support

For issues or questions:

- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- ShadCN UI docs: [ui.shadcn.com](https://ui.shadcn.com)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)
