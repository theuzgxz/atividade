const pains = [
  {
    icon: '🔍',
    title: 'Horas buscando textos que no llegan a ningún lado',
    desc: 'Abres Google, Pinterest, Facebook — y al final del día aún no tienes nada con calidad pedagógica real.',
  },
  {
    icon: '😶',
    title: 'Actividades genéricas que los alumnos hacen en automático',
    desc: 'Material sin progresión. Los niños copian el texto, entregan la hoja y no desarrollan comprensión lectora de verdad.',
  },
  {
    icon: '🗓️',
    title: 'Planificación construida desde cero cada semana',
    desc: 'Domingo por la noche intentando armar lo que vas a aplicar el lunes. Esa es energía que necesitabas para enseñar.',
  },
  {
    icon: '📋',
    title: 'Material no alineado al currículo — y lo sientes al aplicarlo',
    desc: 'Bonito por fuera, pero sin base curricular. Difícil de justificar pedagógicamente ante directores y padres.',
  },
  {
    icon: '😔',
    title: 'Alumnos desinteresados y clases que no fluyen',
    desc: 'Cuando el material no es bueno, el engajamiento cae. Empiezas a improvisar y la clase pierde el hilo.',
  },
  {
    icon: '😩',
    title: 'Improvisación constante por falta de material listo',
    desc: 'Improvisar no es creatividad — es desgaste. Y tú mereces tener material profesional en tus manos.',
  },
];

export default function Problems() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            ¿También sientes que planificar clases<br className="hidden sm:block" /> se ha vuelto un agotamiento?
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Si te identificas con alguno de los escenarios de abajo, estás en el lugar correcto.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-border card-hover"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  {p.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm leading-snug mb-1.5">
                    {p.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Microcopy emocional */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-primary/8 border border-primary/20 rounded-2xl px-6 py-4 max-w-xl">
            <p className="text-foreground font-semibold text-base leading-relaxed">
              Elegiste ser maestra para <strong>enseñar</strong> — no para pasar horas armando actividades.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
