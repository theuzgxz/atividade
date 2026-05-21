import { CHECKOUT_LINKS } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';
import { SparklesIcon } from './Icons';

const bullets = [
  '267+ actividades listas para imprimir',
  'Para 1ro a 5to Grado — comprensión y producción',
  'Alineado al currículo escolar de primaria',
  'Ahorra horas de planificación cada semana',
  'Alumnos más engajados, clases que fluyen',
];

export default function Hero() {
  return (
    <section className="bg-peach bg-confetti py-12 sm:py-16 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Columna de Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full mb-5 border border-primary/20 shadow-sm animate-fade-in">
              <SparklesIcon size={14} />
              Material premium para maestras
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-[1.15] mb-5">
              267+ Actividades de{' '}
              <span className="text-primary relative inline-block">
                Comprensión y Producción
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span>{' '}
              para Primaria
            </h1>

            {/* Sub */}
            <p className="text-muted-foreground text-base sm:text-lg font-medium leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0">
              Menos estrés. Menos horas planificando. Todo listo. Descarga hoy mismo y tendrás más tiempo para disfrutar tu clase y enseñar.
            </p>

            {/* Bullet List */}
            <ul className="space-y-3 mb-8 text-left inline-block mx-auto lg:mx-0 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-foreground font-semibold text-sm">
                  <div className="bg-primary/10 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-black">✓</span>
                  </div>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                id="hero-cta"
                href="#kits"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('kits');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                  trackPixelEvent('ViewContent', { content_name: 'Scroll to Pricing - Hero CTA' });
                }}
                className="btn-viral btn-viral-pulse w-full sm:w-auto px-8"
              >
                📚 ¡SÍ, QUIERO MI MEGA PACK!
              </a>
              <div className="flex items-center gap-3 text-[11px] sm:text-xs text-muted-foreground font-bold uppercase tracking-wider bg-white/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/50">
                <span className="flex items-center gap-1"><span className="text-green-500 text-sm">✓</span> Acceso inmediato</span>
                <span className="flex items-center gap-1"><span className="text-green-500 text-sm">✓</span> Pago único</span>
                <span className="flex items-center gap-1"><span className="text-green-500 text-sm">✓</span> Descarga digital</span>
              </div>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md group">
              
              {/* Layered Worksheets (Pinterest Aesthetic Background) */}
              <div className="absolute -top-12 -left-8 w-44 h-52 bg-white rounded-2xl shadow-premium-soft rotate-[-15deg] animate-float opacity-80 border border-gray-100 flex flex-col p-3 pointer-events-none z-0">
                 <div className="w-14 h-2 bg-gray-200 rounded-full mb-3"></div>
                 <div className="w-full h-2 bg-pink-100 rounded-full mb-2"></div>
                 <div className="w-3/4 h-2 bg-pink-50 rounded-full mb-4"></div>
                 <div className="w-full flex-1 border-2 border-dashed border-gray-100 rounded-xl"></div>
              </div>

              <div className="absolute -top-4 left-6 w-36 h-40 bg-white rounded-2xl shadow-premium-soft rotate-[-5deg] animate-float-delayed opacity-90 border border-gray-100 flex flex-col p-3 pointer-events-none z-0">
                 <div className="w-10 h-10 bg-blue-50 rounded-lg mb-2"></div>
                 <div className="w-full h-2 bg-gray-100 rounded-full mb-1"></div>
                 <div className="w-5/6 h-2 bg-gray-100 rounded-full"></div>
              </div>

              <div className="absolute top-1/3 -right-12 w-40 h-48 bg-white rounded-2xl shadow-premium-soft rotate-[12deg] animate-float opacity-85 border border-gray-100 flex flex-col p-3 pointer-events-none z-0">
                 <div className="w-full h-20 bg-green-50 rounded-xl mb-3"></div>
                 <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
                 <div className="w-4/5 h-2 bg-gray-100 rounded-full mb-2"></div>
                 <div className="w-3/5 h-2 bg-gray-100 rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-40 h-48 bg-white rounded-2xl shadow-premium-soft rotate-[8deg] animate-float-delayed opacity-95 border border-gray-100 flex flex-col p-3 pointer-events-none z-20">
                 <div className="w-10 h-10 bg-purple-50 rounded-full mb-3"></div>
                 <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
                 <div className="w-5/6 h-2 bg-gray-100 rounded-full mb-2"></div>
                 <div className="w-4/6 h-2 bg-gray-100 rounded-full"></div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 z-0" />

              {/* Frame */}
              <div className="relative rounded-[2rem] shadow-premium-extreme ring-4 ring-white/80 bg-white p-3 z-10 backdrop-blur-sm">
                <div className="rounded-2xl overflow-hidden bg-gray-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50 z-10 pointer-events-none"></div>
                  <img
                    src="/assets/images/professora.png"
                    alt="Maestra con el material de actividades de comprensión y producción de texto"
                    className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    fetchPriority="high"
                    onError={(e) => {
                      e.target.src = '/assets/images/resolvendo.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Badge flotante (Trust indicator) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-premium-soft border border-gray-100 px-5 py-2.5 flex items-center gap-2.5 whitespace-nowrap z-30 animate-bounce-gentle">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px]">👩‍🏫</div>
                  <div className="w-6 h-6 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[10px]">👩🏻‍🏫</div>
                  <div className="w-6 h-6 rounded-full bg-green-100 border border-white flex items-center justify-center text-[10px]">👩🏽‍🏫</div>
                </div>
                <span className="font-display font-bold text-foreground text-[13px] tracking-tight">¡Miles de maestras felices!</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
