import React from 'react';
import { ECLIPSE_ROOMS } from './CatalogoHabitaciones';

export default function FormularioReserva({
  formData,
  setFormData,
  currentStep,
  setCurrentStep,
  noches,
  montoTotal,
  minDate,
  onSendWhatsApp
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHabitacionChange = (e) => {
    const categoria = e.target.value;
    const room = ECLIPSE_ROOMS.find((r) => r.categoria === categoria);
    setFormData((prev) => ({
      ...prev,
      habitacion: categoria,
      tipoCama: room ? room.tipoCamaDefault : prev.tipoCama
    }));
  };

  const handleComprobanteChange = (tipo) => {
    setFormData((prev) => ({
      ...prev,
      tipoComprobante: tipo
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.checkin || !formData.checkout) {
      alert('Por favor selecciona las fechas de entrada y salida.');
      return;
    }
    if (new Date(formData.checkout) <= new Date(formData.checkin)) {
      alert('La fecha de salida debe ser posterior a la fecha de entrada.');
      return;
    }
    setCurrentStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim()) {
      alert('Por favor ingresa tu Nombre y Apellidos.');
      return;
    }
    if (!formData.telefono.trim()) {
      alert('Por favor ingresa tu número de Teléfono / WhatsApp.');
      return;
    }
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los Términos de Reserva para continuar.');
      return;
    }

    if (formData.tipoComprobante === 'boleta') {
      if (!formData.dni.trim() || formData.dni.trim().length < 8) {
        alert('Por favor ingresa tu DNI / Documento válido (mínimo 8 dígitos).');
        return;
      }
    } else {
      if (!formData.ruc.trim() || formData.ruc.trim().length !== 11) {
        alert('Por favor ingresa un RUC válido de 11 dígitos.');
        return;
      }
      if (!formData.razonSocial.trim()) {
        alert('Por favor ingresa la Razón Social.');
        return;
      }
    }

    onSendWhatsApp();
  };

  return (
    <div className="booking-form-box">
      {/* PASO 1: ESTADÍA */}
      {currentStep === 1 && (
        <form onSubmit={handleNextStep}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="section-golden-eyebrow">Paso 01</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#fff' }}>
              Configura tu fecha y suite
            </h3>
          </div>

          <div className="form-row">
            <div className="form-cell">
              <label className="form-label" htmlFor="checkin">Fecha de Entrada *</label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                className="form-input"
                value={formData.checkin}
                onChange={handleChange}
                min={minDate}
                required
              />
            </div>
            <div className="form-cell">
              <label className="form-label" htmlFor="checkout">Fecha de Salida *</label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                className="form-input"
                value={formData.checkout}
                onChange={handleChange}
                min={formData.checkin || minDate}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-cell">
              <label className="form-label" htmlFor="habitacion">Selecciona la Suite *</label>
              <select
                id="habitacion"
                name="habitacion"
                className="form-input"
                value={formData.habitacion}
                onChange={handleHabitacionChange}
              >
                {ECLIPSE_ROOMS.map((r) => (
                  <option key={r.id} value={r.categoria}>
                    {r.categoria} - S/ {r.precioNoche}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-cell">
              <label className="form-label" htmlFor="tipoCama">Configuración de Cama</label>
              <select
                id="tipoCama"
                name="tipoCama"
                className="form-input"
                value={formData.tipoCama}
                onChange={handleChange}
              >
                {[...new Set(ECLIPSE_ROOMS.map((room) => room.tipoCamaDefault))].map((cama) => (
                  <option key={cama} value={cama}>{cama}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-cell">
              <label className="form-label" htmlFor="adultos">Huéspedes</label>
              <select
                id="adultos"
                name="adultos"
                className="form-input"
                value={formData.adultos}
                onChange={handleChange}
              >
                <option value="1">1 Persona</option>
                <option value="2">2 Personas (Pareja)</option>
              </select>
            </div>
            <div className="form-cell">
              <label className="form-label" htmlFor="decoracion">Servicio Adicional (Opcional)</label>
              <select
                id="decoracion"
                name="decoracion"
                className="form-input"
                value={formData.decoracion || 'Ninguno'}
                onChange={handleChange}
              >
                <option value="Ninguno">Solo Alojamiento</option>
                <option value="Decoración Romántica (+ S/ 60)">Decoración Romántica (+ S/ 60)</option>
                <option value="Pack Champaña & Copas (+ S/ 70)">Pack Champaña & Copas (+ S/ 70)</option>
                <option value="Pack VIP de tienda sensual (+ S/ 90)">Pack VIP de tienda sensual (+ S/ 90)</option>
              </select>
            </div>
          </div>

          {/* Resumen del cálculo */}
          <div className="calc-summary-gold">
            <div>
              <span className="calc-title-gold">Resumen Estimado</span>
              <div className="calc-days-text">
                {noches} {noches === 1 ? 'noche' : 'noches'} de estadía
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Monto Total</span>
              <span className="calc-total-gold">S/ {montoTotal.toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" className="btn-next-step">
            Continuar al Paso 2 ➔
          </button>
        </form>
      )}

      {/* PASO 2: CONTACTO Y COMPROBANTE */}
      {currentStep === 2 && (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <span className="section-golden-eyebrow">Paso 02</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#fff' }}>
                Datos del huésped y comprobante
              </h3>
            </div>
            <button
              type="button"
              style={{ background: 'none', border: 'none', color: 'var(--gold-primary)', fontSize: '0.75rem', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => setCurrentStep(1)}
            >
              ← Cambiar fechas
            </button>
          </div>

          <div className="form-row">
            <div className="form-cell">
              <label className="form-label" htmlFor="nombre">Nombres y Apellidos *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Juan Pérez"
                className="form-input"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-cell">
              <label className="form-label" htmlFor="telefono">WhatsApp de Contacto *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ej: 987654321"
                className="form-input"
                value={formData.telefono}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]{9}"
                required
              />
            </div>
          </div>

          <div className="form-cell">
            <label className="form-label">Tipo de comprobante deseado *</label>
            <div className="receipt-toggle-grid">
              <button
                type="button"
                className={`btn-receipt-toggle ${formData.tipoComprobante === 'boleta' ? 'active' : ''}`}
                onClick={() => handleComprobanteChange('boleta')}
              >
                <span>📄</span> Boleta de venta (DNI)
              </button>
              <button
                type="button"
                className={`btn-receipt-toggle ${formData.tipoComprobante === 'factura' ? 'active' : ''}`}
                onClick={() => handleComprobanteChange('factura')}
              >
                <span>🏢</span> Factura (RUC)
              </button>
            </div>
          </div>

          {formData.tipoComprobante === 'boleta' ? (
            <div className="form-cell">
              <label className="form-label" htmlFor="dni">DNI / Carné de Extranjería *</label>
              <input
                type="text"
                id="dni"
                name="dni"
                maxLength={12}
                placeholder="Ej: 74839201"
                className="form-input"
                value={formData.dni}
                onChange={handleChange}
                inputMode="numeric"
                required
              />
            </div>
          ) : (
            <div className="form-row">
              <div className="form-cell">
                <label className="form-label" htmlFor="ruc">RUC (11 dígitos) *</label>
                <input
                type="text"
                  id="ruc"
                  name="ruc"
                  maxLength={11}
                  placeholder="Ej: 20601234567"
                  className="form-input"
                value={formData.ruc}
                onChange={handleChange}
                inputMode="numeric"
                  required
                />
              </div>
              <div className="form-cell">
                <label className="form-label" htmlFor="razonSocial">Razón Social *</label>
                <input
                  type="text"
                  id="razonSocial"
                  name="razonSocial"
                  placeholder="Ej: Inversiones Turísticas S.A.C."
                  className="form-input"
                  value={formData.razonSocial}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <label className="terms-consent">
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={Boolean(formData.aceptaTerminos)}
              onChange={(event) => setFormData((prev) => ({ ...prev, aceptaTerminos: event.target.checked }))}
            />
            <span>He leído y acepto los <a href="#terminos">términos de reserva</a> y la política de privacidad.</span>
          </label>

          <button type="submit" className="btn-send-whatsapp">
            <span>📲</span> Solicitar Reserva en Luna Dorada (WhatsApp)
          </button>
        </form>
      )}
    </div>
  );
}
