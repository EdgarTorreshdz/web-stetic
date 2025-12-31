import React, { useState, useEffect } from 'react';
import DropdownEspecialidades from './DropdownEspecialidades';
import LanguagePicker from './LanguagePicker';
import { routes } from '../../i18n/ui';

const Navbar = ({ lang = 'en' }) => {
  const [currentPath, setCurrentPath] = useState('');
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';
  const blackColor = '#000000';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // FUNCIÓN CRÍTICA: Busca la traducción exacta en ui.ts
  const getLocalizedPath = (key) => {
    const slug = routes[lang]?.[key] || key;
    // Evita barras dobles al final y asegura el prefijo
    const path = `${prefix}/${slug}`.replace(/\/+$/, "");
    return path || `${prefix}/`;
  };

  const isActive = (key) => {
    const targetPath = key === '/' ? prefix : getLocalizedPath(key);
    const activePath = currentPath.replace(/\/$/, "");
    return activePath === targetPath;
  };

  // Labels actualizados con Restore y Enhance que faltaban
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

  const linkStyle = (key) => ({
    color: isActive(key) ? goldColor : blackColor,
    textDecoration: 'none',
    padding: '5px 12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '15px'
  });

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
      {/* HOME */}
      <a style={linkStyle('/')} href={`${prefix}/`}>
        {t.home}
      </a>
      
      {/* DROPDOWNS: Asegúrate que dentro de estos componentes uses getLocalizedPath con las keys de ui.ts */}
      <DropdownEspecialidades lang={lang} currentPath={currentPath} category="restore" label={t.restore} />
      <DropdownEspecialidades lang={lang} currentPath={currentPath} category="enhance" label={t.enhance} />

      {/* DENTAL TOURISM: Key 'dental_tourism' coincide con ui.ts */}
      <a style={linkStyle('dental_tourism')} href={getLocalizedPath('dental_tourism')}>
        {t.tourism}
      </a>

      {/* BLOG: Key 'blog' coincide con ui.ts */}
      <a style={linkStyle('blog')} href={getLocalizedPath('blog')}>
        {t.blog}
      </a>
      
      <LanguagePicker currentLang={lang} />

      {/* CONTACTO: Key 'contact' coincide con ui.ts */}
      <a 
        style={{ 
          backgroundColor: goldColor, 
          color: '#fff', 
          padding: '10px 20px', 
          borderRadius: '4px', 
          textDecoration: 'none', 
          fontWeight: '800',
          marginLeft: '10px'
        }} 
        href={getLocalizedPath('contact')}
      >
        {t.contact}
      </a>
    </nav>
  );
};

export default Navbar;