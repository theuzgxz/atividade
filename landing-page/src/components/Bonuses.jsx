const bonuses = [
  {
    bg: 'bg-mint',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BONO',
    emoji: '📋',
    title: 'Respuestas completas',
    desc: 'Todas las respuestas organizadas para corregir rápido y con seguridad.',
    value: '$2.90',
    premium: false,
  },
  {
    bg: 'bg-lilac',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BONO',
    emoji: '📊',
    title: 'Ficha de seguimiento de lectura',
    desc: 'Registro simple del progreso de cada alumno en comprensión y escritura.',
    value: '$1.90',
    premium: false,
  },
  {
    bg: 'bg-honey',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BONO',
    emoji: '📅',
    title: 'Secuencia didáctica sugerida',
    desc: 'Cómo usar las 267+ actividades a lo largo del año sin perder el hilo pedagógico.',
    value: '$3.90',
    premium: false,
  },
  {
    bg: 'bg-sky',
    badgeBg: 'bg-[#7C3AED] text-white',
    badge: 'Exclusivo Premium',
    emoji: '📖',
    title: 'Actividades de Lectura Fluida',
    desc: 'Secuencias de lectura progresiva para desarrollar fluidez, entonación y comprensión oral — de 1ro a 5to grado.',
    value: '$4.90',
    premium: true,
  },
  {
    bg: 'bg-peach',
    badgeBg: 'bg-[#7C3AED] text-white',
    badge: 'Exclusivo Premium',
    emoji: '📝',
    title: 'Géneros Textuales — 1ro a 5to grado',
    desc: 'Actividades completas por género: fábula, poema, noticia, carta, cuento, cómic y mucho más. Alineado a primaria.',
    value: '$5.90',
    premium: true,
  },
];

export default function Bonuses() {
  return (
    <section className="py-12 px-6 bg-secondary/10 bg-confetti">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center text-foreground mb-8">
          Quien compra hoy se lleva el doble 🎁
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className={`${b.bg} rounded-2xl p-5 text-center relative overflow-hidden border-2 ${b.premium ? 'border-[#7C3AED]/40' : 'border-transparent'} hover:border-primary/30 transition-colors`}
            >
              <span className={`absolute top-2.5 right-2.5 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm ${b.badgeBg}`}>
                {b.badge}
              </span>
              <span className="text-4xl block mb-2 mt-4">{b.emoji}</span>
              <h3 className="font-extrabold text-base text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 font-medium">{b.desc}</p>
              <p className="text-sm font-bold text-primary line-through">Valor: {b.value}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-extrabold text-lg mt-8">
          Todo esto incluido en tu Mega Pack hoy ✨
        </p>
      </div>
    </section>
  );
}
