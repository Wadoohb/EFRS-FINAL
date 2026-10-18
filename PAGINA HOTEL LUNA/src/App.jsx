import React, { useState, useMemo } from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import EncabezadoPrincipal from './components/EncabezadoPrincipal';
import SobreNosotros from './components/SobreNosotros';
import Comodidades from './components/Comodidades';
import MenuServicioHabitacion from './components/MenuServicioHabitacion';
import Terminos from './components/Terminos';
import CatalogoHabitaciones, { ECLIPSE_ROOMS } from './components/CatalogoHabitaciones';
import FormularioReserva from './components/FormularioReserva';
import PiePagina from './components/PiePagina';

export default function App() {
  const formatLocalDate = (date) => {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().split('T')[0];
  };
  const hoyStr = useMemo(() => formatLocalDate(new Date()), []);
  const checkoutDefault = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return formatLocalDate(d);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    checkin: hoyStr,
    checkout: checkoutDefault,
    habitacion: 'Suite Jacuzzi',
    tipoCama: 'Cama tamaño Queen de lujo',
    adultos: '2',
    decoracion: 'Ninguno',
    nombre: '',
    telefono: '',
    tipoComprobante: 'boleta',
    dni: '',
    ruc: '',
    razonSocial: '',
    aceptaTerminos: false
  });

  const habitacionActiva = useMemo(() => {
    return ECLIPSE_ROOMS.find((r) => r.categoria === formData.habitacion) || ECLIPSE_ROOMS[3];
  }, [formData.habitacion]);

  const noches = useMemo(() => {
    if (!formData.checkin || !formData.checkout) return 1;
    const d1 = new Date(formData.checkin);
    const d2 = new Date(formData.checkout);
    const diff = d2 - d1;
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return dias > 0 ? dias : 1;
  }, [formData.checkin, formData.checkout]);

  const montoTotal = useMemo(() => {
    let base = noches * habitacionActiva.precioNoche;
    if (formData.decoracion && formData.decoracion.includes('+ S/ 60')) base += 60;
    if (formData.decoracion && formData.decoracion.includes('+ S/ 70')) base += 70;
    if (formData.decoracion && formData.decoracion.includes('+ S/ 90')) base += 90;
    return base;
  }, [noches, habitacionActiva.precioNoche, formData.decoracion]);

  const handleSelectRoom = (room) => {
    setFormData((prev) => ({
      ...prev,
      habitacion: room.categoria,
      tipoCama: room.tipoCamaDefault
    }));
    const formSection = document.getElementById('reserva');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendWhatsApp = () => {
    const adelanto50 = (montoTotal * 0.5).toFixed(2);
    const nombre = formData.nombre.trim();
    
    let infoComprobante = '';
    if (formData.tipoComprobante === 'boleta') {
      infoComprobante = `🧾 *Comprobante:* Boleta (DNI: ${formData.dni.trim()})`;
    } else {
      infoComprobante = `🧾 *Comprobante:* Factura\n• *RUC:* ${formData.ruc.trim()}\n• *Razón Social:* ${formData.razonSocial.trim()}`;
    }

    const extraServicio = formData.decoracion && formData.decoracion !== 'Ninguno' ? `🎁 *Servicio Adicional:* ${formData.decoracion}\n` : '';

    const mensaje = `¡Hola Recepción Luna Dorada Suites! Deseo solicitar una reserva:

👤 *Titular:* ${nombre}
📞 *Teléfono:* ${formData.telefono.trim()}
🏨 *Suite:* ${formData.habitacion}
🛏️ *Cama:* ${formData.tipoCama}
👥 *Huéspedes:* ${formData.adultos} Persona(s)
${extraServicio}📅 *Entrada:* ${formData.checkin}
📅 *Salida:* ${formData.checkout} (${noches} ${noches === 1 ? 'noche' : 'noches'})

${infoComprobante}

💰 *Tarifa noche:* S/ ${habitacionActiva.precioNoche}.00
💳 *Monto Total:* S/ ${montoTotal.toFixed(2)}
🔒 *Garantía para bloqueo (50%):* S/ ${adelanto50}

_Solicitud originada desde la web. Quedo a la espera de la confirmación para el abono de garantía._`;

    // Central de reservas ficticia (+51 987 654 321)
    const telefonoReservas = '51987654321';
    const whatsappUrl = `https://wa.me/${telefonoReservas}?text=${encodeURIComponent(mensaje)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <BarraNavegacion />
      <EncabezadoPrincipal />

      <main className="main-wrapper">
        <CatalogoHabitaciones onSelectRoom={handleSelectRoom} />
        <Comodidades />
        <MenuServicioHabitacion />

        <section id="reserva" className="booking-section">
          <div className="section-title-wrap">
            <span className="section-golden-eyebrow">Reserva Exclusiva</span>
            <h2 className="section-main-title">Solicita tu Suite</h2>
            <p className="section-description">
              Cotiza en tiempo real con total discreción y envía tu solicitud directa al área de recepción.
            </p>
          </div>

          <div className="booking-wizard-steps">
            <div className="step-item">
              <div className={`step-dot ${currentStep === 1 ? 'active' : 'completed'}`}>
                {currentStep > 1 ? '✓' : '1'}
              </div>
              <span className={`step-text ${currentStep === 1 ? 'active' : ''}`}>
                1. Selección de Suite
              </span>
            </div>

            <div className={`step-divider-line ${currentStep === 2 ? 'completed' : ''}`}></div>

            <div className="step-item">
              <div className={`step-dot ${currentStep === 2 ? 'active' : ''}`}>
                2
              </div>
              <span className={`step-text ${currentStep === 2 ? 'active' : ''}`}>
                2. Contacto y comprobante
              </span>
            </div>
          </div>

          <div className="booking-form-layout">
            <FormularioReserva
              formData={formData}
              setFormData={setFormData}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              noches={noches}
              montoTotal={montoTotal}
              minDate={hoyStr}
              onSendWhatsApp={handleSendWhatsApp}
            />
          </div>
        </section>

        <Terminos />
        <SobreNosotros />
      </main>

      <PiePagina />
      <a className="floating-whatsapp" href="https://wa.me/51987654321?text=Hola%2C%20quiero%20consultar%20por%20una%20reserva%20en%20Luna%20Dorada%20Suites." target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">💬<span>WhatsApp</span></a>
    </div>
  );
}
