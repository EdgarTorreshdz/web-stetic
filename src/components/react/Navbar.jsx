import React from 'react';
import DropdownEspecialidades from './DropdownEspecialidades';

const Navbar = ({ lang = 'en' }) => {
  // Ahora el prefijo SIEMPRE debe ser el idioma actual (/en o /es)
  const prefix = `/${lang}`;

  const styles = {
    containerNavbar: {
      backgroundColor: '#03192c',
      borderBottom: '1px solid #fff3',
      padding: '10px',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.6rem 2rem',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 20px',
      textTransform: 'uppercase',
      fontSize: '11px',
      fontWeight: 'bold',
    }
  };

  const labels = {
    en: { home: 'Home', about: 'About Us', reviews: 'Reviews', contact: 'Contact' },
    es: { home: 'Inicio', about: 'Nosotros', reviews: 'Testimonios', contact: 'Contacto' }
  };

  const t = labels[lang] || labels.en;

  return (
    <div style={styles.containerNavbar}>
      <nav style={styles.nav}>
        {/* Importante: prefix ya trae la barra inicial, ej: /en/ o /es/ */}
        <a style={styles.link} href={`${prefix}/`}>{t.home}</a>
        
        <DropdownEspecialidades lang={lang} />

        <a style={styles.link} href={`${prefix}/nosotros`}>{t.about}</a>
        <a style={styles.link} href={`${prefix}/testimonios`}>{t.reviews}</a>
        <a style={styles.link} href={`${prefix}/contacto`}>{t.contact}</a>
      </nav>
    </div>
  );
};

export default Navbar;