/**
 * MECHANIC SHOP CONTENT CONFIGURATION
 *
 * This file contains all text content, labels, and copy for the mechanic shop application.
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
// MECHANIC SHOP CONTENT
// ========================================

export const mechanicContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Precision Auto Care',
    siteDescription: 'Expert auto repair and maintenance services. Trusted mechanics providing quality service for all makes and models.',
    siteUrl: 'https://precisionautocare.com',
    keywords: [
      'auto repair',
      'car mechanic',
      'vehicle maintenance',
      'brake service',
      'oil change',
      'engine repair',
      'auto shop',
      'car service',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Precision Auto Care',
    subtitle: 'Your Trusted Auto Repair Partner',
    tagline: 'Expert mechanics, honest service, fair prices - keeping you safely on the road',
    ctaButtons: {
      primary: {
        text: 'Our Services',
        link: '#services',
      },
      secondary: {
        text: 'Book Appointment',
        link: '#contact',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'About Us',
    heading: 'Quality Service Since 2005',
    story: [
      'At Precision Auto Care, we understand that your vehicle is more than just transportation—it\'s your freedom, your livelihood, and your family\'s safety. That\'s why we treat every car that comes through our doors with the same care and attention we\'d give our own.',
      'Our team of ASE-certified technicians brings over 75 years of combined experience to every job. From routine maintenance to complex diagnostics, we use state-of-the-art equipment and genuine parts to ensure your vehicle runs at peak performance.',
      'We believe in transparent, honest service. Before we begin any work, we\'ll explain what needs to be done and why. No surprises, no hidden fees—just straightforward solutions to keep you on the road safely.',
    ],
    highlights: [
      {
        title: 'ASE Certified',
        description: 'All technicians are certified by the National Institute for Automotive Service Excellence',
      },
      {
        title: 'Modern Equipment',
        description: 'Latest diagnostic tools and repair equipment for all makes and models',
      },
      {
        title: 'Quality Parts',
        description: 'We use OEM and premium aftermarket parts with warranty coverage',
      },
      {
        title: 'Customer First',
        description: 'Transparent pricing, honest assessments, and exceptional service',
      },
    ],
  },

  // SERVICES SECTION (using menu structure)
  menu: {
    sectionTitle: 'Our Services',
    categories: [
      {
        id: 'maintenance',
        name: 'Preventive Maintenance',
        description: 'Regular services to keep your vehicle running smoothly',
      },
      {
        id: 'repairs',
        name: 'Repairs & Diagnostics',
        description: 'Expert troubleshooting and repair services',
      },
      {
        id: 'brakes',
        name: 'Brake Services',
        description: 'Complete brake system inspection and repair',
      },
      {
        id: 'engine',
        name: 'Engine Services',
        description: 'Engine diagnostics, repair, and performance',
      },
      {
        id: 'specialty',
        name: 'Specialty Services',
        description: 'Advanced services and custom work',
      },
    ],
    items: [
      // Preventive Maintenance
      {
        id: 'oil-change',
        name: 'Oil Change Service',
        description: 'Full synthetic or conventional oil change with filter replacement and multi-point inspection',
        price: 'From $49.95',
        category: 'maintenance',
        featured: true,
        tags: ['quick-service'],
      },
      {
        id: 'tire-rotation',
        name: 'Tire Rotation & Balance',
        description: 'Extend tire life with regular rotation and precision balancing',
        price: '$39.95',
        category: 'maintenance',
        tags: ['quick-service'],
      },
      {
        id: 'inspection',
        name: 'Multi-Point Inspection',
        description: 'Comprehensive 50-point vehicle inspection',
        price: 'FREE',
        category: 'maintenance',
        tags: ['complimentary'],
      },
      {
        id: 'tune-up',
        name: 'Engine Tune-Up',
        description: 'Spark plugs, filters, and complete engine service',
        price: 'From $149.95',
        category: 'maintenance',
        tags: [],
      },
      {
        id: 'fluid-service',
        name: 'Fluid Services',
        description: 'Transmission, coolant, brake, and power steering fluid service',
        price: 'From $89.95',
        category: 'maintenance',
        tags: [],
      },

      // Repairs & Diagnostics
      {
        id: 'diagnostics',
        name: 'Computer Diagnostics',
        description: 'Advanced computer scan and diagnostic service',
        price: '$89.95',
        category: 'repairs',
        featured: true,
        tags: ['diagnostic'],
      },
      {
        id: 'check-engine',
        name: 'Check Engine Light',
        description: 'Diagnose and repair check engine light issues',
        price: 'From $89.95',
        category: 'repairs',
        tags: ['diagnostic'],
      },
      {
        id: 'electrical',
        name: 'Electrical Repairs',
        description: 'Battery, alternator, starter, and electrical system repairs',
        price: 'From $129.95',
        category: 'repairs',
        tags: [],
      },
      {
        id: 'ac-service',
        name: 'A/C Service & Repair',
        description: 'Air conditioning diagnosis, recharge, and repair',
        price: 'From $149.95',
        category: 'repairs',
        tags: [],
      },

      // Brake Services
      {
        id: 'brake-inspection',
        name: 'Brake Inspection',
        description: 'Complete brake system inspection',
        price: 'FREE',
        category: 'brakes',
        tags: ['complimentary'],
      },
      {
        id: 'brake-pads',
        name: 'Brake Pad Replacement',
        description: 'Quality brake pads installed with rotor resurface',
        price: 'From $179.95',
        category: 'brakes',
        featured: true,
        tags: ['safety'],
      },
      {
        id: 'brake-rotors',
        name: 'Brake Rotors & Pads',
        description: 'Complete brake rotor and pad replacement',
        price: 'From $349.95',
        category: 'brakes',
        tags: ['safety'],
      },
      {
        id: 'brake-fluid',
        name: 'Brake Fluid Flush',
        description: 'Complete brake fluid system flush and replacement',
        price: '$89.95',
        category: 'brakes',
        tags: [],
      },

      // Engine Services
      {
        id: 'timing-belt',
        name: 'Timing Belt Replacement',
        description: 'Timing belt and water pump replacement service',
        price: 'From $499.95',
        category: 'engine',
        tags: ['major-service'],
      },
      {
        id: 'head-gasket',
        name: 'Head Gasket Repair',
        description: 'Complete head gasket replacement',
        price: 'Call for Quote',
        category: 'engine',
        tags: ['major-service'],
      },
      {
        id: 'engine-rebuild',
        name: 'Engine Rebuild',
        description: 'Complete engine rebuild or replacement',
        price: 'Call for Quote',
        category: 'engine',
        tags: ['major-service'],
      },

      // Specialty Services
      {
        id: 'transmission',
        name: 'Transmission Service',
        description: 'Transmission fluid service and diagnostics',
        price: 'From $199.95',
        category: 'specialty',
        tags: [],
      },
      {
        id: 'suspension',
        name: 'Suspension & Steering',
        description: 'Shock, strut, and steering component service',
        price: 'From $299.95',
        category: 'specialty',
        tags: [],
      },
      {
        id: 'exhaust',
        name: 'Exhaust System Repair',
        description: 'Muffler, catalytic converter, and exhaust repairs',
        price: 'From $149.95',
        category: 'specialty',
        tags: [],
      },
      {
        id: 'pre-purchase',
        name: 'Pre-Purchase Inspection',
        description: 'Comprehensive inspection before buying a used vehicle',
        price: '$149.95',
        category: 'specialty',
        featured: true,
        tags: ['peace-of-mind'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Work',
    subtitle: 'Quality workmanship you can trust',
    categories: ['All', 'Shop', 'Services', 'Team', 'Customer Cars'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '456 Mechanic Avenue',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      country: 'USA',
    },
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    contact: {
      phone: '(555) 234-5678',
      email: 'service@precisionautocare.com',
      social: {
        instagram: 'https://instagram.com/precisionautocare',
        facebook: 'https://facebook.com/precisionautocare',
        twitter: 'https://twitter.com/precisionautocare',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Mechanic+Avenue+Springfield+IL',
  },

  // FOOTER
  footer: {
    businessName: 'Precision Auto Care',
    tagline: 'Quality service since 2005',
    copyright: '© 2024 Precision Auto Care. All rights reserved.',
    links: [
      { label: 'Services', url: '#services' },
      { label: 'About', url: '#about' },
      { label: 'Location', url: '#location' },
      { label: 'Appointments', url: '#contact' },
      { label: 'Reviews', url: '#reviews' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

export default mechanicContent;
