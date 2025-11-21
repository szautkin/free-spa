/**
 * SALON/SPA ASSETS CONFIGURATION
 *
 * This file contains all image paths for a salon and spa.
 * Update these paths to point to your spa's images.
 *
 * Recommended images:
 * - Calming treatment room photos
 * - Professional service photos showing treatments
 * - Serene spa atmosphere shots
 * - Product displays
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
// SALON/SPA ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/salon';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const salonAssets: AssetsConfig = {
  // HERO SECTION
  hero: {
    backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
    logoImage: `${IMAGES_PATH}/hero-logo.png`,
    overlayPattern: `${IMAGES_PATH}/pattern-overlay.png`,
  },

  // ABOUT SECTION
  about: {
    mainImage: `${IMAGES_PATH}/about-spa-room.jpg`,
    galleryImages: [
      `${IMAGES_PATH}/about-therapist.jpg`,
      `${IMAGES_PATH}/about-relaxation-area.jpg`,
      `${IMAGES_PATH}/about-treatment.jpg`,
      `${IMAGES_PATH}/about-products.jpg`,
    ],
  },

  // MENU SECTION (Services)
  menu: {
    categoryImages: {
      hair: `${IMAGES_PATH}/menu-hair.jpg`,
      skincare: `${IMAGES_PATH}/menu-skincare.jpg`,
      massage: `${IMAGES_PATH}/menu-massage.jpg`,
      body: `${IMAGES_PATH}/menu-body.jpg`,
      packages: `${IMAGES_PATH}/menu-packages.jpg`,
    },
    itemImages: {
      'color-full': `${IMAGES_PATH}/items/hair-color.jpg`,
      'anti-aging': `${IMAGES_PATH}/items/facial.jpg`,
      'deep-tissue': `${IMAGES_PATH}/items/massage.jpg`,
      'signature-package': `${IMAGES_PATH}/items/spa-package.jpg`,
      'hot-stone': `${IMAGES_PATH}/items/hot-stone.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/treatment-1.jpg`,
        alt: 'Massage treatment room',
        category: 'Treatment Rooms',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/treatment-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/treatment-2.jpg`,
        alt: 'Facial treatment room',
        category: 'Treatment Rooms',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/treatment-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/treatment-3.jpg`,
        alt: 'Couples massage suite',
        category: 'Treatment Rooms',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/treatment-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/services-1.jpg`,
        alt: 'Facial treatment in progress',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/services-2.jpg`,
        alt: 'Hot stone massage',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/services-3.jpg`,
        alt: 'Hair color application',
        category: 'Services',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/services-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/relaxation-1.jpg`,
        alt: 'Waiting lounge',
        category: 'Relaxation Areas',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/relaxation-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/relaxation-2.jpg`,
        alt: 'Meditation garden',
        category: 'Relaxation Areas',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/relaxation-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/relaxation-3.jpg`,
        alt: 'Tea lounge',
        category: 'Relaxation Areas',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/relaxation-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/products-1.jpg`,
        alt: 'Skincare product line',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/products-2.jpg`,
        alt: 'Essential oils collection',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/products-3.jpg`,
        alt: 'Retail display',
        category: 'Products',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/products-3.jpg`,
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

export default salonAssets;
