export default function Guarantee() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto">

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-200 overflow-hidden shadow-card">

            {/* Faixa topo */}
            <div className="bg-secondary px-6 py-3 text-center">
              <span className="font-display font-bold text-white text-sm tracking-wide uppercase">
                🔒 Garantía Incondicional de 7 Días
              </span>
            </div>

            <div className="p-7 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center gap-8">

                {/* Selo visual */}
                <div className="flex-shrink-0">
                  <div className="relative w-36 h-36">
                    {/* Anel externo */}
                    <div className="absolute inset-0 rounded-full border-4 border-secondary/20 bg-secondary/5" />
                    {/* Anel pulsante */}
                    <div className="absolute inset-1.5 rounded-full border-4 border-secondary/30 animate-pulse" />
                    {/* Conteúdo central */}
                    <div className="absolute inset-4 rounded-full bg-secondary flex flex-col items-center justify-center text-center shadow-md">
                      <svg className="w-8 h-8 text-white mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <span className="text-white font-display font-extrabold text-sm">GARANTÍA</span>
                      <span className="text-white/80 text-[10px] font-bold">7 DÍAS</span>
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    Garantía de satisfacción: prueba el material sin riesgo
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Si dentro de <strong>7 días</strong> sientes que el Mega Pack no ayuda
                    en tu rutina, solo pide el reembolso — sin burocracia, sin preguntas, sin complicaciones.
                    Tu dinero regresa a ti.
                  </p>

                  {/* Bullets garantia */}
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {[
                      { icon: '⚡', label: 'Reembolso inmediato' },
                      { icon: '🚫', label: 'Sin preguntas' },
                      { icon: '📩', label: 'Solo manda un mensaje' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-3.5 py-2 border border-green-200 shadow-sm">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-foreground font-semibold text-xs">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Rodapé */}
            <div className="bg-green-100/60 px-6 py-3 border-t border-green-200 flex flex-wrap items-center justify-center gap-4 text-xs text-secondary font-semibold">
              {[
                { icon: '🔐', text: 'Acceso inmediato y seguro' },
                { icon: '⚡', text: 'Descarga al instante' },
                { icon: '🕐', text: 'Garantía de 7 días' },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
