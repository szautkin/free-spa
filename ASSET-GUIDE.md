# Image Guide - Making Your Website Look Beautiful

This guide explains everything about adding your photos to make your website uniquely yours.

## Where Your Images Live

All your photos go in one main folder:
```
public/assets/coffee/images/
```

Think of this like a photo album. Open this folder and you'll see all your website images organized inside.

---

## Quick Start - Essential Images

These are the must-have images to get your site working:

### Required Images (Start Here!)

1. **hero-background.jpg**
   - This is the big photo visitors see first
   - Should show your best angle - maybe your storefront, a beautiful coffee pour, or your cozy interior
   - Recommended size: 1920px wide x 1080px tall
   - Can be slightly different sizes, but wider is better

2. **logo.png**
   - Your business logo
   - Should have a transparent background if possible
   - Recommended size: 400px wide (height depends on your logo)
   - PNG format works best for logos

3. **about-main.jpg**
   - A photo that tells your story
   - Could be the owner, the team, or your beautiful space
   - Recommended size: 800px wide x 600px tall

4. **storefront.jpg**
   - The outside of your business
   - Helps customers find you!
   - Recommended size: 800px wide x 600px tall

---

## Image Naming - Keep It Simple

### The Golden Rules

1. **Use lowercase letters** (hero.jpg not Hero.jpg)
2. **Use dashes instead of spaces** (coffee-shop.jpg not coffee shop.jpg)
3. **Keep names short and clear** (latte.jpg not IMG_2847.jpg)
4. **Use the right file type:**
   - Photos: `.jpg` (smaller file size)
   - Logos/graphics: `.png` (can be transparent)

### Good Examples
- `hero-background.jpg`
- `cappuccino-special.jpg`
- `cozy-corner-seating.jpg`
- `chef-maria-portrait.jpg`

### Bad Examples
- `IMG_2847.jpg` (not descriptive)
- `My Coffee Shop.jpg` (has spaces)
- `HERO.JPG` (all caps can cause issues)
- `thisisareallylongnamethatdescribeseverything.jpg` (too long)

---

## Organizing Your Images

### Create Subfolders (Optional but Helpful)

You can organize images into folders:

```
images/
  hero-background.jpg
  logo.png
  about/
    about-main.jpg
    about-gallery-1.jpg
    about-gallery-2.jpg
  menu/
    menu-espresso.jpg
    menu-food.jpg
  gallery/
    coffee-1.jpg
    coffee-2.jpg
    interior-1.jpg
    food-1.jpg
  items/
    latte.jpg
    cappuccino.jpg
    croissant.jpg
```

**Benefits:**
- Easier to find images later
- Keeps things tidy
- Makes updating simpler

**Important:** If you use folders, update the paths in `assets.config.ts` to match!

---

## Image Sizes - What Works Best

### General Guidelines

**For Full-Width Backgrounds:**
- Width: 1920px minimum (2400px ideal)
- Height: 1080px minimum
- Large file? That's okay for hero images
- Format: JPG

**For Gallery Photos:**
- Width: 1200px (will be resized automatically)
- Height: 800-1000px works great
- Format: JPG
- Keep file size under 500KB if possible

**For Menu Item Photos:**
- Width: 800px
- Height: 800px (square works best)
- Format: JPG
- Keep consistent sizes across all items

**For Logos:**
- Width: 300-400px
- Height: Auto (keep proportions)
- Format: PNG with transparent background
- Keep file size under 100KB

### Don't Have Exactly These Sizes?

No problem! The website automatically resizes images. These are just recommendations for best quality and fast loading.

---

## Where to Get Your Images

The best images for your website are **your own photos** of your actual business. Here's how to get them:

### Option 1: Take Your Own Photos (Recommended!)

**Why your own photos are best:**
- Shows your actual products and space
- Builds trust with customers
- Unique to your business
- Free!

**Tips for Taking Great Photos:**
- Use natural light when possible (near windows, outdoors)
- Clean and style your space before shooting
- Get close-ups of products
- Capture your team and personality
- Take LOTS of photos - you can choose the best later

**What to photograph:**
- Your storefront (helps customers find you!)
- Interior from multiple angles
- Your products/menu items
- Team members working
- Happy customers (with permission!)
- Details that make your business special

### Option 2: Hire a Local Photographer

