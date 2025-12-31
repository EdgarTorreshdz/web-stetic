import React from "react";
import { routes } from "../../i18n/ui";

const DropdownEspecialidades = ({ lang = 'en', currentPath, category, label }) => {
  const [open, setOpen] = React.useState(false);
  const prefix = `/${lang}`;

  const services = {
    en: {
      restore: [
        { title: "General Dentistry", key: "general_dentistry" },
        { title: "Endodontics", key: "endodontics" },
        { title: "Surgery", key: "oral_surgery" },
        { title: "Rehabilitation", key: "dental_rehabilitation" },
        { title: "Pediatric Dentistry", key: "pediatric_dentistry" },
      ],
      enhance: [
        { title: "Esthetic Dentistry", key: "cosmetic_dentistry" },
        { title: "Orthodontics", key: "orthodontics" },
        { title: "Orthopedics", key: "orthopedics" },
        { title: "Dental Implants", key: "dental_implants" },
        { title: "Smile Design", key: "smile_design" },
        { title: "Dental Veneers", key: "veneers" },
        { title: "Teeth Cleaning", key: "teeth_cleaning" },
        { title: "Dental Crowns", key: "dental_crowns" },
        { title: "Teeth Whitening", key: "teeth_whitening" },
        { title: "Invisalign", key: "invisalign" },
        { title: "Dental Tourism", key: "dental_tourism" }
      ]
    },
    es: {
      restore: [
        { title: "Odontología General", key: "general_dentistry" },
        { title: "Endodoncia", key: "endodontics" },
        { title: "Cirugía", key: "oral_surgery" },
        { title: "Rehabilitación", key: "dental_rehabilitation" },
        { title: "Odontopediatría", key: "pediatric_dentistry" },
      ],
      enhance: [
        { title: "Odontología Estética", key: "cosmetic_dentistry" },
        { title: "Ortodoncia", key: "orthodontics" },
        { title: "Ortopedia", key: "orthopedics" },
        { title: "Implantes Dentales", key: "dental_implants" },
        { title: "Diseño de Sonrisa", key: "smile_design" },
        { title: "Carillas Dentales", key: "veneers" },
        { title: "Limpieza Dental", key: "teeth_cleaning" },
        { title: "Coronas Dentales", key: "dental_crowns" },
        { title: "Blanqueamiento Dental", key: "teeth_whitening" },
        { title: "Invisalign", key: "invisalign" },
        { title: "Turismo Dental", key: "dental_tourism" }
      ]
    }
  };
  
  const currentServices = services[lang][category];

  const getLocalizedUrl = (key) => {
    // Busca el slug traducido en el diccionario
    const slug = routes[lang]?.[key] || key;
    return `${prefix}/${slug}`;
  };

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{position: 'relative', display: 'inline-block'}}>
      <div style={{cursor: 'pointer', padding: '5px 12px', fontWeight: '700'}}>{label} ▼</div>
      <div style={{display: open ? 'block' : 'none', position: 'absolute', backgroundColor: 'white', minWidth: '220px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', zIndex: 1000}}>
        {currentServices.map((service, index) => (
          <a
            key={index}
            href={getLocalizedUrl(service.key)} // Genera /en/oral-surgery o /es/cirugia
            style={{display: 'block', padding: '10px 20px', textDecoration: 'none', color: 'black', fontSize: '14px'}}
          >
            {service.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownEspecialidades;