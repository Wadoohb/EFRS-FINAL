import React from 'react';

const TERMS = [
  ['🗓️', 'Disponibilidad y tarifa', 'Toda solicitud está sujeta a validación de disponibilidad por recepción. Las tarifas publicadas son referenciales y se confirman antes de realizar el pago.'],
  ['💳', 'Garantía de reserva', 'Para bloquear una suite se solicita un adelanto del 50%. El saldo se cancela al ingreso o según la indicación de recepción.'],
  ['🔄', 'Cambios y cancelaciones', 'Los cambios de fecha deben solicitarse con anticipación y dependen de disponibilidad. Consulta con recepción las condiciones aplicables a tu reserva.'],
  ['🪪', 'Ingreso y registro', 'Al ingreso, el titular debe presentar un documento de identidad vigente. La información proporcionada debe ser verídica.'],
  ['🔒', 'Privacidad', 'Los datos compartidos se usan únicamente para atender la reserva, el registro del huésped y la comunicación con recepción.'],
  ['🛎️', 'Servicios adicionales', 'El servicio a la habitación y los servicios extra son exclusivos para huéspedes registrados y están sujetos a horario y disponibilidad.']
];

export default function Terminos() {
  return (
    <section id="terminos" className="terms-section">
      <div className="section-title-wrap">
        <span className="section-golden-eyebrow">Información importante</span>
        <h2 className="section-main-title">Términos de reserva</h2>
        <p className="section-description">Queremos que tu experiencia sea clara desde el primer momento. Revisa estas condiciones antes de solicitar una reserva.</p>
      </div>
      <div className="terms-grid">
        {TERMS.map(([icon, title, detail]) => <article className="term-card" key={title}><span>{icon}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}
      </div>
      <p className="terms-note">Al enviar una solicitud por WhatsApp, recepción confirmará disponibilidad, tarifa final, método de pago y condiciones específicas antes de registrar la reserva.</p>
    </section>
  );
}
