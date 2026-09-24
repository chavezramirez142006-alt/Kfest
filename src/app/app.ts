import { Component } from '@angular/core';

export type Language = 'es' | 'en';
export type GrindType = 'grano' | 'v60' | 'prensa' | 'gota';
export type CataFormat = 'grano' | 'molido';
export type EventType = 'bodas' | 'corporativos' | 'ferias' | 'aniversarios' | 'lanzamientos' | 'privados';
export type BrewMethod = 'v60' | 'prensa' | 'moka' | 'espresso' | 'chemex' | 'gota';
export type TraceabilityTab = 'origen' | 'proceso' | 'cata' | 'social';

export type WhatsAppAction =
  | 'hero'
  | 'prod_250g'
  | 'prod_500g'
  | 'prod_1kg'
  | 'delivery'
  | 'cata_fe'
  | 'cata_paciencia'
  | 'cata_tolerancia'
  | 'cata_respeto'
  | 'utilkfest'
  | 'catering'
  | 'concierge';

export interface BrewConfig {
  name: { es: string; en: string };
  ratio: number;
  waterPerCup: number;
  grind: { es: string; en: string };
  temp: number;
  time: string;
  tip: { es: string; en: string };
  icon: string;
}

export const BREW_CONFIGS: Record<BrewMethod, BrewConfig> = {
  v60: {
    name: { es: 'V60 / Filtrado Cónico', en: 'V60 / Pour Over' },
    ratio: 15,
    waterPerCup: 180,
    grind: { es: 'Media-Fina (textura de sal de mesa)', en: 'Medium-Fine' },
    temp: 92,
    time: '2:45 – 3:15 min',
    tip: {
      es: 'Realiza un pre-infusionado ("bloom") de 35s con el doble de agua para despertar las notas a panela y miel del Fundo Santa Teresita.',
      en: 'Perform a 35s bloom with double the water to awaken the honey and golden panela notes.'
    },
    icon: 'fa-solid fa-filter'
  },
  prensa: {
    name: { es: 'Prensa Francesa', en: 'French Press' },
    ratio: 12,
    waterPerCup: 200,
    grind: { es: 'Gruesa (textura de sal marina)', en: 'Coarse' },
    temp: 94,
    time: '4:00 min',
    tip: {
      es: 'Vierte toda el agua, reposa 4 min. Rompe la costra superficial con cuchara, retira la espuma y baja el émbolo lentamente sin presionar el fondo.',
      en: 'Pour all water, rest 4 min. Break the crust, skim foam, and press plunger gently without crushing bottom grounds.'
    },
    icon: 'fa-solid fa-mug-hot'
  },
  moka: {
    name: { es: 'Cafetera Moka Italiana', en: 'Moka Pot' },
    ratio: 10,
    waterPerCup: 60,
    grind: { es: 'Fina calibrada (arenilla fina)', en: 'Fine' },
    temp: 90,
    time: '2:30 min',
    tip: {
      es: 'Llena la base con agua ya caliente hasta la válvula y retira del fuego apenas comience el gorgoteo para evitar notas amargas.',
      en: 'Fill lower chamber with pre-heated water up to the safety valve; remove immediately upon gurgling.'
    },
    icon: 'fa-solid fa-fire-burner'
  },
  espresso: {
    name: { es: 'Espresso Máquina', en: 'Espresso Machine' },
    ratio: 2,
    waterPerCup: 36,
    grind: { es: 'Extra Fina (polvo suave)', en: 'Extra Fine' },
    temp: 93,
    time: '25 – 30 seg',
    tip: {
      es: 'Tampado nivelado a 9 bares de presión. La crema avellana dorada encapsulará los aceites aromáticos de cacao puro.',
      en: 'Level 9-bar tamping pressure yields a golden hazelnut crema encapsulating pure cacao aromatics.'
    },
    icon: 'fa-solid fa-bolt'
  },
  chemex: {
    name: { es: 'Chemex Artesanal', en: 'Chemex' },
    ratio: 16,
    waterPerCup: 220,
    grind: { es: 'Media (arena de río)', en: 'Medium' },
    temp: 93,
    time: '4:00 – 4:30 min',
    tip: {
      es: 'Enjuaga el filtro de papel grueso con abundante agua caliente antes de verter el café para máxima limpieza y brillo en taza.',
      en: 'Rinse thick paper filter thoroughly with hot water first for crystal clarity and bright cup acidity.'
    },
    icon: 'fa-solid fa-flask'
  },
  gota: {
    name: { es: 'Gota a Gota Tradicional', en: 'Rainforest Slow Drip' },
    ratio: 8,
    waterPerCup: 100,
    grind: { es: 'Media-Gruesa', en: 'Medium-Coarse' },
    temp: 91,
    time: '5:00 min',
    tip: {
      es: 'Método patrimonial de la Selva Central. Extrae una esencia de café densa y concentrada, ideal para combinar con leche fresca.',
      en: 'Heritage Amazonian extraction. Yields a dense coffee essence ideal for combining with fresh milk.'
    },
    icon: 'fa-solid fa-droplet'
  }
};

