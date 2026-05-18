import { useState } from 'react';

const faqs = [
  {
    question: 'É alinhado à BNCC?',
    shortAnswer: 'SIM.',
    answer: 'Todo o material foi desenvolvido com base nas competências e habilidades da BNCC para o Ensino Fundamental I. Você aplica com segurança e confiança pedagógica.',
    icon: '📌',
  },
  {
    question: 'Posso imprimir quantas vezes quiser?',
    shortAnswer: 'SIM.',
    answer: 'O PDF é de uso pessoal ilimitado. Você pode imprimir para sua turma quantas vezes precisar ao longo do ano letivo.',
    icon: '🖨️',
  },
  {
    question: 'Serve para mais de uma turma?',
    shortAnswer: 'SIM.',
    answer: 'O kit cobre do 1º ao 5º ano — perfeito para professoras que atendem mais de uma turma ou querem ter material completo para todo o ciclo.',
    icon: '👩‍🏫',
  },
  {
    question: 'Recebo na hora?',
    shortAnswer: 'SIM.',
    answer: 'Após a confirmação do pagamento, o link de download é liberado automaticamente. Em menos de 2 minutos você já tem acesso a tudo.',
    icon: '⚡',
  },
  {
    question: 'É físico ou digital?',
    shortAnswer: 'Digital — acesso imediato em PDF.',
    answer: 'O material é 100% digital em formato PDF. Você baixa, imprime e usa. Sem frete, sem espera — acesso imediato de qualquer lugar.',
    icon: '📱',
  },
  {
    question: 'Funciona em impressora preto e branco?',
    shortAnswer: 'SIM.',
    answer: 'O material foi preparado para funcionar em qualquer impressora doméstica — colorida ou preto e branco. O resultado fica excelente nos dois casos.',
    icon: '🖤',
  },
];

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen ? 'border-primary/30 shadow-card' : 'border-border'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xl flex-shrink-0">{faq.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <span className="font-display font-semibold text-foreground text-sm leading-snug">
              {faq.question}
            </span>
            {!isOpen && (
              <span className="font-display font-bold text-secondary text-sm flex-shrink-0">
                {faq.shortAnswer}
              </span>
            )}
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-0 animate-fade-in">
          <div className="border-t border-border pt-3 pl-9">
            <p className="font-display font-bold text-secondary text-sm mb-1.5">
              {faq.shortAnswer}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <span className="badge bg-sage-soft text-secondary border border-green-200 mb-4">
              Dúvidas frequentes
            </span>
            <h2 className="section-title mb-3">
              Talvez você esteja pensando…
            </h2>
            <p className="section-subtitle max-w-md mx-auto">
              Respostas rápidas para as dúvidas mais comuns antes de comprar.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Ainda tem dúvidas?{' '}
              <a
                href="mailto:suporte@kitaulapronta.com.br"
                className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
              >
                Fale conosco
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
