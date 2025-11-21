/**
 * YOGA STUDIO CONTENT CONFIGURATION
 *
 * This file contains all text content, labels, and copy for the yoga studio application.
 * Modify these values to customize all text throughout the site.
 *
 * Supports simple string replacement for easy customization
 */

export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  ctaButtons: {
    primary: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
}

export interface AboutContent {
  sectionTitle: string;
  heading: string;
  story: string[];  // Array of paragraphs
  highlights: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface ClassItem {
  id: string;
  name: string;
  description: string;
  duration: string;  // For yoga: "60 min", for coffee: could be used differently
  price?: string;    // Optional for coffee compatibility
  level: string;
  category: string;
  featured?: boolean;
  tags?: string[];  // e.g., 'beginner', 'intermediate', 'advanced', 'all-levels'
}

// Alias for backwards compatibility
export type MenuItem = ClassItem;

export interface ClassesContent {
  sectionTitle: string;
  subtitle?: string;  // Optional subtitle for menu section
  featuredTitle?: string;  // Optional featured section title
  categories: {
    id: string;
    name: string;
    description: string;
  }[];
  items: ClassItem[];
}

// Alias for backwards compatibility
export type MenuContent = ClassesContent;

export interface GalleryContent {
  sectionTitle: string;
  subtitle: string;
  categories: string[];
}

export interface LocationContent {
  sectionTitle: string;
  heading?: string;      // Optional heading for location section
  subtitle?: string;     // Optional subtitle for location section
  labels?: {            // Optional UI labels
    address?: string;
    hours?: string;
    contact?: string;
    phone?: string;
    email?: string;
    findUs?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    phone: string;
    email: string;
    social: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
  };
  mapUrl?: string;
}

export interface FooterContent {
  businessName: string;
  tagline: string;
  copyright: string;
  labels?: {            // Optional UI labels
    followUs?: string;
    quickLinks?: string;
  };
  links: {
    label: string;
    url: string;
  }[];
}

export interface SiteMetadata {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  keywords: string[];
}

export interface ContentConfig {
  metadata: SiteMetadata;
  hero: HeroContent;
  about: AboutContent;
  classes: ClassesContent;
  menu?: ClassesContent;  // Alias for backwards compatibility (menu = classes)
  gallery: GalleryContent;
  location: LocationContent;
  footer: FooterContent;
}

// ========================================
// YOGA STUDIO CONTENT
// ========================================

const yogaContentBase = {
  // SITE METADATA
  metadata: {
    siteName: 'Serenity Flow Yoga Studio',
    siteDescription: 'A welcoming neighborhood yoga sanctuary offering mindful movement, meditation, and holistic wellness practices for all levels in the heart of our community.',
    siteUrl: 'https://serenityflow.yoga',
    keywords: [
      'yoga studio',
      'yoga classes',
      'meditation',
      'mindfulness',
      'wellness',
      'vinyasa',
      'hatha',
      'yin yoga',
      'yoga therapy',
      'breathwork',
      'local yoga',
    ],
  },

  // HERO SECTION
  hero: {
    title: 'Serenity Flow Yoga',
    subtitle: 'Find Your Balance, Embrace Your Journey',
    tagline: 'A welcoming sanctuary where ancient wisdom meets modern practice',
    ctaButtons: {
      primary: {
        text: 'Explore Classes',
        link: '#classes',
      },
      secondary: {
        text: 'Visit Our Studio',
        link: '#location',
      },
    },
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'Our Story',
    heading: 'Rooted in Community, Growing Together Since 2019',
    story: [
      'Serenity Flow Yoga was born from a simple vision: to create a space where everyone—regardless of experience, flexibility, or background—feels welcomed to explore the transformative practice of yoga. Founded by local practitioners who fell in love with yoga\'s power to heal and connect, we\'ve become a cherished gathering place for our neighborhood.',
      'What makes us unique is our commitment to authenticity and accessibility. We honor the ancient traditions of yoga while making them relevant for modern life. Our teachers aren\'t just instructors—they\'re lifelong students, each bringing their own unique journey and expertise to create a rich, diverse teaching community.',
      'Beyond the mat, we\'re dedicated to fostering genuine connection. Whether you\'re seeking stress relief, physical strength, spiritual growth, or simply a peaceful hour in your day, you\'ll find a supportive community here. We believe yoga is not about perfection—it\'s about showing up, breathing deeply, and honoring exactly where you are.',
    ],
    highlights: [
      {
        title: 'All Levels Welcome',
        description: 'From curious beginners to seasoned practitioners, everyone finds their place here',
      },
      {
        title: 'Experienced Teachers',
        description: 'Certified instructors with diverse backgrounds and specialized training',
      },
      {
        title: 'Holistic Approach',
        description: 'We nurture body, mind, and spirit through mindful movement and meditation',
      },
      {
        title: 'Community Centered',
        description: 'More than a studio—a welcoming space for connection and growth',
      },
    ],
  },

  // CLASSES SECTION
  classes: {
    sectionTitle: 'Our Classes',
    categories: [
      {
        id: 'flow',
        name: 'Dynamic Flow',
        description: 'Energizing vinyasa and hatha classes to build strength and flexibility',
      },
      {
        id: 'restorative',
        name: 'Restorative & Yin',
        description: 'Gentle, meditative practices for deep relaxation and healing',
      },
      {
        id: 'mindfulness',
        name: 'Meditation & Breathwork',
        description: 'Cultivate inner peace through pranayama and guided meditation',
      },
      {
        id: 'specialty',
        name: 'Workshops & Specialty',
        description: 'Deepen your practice with specialized workshops and unique offerings',
      },
    ],
    items: [
      // Dynamic Flow
      {
        id: 'vinyasa-flow',
        name: 'Vinyasa Flow',
        description: 'Dynamic flowing sequences synchronized with breath, building heat and strength',
        duration: '60 min',
        level: 'All Levels',
        category: 'flow',
        featured: true,
        tags: ['all-levels', 'energizing'],
      },
      {
        id: 'power-yoga',
        name: 'Power Yoga',
        description: 'Vigorous practice focusing on strength, stamina, and flexibility',
        duration: '75 min',
        level: 'Intermediate to Advanced',
        category: 'flow',
        tags: ['intermediate', 'advanced', 'strength'],
      },
      {
        id: 'hatha-fundamentals',
        name: 'Hatha Fundamentals',
        description: 'Classic yoga poses with detailed alignment instruction, perfect for beginners',
        duration: '60 min',
        level: 'Beginner Friendly',
        category: 'flow',
        featured: true,
        tags: ['beginner', 'all-levels'],
      },
      {
        id: 'morning-flow',
        name: 'Morning Energizer Flow',
        description: 'Gentle morning practice to awaken the body and set intentions for the day',
        duration: '45 min',
        level: 'All Levels',
        category: 'flow',
        tags: ['all-levels', 'morning'],
      },

      // Restorative & Yin
      {
        id: 'yin-yoga',
        name: 'Yin Yoga',
        description: 'Slow-paced practice with long-held poses to release deep connective tissue',
        duration: '75 min',
        level: 'All Levels',
        category: 'restorative',
        featured: true,
        tags: ['all-levels', 'relaxing'],
      },
      {
        id: 'restorative',
        name: 'Restorative Yoga',
        description: 'Deeply relaxing practice using props for complete rest and renewal',
        duration: '60 min',
        level: 'All Levels',
        category: 'restorative',
        tags: ['all-levels', 'relaxing', 'healing'],
      },
      {
        id: 'gentle-yoga',
        name: 'Gentle Yoga',
        description: 'Accessible practice for those seeking a slower pace or recovering from injury',
        duration: '60 min',
        level: 'Beginner to Intermediate',
        category: 'restorative',
        tags: ['beginner', 'therapeutic'],
      },
      {
        id: 'yoga-nidra',
        name: 'Yoga Nidra',
        description: 'Guided meditation practice for profound relaxation and healing',
        duration: '45 min',
        level: 'All Levels',
        category: 'restorative',
        featured: true,
        tags: ['all-levels', 'meditation'],
      },

      // Meditation & Breathwork
      {
        id: 'meditation',
        name: 'Guided Meditation',
        description: 'Seated meditation practice to cultivate mindfulness and inner peace',
        duration: '30 min',
        level: 'All Levels',
        category: 'mindfulness',
        tags: ['all-levels', 'meditation'],
      },
      {
        id: 'pranayama',
        name: 'Pranayama Breathwork',
        description: 'Ancient breathing techniques to energize, calm, and balance the nervous system',
        duration: '45 min',
        level: 'All Levels',
        category: 'mindfulness',
        featured: true,
        tags: ['all-levels', 'breathwork'],
      },
      {
        id: 'mindful-movement',
        name: 'Mindful Movement Meditation',
        description: 'Slow, intentional movement combined with breath awareness and meditation',
        duration: '60 min',
        level: 'All Levels',
        category: 'mindfulness',
        tags: ['all-levels', 'meditative'],
      },

      // Specialty & Workshops
      {
        id: 'private-session',
        name: 'Private Yoga Session',
        description: 'One-on-one personalized instruction tailored to your goals and needs',
        duration: '60 min',
        level: 'Customized',
        category: 'specialty',
        tags: ['private', 'customized'],
      },
      {
        id: 'yoga-therapy',
        name: 'Yoga Therapy',
        description: 'Therapeutic practice addressing specific health concerns and injuries',
        duration: '60 min',
        level: 'All Levels',
        category: 'specialty',
        tags: ['therapeutic', 'healing'],
      },
      {
        id: 'workshop',
        name: 'Monthly Workshop Series',
        description: 'Deep-dive workshops on philosophy, anatomy, meditation, and advanced practice',
        duration: '2-3 hours',
        level: 'Varies',
        category: 'specialty',
        featured: true,
        tags: ['workshop', 'education'],
      },
      {
        id: 'sound-healing',
        name: 'Sound Bath & Healing',
        description: 'Immersive experience with crystal singing bowls and vibrational therapy',
        duration: '90 min',
        level: 'All Levels',
        category: 'specialty',
        tags: ['all-levels', 'healing', 'special'],
      },
    ],
  },

  // GALLERY SECTION
  gallery: {
    sectionTitle: 'Our Space',
    subtitle: 'A peaceful sanctuary designed for your practice',
    categories: ['All', 'Studio', 'Classes', 'Community', 'Workshops'],
  },

  // LOCATION SECTION
  location: {
    sectionTitle: 'Visit Us',
    address: {
      street: '247 Harmony Lane',
      city: 'Boulder',
      state: 'CO',
      zip: '80302',
      country: 'USA',
    },
    hours: {
      monday: '6:00 AM - 8:00 PM',
      tuesday: '6:00 AM - 8:00 PM',
      wednesday: '6:00 AM - 8:00 PM',
      thursday: '6:00 AM - 8:00 PM',
      friday: '6:00 AM - 7:00 PM',
      saturday: '7:30 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM',
    },
    contact: {
      phone: '(555) 789-0123',
      email: 'hello@serenityflow.yoga',
      social: {
        instagram: 'https://instagram.com/serenityflow',
        facebook: 'https://facebook.com/serenityflow',
        twitter: 'https://twitter.com/serenityflow',
      },
    },
    mapUrl: 'https://maps.google.com/?q=247+Harmony+Lane+Boulder+CO',
  },

  // FOOTER
  footer: {
    businessName: 'Serenity Flow Yoga Studio',
    tagline: 'Breathe deeply, move mindfully, live fully',
    copyright: '© 2024 Serenity Flow Yoga Studio. All rights reserved.',
    links: [
      { label: 'Classes', url: '#classes' },
      { label: 'About', url: '#about' },
      { label: 'Schedule', url: '#schedule' },
      { label: 'Teachers', url: '#teachers' },
      { label: 'Pricing', url: '#pricing' },
      { label: 'Contact', url: '#location' },
      { label: 'Privacy Policy', url: '#privacy' },
    ],
  },
};

// Create final yoga content with menu alias for backwards compatibility
export const yogaContent: ContentConfig = {
  ...yogaContentBase,
  menu: yogaContentBase.classes, // Alias classes as menu for component compatibility
};

// Also export as coffeeContent for backwards compatibility with existing imports
export const coffeeContent = yogaContent;

export default yogaContent;
