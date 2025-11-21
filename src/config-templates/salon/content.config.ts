/**
 * SALON/SPA CONTENT CONFIGURATION
 *
 * This file contains all text content for a salon and spa.
 * Customize these values to match your spa's services and philosophy.
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
// SALON/SPA CONTENT
// ========================================

export const salonContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Serenity Wellness Spa',
    siteDescription: 'Luxury day spa offering hair styling, skincare treatments, massage therapy, and holistic wellness services in a tranquil environment.',
    siteUrl: 'https://serenitywellness.example',
    keywords: [
      'spa',
      'salon',
      'massage',
      'facial',
      'hair salon',
      'wellness',
      'beauty treatments',
      'day spa',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Serenity Wellness Spa',
    subtitle: 'Your Sanctuary of Relaxation',
    tagline: 'Restore balance, renew beauty, rediscover yourself',
    ctaButtons: {
      primary: {
        text: 'Book Appointment',
        link: '#booking',
      },
      secondary: {
        text: 'View Services',
        link: '#menu',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Philosophy',
    heading: 'Holistic Wellness for Mind, Body & Spirit',
    story: [
      'At Serenity Wellness Spa, we believe that true beauty radiates from within. Our holistic approach combines expert treatments with a nurturing environment designed to help you disconnect from daily stress and reconnect with your inner peace.',
      'Our team of licensed professionals brings decades of combined experience in cosmetology, esthetics, and therapeutic massage. Each treatment is personalized to your unique needs, using premium products and proven techniques that honor both ancient wisdom and modern innovation.',
      'Step into our sanctuary and experience the difference that mindful care makes. From the moment you enter our tranquil space, every detail is designed to support your journey toward wellness, confidence, and rejuvenation.',
    ],
    highlights: [
      {
        title: 'Expert Therapists',
        description: 'Licensed professionals with advanced certifications',
      },
      {
        title: 'Premium Products',
        description: 'Organic, cruelty-free skincare and haircare lines',
      },
      {
        title: 'Serene Environment',
        description: 'Thoughtfully designed spaces for complete relaxation',
      },
      {
        title: 'Personalized Care',
        description: 'Customized treatments tailored to your needs',
      },
    ],
  },

  // MENU SECTION (Services)
  menu: {
    sectionTitle: 'Our Services',
    categories: [
      {
        id: 'hair',
        name: 'Hair Services',
        description: 'Cuts, color, and styling',
      },
      {
        id: 'skincare',
        name: 'Skincare & Facials',
        description: 'Advanced facial treatments',
      },
      {
        id: 'massage',
        name: 'Massage Therapy',
        description: 'Therapeutic and relaxation massage',
      },
      {
        id: 'body',
        name: 'Body Treatments',
        description: 'Wraps, scrubs, and body care',
      },
      {
        id: 'packages',
        name: 'Spa Packages',
        description: 'Complete wellness experiences',
      },
    ],
    items: [
      // Hair Services
      {
        id: 'haircut-women',
        name: 'Women\'s Haircut & Style',
        description: 'Consultation, precision cut, shampoo, and blow-dry styling',
        price: '$75',
        category: 'hair',
        tags: [],
      },
      {
        id: 'haircut-men',
        name: 'Men\'s Haircut',
        description: 'Consultation, cut, shampoo, and style',
        price: '$45',
        category: 'hair',
        tags: [],
      },
      {
        id: 'color-full',
        name: 'Full Color Service',
        description: 'Single-process color, toner, cut and style',
        price: '$135+',
        category: 'hair',
        featured: true,
        tags: [],
      },
      {
        id: 'highlights',
        name: 'Highlights/Balayage',
        description: 'Partial or full highlights with toner and style',
        price: '$165+',
        category: 'hair',
        tags: [],
      },
      {
        id: 'keratin',
        name: 'Keratin Treatment',
        description: 'Smoothing treatment for frizz-free hair (3-6 months)',
        price: '$250+',
        category: 'hair',
        tags: [],
      },
      {
        id: 'blowout',
        name: 'Express Blowout',
        description: 'Shampoo and professional blow-dry styling',
        price: '$45',
        category: 'hair',
        tags: [],
      },

      // Skincare & Facials
      {
        id: 'classic-facial',
        name: 'Classic European Facial',
        description: 'Deep cleanse, exfoliation, extractions, mask, and massage (60 min)',
        price: '$95',
        category: 'skincare',
        tags: [],
      },
      {
        id: 'anti-aging',
        name: 'Anti-Aging Facial',
        description: 'Peptide-infused treatment targeting fine lines and elasticity (75 min)',
        price: '$145',
        category: 'skincare',
        featured: true,
        tags: ['signature'],
      },
      {
        id: 'hydrating',
        name: 'Hydrating Facial',
        description: 'Intensive moisture therapy for dry, depleted skin (60 min)',
        price: '$110',
        category: 'skincare',
        tags: [],
      },
      {
        id: 'acne',
        name: 'Acne Clearing Treatment',
        description: 'Deep cleansing, purifying mask, LED light therapy (75 min)',
        price: '$125',
        category: 'skincare',
        tags: [],
      },
      {
        id: 'microderm',
        name: 'Microdermabrasion',
        description: 'Exfoliating treatment for skin texture and tone (45 min)',
        price: '$120',
        category: 'skincare',
        tags: [],
      },

      // Massage Therapy
      {
        id: 'swedish',
        name: 'Swedish Massage',
        description: 'Classic relaxation massage with flowing strokes',
        price: '60 min: $95 / 90 min: $135',
        category: 'massage',
        tags: [],
      },
      {
        id: 'deep-tissue',
        name: 'Deep Tissue Massage',
        description: 'Targeted therapy for chronic tension and muscle knots',
        price: '60 min: $110 / 90 min: $155',
        category: 'massage',
        featured: true,
        tags: [],
      },
      {
        id: 'hot-stone',
        name: 'Hot Stone Massage',
        description: 'Heated basalt stones melt away tension and stress',
        price: '90 min: $165',
        category: 'massage',
        tags: ['signature'],
      },
      {
        id: 'prenatal',
        name: 'Prenatal Massage',
        description: 'Gentle massage designed for expectant mothers',
        price: '60 min: $100',
        category: 'massage',
        tags: [],
      },
      {
        id: 'aromatherapy',
        name: 'Aromatherapy Massage',
        description: 'Massage with therapeutic essential oils',
        price: '60 min: $105 / 90 min: $145',
        category: 'massage',
        tags: [],
      },

      // Body Treatments
      {
        id: 'body-scrub',
        name: 'Full Body Scrub',
        description: 'Exfoliating treatment with hydrating wrap (50 min)',
        price: '$110',
        category: 'body',
        tags: [],
      },
      {
        id: 'body-wrap',
        name: 'Detoxifying Body Wrap',
        description: 'Cleansing wrap with aromatherapy (60 min)',
        price: '$125',
        category: 'body',
        tags: [],
      },
      {
        id: 'back-treatment',
        name: 'Back Facial Treatment',
        description: 'Deep cleansing treatment for back acne and congestion (45 min)',
        price: '$85',
        category: 'body',
        tags: [],
      },

      // Spa Packages
      {
        id: 'signature-package',
        name: 'Signature Serenity Package',
        description: '90-min massage, anti-aging facial, express blowout (3.5 hours)',
        price: '$325',
        category: 'packages',
        featured: true,
        tags: ['signature', 'bestseller'],
      },
      {
        id: 'half-day',
        name: 'Half-Day Retreat',
        description: '60-min massage, classic facial, body scrub (2.5 hours)',
        price: '$265',
        category: 'packages',
        tags: [],
      },
      {
        id: 'couples',
        name: 'Couples Escape',
        description: 'Side-by-side 90-min massage in our couples suite',
        price: '$330',
        category: 'packages',
        tags: [],
      },
      {
        id: 'bridal',
        name: 'Bridal Beauty Package',
        description: 'Facial, massage, manicure, pedicure, hair and makeup (5 hours)',
        price: '$475',
        category: 'packages',
        tags: [],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Gallery',
    subtitle: 'A glimpse into your sanctuary',
    categories: ['All', 'Treatment Rooms', 'Services', 'Relaxation Areas', 'Products'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '567 Tranquility Boulevard',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      country: 'USA',
    },
    hours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    contact: {
      phone: '(555) 456-7890',
      email: 'info@serenitywellness.example',
      social: {
        instagram: 'https://instagram.com/serenitywellnessspa',
        facebook: 'https://facebook.com/serenitywellnessspa',
      },
    },
    mapUrl: 'https://maps.google.com/?q=567+Tranquility+Boulevard+Seattle+WA',
  },

  // FOOTER
  footer: {
    businessName: 'Serenity Wellness Spa',
    tagline: 'Your journey to wellness begins here',
    copyright: '© 2024 Serenity Wellness Spa. All rights reserved.',
    links: [
      { label: 'Services', url: '#menu' },
      { label: 'Book Online', url: '#booking' },
      { label: 'Gift Cards', url: '#gift-cards' },
      { label: 'Membership', url: '#membership' },
      { label: 'Policies', url: '#policies' },
      { label: 'Careers', url: '#careers' },
    ],
  },
};

export default salonContent;
