/**
 * MECHANIC SHOP ASSETS CONFIGURATION
 *
 * This file contains all image paths and asset references for the mechanic shop application.
 * Modify these paths to point to your actual images.
 *
 * All paths are relative to the public directory
 * Images should be placed in: public/assets/mechanic/
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
  wrench: string;
  car: string;
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
// MECHANIC SHOP ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/mechanic';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const mechanicAssets: AssetsConfig = {
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

  // SERVICES SECTION (using menu structure)
  menu: {
    categoryImages: {
      maintenance: `${IMAGES_PATH}/service-maintenance.jpg`,
      repairs: `${IMAGES_PATH}/service-repairs.jpg`,
      brakes: `${IMAGES_PATH}/service-brakes.jpg`,
      engine: `${IMAGES_PATH}/service-engine.jpg`,
      specialty: `${IMAGES_PATH}/service-specialty.jpg`,
    },
    itemImages: {
      'oil-change': `${IMAGES_PATH}/services/oil-change.jpg`,
      'brake-pads': `${IMAGES_PATH}/services/brake-service.jpg`,
      'diagnostics': `${IMAGES_PATH}/services/diagnostics.jpg`,
      'pre-purchase': `${IMAGES_PATH}/services/inspection.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/shop-exterior.jpg`,
        alt: 'Precision Auto Care shop exterior',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-exterior.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/shop-interior.jpg`,
        alt: 'Modern service bays',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-interior.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/shop-tools.jpg`,
        alt: 'State-of-the-art diagnostic equipment',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-tools.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/service-brake.jpg`,
        alt: 'Brake service in progress',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/service-brake.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/service-engine.jpg`,
        alt: 'Engine diagnostic work',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/service-engine.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/service-oil.jpg`,
        alt: 'Oil change service',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/service-oil.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/service-tire.jpg`,
        alt: 'Tire service and rotation',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/service-tire.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/service-diagnostic.jpg`,
        alt: 'Computer diagnostic scan',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/service-diagnostic.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/team-1.jpg`,
        alt: 'Our ASE certified technicians',
        category: 'Team',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/team-1.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/team-2.jpg`,
        alt: 'Expert mechanics at work',
        category: 'Team',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/team-2.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/customer-1.jpg`,
        alt: 'Customer vehicle - SUV service',
        category: 'Customer Cars',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/customer-1.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/customer-2.jpg`,
        alt: 'Customer vehicle - Sedan maintenance',
        category: 'Customer Cars',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/customer-2.jpg`,
      },
      {
        id: 'gallery-13',
        src: `${IMAGES_PATH}/gallery/customer-3.jpg`,
        alt: 'Customer vehicle - Truck repair',
        category: 'Customer Cars',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/customer-3.jpg`,
      },
      {
        id: 'gallery-14',
        src: `${IMAGES_PATH}/gallery/customer-4.jpg`,
        alt: 'Customer vehicle - Sports car service',
        category: 'Customer Cars',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/customer-4.jpg`,
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
    wrench: `${ICONS_PATH}/wrench.svg`,
    car: `${ICONS_PATH}/car.svg`,
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

export default mechanicAssets;
