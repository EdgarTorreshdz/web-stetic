// src/components/react/NavbarMobile.jsx
import React, { useState } from 'react';

const NavbarMobile = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const prefix = `/${lang}`;

  // Diccionario de traducciones
  const labels = {
    en: {
      home: 'Home',
      specialties: 'Specialties',
      about: 'About Us',
      reviews: 'Reviews',
      contact: 'Contact'
    },
    es: {
      home: 'Inicio',
      specialties: 'Especialidades',
      about: 'Nosotros',
      reviews: 'Testimonios',
      contact: 'Contacto'
    }
  };

  const t = labels[lang] || labels.en;

  const toggleMenu = () => setIsOpen(!isOpen);

  const styles = {
    menuBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '10px 20px',
    },
    drawer: {
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-100%',
      width: '80%',
      height: '100vh',
      backgroundColor: '#03192c',
      transition: 'right 0.3s ease-in-out',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 20px',
      boxShadow: '-5px 0 15px rgba(0,0,0,0.5)',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      margin: '15px 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: '10px'
    },
    closeBtn: {
      alignSelf: 'flex-end',
      color: 'white',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '20px'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: isOpen ? 'block' : 'none',
      zIndex: 999
    }
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <button onClick={toggleMenu} style={styles.menuBtn} aria-label="Menu">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Fondo oscuro al abrir */}
      <div style={styles.overlay} onClick={toggleMenu}></div>

      {/* Menú Lateral (Drawer) */}
      <div style={styles.drawer}>
        <button onClick={toggleMenu} style={styles.closeBtn}>✕</button>
        
        <a href={`${prefix}/`} style={styles.link} onClick={toggleMenu}>{t.home}</a>
        
        {/* Aquí puedes poner un link simple a especialidades o un submenú */}
        <a href={`${prefix}/especialidades`} style={styles.link} onClick={toggleMenu}>{t.specialties}</a>
        
        <a href={`${prefix}/nosotros`} style={styles.link} onClick={toggleMenu}>{t.about}</a>
        <a href={`${prefix}/testimonios`} style={styles.link} onClick={toggleMenu}>{t.reviews}</a>
        <a href={`${prefix}/contacto`} style={styles.link} onClick={toggleMenu}>{t.contact}</a>
      </div>
    </>
  );
};

export default NavbarMobile;