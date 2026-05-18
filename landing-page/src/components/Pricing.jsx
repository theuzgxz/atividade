import { CHECKOUT_LINKS, IMAGES } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

const essentialItems = [
  '267+ atividades de interpretação e produção de texto',
  'Kits do 1º ao 5º ano — tudo no mesmo download',
  'PDF pronto para imprimir — colorido ou P&B',
  'Gabarito completo incluso',
  'Ficha de acompanhamento de leitura',
  'Sequência didática sugerida',
  'Acesso vitalício — baixe quantas vezes quiser',
];

const premiumItems = [
  'Tudo do Kit Essencial',
  'Atividades de Leitura Fluente (1º ao 5º ano)',
  'Gêneros Textuais completos — fábula, poema, notícia, carta, conto, tirinha e mais',
  'Alinhado 100% à BNCC',
  'PDF editável — imprime quantas vezes quiser',
  'Acesso vitalício',
];

function CheckIcon({ purple }) {
  return (
    <span
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        purple ? 'bg-[#7C3AED] text-white' : 'bg-primary text-white'
      }`}
    >
      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>
    </span>
  );
}

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="kits" className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge bg-amber-soft text-amber-700 border border-amber-200 mb-4">
            Oferta especial
          </span>
          <h2 className="section-title mb-3">
            Tenha seu ano letivo praticamente pronto
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            267+ atividades prontas para imprimir — do 1º ao 5º ano — por um investimento que você recupera na primeira aula.
          </p>
        </div>

        {/* Cards — Premium à esquerda (destaque visual), Essencial à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 items-stretch max-w-4xl mx-auto">

          {/* ============================
              KIT PREMIUM — DESTAQUE VISUAL
              ============================ */}
          <div className="order-2 md:order-2 relative rounded-3xl p-8 bg-card shadow-2xl text-center border-4 border-[#7C3AED] md:scale-105 mt-6 md:mt-0 flex flex-col">

            {/* Badge topo */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[#7C3AED] text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full shadow-xl whitespace-nowrap border-2 border-white tracking-wide">
                ⭐ MAIS VENDIDO
              </span>
            </div>

            {/* Mockup */}
            <img
              src={IMAGES.produtoMockup}
              alt="Kit Premium — Interpretação e Produção de Texto 1º ao 5º ano"
              className="w-64 sm:w-72 mx-auto mb-5 mt-3"
            />

            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-1">Kit Premium</h3>
            <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-1">
              267+ atividades + materiais exclusivos
            </p>
            <p className="text-muted-foreground line-through text-lg mb-0.5 font-bold">De R$157,00</p>
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-[#7C3AED] mb-2">R$26,90</p>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-extrabold px-3 py-1 rounded-full mb-5">
              Só R$9 a mais que o Essencial
            </span>

            <ul className="text-left space-y-2.5 mb-6 flex-1">
              {premiumItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon purple />
                  <span className="text-foreground font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              id="pricing-cta-premium"
              href={buildCheckoutUrl(CHECKOUT_LINKS.premium)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout', { value: 26.90, currency: 'BRL', content_name: 'Kit Premium' })}
              className="w-full inline-block bg-[#7C3AED] text-white font-extrabold text-lg px-6 py-4 rounded-full shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105 mb-3"
            >
              🎯 Quero o Kit Premium por R$26,90 →
            </a>
            <p className="text-xs text-muted-foreground font-semibold flex items-center justify-center gap-1">
              <LockIcon /> Compra segura · Download imediato · Garantia de 7 dias
            </p>
          </div>

          {/* ============================
              KIT ESSENCIAL — MAIS ESCOLHIDO
              ============================ */}
          <div className="order-1 md:order-1 relative rounded-3xl p-8 bg-card shadow-lg text-center border-2 border-border flex flex-col">

            {/* Badge topo */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-primary text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full shadow-lg whitespace-nowrap border-2 border-white tracking-wide">
                💸 MAIS ECONÔMICO
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-1 mt-6">Kit Essencial</h3>
            <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-1">
              267+ atividades · 1º ao 5º ano
            </p>
            <p className="text-muted-foreground line-through text-lg mb-0.5 font-bold">De R$97,00</p>
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-primary mb-1">R$17,90</p>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-extrabold px-3 py-1 rounded-full mb-5">
              Você economiza R$79,10 (-82%)
            </span>

            <ul className="text-left space-y-2.5 mb-6 flex-1">
              {essentialItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-foreground font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              id="pricing-cta-essencial"
              href={buildCheckoutUrl(CHECKOUT_LINKS.essencial)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout', { value: 17.90, currency: 'BRL', content_name: 'Kit Essencial' })}
              className="w-full inline-block bg-primary text-white font-extrabold text-lg px-6 py-4 rounded-full shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105 mb-3"
            >
              📚 Quero o Kit Essencial por R$17,90 →
            </a>
            <p className="text-xs text-muted-foreground font-semibold flex items-center justify-center gap-1">
              <LockIcon /> Compra segura · Download imediato · Garantia de 7 dias
            </p>
          </div>

        </div>

        {/* Urgência ética */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5 text-amber-800 text-sm font-semibold">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            ⚠️ Oferta promocional pode sair do ar sem aviso prévio.
          </div>
        </div>

      </div>
    </section>
  );
}
