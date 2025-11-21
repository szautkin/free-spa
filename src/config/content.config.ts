/**
 * LOCAL STORE CONTENT CONFIGURATION
 *
 * This file contains all text content, labels, and copy for the local store application.
 * Modify these values to customize all text throughout the site.
 *
 * Supports bilingual content (EN/FR) - see content.config.en.ts and content.config.fr.ts
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
  tags?: string[];  // e.g., 'local', 'fresh', 'handmade', 'seasonal'
}

export interface MenuContent {
  sectionTitle: string;
  subtitle?: string;
  featuredTitle?: string;
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
  heading?: string;
  subtitle?: string;
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

// Import English content as default
import { localStoreContentEN } from './content.config.en';

// Export as localStoreContent for consistency with other templates
export const localStoreContent: ContentConfig = localStoreContentEN;

export default localStoreContent;
