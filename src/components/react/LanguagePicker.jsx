import React from 'react';
import { routes } from '../../i18n/ui';

export default function LanguagePicker({ currentLang = 'en' }) {
  const handleLanguageChange = (e, targetLang) => {
    e.preventDefault();
    if (typeof window === 'undefined' || targetLang === currentLang) return;

    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);

    // Si la ruta es solo el home (ej: /en o /es)
    if (pathSegments.length <= 1) {
      window.location.href = `/${targetLang}/`;
      return;
    }

    // El slug actual es lo que viene después del idioma (ej: 'endodontics')
    const currentSlug = pathSegments[1];

    // Buscamos la "KEY" interna comparando el slug actual en el idioma actual
    // Ejemplo: Si estoy en /en/endodontics, busco qué llave en inglés tiene el valor 'endodontics'
    const routeEntries = Object.entries(routes[currentLang]);
    const foundEntry = routeEntries.find(([key, value]) => value === currentSlug);

    let newPath = "";

    if (foundEntry) {
      const routeKey = foundEntry[0]; // La llave es 'endodontics' (o la que uses con guion bajo)
      const translatedSlug = routes[targetLang][routeKey]; // Buscamos su par en el idioma destino
      newPath = `/${targetLang}/${translatedSlug}`;
    } else {
      // Si no encuentra la ruta en el diccionario, solo cambia el prefijo como respaldo
      newPath = `/${targetLang}/${currentSlug}`;
    }

    // Redirección física
    window.location.href = newPath;
  };

  const goldColor = '#D4AF37';

  const styles = {
    container: { 
      display: 'flex', 
      gap: '2px', 
      alignItems: 'center', 
      backgroundColor: '#f9f9f9', 
      padding: '3px', 
      borderRadius: '20px', 
      border: `1px solid #eeeeee`, 
      width: 'fit-content' 
    },
    button: (isActive) => ({ 
      color: isActive ? 'white' : '#000000', 
      border: 'none', 
      fontSize: '10px', 
      fontWeight: '800', 
      padding: '5px 12px', 
      borderRadius: '16px', 
      cursor: 'pointer', 
      backgroundColor: isActive ? goldColor : 'transparent',
      transition: 'all 0.3s ease', 
      opacity: isActive ? 1 : 0.5, 
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    })
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={(e) => handleLanguageChange(e, 'en')} 
        style={styles.button(currentLang === 'en')}
      >
        EN
      </button>
      <button 
        onClick={(e) => handleLanguageChange(e, 'es')} 
        style={styles.button(currentLang === 'es')}
      >
        ES
      </button>
    </div>
  );
}