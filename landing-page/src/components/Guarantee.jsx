export default function Guarantee() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto">

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-200 overflow-hidden shadow-card">

            {/* Faixa topo */}
            <div className="bg-secondary px-6 py-3 text-center">
              <span className="font-display font-bold text-white text-sm tracking-wide uppercase">
                🔒 Garantia Incondicional de 7 Dias
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
                      <svg className="w-8 h-8 text-white mb-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <span className="font-display font-bold text-white text-xs leading-tight">RISCO<br/>ZERO</span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="section-title mb-3">
                    Seu risco é{' '}
                    <span className="text-secondary">zero.</span>
                  </h2>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed mb-5">
                    Baixe todas as 267+ atividades, use em sala de aula e avalie com calma. Se dentro de{' '}
                    <strong className="text-foreground">7 dias</strong> você sentir que o material não ajuda
                    na sua rotina, basta pedir reembolso — sem burocracia, sem perguntas, sem complicação.
                    O dinheiro volta para você.
                  </p>

                  {/* Bullets garantia */}
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {[
                      { icon: '⚡', label: 'Reembolso imediato' },
                      { icon: '🚫', label: 'Sem perguntas' },
                      { icon: '📩', label: 'Só mandar mensagem' },
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
                { icon: '🔐', text: 'Compra 100% segura' },
                { icon: '⚡', text: 'Download imediato' },
                { icon: '🕐', text: 'Garantia de 7 dias' },
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
