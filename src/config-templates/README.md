# Configuration Templates

Welcome to the configuration templates directory! This folder contains pre-built configuration examples for different business types to help you get started quickly with your SPA website.

## Available Templates

We provide ready-to-use templates for the following business types:

1. **Coffee Shop** - Warm browns and cream tones, perfect for cafes and coffee houses
2. **Restaurant** - Elegant burgundy and gold, ideal for fine dining establishments
3. **Bakery** - Soft pastels and warm browns, great for bakeries and patisseries
4. **Boutique** - Sophisticated pastels and neutrals, suited for fashion retail
5. **Salon/Spa** - Calming teals and natural tones, perfect for wellness businesses
6. **Local Store** - Sage green and warm beige, ideal for neighborhood markets and mom & pop shops

## Quick Start Guide

### Step 1: Choose Your Template

Browse the templates and select the one that best matches your business type. Each template folder contains three files:

- `theme.config.ts` - Visual styling (colors, fonts, spacing)
- `content.config.ts` - All text content and menu items
- `assets.config.ts` - Image paths and asset references

### Step 2: Copy Template Files

Copy the three configuration files from your chosen template to the main config directory:

```bash
# Example: Using the bakery template
cp src/config-templates/bakery/*.ts src/config/
```

Or manually copy each file:
- Copy `bakery/theme.config.ts` to `src/config/theme.config.ts`
- Copy `bakery/content.config.ts` to `src/config/content.config.ts`
- Copy `bakery/assets.config.ts` to `src/config/assets.config.ts`

### Step 3: Customize Your Content

Open the copied files and customize them for your business:

#### In `content.config.ts`:
- Update business name, address, and contact information
- Modify menu items/services to match your offerings
- Update pricing
- Change business hours
- Update your story and about section
- Add your social media links

#### In `theme.config.ts`:
- Adjust colors to match your brand (if needed)
- Change fonts to match your brand identity
- Most templates work well as-is, but feel free to tweak

#### In `assets.config.ts`:
- Update image paths to point to your actual images
- Follow the naming conventions for consistency

### Step 4: Add Your Images

Place your images in the appropriate directory based on your template:

```
public/
└── assets/
    └── [your-business-type]/  (e.g., bakery, salon, etc.)
        ├── images/
        │   ├── hero-background.jpg
        │   ├── about-main.jpg
        │   ├── menu-*.jpg
        │   ├── gallery/
        │   │   ├── *.jpg
        │   │   └── thumbs/
        │   │       └── *.jpg
        │   └── items/
        │       └── *.jpg
        └── icons/
            └── *.svg
```

## Template Details

### Coffee Shop Template
**Best for:** Cafes, coffee houses, tea shops

