import React, { useState, useEffect } from 'react';
import DropdownEspecialidades from './DropdownEspecialidades';
import LanguagePicker from './LanguagePicker';

const Navbar = ({ lang = 'en' }) => {
  const [currentPath, setCurrentPath] = useState('');
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';
  const blackColor = '#000000';
  const whiteColor = '#ffffff';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (path) => {
    const linkPath = `${prefix}${path}`.replace(/\/$/, "");
    const activePath = currentPath.replace(/\/$/, "");
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
      fontSize: '15px',
      fontWeight: '700',
      letterSpacing: '0.8px',
      transition: 'color 0.3s ease',
    }),
    ctaButton: {
      backgroundColor: goldColor,
      color: whiteColor,
      padding: '10px 20px',
      borderRadius: '4px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '800',
      letterSpacing: '1px',
      marginLeft: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 10px rgba(212, 175, 55, 0.2)',
    }
  };

  const labels = {
    en: { 
      home: 'Home', 
      restore: 'Restore Your Smile', 
      enhance: 'Enhance Your Smile',
      tourism: 'Dental Tourism',
      blog: 'Blog',
      contact: 'Schedule Consultation' 
    },
    es: { 
      home: 'Inicio', 
      restore: 'Restaura tu Sonrisa', 
      enhance: 'Mejora tu Sonrisa',
      tourism: 'Turismo Dental',
      blog: 'Blog',
      contact: 'Agendar Consulta' 
    }
  };

  const t = labels[lang] || labels.en;

  const handleMouseEnter = (e) => (e.currentTarget.style.color = goldColor);
  const handleMouseLeave = (e, active) => {
    if (!active) e.currentTarget.style.color = blackColor;
  };

  return (
    <nav style={styles.nav}>
      {/* HOME */}
      <a 
        style={styles.link(isActive('/'))} 
        href={`${prefix}/`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/'))}
      >
        {t.home}
      </a>
      
      {/* RESTORE DROPDOWN */}
      <DropdownEspecialidades 
        lang={lang} 
        currentPath={currentPath} 
        category="restore" 
        label={t.restore} 
      />

      {/* ENHANCE DROPDOWN */}
      <DropdownEspecialidades 
        lang={lang} 
        currentPath={currentPath} 
        category="enhance" 
        label={t.enhance} 
      />

      {/* DENTAL TOURISM */}
      <a 
        style={styles.link(isActive('/turismo-dental'))} 
        href={`${prefix}/turismo-dental`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/turismo-dental'))}
      >
        {t.tourism}
      </a>

      {/* BLOG */}
      <a 
        style={styles.link(isActive('/blog'))} 
        href={`${prefix}/blog`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={(e) => handleMouseLeave(e, isActive('/blog'))}
      >
        {t.blog}
      </a>
      
      {/* IDIOMA */}
      <div style={{ marginLeft: '5px', marginRight: '10px' }}>
        <LanguagePicker currentLang={lang} />
      </div>

      {/* CTA BUTTON - Reemplaza Contact/Testimonios/About */}
      <a 
        style={styles.ctaButton} 
        href={`${prefix}/contacto`}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = blackColor;
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = goldColor;
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {t.contact}
      </a>
    </nav>
  );
};

export default Navbar;