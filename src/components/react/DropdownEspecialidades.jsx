import React from "react";

const DropdownEspecialidades = ({ lang = 'en', currentPath, category, label }) => {
  const [open, setOpen] = React.useState(false);
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';

  const services = {
    en: {
      restore: [
        { title: "General Dentistry", url: "/especialidades" },
        { title: "Endodontics", url: "/endodoncia" },
        { title: "Surgery", url: "/cirugia" },
        { title: "Rehabilitation", url: "/rehabilitacion" },
        { title: "Pediatric Dentistry", url: "/odontopediatria" },
      ],
      enhance: [
        { title: "Esthetic Dentistry", url: "/odontologia-estetica" },
        { title: "Orthodontics", url: "/ortodoncia" },
        { title: "Orthopedics", url: "/ortopedia" },
      ]
    },
    es: {
      restore: [
        { title: "Odontología General", url: "/especialidades" },
        { title: "Endodoncia", url: "/endodoncia" },
        { title: "Cirugía", url: "/cirugia" },
        { title: "Rehabilitación", url: "/rehabilitacion" },
        { title: "Odontopediatría", url: "/odontopediatria" },
      ],
      enhance: [
        { title: "Odontología Estética", url: "/odontologia-estetica" },
        { title: "Ortodoncia", url: "/ortodoncia" },
        { title: "Ortopedia", url: "/ortopedia" },
      ]
    }
  };

  const currentServices = services[lang][category];

  const styles = {
    wrapper: { position: "relative", display: "inline-block" },
    trigger: {
      color: open ? goldColor : "#000000",
      textDecoration: "none",
      padding: "5px 12px",
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
      left: "0",
      minWidth: "220px",
      backgroundColor: "#ffffff",
      padding: "10px 0",
      zIndex: 1000,
      boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
      borderTop: `3px solid ${goldColor}`,
      display: open ? "block" : "none",
    },
    item: {
      display: "block",
      padding: "10px 20px",
      color: "#000000",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "uppercase",
      transition: "background 0.3s, color 0.3s",
    }
  };

  return (
    <div 
      style={styles.wrapper} 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)}
    >
      <div style={styles.trigger}>
        {label}
        <span style={{ marginLeft: "6px", fontSize: "10px" }}>▼</span>
      </div>

      <div style={styles.dropdown}>
        {currentServices.map((service, index) => (
          <a
            key={index}
            href={`${prefix}${service.url}`}
            style={styles.item}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9f9f9";
              e.currentTarget.style.color = goldColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#000000";
            }}
          >
            {service.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownEspecialidades;