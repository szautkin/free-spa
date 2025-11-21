/**
 * COFFEE SHOP ASSETS CONFIGURATION
 *
 * This file contains all image paths and asset references for the coffee shop application.
 * Modify these paths to point to your actual images.
 *
 * All paths are relative to the public directory
 * Images should be placed in: public/assets/coffee/
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
  engine: string;
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

const ASSETS_BASE_PATH = '/assets/mechanic-shop';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const mechanicShopAssets: AssetsConfig = {
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

  // SERVICES SECTION
  menu: {
    categoryImages: {
      maintenance: `${IMAGES_PATH}/services-maintenance.jpg`,
      brakes: `${IMAGES_PATH}/services-brakes.jpg`,
      engine: `${IMAGES_PATH}/services-engine.jpg`,
      electrical: `${IMAGES_PATH}/services-electrical.jpg`,
      diagnostics: `${IMAGES_PATH}/services-diagnostics.jpg`,
    },
    itemImages: {
      'oil-change': `${IMAGES_PATH}/services/oil-change.jpg`,
      'brake-pads': `${IMAGES_PATH}/services/brake-pads.jpg`,
      'engine-diagnostic': `${IMAGES_PATH}/services/engine-diagnostic.jpg`,
      'battery-test': `${IMAGES_PATH}/services/battery-test.jpg`,
      'pre-purchase': `${IMAGES_PATH}/services/pre-purchase.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/shop-1.jpg`,
        alt: 'Modern service bay with hydraulic lift',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/shop-2.jpg`,
        alt: 'Clean and organized workspace',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/shop-3.jpg`,
        alt: 'Customer waiting area',
        category: 'Shop',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/shop-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/equipment-1.jpg`,
        alt: 'State-of-the-art diagnostic computer',
        category: 'Equipment',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/equipment-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/equipment-2.jpg`,
        alt: 'Professional tool collection',
        category: 'Equipment',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/equipment-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/equipment-3.jpg`,
        alt: 'Hydraulic lift system',
        category: 'Equipment',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/equipment-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/team-1.jpg`,
        alt: 'ASE certified mechanics',
        category: 'Team',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/team-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/team-2.jpg`,
        alt: 'Mechanic explaining service to customer',
        category: 'Team',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/team-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/team-3.jpg`,
        alt: 'Team working together',
        category: 'Team',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/team-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/services-1.jpg`,
        alt: 'Engine diagnostic in progress',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/services-2.jpg`,
        alt: 'Brake system inspection',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/services-3.jpg`,
        alt: 'Oil change service',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-3.jpg`,
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
    engine: `${ICONS_PATH}/engine.svg`,
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

export default mechanicShopAssets;
