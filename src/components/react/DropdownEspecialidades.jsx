import React from "react";
import { routes } from "../../i18n/ui";

const DropdownEspecialidades = ({ lang = 'en', currentPath, category, label }) => {
  const [open, setOpen] = React.useState(false);
  const prefix = `/${lang}`;
  const goldColor = '#D4AF37';

  const services = {
    en: {
      restore: [
        { title: "Dental Implants", key: "dental_implants" },
        { title: "Crowns & Bridges", key: "dental_crowns" },
        { title: "Root Canal (Endodontics)", key: "endodontics" },
        { title: "Orthodontics", key: "orthodontics" },
        { title: "Invisalign", key: "invisalign" },
      ],
      enhance: [
        { title: "Smile Design", key: "smile_design" },
        { title: "Dental Veneers", key: "veneers" },
        { title: "Teeth Whitening", key: "teeth_whitening" },
        { title: "Teeth Cleaning", key: "teeth_cleaning" },
      ]
    },
    es: {
      restore: [
        { title: "Implantes Dentales", key: "dental_implants" },
        { title: "Coronas y Puentes", key: "dental_crowns" },
        { title: "Endodoncia", key: "endodontics" },
        { title: "Ortodoncia", key: "orthodontics" },
        { title: "Invisalign", key: "invisalign" },
      ],
      enhance: [
        { title: "Diseño de Sonrisa", key: "smile_design" },
        { title: "Carillas Dentales", key: "veneers" },
        { title: "Blanqueamiento Dental", key: "teeth_whitening" },
        { title: "Limpieza Dental", key: "teeth_cleaning" },
      ]
    }
  };
  
  const currentServices = services[lang][category];

  const getLocalizedUrl = (key) => {
    const slug = routes[lang]?.[key] || key;
    return `${prefix}/${slug}`;
  };

  return (
    <div 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)} 
      style={{position: 'relative', display: 'inline-block'}}
    >
      <div style={{
        cursor: 'pointer', 
        padding: '5px 12px', 
        fontWeight: '700', 
        textTransform: 'uppercase', 
        fontSize: '15px',
        color: open ? goldColor : 'black',
        transition: 'color 0.3s ease'
      }}>
        {label} <span style={{fontSize: '10px', marginLeft: '4px'}}>{open ? '▲' : '▼'}</span>
      </div>

      <div style={{
        display: open ? 'block' : 'none', 
        position: 'absolute', 
        backgroundColor: 'white', 
        minWidth: '240px', 
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        top: '100%',
        left: '0',
        borderTop: `3px solid ${goldColor}`
      }}>
        {currentServices.map((service, index) => (
          <a
            key={index}
            href={getLocalizedUrl(service.key)}
            style={{
              display: 'block', 
              padding: '12px 20px', 
              textDecoration: 'none', 
              color: 'black', 
              fontSize: '14px',
              fontWeight: '600',
              borderBottom: '1px solid #f5f5f5 transition 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9f9f9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {service.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownEspecialidades;