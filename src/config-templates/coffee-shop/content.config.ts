/**
 * COFFEE SHOP CONTENT CONFIGURATION
 *
 * This file contains all text content, labels, and copy for the coffee shop application.
 * Modify these values to customize all text throughout the site.
 *
 * Supports simple string replacement for easy customization
 */

export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  ctaButtons: {
    primary: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
}

export interface AboutContent {
  sectionTitle: string;
  heading: string;
  story: string[];  // Array of paragraphs
  highlights: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
  tags?: string[];  // e.g., 'hot', 'iced', 'vegan', 'gluten-free'
}

export interface MenuContent {
  sectionTitle: string;
  categories: {
    id: string;
    name: string;
    description: string;
  }[];
  items: MenuItem[];
}

export interface GalleryContent {
  sectionTitle: string;
  subtitle: string;
  categories: string[];
}

export interface LocationContent {
  sectionTitle: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    phone: string;
    email: string;
    social: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
  };
  mapUrl?: string;
}

export interface FooterContent {
  businessName: string;
  tagline: string;
  copyright: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface SiteMetadata {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  keywords: string[];
}

export interface ContentConfig {
  metadata: SiteMetadata;
  hero: HeroContent;
  about: AboutContent;
  menu: MenuContent;
  gallery: GalleryContent;
  location: LocationContent;
  footer: FooterContent;
}

// ========================================
// COFFEE SHOP CONTENT
// ========================================

export const coffeeContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Aroma Haven Coffee',
    siteDescription: 'Premium artisan coffee shop serving handcrafted beverages and freshly baked pastries in the heart of the city.',
    siteUrl: 'https://aromahaven.coffee',
    keywords: [
      'coffee shop',
      'artisan coffee',
      'specialty coffee',
      'cafe',
      'espresso',
      'coffee roasters',
      'local coffee',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Aroma Haven Coffee',
    subtitle: 'Where Every Cup Tells a Story',
    tagline: 'Handcrafted coffee experiences, roasted with passion, served with love',
    ctaButtons: {
      primary: {
        text: 'Explore Menu',
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
    heading: 'Brewing Excellence Since 2018',
    story: [
      'At Aroma Haven, we believe that great coffee starts with great beans. We source our beans directly from sustainable farms across the globe, building relationships with farmers who share our commitment to quality and environmental stewardship.',
      'Our master roasters bring decades of experience, carefully crafting each roast profile to highlight the unique characteristics of every origin. From the bright, fruity notes of Ethiopian Yirgacheffe to the rich, chocolatey depth of Colombian Supremo, every cup is a journey.',
      'But coffee is more than just a beverage to us—it\'s a catalyst for connection. Our welcoming space is designed to bring people together, whether you\'re catching up with old friends, diving into a good book, or finding your creative flow.',
    ],
    highlights: [
      {
        title: 'Ethically Sourced',
        description: 'Direct trade relationships with farmers for the finest beans',
      },
      {
        title: 'Small Batch Roasted',
        description: 'Roasted fresh in-house to perfection every week',
      },
      {
        title: 'Expert Baristas',
        description: 'Trained craftspeople passionate about the perfect cup',
      },
      {
        title: 'Community Focused',
        description: 'A warm, welcoming space for everyone to gather',
      },
    ],
  },

  // MENU SECTION
  menu: {
    sectionTitle: 'Our Menu',
    categories: [
      {
        id: 'espresso',
        name: 'Espresso Drinks',
        description: 'Classic espresso-based beverages',
      },
      {
        id: 'brewed',
        name: 'Brewed Coffee',
        description: 'Pour over, drip, and specialty brews',
      },
      {
        id: 'specialty',
        name: 'Specialty Drinks',
        description: 'Unique creations and seasonal favorites',
      },
      {
        id: 'cold',
        name: 'Cold Beverages',
        description: 'Iced and cold brew options',
      },
      {
        id: 'food',
        name: 'Food',
        description: 'Fresh pastries and light bites',
      },
    ],
    items: [
      // Espresso Drinks
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Rich, bold shot of our signature blend',
        price: '$3.50',
        category: 'espresso',
        featured: true,
        tags: ['hot'],
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso diluted with hot water',
        price: '$4.00',
        category: 'espresso',
        tags: ['hot'],
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: '$4.75',
        category: 'espresso',
        tags: ['hot'],
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Espresso with velvety steamed milk',
        price: '$5.00',
        category: 'espresso',
        featured: true,
        tags: ['hot'],
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso with chocolate and steamed milk',
        price: '$5.50',
        category: 'espresso',
        tags: ['hot'],
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: 'Equal parts espresso and steamed milk',
        price: '$4.50',
        category: 'espresso',
        tags: ['hot'],
      },

      // Brewed Coffee
      {
        id: 'drip',
        name: 'Drip Coffee',
        description: 'Classic filtered coffee, changes daily',
        price: '$3.00',
        category: 'brewed',
        tags: ['hot'],
      },
      {
        id: 'pour-over',
        name: 'Pour Over',
        description: 'Single-origin coffee brewed to order',
        price: '$5.50',
        category: 'brewed',
        featured: true,
        tags: ['hot'],
      },
      {
        id: 'french-press',
        name: 'French Press',
        description: 'Full-bodied immersion brew (serves 2)',
        price: '$7.00',
        category: 'brewed',
        tags: ['hot'],
      },

      // Specialty Drinks
      {
        id: 'vanilla-latte',
        name: 'Vanilla Latte',
        description: 'Latte with house-made vanilla syrup',
        price: '$5.50',
        category: 'specialty',
        tags: ['hot'],
      },
      {
        id: 'caramel-macchiato',
        name: 'Caramel Macchiato',
        description: 'Vanilla latte with caramel drizzle',
        price: '$5.75',
        category: 'specialty',
        tags: ['hot'],
      },
      {
        id: 'honey-lavender',
        name: 'Honey Lavender Latte',
        description: 'Latte with honey and lavender',
        price: '$6.00',
        category: 'specialty',
        featured: true,
        tags: ['hot'],
      },

      // Cold Beverages
      {
        id: 'cold-brew',
        name: 'Cold Brew',
        description: 'Smooth, naturally sweet cold brew',
        price: '$4.50',
        category: 'cold',
        featured: true,
        tags: ['iced'],
      },
      {
        id: 'iced-latte',
        name: 'Iced Latte',
        description: 'Espresso over ice with cold milk',
        price: '$5.25',
        category: 'cold',
        tags: ['iced'],
      },
      {
        id: 'nitro-cold-brew',
        name: 'Nitro Cold Brew',
        description: 'Cold brew infused with nitrogen',
        price: '$5.50',
        category: 'cold',
        tags: ['iced'],
      },
      {
        id: 'iced-mocha',
        name: 'Iced Mocha',
        description: 'Iced espresso with chocolate',
        price: '$5.75',
        category: 'cold',
        tags: ['iced'],
      },

      // Food
      {
        id: 'croissant',
        name: 'Butter Croissant',
        description: 'Flaky, buttery French pastry',
        price: '$4.00',
        category: 'food',
        tags: [],
      },
      {
        id: 'chocolate-croissant',
        name: 'Chocolate Croissant',
        description: 'Croissant filled with dark chocolate',
        price: '$4.50',
        category: 'food',
        tags: [],
      },
      {
        id: 'muffin',
        name: 'Blueberry Muffin',
        description: 'Fresh baked with local blueberries',
        price: '$3.50',
        category: 'food',
        tags: [],
      },
      {
        id: 'avocado-toast',
        name: 'Avocado Toast',
        description: 'Smashed avocado on sourdough',
        price: '$8.00',
        category: 'food',
        featured: true,
        tags: ['vegan'],
      },
      {
        id: 'bagel',
        name: 'Bagel with Cream Cheese',
        description: 'Fresh bagel with cream cheese',
        price: '$5.00',
        category: 'food',
        tags: [],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Space',
    subtitle: 'A glimpse into the Aroma Haven experience',
    categories: ['All', 'Coffee', 'Interior', 'Food', 'Events'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '123 Brew Street',
      city: 'Portland',
      state: 'OR',
      zip: '97204',
      country: 'USA',
    },
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 8:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '8:00 AM - 6:00 PM',
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'hello@aromahaven.coffee',
      social: {
        instagram: 'https://instagram.com/aromahaven',
        facebook: 'https://facebook.com/aromahaven',
        twitter: 'https://twitter.com/aromahaven',
      },
    },
    mapUrl: 'https://maps.google.com/?q=123+Brew+Street+Portland+OR',
  },

  // FOOTER
  footer: {
    businessName: 'Aroma Haven Coffee',
    tagline: 'Crafted with love since 2018',
    copyright: '© 2024 Aroma Haven Coffee. All rights reserved.',
    links: [
      { label: 'Menu', url: '#menu' },
      { label: 'About', url: '#about' },
      { label: 'Location', url: '#location' },
      { label: 'Catering', url: '#catering' },
      { label: 'Careers', url: '#careers' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

export default coffeeContent;
