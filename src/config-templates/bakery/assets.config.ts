/**
 * BAKERY/PATISSERIE ASSETS CONFIGURATION
 *
 * This file contains all image paths for a bakery.
 * Update these paths to point to your bakery's images.
 *
 * Recommended images:
 * - Close-up shots of fresh bread and pastries
 * - Behind-the-scenes baking process
 * - Display cases with colorful treats
 * - Baker at work shots
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
// BAKERY ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/bakery';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const bakeryAssets: AssetsConfig = {
  // HERO SECTION
  hero: {
    backgroundImage: `${IMAGES_PATH}/hero-background.jpg`,
    logoImage: `${IMAGES_PATH}/hero-logo.png`,
    overlayPattern: `${IMAGES_PATH}/pattern-overlay.png`,
  },

  // ABOUT SECTION
  about: {
    mainImage: `${IMAGES_PATH}/about-baker.jpg`,
    galleryImages: [
      `${IMAGES_PATH}/about-kneading.jpg`,
      `${IMAGES_PATH}/about-oven.jpg`,
      `${IMAGES_PATH}/about-decorating.jpg`,
      `${IMAGES_PATH}/about-storefront.jpg`,
    ],
  },

  // MENU SECTION
  menu: {
    categoryImages: {
      bread: `${IMAGES_PATH}/menu-breads.jpg`,
      pastries: `${IMAGES_PATH}/menu-pastries.jpg`,
      cakes: `${IMAGES_PATH}/menu-cakes.jpg`,
      breakfast: `${IMAGES_PATH}/menu-breakfast.jpg`,
      seasonal: `${IMAGES_PATH}/menu-seasonal.jpg`,
    },
    itemImages: {
      sourdough: `${IMAGES_PATH}/items/sourdough.jpg`,
      croissant: `${IMAGES_PATH}/items/croissant.jpg`,
      'custom-cake': `${IMAGES_PATH}/items/custom-cake.jpg`,
      'cinnamon-roll': `${IMAGES_PATH}/items/cinnamon-roll.jpg`,
      baguette: `${IMAGES_PATH}/items/baguette.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/bread-1.jpg`,
        alt: 'Fresh sourdough loaves',
        category: 'Breads',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bread-1.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/bread-2.jpg`,
        alt: 'Artisan baguettes',
        category: 'Breads',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bread-2.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/bread-3.jpg`,
        alt: 'Variety of fresh breads',
        category: 'Breads',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bread-3.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/pastries-1.jpg`,
        alt: 'Butter croissants',
        category: 'Pastries',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/pastries-1.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/pastries-2.jpg`,
        alt: 'Assorted Danish pastries',
        category: 'Pastries',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/pastries-2.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/pastries-3.jpg`,
        alt: 'Pain au chocolat',
        category: 'Pastries',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/pastries-3.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/cakes-1.jpg`,
        alt: 'Custom birthday cake',
        category: 'Cakes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/cakes-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/cakes-2.jpg`,
        alt: 'Wedding cake display',
        category: 'Cakes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/cakes-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/cakes-3.jpg`,
        alt: 'Fruit tarts',
        category: 'Cakes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/cakes-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/bts-1.jpg`,
        alt: 'Baker kneading dough',
        category: 'Behind the Scenes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bts-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/bts-2.jpg`,
        alt: 'Fresh from the oven',
        category: 'Behind the Scenes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bts-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/bts-3.jpg`,
        alt: 'Decorating a cake',
        category: 'Behind the Scenes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/bts-3.jpg`,
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

export default bakeryAssets;
