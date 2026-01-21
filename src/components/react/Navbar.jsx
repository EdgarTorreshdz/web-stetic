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

  const getLocalizedPath = (key) => {
    const slug = routes[lang]?.[key] || key;
    const path = `${prefix}/${slug}`.replace(/\/+$/, "");
    return path || `${prefix}/`;
  };

  const isActive = (key) => {
    // Para el blog, verificamos si la URL actual contiene /blog
    if (key === 'blog') {
      return currentPath.includes('/blog');
    }
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

  const t = labels[lang] || labels.en;

  // Lógica de URL para el Blog (WordPress directo)
  const blogUrl = lang === 'es' 
    ? '/blog/' 
    : '/blog/en/';

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
      <a style={linkStyle('/')} href={`${prefix}/`}>
        {t.home}
      </a>
      
      <DropdownEspecialidades lang={lang} currentPath={currentPath} category="restore" label={t.restore} />
      <DropdownEspecialidades lang={lang} currentPath={currentPath} category="enhance" label={t.enhance} />

      <a style={linkStyle('dental_tourism')} href={getLocalizedPath('dental_tourism')}>
        {t.tourism}
      </a>

      {/* BLOG: Usamos la variable blogUrl directa en lugar de getLocalizedPath */}
      <a style={linkStyle('blog')} href={blogUrl}>
        {t.blog}
      </a>
      
      <LanguagePicker currentLang={lang} />

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