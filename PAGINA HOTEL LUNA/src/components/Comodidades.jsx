import React from 'react';

const AMENITIES = [
  ['📺', 'Smart TV'], ['🛁', 'Jacuzzi privado'], ['🎬', 'Netflix'], ['▶️', 'YouTube Premium'],
  ['📶', 'Wi-Fi de alta velocidad'], ['🅿️', 'Estacionamiento'], ['🚿', 'Agua caliente'], ['🛏️', 'Cama matrimonial'],
  ['💡', 'Iluminación ambiental'], ['🛋️', 'Sillón tántrico'], ['🥂', 'Frigobar'], ['🍽️', 'Servicio a la habitación 24/7'],
  ['🌆', 'Vista panorámica'], ['🎵', 'Sistema de sonido']
];

export default function Comodidades() {
  return (
    <section id="comodidades" className="amenities-section">
      <div className="section-title-wrap">
        <span className="section-golden-eyebrow">Todo pensado para ti</span>
        <h2 className="section-main-title">Comodidades</h2>
        <p className="section-description">Cada suite cuenta con detalles diseñados para una experiencia cómoda, privada y especial.</p>
      </div>
      <div className="amenities-grid">
        {AMENITIES.map(([icon, name]) => (
          <div className="amenity-item" key={name}>
            <span className="amenity-icon" aria-hidden="true">{icon}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
