/**
 * FINE DINING RESTAURANT ASSETS CONFIGURATION
 *
 * This file contains all image paths for a fine dining restaurant.
 * Update these paths to point to your restaurant's images.
 *
 * Recommended images:
 * - Professional food photography with elegant plating
 * - Ambient interior shots showcasing atmosphere
 * - Wine cellar and bar areas
 * - Chef and team photos
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
    thumbnail?: string;
  }[];
}

export interface LocationAssets {
  mapImage?: string;
  storeFrontImage?: string;
}

export interface BrandAssets {
  logo: string;
  logoLight: string;
  logoDark: string;
  favicon: string;
  socialShareImage: string;
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
// RESTAURANT ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/restaurant';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const restaurantAssets: AssetsConfig = {
  // HERO SECTION
  hero: {
    backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
    logoImage: `${IMAGES_PATH}/hero-logo.png`,
    overlayPattern: `${IMAGES_PATH}/pattern-overlay.png`,
  },

  // ABOUT SECTION
  about: {
    mainImage: `${IMAGES_PATH}/about-chef.jpg`,
    galleryImages: [
      `${IMAGES_PATH}/about-kitchen.jpg`,
      `${IMAGES_PATH}/about-dining-room.jpg`,
      `${IMAGES_PATH}/about-wine-cellar.jpg`,
      `${IMAGES_PATH}/about-plating.jpg`,
    ],
  },

  // MENU SECTION
  menu: {
    categoryImages: {
      appetizers: `${IMAGES_PATH}/menu-appetizers.jpg`,
      entrees: `${IMAGES_PATH}/menu-entrees.jpg`,
      desserts: `${IMAGES_PATH}/menu-desserts.jpg`,
      wine: `${IMAGES_PATH}/menu-wine.jpg`,
      tasting: `${IMAGES_PATH}/menu-tasting.jpg`,
    },
    itemImages: {
      'foie-gras': `${IMAGES_PATH}/items/foie-gras.jpg`,
      duck: `${IMAGES_PATH}/items/duck-breast.jpg`,
      lobster: `${IMAGES_PATH}/items/lobster-thermidor.jpg`,
      souffle: `${IMAGES_PATH}/items/souffle.jpg`,
      'tasting-7': `${IMAGES_PATH}/items/tasting-menu.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/dish-1.jpg`,
        alt: 'Seared foie gras with fig compote',
        category: 'Dishes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/dish-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/dish-2.jpg`,
        alt: 'Roasted duck breast',
        category: 'Dishes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/dish-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/dish-3.jpg`,
        alt: 'Butter-poached halibut',
        category: 'Dishes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/dish-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/dish-4.jpg`,
        alt: 'Grand Marnier soufflé',
        category: 'Dishes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/dish-4.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/ambiance-1.jpg`,
        alt: 'Elegant dining room',
        category: 'Ambiance',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/ambiance-1.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/ambiance-2.jpg`,
        alt: 'Intimate table setting',
        category: 'Ambiance',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/ambiance-2.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/ambiance-3.jpg`,
        alt: 'Candlelit atmosphere',
        category: 'Ambiance',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/ambiance-3.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/wine-1.jpg`,
        alt: 'Wine cellar',
        category: 'Wine',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/wine-1.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/wine-2.jpg`,
        alt: 'Wine pairing service',
        category: 'Wine',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/wine-2.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/wine-3.jpg`,
        alt: 'Sommelier selection',
        category: 'Wine',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/wine-3.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/events-1.jpg`,
        alt: 'Private dining event',
        category: 'Events',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/events-1.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/events-2.jpg`,
        alt: 'Chef\'s table experience',
        category: 'Events',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/events-2.jpg`,
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

export const getImagePath = (path: string): string => {
  // Use bracket notation to access env variable to satisfy TypeScript index signature requirements
  const CDN_URL = import.meta.env['VITE_CDN_URL'] || '';
  return CDN_URL ? `${CDN_URL}${path}` : path;
};

export const hasImage = (path: string): boolean => {
  return path !== '' && path !== null && path !== undefined;
};

export const getImageWithFallback = (
  primaryPath: string,
  fallbackPath: string = `${IMAGES_PATH}/placeholder.jpg`
): string => {
  return hasImage(primaryPath) ? getImagePath(primaryPath) : getImagePath(fallbackPath);
};

export default restaurantAssets;
