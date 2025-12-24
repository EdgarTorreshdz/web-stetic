import React, { useState, useEffect } from 'react';
import DropdownEspecialidades from './DropdownEspecialidades';
import LanguagePicker from './LanguagePicker';

const Navbar = ({ lang = 'en' }) => {
  const [currentPath, setCurrentPath] = useState('');
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';
  const blackColor = '#000000';

  // Obtenemos la ruta actual al cargar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Función para determinar si un link está activo
  // El .replace(/\/$/, "") sirve para comparar rutas con o sin slash final
  const isActive = (path) => {
    const linkPath = `${prefix}${path}`.replace(/\/$/, "");
    const activePath = currentPath.replace(/\/$/, "");
    
    // Caso especial para Home
    if (path === '/' && (activePath === prefix || activePath === "")) return true;
    
    return activePath === linkPath;
  };

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '5px',
    },
    link: (active) => ({
      color: active ? goldColor : blackColor,
      textDecoration: 'none',
      padding: '5px 12px',
      textTransform: 'uppercase',
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '0.8px',
      transition: 'color 0.3s ease',
    })
  };

  const labels = {
    en: { home: 'Home', about: 'About Us', reviews: 'Reviews', contact: 'Contact' },
    es: { home: 'Inicio', about: 'Nosotros', reviews: 'Testimonios', contact: 'Contacto' }
  };

  const t = labels[lang] || labels.en;

  // Función para manejar el hover sin perder el color dorado si está activo
  const handleMouseEnter = (e) => (e.currentTarget.style.color = goldColor);
  const handleMouseLeave = (e, active) => {
    if (!active) e.currentTarget.style.color = blackColor;
  };

  return (
    <nav style={styles.nav}>
      <a 
        style={styles.link(isActive('/'))} 
        href={`${prefix}/`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/'))}
      >
        {t.home}
      </a>
      
      <DropdownEspecialidades lang={lang} currentPath={currentPath} />

      <a 
        style={styles.link(isActive('/nosotros'))} 
        href={`${prefix}/nosotros`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/nosotros'))}
      >
        {t.about}
      </a>
      
      <a 
        style={styles.link(isActive('/testimonios'))} 
        href={`${prefix}/testimonios`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/testimonios'))}
      >
        {t.reviews}
      </a>
      
      <a 
        style={styles.link(isActive('/contacto'))} 
        href={`${prefix}/contacto`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/contacto'))}
      >
        {t.contact}
      </a>
      
      <div style={{ marginLeft: '5px' }}>
        <LanguagePicker currentLang={lang} />
      </div>
    </nav>
  );
};

export default Navbar;