**Color Scheme:**
- Primary: Rich coffee brown (#6F4E37)
- Secondary: Warm caramel (#D4A574)
- Background: Soft cream (#FFF9F5)

**Included Content:**
- Espresso drinks, brewed coffee, specialty beverages
- Cold drinks and food items
- Cozy atmosphere descriptions

---

### Restaurant Template
**Best for:** Fine dining, upscale restaurants, bistros

**Color Scheme:**
- Primary: Deep burgundy (#8B1538)
- Secondary: Elegant gold (#C9A961)
- Background: Warm cream (#FDFBF7)

**Included Content:**
- Appetizers, entrees, desserts
- Wine selection
- Multi-course tasting menus
- Elegant dining atmosphere

---

### Bakery Template
**Best for:** Bakeries, patisseries, bread shops

**Color Scheme:**
- Primary: Warm bread brown (#8B5A3C)
- Secondary: Soft pink frosting (#F4C2C2)
- Background: Flour white (#FFF8F3)

**Included Content:**
- Artisan breads, pastries, cakes
- Breakfast items and seasonal specials
- Custom cake ordering
- Fresh daily baking focus

---

### Boutique Template
**Best for:** Clothing stores, fashion boutiques, retail shops

**Color Scheme:**
- Primary: Dusty rose (#D4A5A5)
- Secondary: Cool gray (#9CA3AF)
- Background: Off white (#FAFAF9)

**Included Content:**
- Clothing collections and accessories
- New arrivals and vintage items
- Styling services
- Minimalist, fashion-forward aesthetic

---

### Salon/Spa Template
**Best for:** Hair salons, day spas, wellness centers

**Color Scheme:**
- Primary: Calming teal (#5FA8A3)
- Secondary: Warm sand (#C8B8A0)
- Background: Soft white (#F8F9F7)

**Included Content:**
- Hair services, facials, massage
- Body treatments and spa packages
- Wellness and relaxation focus
- Serene, tranquil atmosphere

## Customization Tips

### Changing Colors

Colors are defined in `theme.config.ts`. The main colors to customize are:

```typescript
colors: {
  primary: {
    main: '#YOUR_COLOR',     // Main brand color
    light: '#LIGHTER_SHADE', // Hover states, backgrounds
    dark: '#DARKER_SHADE',   // Active states, emphasis
  },
  secondary: {
    main: '#ACCENT_COLOR',   // Secondary/accent color
    // ... same pattern
  }
}
```

**Pro Tips:**
- Keep contrast ratios accessible (use a contrast checker)
- Your primary color should represent your brand
- Secondary colors complement and provide variety
- Maintain consistency across light/dark variations

### Changing Fonts

Fonts are defined in the `typography.fontFamily` section:

```typescript
fontFamily: {
  primary: "'YourFont', sans-serif",    // Body text
  heading: "'YourHeadingFont', serif",  // Headings
  accent: "'YourAccentFont', cursive",  // Special elements
}
```

**Popular Font Combinations:**
- Modern: Montserrat + Open Sans
- Classic: Playfair Display + Lato
- Friendly: Quicksand + Nunito
- Professional: Roboto + Roboto Slab

Remember to import fonts in your HTML or CSS!

### Updating Menu Items

In `content.config.ts`, menu items follow this structure:

```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  description: 'Brief description of the item',
  price: '$10.00',
  category: 'category-id',
  featured: true,  // Optional: shows on homepage
  tags: ['tag1', 'tag2'],  // Optional: for filtering
}
```

**Tips:**
- Keep descriptions concise (1-2 lines)
- Use featured: true for your signature items
- Tags can be used for dietary info, bestsellers, etc.
- Price can be a range: "Starting at $50" or "$20-$40"

### Organizing Images

Follow this naming convention for consistency:

**Hero Images:**
- `hero-background.jpg` - Main background (1920x1080 recommended)
- `hero-logo.png` - Logo overlay (transparent PNG)

**Category Images:**
- `menu-[category-name].jpg` - One per menu category

**Item Images:**
- `items/[item-id].jpg` - Individual product/service images

**Gallery Images:**
- `gallery/[category]-[number].jpg` - Full size (1200x800 minimum)
- `gallery/thumbs/[category]-[number].jpg` - Thumbnail (400x300)

## Best Practices

### 1. Content Quality
- Use real, specific descriptions (not generic placeholder text)
- Include accurate pricing
- Verify all contact information
- Update hours and location precisely

### 2. Image Quality
- Use high-resolution images (at least 1200px width for full images)
- Optimize images for web (compress without losing quality)
- Use consistent aspect ratios within each section
- Ensure images represent your actual business

### 3. Accessibility
- Maintain good color contrast (4.5:1 minimum for text)
- Provide descriptive alt text for images
- Use semantic heading hierarchy
- Test with screen readers if possible

### 4. Brand Consistency
- Use your actual brand colors if you have them
- Match fonts to your existing materials
- Maintain consistent tone in all written content
- Ensure visual elements align with your brand identity

### 5. Mobile Optimization
- Test on mobile devices
- Keep text concise for smaller screens
- Ensure images load quickly
- Verify touch targets are adequately sized

## Testing Your Configuration

After customizing your configuration:

1. **Visual Check**: Review all pages for layout and styling
2. **Content Review**: Proofread all text for accuracy
3. **Image Verification**: Ensure all images load correctly
4. **Link Testing**: Test all internal navigation and external links
5. **Mobile Testing**: View on various device sizes
6. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge

## Mixing and Matching

You don't have to use a single template exclusively! Feel free to mix elements:

- Use Restaurant colors with Bakery content structure
- Apply Boutique styling to Coffee Shop content
- Combine Salon's calming colors with your own content

The templates are starting points - make them your own!

## Need Help?

### Common Issues

**Q: Images aren't showing up**
A: Verify your image paths match the folder structure in `public/assets/` and that filenames match exactly (case-sensitive)

**Q: Colors look wrong**
A: Check that you're using valid color formats (hex, rgb, rgba, hsl). Test with a color picker tool.

**Q: Fonts not loading**
A: Ensure fonts are imported in your main HTML or CSS file. Use Google Fonts for easy implementation.

**Q: Content overflowing or layout broken**
A: Check for very long words or URLs without spaces. Review spacing values in theme config.

### Getting More Templates

Want a template for a different business type? You can:
1. Adapt an existing template that's similar
2. Start from the coffee shop template (most versatile)
3. Create a custom configuration from scratch

### Contributing

If you create a great template for a business type not listed here, consider sharing it with the community!

## Template Checklist

Before going live, verify:

- [ ] All business information is accurate
- [ ] Prices are current
- [ ] Hours of operation are correct
- [ ] Contact information is working
- [ ] All images are properly sized and optimized
- [ ] No placeholder text remains
- [ ] Social media links are correct
- [ ] Location/map information is accurate
- [ ] Mobile view looks good
- [ ] All links work correctly
- [ ] Content is proofread
- [ ] Colors match brand guidelines

## Version Information

These templates are designed for the SPA Master Template v1.0.

**Last Updated:** 2024
**Compatible With:** React 18+, TypeScript 5+

---

## Summary

1. Choose your template
2. Copy files to `src/config/`
3. Customize content, colors, and fonts
4. Add your images
5. Test thoroughly
6. Launch your beautiful site!

Good luck with your new website!
