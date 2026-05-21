import { useState } from 'react';

const faqs = [
  {
    question: '¿Está alineado a primaria?',
    shortAnswer: 'SÍ.',
    answer: 'Todo el material fue desarrollado basándose en las competencias y habilidades del currículo de primaria. Aplicarás con total seguridad y confianza pedagógica.',
    icon: '📌',
  },
  {
    question: '¿Puedo imprimir las veces que quiera?',
    shortAnswer: 'SÍ.',
    answer: 'El PDF es de uso personal ilimitado. Puedes imprimir para tus alumnos cuantas veces necesites a lo largo de todo el ciclo escolar.',
    icon: '🖨️',
  },
  {
    question: '¿Puedo usarlo con varios grados?',
    shortAnswer: 'SÍ.',
    answer: 'El Mega Pack cubre de 1ro a 5to grado — perfecto para maestras que atienden a más de un grupo o quieren tener material completo para toda la primaria.',
    icon: '👩‍🏫',
  },
  {
    question: '¿Es acceso inmediato?',
    shortAnswer: 'SÍ.',
    answer: 'Tras la confirmación de tu pago, el enlace de descarga se libera automáticamente. En menos de 2 minutos ya tienes acceso a todo tu material.',
    icon: '⚡',
  },
  {
    question: '¿Es físico o digital?',
    shortAnswer: 'Digital — acceso inmediato en PDF.',
    answer: 'El material es 100% digital en formato PDF. Descargas, imprimes y usas. Sin envíos, sin esperas — acceso inmediato desde cualquier lugar.',
    icon: '📱',
  },
  {
    question: '¿Necesito imprimir en color?',
    shortAnswer: 'NO ES NECESARIO.',
    answer: 'Las actividades fueron diseñadas para verse hermosas y legibles incluso impresas en blanco y negro. Funciona perfecto en cualquier impresora.',
    icon: '🖨️',
  },
];

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div
      className={`bg-white rounded-2xl border ${isOpen ? 'border-primary/30 shadow-md' : 'border-border'} overflow-hidden transition-all duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-xl flex-shrink-0">{faq.icon}</span>
        <span className="flex-1 font-display font-semibold text-foreground text-sm">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="pl-9">
            <p className="text-sm font-bold text-primary mb-1">{faq.shortAnswer}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-14 sm:py-16 px-5 bg-white">
      <div className="section-wrapper">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <span className="badge bg-sage-soft text-secondary border border-green-200 mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="section-title mb-3">
              Quizás te estés preguntando…
            </h2>
            <p className="section-subtitle max-w-md mx-auto">
              Respuestas rápidas a las dudas más comunes.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              ¿Aún tienes dudas?{' '}
              <a
                href="mailto:suporte@kitaulapronta.com.br"
                className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
              >
                Contáctanos
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
