/**
 * LOCAL STORE FRENCH CONTENT CONFIGURATION
 * Tout le contenu textuel en français pour le magasin familial
 */

import type { ContentConfig } from './content.config';

export const localStoreContentFR: ContentConfig = {
  // MÉTADONNÉES DU SITE
  metadata: {
    siteName: 'Marché du Coin Miller',
    siteDescription: 'Votre marché de quartier depuis 1972. Magasin familial offrant des produits locaux soigneusement sélectionnés, des essentiels quotidiens et une véritable connexion communautaire.',
    siteUrl: 'https://millerscornermarket.com',
    keywords: [
      'magasin local',
      'marché de quartier',
      'commerce familial',
      'produits locaux',
      'entreprise familiale',
      'marché communautaire',
      'artisan local',
      'produits frais',
    ],
  },

  // SECTION HÉROS
  hero: {
    title: 'Marché du Coin Miller',
    subtitle: 'Votre Quartier, Votre Magasin',
    tagline: 'Trois générations au service de notre communauté avec soin, qualité et cette touche personnelle que vous ne trouverez nulle part ailleurs',
    ctaButtons: {
      primary: {
        text: 'Achetez Local',
        link: '#menu',
      },
      secondary: {
        text: 'Visitez-Nous',
        link: '#location',
      },
    },
  },

  // SECTION À PROPOS
  about: {
    sectionTitle: 'Notre Histoire',
    heading: 'Au Service de Nos Voisins Depuis 1972',
    story: [
      'Lorsque George et Martha Miller ont ouvert nos portes en 1972, ils avaient une vision simple : créer un lieu où les voisins deviennent des amis et où faire ses courses ressemble à rentrer chez soi. Aujourd\'hui, leurs petits-enfants dirigent le magasin avec la même chaleur et le même dévouement, connaissant la plupart des clients par leur nom et se souvenant de leurs produits préférés.',
      'Nous ne sommes pas qu\'un simple magasin—nous sommes une partie vitale du tissu de notre quartier. Vous trouverez des produits artisanaux locaux soigneusement sélectionnés aux côtés des essentiels quotidiens, des produits de saison provenant de fermes voisines, et ces articles spécialisés difficiles à trouver que nous commanderons volontiers pour vous. Chaque produit est choisi avec soin, chaque fournisseur est quelqu\'un que nous connaissons et en qui nous avons confiance.',
      'À une époque de grandes surfaces impersonnelles et d\'achats en ligne, nous offrons quelque chose de de plus en plus rare : une connexion authentique. Que vous veniez chercher du lait, découvrir une nouvelle confiture locale, ou simplement passer pour discuter du quartier, vous êtes toujours les bienvenus ici. C\'est plus qu\'un marché—c\'est là que la communauté prend vie.',
    ],
    highlights: [
      {
        title: 'Entreprise Familiale',
        description: 'Trois générations au service de notre communauté avec soin',
      },
      {
        title: 'Local d\'Abord',
        description: 'Sélection organisée d\'agriculteurs et artisans régionaux',
      },
      {
        title: 'Service Personnel',
        description: 'Nous connaissons votre nom et nous souvenons de vos favoris',
      },
      {
        title: 'Hub Communautaire',
        description: 'Plus qu\'un magasin—un lieu de rassemblement du quartier',
      },
    ],
  },

  // SECTION MENU (Produits et Services)
  menu: {
    sectionTitle: 'Ce Que Nous Offrons',
    subtitle: 'Produits et Services de Qualité pour Notre Communauté',
    featuredTitle: 'Favoris des Clients',
    categories: [
      {
        id: 'essentials',
        name: 'Essentiels Quotidiens',
        description: 'Épicerie et articles ménagers pour les besoins quotidiens',
      },
      {
        id: 'local-artisan',
        name: 'Produits Artisanaux Locaux',
        description: 'Produits faits à la main par des artisans régionaux',
      },
      {
        id: 'fresh',
        name: 'Frais et Saisonniers',
        description: 'Produits frais, laitiers et spécialités saisonnières',
      },
      {
        id: 'services',
        name: 'Services Communautaires',
        description: 'Services spéciaux pour vous faciliter la vie',
      },
    ],
    items: [
      // Essentiels Quotidiens
      {
        id: 'pantry-staples',
        name: 'Produits de Base',
        description: 'Farine, sucre, riz, pâtes et essentiels de qualité pour la pâtisserie',
        price: 'À partir de 2,50 $',
        category: 'essentials',
        tags: ['quotidien'],
      },
      {
        id: 'dairy-eggs',
        name: 'Produits Laitiers et Œufs',
        description: 'Lait frais, beurre, fromage et œufs de ferme de laiteries locales',
        price: 'À partir de 3,50 $',
        category: 'essentials',
        featured: true,
        tags: ['frais', 'local'],
      },
      {
        id: 'snacks-beverages',
        name: 'Collations et Boissons',
        description: 'Café, thé, boissons gazeuses, croustilles et collations santé',
        price: 'À partir de 1,99 $',
        category: 'essentials',
        tags: ['quotidien'],
      },
      {
        id: 'household',
        name: 'Fournitures Ménagères',
        description: 'Produits de nettoyage, articles en papier et nécessités quotidiennes',
        price: 'À partir de 3,00 $',
        category: 'essentials',
        tags: ['quotidien'],
      },

      // Produits Artisanaux Locaux
      {
        id: 'local-honey',
        name: 'Miel de Fleurs Sauvages',
        description: 'Miel brut de l\'Apiculture Jenkins, récolté dans un rayon de 15 km',
        price: '12,00 $',
        category: 'local-artisan',
        featured: true,
        tags: ['local', 'naturel'],
      },
      {
        id: 'artisan-jams',
        name: 'Conserves Artisanales',
        description: 'Confitures et conserves faites à la main de Riverside Farm Kitchen',
        price: '8,50 $',
        category: 'local-artisan',
        featured: true,
        tags: ['local', 'fait main'],
      },
      {
        id: 'baked-goods',
        name: 'Produits de Boulangerie Frais',
        description: 'Livraison quotidienne de la Boulangerie Sophie—pains, muffins, biscuits',
        price: 'À partir de 4,00 $',
        category: 'local-artisan',
        tags: ['frais', 'local'],
      },
      {
        id: 'craft-items',
        name: 'Artisanat Local et Cadeaux',
        description: 'Savons artisanaux, bougies et cadeaux uniques d\'artisans locaux',
        price: 'À partir de 6,00 $',
        category: 'local-artisan',
        tags: ['fait main', 'cadeaux'],
      },

      // Frais et Saisonniers
      {
        id: 'seasonal-produce',
        name: 'Produits Saisonniers',
        description: 'Fruits et légumes frais de fermes voisines, changent chaque semaine',
        price: 'Prix du Marché',
        category: 'fresh',
        featured: true,
        tags: ['frais', 'local', 'saisonnier'],
      },
      {
        id: 'fresh-herbs',
        name: 'Herbes Fraîches',
        description: 'Basilic, coriandre, persil et herbes saisonnières cultivés localement',
        price: '3,50 $',
        category: 'fresh',
        tags: ['frais', 'local'],
      },
      {
        id: 'specialty-cheese',
        name: 'Fromages Artisanaux',
        description: 'Sélection tournante de fromages fermiers régionaux',
        price: 'À partir de 9,00 $',
        category: 'fresh',
        tags: ['local', 'spécialité'],
      },
      {
        id: 'prepared-foods',
        name: 'Plats Préparés',
        description: 'Soupes, salades et repas prêts à réchauffer de cuisines locales',
        price: 'À partir de 8,00 $',
        category: 'fresh',
        tags: ['frais', 'local'],
      },

      // Services
      {
        id: 'local-delivery',
        name: 'Livraison de Quartier',
        description: 'Livraison gratuite dans un rayon de 3 km pour les commandes de plus de 25 $',
        price: 'Gratuit',
        category: 'services',
        featured: true,
        tags: ['service'],
      },
      {
        id: 'special-orders',
        name: 'Commandes Spéciales',
        description: 'Vous ne le trouvez pas ? Nous commanderons cet article rare pour vous',
        price: 'Variable',
        category: 'services',
        tags: ['service'],
      },
      {
        id: 'gift-baskets',
        name: 'Paniers Cadeaux Personnalisés',
        description: 'Paniers personnalisés avec produits locaux—parfaits pour toute occasion',
        price: 'À partir de 35 $',
        category: 'services',
        tags: ['service', 'cadeaux'],
      },
      {
        id: 'community-board',
        name: 'Tableau Communautaire',
        description: 'Affichage gratuit pour événements locaux, services et nouvelles du quartier',
        price: 'Gratuit',
        category: 'services',
        tags: ['service'],
      },
    ],
  },

  // SECTION GALERIE
  gallery: {
    sectionTitle: 'Notre Marché',
    subtitle: 'Un aperçu de votre magasin de quartier',
    categories: ['Tout', 'Magasin', 'Produits', 'Artisans Locaux', 'Communauté'],
  },

  // SECTION LOCALISATION
  location: {
    sectionTitle: 'Visitez-Nous',
    heading: 'Trouvez-Nous au Coin de la Rue',
    subtitle: 'En plein cœur de votre quartier, où nous sommes depuis plus de 50 ans',
    address: {
      street: '412 rue Maple',
      city: 'Springfield',
      state: 'MA',
      zip: '01103',
      country: 'USA',
    },
    hours: {
      monday: '7h00 - 20h00',
      tuesday: '7h00 - 20h00',
      wednesday: '7h00 - 20h00',
      thursday: '7h00 - 20h00',
      friday: '7h00 - 21h00',
      saturday: '7h00 - 21h00',
      sunday: '8h00 - 19h00',
    },
    contact: {
      phone: '(413) 555-2847',
      email: 'bonjour@millerscornermarket.com',
      social: {
        instagram: 'https://instagram.com/millerscorner',
        facebook: 'https://facebook.com/millerscornermarket',
      },
    },
    mapUrl: 'https://maps.google.com/?q=412+Maple+Street+Springfield+MA',
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
    businessName: 'Marché du Coin Miller',
    tagline: 'Vos voisins depuis 1972',
    copyright: '© 2024 Marché du Coin Miller. Tous droits réservés.',
    links: [
      { label: 'Magasiner', url: '#menu' },
      { label: 'À Propos', url: '#about' },
      { label: 'Localisation', url: '#location' },
      { label: 'Producteurs Locaux', url: '#producers' },
      { label: 'Événements Communautaires', url: '#events' },
      { label: 'Contact', url: '#contact' },
    ],
    labels: {
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
    },
  },
};
