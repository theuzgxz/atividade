const bonuses = [
  {
    bg: 'bg-mint',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BÔNUS',
    emoji: '📋',
    title: 'Gabarito completo',
    desc: 'Todas as respostas organizadas para corrigir rápido e com segurança.',
    value: 'R$9,90',
    premium: false,
  },
  {
    bg: 'bg-lilac',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BÔNUS',
    emoji: '📊',
    title: 'Ficha de acompanhamento de leitura',
    desc: 'Registro simples do progresso de cada aluno em interpretação e escrita.',
    value: 'R$7,90',
    premium: false,
  },
  {
    bg: 'bg-honey',
    badgeBg: 'bg-primary text-primary-foreground',
    badge: 'BÔNUS',
    emoji: '📅',
    title: 'Sequência didática sugerida',
    desc: 'Como usar as 267+ atividades ao longo do ano sem perder o fio pedagógico.',
    value: 'R$12,90',
    premium: false,
  },
  {
    bg: 'bg-sky',
    badgeBg: 'bg-[#7C3AED] text-white',
    badge: 'Exclusivo Premium',
    emoji: '📖',
    title: 'Atividades de Leitura Fluente',
    desc: 'Sequências de leitura progressiva para desenvolver fluência, entonação e compreensão oral — do 1º ao 5º ano.',
    value: 'R$14,90',
    premium: true,
  },
  {
    bg: 'bg-peach',
    badgeBg: 'bg-[#7C3AED] text-white',
    badge: 'Exclusivo Premium',
    emoji: '📝',
    title: 'Gêneros Textuais — 1º ao 5º ano',
    desc: 'Atividades completas por gênero: fábula, poema, notícia, carta, conto, tirinha, receita e muito mais. Alinhado à BNCC.',
    value: 'R$19,90',
    premium: true,
  },
];

export default function Bonuses() {
  return (
    <section className="py-12 px-6 bg-secondary/10 bg-confetti">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center text-foreground mb-8">
          Quem compra hoje leva o dobro 🎁
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
          Tudo isso incluso no seu kit hoje ✨
        </p>
      </div>
    </section>
  );
}
