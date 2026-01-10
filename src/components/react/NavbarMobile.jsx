import React, { useState, useEffect } from 'react';
import { routes } from '../../i18n/ui';

const NavbarMobile = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [openSection, setOpenSection] = useState(null); 
  
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';
  const blackColor = '#000000';
  const whiteColor = '#ffffff';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSection(null); 
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const getLocalizedPath = (key) => {
    const slug = routes[lang]?.[key] || key;
    const path = `${prefix}/${slug}`.replace(/\/+$/, "");
    return path || `${prefix}/`;
  };

  const isActive = (key) => {
    const targetPath = key === '/' ? prefix : getLocalizedPath(key);
    const activePath = currentPath.replace(/\/$/, "");
    return activePath === targetPath;
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

  // ACTUALIZADO: Ahora coincide exactamente con el Dropdown de Desktop
  const services = {
    restore: lang === 'en' 
      ? [
          { title: "Dental Implants", key: "dental_implants" },
          { title: "Crowns & Bridges", key: "dental_crowns" },
          { title: "Root Canal (Endodontics)", key: "endodontics" },
          { title: "Orthodontics", key: "orthodontics" },
          { title: "Invisalign", key: "invisalign" },
        ]
      : [
          { title: "Smile Design", key: "smile_design" },
          { title: "Dental Veneers", key: "veneers" },
          { title: "Teeth Whitening", key: "teeth_whitening" },
          { title: "Teeth Cleaning", key: "teeth_cleaning" },
        ],
    enhance: lang === 'es'
      ? [
          { title: "Implantes Dentales", key: "dental_implants" },
          { title: "Coronas y Puentes", key: "dental_crowns" },
          { title: "Endodoncia", key: "endodontics" },
          { title: "Ortodoncia", key: "orthodontics" },
          { title: "Invisalign", key: "invisalign" },
        ]
      : [
          { title: "Diseño de Sonrisa", key: "smile_design" },
          { title: "Carillas Dentales", key: "veneers" },
          { title: "Blanqueamiento Dental", key: "teeth_whitening" },
          { title: "Limpieza Dental", key: "teeth_cleaning" },
        ]
  };

  const t = labels[lang] || labels.en;

  const styles = {
    // ... (tus estilos actuales se mantienen igual)
    drawer: {
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-100%',
      width: '100%',
      height: '100vh',
      backgroundColor: whiteColor,
      transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto' // Crucial para que si hay muchos servicios se pueda hacer scroll
    },
    subMenu: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '20px',
      borderLeft: `2px solid ${goldColor}`,
      marginBottom: '10px',
      overflow: 'hidden'
    }
  };

  return (
    <>
      <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: blackColor, cursor: 'pointer', padding: '10px' }} aria-label="Menu">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: isOpen ? 'block' : 'none', zIndex: 1000, backdropFilter: 'blur(4px)' }} onClick={toggleMenu}></div>

      <div style={styles.drawer}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px' }}>
          <button onClick={toggleMenu} style={{ color: goldColor, fontSize: '32px', background: 'none', border: 'none' }}>✕</button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, paddingTop: '20px' }}>
          <a href={`${prefix}/`} style={{ color: isActive('/') ? goldColor : blackColor, textDecoration: 'none', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', margin: '12px 0' }} onClick={toggleMenu}>{t.home}</a>
          
          {/* SECCIÓN RESTAURAR */}
          <div onClick={() => toggleSection('restore')} style={{ color: blackColor, fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', margin: '12px 0', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
            {t.restore} <span>{openSection === 'restore' ? '−' : '+'}</span>
          </div>
          {openSection === 'restore' && (
            <div style={styles.subMenu}>
              {services.restore.map((s, i) => (
                <a key={i} href={getLocalizedPath(s.key)} style={{ color: '#555', textDecoration: 'none', fontSize: '16px', fontWeight: '600', margin: '8px 0', textTransform: 'uppercase' }} onClick={toggleMenu}>{s.title}</a>
              ))}
            </div>
          )}

          {/* SECCIÓN MEJORAR */}
          <div onClick={() => toggleSection('enhance')} style={{ color: blackColor, fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', margin: '12px 0', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
            {t.enhance} <span>{openSection === 'enhance' ? '−' : '+'}</span>
          </div>
          {openSection === 'enhance' && (
            <div style={styles.subMenu}>
              {services.enhance.map((s, i) => (
                <a key={i} href={getLocalizedPath(s.key)} style={{ color: '#555', textDecoration: 'none', fontSize: '16px', fontWeight: '600', margin: '8px 0', textTransform: 'uppercase' }} onClick={toggleMenu}>{s.title}</a>
              ))}
            </div>
          )}

          <a href={getLocalizedPath('dental_tourism')} style={{ color: isActive('dental_tourism') ? goldColor : blackColor, textDecoration: 'none', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', margin: '12px 0' }} onClick={toggleMenu}>{t.tourism}</a>
          
          <a href={getLocalizedPath('blog')} style={{ color: isActive('blog') ? goldColor : blackColor, textDecoration: 'none', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', margin: '12px 0' }} onClick={toggleMenu}>{t.blog}</a>

          <a href={getLocalizedPath('contact')} style={{ backgroundColor: goldColor, color: whiteColor, textAlign: 'center', padding: '16px', textDecoration: 'none', fontWeight: '800', textTransform: 'uppercase', borderRadius: '4px', marginTop: '30px' }} onClick={toggleMenu}>
            {t.contact}
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;