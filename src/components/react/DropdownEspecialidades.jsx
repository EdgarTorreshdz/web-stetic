import React, { useState } from "react";

// 1. Definimos las especialidades por idioma
const content = {
  en: [
    { title: "General Dentistry", description: "General treatments to beautify your smile.", image: "/odontologiageneral.webp", url: "/especialidades" },
    { title: "Esthetic Dentistry", description: "Recover your teeth and improve functionality.", image: "/esteticadental.jpg", url: "/odontologia-estetica" },
    { title: "Endodontics", description: "Eliminate infections and relieve pain preserving the tooth.", image: "/endodoncia.jpg", url: "/endodoncia" },
    { title: "Orthodontics", description: "Correct the position of your teeth for a better bite.", image: "/ortodoncia.png", url: "/ortodoncia" },
    { title: "Orthopedics", description: "Fix functionality and facial harmony from an early age.", image: "/ortopedia.jpg", url: "/ortopedia" },
    { title: "Surgery", description: "Complex interventions for oral health.", image: "/cirugia.jpg", url: "/cirugia" },
    { title: "Pediatric Dentistry", description: "Specialized care for children up to 12 years old.", image: "/odontopediatria.png", url: "/odontopediatria" },
    { title: "Rehabilitation", description: "Specialized dental restoration treatments.", image: "/rehabilitacion.jpeg", url: "/rehabilitacion" },
  ],
  es: [
    { title: "Odontología general", description: "Tratamientos generales para embellecer tus sonrisas.", image: "/odontologiageneral.webp", url: "/especialidades" },
    { title: "Odontología Estética", description: "Recupera tus dientes y mejora su funcionalidad.", image: "/esteticadental.jpg", url: "/odontologia-estetica" },
    { title: "Endodoncia", description: "Elimina infecciones y alivia el dolor conservando el diente.", image: "/endodoncia.jpg", url: "/endodoncia" },
    { title: "Ortodoncia", description: "Corrige la posición de tus dientes para una mejor mordida.", image: "/ortodoncia.png", url: "/ortodoncia" },
    { title: "Ortopedia", description: "Arregla la funcionalidad y armonía facial desde temprana edad.", image: "/ortopedia.jpg", url: "/ortopedia" },
    { title: "Cirugía", description: "Intervenciones complejas para la salud bucal.", image: "/cirugia.jpg", url: "/cirugia" },
    { title: "Odontopediatría", description: "Atención especializada para niños hasta los 12 años.", image: "/odontopediatria.png", url: "/odontopediatria" },
    { title: "Rehabilitación", description: "Tratamientos especializados de restauración dental.", image: "/rehabilitacion.jpeg", url: "/rehabilitacion" },
  ]
};

const dropdownStyles = {
  container: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "max-content",
    backgroundColor: "#fff",
    padding: "10px",
    boxSizing: "border-box",
    zIndex: 100,
    border: "1px solid #ccc",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  itemBase: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    textDecoration: "none",
    color: "#03192c",
    borderRadius: "4px",
    overflow: "hidden",
    transition: "transform 0.2s ease",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f0f0f0",
  },
  info: {
    padding: "10px",
  },
  title: {
    margin: "0 0 5px 0",
    fontSize: "14px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "11px",
    margin: 0,
    color: "#666",
  },
};

const DropdownEspecialidades = ({ lang = 'en' }) => {
  const [open, setOpen] = useState(false);

  const specialties = content[lang] || content.en;
  
  // CAMBIO CLAVE: El prefijo ahora siempre incluye el lang actual para rutas dinámicas
  const prefix = `/${lang}`; 
  
  const triggerLabel = lang === 'es' ? 'Especialidades' : 'Specialties';

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        style={{
          color: "white",
          textDecoration: "none",
          margin: "0 20px",
          textTransform: "uppercase",
          fontSize: "11px",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        {triggerLabel}
        <span style={{ marginLeft: "5px", fontSize: "10px", color: "white" }}>▼</span>
      </a>

      {open && (
        <div style={dropdownStyles.container}>
          {[
            specialties.slice(0, 3),
            specialties.slice(3, 6),
            specialties.slice(6)
          ].map((rowItems, rowIndex) => (
            <div key={rowIndex} style={dropdownStyles.row}>
              {rowItems.map((spec, index) => (
                <a
                  key={index}
                  // Aquí aplicamos el prefijo dinámico
                  href={`${prefix}${spec.url}`}
                  style={dropdownStyles.itemBase}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div
                    style={{
                      ...dropdownStyles.image,
                      backgroundImage: `url('${spec.image}')`,
                    }}
                  />
                  <div style={dropdownStyles.info}>
                    <h4 style={dropdownStyles.title}>{spec.title}</h4>
                    <p style={dropdownStyles.description}>{spec.description}</p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownEspecialidades;