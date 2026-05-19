import { CHECKOUT_LINKS, IMAGES } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';
import { CheckIcon, LockIcon } from './Icons';

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
  '✨ BÔNUS: Atividades de Leitura Fluente (1º ao 5º ano)',
  '✨ BÔNUS: Gêneros Textuais completos — fábula, poema, notícia, carta, conto, tirinha e mais',
  'Alinhado 100% à BNCC',
  'PDF pronto para imprimir',
  'Acesso vitalício',
];

export default function Pricing() {
  return (
    <section id="kits" className="py-12 px-6 bg-mint">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-2">
          Escolha seu kit 🎒
        </h2>
        <p className="text-center text-muted-foreground font-medium mb-10 max-w-lg mx-auto">
          Material pronto, organizado e alinhado à BNCC — do 1º ao 5º ano. Acesso imediato após o pagamento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Kit Essencial */}
          <div className="bg-white rounded-3xl shadow-card border-2 border-primary/20 p-7 flex flex-col text-center">
            <div className="mb-4">
              <span className="badge bg-primary/10 text-primary border border-primary/20 mb-3">
                💸 MAIS ECONÔMICO
              </span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">Kit Essencial</h3>
              <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                267+ atividades · 1º ao 5º ano
              </p>
            </div>

            <div className="mb-5">
              <p className="text-muted-foreground line-through text-base font-medium">De R$97,00</p>
              <p className="font-display font-extrabold text-5xl text-primary leading-none mt-1">R$17,90</p>
              <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                Você economiza R$79,10
              </span>
            </div>

            <ul className="text-left space-y-2.5 mb-7 flex-1">
              {essentialItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon size={18} className="text-secondary flex-shrink-0 mt-0.5" />
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
              className="btn-cta btn-cta-pulse w-full text-base py-4 mb-3"
            >
              📚 Quero o Kit Essencial
            </a>
            <p className="text-xs text-muted-foreground font-medium flex items-center justify-center gap-1">
              <LockIcon size={12} className="text-muted-foreground" /> Compra segura · Acesso imediato · Garantia de 7 dias
            </p>
          </div>

          {/* Kit Premium */}
          <div className="bg-white rounded-3xl shadow-card border-2 border-secondary/30 p-7 flex flex-col text-center">
            <div className="mb-4">
              <span className="badge bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                ⭐ MAIS COMPLETO
              </span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">Kit Premium</h3>
              <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
                267+ atividades + materiais exclusivos
              </p>
            </div>

            <div className="mb-5">
              <p className="text-muted-foreground line-through text-base font-medium">De R$157,00</p>
              <p className="font-display font-extrabold text-5xl text-secondary leading-none mt-1">R$26,90</p>
              <span className="inline-block mt-2 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Só R$9 a mais que o Essencial
              </span>
            </div>

            <ul className="text-left space-y-2.5 mb-7 flex-1">
              {premiumItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon size={18} className="text-secondary flex-shrink-0 mt-0.5" />
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
              className="btn-secondary w-full text-base py-4 mb-3 rounded-full"
            >
              🎯 Quero o Kit Premium
            </a>
            <p className="text-xs text-muted-foreground font-medium flex items-center justify-center gap-1">
              <LockIcon size={12} className="text-muted-foreground" /> Compra segura · Acesso imediato · Garantia de 7 dias
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