**Budget options:**
- Photography students (check local colleges)
- Emerging photographers building portfolios
- One-time photoshoot: $200-500 typically covers everything you need

**What to ask for:**
- 50-100 edited photos
- High resolution (at least 1920px wide for hero images)
- Commercial use rights
- Raw files if possible

### Option 3: Use Your Phone!

Modern smartphones take amazing photos. Here's how:

1. **Clean your camera lens** (seriously, this helps!)
2. **Use portrait mode** for products and people
3. **Tap to focus** before taking the shot
4. **Hold steady** or use a surface to rest on
5. **Take multiple shots** of the same thing
6. **Edit lightly** - adjust brightness and contrast in your phone's photo app

### Temporary Placeholder Solution

While gathering your own photos, you can use the included `placeholder.jpg` image. The template will automatically show this for any missing images, so your site still looks complete while you work on getting your real photos.

**Important:** Replace placeholders with your real photos as soon as possible - authentic images make a huge difference in how customers connect with your business!

---

## Connecting Images to Your Website

Once images are in your folder, tell the website where to find them.

### Step-by-Step

1. Open `src/config/assets.config.ts`
2. Find the section for the image you added
3. Update the filename to match yours

**Example:**

Let's say you added a photo called `my-hero-photo.jpg`

Find this line (around line 87):
```typescript
backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
```

Change it to:
```typescript
backgroundImage: `${IMAGES_PATH}/my-hero-photo.jpg`,
```

**Important:**
- Keep the backticks (` `)
- Keep `${IMAGES_PATH}/` at the start
- Match the exact filename (including .jpg or .png)
- Spelling and capitalization must be perfect!

---

## Menu Item Images (Optional)

Want photos for each menu item? Here's how:

### 1. Take or Find Photos
- Take a photo of each menu item
- Make them similar style (same background, lighting)
- Square format works best

### 2. Name Them to Match Your Menu
If you have a menu item with `id: 'caramel-latte'`, name the photo:
```
caramel-latte.jpg
```

The `id` in your menu (from content.config.ts) must match the photo name!

### 3. Put Them in a Subfolder
```
images/items/caramel-latte.jpg
```

### 4. Add to Config
In `assets.config.ts`, find `itemImages` (around line 112):

```typescript
itemImages: {
  'caramel-latte': `${IMAGES_PATH}/items/caramel-latte.jpg`,
  'vanilla-latte': `${IMAGES_PATH}/items/vanilla-latte.jpg`,
  'chocolate-muffin': `${IMAGES_PATH}/items/chocolate-muffin.jpg`,
},
```

Add one line for each menu item photo.

---

## Gallery Images

Your gallery shows off your space and vibe. Here's the plan:

### What Photos to Include (12-20 photos ideal)

**Coffee Photos (3-5 photos):**
- Close-up of a perfect pour
- Latte art
- Coffee beans
- Your signature drink

**Interior Photos (3-5 photos):**
- Wide shot of the space
- Cozy seating area
- The counter/bar
- Interesting details (art, plants, lighting)

**Food Photos (2-4 photos):**
- Your best pastries
- Food preparation
- Display case
- Signature dish

**People/Events Photos (2-4 photos):**
- Baristas at work (get permission!)
- Happy customers (get permission!)
- Events or workshops
- Community gathering

### Adding Gallery Photos

1. Put photos in `images/gallery/` folder
2. Name them descriptively:
   - `coffee-latte-art.jpg`
   - `interior-window-seats.jpg`
   - `food-croissants.jpg`

3. Open `assets.config.ts`
4. Find the `gallery` section (around line 122)
5. Add your photos like this:

```typescript
{
  id: 'gallery-coffee-1',                           // Unique ID
  src: `${IMAGES_PATH}/gallery/coffee-latte-art.jpg`,  // File location
  alt: 'Beautiful latte art heart design',          // Description
  category: 'Coffee',                               // Coffee, Interior, Food, Events
  thumbnail: `${IMAGES_PATH}/gallery/thumbs/coffee-latte-art.jpg`,  // Optional
},
```

**Categories to use:**
- `'Coffee'` - Coffee and drinks
- `'Interior'` - Your space
- `'Food'` - Food items
- `'Events'` - Special events

Visitors can filter by these categories!

---

## What Happens If an Image Is Missing?

**Don't worry!** The website has smart fallbacks:

