const solutionBenefits = [
  { icon: '⏱️', text: 'Ahorra horas de planificación cada semana' },
  { icon: '📂', text: 'Material organizado por grado — de 1ro a 5to' },
  { icon: '✅', text: 'Alineado al currículo — úsalo con confianza' },
  { icon: '📖', text: 'Textos que captan la atención y desarrollan lectura' },
  { icon: '✍️', text: 'Comprensión y producción textual integradas' },
  { icon: '🖨️', text: 'PDF listo — imprime y aplica sin adaptar nada' },
];

export default function Benefits() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="badge bg-rose-soft text-primary border border-primary/20 mb-4">
              La solución completa
            </span>
            <h2 className="section-title mb-3">
              Por eso creamos el{' '}
              <span className="text-gradient-primary">Mega Pack Imprimible™</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Un acervo completo con 267+ actividades de comprensión y producción textual, organizado de 1ro a 5to grado para que simplemente imprimas y apliques.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solutionBenefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-border shadow-card"
              >
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className="text-foreground font-semibold text-sm">{b.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
