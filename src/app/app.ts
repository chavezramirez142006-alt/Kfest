import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  darkMode = true;
  language = 'es';
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  // Interactive selectors
  selectedGrind = 'grano'; // 'grano' | 'v60' | 'prensa' | 'gota'
  selectedCataFormat = 'grano'; // 'grano' | 'molido'
  selectedEvent = 'bodas'; // 'bodas' | 'corporativos' | 'ferias' | 'aniversarios' | 'lanzamientos' | 'privados'

  // Phone numbers
  phonePrimary = '51918422677';
  phoneSecondary = '51987483134';

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

  changeLanguage(lang: string) {
    this.language = lang;
  }

  setGrind(grind: string) {
    this.selectedGrind = grind;
  }

  setCataFormat(format: string) {
    this.selectedCataFormat = format;
  }

  setEvent(event: string) {
    this.selectedEvent = event;
  }

  getGrindName(): string {
    const namesEs: Record<string, string> = {
      grano: 'En Grano (Whole Bean)',
      v60: 'V60 / Filtrado',
      prensa: 'Prensa Francesa (French Press)',
      gota: 'Gota a Gota (Drip)'
    };
    const namesEn: Record<string, string> = {
      grano: 'Whole Bean',
      v60: 'V60 / Drip Filter',
      prensa: 'French Press',
      gota: 'Slow Drip'
    };
    return this.language === 'es' ? (namesEs[this.selectedGrind] || 'En Grano') : (namesEn[this.selectedGrind] || 'Whole Bean');
  }

  getEventName(): string {
    const namesEs: Record<string, string> = {
      bodas: 'Bodas de Gala',
      corporativos: 'Corporativos VIP',
      ferias: 'Ferias Gourmet',
      aniversarios: 'Aniversarios',
      lanzamientos: 'Lanzamientos',
      privados: 'Eventos Privados'
    };
    const namesEn: Record<string, string> = {
      bodas: 'Gala Weddings',
      corporativos: 'VIP Corporate',
      ferias: 'Gourmet Fairs',
      aniversarios: 'Anniversaries',
      lanzamientos: 'Product Launches',
      privados: 'Private Events'
    };
    return this.language === 'es' ? (namesEs[this.selectedEvent] || 'Bodas de Gala') : (namesEn[this.selectedEvent] || 'Gala Weddings');
  }

  getWhatsAppLink(type: string): string {
    let msg = '';
    const grind = this.getGrindName();

    if (this.language === 'es') {
      switch (type) {
        case 'hero':
          msg = 'Hola Kfest, quisiera pedir información para reservar Café de Especialidad (81-84 Pts SCA) del Fundo Santa Teresita.';
          break;
        case 'prod_250g':
          msg = `Hola Kfest, deseo pedir 1 Paquete de Café de Especialidad Reserva Personal 250g (S/ 30.00). Molienda elegida: ${grind}.`;
          break;
        case 'prod_500g':
          msg = `Hola Kfest, deseo pedir 2 Paquetes Dúo Esencial Reserva 500g (S/ 56.00). Molienda elegida: ${grind}.`;
          break;
        case 'prod_1kg':
          msg = `Hola Kfest, deseo pedir el Cofre Degustación de 4 Paquetes 1kg (S/ 100.00). Molienda elegida: ${grind}.`;
          break;
        case 'delivery':
          msg = 'Hola Kfest, quisiera coordinar la entrega de mi pedido de tueste reciente para los días de despacho (Lunes, Miércoles y Viernes).';
          break;
        case 'cata_fe':
          msg = `Hola Kfest, me interesa pedir el Perfil Fe (Catuai + Pache, 1,600 msnm). Presentación: ${this.selectedCataFormat === 'grano' ? 'En Grano' : 'Molido'}.`;
          break;
        case 'cata_paciencia':
          msg = `Hola Kfest, me interesa pedir el Perfil Paciencia (Catimor, 1,800 msnm). Presentación: ${this.selectedCataFormat === 'grano' ? 'En Grano' : 'Molido'}.`;
          break;
        case 'cata_tolerancia':
          msg = `Hola Kfest, me interesa pedir el Perfil Tolerancia (Blend de Altura). Presentación: ${this.selectedCataFormat === 'grano' ? 'En Grano' : 'Molido'}.`;
          break;
        case 'cata_respeto':
          msg = `Hola Kfest, me interesa pedir el Perfil Respeto (Caturra Pura, 1,300 msnm). Presentación: ${this.selectedCataFormat === 'grano' ? 'En Grano' : 'Molido'}.`;
          break;
        case 'utilkfest':
          msg = 'Hola Kfest, me gustaría consultar la colección de artículos ecológicos Útilkfest elaborados con borra de café.';
          break;
        case 'catering':
          msg = `Hola Kfest, deseo cotizar el servicio de Barra Móvil Kfestcar para mi evento (${this.getEventName()}).`;
          break;
        case 'concierge':
        default:
          msg = 'Hola Kfest Business, solicito atención de Concierge para adquirir café de especialidad directo del Fundo Santa Teresita.';
          break;
      }
    } else {
      switch (type) {
        case 'hero':
          msg = 'Hello Kfest, I would like to request info to reserve Specialty Coffee (81-84 SCA Points) from Santa Teresita Farm.';
          break;
        case 'prod_250g':
          msg = `Hello Kfest, I would like to order 1 Personal Reserve Specialty Coffee Bag 250g (S/ 30.00). Selected grind: ${grind}.`;
          break;
        case 'prod_500g':
          msg = `Hello Kfest, I would like to order 2 Bags Essential Reserve Duo 500g (S/ 56.00). Selected grind: ${grind}.`;
          break;
        case 'prod_1kg':
          msg = `Hello Kfest, I would like to order the 4-Bag Master Tasting Pack 1kg (S/ 100.00). Selected grind: ${grind}.`;
          break;
        case 'delivery':
          msg = 'Hello Kfest, I would like to coordinate delivery for my recent roast order on dispatch days (Mon, Wed, Fri).';
          break;
        case 'cata_fe':
          msg = `Hello Kfest, I am interested in ordering the Faith Profile (Catuai + Pache, 1,600 masl). Format: ${this.selectedCataFormat === 'grano' ? 'Whole Bean' : 'Ground'}.`;
          break;
        case 'cata_paciencia':
          msg = `Hello Kfest, I am interested in ordering the Patience Profile (Catimor, 1,800 masl). Format: ${this.selectedCataFormat === 'grano' ? 'Whole Bean' : 'Ground'}.`;
          break;
        case 'cata_tolerancia':
          msg = `Hello Kfest, I am interested in ordering the Tolerance Profile (High Altitude Blend). Format: ${this.selectedCataFormat === 'grano' ? 'Whole Bean' : 'Ground'}.`;
          break;
        case 'cata_respeto':
          msg = `Hello Kfest, I am interested in ordering the Respect Profile (Pure Caturra, 1,300 masl). Format: ${this.selectedCataFormat === 'grano' ? 'Whole Bean' : 'Ground'}.`;
          break;
        case 'utilkfest':
          msg = 'Hello Kfest, I would like to inquire about the Útilkfest eco-friendly handcrafted collection made from recycled coffee grounds.';
          break;
        case 'catering':
          msg = `Hello Kfest, I would like a quote for the Kfestcar Mobile Espresso Bar for my event (${this.getEventName()}).`;
          break;
        case 'concierge':
        default:
          msg = 'Hello Kfest Business, I request Concierge assistance to purchase specialty coffee directly from Santa Teresita Farm.';
          break;
      }
    }

    return `https://wa.me/${this.phonePrimary}?text=${encodeURIComponent(msg)}`;
  }
}