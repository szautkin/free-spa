# Mechanic Shop Template

A professional automotive repair and maintenance shop template with bilingual support (English/French).

## Features

- **Professional Design**: Clean, modern layout with automotive industry colors (blue and orange)
- **Services Showcase**: Display all your services organized by category (Maintenance, Brakes, Engine, Electrical, Diagnostics)
- **Bilingual Support**: Full English and French translations
- **Responsive Layout**: Works on all devices
- **Easy Customization**: Simple configuration files for quick setup

## Configuration Files

This template includes three main configuration files:

### 1. Theme Configuration (`theme.config.ts`)
Controls the visual appearance:
- **Colors**: Professional blue primary, safety orange secondary
- **Typography**: Bold, industrial fonts (Montserrat, Roboto)
- **Spacing**: Consistent layout spacing
- **Shadows & Effects**: Professional depth and dimension

### 2. Content Configuration
Available in two languages:
- **English** (`content.config.en.ts`)
- **French** (`content.config.fr.ts`)

Includes:
- Business metadata (name, description, keywords)
- Hero section content
- About section with your shop's story
- Services listing with pricing
- Gallery descriptions
- Location and contact information
- Footer content

### 3. Assets Configuration (`assets.config.ts`)
Image and asset paths for:
- Hero background and logo
- About section images
- Service category images
- Gallery photos
- Location images
- Brand assets (logo, favicon)
- Icons

## Services Included

The template comes pre-configured with common automotive services:

### Maintenance
- Oil Change
- Engine Tune-Up
- Tire Rotation & Balance
- Multi-Point Inspection
- Fluid Exchange Service

### Brake Service
- Brake Pad Replacement
- Rotor Resurfacing
- Complete Brake Service
- Brake Fluid Flush

### Engine Repair
- Engine Diagnostics
- Timing Belt Replacement
- Head Gasket Repair
- Check Engine Light Diagnosis

### Electrical Service
- Battery Test & Replace
- Alternator Service
- Starter Replacement
- Electrical Diagnostics

### Diagnostics
- Computer Scan
- Pre-Purchase Inspection
- Noise Diagnosis

## Getting Started

1. **Copy Configuration Files**
   Copy the three config files from this directory to `src/config/`:
   ```bash
   cp src/config-templates/mechanic-shop/*.ts src/config/
   ```

2. **Update Content**
   Edit the content files to match your business:
   - Replace "Precision Auto Works" with your shop name
   - Update address, phone, email, and hours
   - Adjust service offerings and pricing
   - Customize your shop's story in the about section

3. **Add Your Images**
   Place your images in `public/assets/mechanic-shop/`:
   ```
   public/assets/mechanic-shop/
   ├── images/
   │   ├── hero-background.jpg
   │   ├── logo.png
   │   ├── about-main.jpg
   │   ├── services/
   │   └── gallery/
   └── icons/
   ```

4. **Update Asset Paths**
   If needed, modify paths in `assets.config.ts` to match your image locations.

## Customization Tips

### Changing Colors
Edit `theme.config.ts` to modify the color scheme:
```typescript
colors: {
  primary: {
    main: '#1E40AF',  // Your primary brand color
  },
  secondary: {
    main: '#F97316',  // Your accent color
  },
}
```

### Adding Services
Add new services to the `items` array in `content.config.en.ts`:
```typescript
{
  id: 'service-id',
  name: 'Service Name',
  description: 'Service description',
  price: '$99.99',
  category: 'maintenance',
  featured: true,  // Optional: appears in featured section
  tags: ['quick'],  // Optional: for filtering
}
```

### Modifying Service Categories
Update the `categories` array to add or remove service categories:
```typescript
categories: [
  {
    id: 'custom-category',
    name: 'Custom Category',
    description: 'Description of this service category',
  },
]
```

## Bilingual Content

The template includes full French translations. Both languages share the same structure, making it easy to maintain consistency.

To switch languages, the app uses the language toggle component that's built into the template.

## Image Recommendations

For best results, use these image dimensions:

- **Hero Background**: 1920x1080px (landscape)
- **About Main Image**: 800x600px
- **Service Category Images**: 400x300px
- **Gallery Images**: 800x600px
- **Thumbnails**: 300x225px
- **Logo**: 300x100px (transparent PNG)

## Support

For questions or issues with this template, please refer to the main project documentation or open an issue in the repository.

## License

This template is part of the Small Business SPA Template project.
