# Getting Started with Your New Website

Welcome! You're about to launch your own beautiful website. This guide will walk you through everything step by step. No technical experience needed.

## What You're Getting

A complete, professional website that includes:
- A stunning homepage with your photos
- Your menu with prices
- An about section telling your story
- A photo gallery
- Your location and hours
- Contact information

## Before You Start

### What You'll Need
- Your business logo and photos (see ASSET-GUIDE.md)
- Your menu items and prices
- Your business hours and contact info
- About 2-3 hours of focused time

### Important Files to Know
You'll be editing these three files in the `src/config` folder:
- **theme.config.ts** - Your colors and fonts
- **content.config.ts** - All your text and menu items
- **assets.config.ts** - Links to your images

Don't worry if these names look scary. We'll show you exactly what to change.

---

## 5-Minute Quick Start

Follow these steps in order. Take your time!

### Step 1: Get Your Files Ready (10 minutes)

1. Open the project folder on your computer
2. Find the `public/assets/coffee/images` folder
3. Drag and drop your photos into this folder
4. Make sure your main hero photo is named `hero-background.jpg`

**Quick Check:** Can you see your photos in the folder? Great! Move to Step 2.

---

### Step 2: Add Your Business Name (5 minutes)

1. Open the `src/config` folder
2. Double-click on `content.config.ts` to open it
3. Scroll down to line 127 where it says:
   ```
   siteName: 'Aroma Haven Coffee',
   ```
4. Change `'Aroma Haven Coffee'` to your business name (keep the quotes!)
5. Save the file (File > Save or press Ctrl+S / Cmd+S)

**Example:**
```typescript
siteName: 'Marie's Cozy Cafe',  // Your name here!
```

**Quick Check:** Did you save? You should see the file name change from having a dot to being normal.

---

### Step 3: Update Your Hero Section (10 minutes)

Still in `content.config.ts`, find the HERO SECTION (around line 142):

```typescript
hero: {
  title: 'Aroma Haven Coffee',           // Your business name
  subtitle: 'Where Every Cup Tells a Story',  // Your tagline
  tagline: 'Handcrafted coffee experiences...',  // Longer description
  ctaButtons: {
    primary: {
      text: 'Explore Menu',              // Button text
      link: '#menu',                     // Where it goes
    },
  },
},
```

**Replace with your information:**
- Title: Your business name
- Subtitle: A short, catchy phrase (3-7 words)
- Tagline: A longer description (10-15 words)

**Example:**
```typescript
hero: {
  title: 'Marie's Cozy Cafe',
  subtitle: 'Coffee, Pastries & Community',
  tagline: 'Fresh-baked goods and artisan coffee in downtown Portland',
```

**Quick Check:** Read what you wrote. Does it sound like you? Perfect!

---

### Step 4: Add Your Menu (20 minutes)

Scroll down to the MENU SECTION (around line 217). Here's how menu items work:

```typescript
{
  id: 'latte',                    // Unique name (no spaces)
  name: 'Latte',                  // What customers see
  description: 'Espresso with velvety steamed milk',
  price: '$5.00',                 // Your price
  category: 'espresso',           // Which category
  featured: true,                 // Show as special (optional)
  tags: ['hot'],                  // hot, iced, vegan, etc.
},
```

**To add your own menu items:**

1. Copy an existing item (from `{` to `},`)
2. Paste it below another item
3. Change the information to match your product
4. Make sure each `id` is unique (like 'mocha', 'croissant', 'avocado-toast')

**Example - Adding a new item:**
```typescript
{
  id: 'maple-latte',
  name: 'Maple Latte',
  description: 'Our signature latte with real maple syrup',
  price: '$6.00',
  category: 'specialty',
  featured: true,
  tags: ['hot', 'signature'],
},
```

**Important Tips:**
- Keep the commas at the end of each line
- Keep the quotes around text
- Each item needs a comma after the `}` unless it's the last one

**Quick Check:** Count your menu items. Do you have them all? Save the file!

---

### Step 5: Update Your Contact Info (10 minutes)

Scroll down to the LOCATION SECTION (around line 412):

