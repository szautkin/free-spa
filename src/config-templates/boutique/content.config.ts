/**
 * BOUTIQUE/RETAIL CONTENT CONFIGURATION
 *
 * This file contains all text content for a clothing boutique.
 * Customize these values to match your boutique's collections and brand story.
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
// BOUTIQUE CONTENT
// ========================================

export const boutiqueContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Maison Claire',
    siteDescription: 'Curated women\'s fashion boutique featuring contemporary designers, vintage finds, and timeless pieces for the modern woman.',
    siteUrl: 'https://maisonclaire.example',
    keywords: [
      'boutique',
      'women\'s fashion',
      'designer clothing',
      'contemporary fashion',
      'vintage clothing',
      'sustainable fashion',
      'local boutique',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Maison Claire',
    subtitle: 'Timeless Style, Modern Spirit',
    tagline: 'Curated collections for the woman who values quality and individuality',
    ctaButtons: {
      primary: {
        text: 'Shop New Arrivals',
        link: '#menu',
      },
      secondary: {
        text: 'Book Styling Session',
        link: '#appointment',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Story',
    heading: 'Where Style Meets Sustainability',
    story: [
      'Maison Claire was born from a simple belief: fashion should be beautiful, sustainable, and accessible. Founded by Claire Martinez in 2017, our boutique has become a destination for women seeking unique pieces that tell a story.',
      'We carefully curate each collection, partnering with emerging designers who share our commitment to ethical production and timeless design. From contemporary minimalism to vintage treasures, every piece in our boutique is chosen for its quality, craftsmanship, and ability to become a cherished part of your wardrobe.',
      'Beyond clothing, we offer personalized styling services to help you discover your unique style. Our intimate boutique space is designed as a retreat from fast fashion—a place where you can slow down, try on beautiful things, and invest in pieces you\'ll love for years to come.',
    ],
    highlights: [
      {
        title: 'Curated Collections',
        description: 'Hand-selected pieces from emerging and established designers',
      },
      {
        title: 'Sustainable Focus',
        description: 'Partnering with ethical brands and vintage sources',
      },
      {
        title: 'Personal Styling',
        description: 'Complimentary styling consultations by appointment',
      },
      {
        title: 'Community Hub',
        description: 'Regular events, trunk shows, and styling workshops',
      },
    ],
  },

  // MENU SECTION (Products)
  menu: {
    sectionTitle: 'Collections',
    categories: [
      {
        id: 'new-arrivals',
        name: 'New Arrivals',
        description: 'Fresh pieces just added to our collection',
      },
      {
        id: 'dresses',
        name: 'Dresses',
        description: 'From casual to cocktail',
      },
      {
        id: 'tops',
        name: 'Tops & Blouses',
        description: 'Essential layers and statement pieces',
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Jewelry, bags, and finishing touches',
      },
      {
        id: 'vintage',
        name: 'Vintage Collection',
        description: 'One-of-a-kind treasures from past decades',
      },
    ],
    items: [
      // New Arrivals
      {
        id: 'linen-dress',
        name: 'French Linen Midi Dress',
        description: 'Effortless elegance in natural linen, perfect for summer days',
        price: '$168',
        category: 'new-arrivals',
        featured: true,
        tags: ['sustainable', 'bestseller'],
      },
      {
        id: 'silk-blouse',
        name: 'Silk Charmeuse Blouse',
        description: 'Luxurious silk blouse with pearl buttons and relaxed fit',
        price: '$225',
        category: 'new-arrivals',
        tags: [],
      },
      {
        id: 'wide-leg',
        name: 'High-Waisted Wide Leg Trousers',
        description: 'Tailored trousers in Italian wool blend',
        price: '$195',
        category: 'new-arrivals',
        tags: [],
      },

      // Dresses
      {
        id: 'wrap-dress',
        name: 'Floral Wrap Dress',
        description: 'Feminine wrap silhouette in exclusive print',
        price: '$158',
        category: 'dresses',
        tags: [],
      },
      {
        id: 'maxi-dress',
        name: 'Bohemian Maxi Dress',
        description: 'Flowing maxi with embroidered details',
        price: '$188',
        category: 'dresses',
        featured: true,
        tags: [],
      },
      {
        id: 'slip-dress',
        name: 'Silk Slip Dress',
        description: 'Timeless slip dress in bias-cut silk',
        price: '$245',
        category: 'dresses',
        tags: [],
      },
      {
        id: 'shirt-dress',
        name: 'Linen Shirt Dress',
        description: 'Classic shirt dress in breathable linen',
        price: '$142',
        category: 'dresses',
        tags: ['sustainable'],
      },

      // Tops & Blouses
      {
        id: 'cashmere-sweater',
        name: 'Cashmere V-Neck Sweater',
        description: 'Luxuriously soft Italian cashmere',
        price: '$285',
        category: 'tops',
        featured: true,
        tags: [],
      },
      {
        id: 'cotton-tee',
        name: 'Organic Cotton Tee',
        description: 'Essential tee in organic Pima cotton',
        price: '$68',
        category: 'tops',
        tags: ['sustainable', 'basics'],
      },
      {
        id: 'peasant-top',
        name: 'Embroidered Peasant Top',
        description: 'Handcrafted embroidery on soft cotton',
        price: '$125',
        category: 'tops',
        tags: [],
      },
      {
        id: 'button-up',
        name: 'Classic White Button-Up',
        description: 'Perfect white shirt in crisp cotton poplin',
        price: '$98',
        category: 'tops',
        tags: ['basics'],
      },

      // Accessories
      {
        id: 'leather-bag',
        name: 'Italian Leather Crossbody',
        description: 'Handcrafted leather bag from Florence',
        price: '$345',
        category: 'accessories',
        featured: true,
        tags: [],
      },
      {
        id: 'gold-hoops',
        name: 'Hammered Gold Hoops',
        description: 'Artisan 14k gold-filled earrings',
        price: '$78',
        category: 'accessories',
        tags: [],
      },
      {
        id: 'silk-scarf',
        name: 'Hand-Painted Silk Scarf',
        description: 'One-of-a-kind silk scarf by local artist',
        price: '$125',
        category: 'accessories',
        tags: ['local', 'unique'],
      },
      {
        id: 'tote',
        name: 'Canvas Market Tote',
        description: 'Durable canvas tote with leather handles',
        price: '$89',
        category: 'accessories',
        tags: ['sustainable'],
      },

      // Vintage Collection
      {
        id: 'vintage-blazer',
        name: '1980s Wool Blazer',
        description: 'Structured blazer with strong shoulders, like new condition',
        price: '$158',
        category: 'vintage',
        tags: ['vintage', 'unique'],
      },
      {
        id: 'vintage-dress',
        name: '1970s Maxi Dress',
        description: 'Gorgeous bohemian print, excellent condition',
        price: '$135',
        category: 'vintage',
        featured: true,
        tags: ['vintage', 'unique'],
      },
      {
        id: 'vintage-coat',
        name: '1960s Wool Coat',
        description: 'Classic A-line coat in camel wool',
        price: '$225',
        category: 'vintage',
        tags: ['vintage', 'unique'],
      },
      {
        id: 'vintage-jewelry',
        name: 'Vintage Gold Locket',
        description: 'Delicate Victorian-era locket on chain',
        price: '$195',
        category: 'vintage',
        tags: ['vintage', 'unique'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Lookbook',
    subtitle: 'Discover our latest collections and styling inspiration',
    categories: ['All', 'New Arrivals', 'Vintage', 'Styled Looks', 'In Store'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Our Boutique',
    address: {
      street: '234 Fashion Lane',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      country: 'USA',
    },
    hours: {
      monday: 'Closed',
      tuesday: '11:00 AM - 6:00 PM',
      wednesday: '11:00 AM - 6:00 PM',
      thursday: '11:00 AM - 7:00 PM',
      friday: '11:00 AM - 7:00 PM',
      saturday: '10:00 AM - 6:00 PM',
      sunday: '12:00 PM - 5:00 PM',
    },
    contact: {
      phone: '(555) 345-6789',
      email: 'hello@maisonclaire.example',
      social: {
        instagram: 'https://instagram.com/maisonclaire',
        facebook: 'https://facebook.com/maisonclaire',
      },
    },
    mapUrl: 'https://maps.google.com/?q=234+Fashion+Lane+Austin+TX',
  },

  // FOOTER
  footer: {
    businessName: 'Maison Claire',
    tagline: 'Timeless style since 2017',
    copyright: '© 2024 Maison Claire. All rights reserved.',
    links: [
      { label: 'Shop', url: '#menu' },
      { label: 'New Arrivals', url: '#new' },
      { label: 'Styling Services', url: '#styling' },
      { label: 'Events', url: '#events' },
      { label: 'Gift Cards', url: '#gift-cards' },
      { label: 'Returns', url: '#returns' },
    ],
  },
};

export default boutiqueContent;
