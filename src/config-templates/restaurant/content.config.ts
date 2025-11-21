/**
 * FINE DINING RESTAURANT CONTENT CONFIGURATION
 *
 * This file contains all text content for a fine dining restaurant.
 * Customize these values to match your restaurant's menu and story.
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
// RESTAURANT CONTENT
// ========================================

export const restaurantContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'La Petite Maison',
    siteDescription: 'An intimate fine dining experience featuring French-inspired cuisine crafted from locally-sourced seasonal ingredients.',
    siteUrl: 'https://lapetitemaison.example',
    keywords: [
      'fine dining',
      'french restaurant',
      'gourmet cuisine',
      'upscale dining',
      'wine pairing',
      'chef\'s table',
      'seasonal menu',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'La Petite Maison',
    subtitle: 'An Intimate Culinary Journey',
    tagline: 'Exquisite French cuisine in the heart of the city',
    ctaButtons: {
      primary: {
        text: 'View Menu',
        link: '#menu',
      },
      secondary: {
        text: 'Reserve Table',
        link: '#reservation',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Philosophy',
    heading: 'Celebrating the Art of Fine Dining',
    story: [
      'La Petite Maison is more than a restaurant—it\'s an expression of passion, precision, and French culinary tradition. Chef Marie Laurent brings over 20 years of Michelin-starred experience to create dishes that honor classic techniques while embracing modern innovation.',
      'Every ingredient is thoughtfully sourced from local farms and purveyors who share our commitment to excellence. We believe that exceptional cuisine begins with exceptional ingredients, handled with care and respect at every stage.',
      'Our intimate dining room accommodates just 28 guests, ensuring that each evening is a personalized culinary journey. From the first amuse-bouche to the final mignardise, every detail is orchestrated to create moments of pure delight.',
    ],
    highlights: [
      {
        title: 'Chef-Driven',
        description: 'Michelin-trained chef creating innovative French cuisine',
      },
      {
        title: 'Seasonal Menus',
        description: 'Rotating selection showcasing the finest ingredients',
      },
      {
        title: 'Wine Program',
        description: 'Curated list of over 400 wines from around the world',
      },
      {
        title: 'Intimate Setting',
        description: 'Just 28 seats for an exclusive dining experience',
      },
    ],
  },

  // MENU SECTION
  menu: {
    sectionTitle: 'Our Menu',
    categories: [
      {
        id: 'appetizers',
        name: 'Appetizers',
        description: 'Elegant starters to begin your journey',
      },
      {
        id: 'entrees',
        name: 'Entrées',
        description: 'Main courses showcasing seasonal excellence',
      },
      {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet conclusions crafted with artistry',
      },
      {
        id: 'wine',
        name: 'Wine Selection',
        description: 'Curated wines to complement your meal',
      },
      {
        id: 'tasting',
        name: 'Tasting Menu',
        description: 'Chef\'s multi-course experience',
      },
    ],
    items: [
      // Appetizers
      {
        id: 'foie-gras',
        name: 'Seared Foie Gras',
        description: 'Hudson Valley foie gras, fig compote, brioche, aged balsamic',
        price: '$28',
        category: 'appetizers',
        featured: true,
        tags: ['signature'],
      },
      {
        id: 'scallops',
        name: 'Diver Scallops',
        description: 'Pan-seared scallops, cauliflower purée, brown butter, caviar',
        price: '$26',
        category: 'appetizers',
        tags: ['seafood'],
      },
      {
        id: 'oysters',
        name: 'Kumamoto Oysters',
        description: 'Half dozen oysters, mignonette, lemon',
        price: '$24',
        category: 'appetizers',
        tags: ['seafood', 'raw'],
      },
      {
        id: 'soup',
        name: 'French Onion Soup',
        description: 'Caramelized onions, beef consommé, gruyère, crouton',
        price: '$16',
        category: 'appetizers',
        tags: [],
      },
      {
        id: 'tartare',
        name: 'Beef Tartare',
        description: 'Hand-cut filet mignon, cornichons, mustard, quail egg',
        price: '$22',
        category: 'appetizers',
        tags: ['raw'],
      },

      // Entrees
      {
        id: 'duck',
        name: 'Duck Breast',
        description: 'Roasted duck breast, cherry gastrique, pommes Anna, haricots verts',
        price: '$48',
        category: 'entrees',
        featured: true,
        tags: ['signature'],
      },
      {
        id: 'beef',
        name: 'Filet Mignon',
        description: '8oz beef tenderloin, bordelaise, truffle pommes purée, asparagus',
        price: '$62',
        category: 'entrees',
        tags: [],
      },
      {
        id: 'lamb',
        name: 'Rack of Lamb',
        description: 'Herb-crusted lamb, rosemary jus, ratatouille, potato gratin',
        price: '$54',
        category: 'entrees',
        tags: [],
      },
      {
        id: 'halibut',
        name: 'Butter-Poached Halibut',
        description: 'Wild halibut, lemon beurre blanc, fennel, baby vegetables',
        price: '$46',
        category: 'entrees',
        tags: ['seafood'],
      },
      {
        id: 'lobster',
        name: 'Lobster Thermidor',
        description: 'Maine lobster, brandy cream sauce, gruyère, herb rice',
        price: '$68',
        category: 'entrees',
        featured: true,
        tags: ['seafood', 'signature'],
      },
      {
        id: 'risotto',
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice, forest mushrooms, truffle oil, parmesan',
        price: '$38',
        category: 'entrees',
        tags: ['vegetarian'],
      },

      // Desserts
      {
        id: 'souffle',
        name: 'Grand Marnier Soufflé',
        description: 'Classic French soufflé, crème anglaise (20 min preparation)',
        price: '$18',
        category: 'desserts',
        featured: true,
        tags: ['signature'],
      },
      {
        id: 'tart',
        name: 'Tarte Tatin',
        description: 'Caramelized apple tart, vanilla ice cream, caramel sauce',
        price: '$14',
        category: 'desserts',
        tags: [],
      },
      {
        id: 'chocolate',
        name: 'Chocolate Fondant',
        description: 'Warm chocolate cake, molten center, raspberry coulis',
        price: '$16',
        category: 'desserts',
        tags: [],
      },
      {
        id: 'brulee',
        name: 'Crème Brûlée',
        description: 'Vanilla bean custard, caramelized sugar, seasonal berries',
        price: '$14',
        category: 'desserts',
        tags: [],
      },

      // Wine Selection (examples)
      {
        id: 'champagne',
        name: 'Dom Pérignon 2012',
        description: 'Champagne, France',
        price: '$350',
        category: 'wine',
        tags: ['sparkling'],
      },
      {
        id: 'burgundy',
        name: 'Château Margaux 2015',
        description: 'Bordeaux, France',
        price: '$420',
        category: 'wine',
        featured: true,
        tags: ['red'],
      },
      {
        id: 'white',
        name: 'Chablis Grand Cru 2018',
        description: 'Burgundy, France',
        price: '$95',
        category: 'wine',
        tags: ['white'],
      },

      // Tasting Menu
      {
        id: 'tasting-5',
        name: '5-Course Tasting',
        description: 'Chef\'s selection of five courses with wine pairing',
        price: '$145',
        category: 'tasting',
        tags: [],
      },
      {
        id: 'tasting-7',
        name: '7-Course Tasting',
        description: 'Extended tasting experience with wine pairing',
        price: '$195',
        category: 'tasting',
        featured: true,
        tags: ['signature'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Experience',
    subtitle: 'A glimpse into our culinary artistry',
    categories: ['All', 'Dishes', 'Ambiance', 'Wine', 'Events'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '456 Gourmet Avenue',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'USA',
    },
    hours: {
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: '5:30 PM - 10:00 PM',
      thursday: '5:30 PM - 10:00 PM',
      friday: '5:30 PM - 11:00 PM',
      saturday: '5:30 PM - 11:00 PM',
      sunday: '5:30 PM - 9:00 PM',
    },
    contact: {
      phone: '(555) 987-6543',
      email: 'reservations@lapetitemaison.example',
      social: {
        instagram: 'https://instagram.com/lapetitemaison',
        facebook: 'https://facebook.com/lapetitemaison',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Gourmet+Avenue+San+Francisco+CA',
  },

  // FOOTER
  footer: {
    businessName: 'La Petite Maison',
    tagline: 'Fine dining since 2015',
    copyright: '© 2024 La Petite Maison. All rights reserved.',
    links: [
      { label: 'Menu', url: '#menu' },
      { label: 'Reservations', url: '#reservation' },
      { label: 'Private Events', url: '#events' },
      { label: 'Gift Cards', url: '#gift-cards' },
      { label: 'Press', url: '#press' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

export default restaurantContent;
