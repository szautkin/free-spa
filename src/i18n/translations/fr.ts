/**
 * French Translations
 * Traductions françaises professionnelles et naturelles
 */

import type { Translations } from '../types';

export const fr: Translations = {
  language: 'fr',

  nav: {
    home: 'Accueil',
    journey: 'Voyage',
    chronicles: 'Chroniques',
    gallery: 'Galerie',
    gorlitz: 'Görlitz',
    voices: 'Témoignages',
  },

  hero: {
    title: 'À travers les kilomètres, enfin réunis',
    subtitle: 'Un frère. Un voyage. Une semaine inoubliable.',
    date: '8-14 novembre 2025',
    location: 'Görlitz, Allemagne',
    stats: {
      miles: 'Kilomètres',
      days: 'Jours',
      memories: 'Souvenirs',
      places: 'Lieux',
    },
    scrollDown: 'Défiler vers la section voyage',
    loadingMemories: 'Chargement des souvenirs...',
    photoIndicator: 'Voir la photo {current} sur {total}',
  },

  journey: {
    title: 'Des kilomètres aux souvenirs',
    subtitle: 'Un voyage de milliers de kilomètres pour sept jours d\'amour',
    stats: {
      milesTraveled: 'Kilomètres parcourus',
      milesValue: '4 583',
      hoursInTransit: 'Heures de voyage',
      hoursValue: '14',
      preciousDays: 'Jours précieux ensemble',
      daysValue: '7',
    },
    narrative: {
      title: 'Un voyage qui vaut chaque kilomètre',
      paragraph1:
        'De l\'autre côté de l\'Atlantique, le frère s\'est lancé dans un voyage qui l\'a mené à travers trois vols et deux continents. Chaque kilomètre le rapprochait d\'une réunion préparée depuis des années.',
      paragraph2:
        'À travers les aéroports animés et les moments paisibles au-dessus des nuages, l\'anticipation grandissait à chaque heure qui passait. La pensée de revoir sa famille — d\'embrasser sa sœur, de rencontrer sa nièce et de passer du temps précieux avec sa mère — rendait chaque minute du voyage précieuse.',
      quote:
        'Quand la distance se mesure en amour, aucun voyage n\'est trop long. Quand la destination est la famille, chaque kilomètre devient une célébration de ce qui compte vraiment.',
    },
    timeline: {
      departure: {
        title: 'Départ',
        description:
          'Quitter la maison le cœur plein d\'anticipation, prêt à franchir les kilomètres qui séparent la famille',
      },
      journey: {
        title: 'Voyage',
        description:
          'À travers les escales et les fuseaux horaires, l\'excitation grandit. Chaque vol rapproche de la famille',
      },
      arrival: {
        title: 'Arrivée',
        description:
          'Enfin, Görlitz. Le moment des retrouvailles, où le voyage se termine et les souvenirs commencent',
      },
    },
    mapPlaceholder: 'Carte interactive du voyage à venir',
    mapSubtitle: 'Visualisation du trajet du départ aux retrouvailles',
  },

  chronicles: {
    title: 'Sept jours pour l\'éternité',
    subtitle: 'Chaque jour, un chapitre de notre histoire',
    dayLabel: 'Jour',
    timeline: {
      day1: {
        title: 'Le voyage commence',
        theme: 'Retrouvailles',
        description:
          'Après des années de séparation, le moment tant attendu est enfin arrivé. Un voyage à travers les continents pour serrer sa famille dans ses bras une fois de plus. L\'excitation était palpable, l\'anticipation électrisante.',
        quote: 'Chaque kilomètre parcouru en valait la peine pour ce moment.',
        quoteAuthor: 'Le frère',
      },
      day2: {
        title: 'Premiers bonjours',
        theme: 'Connexion',
        description:
          'Le matin a apporté café et conversations. De petites mains se sont tendues, des sourires ont illuminé les visages. La ville nous a accueillis à bras ouverts alors que nous déambulions dans les rues historiques, découvrant la magie à chaque coin de rue.',
        quote: 'Les voir se rencontrer, c\'était comme voir l\'amour se multiplier.',
        quoteAuthor: 'Maman',
      },
      day3: {
        title: 'Explorer ensemble',
        theme: 'Aventure',
        description:
          'Une journée d\'exploration tranquille. Parfois, les meilleurs moments sont ceux entre les photographies — les rires, les histoires, les silences confortables qui en disent long.',
        quote: 'Pas besoin de capturer chaque instant pour le chérir.',
        quoteAuthor: 'Le frère',
      },
      day4: {
        title: 'La magie de la ville',
        theme: 'Découverte',
        description:
          'Aujourd\'hui, la ville a révélé ses secrets. De la lumière matinale peignant les rues aux aventures de l\'après-midi et aux réflexions paisibles du soir. Chaque moment un trésor, chaque sourire un cadeau.',
        quote: 'Chez soi, c\'est là où nous sommes ensemble.',
        quoteAuthor: 'La famille',
      },
      day5: {
        title: 'Moments tranquilles',
        theme: 'Ensemble',
        description:
          'Le milieu de la semaine a apporté un rythme confortable. Pas de précipitation, pas de programme — juste être. Repas partagés, rires partagés, vie partagée. Ce sont ces moments qui tissent la trame de la famille.',
        quote: 'Le plus beau cadeau, c\'est le temps donné librement et reçu avec gratitude.',
        quoteAuthor: 'Maman',
      },
      day6: {
        title: 'Dernières aventures',
        theme: 'Savourer',
        description:
          'Avec la fin en vue, chaque moment est devenu plus précieux. Nous avons savouré chaque expérience, sachant que demain apporterait les adieux. Mais aujourd\'hui — aujourd\'hui nous appartenait encore.',
        quote: 'Ne comptons pas les heures, faisons en sorte que les heures comptent.',
        quoteAuthor: 'Le frère',
      },
      day7: {
        title: 'Adieux doux-amers',
        theme: 'Pour toujours',
        description:
          'Le dernier matin est arrivé trop tôt. Les étreintes ont duré un peu plus longtemps, les sourires étaient un peu plus lumineux, les yeux un peu plus humides. Ce n\'est pas un adieu — c\'est "à bientôt". Les kilomètres entre nous ne sont que des chiffres ; l\'amour est infini.',
        quote: 'La distance compte si peu quand quelqu\'un compte tellement.',
        quoteAuthor: 'La famille',
      },
    },
  },

  gallery: {
    title: 'Cœurs capturés',
    subtitle: 'Chaque moment, préservé avec amour',
    photoCount: {
      single: 'photo',
      multiple: 'photos',
    },
    categories: {
      all: 'Tous les moments',
      firstHellos: 'Premiers bonjours',
      littleWonders: 'Petites merveilles',
      mothersJoy: 'La joie de maman',
      gorlitzMagic: 'La magie de Görlitz',
      tableTales: 'Histoires de table',
      quietTogether: 'Ensemble en silence',
    },
    categoryDescriptions: {
      all: 'Chaque souvenir précieux',
      firstHellos: 'Moments de retrouvailles',
      littleWonders: 'Moments précieux de la nièce',
      mothersJoy: 'Maman avec ses enfants',
      gorlitzMagic: 'Explorer la ville',
      tableTales: 'Repas et conversations',
      quietTogether: 'Moments candides et paisibles',
    },
    emptyState: 'Aucune photo trouvée dans cette catégorie.',
  },

  gorlitz: {
    title: 'Notre semaine, notre ville',
    subtitle: 'Görlitz : la toile de fond de nos souvenirs',
    cityIntro: {
      title: 'Une ville figée dans le temps',
      paragraph1:
        'Nichée à la frontière germano-polonaise, Görlitz est l\'une des villes médiévales les mieux préservées d\'Allemagne. Avec ses rues pavées, son architecture baroque et ses ponts enjambant la Neisse, elle est devenue bien plus qu\'un simple lieu — elle fut la scène parfaite pour nos retrouvailles familiales.',
      paragraph2:
        'Chaque coin découvert révélait une nouvelle beauté. Chaque rue promettait un autre moment partagé. Cette ville historique a été témoin de nos rires, de nos conversations et de notre amour.',
    },
    locations: {
      cafe: {
        name: 'Café du coin',
        description:
          'Notre lieu de rituel matinal pour le café et les gâteaux, où les conversations coulaient aussi librement que le café.',
        highlight: 'L\'endroit où chaque journée commençait dans la chaleur',
      },
      bridge: {
        name: 'Pont de la vieille ville',
        description:
          'Pont historique enjambant la Neisse, offrant des vues à couper le souffle sur l\'architecture de la vieille ville.',
        highlight: 'Où nous avons pris nos photos de famille préférées',
      },
      park: {
        name: 'Parc municipal',
        description:
          'Terrain de jeu naturel où notre nièce a découvert les feuilles d\'automne et où nous avons trouvé des moments paisibles ensemble.',
        highlight: 'Rires résonnant à travers les arbres dorés',
      },
      restaurant: {
        name: 'Lieu de dîner familial',
        description:
          'Restaurant allemand traditionnel où nous avons partagé repas, histoires et créé des souvenirs autour d\'une nourriture copieuse.',
        highlight: 'La table où les liens familiaux se sont renforcés',
      },
    },
    mapPlaceholder: 'Carte interactive avec nos parcours quotidiens à venir',
    mapSubtitle: 'Retracez nos pas à travers cette ville historique',
  },

  voices: {
    title: 'Dans nos mots',
    subtitle: 'Réflexions sur une semaine qui a touché nos cœurs',
    quotes: {
      brother: {
        text: 'Chaque kilomètre parcouru s\'efface au moment où vous êtes dans les bras l\'un de l\'autre. Quatorze heures de vol se sont transformées en quatorze secondes d\'anticipation quand j\'ai vu ma famille m\'attendre.',
        author: 'Le frère',
        role: 'Le voyageur',
      },
      sister: {
        text: 'Ouvrir notre maison signifiait ouvrir nos cœurs encore plus grand. Voir mon frère avec ma fille, voir la joie de maman — ce n\'étaient pas de simples visites, c\'étaient des chapitres de notre histoire familiale écrits ensemble.',
        author: 'La sœur',
        role: 'L\'hôtesse',
      },
      mother: {
        text: 'Voir mes enfants réunis à nouveau, les serrer tous les deux contre moi, regarder la prochaine génération découvrir les liens familiaux — c\'est le rêve de toute mère. Sept jours qui ont semblé contenir sept années d\'amour compressées en pure joie.',
        author: 'Maman',
        role: 'Le cœur',
      },
      niece: {
        text: 'J\'ai appris que la famille est plus grande qu\'une seule maison. Tonton est venu de très loin juste pour jouer avec moi et faire sourire maman. Ça veut dire qu\'on est très spéciaux pour lui.',
        author: 'La nièce',
        role: 'L\'émerveillement',
      },
    },
    closingReflection:
      'Quatre voix, un seul cœur. Quatre perspectives, une semaine inoubliable.',
  },

  footer: {
    about: {
      title: 'Görlitz 2025',
      description:
        'Une mémoire numérique d\'amour, de rires et de connexion. Préservant une semaine inoubliable ensemble à travers les kilomètres.',
    },
    ourStory: {
      title: 'Notre histoire',
      journey: 'Le voyage',
      dailyChronicles: 'Chroniques quotidiennes',
      photoGallery: 'Galerie photo',
      familyVoices: 'Témoignages familiaux',
    },
    foreverConnected: {
      title: 'Unis pour toujours',
      message:
        'La distance ne peut diminuer l\'amour. Cette semaine nous a rappelé que la famille est éternelle, peu importe les kilomètres qui nous séparent.',
    },
    madeWithLove: 'pour la famille Görlitz',
    copyright: 'Réunion familiale Görlitz. Tous les souvenirs préservés avec amour.',
  },

  common: {
    closeMenu: 'Fermer le menu',
    openMenu: 'Ouvrir le menu',
    goToTop: 'Aller en haut',
    backToTop: 'Retour en haut',
    loading: 'Chargement...',
    error: 'Une erreur s\'est produite',
  },
};
