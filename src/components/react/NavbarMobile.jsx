// src/components/react/NavbarMobile.jsx
import React, { useState, useEffect } from 'react';

const NavbarMobile = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';
  const blackColor = '#000000';

  // Detectar la ruta actual al cargar y al cambiar de página
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, [isOpen]); // Re-validar cada vez que se abre el menú

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lógica para saber si el link es el activo
  const isActive = (path) => {
    const linkPath = `${prefix}${path}`.replace(/\/$/, "");
    const activePath = currentPath.replace(/\/$/, "");
    if (path === '/' && (activePath === prefix || activePath === "")) return true;
    return activePath === linkPath;
  };

  const labels = {
    en: { home: 'Home', specialties: 'Specialties', about: 'About Us', reviews: 'Reviews', contact: 'Contact' },
    es: { home: 'Inicio', specialties: 'Especialidades', about: 'Nosotros', reviews: 'Testimonios', contact: 'Contacto' }
  };

  const t = labels[lang] || labels.en;

  const styles = {
    menuBtn: {
      background: 'none',
      border: 'none',
      color: blackColor,
      cursor: 'pointer',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    drawer: {
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-100%',
      width: '100%',
      height: '100vh',
      backgroundColor: '#ffffff',
      transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      boxSizing: 'border-box',
    },
    headerDrawer: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: '20px',
    },
    closeBtn: {
      color: goldColor,
      fontSize: '32px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
    },
    link: (active) => ({
      color: active ? goldColor : blackColor, // CAMBIO: Dorado si está activo
      textDecoration: 'none',
      fontSize: '22px',
      fontWeight: '700',
      textTransform: 'uppercase',
      margin: '20px 0',
      letterSpacing: '2px',
      transition: 'color 0.3s ease',
    }),
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: isOpen ? 'block' : 'none',
      zIndex: 1000,
      backdropFilter: 'blur(4px)',
    }
  };

  return (
    <>
      <button onClick={toggleMenu} style={styles.menuBtn} aria-label="Menu">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div style={styles.overlay} onClick={toggleMenu}></div>

      <div style={styles.drawer}>
        <div style={styles.headerDrawer}>
          <button onClick={toggleMenu} style={styles.closeBtn}>✕</button>
        </div>
        
        <div style={styles.navLinks}>
          <a href={`${prefix}/`} style={styles.link(isActive('/'))} onClick={toggleMenu}>{t.home}</a>
          <a href={`${prefix}/especialidades`} style={styles.link(isActive('/especialidades'))} onClick={toggleMenu}>{t.specialties}</a>
          <a href={`${prefix}/nosotros`} style={styles.link(isActive('/nosotros'))} onClick={toggleMenu}>{t.about}</a>
          <a href={`${prefix}/testimonios`} style={styles.link(isActive('/testimonios'))} onClick={toggleMenu}>{t.reviews}</a>
          <a href={`${prefix}/contacto`} style={styles.link(isActive('/contacto'))} onClick={toggleMenu}>{t.contact}</a>
          
          <div style={{ width: '40px', height: '3px', backgroundColor: goldColor, marginTop: '20px' }}></div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;