```typescript
location: {
  sectionTitle: 'Visit Us',
  address: {
    street: '123 Brew Street',        // Your address
    city: 'Portland',                 // Your city
    state: 'OR',                      // Your state
    zip: '97204',                     // Your zip code
    country: 'USA',
  },
  hours: {
    monday: '7:00 AM - 6:00 PM',      // Your hours
    tuesday: '7:00 AM - 6:00 PM',
    // ... continue for each day
  },
  contact: {
    phone: '(555) 123-4567',          // Your phone
    email: 'hello@yourbusiness.com',  // Your email
    social: {
      instagram: 'https://instagram.com/yourhandle',
      facebook: 'https://facebook.com/yourpage',
    },
  },
},
```

**Replace with your real information.** If you're closed on a day, write `'Closed'`.

**Quick Check:** Call your own phone number to make sure you typed it right!

---

### Step 6: Preview Your Website (5 minutes)

Time to see your work!

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Type: `cd ` (with a space after cd)
3. Drag your project folder into the terminal window
4. Press Enter
5. Type: `npm run dev`
6. Press Enter
7. Wait 10 seconds
8. Open your web browser
9. Go to: `http://localhost:5173`

**You should see your website!**

**Quick Check:** Do you see your business name? Your menu items? Amazing!

---

### Step 7: Make It Pretty (See CUSTOMIZATION-GUIDE.md)

Now that your content is in, you can customize colors, fonts, and style. Head over to the CUSTOMIZATION-GUIDE.md for details.

---

## Common Mistakes & How to Fix Them

### "I saved but nothing changed"
**Solution:** Make sure you actually saved the file. Look for a dot or asterisk next to the filename in your editor. Press Ctrl+S (Windows) or Cmd+S (Mac) to save.

### "The website shows an error"
**Solution:** You probably have a typo. Common issues:
- Missing comma at the end of a line
- Missing quote mark (' or ")
- Deleted a bracket by accident ({ or })

**Fix:** Press Ctrl+Z (or Cmd+Z on Mac) to undo until the error goes away.

### "My images don't show"
**Solution:** Check three things:
1. Are your images in `public/assets/coffee/images`?
2. Are the filenames spelled exactly right? (case-sensitive!)
3. Did you update the names in `assets.config.ts`?

See ASSET-GUIDE.md for detailed help.

### "I can't find the file to edit"
**Solution:**
- Make sure you're in the `src/config` folder
- The files end in `.ts` (TypeScript files)
- You might need to show hidden files in your folder view

### "npm run dev doesn't work"
**Solution:**
- Make sure you're in the right folder (the one with package.json)
- Try running `npm install` first
- Restart your terminal and try again

---

## What to Do Next

1. **Add your story:** Edit the About section (line 159 in content.config.ts)
2. **Customize colors:** See CUSTOMIZATION-GUIDE.md
3. **Add more photos:** See ASSET-GUIDE.md
4. **Deploy your site:** Contact your developer or hosting service

---

## Getting Help

### Still Stuck?

**Before asking for help, try:**
1. Close the file and reopen it
2. Restart the preview (Ctrl+C in terminal, then `npm run dev` again)
3. Check you saved all files
4. Take a 5-minute break and try again with fresh eyes

### When to Ask for Help

If you've tried the above and still have issues after 15 minutes, reach out! Include:
- What you were trying to do
- What happened instead
- A screenshot if possible

---

## You've Got This!

Remember: You can't break anything permanently. If something goes wrong, you can always undo (Ctrl+Z / Cmd+Z) or revert to the original template.

Take it one step at a time. Thousands of business owners just like you have done this successfully. You're doing great!

**Next Step:** Head to CUSTOMIZATION-GUIDE.md to make your site look perfect.

---

**Quick Reference - Files You'll Edit:**
- `src/config/content.config.ts` - All text and menu items
- `src/config/theme.config.ts` - Colors and fonts
- `src/config/assets.config.ts` - Image locations
- `public/assets/coffee/images/` - Your actual photos

**Commands to Remember:**
- `npm run dev` - Preview your website locally
- Ctrl+S (Cmd+S on Mac) - Save your file
- Ctrl+Z (Cmd+Z on Mac) - Undo last change
