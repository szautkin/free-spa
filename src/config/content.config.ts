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
  subtitle: string;
  featuredTitle: string;
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
  heading: string;
  subtitle: string;
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
  labels: {
    address: string;
    hours: string;
    contact: string;
    phone: string;
    email: string;
    followUs: string;
    getDirections: string;
    daysOfWeek: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
}

export interface FooterContent {
  businessName: string;
  tagline: string;
  copyright: string;
  links: {
    label: string;
    url: string;
  }[];
  labels: {
    quickLinks: string;
    contact: string;
  };
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

export const mechanicShopContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'Precision Auto Works',
    siteDescription: 'Professional automotive repair and maintenance services. Expert mechanics, quality parts, and honest service you can trust.',
    siteUrl: 'https://precisionautoworks.com',
    keywords: [
      'auto repair',
      'mechanic',
      'car service',
      'brake repair',
      'oil change',
      'engine repair',
      'transmission service',
      'auto maintenance',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Precision Auto Works',
    subtitle: 'Expert Care for Your Vehicle',
    tagline: 'Quality repairs, honest service, fair prices - keeping you safely on the road',
    ctaButtons: {
      primary: {
        text: 'Our Services',
        link: '#menu',
      },
      secondary: {
        text: 'Contact Us',
        link: '#location',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'About Us',
    heading: 'Trusted Mechanics Since 2005',
    story: [
      'At Precision Auto Works, we understand that your vehicle is more than just transportation—it\'s your connection to work, family, and life. That\'s why we\'ve built our reputation on honesty, expertise, and quality workmanship that you can trust.',
      'Our ASE-certified technicians bring over 75 years of combined experience to every job, from routine maintenance to complex engine diagnostics. We use state-of-the-art diagnostic equipment and only premium parts to ensure your vehicle runs at peak performance.',
      'We believe in transparent service. Before any work begins, we\'ll walk you through what needs to be done and why, providing clear estimates with no hidden fees. Our goal is to build lasting relationships with our customers based on trust and exceptional service.',
    ],
    highlights: [
      {
        title: 'ASE Certified',
        description: 'Factory-trained technicians with ongoing education',
      },
      {
        title: 'Quality Parts',
        description: 'OEM and premium aftermarket parts with warranty',
      },
      {
        title: 'Honest Service',
        description: 'Transparent pricing and thorough explanations',
      },
      {
        title: 'Fast Turnaround',
        description: 'Most repairs completed same-day or next-day',
      },
    ],
  },

  // SERVICES SECTION
  menu: {
    sectionTitle: 'Our Services',
    subtitle: 'Comprehensive Auto Care Solutions',
    featuredTitle: 'Popular Services',
    categories: [
      {
        id: 'maintenance',
        name: 'Maintenance',
        description: 'Regular upkeep to keep your vehicle running smoothly',
      },
      {
        id: 'brakes',
        name: 'Brake Service',
        description: 'Complete brake system inspection and repair',
      },
      {
        id: 'engine',
        name: 'Engine Repair',
        description: 'Diagnostics and repair for all engine issues',
      },
      {
        id: 'electrical',
        name: 'Electrical',
        description: 'Battery, alternator, and electrical system service',
      },
      {
        id: 'diagnostics',
        name: 'Diagnostics',
        description: 'Advanced computer diagnostics and troubleshooting',
      },
    ],
    items: [
      // Maintenance Services
      {
        id: 'oil-change',
        name: 'Oil Change',
        description: 'Full synthetic or conventional oil, filter replacement, fluid check',
        price: 'From $49.99',
        category: 'maintenance',
        featured: true,
        tags: ['quick'],
      },
      {
        id: 'tune-up',
        name: 'Engine Tune-Up',
        description: 'Spark plugs, filters, fluid top-off, performance check',
        price: 'From $149.99',
        category: 'maintenance',
        tags: [],
      },
      {
        id: 'tire-rotation',
        name: 'Tire Rotation & Balance',
        description: 'Rotation, balancing, and pressure check for even wear',
        price: '$59.99',
        category: 'maintenance',
        tags: ['quick'],
      },
      {
        id: 'inspection',
        name: 'Multi-Point Inspection',
        description: 'Comprehensive 50-point safety and performance check',
        price: 'FREE',
        category: 'maintenance',
        featured: true,
        tags: [],
      },
      {
        id: 'fluid-service',
        name: 'Fluid Exchange Service',
        description: 'Coolant, transmission, brake, or power steering fluid',
        price: 'From $89.99',
        category: 'maintenance',
        tags: [],
      },

      // Brake Services
      {
        id: 'brake-pads',
        name: 'Brake Pad Replacement',
        description: 'Premium brake pads, rotor inspection, system check',
        price: 'From $199.99',
        category: 'brakes',
        featured: true,
        tags: [],
      },
      {
        id: 'brake-rotors',
        name: 'Rotor Resurfacing',
        description: 'Machine rotors for smooth, even braking surface',
        price: 'From $99.99',
        category: 'brakes',
        tags: [],
      },
      {
        id: 'brake-complete',
        name: 'Complete Brake Service',
        description: 'Pads, rotors, calipers, fluid flush, full inspection',
        price: 'From $449.99',
        category: 'brakes',
        tags: [],
      },
      {
        id: 'brake-fluid',
        name: 'Brake Fluid Flush',
        description: 'Complete brake fluid replacement and bleeding',
        price: '$89.99',
        category: 'brakes',
        tags: [],
      },

      // Engine Services
      {
        id: 'engine-diagnostic',
        name: 'Engine Diagnostics',
        description: 'Computer scan, trouble code analysis, issue identification',
        price: '$79.99',
        category: 'engine',
        featured: true,
        tags: [],
      },
      {
        id: 'timing-belt',
        name: 'Timing Belt Replacement',
        description: 'Timing belt, water pump, seals, and tensioner service',
        price: 'From $599.99',
        category: 'engine',
        tags: [],
      },
      {
        id: 'head-gasket',
        name: 'Head Gasket Repair',
        description: 'Complete head gasket replacement and resurface',
        price: 'From $1,499.99',
        category: 'engine',
        tags: [],
      },
      {
        id: 'check-engine',
        name: 'Check Engine Light',
        description: 'Diagnostic scan and repair recommendation',
        price: '$79.99',
        category: 'engine',
        tags: [],
      },

      // Electrical Services
      {
        id: 'battery-test',
        name: 'Battery Test & Replace',
        description: 'Load test, installation, and terminal cleaning',
        price: 'From $149.99',
        category: 'electrical',
        tags: ['quick'],
      },
      {
        id: 'alternator',
        name: 'Alternator Service',
        description: 'Testing, repair, or replacement of alternator',
        price: 'From $349.99',
        category: 'electrical',
        tags: [],
      },
      {
        id: 'starter',
        name: 'Starter Replacement',
        description: 'Starter motor testing and replacement service',
        price: 'From $299.99',
        category: 'electrical',
        tags: [],
      },
      {
        id: 'electrical-diagnostic',
        name: 'Electrical Diagnostics',
        description: 'Comprehensive electrical system troubleshooting',
        price: '$99.99',
        category: 'electrical',
        tags: [],
      },

      // Diagnostic Services
      {
        id: 'computer-scan',
        name: 'Computer Scan',
        description: 'Full vehicle computer system scan and report',
        price: '$79.99',
        category: 'diagnostics',
        tags: [],
      },
      {
        id: 'pre-purchase',
        name: 'Pre-Purchase Inspection',
        description: 'Comprehensive inspection before buying a used vehicle',
        price: '$149.99',
        category: 'diagnostics',
        featured: true,
        tags: [],
      },
      {
        id: 'noise-diagnostic',
        name: 'Noise Diagnosis',
        description: 'Identify and diagnose unusual vehicle noises',
        price: '$89.99',
        category: 'diagnostics',
        tags: [],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Shop',
    subtitle: 'Modern facility with state-of-the-art equipment',
    categories: ['All', 'Shop', 'Equipment', 'Team', 'Services'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    heading: 'Find Our Shop',
    subtitle: 'Conveniently located with easy access and free parking',
    address: {
      street: '456 Automotive Drive',
      city: 'Detroit',
      state: 'MI',
      zip: '48201',
      country: 'USA',
    },
    hours: {
      monday: '7:30 AM - 6:00 PM',
      tuesday: '7:30 AM - 6:00 PM',
      wednesday: '7:30 AM - 6:00 PM',
      thursday: '7:30 AM - 6:00 PM',
      friday: '7:30 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
    contact: {
      phone: '(555) AUTO-FIX',
      email: 'service@precisionautoworks.com',
      social: {
        instagram: 'https://instagram.com/precisionautoworks',
        facebook: 'https://facebook.com/precisionautoworks',
        twitter: 'https://twitter.com/precisionauto',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Automotive+Drive+Detroit+MI',
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
    businessName: 'Precision Auto Works',
    tagline: 'Your trusted automotive partner since 2005',
    copyright: '© 2024 Precision Auto Works. All rights reserved.',
    links: [
      { label: 'Services', url: '#menu' },
      { label: 'About', url: '#about' },
      { label: 'Location', url: '#location' },
      { label: 'Appointments', url: '#appointments' },
      { label: 'Careers', url: '#careers' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
    labels: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
    },
  },
};

export default mechanicShopContent;
