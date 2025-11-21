/**
 * BOUTIQUE/RETAIL ASSETS CONFIGURATION
 *
 * This file contains all image paths for a fashion boutique.
 * Update these paths to point to your boutique's images.
 *
 * Recommended images:
 * - High-quality product photography on white or neutral backgrounds
 * - Lifestyle shots showing clothing in context
 * - Boutique interior with elegant displays
 * - Styled lookbook images
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
// BOUTIQUE ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/boutique';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const boutiqueAssets: AssetsConfig = {
  // HERO SECTION
  hero: {
    backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
    logoImage: `${IMAGES_PATH}/hero-logo.png`,
    overlayPattern: `${IMAGES_PATH}/pattern-overlay.png`,
  },

  // ABOUT SECTION
  about: {
    mainImage: `${IMAGES_PATH}/about-owner.jpg`,
    galleryImages: [
      `${IMAGES_PATH}/about-interior.jpg`,
      `${IMAGES_PATH}/about-clothing-rack.jpg`,
      `${IMAGES_PATH}/about-styling.jpg`,
      `${IMAGES_PATH}/about-details.jpg`,
    ],
  },

  // MENU SECTION (Products)
  menu: {
    categoryImages: {
      'new-arrivals': `${IMAGES_PATH}/menu-new-arrivals.jpg`,
      dresses: `${IMAGES_PATH}/menu-dresses.jpg`,
      tops: `${IMAGES_PATH}/menu-tops.jpg`,
      accessories: `${IMAGES_PATH}/menu-accessories.jpg`,
      vintage: `${IMAGES_PATH}/menu-vintage.jpg`,
    },
    itemImages: {
      'linen-dress': `${IMAGES_PATH}/items/linen-dress.jpg`,
      'cashmere-sweater': `${IMAGES_PATH}/items/cashmere-sweater.jpg`,
      'leather-bag': `${IMAGES_PATH}/items/leather-bag.jpg`,
      'vintage-dress': `${IMAGES_PATH}/items/vintage-dress.jpg`,
      'maxi-dress': `${IMAGES_PATH}/items/maxi-dress.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/new-1.jpg`,
        alt: 'Spring collection lookbook',
        category: 'New Arrivals',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/new-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/new-2.jpg`,
        alt: 'Linen dress collection',
        category: 'New Arrivals',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/new-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/new-3.jpg`,
        alt: 'Contemporary accessories',
        category: 'New Arrivals',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/new-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/vintage-1.jpg`,
        alt: '1970s vintage collection',
        category: 'Vintage',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/vintage-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/vintage-2.jpg`,
        alt: 'Vintage blazers and coats',
        category: 'Vintage',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/vintage-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/vintage-3.jpg`,
        alt: 'Vintage jewelry collection',
        category: 'Vintage',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/vintage-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/styled-1.jpg`,
        alt: 'Casual weekend style',
        category: 'Styled Looks',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/styled-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/styled-2.jpg`,
        alt: 'Office-appropriate elegance',
        category: 'Styled Looks',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/styled-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/styled-3.jpg`,
        alt: 'Evening occasion styling',
        category: 'Styled Looks',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/styled-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/store-1.jpg`,
        alt: 'Boutique interior',
        category: 'In Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/store-2.jpg`,
        alt: 'Window display',
        category: 'In Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/store-3.jpg`,
        alt: 'Styling session',
        category: 'In Store',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/store-3.jpg`,
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

export default boutiqueAssets;
