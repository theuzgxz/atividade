const steps = [
  {
    number: '01',
    color: 'bg-sage-soft border-green-200',
    iconBg: 'bg-secondary',
    title: 'Compra segura',
    desc: 'En menos de 2 minutos se confirma tu pago. Aceptamos tarjeta de crédito, débito y métodos locales.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    number: '02',
    color: 'bg-amber-soft border-amber-200',
    iconBg: 'bg-accent',
    title: 'Recibe acceso inmediato',
    desc: 'Recibes el enlace de acceso automáticamente en tu correo. Descargas en el momento, sin esperas ni complicaciones.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    number: '03',
    color: 'bg-rose-soft border-rose-200',
    iconBg: 'bg-primary',
    title: 'Descarga, imprime y usa',
    desc: 'Funciona en cualquier impresora — a color o blanco y negro. Imprimes hoy, aplicas mañana. Así de simple.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-3 0h.008v.008h-.008V12z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">

        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            ¿Cómo funciona? Es simple 👇
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            De la compra al salón de clases en menos de 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto relative">

          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-16 left-[calc(33%_-_8px)] right-[calc(33%_-_8px)] h-0.5 border-t-2 border-dashed border-border z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative z-10 ${s.color} border rounded-2xl p-6 text-center card-hover`}
            >
              {/* Number */}
              <div className="font-display font-bold text-5xl text-foreground/10 leading-none mb-3 select-none">
                {s.number}
              </div>

              {/* Icon */}
              <div className={`${s.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                {s.icon}
              </div>

              <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8">
          <p className="text-sm font-semibold text-secondary flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Acceso vitalicio — descarga cuantas veces lo necesites
          </p>
        </div>

      </div>
    </section>
  );
}
