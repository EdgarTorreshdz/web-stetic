// src/i18n/ui.ts

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.restore': 'Restore Your Smile',
    'nav.enhance': 'Enhance Your Smile',
    'nav.tourism': 'Dental Tourism',
    'nav.blog': 'Blog',
    'nav.contact': 'Schedule Consultation',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.restore': 'Restaura tu Sonrisa',
    'nav.enhance': 'Mejora tu Sonrisa',
    'nav.tourism': 'Turismo Dental',
    'nav.blog': 'Blog',
    'nav.contact': 'Agendar Consulta',
  },
} as const;

/**
 * Mapeo de rutas personalizadas.
 * KEY: Debe ser el nombre del parámetro entre corchetes, ej: [about].astro -> 'about'
 * VALUE: Es el slug real que se verá en la URL del navegador.
 */
export const routes = {
  en: {
    'about': 'about',
    'contact': 'contact',
    'dental_tourism': 'dental-tourism',
    'general_dentistry': 'general-dentistry',
    'endodontics': 'root-canal-treatment-playa-del-carmen',
    'oral_surgery': 'oral-surgery',
    'dental_rehabilitation': 'dental-rehabilitation',
    'pediatric_dentistry': 'pediatric-dentistry',
    'cosmetic_dentistry': 'cosmetic-dentistry',
    'orthodontics': 'orthodontist-playa-del-carmen',
    'orthopedics': 'orthopedics',
    'blog': 'blog'
  },
  es: {
    'about': 'nosotros',
    'contact': 'contacto',
    'dental_tourism': 'turismo-dental',
    'general_dentistry': 'especialidades',
    'endodontics': 'endodoncia',
    'oral_surgery': 'cirugia',
    'dental_rehabilitation': 'rehabilitacion',
    'pediatric_dentistry': 'odontopediatria',
    'cosmetic_dentistry': 'odontologia-estetica',
    'orthodontics': 'ortodoncia',
    'orthopedics': 'ortopedia',
    'blog': 'blog'
  },
};