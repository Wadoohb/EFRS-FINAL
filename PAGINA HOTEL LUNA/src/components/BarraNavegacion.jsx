import React from 'react';

export default function BarraNavegacion() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand-logo">
          <div className="brand-symbol">🌒</div>
          <div className="brand-text">
            <h1>Luna Dorada</h1>
            <span className="brand-tagline">Suites privadas</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#nosotros">Quiénes somos</a></li>
          <li><a href="#comodidades">Comodidades</a></li>
          <li><a href="#room-service">Servicio a la habitación</a></li>
          <li><a href="#reserva">Cotizar y reservar</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="nav-contact-pill">
          <span>📞</span> 987 654 321
        </a>
      </div>
    </header>
  );
}
