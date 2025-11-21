# Coffee Shop Single Page Application

A modern, fully configurable single-page application (SPA) designed for coffee shop presentations. Built with React, TypeScript, Material-UI, and featuring a comprehensive configuration framework.

## Features

- **Fully Configurable**: All colors, fonts, spacing, content, and assets are managed through central configuration files
- **Responsive Design**: Works beautifully on all devices from mobile to desktop
- **Modern UI/UX**: Smooth animations, elegant transitions, and polished interactions
- **Section-Based Layout**: Hero, About, Menu, Gallery, Location/Contact sections
- **Easy Customization**: Change the entire look and feel by editing configuration files
- **TypeScript**: Full type safety and IntelliSense support
- **Material-UI**: Professional component library with consistent theming

## Project Structure

```
src/
├── config/                          # Configuration Framework
│   ├── theme.config.ts             # UI settings (colors, fonts, spacing, etc.)
│   ├── content.config.ts           # All text content and labels
│   ├── assets.config.ts            # Image paths and asset references
│   └── index.ts                    # Configuration exports
│
├── coffee-shop/                     # Coffee Shop Application
│   ├── CoffeeShopApp.tsx           # Main app component
│   ├── sections/                   # Section components
│   │   ├── CoffeeHeroSection.tsx
│   │   ├── CoffeeAboutSection.tsx
│   │   ├── CoffeeMenuSection.tsx
│   │   ├── CoffeeGallerySection.tsx
│   │   └── CoffeeLocationSection.tsx
│   └── components/                 # Shared components
│       └── CoffeeFooter.tsx
│
├── CoffeeApp.tsx                    # App wrapper with theme provider
└── main.tsx                         # Application entry point

public/
└── assets/
    └── coffee/
        ├── images/                  # All images
        └── icons/                   # All icons
```

## Configuration Framework

### 1. Theme Configuration (`src/config/theme.config.ts`)

Controls all visual aspects of the application:

```typescript
export const coffeeTheme: ThemeConfig = {
  colors: {
    primary: { main: '#6F4E37', ... },     // Brand colors
    secondary: { main: '#D4A574', ... },   // Accent colors
    background: { ... },                    // Background colors
    text: { ... },                          // Text colors
  },
  typography: {
    fontFamily: { ... },                    // Font families
    fontSize: { ... },                      // Font sizes
    fontWeight: { ... },                    // Font weights
  },
  spacing: { ... },                         // Spacing values
  borderRadius: { ... },                    // Border radius values
  shadows: { ... },                         // Shadow definitions
  animations: { ... },                      // Animation settings
  breakpoints: { ... },                     // Responsive breakpoints
};
```

### 2. Content Configuration (`src/config/content.config.ts`)

Contains all text content:

```typescript
export const coffeeContent: ContentConfig = {
  hero: {
    title: 'Aroma Haven Coffee',
    subtitle: 'Where Every Cup Tells a Story',
    tagline: '...',
    ctaButtons: { ... },
  },
  about: {
    sectionTitle: 'Our Story',
    heading: '...',
    story: [...],
    highlights: [...],
  },
  menu: {
    categories: [...],
    items: [...],
  },
  // ... more sections
};
```

### 3. Assets Configuration (`src/config/assets.config.ts`)

Manages all image and icon paths:

