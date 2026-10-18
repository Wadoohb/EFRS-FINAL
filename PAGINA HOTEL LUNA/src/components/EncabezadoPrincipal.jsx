import React, { useEffect, useState } from 'react';

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90',
  'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2200&q=90',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90'
];

export default function EncabezadoPrincipal() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % HERO_SLIDES.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="Presentación de Luna Dorada Suites">
      <div className="hero-slides" aria-hidden="true">
        {HERO_SLIDES.map((image, index) => <img key={image} src={image} alt="" className={index === activeSlide ? 'active' : ''} />)}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-container">
        <span className="hero-subhead">
          ✦ Bienvenidos a Luna Dorada Suites ✦
        </span>
        <h2>
          Vive momentos <span>que no se olvidan</span>
        </h2>
        <p className="hero-lead">
          El espacio perfecto para escapar de la rutina. Donde la comodidad se encuentra con la elegancia, la privacidad y el máximo confort.
        </p>

        <div className="hero-features">
          <span className="hero-feature-item">🔒 100% privacidad y discreción</span>
          <span className="hero-feature-item">🛁 Jacuzzis y saunas privados</span>
          <span className="hero-feature-item">⚡ Cotización y reserva en línea</span>
          <span className="hero-feature-item">🍸 Bar y servicio a la habitación 24/7</span>
        </div>
      </div>
      <div className="hero-slider-controls">
        <button type="button" className="hero-arrow" onClick={() => setActiveSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} aria-label="Imagen anterior">‹</button>
        <div className="hero-dots" role="tablist" aria-label="Imágenes destacadas">
          {HERO_SLIDES.map((image, index) => <button key={image} type="button" className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Mostrar imagen ${index + 1}`} aria-selected={index === activeSlide} role="tab" />)}
        </div>
        <button type="button" className="hero-arrow" onClick={() => setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)} aria-label="Imagen siguiente">›</button>
      </div>
    </section>
  );
}