1. **Missing hero image?** Shows a default gradient background
2. **Missing menu image?** Shows text only (still looks great!)
3. **Missing gallery image?** Simply skips it
4. **Missing logo?** Shows your business name as text

The website won't break if images are missing. Add them when you're ready!

---

## Image Optimization - Making Your Site Fast

### Why It Matters
Large image files make your website slow. Slow websites lose customers!

### Before Uploading
Use a free tool to compress images:

**Free Online Tools:**
- **TinyPNG** (tinypng.com) - Best for JPG and PNG
- **Squoosh** (squoosh.app) - Google's free tool
- **Compressor.io** (compressor.io) - Very easy to use

**How to Use:**
1. Go to the website
2. Upload your image
3. Download the compressed version
4. Use the compressed version on your site

**Goal:** Get images under these sizes:
- Hero images: Under 500KB
- Gallery images: Under 300KB each
- Menu items: Under 150KB each
- Logos: Under 50KB

### Still Looks Good?
Yes! These tools reduce file size without reducing quality noticeably.

---

## Image Tips from Successful Cafe Owners

### Photography Tips

**Lighting Is Everything:**
- Natural light is your friend
- Avoid harsh overhead lighting
- Morning light is often best
- Turn on all your pretty lights for interior shots

**Composition:**
- Rule of thirds: Place interesting elements off-center
- Get close for food and drinks
- Step back for room/space shots
- Keep backgrounds clean and uncluttered

**Consistency:**
- Use similar lighting for all menu items
- Keep the same style throughout
- All food photos should match
- All interior shots should match

**Real > Perfect:**
- Show real moments, not staged perfection
- Include happy staff (with permission)
- Capture your actual vibe
- Let your personality shine!

### What NOT to Do

- Don't use blurry photos
- Don't use someone else's logo or photos without permission
- Don't use images with other business names visible
- Don't use photos that don't represent your actual business
- Don't use different styles that clash

---

## Common Image Problems & Solutions

### "My logo looks blurry"
**Solution:** Your logo file is too small. Get a higher resolution version from your designer or recreate it larger.

### "My hero image is cropped weird on mobile"
**Solution:** Make sure the important part (like your shop name) is in the center of the image. Edges get cropped on small screens.

### "Images take forever to load"
**Solution:** Compress them using TinyPNG or Squoosh (see Image Optimization above).

### "My image has the right name but won't show"
**Solution:**
- Check spelling matches exactly (case-sensitive!)
- Make sure file is actually in the right folder
- Check the file extension (.jpg vs .jpeg)
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)

### "Colors look different on the website"
**Solution:** Save images as RGB color mode, not CMYK. Most photo editors have this in export settings.

---

## Image Checklist

Before launching, make sure you have:

**Essential:**
- [ ] Hero background image
- [ ] Logo (transparent PNG if possible)
- [ ] About section main image
- [ ] Storefront photo

**Highly Recommended:**
- [ ] 8-12 gallery images
- [ ] Photos for featured menu items
- [ ] Interior shots
- [ ] A few food photos

**Optional but Nice:**
- [ ] Photos for every menu item
- [ ] Event photos
- [ ] Staff/team photos
- [ ] Detail shots of your space

---

## Quick Reference

### File Paths
```
public/assets/coffee/images/          Main image folder
public/assets/coffee/images/gallery/  Gallery photos
public/assets/coffee/images/items/    Menu item photos
```

### Config File
```
src/config/assets.config.ts           Where you link images
```

### Recommended Sizes
```
Hero Background:   1920 x 1080px (JPG, under 500KB)
Gallery Photos:    1200 x 800px  (JPG, under 300KB each)
Menu Items:        800 x 800px   (JPG, under 150KB each)
Logo:              400px wide    (PNG transparent, under 50KB)
```

### Good File Names
```
hero-background.jpg
latte-signature.jpg
interior-cozy-corner.jpg
team-photo-2024.jpg
```

---

## You're Ready to Add Beautiful Images!

Remember:
- Start with the essential images first
- Add more photos over time
- Compress images before uploading
- Name files clearly
- Have fun showing off your beautiful business!

**Next Steps:**
1. Gather your best photos
2. Compress them using TinyPNG
3. Rename them descriptively
4. Put them in the images folder
5. Update assets.config.ts
6. Preview your site and smile!

Your website will look amazing. Let your personality and passion shine through every image!
