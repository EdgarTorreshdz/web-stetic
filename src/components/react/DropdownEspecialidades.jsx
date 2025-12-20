// DropdownEspecialidades.jsx
import React, { useState } from "react";

const specialties = [
  {
    title: "Odontología general",
    description: "Tratamientos generales para embellecer tus sonrisas.",
    image: "/odontologiageneral.webp",
    url: "/especialidades",
  },
  {
    title: "Odontología Estética",
    description: "Recupera tus dientes y mejora su funcionalidad.",
    image: "/esteticadental.jpg",
    url: "/odontologia-estetica",
  },
  {
    title: "Endodoncia",
    description: "Elimina infecciones y alivia el dolor conservando el diente.",
    image: "/endodoncia.jpg",
    url: "/endodoncia",
  },
  {
    title: "Ortodoncia",
    description: "Corrige la posición de tus dientes para una mejor mordida.",
    image: "/ortodoncia.png",
    url: "/ortodoncia",
  },
  {
    title: "Ortopedia",
    description:
      "Arregla la funcionalidad y armonía facial desde temprana edad.",
    image: "/ortopedia.jpg",
    url: "/ortopedia",
  },
  {
    title: "Cirugía",
    description: "Intervenciones complejas para la salud bucal.",
    image: "/cirugia.jpg",
    url: "/cirugia",
  },
  {
    title: "Odontopediatría",
    description: "Atención especializada para niños hasta los 12 años.",
    image: "/odontopediatria.png",
    url: "/odontopediatria",
  },
  {
    title: "Rehabilitación",
    description: "Atención especializada para niños hasta los 12 años.",
    image: "/rehabilitacion.jpeg",
    url: "/odontopediatria",
  },
];

const dropdownStyles = {
  container: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "max-content", // se ajusta al contenido
    backgroundColor: "#fff",
    padding: "10px",
    boxSizing: "border-box",
    zIndex: 10,
    border: "1px solid #ccc",
  },
  row: {
    display: "flex",
    justifyContent: "center", // centra los items en la fila
    gap: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  // Estilo base para cada tarjeta (tamaño fijo)
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
  },
  info: {
    padding: "10px",
  },
  title: {
    margin: "0 0 5px 0",
    fontSize: "14px",
  },
  description: {
    fontSize: "10px",
    margin: 0,
  },
};

const DropdownEspecialidades = () => {
  // En este ejemplo, dejamos el dropdown siempre visible para visualizar el layout.
  const [open, setOpen] = useState(false);

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
        Especialidades
        <span style={{ marginLeft: "5px", fontSize: "10px", color: "white" }}>
          ▼
        </span>
      </a>
      {open && (
        <div style={dropdownStyles.container}>
          {/* Primera fila: 3 items */}
          <div style={dropdownStyles.row}>
            {specialties.slice(0, 3).map((spec, index) => (
              <a
                key={index}
                href={spec.url}
                style={dropdownStyles.itemBase}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    ...dropdownStyles.image,
                    backgroundImage: `url(${spec.image})`,
                  }}
                />
                <div style={dropdownStyles.info}>
                  <h4 style={dropdownStyles.title}>{spec.title}</h4>
                  <p style={dropdownStyles.description}>{spec.description}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Segunda fila: 3 items */}
          <div style={dropdownStyles.row}>
            {specialties.slice(3, 6).map((spec, index) => (
              <a
                key={index}
                href={spec.url}
                style={dropdownStyles.itemBase}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    ...dropdownStyles.image,
                    backgroundImage: `url(${spec.image})`,
                  }}
                />
                <div style={dropdownStyles.info}>
                  <h4 style={dropdownStyles.title}>{spec.title}</h4>
                  <p style={dropdownStyles.description}>{spec.description}</p>
                </div>
              </a>
            ))}
          </div>
          {/* Tercera fila: 1 item, centrado */}
          <div style={dropdownStyles.row}>
            {specialties.slice(6).map((spec, index) => (
              <a
                key={index}
                href={spec.url}
                style={dropdownStyles.itemBase}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    ...dropdownStyles.image,
                    backgroundImage: `url(${spec.image})`,
                  }}
                />
                <div style={dropdownStyles.info}>
                  <h4 style={dropdownStyles.title}>{spec.title}</h4>
                  <p style={dropdownStyles.description}>{spec.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownEspecialidades;
