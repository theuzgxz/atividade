// WhatIsInside — layout estilo lista elegante (visual original melhorado com novo design system)

const kits = [
  {
    emoji: '📘',
    bgColor: 'bg-sky-soft',
    borderColor: 'border-sky-200',
    accentColor: 'text-sky-700',
    dotColor: 'bg-sky-500',
    title: 'Kit 1er Grado',
    desc: 'Textos cortos con preguntas de comprensión y propuestas de producción para quienes empiezan a leer y escribir con seguridad.',
  },
  {
    emoji: '📗',
    bgColor: 'bg-sage-soft',
    borderColor: 'border-green-200',
    accentColor: 'text-green-700',
    dotColor: 'bg-green-500',
    title: 'Kit 2do Grado',
    desc: 'Actividades de comprensión más elaboradas y escritura creativa con apoyo estructural para grupos en desarrollo.',
  },
  {
    emoji: '📙',
    bgColor: 'bg-amber-soft',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-700',
    dotColor: 'bg-amber-500',
    title: 'Kit 3er Grado',
    desc: 'Comprensión profunda, producción de textos y desafíos de escritura para consolidar la lectura.',
  },
  {
    emoji: '📕',
    bgColor: 'bg-rose-soft',
    borderColor: 'border-rose-200',
    accentColor: 'text-rose-700',
    dotColor: 'bg-rose-500',
    title: 'Kit 4to Grado',
    desc: 'Textos más largos, inferencia y producción textual estructurada (inicio, nudo y desenlace) — fomentando autonomía.',
  },
  {
    emoji: '📒',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-700',
    dotColor: 'bg-purple-500',
    title: 'Kit 5to Grado',
    desc: 'Diversidad de géneros textuales, comprensión crítica y producción propia — la preparación ideal para secundaria.',
  },
];

export default function WhatIsInside() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            Mira todo lo que ya viene listo en el Mega Pack
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            5 kits completos — uno para cada grado de primaria — todo en una sola descarga.
          </p>
        </div>

        {/* Lista de kits */}
        <div className="max-w-2xl mx-auto space-y-3">
          {kits.map((kit, i) => (
            <div
              key={i}
              className={`${kit.bgColor} ${kit.borderColor} border rounded-2xl p-4 flex items-center gap-4 card-hover`}
            >
              {/* Emoji grande */}
              <span className="text-4xl flex-shrink-0">{kit.emoji}</span>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <p className={`font-display font-bold text-base ${kit.accentColor} leading-snug mb-0.5`}>
                  {kit.title}
                </p>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  {kit.desc}
                </p>
              </div>

              {/* Indicador lateral */}
              <div className={`w-2 h-10 ${kit.dotColor} rounded-full flex-shrink-0 opacity-60`} />
            </div>
          ))}
        </div>

        {/* Banner de valor */}
        <div className="mt-8 bg-foreground text-white rounded-2xl px-6 py-5 text-center max-w-xl mx-auto">
          <p className="font-display font-bold text-lg mb-1">
            267+ actividades listas para imprimir + bonos — todo por $4.90
          </p>
          <p className="text-white/70 text-sm font-medium">
            Acceso inmediato tras el pago. PDF liberado automáticamente.
          </p>
        </div>

      </div>
    </section>
  );
}
