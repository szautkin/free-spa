# Customization Guide - Make It Yours!

Now for the fun part - making your website match your brand and style! This guide shows you how to change colors, fonts, and make your site uniquely yours.

## What You Can Customize

- **Colors:** Every color on your site (backgrounds, buttons, text)
- **Fonts:** The typefaces used for headings and body text
- **Content:** All text in English and French
- **Layout:** Show or hide sections
- **Spacing:** Adjust how cramped or spacious things feel
- **Your Story:** Write your unique about section

---

## Understanding Your Theme File

All design settings live in:
```
src/config/theme.config.ts
```

Think of this as your website's design control panel. Every visual element can be adjusted here.

**Don't be intimidated by the code!** You'll mostly be changing color codes and font names. We'll show you exactly where.

---

## Changing Colors

### How Colors Work

Colors are written as "hex codes" - 6-character codes that start with #:
```
#6F4E37  ← This is a coffee brown
#FFFFFF  ← This is white
#000000  ← This is black
```

### Your Main Color Palette

Open `theme.config.ts` and find the COLORS section (around line 211):

```typescript
colors: {
  primary: {
    main: '#6F4E37',        // Your main brand color
    light: '#8B6F47',       // Lighter version (for hovers)
    dark: '#4A3225',        // Darker version (for accents)
    contrastText: '#FFFFFF', // Text color on main color
  },
  secondary: {
    main: '#D4A574',        // Your accent color
    light: '#E8C9A0',       // Lighter accent
    dark: '#B8935F',        // Darker accent
    contrastText: '#2C2013', // Text on accent color
  },
```

### What Each Color Does

**Primary Colors** (Used for buttons, links, headers):
- `main` - Your brand color (appears on buttons, important elements)
- `light` - Shows when you hover over buttons
- `dark` - Used for emphasis
- `contrastText` - Text color that shows up clearly on your main color

**Secondary Colors** (Used for accents, highlights):
- `main` - Complementary color to your primary
- `light` - Softer version
- `dark` - Bolder version
- `contrastText` - Text color for secondary elements

**Background Colors:**
```typescript
background: {
  default: '#FFF9F5',     // Main page background
  paper: '#FFFFFF',       // Cards and sections
  dark: '#2C2013',        // Dark sections (footer, etc.)
  light: '#F5EFE7',       // Subtle backgrounds
},
```

**Text Colors:**
```typescript
text: {
  primary: '#2C2013',     // Main text (paragraphs)
  secondary: '#5C4A3A',   // Less important text
  disabled: '#A89585',    // Disabled/muted text
  hint: '#C4B5A0',        // Placeholder text
},
```

---

## Ready-Made Color Schemes

Not sure what colors to pick? Here are tested combinations that look great:

### Classic Coffee Shop
```typescript
primary: {
  main: '#6F4E37',        // Rich coffee brown
  light: '#8B6F47',       // Light mocha
  dark: '#4A3225',        // Dark espresso
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#D4A574',        // Warm caramel
  light: '#E8C9A0',       // Light cream
  dark: '#B8935F',        // Deep caramel
  contrastText: '#2C2013',
},
```

### Modern Minimalist
```typescript
primary: {
  main: '#2C3E50',        // Deep blue-gray
  light: '#34495E',       // Lighter gray-blue
  dark: '#1A252F',        // Almost black
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#ECF0F1',        // Soft white
  light: '#FFFFFF',       // Pure white
  dark: '#BDC3C7',        // Light gray
  contrastText: '#2C3E50',
},
```

### Warm & Cozy
```typescript
primary: {
  main: '#D4704A',        // Terracotta
  light: '#E89070',       // Soft coral
  dark: '#B85A38',        // Deep terracotta
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#F4E6D8',        // Cream
  light: '#FFF9F4',       // Off-white
  dark: '#E8D4C0',        // Tan
  contrastText: '#4A3428',
},
```

### Fresh & Green
```typescript
primary: {
  main: '#52B788',        // Fresh green
  light: '#74C69D',       // Mint
  dark: '#2D6A4F',        // Forest green
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#D8F3DC',        // Very light green
  light: '#F1FAEE',       // Almost white
  dark: '#B7E4C7',        // Soft green
  contrastText: '#1B4332',
},
```

