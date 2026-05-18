// WhatIsInside — layout estilo lista elegante (visual original melhorado com novo design system)

const kits = [
  {
    emoji: '📘',
    bgColor: 'bg-sky-soft',
    borderColor: 'border-sky-200',
    accentColor: 'text-sky-700',
    dotColor: 'bg-sky-500',
    title: 'Kit 1º Ano',
    desc: 'Textos curtos com questões de interpretação e propostas de produção para quem está começando a ler e escrever com segurança.',
  },
  {
    emoji: '📗',
    bgColor: 'bg-sage-soft',
    borderColor: 'border-green-200',
    accentColor: 'text-green-700',
    dotColor: 'bg-green-500',
    title: 'Kit 2º Ano',
    desc: 'Atividades de compreensão mais elaboradas e escrita criativa com suporte estrutural para turmas em desenvolvimento.',
  },
  {
    emoji: '📙',
    bgColor: 'bg-amber-soft',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-700',
    dotColor: 'bg-amber-500',
    title: 'Kit 3º Ano',
    desc: 'Interpretação aprofundada, produção argumentativa e desafios de escrita para turmas em consolidação da leitura.',
  },
  {
    emoji: '📕',
    bgColor: 'bg-rose-soft',
    borderColor: 'border-rose-200',
    accentColor: 'text-rose-700',
    dotColor: 'bg-rose-500',
    title: 'Kit 4º Ano',
    desc: 'Textos mais longos, inferência e produção textual com começo, meio e fim estruturado — desenvolvendo autonomia.',
  },
  {
    emoji: '📓',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-700',
    dotColor: 'bg-purple-500',
    title: 'Kit 5º Ano',
    desc: 'Interpretação avançada, gêneros textuais variados e produção argumentativa para fechar o ciclo com excelência.',
  },
  {
    emoji: '🎨',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    accentColor: 'text-pink-700',
    dotColor: 'bg-pink-500',
    title: 'Visual colorido e engajante',
    desc: 'Ilustrações que motivam e prendem a atenção — pronto para imprimir e aplicar em qualquer impressora.',
  },
  {
    emoji: '📄',
    bgColor: 'bg-muted',
    borderColor: 'border-border',
    accentColor: 'text-foreground',
    dotColor: 'bg-secondary',
    title: 'PDF editável + bônus',
    desc: 'Gabarito completo, ficha de leitura e sequência didática sugerida — tudo incluso no mesmo download.',
  },
];

export default function WhatIsInside() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge bg-amber-soft text-amber-700 border border-amber-200 mb-4">
            O que está incluído
          </span>
          <h2 className="section-title mb-3">
            Veja tudo que já vem pronto no kit
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            5 kits completos — um para cada ano do Ensino Fundamental I — todos no mesmo download.
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
            267+ atividades + bônus — tudo por R$17,90
          </p>
          <p className="text-white/70 text-sm font-medium">
            Acesso imediato após pagamento. PDF liberado automaticamente.
          </p>
        </div>

      </div>
    </section>
  );
}
