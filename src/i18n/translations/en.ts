/**
 * English Translations
 * All English text organized by section
 */

import type { Translations } from '../types';

export const en: Translations = {
  language: 'en',

  nav: {
    home: 'Home',
    journey: 'Journey',
    chronicles: 'Chronicles',
    gallery: 'Gallery',
    gorlitz: 'Görlitz',
    voices: 'Voices',
  },

  hero: {
    title: 'Across Miles, Together Again',
    subtitle: 'One brother. One journey. One unforgettable week.',
    date: 'November 8-14, 2025',
    location: 'Görlitz, Germany',
    stats: {
      miles: 'Miles',
      days: 'Days',
      memories: 'Memories',
      places: 'Places',
    },
    scrollDown: 'Scroll down to journey section',
    loadingMemories: 'Loading memories...',
    photoIndicator: 'View photo {current} of {total}',
  },

  journey: {
    title: 'Miles to Memories',
    subtitle: 'A journey of thousands of miles for seven days of love',
    stats: {
      milesTraveled: 'Miles Traveled',
      milesValue: '2,847',
      hoursInTransit: 'Hours in Transit',
      hoursValue: '14',
      preciousDays: 'Precious Days Together',
      daysValue: '7',
    },
    narrative: {
      title: 'A Journey Worth Every Mile',
      paragraph1:
        'From across the Atlantic, the brother embarked on a journey that would take him through three flights and two continents. Each mile bringing him closer to a reunion years in the making.',
      paragraph2:
        'Through bustling airports and quiet moments above the clouds, anticipation grew with every passing hour. The thought of seeing family again—of embracing his sister, meeting his niece, and spending precious time with his mother—made every minute of travel worthwhile.',
      quote:
        'When distance is measured in love, no journey is too long. When the destination is family, every mile becomes a celebration of what truly matters.',
    },
    timeline: {
      departure: {
        title: 'Departure',
        description:
          'Leaving home with a heart full of anticipation, ready to bridge the miles that separate family',
      },
      journey: {
        title: 'Journey',
        description:
          'Through layovers and time zones, the excitement builds. Each flight brings family closer',
      },
      arrival: {
        title: 'Arrival',
        description:
          'Finally, Görlitz. The moment of reunion, where journey ends and memories begin',
      },
    },
    mapPlaceholder: 'Interactive journey map coming soon',
    mapSubtitle: 'Visualizing the path from departure to reunion',
  },

  chronicles: {
    title: 'Seven Days of Forever',
    subtitle: 'Every day a chapter in our story',
    dayLabel: 'Day',
    timeline: {
      day1: {
        title: 'The Journey Begins',
        theme: 'Reunion',
        description:
          'After years apart, the moment finally arrived. A journey across continents to embrace family once more. The excitement was palpable, the anticipation electric.',
        quote: 'Every mile traveled was worth it for this moment.',
        quoteAuthor: 'Brother',
      },
      day2: {
        title: 'First Hellos',
        theme: 'Connection',
        description:
          'The morning brought coffee and conversation. Little hands reached out, smiles spread across faces. The city welcomed us with open arms as we wandered through historic streets, discovering magic around every corner.',
        quote: 'Watching them meet was like watching love multiply.',
        quoteAuthor: 'Mother',
      },
      day3: {
        title: 'Exploring Together',
        theme: 'Adventure',
        description:
          'A day of quiet exploration. Sometimes the best moments are the ones between the photographs—the laughter, the stories, the comfortable silences that speak volumes.',
        quote: 'Not every moment needs to be captured to be cherished.',
        quoteAuthor: 'Brother',
      },
      day4: {
        title: 'City Magic',
        theme: 'Discovery',
        description:
          'The city revealed its secrets today. From morning light painting the streets to afternoon adventures and quiet evening reflections. Each moment a treasure, each smile a gift.',
        quote: 'Home is wherever we are together.',
        quoteAuthor: 'Family',
      },
      day5: {
        title: 'Quiet Moments',
        theme: 'Togetherness',
        description:
          'Midweek brought a comfortable rhythm. No rush, no agenda—just being. Shared meals, shared laughter, shared life. These are the moments that weave themselves into the fabric of family.',
        quote: 'The best gift is time, freely given and gratefully received.',
        quoteAuthor: 'Mother',
      },
      day6: {
        title: 'Last Adventures',
        theme: 'Savoring',
        description:
          'With the end in sight, every moment became more precious. We savored each experience, knowing that tomorrow would bring farewells. But today—today was still ours.',
        quote: 'Let us not count the hours but make the hours count.',
        quoteAuthor: 'Brother',
      },
      day7: {
        title: 'Bittersweet Farewells',
        theme: 'Forever',
        description:
          'The final morning arrived too soon. Hugs lingered a little longer, smiles were a little brighter, eyes a little mistier. This is not goodbye—it is "until we meet again." The miles between us are merely numbers; the love is infinite.',
        quote: 'Distance means so little when someone means so much.',
        quoteAuthor: 'Family',
      },
    },
  },

  gallery: {
    title: 'Captured Hearts',
    subtitle: 'Every moment, preserved with love',
    photoCount: {
      single: 'photo',
      multiple: 'photos',
    },
    categories: {
      all: 'All Moments',
      firstHellos: 'First Hellos',
      littleWonders: 'Little Wonders',
      mothersJoy: "Mother's Joy",
      gorlitzMagic: 'Görlitz Magic',
      tableTales: 'Table Tales',
      quietTogether: 'Quiet Together',
    },
    categoryDescriptions: {
      all: 'Every precious memory',
      firstHellos: 'Reunion moments',
      littleWonders: "Niece's precious moments",
      mothersJoy: 'Mom with her children',
      gorlitzMagic: 'Exploring the city',
      tableTales: 'Meals and conversations',
      quietTogether: 'Candid, peaceful moments',
    },
    emptyState: 'No photos found in this category.',
  },

  gorlitz: {
    title: 'Our Week, Our City',
    subtitle: 'Görlitz: the backdrop to our memories',
    cityIntro: {
      title: 'A City Frozen in Time',
      paragraph1:
        "Nestled on the German-Polish border, Görlitz is one of Germany's best-preserved medieval cities. With its cobblestone streets, baroque architecture, and bridges spanning the Neisse River, it became more than just a location—it was the perfect stage for our family reunion.",
      paragraph2:
        'Every corner turned revealed new beauty. Every street held the promise of another shared moment. This historic city witnessed our laughter, our conversations, and our love.',
    },
    locations: {
      cafe: {
        name: 'Corner Café',
        description:
          'Our morning ritual spot for coffee and cake, where conversations flowed as freely as the coffee.',
        highlight: 'The place where every day began with warmth',
      },
      bridge: {
        name: 'Old Town Bridge',
        description:
          'Historic bridge spanning the Neisse River, offering breathtaking views of the old city architecture.',
        highlight: 'Where we captured our favorite family photos',
      },
      park: {
        name: 'City Park',
        description:
          "Nature's playground where our niece discovered autumn leaves and we found peaceful moments together.",
        highlight: 'Laughter echoing through golden trees',
      },
      restaurant: {
        name: 'Family Dinner Spot',
        description:
          'Traditional German restaurant where we shared meals, stories, and created memories over hearty food.',
        highlight: 'The table where family bonds grew stronger',
      },
    },
    mapPlaceholder: 'Interactive map with our daily routes coming soon',
    mapSubtitle: 'Trace our footsteps through this historic city',
  },

  voices: {
    title: 'In Our Words',
    subtitle: 'Reflections on a week that touched our hearts',
    quotes: {
      brother: {
        text: "Every mile traveled fades away the moment you're in each other's arms. Fourteen hours of flights became fourteen seconds of anticipation when I saw my family waiting for me.",
        author: 'The Brother',
        role: 'The Traveler',
      },
      sister: {
        text: "Opening our home meant opening our hearts even wider. Watching my brother with my daughter, seeing mom's joy—these weren't just visits, they were chapters in our family story being written together.",
        author: 'The Sister',
        role: 'The Host',
      },
      mother: {
        text: 'To see my children together again, to hold them both close, to watch the next generation discover family bonds—this is what mothers dream of. Seven days felt like seven years of love compressed into pure joy.',
        author: 'Mother',
        role: 'The Heart',
      },
      niece: {
        text: 'I learned that family is bigger than one house. Uncle came from very far away just to play with me and make mommy smile. That means we are very special to him.',
        author: 'The Niece',
        role: 'The Wonder',
      },
    },
    closingReflection:
      'Four voices, one heart. Four perspectives, one unforgettable week.',
  },

  footer: {
    about: {
      title: 'Görlitz 2025',
      description:
        'A digital memory of love, laughter, and connection. Preserving one unforgettable week together across miles.',
    },
    ourStory: {
      title: 'Our Story',
      journey: 'The Journey',
      dailyChronicles: 'Daily Chronicles',
      photoGallery: 'Photo Gallery',
      familyVoices: 'Family Voices',
    },
    foreverConnected: {
      title: 'Forever Connected',
      message:
        'Distance cannot diminish love. This week reminded us that family is forever, no matter the miles between us.',
    },
    madeWithLove: 'for the Görlitz family',
    copyright: 'Görlitz Family Reunion. All memories preserved with love.',
  },

  common: {
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    goToTop: 'Go to top',
    backToTop: 'Back to top',
    loading: 'Loading...',
    error: 'An error occurred',
  },
};
