/**
 * CONFIGURATION DE CONTENU FRANÇAIS POUR L'ATELIER MÉCANIQUE
 * Tout le contenu textuel en français pour le modèle d'atelier mécanique
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

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
  tags?: string[];
}

export interface MenuContent {
  sectionTitle: string;
  subtitle: string;
  featuredTitle: string;
  categories: {
    id: string;
    name: string;
    description: string;
  }[];
  items: MenuItem[];
}

export interface GalleryContent {
  sectionTitle: string;
  subtitle: string;
  categories: string[];
}

export interface LocationContent {
  sectionTitle: string;
  heading: string;
  subtitle: string;
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
  labels: {
    address: string;
    hours: string;
    contact: string;
    phone: string;
    email: string;
    followUs: string;
    getDirections: string;
    daysOfWeek: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
}

export interface FooterContent {
  businessName: string;
  tagline: string;
  copyright: string;
  links: {
    label: string;
    url: string;
  }[];
  labels: {
    quickLinks: string;
    contact: string;
  };
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
  menu: MenuContent;
  gallery: GalleryContent;
  location: LocationContent;
  footer: FooterContent;
}

// ========================================
// CONTENU FRANÇAIS POUR L'ATELIER MÉCANIQUE
// ========================================

export const mechanicShopContentFR: ContentConfig = {
  // MÉTADONNÉES DU SITE
  metadata: {
    siteName: 'Precision Auto Works',
    siteDescription: 'Services professionnels de réparation et d\'entretien automobile. Mécaniciens experts, pièces de qualité et service honnête en qui vous pouvez avoir confiance.',
    siteUrl: 'https://precisionautoworks.com',
    keywords: [
      'réparation auto',
      'mécanicien',
      'service automobile',
      'réparation de freins',
      'changement d\'huile',
      'réparation moteur',
      'service de transmission',
      'entretien automobile',
    ],
  },

  // SECTION HÉROS
  hero: {
    title: 'Precision Auto Works',
    subtitle: 'Soins Experts pour Votre Véhicule',
    tagline: 'Réparations de qualité, service honnête, prix équitables - vous gardant en sécurité sur la route',
    ctaButtons: {
      primary: {
        text: 'Nos Services',
        link: '#services',
      },
      secondary: {
        text: 'Contactez-Nous',
        link: '#location',
      },
    },
  },

  // SECTION À PROPOS
  about: {
    sectionTitle: 'À Propos',
    heading: 'Mécaniciens de Confiance Depuis 2005',
    story: [
      'Chez Precision Auto Works, nous comprenons que votre véhicule est plus qu\'un simple moyen de transport—c\'est votre lien avec le travail, la famille et la vie. C\'est pourquoi nous avons bâti notre réputation sur l\'honnêteté, l\'expertise et un travail de qualité en qui vous pouvez avoir confiance.',
      'Nos techniciens certifiés ASE apportent plus de 75 ans d\'expérience combinée à chaque travail, de l\'entretien de routine aux diagnostics moteur complexes. Nous utilisons des équipements de diagnostic de pointe et uniquement des pièces premium pour garantir que votre véhicule fonctionne à ses performances maximales.',
      'Nous croyons en un service transparent. Avant que tout travail ne commence, nous vous expliquerons ce qui doit être fait et pourquoi, en fournissant des estimations claires sans frais cachés. Notre objectif est de construire des relations durables avec nos clients basées sur la confiance et un service exceptionnel.',
    ],
    highlights: [
      {
        title: 'Certifié ASE',
        description: 'Techniciens formés en usine avec formation continue',
      },
      {
        title: 'Pièces de Qualité',
        description: 'Pièces OEM et d\'après-vente premium avec garantie',
      },
      {
        title: 'Service Honnête',
        description: 'Tarification transparente et explications détaillées',
      },
      {
        title: 'Délai Rapide',
        description: 'La plupart des réparations complétées le jour même ou le lendemain',
      },
    ],
  },

  // SECTION SERVICES
  menu: {
    sectionTitle: 'Nos Services',
    subtitle: 'Solutions Complètes d\'Entretien Automobile',
    featuredTitle: 'Services Populaires',
    categories: [
      {
        id: 'maintenance',
        name: 'Entretien',
        description: 'Entretien régulier pour que votre véhicule fonctionne bien',
      },
      {
        id: 'brakes',
        name: 'Service de Freins',
        description: 'Inspection et réparation complètes du système de freinage',
      },
      {
        id: 'engine',
        name: 'Réparation Moteur',
        description: 'Diagnostics et réparation pour tous problèmes moteur',
      },
      {
        id: 'electrical',
        name: 'Électrique',
        description: 'Service de batterie, alternateur et système électrique',
      },
      {
        id: 'diagnostics',
        name: 'Diagnostics',
        description: 'Diagnostics informatiques avancés et dépannage',
      },
    ],
    items: [
      // Services d'Entretien
      {
        id: 'oil-change',
        name: 'Changement d\'Huile',
        description: 'Huile synthétique ou conventionnelle, remplacement du filtre, vérification des fluides',
        price: 'À partir de 49,99 $',
        category: 'maintenance',
        featured: true,
        tags: ['rapide'],
      },
      {
        id: 'tune-up',
        name: 'Mise au Point Moteur',
        description: 'Bougies, filtres, appoint de fluides, vérification des performances',
        price: 'À partir de 149,99 $',
        category: 'maintenance',
        tags: [],
      },
      {
        id: 'tire-rotation',
        name: 'Rotation et Équilibrage des Pneus',
        description: 'Rotation, équilibrage et vérification de la pression pour une usure uniforme',
        price: '59,99 $',
        category: 'maintenance',
        tags: ['rapide'],
      },
      {
        id: 'inspection',
        name: 'Inspection Multi-Points',
        description: 'Vérification complète de sécurité et performance en 50 points',
        price: 'GRATUIT',
        category: 'maintenance',
        featured: true,
        tags: [],
      },
      {
        id: 'fluid-service',
        name: 'Service d\'Échange de Fluides',
        description: 'Liquide de refroidissement, transmission, freins ou direction assistée',
        price: 'À partir de 89,99 $',
        category: 'maintenance',
        tags: [],
      },

      // Services de Freins
      {
        id: 'brake-pads',
        name: 'Remplacement des Plaquettes de Frein',
        description: 'Plaquettes de frein premium, inspection des rotors, vérification du système',
        price: 'À partir de 199,99 $',
        category: 'brakes',
        featured: true,
        tags: [],
      },
      {
        id: 'brake-rotors',
        name: 'Resurfaçage des Rotors',
        description: 'Usinage des rotors pour une surface de freinage lisse et uniforme',
        price: 'À partir de 99,99 $',
        category: 'brakes',
        tags: [],
      },
      {
        id: 'brake-complete',
        name: 'Service de Freins Complet',
        description: 'Plaquettes, rotors, étriers, purge du liquide, inspection complète',
        price: 'À partir de 449,99 $',
        category: 'brakes',
        tags: [],
      },
      {
        id: 'brake-fluid',
        name: 'Purge du Liquide de Frein',
        description: 'Remplacement complet et purge du liquide de frein',
        price: '89,99 $',
        category: 'brakes',
        tags: [],
      },

      // Services Moteur
      {
        id: 'engine-diagnostic',
        name: 'Diagnostics Moteur',
        description: 'Scan informatique, analyse des codes d\'erreur, identification des problèmes',
        price: '79,99 $',
        category: 'engine',
        featured: true,
        tags: [],
      },
      {
        id: 'timing-belt',
        name: 'Remplacement de la Courroie de Distribution',
        description: 'Courroie de distribution, pompe à eau, joints et service du tendeur',
        price: 'À partir de 599,99 $',
        category: 'engine',
        tags: [],
      },
      {
        id: 'head-gasket',
        name: 'Réparation du Joint de Culasse',
        description: 'Remplacement complet du joint de culasse et resurfaçage',
        price: 'À partir de 1 499,99 $',
        category: 'engine',
        tags: [],
      },
      {
        id: 'check-engine',
        name: 'Témoin Check Engine',
        description: 'Scan de diagnostic et recommandation de réparation',
        price: '79,99 $',
        category: 'engine',
        tags: [],
      },

      // Services Électriques
      {
        id: 'battery-test',
        name: 'Test et Remplacement de Batterie',
        description: 'Test de charge, installation et nettoyage des bornes',
        price: 'À partir de 149,99 $',
        category: 'electrical',
        tags: ['rapide'],
      },
      {
        id: 'alternator',
        name: 'Service d\'Alternateur',
        description: 'Test, réparation ou remplacement de l\'alternateur',
        price: 'À partir de 349,99 $',
        category: 'electrical',
        tags: [],
      },
      {
        id: 'starter',
        name: 'Remplacement du Démarreur',
        description: 'Test du démarreur et service de remplacement',
        price: 'À partir de 299,99 $',
        category: 'electrical',
        tags: [],
      },
      {
        id: 'electrical-diagnostic',
        name: 'Diagnostics Électriques',
        description: 'Dépannage complet du système électrique',
        price: '99,99 $',
        category: 'electrical',
        tags: [],
      },

      // Services de Diagnostics
      {
        id: 'computer-scan',
        name: 'Scan Informatique',
        description: 'Scan complet du système informatique du véhicule et rapport',
        price: '79,99 $',
        category: 'diagnostics',
        tags: [],
      },
      {
        id: 'pre-purchase',
        name: 'Inspection Pré-Achat',
        description: 'Inspection complète avant l\'achat d\'un véhicule d\'occasion',
        price: '149,99 $',
        category: 'diagnostics',
        featured: true,
        tags: [],
      },
      {
        id: 'noise-diagnostic',
        name: 'Diagnostic de Bruit',
        description: 'Identifier et diagnostiquer les bruits inhabituels du véhicule',
        price: '89,99 $',
        category: 'diagnostics',
        tags: [],
      },
    ],
  },

  // SECTION GALERIE
  gallery: {
    sectionTitle: 'Notre Atelier',
    subtitle: 'Installation moderne avec équipement de pointe',
    categories: ['Tout', 'Atelier', 'Équipement', 'Équipe', 'Services'],
  },

  // SECTION EMPLACEMENT
  location: {
    sectionTitle: 'Nous Rendre Visite',
    heading: 'Trouvez Notre Atelier',
    subtitle: 'Idéalement situé avec accès facile et stationnement gratuit',
    address: {
      street: '456 Promenade Automobile',
      city: 'Détroit',
      state: 'MI',
      zip: '48201',
      country: 'États-Unis',
    },
    hours: {
      monday: '7h30 - 18h00',
      tuesday: '7h30 - 18h00',
      wednesday: '7h30 - 18h00',
      thursday: '7h30 - 18h00',
      friday: '7h30 - 18h00',
      saturday: '8h00 - 16h00',
      sunday: 'Fermé',
    },
    contact: {
      phone: '(555) AUTO-FIX',
      email: 'service@precisionautoworks.com',
      social: {
        instagram: 'https://instagram.com/precisionautoworks',
        facebook: 'https://facebook.com/precisionautoworks',
        twitter: 'https://twitter.com/precisionauto',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Automotive+Drive+Detroit+MI',
    labels: {
      address: 'Adresse',
      hours: 'Heures',
      contact: 'Contact',
      phone: 'Téléphone',
      email: 'Courriel',
      followUs: 'Suivez-Nous',
      getDirections: 'Obtenir l\'Itinéraire →',
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
  },

  // PIED DE PAGE
  footer: {
    businessName: 'Precision Auto Works',
    tagline: 'Votre partenaire automobile de confiance depuis 2005',
    copyright: '© 2024 Precision Auto Works. Tous droits réservés.',
    links: [
      { label: 'Services', url: '#services' },
      { label: 'À Propos', url: '#about' },
      { label: 'Emplacement', url: '#location' },
      { label: 'Rendez-vous', url: '#appointments' },
      { label: 'Carrières', url: '#careers' },
      { label: 'Politique de Confidentialité', url: '#privacy' },
    ],
    labels: {
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
    },
  },
};

export default mechanicShopContentFR;
