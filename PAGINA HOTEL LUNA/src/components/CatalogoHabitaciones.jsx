import React from 'react';

export const ECLIPSE_ROOMS = [
  {
    id: 'suite-basica',
    categoria: 'Suite Básica',
    tipoCamaDefault: '2 Plazas',
    precioNoche: 80,
    thumbClass: 'room-thumb-basica',
    imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85',
    icono: '🌙',
    titulo: 'Suite Básica',
    badge: null,
    descripcion: 'El espacio ideal para escapar de la rutina con discreción, confort y un ambiente cálido que hará de tu estancia un momento inolvidable.',
    capacidad: '2 Personas',
    amenidades: [
      'Cama confortable de 2 plazas',
      'Iluminación tenue LED regulable',
      'Smart TV de 43" con streaming y Wi-Fi',
      'Baño privado con ducha española y agua caliente'
    ]
  },
  {
    id: 'suite-junior',
    categoria: 'Suite Junior',
    tipoCamaDefault: '2 plazas Queen',
    precioNoche: 120,
    thumbClass: 'room-thumb-junior',
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85',
    icono: '✨',
    titulo: 'Suite Junior',
    badge: 'Preferida',
    descripcion: 'Eleva tus momentos a otro nivel combinando sofisticación, diseño moderno, sillón tántrico y frigobar para una velada perfecta.',
    capacidad: '2 Personas',
    amenidades: [
      'Cama tamaño Queen con lencería de lujo',
      'Sillón del amor / curva ergonómica',
      'Smart TV 50" 4K y frigobar surtido',
      'Sistema de sonido Bluetooth integrado'
    ]
  },
  {
    id: 'suite-roja',
    categoria: 'Suite Roja',
    tipoCamaDefault: 'Tamaño Queen',
    precioNoche: 160,
    thumbClass: 'room-thumb-roja',
    imagen: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
    icono: '🔥',
    titulo: 'Suite Roja',
    badge: 'Exclusiva',
    isRuby: true,
    descripcion: 'Déjate llevar por un ambiente intenso y provocador con iluminación roja, tubo de pole dance y detalles para despertar los sentidos.',
    capacidad: '2 Personas',
    amenidades: [
      'Iluminación neón roja envolvente',
      'Tubo profesional para baile y espejos',
      'Sillón curvo y cama tamaño Queen',
      'Aire acondicionado frío/calor climatizado'
    ]
  },
  {
    id: 'suite-jacuzzi',
    categoria: 'Suite Jacuzzi',
    tipoCamaDefault: 'Cama tamaño Queen de lujo',
    precioNoche: 190,
    thumbClass: 'room-thumb-jacuzzi',
    imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
    icono: '🛁',
    titulo: 'Suite Jacuzzi',
    badge: 'Recomendada',
    descripcion: 'Sumérgete en la relajación total con una tina de hidromasaje con hidrojets y cromoterapia para vivir una experiencia incomparable.',
    capacidad: '2 Personas',
    amenidades: [
      'Jacuzzi privado con hidromasaje y burbujas',
      'Kit de sales minerales y espuma de baño',
      'Cama tamaño Queen y Smart TV de 55"',
      'Servicio a la habitación las 24 horas'
    ]
  },
  {
    id: 'suite-presidencial',
    categoria: 'Suite Presidencial',
    tipoCamaDefault: 'Cama tamaño King premium',
    precioNoche: 240,
    thumbClass: 'room-thumb-presidencial',
    imagen: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
    icono: '👑',
    titulo: 'Suite Presidencial',
    badge: 'VIP',
    descripcion: 'Disfruta de una estancia de alto nivel donde el lujo, la amplitud de dos ambientes y los detalles premium te brindan una velada inolvidable.',
    capacidad: '2 Personas',
    amenidades: [
      'Cama tamaño King de máxima categoría',
      'Jacuzzi XL con cascada de agua y luces LED',
      'Sala privada con frigobar de cortesía',
      'Batas de satín y zapatillas de descanso'
    ]
  },
  {
    id: 'sauna-jacuzzi',
    categoria: 'Sauna con Jacuzzi',
    tipoCamaDefault: 'Cama tamaño King de lujo',
    precioNoche: 280,
    thumbClass: 'room-thumb-sauna',
    imagen: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
    icono: '🧖‍♀️',
    titulo: 'Sauna con Jacuzzi',
    badge: 'Suite principal',
    descripcion: 'Espacio creado para el descanso y placer absoluto: cámara de sauna a vapor seca/húmeda privada junto a un jacuzzi de última generación.',
    capacidad: '2 Personas',
    amenidades: [
      'Cámara de sauna privada con aromaterapia',
      'Jacuzzi con hidromasaje panorámico',
      'Cama tamaño King y ducha escocesa',
      'Bebida de cortesía de bienvenida'
    ]
  }
];

export default function CatalogoHabitaciones({ onSelectRoom }) {
  return (
    <section id="habitaciones">
      <div className="section-title-wrap">
        <span className="section-golden-eyebrow">Categorías Exclusivas</span>
        <h2 className="section-main-title">Nuestras Suites</h2>
        <p className="section-description">
          Privacidad, lujo y excelencia: todo en un solo lugar. Elige tu suite y resérvala con confirmación directa a recepción.
        </p>
      </div>

      <div className="rooms-grid">
        {ECLIPSE_ROOMS.map((room) => (
          <article
            key={room.id}
            className={`room-card ${room.badge ? 'highlight' : ''}`}
          >
            {room.badge && (
              <span className={room.isRuby ? 'room-badge-ruby' : 'room-badge-gold'}>
                {room.badge}
              </span>
            )}

            <div className={`room-thumbnail ${room.thumbClass}`}>
              <img src={room.imagen} alt={`Interior de ${room.titulo}`} loading="lazy" />
              <div className="room-thumb-icon">{room.icono}</div>
              <div className="room-overlay-info">{room.capacidad}</div>
            </div>

            <div className="room-content">
              <div className="room-header-row">
                <h3>{room.titulo}</h3>
                <div className="room-price-box">
                  <span className="room-price-val">S/ {room.precioNoche}</span>
                  <span className="room-price-period">/ noche</span>
                </div>
              </div>

              <p className="room-desc">{room.descripcion}</p>

              <ul className="room-services-list">
                {room.amenidades.map((item, idx) => (
                  <li key={idx}>
                    <span>✦</span> {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn-select-room ${room.isRuby ? 'btn-ruby' : ''}`}
                onClick={() => onSelectRoom(room)}
              >
                Reservar {room.titulo}
              </button>
              <a
                className="btn-room-whatsapp"
                href={`https://wa.me/51987654321?text=${encodeURIComponent(`Hola, deseo consultar disponibilidad para ${room.titulo}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Consultar disponibilidad por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