```typescript
export const coffeeAssets: AssetsConfig = {
  hero: {
    backgroundImage: '/assets/coffee/images/hero-background.jpg',
    logoImage: '/assets/coffee/images/hero-logo.png',
  },
  // ... more assets
};
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd small-business-spa-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Customization Guide

### Changing Colors

Edit `src/config/theme.config.ts`:

```typescript
colors: {
  primary: {
    main: '#YOUR_COLOR',        // Change primary brand color
    light: '#YOUR_LIGHT_COLOR',
    dark: '#YOUR_DARK_COLOR',
    contrastText: '#FFFFFF',
  },
  // ... more colors
}
```

### Updating Content

Edit `src/config/content.config.ts`:

```typescript
hero: {
  title: 'Your Coffee Shop Name',
  subtitle: 'Your Tagline',
  // ... more content
}
```

### Adding Images

1. Place images in `public/assets/coffee/images/`
2. Update paths in `src/config/assets.config.ts`:

```typescript
hero: {
  backgroundImage: '/assets/coffee/images/your-image.jpg',
}
```

See `public/assets/coffee/README.md` for detailed image guidelines.

### Changing Fonts

Edit `src/config/theme.config.ts`:

```typescript
typography: {
  fontFamily: {
    primary: "'Your Primary Font', sans-serif",
    heading: "'Your Heading Font', serif",
  },
}
```

Don't forget to import the fonts in your HTML or CSS.

### Modifying Spacing

All spacing is controlled from the theme config:

```typescript
spacing: {
  unit: 8,           // Base unit in pixels
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  // ... more spacing values
}
```

## Menu Configuration

Add or modify menu items in `src/config/content.config.ts`:

```typescript
menu: {
  items: [
    {
      id: 'unique-id',
      name: 'Item Name',
      description: 'Item description',
      price: '$5.00',
      category: 'espresso',
      featured: true,           // Shows in featured section
      tags: ['hot', 'vegan'],  // Optional tags
    },
    // ... more items
  ],
}
```

## Gallery Configuration

Configure gallery images in `src/config/assets.config.ts`:

```typescript
gallery: {
  images: [
    {
      id: 'gallery-1',
      src: '/assets/coffee/images/gallery/coffee-1.jpg',
      alt: 'Description',
      category: 'Coffee',
      thumbnail: '/assets/coffee/images/gallery/thumbs/coffee-1.jpg',
    },
    // ... more images
  ],
}
```

## Location & Contact

Update business information in `src/config/content.config.ts`:

```typescript
location: {
  address: {
    street: '123 Your Street',
    city: 'Your City',
    state: 'ST',
    zip: '12345',
    country: 'USA',
  },
  hours: {
    monday: '7:00 AM - 6:00 PM',
    // ... more days
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'hello@yourcoffee.com',
    social: {
      instagram: 'https://instagram.com/yourhandle',
      facebook: 'https://facebook.com/yourpage',
      twitter: 'https://twitter.com/yourhandle',
    },
  },
}
```

## Sections Overview

### Hero Section
- Full-height background image
- Logo overlay
- Title, subtitle, and tagline
- Call-to-action buttons
- Animated scroll indicator

### About Section
- Section title and heading
- Multi-paragraph story
- Main feature image
- Highlight cards with icons
- Small gallery grid

### Menu Section
- Tabbed category navigation
- Featured items showcase
- Full menu listing with prices
- Category descriptions
- Tag system (hot, iced, vegan, etc.)

### Gallery Section
- Filterable image grid
- Multiple categories
- Lightbox view on click
- Masonry layout
- Smooth animations

### Location Section
- Address with map link
- Business hours
- Contact information
- Social media links
- Interactive cards

### Footer
- Business information
- Quick links
- Contact details
- Copyright notice

## Advanced Customization

### Adding New Sections

1. Create a new component in `src/coffee-shop/sections/`
2. Import and add to `src/coffee-shop/CoffeeShopApp.tsx`
3. Add content to `src/config/content.config.ts`
4. Add assets to `src/config/assets.config.ts` if needed

### Modifying Animations

Edit animation settings in `src/config/theme.config.ts`:

```typescript
animations: {
  duration: {
    fast: 250,      // Milliseconds
    normal: 350,
    slow: 500,
  },
  easing: {
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    // ... more easing functions
  },
}
```

### Using CDN for Images

Set the CDN URL in your environment:

```bash
VITE_CDN_URL=https://your-cdn.com
```

The `getImagePath()` helper will automatically use CDN URLs.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Type Checking

```bash
npm run type-check
```

## Linting

```bash
npm run lint
```

## Tips & Best Practices

1. **Image Optimization**: Compress images before adding them to the project
2. **Mobile First**: Test on mobile devices early and often
3. **Content Length**: Keep menu descriptions concise (under 100 characters)
4. **Color Contrast**: Ensure text is readable on all backgrounds
5. **Load Times**: Monitor image sizes and optimize for fast loading
6. **Typography**: Use 2-3 fonts maximum for consistency
7. **Spacing**: Maintain consistent spacing using theme values

## Switching Between Templates

This project includes both a coffee shop template and additional example templates. The coffee shop template is active by default in `src/main.tsx`.

To use a different business template, copy the configuration files from `src/config-templates/[business-type]/` to `src/config/`.

## Troubleshooting

### Images Not Loading

- Check that image paths in `assets.config.ts` match actual file locations
- Ensure images are in the `public/` directory
- Clear browser cache and restart dev server

### Styles Not Applying

- Verify theme config values are valid
- Check for TypeScript errors
- Ensure Material-UI theme is properly configured

### Menu Not Displaying

- Check that menu items have the correct `category` values
- Verify category IDs match between `categories` and `items`

## Resources

- [React Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)

## Support

For issues, questions, or contributions, please refer to the main repository documentation.

## License

[Your License Here]

---

Built with ❤️ and ☕
