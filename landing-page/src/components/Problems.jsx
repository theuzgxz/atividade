const pains = [
  {
    icon: '⏰',
    title: 'Horas procurando textos que não chegam a lugar nenhum',
    desc: 'Você abre o Google, o Pinterest, o Facebook — e no fim do dia ainda não tem nada com qualidade pedagógica.',
  },
  {
    icon: '📄',
    title: 'Atividades genéricas que os alunos fazem no automático',
    desc: 'Material sem progressão. Os alunos copiam trecho, entregam a folha e não desenvolvem leitura de verdade.',
  },
  {
    icon: '🗓️',
    title: 'Planejamento construído do zero toda semana',
    desc: 'Domingo à noite tentando montar o que vai aplicar na segunda. Isso é energia que você precisava para ensinar.',
  },
  {
    icon: '📋',
    title: 'Material fora da BNCC — e você sente isso na hora de aplicar',
    desc: 'Bonito por fora, mas sem alinhamento curricular. Difícil de justificar pedagogicamente.',
  },
  {
    icon: '😔',
    title: 'Alunos desinteressados e aulas que não fluem',
    desc: 'Quando o material não é bom, o engajamento cai. Você começa a improvisar e a aula perde o fio.',
  },
  {
    icon: '🔄',
    title: 'Improviso constante por falta de material pronto',
    desc: 'Improvisação não é criatividade — é desgaste. E você merece ter material profissional em mãos.',
  },
];

export default function Problems() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            Você também sente que planejar aula<br className="hidden sm:block" /> virou um desgaste?
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Se você se identificou com algum dos cenários abaixo, você está no lugar certo.
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
              Você virou professora para <strong>ensinar</strong> — não para passar horas montando atividade.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
