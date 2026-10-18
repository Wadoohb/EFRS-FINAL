import React from 'react';

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-copy">
        <span className="section-golden-eyebrow">Nuestra esencia</span>
        <h2 className="section-main-title">Más que una estadía, un momento para recordar</h2>
        <p>
          En Luna Dorada Suites creamos espacios íntimos y cuidadosamente diseñados para que desconectes de la rutina. Cada detalle combina confort, limpieza y absoluta discreción.
        </p>
        <p>
          Nuestro equipo está disponible las 24 horas para acompañarte desde tu cotización hasta tu llegada, con una atención cercana y personalizada.
        </p>
        <a className="btn-about-whatsapp" href="https://wa.me/51987654321?text=Hola%2C%20quisiera%20conocer%20m%C3%A1s%20sobre%20Luna%20Dorada%20Suites." target="_blank" rel="noopener noreferrer">
          💬 Escríbenos por WhatsApp
        </a>
      </div>
      <div className="about-image-wrap">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85" alt="Interior elegante de Luna Dorada Suites" />
        <div className="about-stat"><strong>24/7</strong><span>Atención personalizada</span></div>
      </div>
    </section>
  );
}
