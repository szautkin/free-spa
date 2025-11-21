/**
 * LOCAL STORE ENGLISH CONTENT CONFIGURATION
 * All text content in English for the mom & pop store
 */

import type { ContentConfig } from './content.config';

export const localStoreContentEN: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Miller\'s Corner Market',
    siteDescription: 'Your neighborhood market since 1972. Family-owned shop offering carefully curated local products, daily essentials, and genuine community connection.',
    siteUrl: 'https://millerscornermarket.com',
    keywords: [
      'local store',
      'neighborhood market',
      'mom and pop shop',
      'local products',
      'family owned',
      'community market',
      'local artisan',
      'fresh produce',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Miller\'s Corner Market',
    subtitle: 'Your Neighborhood, Your Store',
    tagline: 'Three generations of serving our community with care, quality, and that personal touch you won\'t find anywhere else',
    ctaButtons: {
      primary: {
        text: 'Shop Local',
        link: '#menu',
      },
      secondary: {
        text: 'Visit Us',
        link: '#location',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Story',
    heading: 'Serving Our Neighbors Since 1972',
    story: [
      'When George and Martha Miller opened our doors in 1972, they had a simple vision: create a place where neighbors become friends, and shopping feels like coming home. Today, their grandchildren run the store with that same warmth and dedication, knowing most customers by name and remembering their favorite products.',
      'We\'re not just a store—we\'re a vital part of our neighborhood\'s fabric. You\'ll find carefully selected local artisan goods alongside everyday essentials, seasonal produce from nearby farms, and those hard-to-find specialty items we\'ll happily order just for you. Every product is chosen with care, every vendor is someone we know and trust.',
      'In an age of impersonal big-box stores and online shopping, we offer something increasingly rare: genuine connection. Whether you\'re picking up milk, discovering a new local jam, or just stopping by to chat about the neighborhood, you\'re always welcome here. This is more than a market—it\'s where community happens.',
    ],
    highlights: [
      {
        title: 'Family Owned',
        description: 'Three generations serving our community with care',
      },
      {
        title: 'Local First',
        description: 'Curated selection from regional farmers and artisans',
      },
      {
        title: 'Personal Service',
        description: 'We know your name and remember your favorites',
      },
      {
        title: 'Community Hub',
        description: 'More than a store—a neighborhood gathering place',
      },
    ],
  },

  // MENU SECTION (Products & Services)
  menu: {
    sectionTitle: 'What We Offer',
    subtitle: 'Quality Products & Services for Our Community',
    featuredTitle: 'Customer Favorites',
    categories: [
      {
        id: 'essentials',
        name: 'Daily Essentials',
        description: 'Groceries and household items for everyday needs',
      },
      {
        id: 'local-artisan',
        name: 'Local Artisan Products',
        description: 'Handcrafted goods from regional makers',
      },
      {
        id: 'fresh',
        name: 'Fresh & Seasonal',
        description: 'Produce, dairy, and seasonal specialties',
      },
      {
        id: 'services',
        name: 'Community Services',
        description: 'Special services to make your life easier',
      },
    ],
    items: [
      // Daily Essentials
      {
        id: 'pantry-staples',
        name: 'Pantry Staples',
        description: 'Quality flour, sugar, rice, pasta, and baking essentials',
        price: 'From $2.50',
        category: 'essentials',
        tags: ['everyday'],
      },
      {
        id: 'dairy-eggs',
        name: 'Dairy & Eggs',
        description: 'Fresh milk, butter, cheese, and farm eggs from local dairies',
        price: 'From $3.50',
        category: 'essentials',
        featured: true,
        tags: ['fresh', 'local'],
      },
      {
        id: 'snacks-beverages',
        name: 'Snacks & Beverages',
        description: 'Coffee, tea, soft drinks, chips, and healthy snacks',
        price: 'From $1.99',
        category: 'essentials',
        tags: ['everyday'],
      },
      {
        id: 'household',
        name: 'Household Supplies',
        description: 'Cleaning products, paper goods, and daily necessities',
        price: 'From $3.00',
        category: 'essentials',
        tags: ['everyday'],
      },

      // Local Artisan Products
      {
        id: 'local-honey',
        name: 'Wildflower Honey',
        description: 'Raw honey from Jenkins Apiary, harvested within 10 miles',
        price: '$12.00',
        category: 'local-artisan',
        featured: true,
        tags: ['local', 'natural'],
      },
      {
        id: 'artisan-jams',
        name: 'Small Batch Preserves',
        description: 'Handcrafted jams and preserves from Riverside Farm Kitchen',
        price: '$8.50',
        category: 'local-artisan',
        featured: true,
        tags: ['local', 'handmade'],
      },
      {
        id: 'baked-goods',
        name: 'Fresh Baked Goods',
        description: 'Daily delivery from Sophie\'s Bakery—breads, muffins, cookies',
        price: 'From $4.00',
        category: 'local-artisan',
        tags: ['fresh', 'local'],
      },
      {
        id: 'craft-items',
        name: 'Local Crafts & Gifts',
        description: 'Handmade soaps, candles, and unique gifts from area artisans',
        price: 'From $6.00',
        category: 'local-artisan',
        tags: ['handmade', 'gifts'],
      },

      // Fresh & Seasonal
      {
        id: 'seasonal-produce',
        name: 'Seasonal Produce',
        description: 'Fresh fruits and vegetables from nearby farms, changes weekly',
        price: 'Market Price',
        category: 'fresh',
        featured: true,
        tags: ['fresh', 'local', 'seasonal'],
      },
      {
        id: 'fresh-herbs',
        name: 'Fresh Herbs',
        description: 'Locally grown basil, cilantro, parsley, and seasonal herbs',
        price: '$3.50',
        category: 'fresh',
        tags: ['fresh', 'local'],
      },
      {
        id: 'specialty-cheese',
        name: 'Artisan Cheeses',
        description: 'Rotating selection of regional farmstead cheeses',
        price: 'From $9.00',
        category: 'fresh',
        tags: ['local', 'specialty'],
      },
      {
        id: 'prepared-foods',
        name: 'Prepared Meals',
        description: 'Ready-to-heat soups, salads, and meals from local kitchens',
        price: 'From $8.00',
        category: 'fresh',
        tags: ['fresh', 'local'],
      },

      // Services
      {
        id: 'local-delivery',
        name: 'Neighborhood Delivery',
        description: 'Free delivery within 2 miles for orders over $25',
        price: 'Free',
        category: 'services',
        featured: true,
        tags: ['service'],
      },
      {
        id: 'special-orders',
        name: 'Special Orders',
        description: 'Can\'t find it? We\'ll order that hard-to-find item for you',
        price: 'Varies',
        category: 'services',
        tags: ['service'],
      },
      {
        id: 'gift-baskets',
        name: 'Custom Gift Baskets',
        description: 'Personalized baskets featuring local products—perfect for any occasion',
        price: 'From $35',
        category: 'services',
        tags: ['service', 'gifts'],
      },
      {
        id: 'community-board',
        name: 'Community Board',
        description: 'Free posting for local events, services, and neighborhood news',
        price: 'Free',
        category: 'services',
        tags: ['service'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Market',
    subtitle: 'A glimpse inside your neighborhood store',
    categories: ['All', 'Store', 'Products', 'Local Artisans', 'Community'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    heading: 'Find Us on the Corner',
    subtitle: 'Right in the heart of your neighborhood, where we\'ve been for over 50 years',
    address: {
      street: '412 Maple Street',
      city: 'Springfield',
      state: 'MA',
      zip: '01103',
      country: 'USA',
    },
    hours: {
      monday: '7:00 AM - 8:00 PM',
      tuesday: '7:00 AM - 8:00 PM',
      wednesday: '7:00 AM - 8:00 PM',
      thursday: '7:00 AM - 8:00 PM',
      friday: '7:00 AM - 9:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '8:00 AM - 7:00 PM',
    },
    contact: {
      phone: '(413) 555-2847',
      email: 'hello@millerscornermarket.com',
      social: {
        instagram: 'https://instagram.com/millerscorner',
        facebook: 'https://facebook.com/millerscornermarket',
      },
    },
    mapUrl: 'https://maps.google.com/?q=412+Maple+Street+Springfield+MA',
    labels: {
      address: 'Address',
      hours: 'Hours',
      contact: 'Contact',
      phone: 'Phone',
      email: 'Email',
      followUs: 'Follow Us',
      getDirections: 'Get Directions →',
      daysOfWeek: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
    },
  },

  // FOOTER
  footer: {
    businessName: 'Miller\'s Corner Market',
    tagline: 'Your neighbors since 1972',
    copyright: '© 2024 Miller\'s Corner Market. All rights reserved.',
    links: [
      { label: 'Shop', url: '#menu' },
      { label: 'About', url: '#about' },
      { label: 'Location', url: '#location' },
      { label: 'Local Producers', url: '#producers' },
      { label: 'Community Events', url: '#events' },
      { label: 'Contact', url: '#contact' },
    ],
    labels: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
    },
  },
};
