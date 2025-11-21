# Yoga Studio Template

A complete, production-ready template for yoga studios with full bilingual support (English/French).

## 🎨 Design Features

### Color Palette
- **Primary**: Sage Green (#6B8E6F) - Calming and natural
- **Secondary**: Warm Beige (#D4C5B0) - Earthy and grounding
- **Background**: Soft Natural White (#F9F7F4)
- **Theme**: Peaceful, organic aesthetic with slower animations for a mindful feel

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Heading Font**: Cormorant Garamond - Elegant serif for headings
- **Accent Font**: Lora - Sophisticated serif for special elements

## 📋 Content Structure

### Service Categories (4)
1. **Dynamic Flow** - Energizing vinyasa and hatha classes
2. **Restorative & Yin** - Gentle, meditative practices
3. **Meditation & Breathwork** - Pranayama and guided meditation
4. **Workshops & Specialty** - Specialized offerings and events

### Class Offerings (16 Classes)
- **Dynamic Flow**: Vinyasa Flow, Power Yoga, Hatha Fundamentals, Morning Energizer Flow
- **Restorative & Yin**: Yin Yoga, Restorative Yoga, Gentle Yoga, Yoga Nidra
- **Meditation & Breathwork**: Guided Meditation, Pranayama Breathwork, Mindful Movement Meditation
- **Workshops & Specialty**: Private Sessions, Yoga Therapy, Monthly Workshop Series, Sound Bath & Healing

## 🌍 Full Bilingual Support

The template includes complete professional translations in:
- **English** (EN)
- **French** (FR)

All content, including:
- Class names and descriptions
- Category names
- About section storytelling
- UI labels and buttons
- Footer and navigation

## 📁 Template Files

Located in `src/config-templates/yoga-studio/`:

- **theme.config.ts** - Complete UI/UX configuration with colors, typography, spacing
- **content.config.ts** - Base content structure (classes, about, location, etc.)
- **content.config.en.ts** - English language content
- **content.config.fr.ts** - French language translations
- **assets.config.ts** - Asset paths and image references

## 🚀 How to Use This Template

### Option 1: Copy to Active Config (Quick Start)

```bash
# Copy all yoga studio config files to the active config directory
cp src/config-templates/yoga-studio/theme.config.ts src/config/
cp src/config-templates/yoga-studio/content.config.ts src/config/
cp src/config-templates/yoga-studio/content.config.en.ts src/config/
cp src/config-templates/yoga-studio/content.config.fr.ts src/config/
cp src/config-templates/yoga-studio/assets.config.ts src/config/
```

Then update the exports in each file to use `coffee` prefix for backwards compatibility:
- `yogaTheme` → also export as `coffeeTheme`
- `yogaContent` → also export as `coffeeContent`
- etc.

### Option 2: Create Yoga-Specific Components (Recommended)

1. Create yoga-specific sections in `src/yoga-studio/sections/`:
   - `YogaHeroSection.tsx`
   - `YogaAboutSection.tsx`
   - `YogaClassesSection.tsx` (adapts to use "classes" instead of "menu")
   - `YogaGallerySection.tsx`
   - `YogaLocationSection.tsx`

2. Create `YogaApp.tsx` similar to `CoffeeApp.tsx`

3. Update `src/main.tsx` to import `YogaApp` instead of `CoffeeApp`

## 📝 Content Highlights

### About Section
Emphasizes:
- Welcoming atmosphere for all levels (beginners to advanced)
- Community-centered approach
- Authentic practice honoring ancient traditions
- Holistic mind-body-spirit connection

### Positioning
- **Local focus**: "Rooted in Community, Growing Together Since 2019"
- **Inclusive**: "Everyone—regardless of experience, flexibility, or background—feels welcomed"
- **Authentic**: "We honor the ancient traditions of yoga while making them relevant for modern life"
- **Supportive**: "More than a studio—a welcoming space for connection and growth"

## 🎯 Key Business Information

**Business Name**: Serenity Flow Yoga Studio

**Tagline (EN)**: "Breathe deeply, move mindfully, live fully"

**Tagline (FR)**: "Respirez profondément, bougez consciemment, vivez pleinement"

**Location**: 247 Harmony Lane, Boulder, CO 80302

**Hours**:
- Monday-Thursday: 6:00 AM - 8:00 PM
- Friday: 6:00 AM - 7:00 PM
- Saturday: 7:30 AM - 6:00 PM
- Sunday: 8:00 AM - 6:00 PM

## 🖼️ Assets Structure

Images should be placed in `public/assets/yoga/`:
- `/images/` - Main images (hero, gallery, classes)
- `/icons/` - SVG icons for UI elements

### Required Images
- Hero background
- About section photos
- Class category images (4)
- Featured class images (8)
- Gallery photos (12+)
- Studio photos
- Logo variations (light/dark)

## ✨ Unique Features

1. **Mindful Animations**: Slightly slower transition durations for a calming feel
2. **Natural Color Palette**: Earth tones that promote tranquility
3. **Comprehensive Class Levels**: Clear indicators for beginner, intermediate, advanced
4. **Duration-Based Pricing**: Classes listed by duration (30, 45, 60, 75, 90 min)
5. **Specialty Offerings**: Unique services like Sound Healing, Yoga Nidra, Pranayama

## 📞 Customization Guide

### To Customize Content:
1. Edit `src/config-templates/yoga-studio/content.config.en.ts` for English
2. Edit `src/config-templates/yoga-studio/content.config.fr.ts` for French
3. Update business details (name, address, hours, contact)
4. Modify class offerings and descriptions
5. Adjust pricing and duration information

### To Customize Theme:
1. Edit `src/config-templates/yoga-studio/theme.config.ts`
2. Change color values in the `colors` section
3. Adjust typography settings
4. Modify spacing and border radius for different aesthetic
5. Tune animation durations

### To Add/Remove Classes:
1. Add entries to the `items` array in content configs
2. Assign to appropriate `category` (flow, restorative, mindfulness, specialty)
3. Set `featured: true` for highlighted classes
4. Add relevant `tags` for filtering

## 🎓 Template Philosophy

This template is designed for yoga studios that want to:
- **Project authenticity** while being accessible
- **Emphasize community** and connection
- **Welcome all levels** from curious beginners to experienced practitioners
- **Honor tradition** while remaining modern and relevant
- **Create a calming digital presence** that reflects the studio experience

## 📄 License

Part of the Small Business SPA Template collection. Use and customize freely for your business.

---

**Created**: November 2024
**Last Updated**: November 2024
**Version**: 1.0.0
