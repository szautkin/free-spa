/**
 * ELECTRICIAN ASSETS CONFIGURATION
 *
 * This file contains all image paths and asset references for the electrician application.
 * Modify these paths to point to your actual images.
 *
 * All paths are relative to the public directory
 * Images should be placed in: public/assets/electrician/
 */

export interface HeroAssets {
  backgroundImage: string;
  logoImage?: string;
  overlayPattern?: string;
}

export interface AboutAssets {
  mainImage: string;
  galleryImages: string[];
}

export interface MenuAssets {
  categoryImages: {
    [key: string]: string;
  };
  itemImages?: {
    [itemId: string]: string;
  };
}

export interface GalleryAssets {
  images: {
    id: string;
    src: string;
    alt: string;
    category: string;
    thumbnail?: string;  // Optional smaller version for grid
  }[];
}

export interface LocationAssets {
  mapImage?: string;
  storeFrontImage?: string;
}

export interface BrandAssets {
  logo: string;
  logoLight: string;  // Light version for dark backgrounds
  logoDark: string;   // Dark version for light backgrounds
  favicon: string;
  socialShareImage: string;  // For social media sharing
}

export interface IconAssets {
  electrical: string;
  residential: string;
  commercial: string;
  emergency: string;
  location: string;
  time: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface AssetsConfig {
  hero: HeroAssets;
  about: AboutAssets;
  menu: MenuAssets;
  gallery: GalleryAssets;
  location: LocationAssets;
  brand: BrandAssets;
  icons: IconAssets;
}

// ========================================
// ELECTRICIAN ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/electrician';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const electricianAssets: AssetsConfig = {
  // HERO SECTION
  hero: {
    backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
    logoImage: `${IMAGES_PATH}/hero-logo.png`,
    overlayPattern: `${IMAGES_PATH}/pattern-overlay.png`,
  },

  // ABOUT SECTION
  about: {
    mainImage: `${IMAGES_PATH}/about-main.jpg`,
    galleryImages: [
      `${IMAGES_PATH}/about-gallery-1.jpg`,
      `${IMAGES_PATH}/about-gallery-2.jpg`,
      `${IMAGES_PATH}/about-gallery-3.jpg`,
      `${IMAGES_PATH}/about-gallery-4.jpg`,
    ],
  },

  // SERVICES SECTION (using "menu" structure)
  menu: {
    categoryImages: {
      residential: `${IMAGES_PATH}/services-residential.jpg`,
      commercial: `${IMAGES_PATH}/services-commercial.jpg`,
      emergency: `${IMAGES_PATH}/services-emergency.jpg`,
      specialty: `${IMAGES_PATH}/services-specialty.jpg`,
    },
    itemImages: {
      'panel-upgrade': `${IMAGES_PATH}/services/panel-upgrade.jpg`,
      'lighting-design': `${IMAGES_PATH}/services/lighting-design.jpg`,
      'commercial-wiring': `${IMAGES_PATH}/services/commercial-wiring.jpg`,
      'power-outage': `${IMAGES_PATH}/services/power-outage.jpg`,
      'ev-charging': `${IMAGES_PATH}/services/ev-charging.jpg`,
      'safety-hazards': `${IMAGES_PATH}/services/safety-hazards.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/residential-1.jpg`,
        alt: 'Modern electrical panel installation',
        category: 'Residential',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/residential-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/residential-2.jpg`,
        alt: 'Kitchen lighting installation',
        category: 'Residential',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/residential-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/residential-3.jpg`,
        alt: 'Outdoor landscape lighting',
        category: 'Residential',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/residential-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/commercial-1.jpg`,
        alt: 'Commercial building electrical work',
        category: 'Commercial',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/commercial-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/commercial-2.jpg`,
        alt: 'Office lighting retrofit',
        category: 'Commercial',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/commercial-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/commercial-3.jpg`,
        alt: 'Parking lot lighting installation',
        category: 'Commercial',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/commercial-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/emergency-1.jpg`,
        alt: 'Emergency electrical repair',
        category: 'Emergency Repairs',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/emergency-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/emergency-2.jpg`,
        alt: 'Storm damage electrical repair',
        category: 'Emergency Repairs',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/emergency-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/emergency-3.jpg`,
        alt: 'After-hours emergency service',
        category: 'Emergency Repairs',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/emergency-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/install-1.jpg`,
        alt: 'EV charging station installation',
        category: 'Installations',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/install-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/install-2.jpg`,
        alt: 'Backup generator installation',
        category: 'Installations',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/install-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/install-3.jpg`,
        alt: 'Smart home system wiring',
        category: 'Installations',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/install-3.jpg`,
      },
    ],
  },

  // LOCATION SECTION
  location: {
    mapImage: `${IMAGES_PATH}/location-map.jpg`,
    storeFrontImage: `${IMAGES_PATH}/storefront.jpg`,
  },

  // BRAND ASSETS
  brand: {
    logo: `${IMAGES_PATH}/logo.png`,
    logoLight: `${IMAGES_PATH}/logo-light.png`,
    logoDark: `${IMAGES_PATH}/logo-dark.png`,
    favicon: `${IMAGES_PATH}/favicon.png`,
    socialShareImage: `${IMAGES_PATH}/social-share.jpg`,
  },

  // ICON ASSETS
  icons: {
    electrical: `${ICONS_PATH}/electrical.svg`,
    residential: `${ICONS_PATH}/residential.svg`,
    commercial: `${ICONS_PATH}/commercial.svg`,
    emergency: `${ICONS_PATH}/emergency.svg`,
    location: `${ICONS_PATH}/location.svg`,
    time: `${ICONS_PATH}/time.svg`,
    phone: `${ICONS_PATH}/phone.svg`,
    email: `${ICONS_PATH}/email.svg`,
    instagram: `${ICONS_PATH}/instagram.svg`,
    facebook: `${ICONS_PATH}/facebook.svg`,
    twitter: `${ICONS_PATH}/twitter.svg`,
  },
};

/**
 * Helper function to get an image path
 * This allows for easier switching between development and production
 */
export const getImagePath = (path: string): string => {
  // In production, you might want to use a CDN
  // Use bracket notation to access env variable to satisfy TypeScript index signature requirements
  const CDN_URL = import.meta.env['VITE_CDN_URL'] || '';
  return CDN_URL ? `${CDN_URL}${path}` : path;
};

/**
 * Helper function to check if an image exists
 * Useful for providing fallbacks
 */
export const hasImage = (path: string): boolean => {
  // This is a simple check - in production you might want to do actual validation
  return path !== '' && path !== null && path !== undefined;
};

/**
 * Get a fallback image if the primary image doesn't exist
 */
export const getImageWithFallback = (
  primaryPath: string,
  fallbackPath: string = `${IMAGES_PATH}/placeholder.jpg`
): string => {
  return hasImage(primaryPath) ? getImagePath(primaryPath) : getImagePath(fallbackPath);
};

export default electricianAssets;