export interface FaqItem {
  q: { es: string; en: string };
  a: { es: string; en: string };
  category: { es: string; en: string };
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: { es: 'Envíos & Pedidos', en: 'Shipping & Orders' },
    q: {
      es: '¿Hacen envíos a Lima y a todas las provincias del Perú?',
      en: 'Do you ship to Lima and all Peruvian provinces?'
    },
    a: {
      es: 'Sí. Realizamos despachos programados todos los lunes, miércoles y viernes desde Chanchamayo directo a Lima y a nivel nacional vía Olva Courier y agencias autorizadas. El tiempo de entrega habitual es de 24 a 48 horas con número de seguimiento.',
      en: 'Yes. We run scheduled dispatches every Monday, Wednesday, and Friday directly from Chanchamayo to Lima and nationwide via certified couriers. Standard delivery time is 24 to 48 hours with full tracking.'
    }
  },
  {
    category: { es: 'Molienda & Frescura', en: 'Grind & Freshness' },
    q: {
      es: '¿Es mejor pedir el café en grano entero o molido?',
      en: 'Is it better to order whole bean or ground coffee?'
    },
    a: {
      es: 'Si cuentas con molino en casa, siempre recomendamos pedir "En Grano" para molerlo al instante y aprovechar el 100% de los aromas. Si no tienes molino, indícanos qué cafetera utilizas y nosotros calibramos la molienda exacta (fina, media o gruesa) recién tostado y molido antes de sellar la bolsa con válvula.',
      en: 'If you have a home grinder, whole bean preserves peak aromatics. If not, simply let us know your brew device and we custom-calibrate the precise grind right before nitrogen valve heat sealing.'
    }
  },
  {
    category: { es: 'Calidad & Origen', en: 'Quality & Origin' },
    q: {
      es: '¿Qué significa que el café tenga entre 81 y 84 puntos SCA?',
      en: 'What does an 81 to 84 SCA cupping score mean?'
    },
    a: {
      es: 'La escala internacional de la Specialty Coffee Association (SCA) califica los mejores cafés del mundo de 0 a 100. Solo aquellos que superan 80 puntos obtienen la categoría formal de "Café de Especialidad". Significa que nuestro café no contiene defectos primarios, ha sido cultivado a más de 1,600 msnm y ofrece notas limpias, dulces y complejas.',
      en: 'The Specialty Coffee Association (SCA) grades global coffees on a 100-point scale. Only coffees scoring 80+ points qualify as "Specialty Coffee". It guarantees zero primary defects, high altitude cultivation at 1,600+ masl, and exceptional sweetness and complexity.'
    }
  },
  {
    category: { es: 'Conservación', en: 'Storage' },
    q: {
      es: '¿Cómo debo conservar mi café para que mantenga sus aromas?',
      en: 'How should I store my coffee to preserve maximum aroma?'
    },
    a: {
      es: 'Mantén la bolsa en su empaque original de triple capa con ziploc y válvula desgasificadora, en un lugar fresco, seco y protegido de la luz solar (alacena). Nunca guardes el café en la refrigeradora, ya que la condensación de humedad y los olores de otros alimentos degradan los aceites aromáticos.',
      en: 'Keep it inside our original triple-layer bag with degas valve in a cool, dark, dry pantry. Never refrigerate coffee, as humidity condensation and external odors quickly compromise delicate coffee oils.'
    }
  },
  {
    category: { es: 'Concierge Kfestcar', en: 'Kfestcar Concierge' },
    q: {
      es: '¿Cómo puedo cotizar la Barra Móvil Kfestcar para un evento o boda?',
      en: 'How do I book the Kfestcar Mobile Espresso Bar for my event?'
    },
    a: {
      es: 'Llevamos nuestro carrito Kfestcar con máquina espresso profesional, baristas certificados y menú de especialidad a bodas, ferias corporativas y eventos privados en Lima y Selva Central. Solo haz clic en "Cotizar Barra Móvil" y te enviamos una propuesta personalizada según el número de invitados.',
      en: 'We bring the mobile Kfestcar bar equipped with professional espresso gear and certified baristas to weddings, corporate galas, and private events. Click "Quote Mobile Bar" and we provide a tailored proposal based on guest count.'
    }
  }
];

