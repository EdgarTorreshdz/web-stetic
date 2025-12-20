import React from 'react';
import DropdownEspecialidades from './DropdownEspecialidades';

const Navbar = () => {
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

  return (
    <div style={styles.containerNavbar}>
      <nav style={styles.nav}>
        <a style={styles.link} href="/">Inicio</a>
        <DropdownEspecialidades />
        <a style={styles.link} href="/nosotros">Nosotros</a>
        <a style={styles.link} href="/testimonios">Testimonios</a>
        <a style={styles.link} href="/contacto">Contacto</a>
      </nav>
    </div>
  );
};

export default Navbar;
