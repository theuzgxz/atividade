import { CHECKOUT_LINKS } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-foreground text-white">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-block font-display font-semibold text-xs bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 text-white/90 tracking-wide">
            🎯 Última oportunidad
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug">
            Tus alumnos merecen actividades que<br className="hidden sm:block" /> realmente les ayuden.
          </h2>

          <p className="text-white/70 text-base font-medium mb-6 leading-relaxed">
            Y tú mereces planificar sin estrés — empieza hoy mismo y ahorra horas de planificación cada semana.
          </p>

          {/* Preço resumo */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <span className="text-white/50 line-through text-lg font-medium">$19.90</span>
            <span className="font-display font-bold text-4xl text-white">$4.90</span>
          </div>

          {/* CTA */}
          <a
            id="final-cta-btn"
            href={buildCheckoutUrl(CHECKOUT_LINKS.essencial)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPixelEvent('InitiateCheckout', { value: 4.90, currency: 'USD', content_name: 'Kit Esencial — FinalCTA' })}
            className="btn-cta btn-cta-pulse w-full sm:w-auto text-lg px-10 py-4 mb-4"
          >
            📚 SÍ, QUIERO MI MEGA PACK
          </a>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 font-medium">
            <span>🔒 Compra segura</span>
            <span>⚡ Acceso inmediato</span>
            <span>🕐 Garantía de 7 días</span>
          </div>

        </div>
      </div>
    </section>
  );
}
