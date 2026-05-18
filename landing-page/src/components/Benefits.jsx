const solutionBenefits = [
  { icon: '⏱️', text: 'Economize horas de planejamento toda semana' },
  { icon: '📂', text: 'Material organizado por série — do 1º ao 5º ano' },
  { icon: '📌', text: '100% alinhado à BNCC — use com segurança' },
  { icon: '📖', text: 'Textos que prendem a atenção e desenvolvem leitura' },
  { icon: '✍️', text: 'Interpretação e produção textual integradas' },
  { icon: '🖨️', text: 'PDF pronto — imprime e aplica sem adaptação' },
];

export default function Benefits() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="badge bg-rose-soft text-primary border border-primary/20 mb-4">
              A solução completa
            </span>
            <h2 className="section-title mb-3">
              Foi por isso que criamos o{' '}
              <span className="text-gradient-primary">Kit Aula Pronta Português™</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Um acervo completo com 267+ atividades de interpretação e produção textual, organizado do 1º ao 5º ano para você simplesmente imprimir e aplicar.
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
