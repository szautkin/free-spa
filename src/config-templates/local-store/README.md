# Local Store Template

A warm, community-focused template designed for neighborhood mom & pop stores, corner markets, and family-owned retail shops that emphasize local products and personal service.

## Overview

**Best For:** Family-owned corner stores, neighborhood markets, local general stores, community markets

**Business Type:** Miller's Corner Market - A three-generation family business serving the neighborhood since 1972

**Design Philosophy:** Friendly, approachable, and community-oriented with emphasis on local connections and personal touch

## Color Scheme

The color palette evokes natural, community-focused values with warm, welcoming tones:

- **Primary Color:** Sage Green (#52795C)
  - Main: #52795C - Natural, community-oriented
  - Light: #6FA076 - Light sage for hover states
  - Dark: #3A5A42 - Dark forest green for emphasis

- **Secondary Color:** Warm Beige (#E8D5B7)
  - Main: #E8D5B7 - Warm, approachable
  - Light: #F5EBD9 - Light cream for backgrounds
  - Dark: #C9B896 - Deep tan for contrast

- **Background:** Soft off-white (#FDFBF7) creating a clean, welcoming space

**Color Psychology:** Green represents growth, nature, and community values. Beige adds warmth and approachability, creating a friendly neighborhood atmosphere.

## Typography

Carefully selected fonts that feel welcoming and readable:

- **Primary Font:** Open Sans
  - Clean, friendly sans-serif
  - Excellent readability for product descriptions
  - Modern but approachable

- **Heading Font:** Merriweather
  - Classic serif with warmth
  - Great for establishing trust and tradition
  - Perfect for the "family business" narrative

- **Accent Font:** Pacifico
  - Casual, handwritten feel
  - Used sparingly for special touches
  - Adds personal, friendly character

## Template Features

### Bilingual Support (EN/FR)

Full bilingual implementation with separate content files:
- `content.config.en.ts` - English content
- `content.config.fr.ts` - Professional French translation
- Identical structure ensures seamless language switching
- All text, labels, and UI elements translated

### Product Categories (4)

1. **Daily Essentials**
   - Groceries and household items
   - Pantry staples, dairy, eggs
   - Snacks, beverages, household supplies
   - Price range: $1.99 - $5.00

2. **Local Artisan Products**
   - Handcrafted goods from regional makers
   - Wildflower honey, small batch preserves
   - Fresh baked goods, local crafts
   - Price range: $4.00 - $12.00

3. **Fresh & Seasonal**
   - Produce, dairy, and seasonal specialties
   - Seasonal produce (market price)
   - Fresh herbs, artisan cheeses
   - Prepared meals from local kitchens
   - Price range: $3.50 - Market Price

4. **Community Services**
   - Special services to make life easier
   - Free neighborhood delivery
   - Special orders, custom gift baskets
   - Community bulletin board
   - Price range: Free - $35+

### Products & Services (16 Items)

The template includes thoughtfully curated items that tell a story:

**Featured Items:**
- Wildflower Honey ($12) - From Jenkins Apiary, harvested within 10 miles
- Small Batch Preserves ($8.50) - From Riverside Farm Kitchen
- Fresh Dairy & Eggs (From $3.50) - From local dairies
- Seasonal Produce (Market Price) - Changes weekly from nearby farms
- Neighborhood Delivery (Free) - Free delivery within 2 miles for orders $25+
- Custom Gift Baskets (From $35) - Personalized with local products

### Brand Story

**Compelling Narrative Elements:**

1. **Established 1972** - Three generations of family ownership
2. **Personal Service** - Know customers by name, remember favorites
3. **Local First** - Direct relationships with farmers and artisans
4. **Community Hub** - More than a store, a gathering place

**Story Highlights (4 badges):**
- Family Owned - Three generations serving with care
- Local First - Curated selection from regional makers
- Personal Service - We know your name and favorites
- Community Hub - A neighborhood gathering place

## File Structure

```
src/config-templates/local-store/
├── theme.config.ts          # Visual theme (green/beige colors, fonts)
├── content.config.ts        # Unified content interface + exports
├── content.config.en.ts     # English content (Miller's Corner Market)
├── content.config.fr.ts     # French content (Marché du Coin Miller)
└── assets.config.ts         # Asset paths for store imagery
```

## Getting Started

### 1. Activate the Template

Copy the template files to make them active:

```bash
cp src/config-templates/local-store/*.ts src/config/
```

### 2. Customize Business Information

Edit `src/config/content.config.en.ts` and `src/config/content.config.fr.ts`:

- Update business name (currently "Miller's Corner Market")
- Change address and contact information
- Modify hours of operation
- Update social media links
- Change established year and story

### 3. Customize Products

Update the `items` array in the menu section:

```typescript
{
  id: 'your-product-id',
  name: 'Your Product Name',
  description: 'Compelling description emphasizing local/quality',
  price: '$X.XX' or 'From $X' or 'Market Price',
  category: 'essentials' | 'local-artisan' | 'fresh' | 'services',
  featured: true,  // Shows on homepage
  tags: ['local', 'fresh', 'handmade', 'seasonal'],
}
```

### 4. Adjust Categories (Optional)

Modify the `categories` array to match your offerings:

```typescript
categories: [
  {
    id: 'category-id',
    name: 'Category Name',
    description: 'Brief description of this category',
  },
]
```

### 5. Add Your Images

Place images in `public/assets/local-store/`:

**Required Images:**
- `images/hero-background.jpg` (1920x1080px)
- `images/about-main.jpg` (1000x800px)
- `images/storefront.jpg` (1200x800px)
- `images/menu-essentials.jpg` (800x600px)
- `images/menu-local-artisan.jpg` (800x600px)
- `images/menu-fresh.jpg` (800x600px)
- `images/menu-services.jpg` (800x600px)

**Gallery Images:**
- 12+ images across categories: Store, Products, Local Artisans, Community
- Full size: 1200x800px minimum
- Thumbnails: 400x300px in `images/gallery/thumbs/`

### 6. Update Branding

In `content.config.en.ts` and `content.config.fr.ts`:

```typescript
metadata: {
  siteName: 'Your Store Name',
  siteDescription: 'Your compelling description...',
  siteUrl: 'https://yourstore.com',
  keywords: [...],
}
```

In `index.html`:
```html
<title>Your Store Name - Tagline</title>
<meta name="description" content="Your description..." />
<link rel="icon" href="/assets/local-store/images/favicon.png" />
```

## Customization Tips

### Writing Your Story

The "About" section should emphasize:
- **Heritage:** When was your store established?
- **Personal Touch:** How do you know your customers?
- **Local Connection:** Where do your products come from?
- **Community Role:** What makes you more than just a store?

**Example Structure:**
1. Opening paragraph - Your founding story and vision
2. Middle paragraph - What makes you unique (products, relationships)
3. Closing paragraph - The experience and community impact

### Pricing Strategy

- Use "From $X" for variable pricing
- Use "Market Price" for seasonal/fluctuating items
- Use "$X.XX" for fixed-price items
- Use "Free" or "Varies" for services
- Be realistic for your market area

### Highlighting Local Products

Use descriptive tags and detailed descriptions:
- Mention the producer by name (Jenkins Apiary, Riverside Farm)
- Include distance/location details (within 10 miles)
- Use terms like "handcrafted," "small batch," "farm-fresh"
- Add "featured: true" for signature local items

### Service Offerings

Don't forget to include services that add value:
- Local delivery (specify radius and minimum)
- Special orders
- Gift baskets
- Community board
- Loyalty programs
- Custom services unique to your store

## Image Recommendations

### Hero Section
- Wide shot of storefront or welcoming interior
- Show friendly staff or customers shopping
- Natural lighting, warm and inviting
- 1920x1080px minimum

### Product Photography
- Natural lighting preferred
- Show texture and quality
- Include context (hands holding, on counter)
- Consistent style across all product images
- 800x600px for category images

### Gallery
- Mix of product shots, store interior, and community
- Show staff interacting with customers
- Highlight local artisan partnerships
- Include seasonal displays
- Capture the neighborhood atmosphere

## Best Practices

### Content Writing

1. **Be Specific:** Name actual farmers, bakers, and artisans you work with
2. **Show Heritage:** Include founding year and family connection
3. **Personal Touch:** Use "we know you by name" type language
4. **Local Focus:** Emphasize regional products and community ties
5. **Authenticity:** Let your genuine personality show through

### Color Adjustments

While the sage green and beige work well, you can adjust:
- Make green darker (#3A5A42) for more traditional feel
- Make green lighter (#6FA076) for more modern look
- Adjust beige warmer or cooler based on your brand
- Ensure WCAG AA contrast ratios (4.5:1 minimum)

### Bilingual Considerations

- Maintain identical structure between EN and FR
- Translate culturally, not just literally
- Adjust examples if needed for French-speaking regions
- Keep consistent tone and personality in both languages
- Test language switching thoroughly

## SEO Optimization

### Keywords to Include

- "local store" + [your city]
- "neighborhood market" + [your area]
- "family owned" + your specialty
- "local products" + region
- "[your city] corner store"
- "community market" + neighborhood name

### Metadata Best Practices

- Keep siteName under 60 characters
- Keep siteDescription under 160 characters
- Include location in description
- Use 8-12 relevant keywords
- Update social share image

## Performance Tips

- Optimize all images (compress without quality loss)
- Use WebP format for modern browsers
- Lazy load gallery images
- Keep product descriptions concise (1-2 lines)
- Test on mobile devices

## Testing Checklist

Before going live:

- [ ] All business information is accurate
- [ ] Products/prices are current
- [ ] Hours of operation are correct
- [ ] Phone, email, address verified
- [ ] All images load properly
- [ ] Mobile view looks good
- [ ] Language switching works (EN/FR)
- [ ] Map location is accurate
- [ ] Social media links work
- [ ] No placeholder text remains
- [ ] Forms/contact methods tested
- [ ] Load time under 3 seconds

## Common Modifications

### Adding a Product

```typescript
{
  id: 'new-item',
  name: 'New Product Name',
  description: 'Description highlighting local source or quality',
  price: '$X.XX',
  category: 'appropriate-category',
  featured: false,  // true if you want it on homepage
  tags: ['relevant', 'tags'],
}
```

### Changing Store Hours

Update in `location.hours`:
```typescript
hours: {
  monday: '7:00 AM - 8:00 PM',
  tuesday: '7:00 AM - 8:00 PM',
  // ... rest of week
  sunday: 'Closed',  // or hours
}
```

### Adding a Category

1. Add to `categories` array
2. Create matching `menu-[category-id].jpg` image
3. Add items with matching category ID
4. Update gallery categories if needed

## Support & Resources

### Inspiration

Great examples of mom & pop store content:
- Emphasize "know you by name" personal service
- Highlight multi-generational family ownership
- Feature local producer partnerships
- Show community involvement
- Share customer stories and traditions

### Image Sources

If you need placeholder images:
- Unsplash: Search "local store," "corner shop," "grocery"
- Pexels: Search "small business," "neighborhood market"
- Your own photos: Best option for authenticity!

## Version History

- **v1.0** (2024) - Initial local store template
  - 4 product/service categories
  - 16 curated items
  - Full bilingual support (EN/FR)
  - Green/beige color scheme
  - Community-focused narrative

## Contributing

If you make improvements to this template:
- Keep the friendly, approachable tone
- Maintain bilingual support
- Focus on local/community themes
- Test across different store types
- Share back with the community!

---

**Happy selling!** Remember, this template celebrates what makes small local stores special: personal connection, quality products, and genuine community care. Let that shine through in your customization.
