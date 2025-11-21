/**
 * i18n Type Definitions
 * Strict TypeScript types for internationalization
 */

export type Language = 'en' | 'es' | 'fr';

export interface NavTranslations {
  home: string;
  journey: string;
  chronicles: string;
  gallery: string;
  gorlitz: string;
  voices: string;
}

export interface HeroTranslations {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  stats: {
    miles: string;
    days: string;
    memories: string;
    places: string;
  };
  scrollDown: string;
  loadingMemories: string;
  photoIndicator: string;
}

export interface JourneyTranslations {
  title: string;
  subtitle: string;
  stats: {
    milesTraveled: string;
    milesValue: string;
    hoursInTransit: string;
    hoursValue: string;
    preciousDays: string;
    daysValue: string;
  };
  narrative: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
  };
  timeline: {
    departure: {
      title: string;
      description: string;
    };
    journey: {
      title: string;
      description: string;
    };
    arrival: {
      title: string;
      description: string;
    };
  };
  mapPlaceholder: string;
  mapSubtitle: string;
}

export interface ChroniclesTranslations {
  title: string;
  subtitle: string;
  dayLabel: string;
  timeline: {
    day1: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day2: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day3: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day4: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day5: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day6: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
    day7: {
      title: string;
      theme: string;
      description: string;
      quote: string;
      quoteAuthor: string;
    };
  };
}

export interface GalleryTranslations {
  title: string;
  subtitle: string;
  photoCount: {
    single: string;
    multiple: string;
  };
  categories: {
    all: string;
    firstHellos: string;
    littleWonders: string;
    mothersJoy: string;
    gorlitzMagic: string;
    tableTales: string;
    quietTogether: string;
  };
  categoryDescriptions: {
    all: string;
    firstHellos: string;
    littleWonders: string;
    mothersJoy: string;
    gorlitzMagic: string;
    tableTales: string;
    quietTogether: string;
  };
  emptyState: string;
}

export interface GorlitzTranslations {
  title: string;
  subtitle: string;
  cityIntro: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  locations: {
    cafe: {
      name: string;
      description: string;
      highlight: string;
    };
    bridge: {
      name: string;
      description: string;
      highlight: string;
    };
    park: {
      name: string;
      description: string;
      highlight: string;
    };
    restaurant: {
      name: string;
      description: string;
      highlight: string;
    };
  };
  mapPlaceholder: string;
  mapSubtitle: string;
}

export interface VoicesTranslations {
  title: string;
  subtitle: string;
  quotes: {
    brother: {
      text: string;
      author: string;
      role: string;
    };
    sister: {
      text: string;
      author: string;
      role: string;
    };
    mother: {
      text: string;
      author: string;
      role: string;
    };
    niece: {
      text: string;
      author: string;
      role: string;
    };
  };
  closingReflection: string;
}

export interface FooterTranslations {
  about: {
    title: string;
    description: string;
  };
  ourStory: {
    title: string;
    journey: string;
    dailyChronicles: string;
    photoGallery: string;
    familyVoices: string;
  };
  foreverConnected: {
    title: string;
    message: string;
  };
  madeWithLove: string;
  copyright: string;
}

export interface CommonTranslations {
  closeMenu: string;
  openMenu: string;
  goToTop: string;
  backToTop: string;
  loading: string;
  error: string;
}

export interface Translations {
  language: Language;
  nav: NavTranslations;
  hero: HeroTranslations;
  journey: JourneyTranslations;
  chronicles: ChroniclesTranslations;
  gallery: GalleryTranslations;
  gorlitz: GorlitzTranslations;
  voices: VoicesTranslations;
  footer: FooterTranslations;
  common: CommonTranslations;
}