export interface TestimonialItem {
  name: string;
  role: { es: string; en: string };
  city: string;
  quote: { es: string; en: string };
  stars: number;
  highlight: { es: string; en: string };
  badge: { es: string; en: string };
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Valeria Mendoza',
    role: { es: 'Catadora Aficionada & Coffee Lover', en: 'Cupper & Coffee Enthusiast' },
    city: 'Miraflores, Lima',
    quote: {
      es: 'El aroma al abrir la bolsa de 500g llena toda la cocina. Notas intensas a panela de oro y frutos secos. Mi método predilecto es la V60 y la taza queda limpia y dulce sin amargor. La atención por WhatsApp fue rápida y muy amable.',
      en: 'The fragrance upon unsealing the 500g bag fills the whole room. Intense golden panela and roasted nut notes. In V60 it extracts clean, sweet and velvety with zero harsh bitterness.'
    },
    stars: 5,
    highlight: { es: 'V60 & Filtrados', en: 'V60 & Filtered' },
    badge: { es: 'Cliente Frecuente', en: 'Verified Patron' }
  },
  {
    name: 'Chef Rodrigo Palacios',
    role: { es: 'Director Gastronómico & Sommelier', en: 'Gastronomic Director & Sommelier' },
    city: 'San Isidro, Lima',
    quote: {
      es: 'Servimos el café de Fundo Santa Teresita en los cierres de nuestros menús degustación. Los comensales elogian la acidez brillante y el balance. Saber que proviene de mujeres caficultoras de Chanchamayo le agrega un valor humano inmenso.',
      en: 'We pair Santa Teresita coffee as the grand finale of our tasting menu. Guests constantly praise the bright balanced acidity. Knowing it empowers family coffee growers in Chanchamayo adds profound value.'
    },
    stars: 5,
    highlight: { es: 'Espresso & Alta Cocina', en: 'Espresso & Haute Cuisine' },
    badge: { es: 'Aliado Gastronómico', en: 'Culinary Partner' }
  },
  {
    name: 'Carlos Echevarría',
    role: { es: 'Arquitecto & Consumidor Diario', en: 'Architect & Daily Drinker' },
    city: 'Surco, Lima',
    quote: {
      es: 'Llevo 6 meses suscrito pidiendo el cofre de 1kg en grano cada mes. Tuesto artesanal en lotes pequeños que se nota en la frescura: granos enteros sin quemar, con tueste medio impecable. Es el verdadero café de chacra.',
      en: 'Been ordering the 1kg whole bean pack monthly for 6 months. Small-batch artisan roasting is evident in freshness: uniform medium roast, beautiful bean integrity, authentic farm taste.'
    },
    stars: 5,
    highlight: { es: 'Pack 1kg En Grano', en: '1kg Whole Bean Pack' },
    badge: { es: 'Suscripción Mensual', en: 'Monthly Subscriber' }
  },
  {
    name: 'Mariana Quispe',
    role: { es: 'Gerente de Experiencias Corporativas', en: 'Corporate Events Manager' },
    city: 'San Borja, Lima',
    quote: {
      es: 'Contratamos el servicio de barra móvil Kfestcar para el aniversario de nuestra empresa (150 personas). La puntualidad, la estética del carrito de madera y la calidad de los flat whites y lattes dejaron boquiabiertos a todos los invitados.',
      en: 'We booked the Kfestcar mobile bar for our corporate anniversary (150 guests). The punctuality, wooden aesthetic, and espresso quality amazed our executive guests.'
    },
    stars: 5,
    highlight: { es: 'Barra Móvil Kfestcar', en: 'Kfestcar Mobile Bar' },
    badge: { es: 'Evento Corporativo', en: 'Corporate Gala' }
  }
];

