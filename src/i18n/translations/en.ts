/**
 * English Translations - Mechanic Shop
 * All English text organized by section
 */

import type { Translations } from '../types';

export const en: Translations = {
  language: 'en',

  nav: {
    home: 'Home',
    journey: 'Services',
    chronicles: 'About',
    gallery: 'Gallery',
    gorlitz: 'Location',
    voices: 'Testimonials',
  },

  hero: {
    title: 'Precision Auto Care',
    subtitle: 'Your Trusted Auto Repair Partner',
    date: '',
    location: 'Springfield, IL',
    stats: {
      miles: 'Years',
      days: 'Technicians',
      memories: 'Customers',
      places: 'Services',
    },
    scrollDown: 'Scroll down to services section',
    loadingMemories: 'Loading...',
    photoIndicator: 'View photo {current} of {total}',
  },

  journey: {
    title: 'Our Services',
    subtitle: 'Expert auto repair and maintenance for all makes and models',
    stats: {
      milesTraveled: 'Years of Experience',
      milesValue: '19',
      hoursInTransit: 'Certified Technicians',
      hoursValue: '8',
      preciousDays: 'Satisfied Customers',
      daysValue: '5000+',
    },
    narrative: {
      title: 'Quality Service You Can Trust',
      paragraph1:
        'At Precision Auto Care, we understand that your vehicle is more than just transportation—it\'s your freedom, your livelihood, and your family\'s safety. That\'s why we treat every car that comes through our doors with the same care and attention we\'d give our own.',
      paragraph2:
        'Our team of ASE-certified technicians brings over 75 years of combined experience to every job. From routine maintenance to complex diagnostics, we use state-of-the-art equipment and genuine parts to ensure your vehicle runs at peak performance.',
      quote:
        'We believe in transparent, honest service. Before we begin any work, we\'ll explain what needs to be done and why. No surprises, no hidden fees—just straightforward solutions to keep you on the road safely.',
    },
    timeline: {
      departure: {
        title: 'Preventive Maintenance',
        description:
          'Regular services to keep your vehicle running smoothly',
      },
      journey: {
        title: 'Repairs & Diagnostics',
        description:
          'Expert troubleshooting and repair services',
      },
      arrival: {
        title: 'Specialty Services',
        description:
          'Advanced services and custom work for all your needs',
      },
    },
    mapPlaceholder: 'Our Core Services',
    mapSubtitle: 'Complete service to keep your vehicle in top condition',
  },

  chronicles: {
    title: 'About Us',
    subtitle: 'Quality service since 2005',
    dayLabel: 'Step',
    timeline: {
      day1: {
        title: 'Our Story',
        theme: 'Foundation',
        description:
          'Founded in 2005, Precision Auto Care has been serving the Springfield community for nearly two decades. What started as a small family-owned repair shop has grown into the trusted destination for automotive service in the area.',
        quote: 'Quality, honesty, and integrity in every job.',
        quoteAuthor: 'Founder',
      },
      day2: {
        title: 'ASE Certified',
        theme: 'Excellence',
        description:
          'All our technicians are certified by the National Institute for Automotive Service Excellence (ASE). We maintain the highest industry standards and stay current with the latest automotive technologies.',
        quote: 'Ongoing education is key to exceptional service.',
        quoteAuthor: 'Lead Technician',
      },
      day3: {
        title: 'Modern Equipment',
        theme: 'Technology',
        description:
          'We invest in the latest diagnostic tools and repair equipment. Our shop features state-of-the-art computer scanners, hydraulic lifts, and specialized tools for all makes and models.',
        quote: 'The right tools make the right job possible.',
        quoteAuthor: 'Service Manager',
      },
      day4: {
        title: 'Quality Parts',
        theme: 'Reliability',
        description:
          'We use only OEM and premium aftermarket parts with warranty coverage. Your vehicle deserves the best, and we ensure every part meets our high quality standards.',
        quote: 'Quality parts mean lasting repairs.',
        quoteAuthor: 'Parts Specialist',
      },
      day5: {
        title: 'Customer First',
        theme: 'Service',
        description:
          'Your satisfaction is our priority. We offer transparent pricing, honest assessments, and exceptional service. We take the time to explain every repair and answer all your questions.',
        quote: 'Happy customers are our best advertising.',
        quoteAuthor: 'Customer Relations Manager',
      },
      day6: {
        title: 'Community Involvement',
        theme: 'Community',
        description:
          'We\'re proud to be part of the Springfield community. We support local sports teams, charity events, and schools. Your trust drives us to give back.',
        quote: 'Serving our community is an honor.',
        quoteAuthor: 'Owner',
      },
      day7: {
        title: 'Your Trusted Partner',
        theme: 'Commitment',
        description:
          'We\'re committed to being your trusted partner for all automotive needs. From routine oil changes to major engine repairs, we\'ve got you covered.',
        quote: 'Keeping you safely on the road, one vehicle at a time.',
        quoteAuthor: 'Precision Auto Care Team',
      },
    },
  },

  gallery: {
    title: 'Our Work',
    subtitle: 'Quality workmanship you can trust',
    photoCount: {
      single: 'photo',
      multiple: 'photos',
    },
    categories: {
      all: 'All',
      firstHellos: 'Shop',
      littleWonders: 'Services',
      mothersJoy: 'Team',
      gorlitzMagic: 'Customer Cars',
      tableTales: 'Before & After',
      quietTogether: 'Community',
    },
    categoryDescriptions: {
      all: 'View all photos',
      firstHellos: 'Our modern facilities',
      littleWonders: 'Services in progress',
      mothersJoy: 'Meet our team',
      gorlitzMagic: 'Vehicles we service',
      tableTales: 'Repair results',
      quietTogether: 'Community events',
    },
    emptyState: 'No photos found in this category.',
  },

  gorlitz: {
    title: 'Visit Us',
    subtitle: 'Conveniently located in Springfield',
    cityIntro: {
      title: 'Your Local Repair Shop',
      paragraph1:
        'Located at 456 Mechanic Avenue in the heart of Springfield, Precision Auto Care is conveniently situated to serve the entire metro area. Our state-of-the-art facility features 8 service bays, a comfortable waiting area, and ample parking.',
      paragraph2:
        'We\'re open Monday through Saturday with convenient hours to fit your schedule. Walk-ins are welcome, or schedule your appointment online for even faster service.',
    },
    locations: {
      cafe: {
        name: 'Waiting Area',
        description:
          'Comfortable waiting area with free WiFi, complimentary coffee, and refreshments',
        highlight: 'Relax while we work on your vehicle',
      },
      bridge: {
        name: 'Service Bays',
        description:
          '8 fully-equipped service bays with modern tools and diagnostic equipment',
        highlight: 'Professional workspace for quality service',
      },
      park: {
        name: 'Parking',
        description:
          'Ample customer parking with easy access for drop-off and pick-up',
        highlight: 'Convenient for drop-off and pick-up',
      },
      restaurant: {
        name: 'Shuttle Service',
        description:
          'Courtesy shuttle service available within the Springfield area',
        highlight: 'Don\'t get stranded while your car is in service',
      },
    },
    mapPlaceholder: 'Location map coming soon',
    mapSubtitle: 'Find us at 456 Mechanic Avenue, Springfield, IL',
  },

  voices: {
    title: 'Customer Testimonials',
    subtitle: 'What our customers say about us',
    quotes: {
      brother: {
        text: 'I\'ve been bringing my car to Precision for 5 years now. They\'re always honest, fair, and do excellent work. Never had them push unnecessary work on me. Highly recommended!',
        author: 'Mike Johnson',
        role: 'Customer since 2019',
      },
      sister: {
        text: 'As a woman, I\'ve often felt taken advantage of at repair shops. Not here. The team at Precision takes the time to explain everything, show me the old parts, and I never feel pressured. Finally found a mechanic I trust.',
        author: 'Sarah Martinez',
        role: 'Customer since 2020',
      },
      mother: {
        text: 'Outstanding service at fair prices. They explained exactly what was wrong with my car, what was urgent, and what could wait. Work was completed on time and my car runs better than ever. Thank you, Precision!',
        author: 'Robert Chen',
        role: 'Customer since 2018',
      },
      niece: {
        text: 'Moved to Springfield last year and was nervous about finding a good mechanic. A neighbor recommended Precision and they haven\'t disappointed. Professional, quick, and honest. My go-to place for all auto service.',
        author: 'Jennifer Williams',
        role: 'Customer since 2023',
      },
    },
    closingReflection:
      'Join thousands of satisfied customers who trust Precision Auto Care',
  },

  footer: {
    about: {
      title: 'Precision Auto Care',
      description:
        'Your trusted auto repair partner. Quality service since 2005.',
    },
    ourStory: {
      title: 'Quick Links',
      journey: 'Services',
      dailyChronicles: 'About Us',
      photoGallery: 'Gallery',
      familyVoices: 'Testimonials',
    },
    foreverConnected: {
      title: 'Hours of Operation',
      message:
        'Mon-Fri: 8:00 AM - 6:00 PM | Sat: 8:00 AM - 4:00 PM | Sun: Closed',
    },
    madeWithLove: 'Quality service since 2005',
    copyright: '© 2024 Precision Auto Care. All rights reserved.',
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
