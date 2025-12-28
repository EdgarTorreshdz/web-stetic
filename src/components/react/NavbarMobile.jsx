import React, { useState, useEffect } from 'react';

const NavbarMobile = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [openSection, setOpenSection] = useState(null); // Para manejar los colapsables de servicios
  
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
    setOpenSection(null); // Resetear submenús al cerrar/abrir
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isActive = (path) => {
    const linkPath = `${prefix}${path}`.replace(/\/$/, "");
    const activePath = currentPath.replace(/\/$/, "");
    if (path === '/' && (activePath === prefix || activePath === "")) return true;
    return activePath === linkPath;
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

  const services = {
    restore: lang === 'es' 
      ? [
          { title: "Odontología General", url: "/especialidades" },
          { title: "Endodoncia", url: "/endodoncia" },
          { title: "Cirugía", url: "/cirugia" },
          { title: "Rehabilitación", url: "/rehabilitacion" },
          { title: "Odontopediatría", url: "/odontopediatria" }
        ]
      : [
          { title: "General Dentistry", url: "/especialidades" },
          { title: "Endodontics", url: "/endodoncia" },
          { title: "Surgery", url: "/cirugia" },
          { title: "Rehabilitation", url: "/rehabilitacion" },
          { title: "Pediatric Dentistry", url: "/odontopediatria" }
        ],
    enhance: lang === 'es'
      ? [
          { title: "Odontología Estética", url: "/odontologia-estetica" },
          { title: "Ortodoncia", url: "/ortodoncia" },
          { title: "Ortopedia", url: "/ortopedia" }
        ]
      : [
          { title: "Esthetic Dentistry", url: "/odontologia-estetica" },
          { title: "Orthodontics", url: "/ortodoncia" },
          { title: "Orthopedics", url: "/ortopedia" }
        ]
  };

  const t = labels[lang] || labels.en;

  const styles = {
    menuBtn: { background: 'none', border: 'none', color: blackColor, cursor: 'pointer', padding: '10px' },
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
      overflowY: 'auto'
    },
    headerDrawer: { display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px' },
    closeBtn: { color: goldColor, fontSize: '32px', background: 'none', border: 'none' },
    navLinks: { display: 'flex', flexDirection: 'column', flexGrow: 1, paddingTop: '20px' },
    link: (active) => ({
      color: active ? goldColor : blackColor,
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: '700',
      textTransform: 'uppercase',
      margin: '12px 0',
      letterSpacing: '1px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }),
    subMenu: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '20px',
      borderLeft: `2px solid ${goldColor}`,
      marginBottom: '10px',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-out'
    },
    subMenuActive: { maxHeight: '500px' },
    subLink: {
      color: '#555',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
      margin: '8px 0',
      textTransform: 'uppercase'
    },
    ctaButton: {
      backgroundColor: goldColor,
      color: whiteColor,
      textAlign: 'center',
      padding: '16px',
      textDecoration: 'none',
      fontWeight: '800',
      textTransform: 'uppercase',
      borderRadius: '4px',
      marginTop: '30px',
      letterSpacing: '1px'
    },
    overlay: {
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: isOpen ? 'block' : 'none',
      zIndex: 1000, backdropFilter: 'blur(4px)'
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
          
          {/* SECCIÓN RESTAURAR */}
          <div onClick={() => toggleSection('restore')} style={styles.link(false)}>
            {t.restore} <span>{openSection === 'restore' ? '−' : '+'}</span>
          </div>
          <div style={{...styles.subMenu, ...(openSection === 'restore' ? styles.subMenuActive : {})}}>
            {services.restore.map((s, i) => (
              <a key={i} href={`${prefix}${s.url}`} style={styles.subLink} onClick={toggleMenu}>{s.title}</a>
            ))}
          </div>

          {/* SECCIÓN MEJORAR */}
          <div onClick={() => toggleSection('enhance')} style={styles.link(false)}>
            {t.enhance} <span>{openSection === 'enhance' ? '−' : '+'}</span>
          </div>
          <div style={{...styles.subMenu, ...(openSection === 'enhance' ? styles.subMenuActive : {})}}>
            {services.enhance.map((s, i) => (
              <a key={i} href={`${prefix}${s.url}`} style={styles.subLink} onClick={toggleMenu}>{s.title}</a>
            ))}
          </div>

          <a href={`${prefix}/turismo-dental`} style={styles.link(isActive('/turismo-dental'))} onClick={toggleMenu}>{t.tourism}</a>
          <a href={`${prefix}/blog`} style={styles.link(isActive('/blog'))} onClick={toggleMenu}>{t.blog}</a>

          <a href={`${prefix}/contacto`} style={styles.ctaButton} onClick={toggleMenu}>
            {t.contact}
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;