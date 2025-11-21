# Coffee Shop Assets

This directory contains all images and icons for the coffee shop application.

## Directory Structure

```
assets/coffee/
├── images/
│   ├── hero-background.jpg          # Main hero section background
│   ├── hero-logo.png                # Logo overlay for hero
│   ├── pattern-overlay.png          # Optional decorative pattern
│   ├── about-main.jpg               # Main about section image
│   ├── about-gallery-1.jpg          # About gallery image 1
│   ├── about-gallery-2.jpg          # About gallery image 2
│   ├── about-gallery-3.jpg          # About gallery image 3
│   ├── about-gallery-4.jpg          # About gallery image 4
│   ├── menu-espresso.jpg            # Espresso category image
│   ├── menu-brewed.jpg              # Brewed coffee category image
│   ├── menu-specialty.jpg           # Specialty drinks category image
│   ├── menu-cold.jpg                # Cold beverages category image
│   ├── menu-food.jpg                # Food category image
│   ├── location-map.jpg             # Location map image
│   ├── storefront.jpg               # Storefront photo
│   ├── logo.png                     # Main logo
│   ├── logo-light.png               # Light version (for dark backgrounds)
│   ├── logo-dark.png                # Dark version (for light backgrounds)
│   ├── favicon.png                  # Favicon
│   ├── social-share.jpg             # Social media share image
│   ├── placeholder.jpg              # Fallback placeholder image
│   ├── items/                       # Individual menu item images
│   │   ├── latte.jpg
│   │   ├── cappuccino.jpg
│   │   ├── pour-over.jpg
│   │   ├── cold-brew.jpg
│   │   └── avocado-toast.jpg
│   └── gallery/                     # Gallery images
│       ├── coffee-1.jpg
│       ├── coffee-2.jpg
│       ├── coffee-3.jpg
│       ├── interior-1.jpg
│       ├── interior-2.jpg
│       ├── interior-3.jpg
│       ├── food-1.jpg
│       ├── food-2.jpg
│       ├── food-3.jpg
│       ├── events-1.jpg
│       ├── events-2.jpg
│       ├── events-3.jpg
│       └── thumbs/                  # Thumbnail versions
│           ├── coffee-1.jpg
│           ├── coffee-2.jpg
│           └── ...
└── icons/
    ├── coffee.svg                   # Coffee icon
    ├── food.svg                     # Food icon
    ├── location.svg                 # Location pin icon
    ├── time.svg                     # Clock icon
    ├── phone.svg                    # Phone icon
    ├── email.svg                    # Email icon
    ├── instagram.svg                # Instagram social icon
    ├── facebook.svg                 # Facebook social icon
    └── twitter.svg                  # Twitter social icon
```

## Image Guidelines

### Hero Background
- **Recommended size**: 1920x1080px (Full HD)
- **Format**: JPG
- **Subject**: Wide shot of coffee shop interior, coffee being poured, or artistic coffee beans
- **Optimization**: Compress to under 500KB for fast loading

### About Section Images
- **Main image size**: 1200x800px
- **Gallery images**: 600x400px each
- **Format**: JPG
- **Subject**: Coffee preparation, baristas, interior shots, bean selection

### Menu Category Images
- **Recommended size**: 800x600px
- **Format**: JPG
- **Subject**: Representative beverage/food for each category

### Menu Item Images
- **Recommended size**: 400x400px (square)
- **Format**: JPG
- **Subject**: Close-up product shots with good lighting

### Gallery Images
- **Full size**: 1200x800px
- **Thumbnails**: 300x200px
- **Format**: JPG
- **Categories**: Coffee, Interior, Food, Events

### Logo & Brand Assets
- **Logo formats**: PNG with transparency
- **Sizes**: Multiple sizes recommended (256x256, 512x512)
- **Favicon**: 32x32px and 16x16px PNG

### Icons
- **Format**: SVG (preferred) or PNG
- **Size**: Vector (SVG) or 64x64px (PNG)
- **Style**: Consistent line weight and style

## Where to Get Images

### Your Own Photos (Highly Recommended!)
The best images for your website are your own photos of your actual business:
- Take photos with your smartphone (modern phones work great!)
- Hire a local photographer for a professional photoshoot
- Ask photography students who need portfolio work

**Why use your own photos:**
- Shows your actual business and products
- Builds trust with customers
- Unique and authentic
- Better for SEO and brand identity

### Icon Resources (for SVG icons)
If you need custom icons, these resources provide free SVG files:
- Heroicons - Clean, consistent icon set
- Font Awesome - Comprehensive icon library
- Feather Icons - Simple, elegant icons

**Note:** Download the SVG files and place them in the `/icons/` directory - do not use external links or CDN references.

## Image Optimization

Before adding images to this directory:

1. **Resize** images to recommended dimensions
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - ImageOptim (Mac)
3. **Convert** large PNGs to JPG if transparency not needed
4. **Use** WebP format for even better compression (with JPG fallback)

## Updating Image Paths

All image paths are configured in `/src/config/assets.config.ts`.

To change an image:
1. Add your new image to the appropriate folder
2. Update the path in `assets.config.ts`
3. The change will automatically reflect throughout the app

## CDN Integration

For production, consider using a CDN:

1. Upload images to your CDN
2. Set `VITE_CDN_URL` environment variable
3. The `getImagePath()` helper will automatically use CDN URLs

## Placeholder Images

If specific images are not available, the application will automatically use `placeholder.jpg` as a fallback.

**To create your own placeholder:**
1. Create a simple solid-color image (800×600px) in any image editor
2. Add your business name as text
3. Save as `placeholder.jpg`
4. Place in `/images/` directory

This ensures your site always looks complete, even while you're gathering your final images.
