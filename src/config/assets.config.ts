/**
 * YOGA STUDIO ASSETS CONFIGURATION
 *
 * This file contains all image paths and asset references for the yoga studio application.
 * Modify these paths to point to your actual images.
 *
 * All paths are relative to the public directory
 * Images should be placed in: public/assets/yoga/
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

export interface ClassesAssets {
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
  studioFrontImage?: string;
}

export interface BrandAssets {
  logo: string;
  logoLight: string;  // Light version for dark backgrounds
  logoDark: string;   // Dark version for light backgrounds
  favicon: string;
  socialShareImage: string;  // For social media sharing
}

export interface IconAssets {
  yoga: string;
  meditation: string;
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
  classes: ClassesAssets;
  gallery: GalleryAssets;
  location: LocationAssets;
  brand: BrandAssets;
  icons: IconAssets;
}

// ========================================
// YOGA STUDIO ASSETS PATHS
// ========================================

const ASSETS_BASE_PATH = '/assets/yoga';
const IMAGES_PATH = `${ASSETS_BASE_PATH}/images`;
const ICONS_PATH = `${ASSETS_BASE_PATH}/icons`;

export const yogaAssets: AssetsConfig = {
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

  // CLASSES SECTION
  classes: {
    categoryImages: {
      flow: `${IMAGES_PATH}/classes-flow.jpg`,
      restorative: `${IMAGES_PATH}/classes-restorative.jpg`,
      mindfulness: `${IMAGES_PATH}/classes-mindfulness.jpg`,
      specialty: `${IMAGES_PATH}/classes-specialty.jpg`,
    },
    itemImages: {
      'vinyasa-flow': `${IMAGES_PATH}/classes/vinyasa-flow.jpg`,
      'power-yoga': `${IMAGES_PATH}/classes/power-yoga.jpg`,
      'hatha-fundamentals': `${IMAGES_PATH}/classes/hatha-fundamentals.jpg`,
      'yin-yoga': `${IMAGES_PATH}/classes/yin-yoga.jpg`,
      'restorative': `${IMAGES_PATH}/classes/restorative.jpg`,
      'yoga-nidra': `${IMAGES_PATH}/classes/yoga-nidra.jpg`,
      'pranayama': `${IMAGES_PATH}/classes/pranayama.jpg`,
      'sound-healing': `${IMAGES_PATH}/classes/sound-healing.jpg`,
    },
  },

  // GALLERY SECTION
  gallery: {
    images: [
      {
        id: 'gallery-1',
        src: `${IMAGES_PATH}/gallery/studio-main.jpg`,
        alt: 'Main yoga studio space with natural light',
        category: 'Studio',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/studio-main.jpg`,
      },
      {
        id: 'gallery-2',
        src: `${IMAGES_PATH}/gallery/studio-props.jpg`,
        alt: 'Yoga props and equipment',
        category: 'Studio',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/studio-props.jpg`,
      },
      {
        id: 'gallery-3',
        src: `${IMAGES_PATH}/gallery/studio-meditation.jpg`,
        alt: 'Meditation corner with cushions',
        category: 'Studio',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/studio-meditation.jpg`,
      },
      {
        id: 'gallery-4',
        src: `${IMAGES_PATH}/gallery/class-vinyasa.jpg`,
        alt: 'Students in vinyasa flow class',
        category: 'Classes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/class-vinyasa.jpg`,
      },
      {
        id: 'gallery-5',
        src: `${IMAGES_PATH}/gallery/class-meditation.jpg`,
        alt: 'Meditation class in session',
        category: 'Classes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/class-meditation.jpg`,
      },
      {
        id: 'gallery-6',
        src: `${IMAGES_PATH}/gallery/class-restorative.jpg`,
        alt: 'Restorative yoga with props',
        category: 'Classes',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/class-restorative.jpg`,
      },
      {
        id: 'gallery-7',
        src: `${IMAGES_PATH}/gallery/community-1.jpg`,
        alt: 'Yoga community gathering',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-1.jpg`,
      },
      {
        id: 'gallery-8',
        src: `${IMAGES_PATH}/gallery/community-2.jpg`,
        alt: 'Students connecting after class',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-2.jpg`,
      },
      {
        id: 'gallery-9',
        src: `${IMAGES_PATH}/gallery/community-3.jpg`,
        alt: 'Tea and conversation area',
        category: 'Community',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/community-3.jpg`,
      },
      {
        id: 'gallery-10',
        src: `${IMAGES_PATH}/gallery/workshop-1.jpg`,
        alt: 'Yoga philosophy workshop',
        category: 'Workshops',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/workshop-1.jpg`,
      },
      {
        id: 'gallery-11',
        src: `${IMAGES_PATH}/gallery/workshop-2.jpg`,
        alt: 'Sound healing workshop',
        category: 'Workshops',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/workshop-2.jpg`,
      },
      {
        id: 'gallery-12',
        src: `${IMAGES_PATH}/gallery/workshop-3.jpg`,
        alt: 'Advanced practice workshop',
        category: 'Workshops',
        thumbnail: `${IMAGES_PATH}/gallery/thumbs/workshop-3.jpg`,
      },
    ],
  },

  // LOCATION SECTION
  location: {
    mapImage: `${IMAGES_PATH}/location-map.jpg`,
    studioFrontImage: `${IMAGES_PATH}/studio-front.jpg`,
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
    yoga: `${ICONS_PATH}/yoga.svg`,
    meditation: `${ICONS_PATH}/meditation.svg`,
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

// Also export as coffeeAssets for backwards compatibility with existing imports
export const coffeeAssets = yogaAssets;

export default yogaAssets;
