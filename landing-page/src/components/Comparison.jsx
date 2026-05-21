const genericItems = [
  'Hojas sueltas encontradas en Pinterest o Google',
  'Textos genéricos sin progresión pedagógica',
  'Material desorganizado y estresante',
  'Horas perdidas buscando qué imprimir',
  'Contenido no alineado al nivel real de los niños',
  'Diseños anticuados que aburren a los alumnos',
];

const kitItems = [
  'Organizado por nivel y dificultad progresiva',
  'Desarrolla lectura fluida y escritura',
  'Material 100% listo — solo imprimes y aplicas',
  'Alineado a las necesidades de educación primaria',
  'Diseño hermoso que capta su atención',
  'Uso inmediato en tu salón de clases',
];

function XMark() {
  return (
    <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CheckMarkGreen() {
  return (
    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <span className="bg-sky-50 text-sky-700 border border-sky-100 mb-4 inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-sm">
            LA DIFERENCIA ES CLARA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 mb-4">
            No es solo un PDF de hojas al azar.
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto font-medium">
            Compara la forma antigua (y estresante) de buscar recursos vs. tener una biblioteca completa en tus manos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">

          {/* Coluna Genérico */}
          <div className="bg-white border border-rose-100 shadow-sm rounded-[2rem] p-8 hover:shadow-premium transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-50">
              <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-800 text-lg">Buscar en Pinterest/Google</h3>
            </div>
            <ul className="space-y-4">
              {genericItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XMark />
                  <span className="text-slate-600 text-base font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Kit */}
          <div className="bg-white border-2 border-emerald-400 shadow-premium rounded-[2rem] p-8 transform md:-translate-y-4 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
              La Solución
            </div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-50">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-800 text-lg">Mega Pack Premium™</h3>
            </div>
            <ul className="space-y-4">
              {kitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckMarkGreen />
                  <span className="text-slate-800 text-base font-bold leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
