import React, { useState } from "react";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const styles = {
    containerNavbar: {
      padding: "10px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    burgerIcon: {
      cursor: "pointer",
      marginRight: "20px",
    },
    menuOverlay: {
      position: "fixed",
      inset: 0,
      height: "100dvh",
      maxHeight: "100vh",
      backgroundColor: "#03192c",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      /* Scroll interno */
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      overscrollBehavior: "contain",

      /* Espaciado */
      padding: "20px 0 calc(40px + env(safe-area-inset-bottom))",
    },

    menuGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "20px",
      width: "90%",
      maxWidth: "300px",
    },
    menuModule: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      cursor: "pointer",
    },
    icon: {
      width: "20px",
      height: "20px",
      marginRight: "8px",
    },
    link: {
      color: "#fff", // Letras blancas
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "bold",
      marginLeft: "15px",
    },
    closeButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "45px",
      cursor: "pointer",
    },
    contactCard: {
      width: "90%",
      maxWidth: "300px",
      padding: "20px",
      borderRadius: "8px",
      backgroundImage: 'url("/endodoncia.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "80px",
    },
    // Nuevo estilo para el div interno: fondo blanco transparente y letras negras
    contactContent: {
      backgroundColor: "rgba(255,255,255,0.7)",
      color: "#000",
      padding: "10px",
      borderRadius: "6px",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px",
    },
    socialIcon: {
      width: "24px",
      height: "24px",
    },
    // Nuevo estilo para el botón de contacto
    contactButton: {
      display: "inline-block",
      marginTop: "15px",
      padding: "10px 20px",
      backgroundColor: "#27b9c6",
      color: "#fff",
      textDecoration: "none",
      textTransform: "uppercase",
      fontWeight: "bold",
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
    },
  };

  return (
    <div style={styles.containerNavbar}>
      {/* Ícono hamburguesa centrado */}
      <div onClick={toggleMenu} style={styles.burgerIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
          />
        </svg>
      </div>

      {/* Overlay del menú */}
      {menuOpen && (
        <div style={styles.menuOverlay}>
          <button onClick={toggleMenu} style={styles.closeButton}>
            ×
          </button>
          <div style={styles.menuGrid}>
            <div style={styles.menuModule}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z"
                />
              </svg>
              <a style={styles.link} href="/">
                Inicio
              </a>
            </div>
            <div style={styles.menuModule}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1"
                />
              </svg>
              <a style={styles.link} href="/especialidades">
                Especialidades
              </a>
            </div>
            <div style={styles.menuModule}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#fff"
                  d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18q.617 0 1.21-.057A5.48 5.48 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5zm9.866 1.5a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0m1.125 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zm-5-2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m1 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"
                />
              </svg>
              <a style={styles.link} href="/nosotros">
                Nosotros
              </a>
            </div>
            <div style={styles.menuModule}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#fff"
                  d="M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3"
                />
              </svg>
              <a style={styles.link} href="/testimonios">
                Testimonios
              </a>
            </div>
            <div style={styles.menuModule}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8 2.999c1.648 0 3 1.351 3 3A3.01 3.01 0 0 1 13 11c-1.647 0-3-1.353-3-3.001c0-1.649 1.353-3 3-3M19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5z"
                />
              </svg>
              <a style={styles.link} href="/contacto">
                Contacto
              </a>
            </div>
          </div>
          <div style={styles.contactCard}>
            <div style={styles.contactContent}>
              <h2 style={{ fontSize: 18, marginBottom: 4 }}>Sucursal Veracruz</h2>
              <div style={{ fontSize: 14 }}>consultoriosteticdental@hotmail.com</div>
              <div style={{ fontSize: 14 }}>+52 2292062652</div>
              <div style={styles.socialContainer}>
                <a
                  href="https://www.facebook.com/SteticDentalVer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/steticdentalclinic?igsh=NGF4bjVjNWd4NWNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.link/38exw1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                </a>
              </div>
              <h2 style={{ fontSize: 18, marginBottom: 4 }}>Sucursal Playa del Carmen</h2>
              <div style={{ fontSize: 14 }}>steticdentalplaya@gmail.com</div>
              <div style={{ fontSize: 14 }}>+52 9841802566</div>
              <div style={styles.socialContainer}>
                <a
                  href="https://www.facebook.com/steticdentalplaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/steticdentalplaya?igsh=YmtyYWF3ZGQ3YzRx  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.link/ejverv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#27b9c6"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                </a>
              </div>
              <a style={styles.contactButton} href="/contacto">
                Contáctanos ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
