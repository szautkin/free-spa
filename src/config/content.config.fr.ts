/**
 * CONFIGURATION DE CONTENU EN FRANÇAIS
 * Tout le contenu textuel en français
 */

import type { ContentConfig } from './content.config';

export const coffeeContentFR: ContentConfig = {
  // MÉTADONNÉES DU SITE
  metadata: {
    siteName: 'Aroma Haven Coffee',
    siteDescription: 'Café artisanal haut de gamme servant des boissons artisanales et des pâtisseries fraîchement cuites au cœur de la ville.',
    siteUrl: 'https://aromahaven.coffee',
    keywords: [
      'café',
      'café artisanal',
      'café de spécialité',
      'cafétéria',
      'espresso',
      'torréfacteurs de café',
      'café local',
    ],
  },

  // SECTION HÉROS
  hero: {
    title: 'Aroma Haven Coffee',
    subtitle: 'Où Chaque Tasse Raconte une Histoire',
    tagline: 'Expériences café artisanales, torréfiées avec passion, servies avec amour',
    ctaButtons: {
      primary: {
        text: 'Explorer le Menu',
        link: '#menu',
      },
      secondary: {
        text: 'Nous Rendre Visite',
        link: '#location',
      },
    },
  },

  // SECTION À PROPOS
  about: {
    sectionTitle: 'Notre Histoire',
    heading: 'Excellence en Infusion Depuis 2018',
    story: [
      'Chez Aroma Haven, nous croyons qu\'un excellent café commence par d\'excellents grains. Nous nous approvisionnons directement auprès de fermes durables à travers le monde, établissant des relations avec des agriculteurs qui partagent notre engagement envers la qualité et la gestion environnementale.',
      'Nos maîtres torréfacteurs apportent des décennies d\'expérience, élaborant soigneusement chaque profil de torréfaction pour mettre en valeur les caractéristiques uniques de chaque origine. Des notes vives et fruitées du Yirgacheffe éthiopien à la profondeur riche et chocolatée du Supremo colombien, chaque tasse est un voyage.',
      'Mais le café est plus qu\'une simple boisson pour nous—c\'est un catalyseur de connexion. Notre espace accueillant est conçu pour rassembler les gens, que vous retrouviez de vieux amis, plongiez dans un bon livre ou trouviez votre flux créatif.',
    ],
    highlights: [
      {
        title: 'Approvisionnement Éthique',
        description: 'Relations commerciales directes avec les agriculteurs pour les meilleurs grains',
      },
      {
        title: 'Torréfaction par Petits Lots',
        description: 'Torréfié frais sur place à la perfection chaque semaine',
      },
      {
        title: 'Baristas Experts',
        description: 'Artisans qualifiés passionnés par la tasse parfaite',
      },
      {
        title: 'Axé sur la Communauté',
        description: 'Un espace chaleureux et accueillant pour tous',
      },
    ],
  },

  // SECTION MENU
  menu: {
    sectionTitle: 'Notre Menu',
    subtitle: 'Boissons et Bouchées Artisanales',
    featuredTitle: 'Nos Favoris en Vedette',
    categories: [
      {
        id: 'espresso',
        name: 'Boissons Espresso',
        description: 'Boissons classiques à base d\'espresso',
      },
      {
        id: 'brewed',
        name: 'Café Infusé',
        description: 'Versé, filtré et infusions spéciales',
      },
      {
        id: 'specialty',
        name: 'Boissons Spéciales',
        description: 'Créations uniques et favoris saisonniers',
      },
      {
        id: 'cold',
        name: 'Boissons Froides',
        description: 'Options glacées et infusion froide',
      },
      {
        id: 'food',
        name: 'Nourriture',
        description: 'Pâtisseries fraîches et collations légères',
      },
    ],
    items: [
      // Boissons Espresso
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Shot riche et audacieux de notre mélange signature',
        price: '3,50 $',
        category: 'espresso',
        featured: true,
        tags: ['chaud'],
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso dilué avec de l\'eau chaude',
        price: '4,00 $',
        category: 'espresso',
        tags: ['chaud'],
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso avec lait vapeur et mousse',
        price: '4,75 $',
        category: 'espresso',
        tags: ['chaud'],
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Espresso avec lait vapeur velouté',
        price: '5,00 $',
        category: 'espresso',
        featured: true,
        tags: ['chaud'],
      },
      {
        id: 'mocha',
        name: 'Moka',
        description: 'Espresso avec chocolat et lait vapeur',
        price: '5,50 $',
        category: 'espresso',
        tags: ['chaud'],
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: 'Parts égales d\'espresso et de lait vapeur',
        price: '4,50 $',
        category: 'espresso',
        tags: ['chaud'],
      },

      // Café Infusé
      {
        id: 'drip',
        name: 'Café Filtre',
        description: 'Café filtré classique, change quotidiennement',
        price: '3,00 $',
        category: 'brewed',
        tags: ['chaud'],
      },
      {
        id: 'pour-over',
        name: 'Versé',
        description: 'Café d\'origine unique infusé sur commande',
        price: '5,50 $',
        category: 'brewed',
        featured: true,
        tags: ['chaud'],
      },
      {
        id: 'french-press',
        name: 'Presse Française',
        description: 'Infusion par immersion corsée (sert 2)',
        price: '7,00 $',
        category: 'brewed',
        tags: ['chaud'],
      },

      // Boissons Spéciales
      {
        id: 'vanilla-latte',
        name: 'Latte à la Vanille',
        description: 'Latte avec sirop de vanille maison',
        price: '5,50 $',
        category: 'specialty',
        tags: ['chaud'],
      },
      {
        id: 'caramel-macchiato',
        name: 'Macchiato au Caramel',
        description: 'Latte vanille avec filet de caramel',
        price: '5,75 $',
        category: 'specialty',
        tags: ['chaud'],
      },
      {
        id: 'honey-lavender',
        name: 'Latte Miel Lavande',
        description: 'Latte avec miel et lavande',
        price: '6,00 $',
        category: 'specialty',
        featured: true,
        tags: ['chaud'],
      },

      // Boissons Froides
      {
        id: 'cold-brew',
        name: 'Infusion Froide',
        description: 'Infusion froide douce et naturellement sucrée',
        price: '4,50 $',
        category: 'cold',
        featured: true,
        tags: ['glacé'],
      },
      {
        id: 'iced-latte',
        name: 'Latte Glacé',
        description: 'Espresso sur glace avec lait froid',
        price: '5,25 $',
        category: 'cold',
        tags: ['glacé'],
      },
      {
        id: 'nitro-cold-brew',
        name: 'Infusion Froide Nitro',
        description: 'Infusion froide infusée à l\'azote',
        price: '5,50 $',
        category: 'cold',
        tags: ['glacé'],
      },
      {
        id: 'iced-mocha',
        name: 'Moka Glacé',
        description: 'Espresso glacé avec chocolat',
        price: '5,75 $',
        category: 'cold',
        tags: ['glacé'],
      },

      // Nourriture
      {
        id: 'croissant',
        name: 'Croissant au Beurre',
        description: 'Pâtisserie française feuilletée et beurrée',
        price: '4,00 $',
        category: 'food',
        tags: [],
      },
      {
        id: 'chocolate-croissant',
        name: 'Croissant au Chocolat',
        description: 'Croissant fourré au chocolat noir',
        price: '4,50 $',
        category: 'food',
        tags: [],
      },
      {
        id: 'muffin',
        name: 'Muffin aux Bleuets',
        description: 'Fraîchement cuit avec des bleuets locaux',
        price: '3,50 $',
        category: 'food',
        tags: [],
      },
      {
        id: 'avocado-toast',
        name: 'Toast à l\'Avocat',
        description: 'Avocat écrasé sur pain au levain',
        price: '8,00 $',
        category: 'food',
        featured: true,
        tags: ['végétalien'],
      },
      {
        id: 'bagel',
        name: 'Bagel au Fromage à la Crème',
        description: 'Bagel frais avec fromage à la crème',
        price: '5,00 $',
        category: 'food',
        tags: [],
      },
    ],
  },

  // SECTION GALERIE
  gallery: {
    sectionTitle: 'Notre Espace',
    subtitle: 'Un aperçu de l\'expérience Aroma Haven',
    categories: ['Tout', 'Café', 'Intérieur', 'Nourriture', 'Événements'],
  },

  // SECTION EMPLACEMENT
  location: {
    sectionTitle: 'Nous Rendre Visite',
    heading: 'Trouvez-Nous Ici',
    subtitle: 'Venez nous rendre visite pour une tasse chaleureuse et une conversation encore plus chaleureuse',
    address: {
      street: '123 Rue du Café',
      city: 'Portland',
      state: 'OR',
      zip: '97204',
      country: 'États-Unis',
    },
    hours: {
      monday: '7h00 - 18h00',
      tuesday: '7h00 - 18h00',
      wednesday: '7h00 - 18h00',
      thursday: '7h00 - 18h00',
      friday: '7h00 - 20h00',
      saturday: '8h00 - 20h00',
      sunday: '8h00 - 18h00',
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'bonjour@aromahaven.coffee',
      social: {
        instagram: 'https://instagram.com/aromahaven',
        facebook: 'https://facebook.com/aromahaven',
        twitter: 'https://twitter.com/aromahaven',
      },
    },
    mapUrl: 'https://maps.google.com/?q=123+Brew+Street+Portland+OR',
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
    businessName: 'Aroma Haven Coffee',
    tagline: 'Créé avec amour depuis 2018',
    copyright: '© 2024 Aroma Haven Coffee. Tous droits réservés.',
    links: [
      { label: 'Menu', url: '#menu' },
      { label: 'À Propos', url: '#about' },
      { label: 'Emplacement', url: '#location' },
      { label: 'Traiteur', url: '#catering' },
      { label: 'Carrières', url: '#careers' },
      { label: 'Politique de Confidentialité', url: '#privacy' },
    ],
    labels: {
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
    },
  },
};
