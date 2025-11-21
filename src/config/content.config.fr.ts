/**
 * CONFIGURATION DE CONTENU DU STUDIO DE YOGA (FRANÇAIS)
 * Configuration de tout le contenu textuel en français pour le studio de yoga
 *
 * Ce fichier contient toutes les traductions françaises professionnelles
 */

import type { ContentConfig } from './content.config';

const yogaContentFRBase = {
  // MÉTADONNÉES DU SITE
  metadata: {
    siteName: 'Studio de Yoga Serenity Flow',
    siteDescription: 'Un sanctuaire de yoga accueillant dans le quartier, offrant mouvement conscient, méditation et pratiques de bien-être holistique pour tous les niveaux au cœur de notre communauté.',
    siteUrl: 'https://serenityflow.yoga',
    keywords: [
      'studio de yoga',
      'cours de yoga',
      'méditation',
      'pleine conscience',
      'bien-être',
      'vinyasa',
      'hatha',
      'yin yoga',
      'yoga thérapeutique',
      'pranayama',
      'yoga local',
    ],
  },

  // SECTION HÉROS
  hero: {
    title: 'Yoga Serenity Flow',
    subtitle: 'Trouvez Votre Équilibre, Embrassez Votre Voyage',
    tagline: 'Un sanctuaire accueillant où la sagesse ancienne rencontre la pratique moderne',
    ctaButtons: {
      primary: {
        text: 'Explorer les Cours',
        link: '#classes',
      },
      secondary: {
        text: 'Visiter Notre Studio',
        link: '#location',
      },
    },
  },

  // SECTION À PROPOS
  about: {
    sectionTitle: 'Notre Histoire',
    heading: 'Enracinés dans la Communauté, Grandissant Ensemble Depuis 2019',
    story: [
      'Serenity Flow Yoga est né d\'une vision simple : créer un espace où tout le monde—peu importe l\'expérience, la flexibilité ou le parcours—se sent accueilli pour explorer la pratique transformatrice du yoga. Fondé par des pratiquants locaux qui sont tombés amoureux du pouvoir guérisseur et connecteur du yoga, nous sommes devenus un lieu de rassemblement prisé dans notre quartier.',
      'Ce qui nous rend uniques, c\'est notre engagement envers l\'authenticité et l\'accessibilité. Nous honorons les traditions anciennes du yoga tout en les rendant pertinentes pour la vie moderne. Nos professeurs ne sont pas seulement des instructeurs—ce sont des étudiants à vie, chacun apportant son propre parcours et expertise unique pour créer une communauté d\'enseignement riche et diversifiée.',
      'Au-delà du tapis, nous nous consacrons à favoriser des connexions authentiques. Que vous cherchiez à soulager le stress, à développer votre force physique, votre croissance spirituelle, ou simplement une heure paisible dans votre journée, vous trouverez ici une communauté solidaire. Nous croyons que le yoga ne concerne pas la perfection—il s\'agit d\'être présent, de respirer profondément et d\'honorer exactement où vous êtes.',
    ],
    highlights: [
      {
        title: 'Tous Niveaux Bienvenus',
        description: 'Des débutants curieux aux pratiquants chevronnés, chacun trouve sa place ici',
      },
      {
        title: 'Professeurs Expérimentés',
        description: 'Instructeurs certifiés avec des parcours diversifiés et une formation spécialisée',
      },
      {
        title: 'Approche Holistique',
        description: 'Nous nourrissons le corps, l\'esprit et l\'âme à travers le mouvement conscient et la méditation',
      },
      {
        title: 'Centré sur la Communauté',
        description: 'Plus qu\'un studio—un espace accueillant pour la connexion et la croissance',
      },
    ],
  },

  // SECTION DES COURS
  classes: {
    sectionTitle: 'Nos Cours',
    categories: [
      {
        id: 'flow',
        name: 'Flow Dynamique',
        description: 'Cours énergisants de vinyasa et hatha pour développer force et souplesse',
      },
      {
        id: 'restorative',
        name: 'Restauration & Yin',
        description: 'Pratiques douces et méditatives pour une relaxation et guérison profondes',
      },
      {
        id: 'mindfulness',
        name: 'Méditation & Pranayama',
        description: 'Cultivez la paix intérieure à travers le pranayama et la méditation guidée',
      },
      {
        id: 'specialty',
        name: 'Ateliers & Spécialités',
        description: 'Approfondissez votre pratique avec des ateliers spécialisés et des offres uniques',
      },
    ],
    items: [
      // Flow Dynamique
      {
        id: 'vinyasa-flow',
        name: 'Flow Vinyasa',
        description: 'Séquences fluides et dynamiques synchronisées avec la respiration, générant chaleur et force',
        duration: '60 min',
        level: 'Tous Niveaux',
        category: 'flow',
        featured: true,
        tags: ['tous-niveaux', 'énergisant'],
      },
      {
        id: 'power-yoga',
        name: 'Power Yoga',
        description: 'Pratique vigoureuse axée sur la force, l\'endurance et la flexibilité',
        duration: '75 min',
        level: 'Intermédiaire à Avancé',
        category: 'flow',
        tags: ['intermédiaire', 'avancé', 'force'],
      },
      {
        id: 'hatha-fundamentals',
        name: 'Fondamentaux Hatha',
        description: 'Postures de yoga classiques avec instructions d\'alignement détaillées, parfait pour débutants',
        duration: '60 min',
        level: 'Débutants Bienvenus',
        category: 'flow',
        featured: true,
        tags: ['débutant', 'tous-niveaux'],
      },
      {
        id: 'morning-flow',
        name: 'Flow Énergisant du Matin',
        description: 'Pratique matinale douce pour éveiller le corps et définir les intentions de la journée',
        duration: '45 min',
        level: 'Tous Niveaux',
        category: 'flow',
        tags: ['tous-niveaux', 'matin'],
      },

      // Restauration & Yin
      {
        id: 'yin-yoga',
        name: 'Yin Yoga',
        description: 'Pratique lente avec postures maintenues longuement pour libérer les tissus conjonctifs profonds',
        duration: '75 min',
        level: 'Tous Niveaux',
        category: 'restorative',
        featured: true,
        tags: ['tous-niveaux', 'relaxant'],
      },
      {
        id: 'restorative',
        name: 'Yoga Restaurateur',
        description: 'Pratique profondément relaxante utilisant des accessoires pour un repos et renouvellement complets',
        duration: '60 min',
        level: 'Tous Niveaux',
        category: 'restorative',
        tags: ['tous-niveaux', 'relaxant', 'guérison'],
      },
      {
        id: 'gentle-yoga',
        name: 'Yoga Doux',
        description: 'Pratique accessible pour ceux cherchant un rythme plus lent ou se rétablissant d\'une blessure',
        duration: '60 min',
        level: 'Débutant à Intermédiaire',
        category: 'restorative',
        tags: ['débutant', 'thérapeutique'],
      },
      {
        id: 'yoga-nidra',
        name: 'Yoga Nidra',
        description: 'Pratique de méditation guidée pour une relaxation et guérison profondes',
        duration: '45 min',
        level: 'Tous Niveaux',
        category: 'restorative',
        featured: true,
        tags: ['tous-niveaux', 'méditation'],
      },

      // Méditation & Pranayama
      {
        id: 'meditation',
        name: 'Méditation Guidée',
        description: 'Pratique de méditation assise pour cultiver la pleine conscience et la paix intérieure',
        duration: '30 min',
        level: 'Tous Niveaux',
        category: 'mindfulness',
        tags: ['tous-niveaux', 'méditation'],
      },
      {
        id: 'pranayama',
        name: 'Pranayama (Respiration)',
        description: 'Techniques de respiration anciennes pour énergiser, calmer et équilibrer le système nerveux',
        duration: '45 min',
        level: 'Tous Niveaux',
        category: 'mindfulness',
        featured: true,
        tags: ['tous-niveaux', 'respiration'],
      },
      {
        id: 'mindful-movement',
        name: 'Méditation en Mouvement Conscient',
        description: 'Mouvement lent et intentionnel combiné avec conscience du souffle et méditation',
        duration: '60 min',
        level: 'Tous Niveaux',
        category: 'mindfulness',
        tags: ['tous-niveaux', 'méditatif'],
      },

      // Spécialités & Ateliers
      {
        id: 'private-session',
        name: 'Séance Privée de Yoga',
        description: 'Instruction personnalisée individuelle adaptée à vos objectifs et besoins',
        duration: '60 min',
        level: 'Personnalisé',
        category: 'specialty',
        tags: ['privé', 'personnalisé'],
      },
      {
        id: 'yoga-therapy',
        name: 'Yoga Thérapeutique',
        description: 'Pratique thérapeutique ciblant des problèmes de santé et blessures spécifiques',
        duration: '60 min',
        level: 'Tous Niveaux',
        category: 'specialty',
        tags: ['thérapeutique', 'guérison'],
      },
      {
        id: 'workshop',
        name: 'Série d\'Ateliers Mensuels',
        description: 'Ateliers approfondis sur la philosophie, l\'anatomie, la méditation et la pratique avancée',
        duration: '2-3 heures',
        level: 'Variable',
        category: 'specialty',
        featured: true,
        tags: ['atelier', 'éducation'],
      },
      {
        id: 'sound-healing',
        name: 'Bain Sonore & Guérison',
        description: 'Expérience immersive avec bols chantants en cristal et thérapie vibratoire',
        duration: '90 min',
        level: 'Tous Niveaux',
        category: 'specialty',
        tags: ['tous-niveaux', 'guérison', 'spécial'],
      },
    ],
  },

  // SECTION GALERIE
  gallery: {
    sectionTitle: 'Notre Espace',
    subtitle: 'Un sanctuaire paisible conçu pour votre pratique',
    categories: ['Tout', 'Studio', 'Cours', 'Communauté', 'Ateliers'],
  },

  // SECTION EMPLACEMENT
  location: {
    sectionTitle: 'Nous Rendre Visite',
    heading: 'Trouvez Votre Équilibre',
    subtitle: 'Rejoignez-nous dans notre studio accueillant',
    labels: {
      address: 'Adresse',
      hours: 'Heures d\'Ouverture',
      contact: 'Contact',
      phone: 'Téléphone',
      email: 'Courriel',
      findUs: 'Nous Trouver',
      getDirections: 'Obtenir l\'Itinéraire',
      followUs: 'Suivez-Nous',
      daysOfWeek: {
        monday: 'Lundi',
        tuesday: 'Mardi',
        wednesday: 'Mercredi',
        thursday: 'Jeudi',
        friday: 'Vendredi',
        saturday: 'Samedi',
        sunday: 'Dimanche',
      },
    },
    address: {
      street: '247 Rue Harmony',
      city: 'Boulder',
      state: 'CO',
      zip: '80302',
      country: 'États-Unis',
    },
    hours: {
      monday: '6h00 - 20h00',
      tuesday: '6h00 - 20h00',
      wednesday: '6h00 - 20h00',
      thursday: '6h00 - 20h00',
      friday: '6h00 - 19h00',
      saturday: '7h30 - 18h00',
      sunday: '8h00 - 18h00',
    },
    contact: {
      phone: '(555) 789-0123',
      email: 'bonjour@serenityflow.yoga',
      social: {
        instagram: 'https://instagram.com/serenityflow',
        facebook: 'https://facebook.com/serenityflow',
        twitter: 'https://twitter.com/serenityflow',
      },
    },
    mapUrl: 'https://maps.google.com/?q=247+Harmony+Lane+Boulder+CO',
  },

  // PIED DE PAGE
  footer: {
    businessName: 'Studio de Yoga Serenity Flow',
    tagline: 'Respirez profondément, bougez consciemment, vivez pleinement',
    copyright: '© 2024 Studio de Yoga Serenity Flow. Tous droits réservés.',
    labels: {
      followUs: 'Suivez-Nous',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
    },
    links: [
      { label: 'Cours', url: '#classes' },
      { label: 'À Propos', url: '#about' },
      { label: 'Horaire', url: '#schedule' },
      { label: 'Professeurs', url: '#teachers' },
      { label: 'Tarifs', url: '#pricing' },
      { label: 'Contact', url: '#location' },
      { label: 'Politique de Confidentialité', url: '#privacy' },
    ],
  },
};


// Create final yoga content with menu alias for backwards compatibility
export const yogaContentFR: ContentConfig = {
  ...yogaContentFRBase,
  menu: yogaContentFRBase.classes, // Alias classes as menu for component compatibility
};

// Also export as coffeeContentFR for backwards compatibility with existing imports
export const coffeeContentFR = yogaContentFR;