const GRIND_NAMES: Record<Language, Record<GrindType, string>> = {
  es: {
    grano: 'En Grano (Whole Bean)',
    v60: 'V60 / Filtrado',
    prensa: 'Prensa Francesa (French Press)',
    gota: 'Gota a Gota (Drip)'
  },
  en: {
    grano: 'Whole Bean',
    v60: 'V60 / Drip Filter',
    prensa: 'French Press',
    gota: 'Slow Drip'
  }
};

const EVENT_NAMES: Record<Language, Record<EventType, string>> = {
  es: {
    bodas: 'Bodas de Gala',
    corporativos: 'Corporativos VIP',
    ferias: 'Ferias Gourmet',
    aniversarios: 'Aniversarios',
    lanzamientos: 'Lanzamientos',
    privados: 'Eventos Privados'
  },
  en: {
    bodas: 'Gala Weddings',
    corporativos: 'VIP Corporate',
    ferias: 'Gourmet Fairs',
    aniversarios: 'Anniversaries',
    lanzamientos: 'Product Launches',
    privados: 'Private Events'
  }
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  language: Language = 'es';
  mobileMenuOpen = false;

  // Selected store options
  selectedGrind: GrindType = 'grano';
  selectedCataFormat: CataFormat = 'grano';
  selectedEvent: EventType = 'bodas';

  // Feature A: Barista Calculator State
  selectedBrewMethod: BrewMethod = 'v60';
  brewCups: number = 2;
  brewMethodsList: BrewMethod[] = ['v60', 'prensa', 'moka', 'espresso', 'chemex', 'gota'];

  // Feature B: Coffee Quiz State
  quizStep: number = 1;
  quizMethod: string = '';
  quizFlavor: string = '';
  quizAmount: string = '';

  // Feature C: Traceability Passport State
  traceabilityTab: TraceabilityTab = 'origen';

  // Feature D: FAQ Accordion State
  openFaqIndex: number | null = 0;
  faqList = FAQ_ITEMS;

  // Feature E: Testimonials State
  activeTestimonialIndex: number = 0;
  testimonialsList = TESTIMONIALS;

  // Contact numbers
  readonly phonePrimary = '51918422677';
  readonly phoneSecondary = '51987483134';

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  changeLanguage(lang: Language): void {
    this.language = lang;
  }

  setGrind(grind: GrindType): void {
    this.selectedGrind = grind;
  }

  setCataFormat(format: CataFormat): void {
    this.selectedCataFormat = format;
  }

  setEvent(event: EventType): void {
    this.selectedEvent = event;
  }

  // --- FEATURE A: BARISTA CALCULATOR METHODS ---
  setBrewMethod(method: BrewMethod): void {
    this.selectedBrewMethod = method;
  }

  setBrewCups(cups: number): void {
    if (cups >= 1 && cups <= 8) {
      this.brewCups = cups;
    }
  }

  get currentBrewConfig(): BrewConfig {
    return BREW_CONFIGS[this.selectedBrewMethod] || BREW_CONFIGS.v60;
  }

  get calculatedWater(): number {
    return this.brewCups * this.currentBrewConfig.waterPerCup;
  }

  get calculatedCoffeeGrams(): number {
    const water = this.calculatedWater;
    const ratio = this.currentBrewConfig.ratio;
    return Math.round((water / ratio) * 10) / 10;
  }

  getBrewWhatsAppLink(): string {
    const config = this.currentBrewConfig;
    const isEs = this.language === 'es';
    const method = config.name[this.language];
    const grind = config.grind[this.language];
    const grams = this.calculatedCoffeeGrams;
    const water = this.calculatedWater;
    const cups = this.brewCups;

    const message = isEs
      ? `Hola Kfest, usé la Calculadora Barista en su web para preparar ${method} (${cups} tazas, ${grams}g café / ${water}ml agua). Quisiera pedir café de especialidad con molienda ${grind}.`
      : `Hello Kfest, I used your website Barista Calculator for ${method} (${cups} cups, ${grams}g coffee / ${water}ml water). I would like to order specialty coffee ground as ${grind}.`;

    return `https://wa.me/${this.phonePrimary}?text=${encodeURIComponent(message)}`;
  }

  // --- FEATURE B: COFFEE QUIZ METHODS ---
  setQuizAnswer(step: number, answer: string): void {
    if (step === 1) {
      this.quizMethod = answer;
      this.quizStep = 2;
    } else if (step === 2) {
      this.quizFlavor = answer;
      this.quizStep = 3;
    } else if (step === 3) {
      this.quizAmount = answer;
      this.quizStep = 4; // Result step
    }
  }

  resetQuiz(): void {
    this.quizStep = 1;
    this.quizMethod = '';
    this.quizFlavor = '';
    this.quizAmount = '';
  }

  getQuizRecommendation(): {
    title: { es: string; en: string };
    package: { es: string; en: string };
    price: string;
    grind: { es: string; en: string };
    notes: { es: string; en: string };
    reason: { es: string; en: string };
    img: string;
  } {
    const isFamily = this.quizAmount === 'familia';
    const isCouple = this.quizAmount === 'pareja';

    if (isFamily) {
      return {
        title: { es: 'Cofre Degustación Maestro 1kg', en: '1kg Master Tasting Pack' },
        package: { es: 'Pack de 4 bolsas individuales (1kg total)', en: '4 individual fresh bags (1kg total)' },
        price: 'S/ 100.00',
        grind: {
          es: this.quizMethod === 'grano' ? 'En Grano Entero' : 'Molienda calibrada para ' + this.quizMethod.toUpperCase(),
          en: this.quizMethod === 'grano' ? 'Whole Bean' : 'Calibrated grind for ' + this.quizMethod.toUpperCase()
        },
        notes: { es: 'Panela de oro, Cacao 70%, Notas frutales de altura', en: 'Golden panela, 70% Dark cacao, High mountain fruit' },
        reason: {
          es: 'Ideal para abastecer tu hogar u oficina con máxima frescura por 4 semanas, abriendo una bolsa fresca cada semana.',
          en: 'Perfect to supply your home or office with peak freshness for 4 weeks, opening one fresh bag each week.'
        },
        img: 'images/bag_1kg.png'
      };
    } else if (isCouple) {
      return {
        title: { es: 'Dúo Esencial Reserva 500g', en: '500g Essential Reserve Duo' },
        package: { es: '2 bolsas herméticas de 250g con válvula', en: '2 airtight 250g bags with aroma valve' },
        price: 'S/ 56.00',
        grind: {
          es: this.quizMethod === 'grano' ? 'En Grano Entero' : 'Molienda calibrada a tu cafetera',
          en: this.quizMethod === 'grano' ? 'Whole Bean' : 'Custom calibrated grind'
        },
        notes: { es: 'Panela tostada, Miel de flores silvestres y Cacao puro', en: 'Toasted panela, Wildflower honey, Pure cacao' },
        reason: {
          es: 'El formato más solicitado: permite compartir 2 a 3 tazas al día conservando intactos los aromas del Fundo Santa Teresita.',
          en: 'Our most popular format: allows 2 to 3 cups daily while preserving the original farm fragrance.'
        },
        img: 'images/bag_500g.png'
      };
    } else {
      return {
        title: { es: 'Reserva Personal 250g', en: '250g Personal Reserve' },
        package: { es: '1 bolsa hermética de 250g con válvula', en: '1 airtight 250g bag with aroma valve' },
        price: 'S/ 30.00',
        grind: {
          es: this.quizMethod === 'grano' ? 'En Grano Entero' : 'Molienda exacta para ' + (this.quizMethod ? this.quizMethod.toUpperCase() : 'tu método'),
          en: this.quizMethod === 'grano' ? 'Whole Bean' : 'Custom grind for ' + (this.quizMethod ? this.quizMethod.toUpperCase() : 'your brewer')
        },
        notes: { es: 'Miel de monte, Cacao aromático, Puntuación 81-84 SCA', en: 'Mountain honey, Aromatic cacao, 81-84 SCA Points' },
        reason: {
          es: 'Ideal para tu ritual cafetero personal diario: café de microlote de altura recién tostado solo para ti.',
          en: 'Tailored for your personal daily coffee ritual: freshly roasted high altitude microlot coffee.'
        },
        img: 'images/bag_250g.png'
      };
    }
  }

  getQuizWhatsAppLink(): string {
    const isEs = this.language === 'es';
    const rec = this.getQuizRecommendation();
    const title = rec.title[this.language];
    const price = rec.price;
    const grind = rec.grind[this.language];

    const message = isEs
      ? `Hola Kfest, completé el test "Descubre tu Café Ideal" en su web. Mi resultado recomendado es: ${title} (${price}) con molienda: ${grind}. Quisiera coordinar mi pedido.`
      : `Hello Kfest, I completed the "Find your Ideal Coffee" test on your website. My recommended match is: ${title} (${price}) with grind: ${grind}. I would like to order it.`;

    return `https://wa.me/${this.phonePrimary}?text=${encodeURIComponent(message)}`;
  }

  // --- FEATURE C: TRACEABILITY METHODS ---
  setTraceabilityTab(tab: TraceabilityTab): void {
    this.traceabilityTab = tab;
  }

  // --- FEATURE D: FAQ METHODS ---
  toggleFaq(index: number): void {
    if (this.openFaqIndex === index) {
      this.openFaqIndex = null;
    } else {
      this.openFaqIndex = index;
    }
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  // --- FEATURE E: TESTIMONIALS METHODS ---
  setTestimonial(index: number): void {
    this.activeTestimonialIndex = index;
  }

  nextTestimonial(): void {
    this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonialsList.length;
  }

  prevTestimonial(): void {
    this.activeTestimonialIndex =
      (this.activeTestimonialIndex - 1 + this.testimonialsList.length) % this.testimonialsList.length;
  }

  get currentTestimonial(): TestimonialItem {
    return this.testimonialsList[this.activeTestimonialIndex];
  }

  // --- STORE HELPERS ---
  getGrindName(): string {
    return GRIND_NAMES[this.language][this.selectedGrind] || GRIND_NAMES[this.language].grano;
  }

  getEventName(): string {
    return EVENT_NAMES[this.language][this.selectedEvent] || EVENT_NAMES[this.language].bodas;
  }

  getWhatsAppLink(type: WhatsAppAction): string {
    const grind = this.getGrindName();
    const isEs = this.language === 'es';
    const cataFormatText = this.selectedCataFormat === 'grano'
      ? (isEs ? 'En Grano' : 'Whole Bean')
      : (isEs ? 'Molido' : 'Ground');

    const messages: Record<Language, Record<WhatsAppAction, string>> = {
      es: {
        hero: 'Hola Kfest, quisiera pedir información para reservar Café de Especialidad (81-84 Pts SCA) del Fundo Santa Teresita.',
        prod_250g: `Hola Kfest, deseo pedir 1 Paquete de Café de Especialidad Reserva Personal 250g (S/ 30.00). Molienda elegida: ${grind}.`,
        prod_500g: `Hola Kfest, deseo pedir 2 Paquetes Dúo Esencial Reserva 500g (S/ 56.00). Molienda elegida: ${grind}.`,
        prod_1kg: `Hola Kfest, deseo pedir el Cofre Degustación de 4 Paquetes 1kg (S/ 100.00). Molienda elegida: ${grind}.`,
        delivery: 'Hola Kfest, quisiera coordinar la entrega de mi pedido de tueste reciente para los días de despacho (Lunes, Miércoles y Viernes).',
        cata_fe: `Hola Kfest, me interesa pedir el Perfil Fe (Catuai + Pache, 1,600 msnm). Presentación: ${cataFormatText}.`,
        cata_paciencia: `Hola Kfest, me interesa pedir el Perfil Paciencia (Catimor, 1,800 msnm). Presentación: ${cataFormatText}.`,
        cata_tolerancia: `Hola Kfest, me interesa pedir el Perfil Tolerancia (Blend de Altura). Presentación: ${cataFormatText}.`,
        cata_respeto: `Hola Kfest, me interesa pedir el Perfil Respeto (Caturra Pura, 1,300 msnm). Presentación: ${cataFormatText}.`,
        utilkfest: 'Hola Kfest, me gustaría consultar la colección de artículos ecológicos Útilkfest elaborados con borra de café.',
        catering: `Hola Kfest, deseo cotizar el servicio de Barra Móvil Kfestcar para mi evento (${this.getEventName()}).`,
        concierge: 'Hola Kfest Business, solicito atención de Concierge para adquirir café de especialidad directo del Fundo Santa Teresita.'
      },
      en: {
        hero: 'Hello Kfest, I would like to request info to reserve Specialty Coffee (81-84 SCA Points) from Santa Teresita Farm.',
        prod_250g: `Hello Kfest, I would like to order 1 Personal Reserve Specialty Coffee Bag 250g (S/ 30.00). Selected grind: ${grind}.`,
        prod_500g: `Hello Kfest, I would like to order 2 Bags Essential Reserve Duo 500g (S/ 56.00). Selected grind: ${grind}.`,
        prod_1kg: `Hello Kfest, I would like to order the 4-Bag Master Tasting Pack 1kg (S/ 100.00). Selected grind: ${grind}.`,
        delivery: 'Hello Kfest, I would like to coordinate delivery for my recent roast order on dispatch days (Mon, Wed, Fri).',
        cata_fe: `Hello Kfest, I am interested in ordering the Faith Profile (Catuai + Pache, 1,600 masl). Format: ${cataFormatText}.`,
        cata_paciencia: `Hello Kfest, I am interested in ordering the Patience Profile (Catimor, 1,800 masl). Format: ${cataFormatText}.`,
        cata_tolerancia: `Hello Kfest, I am interested in ordering the Tolerance Profile (High Altitude Blend). Format: ${cataFormatText}.`,
        cata_respeto: `Hello Kfest, I am interested in ordering the Respect Profile (Pure Caturra, 1,300 masl). Format: ${cataFormatText}.`,
        utilkfest: 'Hello Kfest, I would like to inquire about the Útilkfest eco-friendly handcrafted collection made from recycled coffee grounds.',
        catering: `Hello Kfest, I would like a quote for the Kfestcar Mobile Espresso Bar for my event (${this.getEventName()}).`,
        concierge: 'Hello Kfest Business, I request Concierge assistance to purchase specialty coffee directly from Santa Teresita Farm.'
      }
    };

    const message = messages[this.language][type] || messages[this.language].concierge;
    return `https://wa.me/${this.phonePrimary}?text=${encodeURIComponent(message)}`;
  }
}