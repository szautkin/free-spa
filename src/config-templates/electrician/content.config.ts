/**
 * ELECTRICIAN CONTENT CONFIGURATION
 *
 * This file contains all text content, labels, and copy for the electrician application.
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

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
  tags?: string[];  // e.g., 'emergency', 'residential', 'commercial'
}

export interface MenuContent {
  sectionTitle: string;
  categories: {
    id: string;
    name: string;
    description: string;
  }[];
  items: ServiceItem[];
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
// ELECTRICIAN CONTENT
// ========================================

export const electricianContent: ContentConfig = {
  // SITE METADATA
  metadata: {
    siteName: 'PowerPro Electric',
    siteDescription: 'Your trusted local electrician serving the community with professional electrical services, emergency repairs, and installations for over 15 years.',
    siteUrl: 'https://powerproelectric.local',
    keywords: [
      'electrician',
      'electrical services',
      'local electrician',
      'emergency electrician',
      'residential electrician',
      'commercial electrician',
      'electrical repairs',
      'electrical installation',
      'licensed electrician',
      'electrical contractor',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'PowerPro Electric',
    subtitle: 'Your Trusted Local Electrical Experts',
    tagline: 'Professional electrical services you can count on - licensed, insured, and committed to excellence since 2009',
    ctaButtons: {
      primary: {
        text: 'View Services',
        link: '#services',
      },
      secondary: {
        text: 'Emergency Service',
        link: '#contact',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'About Us',
    heading: 'Powering Your Community Since 2009',
    story: [
      'At PowerPro Electric, we\'re more than just electricians—we\'re your neighbors. For over 15 years, we\'ve been proudly serving our local community with reliable, professional electrical services that keep homes and businesses running safely and efficiently.',
      'What started as a one-man operation has grown into a trusted team of licensed master electricians and certified technicians. But our commitment remains the same: treat every project with the care and attention we\'d give our own home. We understand that electrical issues can be stressful, which is why we prioritize clear communication, transparent pricing, and workmanship that exceeds code requirements.',
      'Whether it\'s an emergency repair at midnight or a planned renovation, we bring the same dedication to quality and safety. Our deep roots in this community mean your satisfaction isn\'t just good business—it\'s personal. When you choose PowerPro Electric, you\'re choosing a partner who genuinely cares about keeping your property safe and your lights on.',
    ],
    highlights: [
      {
        title: 'Licensed & Insured',
        description: 'Fully licensed master electricians with comprehensive insurance coverage',
      },
      {
        title: '24/7 Emergency Service',
        description: 'Available day or night for urgent electrical emergencies',
      },
      {
        title: 'Local Expertise',
        description: 'Deep knowledge of local codes and community electrical needs',
      },
      {
        title: 'Quality Guaranteed',
        description: 'All work backed by our comprehensive satisfaction guarantee',
      },
    ],
  },

  // SERVICES SECTION (using "menu" structure from template)
  menu: {
    sectionTitle: 'Our Services',
    categories: [
      {
        id: 'residential',
        name: 'Residential Services',
        description: 'Complete electrical solutions for your home',
      },
      {
        id: 'commercial',
        name: 'Commercial Services',
        description: 'Professional electrical work for businesses',
      },
      {
        id: 'emergency',
        name: 'Emergency Services',
        description: 'Fast response for urgent electrical issues',
      },
      {
        id: 'specialty',
        name: 'Specialty Services',
        description: 'Advanced electrical installations and upgrades',
      },
    ],
    items: [
      // Residential Services
      {
        id: 'panel-upgrade',
        name: 'Electrical Panel Upgrade',
        description: 'Modernize your electrical panel for improved safety and capacity',
        price: 'Starting at $1,200',
        category: 'residential',
        featured: true,
        tags: ['residential', 'upgrade'],
      },
      {
        id: 'outlet-installation',
        name: 'Outlet & Switch Installation',
        description: 'Install new outlets, switches, and USB charging stations',
        price: 'From $95',
        category: 'residential',
        tags: ['residential'],
      },
      {
        id: 'lighting-design',
        name: 'Interior & Exterior Lighting',
        description: 'Professional lighting design and installation services',
        price: 'Custom Quote',
        category: 'residential',
        featured: true,
        tags: ['residential'],
      },
      {
        id: 'home-rewiring',
        name: 'Complete Home Rewiring',
        description: 'Safe, code-compliant rewiring for older homes',
        price: 'Starting at $3,500',
        category: 'residential',
        tags: ['residential', 'upgrade'],
      },

      // Commercial Services
      {
        id: 'commercial-wiring',
        name: 'Commercial Wiring',
        description: 'New construction and tenant improvement electrical work',
        price: 'Custom Quote',
        category: 'commercial',
        featured: true,
        tags: ['commercial'],
      },
      {
        id: 'led-retrofit',
        name: 'LED Lighting Retrofit',
        description: 'Energy-efficient LED upgrades for business facilities',
        price: 'Starting at $500',
        category: 'commercial',
        tags: ['commercial', 'energy-efficient'],
      },
      {
        id: 'maintenance-contracts',
        name: 'Maintenance Contracts',
        description: 'Scheduled preventive maintenance for commercial properties',
        price: 'From $200/month',
        category: 'commercial',
        tags: ['commercial'],
      },
      {
        id: 'parking-lighting',
        name: 'Parking Lot Lighting',
        description: 'Installation and repair of outdoor commercial lighting',
        price: 'Custom Quote',
        category: 'commercial',
        tags: ['commercial'],
      },

      // Emergency Services
      {
        id: 'power-outage',
        name: 'Power Outage Repairs',
        description: 'Fast diagnosis and repair of electrical outages',
        price: '$150 service call + repairs',
        category: 'emergency',
        featured: true,
        tags: ['emergency', '24/7'],
      },
      {
        id: 'electrical-fire-damage',
        name: 'Electrical Fire & Surge Damage',
        description: 'Emergency repairs after electrical fires or power surges',
        price: 'Emergency Rate',
        category: 'emergency',
        tags: ['emergency', '24/7'],
      },
      {
        id: 'safety-hazards',
        name: 'Safety Hazard Response',
        description: 'Immediate response to sparking outlets, burning smells, etc.',
        price: '$150 service call + repairs',
        category: 'emergency',
        featured: true,
        tags: ['emergency', '24/7'],
      },

      // Specialty Services
      {
        id: 'ev-charging',
        name: 'EV Charging Station Installation',
        description: 'Professional installation of home EV charging stations',
        price: 'Starting at $800',
        category: 'specialty',
        featured: true,
        tags: ['specialty', 'eco-friendly'],
      },
      {
        id: 'generator-installation',
        name: 'Backup Generator Installation',
        description: 'Whole-house generator installation and service',
        price: 'Starting at $4,500',
        category: 'specialty',
        tags: ['specialty'],
      },
      {
        id: 'smart-home',
        name: 'Smart Home Integration',
        description: 'Electrical work for smart home automation systems',
        price: 'Custom Quote',
        category: 'specialty',
        tags: ['specialty', 'modern'],
      },
      {
        id: 'solar-prep',
        name: 'Solar Panel Electrical Prep',
        description: 'Electrical system preparation for solar panel installation',
        price: 'Starting at $1,500',
        category: 'specialty',
        tags: ['specialty', 'eco-friendly'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Work',
    subtitle: 'See the quality and professionalism we bring to every project',
    categories: ['All', 'Residential', 'Commercial', 'Emergency Repairs', 'Installations'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Contact Us',
    address: {
      street: '456 Electric Avenue',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      country: 'USA',
    },
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Emergency Service Only',
    },
    contact: {
      phone: '(555) 789-WIRE',
      email: 'service@powerproelectric.local',
      social: {
        instagram: 'https://instagram.com/powerproelectric',
        facebook: 'https://facebook.com/powerproelectric',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Electric+Avenue+Springfield+IL',
  },

  // FOOTER
  footer: {
    businessName: 'PowerPro Electric',
    tagline: 'Powering your community since 2009',
    copyright: '© 2024 PowerPro Electric. All rights reserved. Licensed & Insured.',
    links: [
      { label: 'Services', url: '#services' },
      { label: 'About', url: '#about' },
      { label: 'Gallery', url: '#gallery' },
      { label: 'Contact', url: '#contact' },
      { label: 'Emergency Service', url: '#emergency' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

export default electricianContent;
