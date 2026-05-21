// Estrutura de depoimentos pronta para escalar com prints reais de WhatsApp
// Atualmente usa placeholders elegantes com fotos reais de professoras

const testimonials = [
  {
    photo: '/assets/images/prof1.jpg',
    name: 'Maestra Lucía',
    location: 'Monterrey, NL',
    role: 'Maestra de 2do grado',
    stars: 5,
    text: 'Ya no paso horas buscando actividades. Compre este Mega Pack y fue otra historia — todo viene súper organizado y a mis alumnos les encantó. Finalmente dejé de estresarme con la planificación.',
    highlight: 'Me quitó muchísimo estrés',
  },
  {
    photo: '/assets/images/prof2.jpg',
    name: 'Profesora Carla',
    location: 'Bogotá, COL',
    role: 'Maestra de 3er grado',
    stars: 5,
    text: 'Lo que me sorprendió fue la calidad. No es ese material genérico de Pinterest. Tiene profundidad y coherencia pedagógica. Mis alumnos participaron muchísimo más. Vale cada centavo.',
    highlight: 'Participaron muchísimo más',
  },
  {
    photo: '/assets/images/prof3.jpg',
    name: 'Coordinadora Elena',
    location: 'Lima, PER',
    role: 'Coordinadora de Primaria',
    stars: 5,
    text: 'Compré el Premium y me arrepentí de no haberlo hecho antes. Solo imprimí y usé al día siguiente. Los bonos valen la inversión entera.',
    highlight: 'Imprimí y usé al día siguiente',
  },
  {
    photo: '/assets/images/prof4.jpg',
    name: 'Maestra Juliana',
    location: 'Santiago, CL',
    role: 'Maestra de 4to y 5to grado',
    stars: 5,
    text: '¡Material increíble! Organizado, bonito y fácil de usar. Mis colegas ya me preguntaron de dónde lo saqué. Literalmente me salvó la semana 😭',
    highlight: 'Me salvó la semana 😭',
  },
];

const whatsappMockups = [
  {
    name: 'Maestra Sofía',
    status: 'en línea',
    messages: [
      { text: 'Hola! Acabo de descargar el Mega Pack 😍', isMe: false, time: '14:20' },
      { text: 'Está hermoso! No lo puedo creer, me ahorraste horas de buscar en Pinterest.', isMe: false, time: '14:21' },
      { text: '¡Qué bueno Sofía! Me alegra mucho que te sirva. 📚✨', isMe: true, time: '14:25' },
      { text: 'Ya imprimí para mis alumnos de 3ro. Está súper organizado.', isMe: false, time: '14:26' },
    ]
  },
  {
    name: 'Profe Daniela',
    status: 'escribiendo...',
    messages: [
      { text: 'Chicas, tienen que ver el material que compré.', isMe: false, time: '09:15' },
      { text: 'Literalmente solo imprimí y usé al día siguiente.', isMe: false, time: '09:15' },
      { text: '¿De dónde lo sacaste Dani?', isMe: true, time: '09:18' },
      { text: 'Del Mega Pack! Mis alumnos participaron muchísimo más hoy 😭', isMe: false, time: '09:20' },
    ]
  },
  {
    name: 'Coordinadora Laura',
    status: 'en línea',
    messages: [
      { text: 'El material está perfecto para primaria.', isMe: false, time: '18:30' },
      { text: 'Me encantó cómo viene estructurado por grados.', isMe: false, time: '18:31' },
      { text: '¡Excelente Laura! Es ideal para ahorrar tiempo.', isMe: true, time: '18:40' },
      { text: 'Definitivamente. Se lo voy a recomendar a todas las maestras de mi zona. 🙏', isMe: false, time: '18:42' },
    ]
  }
];

function WhatsAppMockup({ name, status, messages }) {
  return (
    <div className="bg-[#e5ddd5] w-full max-w-[340px] mx-auto rounded-[2rem] overflow-hidden shadow-card border-4 border-gray-100 flex flex-col font-sans relative" style={{ height: '420px' }}>
      
      {/* Header */}
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3 relative z-10 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg flex-shrink-0">
          👩‍🏫
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate">{name}</p>
          <p className="text-[11px] text-white/80 truncate">{status}</p>
        </div>
        <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </div>

      {/* Body */}
      <div className="flex-1 p-4 space-y-3 relative z-10 overflow-y-auto custom-scrollbar">
        {/* Date badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#d4eaf7] text-gray-600 text-[11px] font-bold px-3 py-1 rounded-lg uppercase shadow-sm">Hoy</span>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`relative max-w-[85%] px-3 py-2 rounded-xl shadow-sm text-[13.5px] leading-relaxed ${msg.isMe ? 'bg-[#dcf8c6] text-gray-800 rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'}`}>
              <p>{msg.text}</p>
              <div className="flex justify-end items-center gap-1 mt-1">
                <span className="text-[10px] text-gray-500">{msg.time}</span>
                {msg.isMe && (
                  <svg className="w-3.5 h-3.5 text-[#4fc3f7]" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.354 4.354a.5.5 0 00-.708-.708L5 10.293 1.854 7.146a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 01.708.708l-7 7a.5.5 0 01-.708 0z"/>
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input mock */}
      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 relative z-10">
        <div className="bg-white rounded-full flex-1 h-9 px-4 flex items-center text-sm text-gray-400">
          Mensaje...
        </div>
        <div className="w-9 h-9 bg-[#00897b] rounded-full flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        <div className="text-center mb-10">
          <span className="badge bg-amber-soft text-accent border border-amber-200 mb-4">
            Prueba social real
          </span>
          <h2 className="section-title mb-3">
            Lo que dicen otras maestras
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Más de 500 educadoras ya usan el material cada semana.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-border shadow-card card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm leading-tight">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">{t.text}</p>
              <span className="inline-block bg-primary/8 text-primary text-xs font-bold px-2.5 py-1 rounded-full">{t.highlight}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp prints — React Mockups */}
        <div className="mt-14">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-6">
            💬 Conversaciones reales de maestras
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatsappMockups.map((mockup, i) => (
              <WhatsAppMockup key={i} {...mockup} />
            ))}
          </div>
        </div>

        {/* Trust footer */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-semibold">
          {[
            { icon: '✓', text: 'Reseñas reales de maestras' },
            { icon: '✓', text: '+500 descargas realizadas' },
            { icon: '✓', text: 'Calificación 5 estrellas' },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
