import React, { useState } from "react";

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

const DropdownEspecialidades = ({ lang = 'en' }) => {
  const [open, setOpen] = useState(false);
  const specialties = content[lang] || content.en;
  const prefix = `/${lang}`; 
  const goldColor = '#D4AF37';
  const triggerLabel = lang === 'es' ? 'Especialidades' : 'Specialties';

  const styles = {
    wrapper: { position: "relative", display: "inline-block" },
    trigger: {
      color: "#000000",
      textDecoration: "none",
      padding: "5px 12px", // REDUCIDO: Sincronizado con el Navbar
      textTransform: "uppercase",
      fontSize: "16px",
      fontWeight: "700",
      letterSpacing: "0.8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      transition: "all 0.3s ease",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      right: "0",
      width: "800px",
      backgroundColor: "#ffffff",
      padding: "20px",
      zIndex: 1000,
      borderRadius: "0 0 8px 8px",
      boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",
      borderTop: `3px solid ${goldColor}`,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      borderRadius: "6px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      border: "1px solid #f5f5f5",
      backgroundColor: "#fff",
    }
  };

  return (
    <div style={styles.wrapper} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div style={{ ...styles.trigger, color: open ? goldColor : "#000000" }}>
        {triggerLabel}
        <span style={{ marginLeft: "4px", fontSize: "9px", transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
      </div>

      {open && (
        <div style={styles.dropdown}>
          {specialties.map((spec, index) => (
            <a
              key={index}
              href={`${prefix}${spec.url}`}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = goldColor;
                e.currentTarget.style.transform = "translateY(-3px)";
                const title = e.currentTarget.querySelector('h4');
                if (title) title.style.color = goldColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f5f5f5";
                e.currentTarget.style.transform = "translateY(0)";
                const title = e.currentTarget.querySelector('h4');
                if (title) title.style.color = "#000";
              }}
            >
              <div style={{ height: "80px", backgroundImage: `url('${spec.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "8px" }}>
                <h4 style={{ fontSize: "11px", fontWeight: "700", color: "#000", margin: "0 0 3px 0", textTransform: "uppercase" }}>{spec.title}</h4>
                <p style={{ fontSize: "9px", color: "#777", margin: 0, lineHeight: "1.2" }}>{spec.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownEspecialidades;