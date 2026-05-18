import { CircleCheckIcon } from './Icons';

const items = [
  'Você quer atividades de interpretação prontas sem gastar horas pesquisando',
  'Quer que seus alunos desenvolvam leitura e escrita de verdade, não só copiem',
  'Precisa de material alinhado à BNCC sem complicação',
  'Atende do 1º ao 5º ano — ou mais de uma turma ao mesmo tempo',
  'Está cansada de improvisar na véspera da aula',
  'Quer economizar tempo sem abrir mão da qualidade pedagógica',
];

export default function ForWho() {
  return (
    <section id="para-quem" className="py-12 px-6 bg-card bg-dots">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center text-foreground mb-8">
          Esse kit foi feito para você se... 🎯
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
