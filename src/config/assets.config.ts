/**
 * LOCAL STORE ASSETS CONFIGURATION
 *
 * This file contains all image paths and asset references for the local store application.
 * Modify these paths to point to your actual images.
 *
 * All paths are relative to the public directory
 * Images should be placed in: public/assets/local-store/
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
  store: string;
  products: string;
  location: string;
  time: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
  delivery: string;
  local: string;
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
// LOCAL STORE ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/local-store';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const localStoreAssets: AssetsConfig = {
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

  // MENU SECTION (Products)
  menu: {
    categoryImages: {
      essentials: `${IMAGES_PATH}/menu-essentials.jpg`,
      'local-artisan': `${IMAGES_PATH}/menu-local-artisan.jpg`,
      fresh: `${IMAGES_PATH}/menu-fresh.jpg`,
      services: `${IMAGES_PATH}/menu-services.jpg`,
    },
    itemImages: {
      'local-honey': `${IMAGES_PATH}/items/local-honey.jpg`,
      'artisan-jams': `${IMAGES_PATH}/items/artisan-jams.jpg`,
      'seasonal-produce': `${IMAGES_PATH}/items/seasonal-produce.jpg`,
      'dairy-eggs': `${IMAGES_PATH}/items/dairy-eggs.jpg`,
      'baked-goods': `${IMAGES_PATH}/items/baked-goods.jpg`,
      'gift-baskets': `${IMAGES_PATH}/items/gift-baskets.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/store-1.jpg`,
        alt: 'Store interior with welcoming atmosphere',
        category: 'Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/store-2.jpg`,
        alt: 'Product aisles with local goods',
        category: 'Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/store-3.jpg`,
        alt: 'Checkout counter with friendly service',
        category: 'Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/products-1.jpg`,
        alt: 'Fresh produce display',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/products-2.jpg`,
        alt: 'Local artisan products',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/products-3.jpg`,
        alt: 'Daily essentials section',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/artisans-1.jpg`,
        alt: 'Local honey and preserves',
        category: 'Local Artisans',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/artisans-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/artisans-2.jpg`,
        alt: 'Handcrafted baked goods',
        category: 'Local Artisans',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/artisans-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/artisans-3.jpg`,
        alt: 'Artisan crafts and gifts',
        category: 'Local Artisans',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/artisans-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/community-1.jpg`,
        alt: 'Community bulletin board',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/community-2.jpg`,
        alt: 'Local event gathering',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/community-3.jpg`,
        alt: 'Neighbors shopping together',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-3.jpg`,
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
    store: `${ICONS_PATH}/store.svg`,
    products: `${ICONS_PATH}/products.svg`,
    location: `${ICONS_PATH}/location.svg`,
    time: `${ICONS_PATH}/time.svg`,
    phone: `${ICONS_PATH}/phone.svg`,
    email: `${ICONS_PATH}/email.svg`,
    instagram: `${ICONS_PATH}/instagram.svg`,
    facebook: `${ICONS_PATH}/facebook.svg`,
    twitter: `${ICONS_PATH}/twitter.svg`,
    delivery: `${ICONS_PATH}/delivery.svg`,
    local: `${ICONS_PATH}/local.svg`,
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

export default localStoreAssets;
