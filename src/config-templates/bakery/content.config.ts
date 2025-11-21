/**
 * BAKERY/PATISSERIE CONTENT CONFIGURATION
 *
 * This file contains all text content for a local bakery.
 * Customize these values to match your bakery's offerings and story.
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
  story: string[];
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
  tags?: string[];
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
// BAKERY CONTENT
// ========================================

export const bakeryContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Sweet Sunrise Bakery',
    siteDescription: 'Artisan bakery crafting fresh breads, pastries, and custom cakes daily using traditional methods and local ingredients.',
    siteUrl: 'https://sweetsunrise.example',
    keywords: [
      'bakery',
      'artisan bread',
      'fresh pastries',
      'custom cakes',
      'local bakery',
      'french pastries',
      'sourdough',
      'wedding cakes',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Sweet Sunrise Bakery',
    subtitle: 'Freshly Baked Every Morning',
    tagline: 'Traditional recipes, local ingredients, made with love since 2010',
    ctaButtons: {
      primary: {
        text: 'View Menu',
        link: '#menu',
      },
      secondary: {
        text: 'Order Online',
        link: '#order',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Story',
    heading: 'Baking Happiness, One Loaf at a Time',
    story: [
      'Sweet Sunrise Bakery began in our family kitchen, where grandmother\'s recipes and the aroma of fresh bread brought everyone together. Today, we carry on that tradition, starting our ovens at 4 AM every morning to ensure you get the freshest baked goods possible.',
      'Our master baker, James Chen, trained in Paris and brings over 15 years of experience to every loaf, croissant, and cake we create. We use only the finest ingredients—organic flour from local mills, real butter, free-range eggs, and seasonal fruits from nearby farms.',
      'Whether it\'s your daily sourdough, a birthday cake that makes memories, or pastries for a special occasion, we pour our heart into every creation. Visit us and become part of our family.',
    ],
    highlights: [
      {
        title: 'Fresh Daily',
        description: 'Baked from scratch every morning starting at 4 AM',
      },
      {
        title: 'Local Ingredients',
        description: 'Supporting local farms and suppliers whenever possible',
      },
      {
        title: 'Traditional Methods',
        description: 'Time-honored techniques for authentic flavors',
      },
      {
        title: 'Custom Orders',
        description: 'Personalized cakes and treats for your special events',
      },
    ],
  },

  // MENU SECTION
  menu: {
    sectionTitle: 'Our Menu',
    categories: [
      {
        id: 'bread',
        name: 'Artisan Breads',
        description: 'Hand-shaped, naturally leavened daily breads',
      },
      {
        id: 'pastries',
        name: 'Pastries & Viennoiserie',
        description: 'French-style pastries made with real butter',
      },
      {
        id: 'cakes',
        name: 'Cakes & Desserts',
        description: 'Custom cakes and sweet treats',
      },
      {
        id: 'breakfast',
        name: 'Breakfast Items',
        description: 'Perfect morning companions',
      },
      {
        id: 'seasonal',
        name: 'Seasonal Specials',
        description: 'Limited-time seasonal creations',
      },
    ],
    items: [
      // Artisan Breads
      {
        id: 'sourdough',
        name: 'Classic Sourdough',
        description: 'Naturally leavened with 48-hour fermentation, crispy crust and tangy flavor',
        price: '$8.00',
        category: 'bread',
        featured: true,
        tags: ['signature', 'vegan'],
      },
      {
        id: 'baguette',
        name: 'French Baguette',
        description: 'Traditional crusty baguette, perfect for sandwiches or with butter',
        price: '$4.50',
        category: 'bread',
        tags: ['vegan'],
      },
      {
        id: 'multigrain',
        name: 'Multigrain Loaf',
        description: 'Hearty blend of whole grains, seeds, and honey',
        price: '$7.50',
        category: 'bread',
        tags: [],
      },
      {
        id: 'focaccia',
        name: 'Rosemary Focaccia',
        description: 'Italian flatbread with olive oil, sea salt, and fresh rosemary',
        price: '$6.00',
        category: 'bread',
        tags: ['vegan'],
      },
      {
        id: 'ciabatta',
        name: 'Ciabatta',
        description: 'Open-crumb Italian bread, ideal for paninis',
        price: '$5.50',
        category: 'bread',
        tags: ['vegan'],
      },

      // Pastries
      {
        id: 'croissant',
        name: 'Butter Croissant',
        description: 'Flaky, buttery layers made with French technique',
        price: '$4.00',
        category: 'pastries',
        featured: true,
        tags: [],
      },
      {
        id: 'pain-choc',
        name: 'Pain au Chocolat',
        description: 'Croissant dough with dark chocolate batons',
        price: '$4.50',
        category: 'pastries',
        tags: [],
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description: 'Croissant filled with almond cream, topped with sliced almonds',
        price: '$5.00',
        category: 'pastries',
        tags: [],
      },
      {
        id: 'danish',
        name: 'Fruit Danish',
        description: 'Danish pastry with seasonal fruit and cream cheese',
        price: '$4.25',
        category: 'pastries',
        tags: [],
      },
      {
        id: 'canele',
        name: 'Canelé de Bordeaux',
        description: 'French custard pastry with caramelized crust',
        price: '$3.50',
        category: 'pastries',
        tags: ['gluten-free'],
      },

      // Cakes & Desserts
      {
        id: 'custom-cake',
        name: 'Custom Celebration Cake',
        description: 'Personalized cake for your special occasion (2-3 day advance order)',
        price: 'Starting at $45',
        category: 'cakes',
        featured: true,
        tags: ['custom-order'],
      },
      {
        id: 'cheesecake',
        name: 'New York Cheesecake',
        description: 'Classic creamy cheesecake with graham cracker crust',
        price: '$6.50',
        category: 'cakes',
        tags: [],
      },
      {
        id: 'chocolate-cake',
        name: 'Triple Chocolate Cake Slice',
        description: 'Rich chocolate layers with chocolate ganache',
        price: '$7.00',
        category: 'cakes',
        tags: [],
      },
      {
        id: 'fruit-tart',
        name: 'Seasonal Fruit Tart',
        description: 'Buttery tart shell with pastry cream and fresh fruit',
        price: '$5.50',
        category: 'cakes',
        tags: [],
      },
      {
        id: 'eclair',
        name: 'Chocolate Éclair',
        description: 'Choux pastry filled with vanilla cream, chocolate glaze',
        price: '$4.75',
        category: 'cakes',
        tags: [],
      },

      // Breakfast Items
      {
        id: 'muffin',
        name: 'Blueberry Muffin',
        description: 'Made with fresh blueberries and lemon zest',
        price: '$3.50',
        category: 'breakfast',
        tags: [],
      },
      {
        id: 'scone',
        name: 'Buttermilk Scone',
        description: 'Tender scone with clotted cream and jam',
        price: '$4.00',
        category: 'breakfast',
        tags: [],
      },
      {
        id: 'cinnamon-roll',
        name: 'Cinnamon Roll',
        description: 'Soft roll with cinnamon sugar and cream cheese frosting',
        price: '$5.00',
        category: 'breakfast',
        featured: true,
        tags: [],
      },
      {
        id: 'bagel',
        name: 'Everything Bagel',
        description: 'Hand-rolled, boiled, and baked fresh daily',
        price: '$2.50',
        category: 'breakfast',
        tags: ['vegan'],
      },

      // Seasonal Specials
      {
        id: 'pumpkin-bread',
        name: 'Spiced Pumpkin Bread',
        description: 'Autumn spices, pumpkin purée, cream cheese swirl (Fall only)',
        price: '$6.50',
        category: 'seasonal',
        tags: ['seasonal'],
      },
      {
        id: 'hot-cross',
        name: 'Hot Cross Buns',
        description: 'Traditional Easter buns with spices and dried fruit (Spring only)',
        price: '$3.50',
        category: 'seasonal',
        tags: ['seasonal'],
      },
      {
        id: 'stollen',
        name: 'Christmas Stollen',
        description: 'German fruit bread with marzipan (Holiday season only)',
        price: '$18.00',
        category: 'seasonal',
        tags: ['seasonal'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Gallery',
    subtitle: 'A peek inside our bakery',
    categories: ['All', 'Breads', 'Pastries', 'Cakes', 'Behind the Scenes'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '789 Main Street',
      city: 'Boulder',
      state: 'CO',
      zip: '80302',
      country: 'USA',
    },
    hours: {
      monday: 'Closed',
      tuesday: '7:00 AM - 5:00 PM',
      wednesday: '7:00 AM - 5:00 PM',
      thursday: '7:00 AM - 5:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '7:00 AM - 6:00 PM',
      sunday: '8:00 AM - 3:00 PM',
    },
    contact: {
      phone: '(555) 234-5678',
      email: 'hello@sweetsunrise.example',
      social: {
        instagram: 'https://instagram.com/sweetsunrisebakery',
        facebook: 'https://facebook.com/sweetsunrisebakery',
      },
    },
    mapUrl: 'https://maps.google.com/?q=789+Main+Street+Boulder+CO',
  },

  // FOOTER
  footer: {
    businessName: 'Sweet Sunrise Bakery',
    tagline: 'Baking fresh daily since 2010',
    copyright: '© 2024 Sweet Sunrise Bakery. All rights reserved.',
    links: [
      { label: 'Menu', url: '#menu' },
      { label: 'Custom Orders', url: '#custom' },
      { label: 'Catering', url: '#catering' },
      { label: 'Wholesale', url: '#wholesale' },
      { label: 'Careers', url: '#careers' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

export default bakeryContent;
