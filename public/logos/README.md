# Company Logos

Place your company logo files in this directory.

## Required Logo Files

Add the following logo files (SVG or PNG format recommended):

1. `happyrobot.svg` or `happyrobot.png` - HappyRobot logo
2. `scale.svg` or `scale.png` - Scale AI logo
3. `whatnot.svg` or `whatnot.png` - Whatnot logo
4. `cher.svg` or `cher.png` - Cher Real Estate logo
5. `trojan.svg` or `trojan.png` - Trojan Marketing Group logo

## Logo Guidelines

- **Format**: SVG preferred for scalability, PNG also works
- **Size**: Optimize logos to be under 50KB each
- **Dimensions**: Recommend 400x400px or similar square dimensions
- **Background**: Transparent background preferred
- **Colors**: Original brand colors

## Where to Find Logos

- Company websites (usually in press/media kits)
- LinkedIn company pages
- Company GitHub organizations
- Direct request from company marketing teams

## Usage in Code

Once added, the logos will automatically appear in the Experience section cards.

If you want to use actual images instead of placeholders, update the image section in `components/Projects.tsx`:

```tsx
<Image
  src={logo}
  alt={`${company} logo`}
  width={200}
  height={200}
  className="object-contain"
/>
```
