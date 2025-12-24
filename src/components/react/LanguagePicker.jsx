import React from 'react';

export default function LanguagePicker({ currentLang = 'en' }) {
  const handleLanguageChange = (e, targetLang) => {
    e.preventDefault();
    if (typeof window === 'undefined' || targetLang === currentLang) return;

    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);

    let newPath = "";

    // Lógica para detectar si ya hay un idioma en la URL
    if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'es')) {
      pathSegments[0] = targetLang;
      newPath = '/' + pathSegments.join('/');
    } else {
      newPath = `/${targetLang}${currentPath === '/' ? '' : currentPath}`;
    }

    // Limpieza de slashes dobles
    newPath = newPath.replace(/\/+$/, '') || '/';
    
    // Redirección física para forzar recarga de Astro
    window.location.href = newPath;
  };

  const goldColor = '#D4AF37';

  const styles = {
    container: { display: 'flex', gap: '2px', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '3px', borderRadius: '20px', border: `1px solid #eeeeee`, width: 'fit-content' },
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
      <button onClick={(e) => handleLanguageChange(e, 'en')} style={styles.button(currentLang === 'en')}>EN</button>
      <button onClick={(e) => handleLanguageChange(e, 'es')} style={styles.button(currentLang === 'es')}>ES</button>
    </div>
  );
}