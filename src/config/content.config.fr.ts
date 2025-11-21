/**
 * ELECTRICIAN FRENCH CONTENT CONFIGURATION
 * Tout le contenu en français pour PowerPro Électrique
 */

import type { ContentConfig } from './content.config';

export const electricianContentFR: ContentConfig = {
  // MÉTADONNÉES DU SITE
  metadata: {
    siteName: 'PowerPro Électrique',
    siteDescription: 'Votre électricien local de confiance au service de la communauté avec des services électriques professionnels, réparations d\'urgence et installations depuis plus de 15 ans.',
    siteUrl: 'https://powerproelectric.local',
    keywords: [
      'électricien',
      'services électriques',
      'électricien local',
      'électricien d\'urgence',
      'électricien résidentiel',
      'électricien commercial',
      'réparations électriques',
      'installation électrique',
      'électricien certifié',
      'entrepreneur électricien',
    ],
  },

  // SECTION HÉROS
  hero: {
    title: 'PowerPro Électrique',
    subtitle: 'Vos Experts Électriques Locaux de Confiance',
    tagline: 'Services électriques professionnels sur lesquels vous pouvez compter - licenciés, assurés et engagés envers l\'excellence depuis 2009',
    ctaButtons: {
      primary: {
        text: 'Voir les Services',
        link: '#services',
      },
      secondary: {
        text: 'Urgence 24/7',
        link: 'tel:555-789-9473',
      },
    },
  },

  // SECTION À PROPOS
  about: {
    sectionTitle: 'À Propos',
    heading: 'Au Service de Votre Communauté Depuis 2009',
    story: [
      'Chez PowerPro Électrique, nous sommes plus que de simples électriciens—nous sommes vos voisins. Depuis plus de 15 ans, nous servons fièrement notre communauté locale avec des services électriques fiables et professionnels qui maintiennent les maisons et les entreprises en fonctionnement de manière sûre et efficace.',
      'Ce qui a commencé comme une opération individuelle est devenu une équipe de confiance composée de maîtres électriciens licenciés et de techniciens certifiés. Mais notre engagement reste le même : traiter chaque projet avec le soin et l\'attention que nous donnerions à notre propre maison. Nous comprenons que les problèmes électriques peuvent être stressants, c\'est pourquoi nous priorisons une communication claire, une tarification transparente et un savoir-faire qui dépasse les exigences du code.',
      'Qu\'il s\'agisse d\'une réparation d\'urgence à minuit ou d\'une rénovation planifiée, nous apportons le même dévouement à la qualité et à la sécurité. Nos racines profondes dans cette communauté signifient que votre satisfaction n\'est pas seulement une bonne affaire—c\'est personnel. Lorsque vous choisissez PowerPro Électrique, vous choisissez un partenaire qui se soucie vraiment de la sécurité de votre propriété et de garder vos lumières allumées.',
    ],
    highlights: [
      {
        title: 'Licencié & Assuré',
        description: 'Maîtres électriciens entièrement licenciés avec couverture d\'assurance complète',
      },
      {
        title: 'Service d\'Urgence 24/7',
        description: 'Disponible jour et nuit pour les urgences électriques',
      },
      {
        title: 'Expertise Locale',
        description: 'Connaissance approfondie des codes locaux et des besoins électriques de la communauté',
      },
      {
        title: 'Qualité Garantie',
        description: 'Tous les travaux soutenus par notre garantie de satisfaction complète',
      },
    ],
  },

  // SECTION SERVICES
  menu: {
    sectionTitle: 'Nos Services',
    subtitle: 'Solutions Électriques Professionnelles',
    featuredTitle: 'Services Populaires',
    categories: [
      {
        id: 'residential',
        name: 'Services Résidentiels',
        description: 'Solutions électriques complètes pour votre maison',
      },
      {
        id: 'commercial',
        name: 'Services Commerciaux',
        description: 'Travaux électriques professionnels pour les entreprises',
      },
      {
        id: 'emergency',
        name: 'Services d\'Urgence',
        description: 'Réponse rapide aux problèmes électriques urgents',
      },
      {
        id: 'specialty',
        name: 'Services Spécialisés',
        description: 'Installations et mises à niveau électriques avancées',
      },
    ],
    items: [
      // Services Résidentiels
      {
        id: 'panel-upgrade',
        name: 'Mise à Niveau du Panneau Électrique',
        description: 'Modernisez votre panneau électrique pour une sécurité et capacité améliorées',
        price: 'À partir de 1 200 $',
        category: 'residential',
        featured: true,
        tags: ['résidentiel', 'mise à niveau'],
      },
      {
        id: 'outlet-installation',
        name: 'Installation de Prises et Interrupteurs',
        description: 'Installation de nouvelles prises, interrupteurs et stations de recharge USB',
        price: 'À partir de 95 $',
        category: 'residential',
        tags: ['résidentiel'],
      },
      {
        id: 'lighting-design',
        name: 'Éclairage Intérieur et Extérieur',
        description: 'Services professionnels de conception et installation d\'éclairage',
        price: 'Devis Personnalisé',
        category: 'residential',
        featured: true,
        tags: ['résidentiel'],
      },
      {
        id: 'home-rewiring',
        name: 'Recâblage Complet de Maison',
        description: 'Recâblage sûr et conforme au code pour les maisons anciennes',
        price: 'À partir de 3 500 $',
        category: 'residential',
        tags: ['résidentiel', 'mise à niveau'],
      },

      // Services Commerciaux
      {
        id: 'commercial-wiring',
        name: 'Câblage Commercial',
        description: 'Travaux électriques pour nouvelle construction et amélioration locative',
        price: 'Devis Personnalisé',
        category: 'commercial',
        featured: true,
        tags: ['commercial'],
      },
      {
        id: 'led-retrofit',
        name: 'Rénovation Éclairage LED',
        description: 'Mises à niveau LED écoénergétiques pour installations commerciales',
        price: 'À partir de 500 $',
        category: 'commercial',
        tags: ['commercial', 'écoénergétique'],
      },
      {
        id: 'maintenance-contracts',
        name: 'Contrats de Maintenance',
        description: 'Maintenance préventive programmée pour propriétés commerciales',
        price: 'À partir de 200 $/mois',
        category: 'commercial',
        tags: ['commercial'],
      },
      {
        id: 'parking-lighting',
        name: 'Éclairage de Stationnement',
        description: 'Installation et réparation d\'éclairage commercial extérieur',
        price: 'Devis Personnalisé',
        category: 'commercial',
        tags: ['commercial'],
      },

      // Services d'Urgence
      {
        id: 'power-outage',
        name: 'Réparations de Pannes de Courant',
        description: 'Diagnostic et réparation rapides des pannes électriques',
        price: '150 $ appel de service + réparations',
        category: 'emergency',
        featured: true,
        tags: ['urgence', '24/7'],
      },
      {
        id: 'electrical-fire-damage',
        name: 'Incendie Électrique et Dommages de Surtension',
        description: 'Réparations d\'urgence après incendies électriques ou surtensions',
        price: 'Tarif d\'Urgence',
        category: 'emergency',
        tags: ['urgence', '24/7'],
      },
      {
        id: 'safety-hazards',
        name: 'Réponse aux Dangers de Sécurité',
        description: 'Réponse immédiate aux prises qui font des étincelles, odeurs de brûlé, etc.',
        price: '150 $ appel de service + réparations',
        category: 'emergency',
        featured: true,
        tags: ['urgence', '24/7'],
      },

      // Services Spécialisés
      {
        id: 'ev-charging',
        name: 'Installation de Borne de Recharge VÉ',
        description: 'Installation professionnelle de bornes de recharge pour véhicules électriques',
        price: 'À partir de 800 $',
        category: 'specialty',
        featured: true,
        tags: ['spécialisé', 'écologique'],
      },
      {
        id: 'generator-installation',
        name: 'Installation de Génératrice de Secours',
        description: 'Installation et service de génératrice pour toute la maison',
        price: 'À partir de 4 500 $',
        category: 'specialty',
        tags: ['spécialisé'],
      },
      {
        id: 'smart-home',
        name: 'Intégration Maison Intelligente',
        description: 'Travaux électriques pour systèmes de domotique',
        price: 'Devis Personnalisé',
        category: 'specialty',
        tags: ['spécialisé', 'moderne'],
      },
      {
        id: 'solar-prep',
        name: 'Préparation Électrique Panneaux Solaires',
        description: 'Préparation du système électrique pour installation de panneaux solaires',
        price: 'À partir de 1 500 $',
        category: 'specialty',
        tags: ['spécialisé', 'écologique'],
      },
    ],
  },

  // SECTION GALERIE
  gallery: {
    sectionTitle: 'Notre Travail',
    subtitle: 'Découvrez la qualité et le professionnalisme que nous apportons à chaque projet',
    categories: ['Tout', 'Résidentiel', 'Commercial', 'Réparations d\'Urgence', 'Installations'],
  },

  // SECTION CONTACT
  location: {
    sectionTitle: 'Contactez-Nous',
    heading: 'Entrez en Contact',
    subtitle: 'Nous sommes là pour vous aider avec tous vos besoins électriques',
    address: {
      street: '456 Avenue Électrique',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      country: 'États-Unis',
    },
    hours: {
      monday: '7h00 - 18h00',
      tuesday: '7h00 - 18h00',
      wednesday: '7h00 - 18h00',
      thursday: '7h00 - 18h00',
      friday: '7h00 - 18h00',
      saturday: '8h00 - 16h00',
      sunday: 'Service d\'Urgence Seulement',
    },
    contact: {
      phone: '(555) 789-WIRE',
      email: 'service@powerproelectric.local',
      social: {
        instagram: 'https://instagram.com/powerproelectric',
        facebook: 'https://facebook.com/powerproelectric',
      },
    },
    mapUrl: 'https://maps.google.com/?q=456+Electric+Avenue+Springfield+IL',
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
    businessName: 'PowerPro Électrique',
    tagline: 'Au service de votre communauté depuis 2009',
    copyright: '© 2024 PowerPro Électrique. Tous droits réservés. Licencié et Assuré.',
    links: [
      { label: 'Services', url: '#services' },
      { label: 'À Propos', url: '#about' },
      { label: 'Galerie', url: '#gallery' },
      { label: 'Contact', url: '#contact' },
      { label: 'Service d\'Urgence', url: 'tel:555-789-9473' },
      { label: 'Politique de Confidentialité', url: '#privacy' },
    ],
    labels: {
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
    },
  },
};

export default electricianContentFR;
