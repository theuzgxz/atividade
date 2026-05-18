// Seção de Comparação: Genérico vs Kit Aula Pronta
const genericItems = [
  'Atividades genéricas encontradas no Google',
  'Textos sem progressão pedagógica',
  'Material desorganizado e sem coerência',
  'Horas perdidas montando cada atividade',
  'Conteúdo fora da BNCC',
  'Qualidade pedagógica duvidosa',
];

const kitItems = [
  'Organizado por ano (1º ao 5º)',
  'Progressão pedagógica planejada',
  'Interpretação + produção textual integradas',
  'Material pronto — imprime e aplica',
  '100% alinhado à BNCC',
  'Aplicação imediata em sala de aula',
];

function XMark() {
  return (
    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CheckMarkGreen() {
  return (
    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge bg-amber-soft text-amber-700 border border-amber-200 mb-4">
            Por que este material é diferente
          </span>
          <h2 className="section-title mb-3">
            Não é só um PDF de atividades jogadas.
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Veja a diferença entre o que você encontra por aí e o que você recebe neste kit.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

          {/* ❌ Coluna Genérico */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-red-700 text-base">O que você acha por aí</h3>
            </div>
            <ul className="space-y-3">
              {genericItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XMark />
                  <span className="text-red-700/80 text-sm font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Coluna Kit */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-green-700 text-base">Kit Aula Pronta Português™</h3>
            </div>
            <ul className="space-y-3">
              {kitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckMarkGreen />
                  <span className="text-green-800 text-sm font-semibold leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA bottom */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm font-medium">
            Este kit foi criado por professoras, para professoras — com foco em praticidade e resultado pedagógico real.
          </p>
        </div>

      </div>
    </section>
  );
}
