export default function Author() {
  return (
    <section id="author-section" className="py-16 px-6 bg-gradient-to-br from-indigo-50/50 to-blue-50/50">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-premium overflow-hidden flex flex-col md:flex-row items-center border border-indigo-50">
        
        {/* Imagen */}
        <div className="w-full md:w-5/12 p-8 md:p-12 flex justify-center bg-indigo-50/30">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-4xl filter drop-shadow-sm z-10 animate-bounce-gentle">📚</div>
            <div className="absolute -bottom-3 -right-3 text-4xl filter drop-shadow-sm z-10 animate-float-fast">✏️</div>
            <img 
              src="/assets/images/prof.png" 
              alt="Maestra Simone" 
              className="w-full max-w-[320px] rounded-[2rem] shadow-premium object-cover border-8 border-white relative z-0 transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
        
        {/* Texto */}
        <div className="w-full md:w-7/12 p-8 md:p-12 md:pl-0">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 mb-6 leading-tight">
            Hola, soy la <span className="text-indigo-600">Maestra Simone</span> 👋
          </h2>
          
          <div className="space-y-4 text-slate-600 text-lg font-medium leading-relaxed">
            <p>
              Llevo más de 30 años dedicando mi vida a las aulas de primaria, y si hay algo que conozco de cerca, es ese cansancio profundo al final del día.
            </p>
            <p>
              <strong>Sé lo agotador que es</strong> llegar a casa, después de haberlo dado todo en clase, y tener que sentarse horas a buscar hojas sueltas en Pinterest o crear actividades desde cero.
            </p>
            <p>
              Durante años, vi a mis colegas sacrificar sus fines de semana, su descanso y el tiempo con su familia solo para lograr tener material de calidad para sus alumnos.
            </p>
            <p className="font-bold text-slate-800 text-xl">
              Por eso decidí organizar todo lo que he perfeccionado en mi carrera en un solo Mega Pack listo para usar.
            </p>
            <p>
              Quiero ayudarte a descargar, imprimir y entrar al salón con confianza. Que tus alumnos aprendan felices, y que tú, al fin, recuperes tu tiempo libre.
            </p>
          </div>
          
          {/* Etiquetas */}
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 border border-indigo-100 shadow-sm">
              ⭐ +30 años de experiencia
            </div>
            <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 border border-indigo-100 shadow-sm">
              📄 Actividades probadas
            </div>
            <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 border border-indigo-100 shadow-sm">
              🖨️ Listo para imprimir
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
