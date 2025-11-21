/**
 * Spanish Translations - Mechanic Shop
 * Traducciones en español para el taller mecánico
 */

import type { Translations } from '../types';

export const es: Translations = {
  language: 'es',

  nav: {
    home: 'Inicio',
    journey: 'Servicios',
    chronicles: 'Nosotros',
    gallery: 'Galería',
    gorlitz: 'Ubicación',
    voices: 'Testimonios',
  },

  hero: {
    title: 'Precision Auto Care',
    subtitle: 'Su Socio Confiable en Reparación Automotriz',
    date: '',
    location: 'Springfield, IL',
    stats: {
      miles: 'Años',
      days: 'Técnicos',
      memories: 'Clientes',
      places: 'Servicios',
    },
    scrollDown: 'Desplazar hacia abajo',
    loadingMemories: 'Cargando...',
    photoIndicator: 'Ver foto {current} de {total}',
  },

  journey: {
    title: 'Nuestros Servicios',
    subtitle: 'Expertos en reparación automotriz para todas las marcas y modelos',
    stats: {
      milesTraveled: 'Años de Experiencia',
      milesValue: '19',
      hoursInTransit: 'Técnicos Certificados',
      hoursValue: '8',
      preciousDays: 'Clientes Satisfechos',
      daysValue: '5000+',
    },
    narrative: {
      title: 'Servicio de Calidad en el que Puede Confiar',
      paragraph1:
        'En Precision Auto Care, entendemos que su vehículo es más que transporte: es su libertad, su sustento y la seguridad de su familia. Por eso tratamos cada automóvil que ingresa a nuestro taller con el mismo cuidado que le daríamos al nuestro.',
      paragraph2:
        'Nuestro equipo de técnicos certificados por ASE aporta más de 75 años de experiencia combinada a cada trabajo. Desde mantenimiento de rutina hasta diagnósticos complejos, utilizamos equipos de última generación y piezas genuinas para garantizar que su vehículo funcione al máximo rendimiento.',
      quote:
        'Creemos en un servicio transparente y honesto. Antes de comenzar cualquier trabajo, le explicaremos qué se debe hacer y por qué. Sin sorpresas, sin tarifas ocultas, solo soluciones directas para mantenerlo en la carretera de manera segura.',
    },
    timeline: {
      departure: {
        title: 'Mantenimiento Preventivo',
        description:
          'Servicios regulares para mantener su vehículo funcionando sin problemas',
      },
      journey: {
        title: 'Reparaciones y Diagnósticos',
        description:
          'Solución experta de problemas y servicios de reparación',
      },
      arrival: {
        title: 'Servicios Especializados',
        description:
          'Servicios avanzados y trabajo personalizado para todas sus necesidades',
      },
    },
    mapPlaceholder: 'Nuestros Servicios Principales',
    mapSubtitle: 'Servicio completo para mantener su vehículo en óptimas condiciones',
  },

  chronicles: {
    title: 'Sobre Nosotros',
    subtitle: 'Servicio de calidad desde 2005',
    dayLabel: 'Paso',
    timeline: {
      day1: {
        title: 'Nuestra Historia',
        theme: 'Fundación',
        description:
          'Fundado en 2005, Precision Auto Care ha servido a la comunidad de Springfield durante casi dos décadas. Lo que comenzó como un pequeño taller de reparación familiar se ha convertido en el destino de confianza para el servicio automotriz en el área.',
        quote: 'Calidad, honestidad e integridad en cada trabajo.',
        quoteAuthor: 'Fundador',
      },
      day2: {
        title: 'Certificado ASE',
        theme: 'Excelencia',
        description:
          'Todos nuestros técnicos están certificados por el Instituto Nacional de Excelencia en Servicio Automotriz (ASE). Mantenemos los más altos estándares de la industria y nos mantenemos actualizados con las últimas tecnologías automotrices.',
        quote: 'La educación continua es clave para un servicio excepcional.',
        quoteAuthor: 'Jefe de Técnicos',
      },
      day3: {
        title: 'Equipos Modernos',
        theme: 'Tecnología',
        description:
          'Invertimos en las herramientas de diagnóstico y equipos de reparación más recientes. Nuestro taller cuenta con escáneres computarizados de última generación, elevadores hidráulicos y herramientas especializadas para todas las marcas y modelos.',
        quote: 'Las herramientas adecuadas hacen el trabajo correcto.',
        quoteAuthor: 'Gerente de Servicio',
      },
      day4: {
        title: 'Piezas de Calidad',
        theme: 'Confiabilidad',
        description:
          'Utilizamos solo piezas OEM y repuestos de primera calidad con cobertura de garantía. Su vehículo merece lo mejor, y nos aseguramos de que cada pieza cumpla con nuestros altos estándares de calidad.',
        quote: 'Las piezas de calidad significan reparaciones duraderas.',
        quoteAuthor: 'Especialista en Piezas',
      },
      day5: {
        title: 'Enfoque en el Cliente',
        theme: 'Servicio',
        description:
          'Su satisfacción es nuestra prioridad. Ofrecemos precios transparentes, evaluaciones honestas y un servicio excepcional. Nos tomamos el tiempo para explicar cada reparación y responder todas sus preguntas.',
        quote: 'Los clientes satisfechos son nuestro mejor publicidad.',
        quoteAuthor: 'Gerente de Relaciones con Clientes',
      },
      day6: {
        title: 'Participación Comunitaria',
        theme: 'Comunidad',
        description:
          'Estamos orgullosos de ser parte de la comunidad de Springfield. Apoyamos equipos deportivos locales, eventos benéficos y escuelas. Su confianza nos impulsa a retribuir.',
        quote: 'Servir a nuestra comunidad es un honor.',
        quoteAuthor: 'Propietario',
      },
      day7: {
        title: 'Su Socio de Confianza',
        theme: 'Compromiso',
        description:
          'Estamos comprometidos a ser su socio de confianza para todas sus necesidades automotrices. Desde cambios de aceite de rutina hasta reparaciones importantes del motor, lo tenemos cubierto.',
        quote: 'Manteniéndolo seguro en la carretera, un vehículo a la vez.',
        quoteAuthor: 'Equipo de Precision Auto Care',
      },
    },
  },

  gallery: {
    title: 'Nuestro Trabajo',
    subtitle: 'Artesanía de calidad en la que puede confiar',
    photoCount: {
      single: 'foto',
      multiple: 'fotos',
    },
    categories: {
      all: 'Todo',
      firstHellos: 'Taller',
      littleWonders: 'Servicios',
      mothersJoy: 'Equipo',
      gorlitzMagic: 'Autos de Clientes',
      tableTales: 'Antes y Después',
      quietTogether: 'Comunidad',
    },
    categoryDescriptions: {
      all: 'Ver todas las fotos',
      firstHellos: 'Nuestras instalaciones modernas',
      littleWonders: 'Servicios en progreso',
      mothersJoy: 'Conozca a nuestro equipo',
      gorlitzMagic: 'Vehículos que servimos',
      tableTales: 'Resultados de reparación',
      quietTogether: 'Eventos comunitarios',
    },
    emptyState: 'No se encontraron fotos en esta categoría.',
  },

  gorlitz: {
    title: 'Visítenos',
    subtitle: 'Convenientemente ubicado en Springfield',
    cityIntro: {
      title: 'Su Taller de Reparación Local',
      paragraph1:
        'Ubicado en 456 Mechanic Avenue en el corazón de Springfield, Precision Auto Care está convenientemente situado para atender a toda el área metropolitana. Nuestro taller de última generación cuenta con 8 bahías de servicio, una cómoda área de espera y estacionamiento amplio.',
      paragraph2:
        'Estamos abiertos de lunes a sábado con horarios convenientes para adaptarse a su agenda. Se aceptan visitas sin cita previa, o puede programar su cita en línea para un servicio aún más rápido.',
    },
    locations: {
      cafe: {
        name: 'Área de Espera',
        description:
          'Área de espera cómoda con WiFi gratis, café y refrigerios de cortesía',
        highlight: 'Relájese mientras trabajamos en su vehículo',
      },
      bridge: {
        name: 'Bahías de Servicio',
        description:
          '8 bahías de servicio totalmente equipadas con herramientas y equipos de diagnóstico modernos',
        highlight: 'Espacio de trabajo profesional para un servicio de calidad',
      },
      park: {
        name: 'Estacionamiento',
        description:
          'Estacionamiento amplio para clientes con fácil acceso para dejar y recoger vehículos',
        highlight: 'Conveniente para entrega y recogida',
      },
      restaurant: {
        name: 'Servicio de Transporte',
        description:
          'Servicio de transporte cortesía disponible dentro del área de Springfield',
        highlight: 'No se quede varado mientras su auto está en servicio',
      },
    },
    mapPlaceholder: 'Mapa de ubicación próximamente',
    mapSubtitle: 'Encuéntrenos en 456 Mechanic Avenue, Springfield, IL',
  },

  voices: {
    title: 'Testimonios de Clientes',
    subtitle: 'Lo que nuestros clientes dicen sobre nosotros',
    quotes: {
      brother: {
        text: 'He llevado mi auto a Precision durante 5 años. Siempre son honestos, justos y hacen un trabajo excelente. Nunca me han presionado para hacer trabajos innecesarios. ¡Altamente recomendado!',
        author: 'Mike Johnson',
        role: 'Cliente desde 2019',
      },
      sister: {
        text: 'Como mujer, a menudo me he sentido estafada en talleres de reparación. No aquí. El equipo de Precision se toma el tiempo para explicar todo, mostrarme las piezas viejas y nunca me siento presionada. Finalmente encontré un mecánico en quien confío.',
        author: 'Sarah Martinez',
        role: 'Cliente desde 2020',
      },
      mother: {
        text: 'Servicio excepcional a precios justos. Me explicaron exactamente qué estaba mal con mi auto, qué era urgente y qué podía esperar. El trabajo se completó a tiempo y mi auto funciona mejor que nunca. Gracias, Precision!',
        author: 'Robert Chen',
        role: 'Cliente desde 2018',
      },
      niece: {
        text: 'Me mudé a Springfield el año pasado y estaba nervioso por encontrar un buen mecánico. Un vecino recomendó Precision y no me ha decepcionado. Profesionales, rápidos y honestos. Mi lugar de referencia para todo el servicio automotriz.',
        author: 'Jennifer Williams',
        role: 'Cliente desde 2023',
      },
    },
    closingReflection:
      'Únase a miles de clientes satisfechos que confían en Precision Auto Care',
  },

  footer: {
    about: {
      title: 'Precision Auto Care',
      description:
        'Su socio confiable en reparación automotriz. Servicio de calidad desde 2005.',
    },
    ourStory: {
      title: 'Enlaces Rápidos',
      journey: 'Servicios',
      dailyChronicles: 'Sobre Nosotros',
      photoGallery: 'Galería',
      familyVoices: 'Testimonios',
    },
    foreverConnected: {
      title: 'Horario de Atención',
      message:
        'Lun-Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 4:00 PM | Dom: Cerrado',
    },
    madeWithLove: 'Servicio de calidad desde 2005',
    copyright: '© 2024 Precision Auto Care. Todos los derechos reservados.',
  },

  common: {
    closeMenu: 'Cerrar menú',
    openMenu: 'Abrir menú',
    goToTop: 'Ir arriba',
    backToTop: 'Volver arriba',
    loading: 'Cargando...',
    error: 'Ocurrió un error',
  },
};
