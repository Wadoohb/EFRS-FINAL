import React, { useMemo, useState } from 'react';

const MENU = [
  { id: 'vino', category: 'Bebidas', name: 'Espumante Dorado', description: 'Botella fría de espumante brut con dos copas.', price: 75, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85' },
  { id: 'vino-tinto', category: 'Bebidas', name: 'Vino Tinto Reserva', description: 'Botella de vino tinto seleccionada para compartir.', price: 65, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85' },
  { id: 'cerveza', category: 'Bebidas', name: 'Cerveza selecta', description: 'Cerveza helada nacional o importada.', price: 16, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=85' },
  { id: 'gaseosa', category: 'Bebidas', name: 'Gaseosa o Agua', description: 'Bebida personal fría, con o sin gas.', price: 8, image: 'https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&w=800&q=85' },
  { id: 'mojito', category: 'Cócteles', name: 'Mojito Clásico', description: 'Ron, hierbabuena fresca, limón y soda.', price: 24, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85' },
  { id: 'pisco-sour', category: 'Cócteles', name: 'Pisco Sour', description: 'Pisco peruano, limón, jarabe y clara de huevo.', price: 26, image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=85' },
  { id: 'cuba-libre', category: 'Cócteles', name: 'Cuba Libre', description: 'Ron dorado, cola y limón fresco.', price: 23, image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=85' },
  { id: 'gin-tonic', category: 'Cócteles', name: 'Gin & Tonic', description: 'Gin premium, tónica y botánicos cítricos.', price: 28, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85' },
  { id: 'sin-alcohol', category: 'Cócteles', name: 'Golden Sunset', description: 'Cóctel sin alcohol de maracuyá y naranja.', price: 18, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85' },
  { id: 'tabla', category: 'Snacks', name: 'Tabla Dorada', description: 'Quesos, frutos secos, aceitunas y galletas saladas.', price: 48, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85' },
  { id: 'postre', category: 'Snacks', name: 'Dúo de Postres', description: 'Fresas, chocolate y mini postres artesanales.', price: 32, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85' },
  { id: 'alitas', category: 'Snacks', name: 'Alitas BBQ', description: 'Ocho alitas con salsa BBQ y papas crocantes.', price: 35, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=85' },
  { id: 'papas', category: 'Snacks', name: 'Papas Doradas', description: 'Papas fritas sazonadas con salsas de la casa.', price: 20, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85' },
  { id: 'pasta', category: 'Comida', name: 'Pasta al Pesto', description: 'Pasta fresca con parmesano y albahaca.', price: 42, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85' },
  { id: 'parrilla', category: 'Comida', name: 'Parrilla para Dos', description: 'Selección de carnes, papas doradas y ensalada.', price: 68, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85' },
  { id: 'hamburguesa', category: 'Comida', name: 'Hamburguesa Artesanal', description: 'Carne de res, queso, vegetales y papas fritas.', price: 36, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85' },
  { id: 'pizza', category: 'Comida', name: 'Pizza Personal', description: 'Masa artesanal, mozzarella e ingredientes a elección.', price: 34, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85' }
];

export default function MenuServicioHabitacion() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [order, setOrder] = useState([]);
  const [roomNumber, setRoomNumber] = useState('');
  const [roomError, setRoomError] = useState('');
  const visibleItems = activeCategory === 'Todos' ? MENU : MENU.filter((item) => item.category === activeCategory);
  const total = useMemo(() => order.reduce((sum, item) => sum + item.price, 0), [order]);

  const sendOrder = () => {
    if (!roomNumber.trim()) {
      setRoomError('Por favor, escribe tu número de habitación para continuar.');
      return;
    }
    setRoomError('');
    const details = order.map((item) => `• ${item.name} — S/ ${item.price}`).join('\n');
    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(`Hola, soy huésped de Luna Dorada Suites.\nHabitación: ${roomNumber.trim()}\n\nDeseo solicitar el siguiente pedido del servicio a la habitación:\n${details}\n\nTotal estimado: S/ ${total.toFixed(2)}\n\nAgradeceré confirmar disponibilidad y tiempo de entrega.`)}`, '_blank');
  };

  return (
    <section id="room-service" className="room-service-section">
      <div className="section-title-wrap">
        <span className="section-golden-eyebrow">Servicio a la habitación 24/7</span>
        <h2 className="section-main-title">Sabores para tu momento especial</h2>
        <p className="section-description">Bebidas, tragos, snacks y platos preparados al momento para complementar tu estadía.</p>
      </div>
      <div className="guest-only-notice"><span>✦</span><div><strong>Servicio exclusivo para huéspedes</strong><p>El servicio a la habitación se entrega únicamente dentro de Luna Dorada Suites. Indica tu número de habitación al confirmar el pedido.</p></div></div>
      <div className="menu-category-tabs">
        {['Todos', 'Bebidas', 'Cócteles', 'Snacks', 'Comida'].map((category) => <button key={category} type="button" className={category === activeCategory ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}
      </div>
      <div className="menu-grid">
        {visibleItems.map((item) => (
          <article className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="menu-card-content">
              <span>{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-card-bottom"><strong>S/ {item.price.toFixed(2)}</strong><button type="button" onClick={() => setOrder((current) => [...current, item])}>Agregar +</button></div>
            </div>
          </article>
        ))}
      </div>
      {order.length > 0 && <div className="order-bar"><span><b>{order.length}</b> producto{order.length > 1 ? 's' : ''} agregado{order.length > 1 ? 's' : ''} <strong>S/ {total.toFixed(2)}</strong></span><div><input aria-label="Número de habitación" aria-invalid={Boolean(roomError)} value={roomNumber} onChange={(event) => { setRoomNumber(event.target.value); setRoomError(''); }} placeholder="N.º de habitación" />{roomError && <small role="alert">{roomError}</small>}</div><button type="button" onClick={sendOrder}>Solicitar por WhatsApp</button></div>}
    </section>
  );
}
