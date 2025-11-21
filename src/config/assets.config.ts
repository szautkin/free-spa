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
  coffee: string;
  food: string;
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
// COFFEE SHOP ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/coffee';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const coffeeAssets: AssetsConfig = {
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

  // MENU SECTION
  menu: {
    categoryImages: {
      espresso: `${IMAGES_PATH}/menu-espresso.jpg`,
      brewed: `${IMAGES_PATH}/menu-brewed.jpg`,
      specialty: `${IMAGES_PATH}/menu-specialty.jpg`,
      cold: `${IMAGES_PATH}/menu-cold.jpg`,
      food: `${IMAGES_PATH}/menu-food.jpg`,
    },
    itemImages: {
      latte: `${IMAGES_PATH}/items/latte.jpg`,
      cappuccino: `${IMAGES_PATH}/items/cappuccino.jpg`,
      'pour-over': `${IMAGES_PATH}/items/pour-over.jpg`,
      'cold-brew': `${IMAGES_PATH}/items/cold-brew.jpg`,
      'avocado-toast': `${IMAGES_PATH}/items/avocado-toast.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/coffee-1.jpg`,
        alt: 'Freshly brewed espresso shot',
        category: 'Coffee',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/coffee-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/coffee-2.jpg`,
        alt: 'Latte art pour',
        category: 'Coffee',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/coffee-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/coffee-3.jpg`,
        alt: 'Cold brew on tap',
        category: 'Coffee',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/coffee-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/interior-1.jpg`,
        alt: 'Cozy seating area',
        category: 'Interior',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/interior-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/interior-2.jpg`,
        alt: 'Coffee bar counter',
        category: 'Interior',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/interior-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/interior-3.jpg`,
        alt: 'Window seating',
        category: 'Interior',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/interior-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/food-1.jpg`,
        alt: 'Fresh croissants',
        category: 'Food',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/food-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/food-2.jpg`,
        alt: 'Avocado toast',
        category: 'Food',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/food-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/food-3.jpg`,
        alt: 'Pastry selection',
        category: 'Food',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/food-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/events-1.jpg`,
        alt: 'Coffee tasting event',
        category: 'Events',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/events-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/events-2.jpg`,
        alt: 'Latte art workshop',
        category: 'Events',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/events-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/events-3.jpg`,
        alt: 'Community gathering',
        category: 'Events',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/events-3.jpg`,
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
    coffee: `${ICONS_PATH}/coffee.svg`,
    food: `${ICONS_PATH}/food.svg`,
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

export default coffeeAssets;
