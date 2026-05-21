import { CircleCheckIcon } from './Icons';

const items = [
  'Buscas actividades de comprensión listas sin pasar horas en internet',
  'Quieres que tus alumnos desarrollen lectura y escritura real, no que solo copien',
  'Necesitas recursos para primaria alineados al currículo sin complicarte',
  'Das clases de 1ro a 5to grado — o a varios grados al mismo tiempo',
  'Estás agotada de improvisar la noche antes de clases',
  'Buscas ahorrar tiempo sin sacrificar la calidad pedagógica de tus clases',
];

export default function ForWho() {
  return (
    <section id="para-quem" className="py-12 px-6 bg-card bg-dots">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center text-foreground mb-8">
          Este Mega Pack está hecho para ti si... 🎯
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-4 flex items-start gap-3 border-l-4 border-primary shadow-sm"
            >
              <CircleCheckIcon size={22} className="text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-bold text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
