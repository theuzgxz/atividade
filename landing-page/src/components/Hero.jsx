import { CHECKOUT_LINKS, IMAGES } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

function CheckMark() {
  return (
    <svg className="w-5 h-5 text-secondary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const bullets = [
  'Pronto para imprimir',
  'Do 1º ao 5º ano',
  'Interpretação + Produção textual',
  'Economize horas de planejamento',
  'Alunos mais engajados',
];

export default function Hero() {
  return (
    <section className="bg-hero-pattern py-10 sm:py-14 px-5 overflow-hidden">
      <div className="section-wrapper">

        {/* Badge social proof */}
        <div className="text-center mb-6">
          <span className="badge bg-amber-soft text-amber-700 border border-amber-200">
            🔥 +500 professoras já usam este material
          </span>
        </div>

        {/* Grid: copy texto (prioridade) / imagem equilibrada */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* === COPY — coluna principal === */}
          <div className="order-1 text-center lg:text-left">

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] text-foreground mb-4">
              Pare de perder horas montando atividades —{' '}
              <span className="text-gradient-primary">tenha seu ano letivo praticamente pronto.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              267+ atividades de interpretação e produção de texto do 1º ao 5º ano, prontas para imprimir, alinhadas à BNCC e feitas para manter seus alunos engajados sem você perder horas planejando.
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-7 inline-block text-left">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckMark />
                  <span className="text-foreground font-semibold text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>

            {/* Ancoragem de preço */}
            <div className="mb-7">
              <div className="inline-block bg-white border border-border rounded-2xl px-6 py-4 shadow-card text-center lg:text-left">
                <p className="price-old mb-1">De R$97,00</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">por apenas</p>
                <p className="price-new">R$17,90</p>
                <span className="inline-block mt-2 text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Você economiza R$79,10
                </span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <a
                id="hero-cta-btn"
                href="#vsl-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#vsl-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-cta btn-cta-pulse w-full sm:w-auto text-lg px-8 py-4"
              >
                📚 QUERO MINHAS ATIVIDADES PRONTAS
              </a>

              {/* Trust markers */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Acesso imediato após pagamento
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  PDF liberado automaticamente
                </span>
              </div>
            </div>
          </div>

          {/* === IMAGEM — coluna secundária equilibrada === */}
          <div className="order-2 flex flex-col items-center justify-center gap-5">

            {/* Foto real — máx 480px para não dominar a tela */}
            <div className="relative w-full max-w-[480px] mx-auto group">
              {/* Glow sutil */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Frame premium — sem restrição de altura, adapta ao aspecto da foto */}
              <div className="relative rounded-3xl shadow-[0_28px_72px_-16px_hsla(222,25%,14%,0.24)] ring-[5px] ring-white bg-white p-3">
                <div className="rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src="/assets/images/resolvendo.jpg"
                    alt="Aluno resolvendo atividades do Kit Aula Pronta Português em sala de aula"
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.012]"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                {/* Badge dentro do frame, abaixo da imagem */}
                <div className="mt-2.5 flex items-center gap-2 px-1">
                  <span className="text-base">✅</span>
                  <p className="text-foreground font-semibold text-xs leading-snug">
                    Material aplicado em sala de aula por professoras reais
                  </p>
                </div>
              </div>
            </div>

            {/* Mini Social Proof — abaixo do frame */}
            <div className="bg-white rounded-2xl border border-border shadow-card px-5 py-3.5 w-full">
              <div className="flex items-center gap-3 mb-1.5">
                <StarRating />
                <span className="text-xs font-bold text-foreground">5.0 de 5</span>
                <span className="ml-auto text-xs text-muted-foreground font-medium">+500 professoras</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium leading-snug italic">
                "Professoras estão usando este material para ganhar tempo e melhorar suas aulas."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
