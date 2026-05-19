import { CHECKOUT_LINKS } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';
import { SparklesIcon } from './Icons';

const bullets = [
  '267+ atividades prontas para imprimir',
  'Do 1º ao 5º ano — interpretação e produção',
  'Alinhado à BNCC',
  'Economize horas de planejamento toda semana',
  'Alunos mais engajados, aulas que fluem',
];

export default function Hero() {
  return (
    <section className="bg-peach bg-confetti py-12 sm:py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Coluna de Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-5 border border-primary/20">
              <SparklesIcon size={14} />
              Material pedagógico para professoras
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
              267+ Atividades de{' '}
              <span className="text-primary">Interpretação e Produção de Texto</span>{' '}
              do 1º ao 5º Ano
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Material completo, pronto para imprimir e aplicar. Economize horas de planejamento com atividades organizadas por série, alinhadas à BNCC e feitas para engajar seus alunos.
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-8 inline-block text-left">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-semibold text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>

            {/* Preço + CTA */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground line-through text-sm font-medium">De R$97,00</span>
                <span className="font-display font-bold text-3xl text-primary">por R$17,90</span>
              </div>

              <a
                id="hero-cta-btn"
                href={buildCheckoutUrl(CHECKOUT_LINKS.essencial)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('InitiateCheckout', {
                  value: 17.90,
                  currency: 'BRL',
                  content_name: 'Kit Essencial — Hero',
                })}
                className="btn-cta btn-cta-pulse w-full sm:w-auto text-base px-8 py-4"
              >
                📚 QUERO MINHAS ATIVIDADES PRONTAS
              </a>

              <p className="text-xs text-muted-foreground font-medium">
                ✓ Acesso imediato &nbsp;·&nbsp; ✓ PDF pronto para imprimir &nbsp;·&nbsp; ✓ Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md group">
              {/* Glow */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

              {/* Frame */}
              <div className="relative rounded-3xl shadow-2xl ring-4 ring-white bg-white p-3">
                <div className="rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src="/assets/images/professora.png"
                    alt="Professora com o material de atividades de interpretação e produção de texto"
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="eager"
                    fetchPriority="high"
                    onError={(e) => {
                      e.target.src = '/assets/images/resolvendo.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-card border border-border px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                <span className="text-base">⭐</span>
                <span className="font-display font-bold text-foreground text-sm">+500 professoras já usam</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
