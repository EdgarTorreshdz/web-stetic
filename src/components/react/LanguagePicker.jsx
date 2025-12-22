// src/components/react/LanguagePicker.jsx
import React from 'react';

export default function LanguagePicker({ currentLang = 'en' }) {
  const handleLanguageChange = (e, targetLang) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;

    const currentPath = window.location.pathname; // Ej: "/en/nosotros"
    const pathSegments = currentPath.split('/').filter(Boolean); // Ej: ["en", "nosotros"]

    let newPath = "";

    // Si el primer segmento es un idioma conocido ('en' o 'es')
    if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'es')) {
      // Reemplazamos el primer segmento por el nuevo idioma
      pathSegments[0] = targetLang;
      newPath = '/' + pathSegments.join('/');
    } else {
      // Caso de seguridad: si por alguna razón no hay prefijo, lo añadimos
      newPath = `/${targetLang}${currentPath === '/' ? '/' : currentPath}`;
    }

    // Aseguramos que termine en slash si es necesario o que no sea un path vacío
    if (!newPath.endsWith('/') && currentPath.endsWith('/')) newPath += '/';
    
    window.location.href = newPath;
  };

  // ... (tus estilos se mantienen iguales)
  const styles = {
    container: { display: 'flex', gap: '4px', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '4px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', width: 'fit-content' },
    button: (isActive) => ({ color: 'white', border: 'none', fontSize: '10px', fontWeight: '700', padding: '4px 10px', borderRadius: '16px', cursor: 'pointer', backgroundColor: isActive ? '#00c1e0' : 'transparent', transition: 'all 0.3s ease', opacity: isActive ? 1 : 0.6, textTransform: 'uppercase' })
  };

  return (
    <div style={styles.container}>
      <button onClick={(e) => handleLanguageChange(e, 'en')} style={styles.button(currentLang === 'en')}>EN</button>
      <button onClick={(e) => handleLanguageChange(e, 'es')} style={styles.button(currentLang === 'es')}>ES</button>
    </div>
  );
}