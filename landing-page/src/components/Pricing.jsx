import { CHECKOUT_LINKS, IMAGES } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';
import { CheckIcon, LockIcon } from './Icons';

const essentialItems = [
  '267+ actividades de comprensión y producción de texto',
  'Kits de 1ro a 5to grado — todo en la misma descarga',
  'PDF listo para imprimir — a color o B&N',
  'Respuestas completas incluidas',
  'Ficha de seguimiento de lectura',
  'Secuencia didáctica sugerida',
  'Acceso vitalicio — descarga cuantas veces quieras',
];

const premiumItems = [
  'Todo lo del Kit Esencial',
  '✨ BONO: Actividades de Lectura Fluida (1ro a 5to grado)',
  '✨ BONO: Géneros Textuales completos — fábula, poema, noticia, carta, cuento, cómic y más',
  'Alineado 100% al currículo de primaria',
  'PDF listo para imprimir',
  'Acceso vitalicio',
];

export default function Pricing() {
  return (
    <section id="kits" className="py-12 px-6 bg-mint">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-2">
          Elige tu kit 🎒
        </h2>
        <p className="text-center text-muted-foreground font-medium mb-10 max-w-lg mx-auto">
          Material listo, organizado y alineado al currículo — de 1ro a 5to grado. Acceso inmediato tras el pago.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Kit Essencial */}
          <div className="bg-white rounded-3xl p-7 border border-border shadow-card flex flex-col">
            <div className="mb-4">
              <span className="badge bg-gray-100 text-foreground border border-border mb-3">Kit Esencial</span>
              <p className="text-muted-foreground text-sm font-medium tracking-wide">
                267+ actividades listas para imprimir
              </p>
            </div>

            <div className="mb-5">
              <p className="text-muted-foreground line-through text-base font-medium">De $19.90</p>
              <p className="font-display font-extrabold text-5xl text-foreground leading-none mt-1">$4.90</p>
            </div>

            <ul className="text-left space-y-2.5 mb-7 flex-1">
              {essentialItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              id="pricing-cta-essencial"
              href={buildCheckoutUrl(CHECKOUT_LINKS.essencial)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('InitiateCheckout', { value: 4.90, currency: 'USD', content_name: 'Kit Esencial' })}
              className="btn-viral w-full text-base py-4 mb-3 rounded-full"
            >
              Quiero el Kit Esencial
            </a>
            <p className="text-xs text-muted-foreground font-medium flex items-center justify-center gap-1">
              <LockIcon size={12} className="text-muted-foreground" /> Compra segura · Acceso inmediato
            </p>
          </div>

          {/* Kit Premium — destaque */}
          <div className="bg-white rounded-3xl p-7 border-2 border-secondary shadow-card ring-2 ring-secondary/20 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-secondary text-white text-center text-xs font-bold py-1.5 tracking-wide">
              ⭐ MÁS VENDIDO
            </div>
            <div className="mb-4 mt-6">
              <span className="badge bg-secondary/10 text-secondary border border-secondary/20 mb-3">Kit Premium</span>
              <p className="text-muted-foreground text-sm font-medium tracking-wide">
                267+ actividades + materiales exclusivos
              </p>
            </div>

            <div className="mb-5">
              <p className="text-muted-foreground line-through text-base font-medium">De $29.90</p>
              <p className="font-display font-extrabold text-5xl text-secondary leading-none mt-1">$6.90</p>
              <span className="inline-block mt-2 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Solo $2 más que el Esencial
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
              onClick={() => trackPixelEvent('InitiateCheckout', { value: 6.90, currency: 'USD', content_name: 'Kit Premium' })}
              className="btn-secondary w-full text-base py-4 mb-3 rounded-full"
            >
              🎯 Quiero el Kit Premium
            </a>
            <p className="text-xs text-muted-foreground font-medium flex items-center justify-center gap-1">
              <LockIcon size={12} className="text-muted-foreground" /> Compra segura · Acceso inmediato · Garantía de 7 días
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
