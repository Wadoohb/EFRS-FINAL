import React from 'react';

export default function PiePagina() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="footer-logo">LUNA DORADA SUITES</div>
        <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
          "Privacidad, lujo y excelencia: todo en un solo lugar"
        </p>
        <p className="footer-meta">
          Av. Sol Dorado 123, Lima | Teléfono: +51 987 654 321 | reservas@lunadorada.pe
        </p>
        <div className="social-links" aria-label="Redes sociales">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎ Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f Facebook</a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">♪ TikTok</a>
          <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">◉ WhatsApp</a>
        </div>
        <p className="footer-terms"><a href="#terminos">Términos de reserva</a> <span>•</span> <a href="#terminos">Política de privacidad</a></p>
        <p style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
          Proyecto Académico EFSRT 1 • Computación e Informática Cibertec | Creador: <strong>Grupo 6</strong>
        </p>
      </div>
    </footer>
  );
}