### Elegant Black & Gold
```typescript
primary: {
  main: '#1C1C1C',        // Charcoal black
  light: '#2E2E2E',       // Dark gray
  dark: '#000000',        // True black
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#D4AF37',        // Gold
  light: '#E8C96E',       // Light gold
  dark: '#B8941F',        // Deep gold
  contrastText: '#1C1C1C',
},
```

**To use a preset:** Simply copy the colors into your `theme.config.ts` file!

---

## Choosing Your Own Colors

### Method 1: Using a Color Picker

1. Go to Google and search "color picker"
2. Click on a color you like
3. Copy the HEX code (starts with #)
4. Paste it into your config file

### Method 2: From Your Logo or Photos

1. Go to **imagecolorpicker.com**
2. Upload your logo or a favorite photo
3. Click on a color you want to use
4. Copy the hex code
5. Paste into your config

### Method 3: Using Coolors.co

1. Go to **coolors.co**
2. Press spacebar to generate color palettes
3. Click "View on Coolors" when you find one you like
4. Copy the hex codes
5. Paste into your config

### Pro Tips for Picking Colors

**The 60-30-10 Rule:**
- 60% of your site = background/neutral color
- 30% = primary brand color
- 10% = accent color for emphasis

**Make Sure Text is Readable:**
- Dark text on light backgrounds
- Light text on dark backgrounds
- Never light gray text on white!

**Test Accessibility:**
Go to **webaim.org/resources/contrastchecker**
- Enter your text color and background color
- Make sure it passes WCAG AA (shows a green checkmark)

**Stay Consistent:**
- Use your actual brand colors if you have them
- Limit yourself to 2-3 main colors
- Use tints (lighter) and shades (darker) of those colors

---

## Changing Fonts

Fonts set the mood and personality of your site!

### Your Font Settings

Find the TYPOGRAPHY section (around line 242):

```typescript
fontFamily: {
  primary: "'Inter', 'Helvetica Neue', Arial, sans-serif",    // Body text
  heading: "'Playfair Display', 'Georgia', serif",            // Headings
  accent: "'Dancing Script', cursive",                        // Special text
  mono: "'JetBrains Mono', 'Courier New', monospace",        // Code (rarely used)
},
```

### What Each Font Does

- **primary** - All regular text (paragraphs, menu descriptions, etc.)
- **heading** - Page titles and section headers
- **accent** - Special decorative text (optional)
- **mono** - Technical text (you probably won't change this)

### Recommended Font Combinations

#### Classic & Professional
```typescript
primary: "'Lato', 'Helvetica', sans-serif",
heading: "'Playfair Display', 'Georgia', serif",
accent: "'Satisfy', cursive",
```
**Vibe:** Timeless, elegant, trustworthy

#### Modern & Clean
```typescript
primary: "'Inter', 'Arial', sans-serif",
heading: "'Montserrat', 'Helvetica', sans-serif",
accent: "'Pacifico', cursive",
```
**Vibe:** Contemporary, straightforward, fresh

#### Warm & Friendly
```typescript
primary: "'Open Sans', 'Arial', sans-serif",
heading: "'Merriweather', 'Georgia', serif",
accent: "'Dancing Script', cursive",
```
**Vibe:** Approachable, cozy, welcoming

#### Bold & Strong
```typescript
primary: "'Roboto', 'Helvetica', sans-serif",
heading: "'Bebas Neue', 'Arial Black', sans-serif",
accent: "'Caveat', cursive",
```
**Vibe:** Confident, energetic, modern

#### Elegant & Upscale
```typescript
primary: "'Cormorant Garamond', 'Georgia', serif",
heading: "'Cinzel', 'Times New Roman', serif",
accent: "'Great Vibes', cursive",
```
**Vibe:** Luxurious, sophisticated, refined

### How to Change Fonts

**Simple Method - Use Google Fonts:**

1. Go to **fonts.google.com**
2. Browse and find fonts you like
3. Click on a font
4. Look for the font name at the top
5. Copy the name exactly as shown
6. Paste into your config like this:

```typescript
heading: "'Your Font Name', 'Fallback Font', serif",
```

**Important:**
- Keep the quotes and commas!
- Always include a fallback (Arial, Helvetica, Georgia, etc.)
- Test that it looks good!

### Font Size

Want bigger or smaller text overall? Change these (around line 250):

```typescript
fontSize: {
  xs: '0.75rem',      // Very small (12px)
  sm: '0.875rem',     // Small (14px)
  base: '1rem',       // Normal body text (16px) ← Most important
  lg: '1.125rem',     // Slightly larger (18px)
  xl: '1.25rem',      // Large (20px)
  '2xl': '1.5rem',    // Heading size (24px)
  '3xl': '1.875rem',  // Large heading (30px)
  '4xl': '2.25rem',   // Big heading (36px)
  '5xl': '3rem',      // Huge (48px)
  '6xl': '3.75rem',   // Extra huge (60px)
},
```

**To make text bigger:** Increase the numbers slightly
**To make text smaller:** Decrease the numbers slightly

**Example - Making everything a bit bigger:**
```typescript
base: '1.125rem',   // Changed from 1rem (now 18px instead of 16px)
```

---

## Editing Your Content (English & French)

Your content lives in:
```
src/config/content.config.ts
```

### Sections You Can Edit

1. **Site Metadata** (Line 125) - SEO and browser info
2. **Hero Section** (Line 142) - Your homepage banner
3. **About Section** (Line 159) - Your story
4. **Menu Section** (Line 188) - All your products
5. **Gallery** (Line 405) - Photo section title
6. **Location** (Line 412) - Address, hours, contact
7. **Footer** (Line 443) - Bottom of page

### Adding French Content

Want your site in both English and French? Here's how:

**Current structure** (English only):
```typescript
hero: {
  title: 'Aroma Haven Coffee',
  subtitle: 'Where Every Cup Tells a Story',
```

**Bilingual structure** (add this):
```typescript
hero: {
  title: {
    en: 'Aroma Haven Coffee',
    fr: 'Café Aroma Haven',
  },
  subtitle: {
    en: 'Where Every Cup Tells a Story',
    fr: 'Où Chaque Tasse Raconte une Histoire',
  },
```

**For menu items:**
```typescript
{
  name: {
    en: 'Latte',
    fr: 'Café au Lait',
  },
  description: {
    en: 'Espresso with velvety steamed milk',
    fr: 'Espresso avec lait velouté',
  },
  price: '$5.00',  // Price stays the same
  category: 'espresso',
},
```

### Translation Tips

**Need help translating?**
- Use **DeepL.com** (better than Google Translate for French)
- Ask a French-speaking friend to review
- Keep translations natural, not word-for-word
- Maintain the same tone (friendly, professional, etc.)

**Menu translations:**
- Some words stay in Italian/English (espresso, cappuccino, latte)
- Translate descriptions, not coffee terms
- Keep it natural: "Café au lait" not "Latte"

---

## Showing or Hiding Sections

Want to hide a section temporarily? You can!

**Method 1:** Comment it out

Find the section in your config and add `//` at the start:

```typescript
// gallery: {
//   sectionTitle: 'Our Space',
//   subtitle: 'A glimpse into the Aroma Haven experience',
//   categories: ['All', 'Coffee', 'Interior', 'Food', 'Events'],
// },
```

Now the gallery section won't show!

**To bring it back:** Remove the `//` from each line.

**Method 2:** Create a visibility toggle

Add this to the top of `content.config.ts`:

```typescript
export const sectionVisibility = {
  hero: true,
  about: true,
  menu: true,
  gallery: false,    // ← Gallery hidden
  location: true,
  footer: true,
};
```

Then you can easily turn sections on/off by changing `true` to `false`!

---

## Writing Your Story (About Section)

This is where you connect with customers! Here's how to write an engaging story:

### The Formula

**Paragraph 1:** The "Why"
- Why did you start this business?
- What problem do you solve?
- What makes you different?

**Paragraph 2:** The "How"
- How do you do what you do?
- What's your process or philosophy?
- What makes your product/service special?

**Paragraph 3:** The "Who"
- Who are you?
- Who do you serve?
- Who is your community?

### Real Example - Before and After

**Before (Generic):**
```
We are a coffee shop that serves great coffee.
We have been in business since 2018.
We serve the local community.
```

**After (Engaging):**
```
At Marie's Cozy Cafe, we believe coffee should bring people together.
After traveling through Europe and falling in love with neighborhood cafes,
I returned home with a dream: create a space where neighbors become friends
and every visit feels like coming home.

We source our beans from women-owned farms in Colombia and Ethiopia,
roasting small batches right here in our kitchen. Every cup is brewed
with intention, every pastry baked fresh at 5am. We don't rush perfection.

Whether you're a remote worker needing reliable wifi, a student seeking
a quiet corner, or a friend group catching up over lattes, we've saved
you a seat. This is your cafe too.
```

### Your Story Template

Fill in these blanks:

```
At [BUSINESS NAME], we believe [YOUR PHILOSOPHY].

[HOW IT STARTED - 1-2 sentences about your journey].

[WHAT MAKES YOU SPECIAL - 2-3 sentences about your unique approach].

[WHO YOU SERVE - 2 sentences about your community and why you exist].
```

### Tips for Great Storytelling

**Do:**
- Be authentic and personal
- Share your passion
- Include specific details (names of farms, types of beans, etc.)
- Explain what makes you different
- Welcome your customers warmly

**Don't:**
- Use generic restaurant language ("We pride ourselves on quality...")
- Make it all about you (include your customers!)
- Use jargon or complicated words
- Be too long (3 short paragraphs is perfect)
- Forget to show your personality!

---

## Adjusting Spacing and Layout

Want more breathing room? Or prefer things tighter?

Find the SPACING section (around line 286):

```typescript
spacing: {
  unit: 8,  // Base spacing unit (everything multiplies from this)
  xs: '0.5rem',   // Extra small spacing
  sm: '1rem',     // Small spacing
  md: '1.5rem',   // Medium spacing (most common)
  lg: '2rem',     // Large spacing
  xl: '3rem',     // Extra large spacing
```

**More spacious:** Increase these values by 0.25 or 0.5:
```typescript
md: '1.75rem',   // Was 1.5rem
lg: '2.5rem',    // Was 2rem
```

**More compact:** Decrease these values by 0.25:
```typescript
md: '1.25rem',   // Was 1.5rem
lg: '1.75rem',   // Was 2rem
```

**Section spacing** (between major sections):

```typescript
section: {
  padding: {
    mobile: '3rem 1.5rem',      // Spacing on phones
    tablet: '5rem 3rem',        // Spacing on tablets
    desktop: '6rem 4rem',       // Spacing on computers
  },
```

Make these bigger for more dramatic section breaks, smaller for a tighter layout.

---

## Before and After Examples

### Example 1: Coffee Shop to Bakery

**Changes needed:**
- Primary color: Coffee brown → Warm pink
- Heading font: Serif → Friendly rounded sans-serif
- Hero title: "Coffee Shop" → "Artisan Bakery"
- Menu categories: Coffee → Pastries

**Files to edit:**
1. `theme.config.ts` - Colors and fonts
2. `content.config.ts` - All text
3. Images folder - Replace with bakery photos

### Example 2: Modern to Rustic

**Changes needed:**
- Colors: Cool grays → Warm browns and creams
- Fonts: Modern sans-serif → Classic serif
- Spacing: Tight → More generous
- Photos: Minimal → Cozy and textured

**Result:** Same structure, completely different feel!

---

## Testing Your Changes

After making changes, always:

1. **Save your files** (Ctrl+S / Cmd+S)
2. **Refresh your browser** (Ctrl+R / Cmd+R or Ctrl+F5 for hard refresh)
3. **Check on mobile** (make browser window narrow or use phone)
4. **Test all sections** (scroll through entire page)
5. **Click all buttons** (make sure links work)
6. **Read everything** (catch typos!)

### Testing Checklist

- [ ] Colors look good together
- [ ] Text is readable on all backgrounds
- [ ] Fonts are loading correctly
- [ ] Images show up
- [ ] Spacing looks balanced
- [ ] Nothing is cut off or overlapping
- [ ] Works on mobile (narrow browser window)
- [ ] All links work
- [ ] No typos or grammar errors
- [ ] Represents your brand accurately

---

## Common Customization Mistakes

### Mistake 1: Too Many Colors
**Problem:** Using 6 different colors randomly
**Solution:** Stick to 2-3 main colors + neutral backgrounds

### Mistake 2: Unreadable Text
**Problem:** Light gray text on white background
**Solution:** Use dark text on light backgrounds, ensure good contrast

### Mistake 3: Too Many Fonts
**Problem:** Using 5 different typefaces
**Solution:** Use 2-3 fonts maximum (one for headings, one for body)

### Mistake 4: Inconsistent Spacing
**Problem:** Some sections cramped, some too spaced out
**Solution:** Use the same spacing values throughout

### Mistake 5: Forgetting to Save
**Problem:** Making changes but not seeing them
**Solution:** Always save (Ctrl+S) before refreshing browser

---

## Advanced Customization

Ready to go deeper?

### Rounded Corners

Find BORDER RADIUS section (around line 318):

```typescript
borderRadius: {
  none: '0',          // Sharp corners
  sm: '0.125rem',     // Slightly rounded
  md: '0.375rem',     // Medium rounded
  lg: '0.5rem',       // Noticeably rounded ← Used for buttons
  xl: '0.75rem',      // Very rounded
  '2xl': '1rem',      // Super rounded
  full: '9999px',     // Perfect circles
},
```

Want rounder buttons? Change `lg` to a bigger number.
Want sharp edges? Change to `'0'`.

### Shadows and Depth

Find SHADOWS section (around line 332):

```typescript
shadows: {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',         // Subtle
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',        // Normal
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',       // Noticeable
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',     // Prominent ← Card shadows
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',     // Dramatic
},
```

Want more dramatic shadows? Use `lg` or `xl` instead of `base`.
Want flatter design? Use `sm` or `none`.

### Animation Speed

Find ANIMATIONS section (around line 344):

```typescript
duration: {
  fastest: 150,   // Very quick
  fast: 250,      // Quick
  normal: 350,    // Standard ← Most animations
  slow: 500,      // Leisurely
  slowest: 700,   // Dramatic
},
```

Want faster animations? Use lower numbers.
Want more dramatic transitions? Use higher numbers.

---

## Quick Reference

### Files You'll Edit

**For design (colors, fonts, spacing):**
```
src/config/theme.config.ts
```

**For content (text, menu, info):**
```
src/config/content.config.ts
```

**For images:**
```
src/config/assets.config.ts
public/assets/coffee/images/
```

### Most Common Changes

**Change brand color:**
`theme.config.ts` → Line 213 → `primary: { main: '#YOURCOLOR' }`

**Change heading font:**
`theme.config.ts` → Line 246 → `heading: "'Font Name', serif"`

**Change business name:**
`content.config.ts` → Line 127 → `siteName: 'Your Business'`

**Change menu items:**
`content.config.ts` → Line 217 → Edit the items array

**Change colors everywhere:**
`theme.config.ts` → Lines 211-240 → Update all color values

---

## You're a Designer Now!

You've learned:
- How to change colors to match your brand
- How to pick and customize fonts
- How to write compelling content
- How to add French translations
- How to adjust spacing and layout
- How to test and refine your design

**Remember:** Design is iterative. Make changes, look at them, adjust, repeat. Trust your instincts!

**Your site should feel like:** Walking into your actual business. If it does, you've succeeded!

---

## Final Tips

1. **Start simple:** Change one thing at a time
2. **Save often:** Before and after each change
3. **Get feedback:** Show friends and customers
4. **Trust yourself:** You know your brand better than anyone
5. **Have fun:** This is YOUR website - make it yours!

**Need inspiration?**
- Browse similar businesses online
- Look at your favorite websites
- Check Instagram for color schemes
- Visit design inspiration sites (Dribbble, Behance)

**Remember:** There's no "perfect" design. There's only YOUR design that represents YOUR business authentically. You've got this!
