Favicon generation and fallbacks

This project now includes a path-based `favicon.svg` (public/favicon.svg) designed for small-size clarity.

Recommended steps to generate raster fallbacks (PNG, ICO):

1) Using ImageMagick (recommended if available):

```bash
# generate PNGs
magick convert -background none public/favicon.svg -resize 16x16 public/favicon-16x16.png
magick convert -background none public/favicon.svg -resize 32x32 public/favicon-32x32.png
magick convert -background none public/favicon.svg -resize 48x48 public/favicon-48x48.png

# create multi-resolution ICO (16,32,48)
magick convert public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon.ico
```

2) Using `sharp` (Node.js):

```bash
npm install --save-dev sharp

node -e "const sharp=require('sharp'); const svg='public/favicon.svg';
(async()=>{
 await sharp(svg).resize(16,16).png().toFile('public/favicon-16x16.png');
 await sharp(svg).resize(32,32).png().toFile('public/favicon-32x32.png');
 await sharp(svg).resize(48,48).png().toFile('public/favicon-48x48.png');
})()"

# Use `icotool` or ImageMagick to bundle PNGs into an .ico file
```

Notes
- The included `public/favicon.svg` uses path shapes (no <text>), thicker strokes, and a solid background for strong contrast at 16px.
- After generating PNG/ICO files, browsers that don't use SVG favicons will have proper raster fallbacks.
