# Quick Reference Guide - Template Comparison

## At a Glance

| Template | Primary Color | Secondary Color | Best For | Key Features |
|----------|--------------|-----------------|----------|--------------|
| **Coffee Shop** | Coffee Brown (#6F4E37) | Warm Caramel (#D4A574) | Cafes, Tea Shops | Cozy, warm, inviting |
| **Restaurant** | Burgundy Wine (#8B1538) | Elegant Gold (#C9A961) | Fine Dining, Bistros | Sophisticated, refined |
| **Bakery** | Bread Brown (#8B5A3C) | Pink Frosting (#F4C2C2) | Bakeries, Patisseries | Warm, friendly, fresh |
| **Boutique** | Dusty Rose (#D4A5A5) | Cool Gray (#9CA3AF) | Fashion, Retail | Minimalist, elegant |
| **Salon/Spa** | Calming Teal (#5FA8A3) | Warm Sand (#C8B8A0) | Wellness, Beauty | Serene, tranquil |

## Typography Comparison

| Template | Primary Font | Heading Font | Accent Font | Style |
|----------|-------------|--------------|-------------|-------|
| **Coffee Shop** | Inter | Playfair Display | Dancing Script | Modern casual |
| **Restaurant** | Cormorant Garamond | Playfair Display | Allura | Classic elegant |
| **Bakery** | Nunito | Quicksand | Pacifico | Friendly approachable |
| **Boutique** | Montserrat | Bodoni Moda | Great Vibes | Fashion forward |
| **Salon/Spa** | Lato | Raleway | Tangerine | Clean modern |

## Content Structure

### Coffee Shop
- **Categories**: Espresso, Brewed Coffee, Specialty, Cold Beverages, Food
- **Items**: 20+ beverages and food items
- **Focus**: Artisan coffee, community gathering space
- **Price Range**: $3-$8

### Restaurant
- **Categories**: Appetizers, Entrees, Desserts, Wine, Tasting Menus
- **Items**: 15+ fine dining dishes
- **Focus**: Culinary excellence, wine pairing
- **Price Range**: $14-$350

### Bakery
- **Categories**: Breads, Pastries, Cakes, Breakfast, Seasonal
- **Items**: 25+ baked goods
- **Focus**: Fresh daily, artisan methods, custom orders
- **Price Range**: $2.50-$45

### Boutique
- **Categories**: New Arrivals, Dresses, Tops, Accessories, Vintage
- **Items**: 20+ clothing and accessories
- **Focus**: Curated collections, sustainable fashion
- **Price Range**: $68-$345

### Salon/Spa
- **Categories**: Hair, Skincare, Massage, Body Treatments, Packages
- **Items**: 25+ services and packages
- **Focus**: Holistic wellness, personalized care
- **Price Range**: $45-$475

## Common Elements

All templates include:
- Hero section with title, subtitle, and CTA buttons
- About section with story and highlights
- Menu/services section with categories
- Gallery with filterable categories
- Location with hours, address, and contact
- Footer with links and copyright

## Customization Difficulty

| Aspect | Difficulty | Notes |
|--------|-----------|-------|
| Change business info | Easy | Just text updates |
| Update menu items | Easy | Follow existing format |
| Change colors | Easy | Update hex codes |
| Change fonts | Medium | May need to import new fonts |
| Add/remove sections | Medium | Requires template knowledge |
| Change layout | Hard | Requires component changes |

## Selecting the Right Template

### Choose Coffee Shop if:
- You run a cafe or coffee house
- You want a warm, inviting feel
- Your focus is beverages and light food
- You value community atmosphere

### Choose Restaurant if:
- You run a fine dining establishment
- You want an upscale, elegant feel
- You have a curated wine list
- You offer multi-course experiences

### Choose Bakery if:
- You run a bakery or patisserie
- You want a friendly, approachable feel
- You bake fresh daily
- You offer custom cake orders

### Choose Boutique if:
- You run a clothing or fashion store
- You want a minimalist, modern feel
- You curate collections
- You emphasize style and quality

### Choose Salon/Spa if:
- You run a salon, spa, or wellness center
- You want a calming, relaxing feel
- You offer beauty or wellness services
- You emphasize self-care and relaxation

## File Sizes and Structure

Each template contains:
- `theme.config.ts`: ~200-250 lines (visual configuration)
- `content.config.ts`: ~250-400 lines (text and menu content)
- `assets.config.ts`: ~150-200 lines (image paths)

Total per template: ~600-850 lines of configuration

## Image Requirements

All templates expect:
- **Hero**: 1920x1080px background image
- **Category**: 800x600px for each category
- **Gallery**: 1200x800px full images, 400x300px thumbnails
- **About**: 1000x800px main image, 4x 600x400px gallery

Recommended formats:
- JPG for photos
- PNG for logos and graphics with transparency
- SVG for icons
- WebP for optimized loading (optional)

## Browser Compatibility

All templates are compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

Template complexity (rendering time):
1. Boutique (lightest - minimal shadows, simple layout)
2. Salon/Spa (light - soft shadows, clean design)
3. Coffee Shop (medium - moderate effects)
4. Bakery (medium - rounded corners, friendly feel)
5. Restaurant (heaviest - elegant effects, sophisticated styling)

All templates are optimized for modern browsers and should load quickly with properly optimized images.

## Quick Start Command

```bash
# Replace 'template-name' with: coffee-shop, restaurant, bakery, boutique, or salon
cp src/config-templates/[template-name]/*.ts src/config/
```

## Next Steps After Copying

1. Update business name and contact info
2. Customize menu items/services
3. Update pricing
4. Add your images
5. Test on mobile
6. Proofread all content
7. Launch!

---

**Tip**: Don't be afraid to mix and match! Use the colors from one template with the content structure of another to create your perfect configuration.
