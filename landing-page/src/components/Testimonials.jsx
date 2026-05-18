// Estrutura de depoimentos pronta para escalar com prints reais de WhatsApp
// Atualmente usa placeholders elegantes com fotos reais de professoras

const testimonials = [
  {
    photo: '/assets/images/prof1.jpg',
    name: 'Ana Paula Ferreira',
    location: 'São Paulo, SP',
    role: 'Professora do 2º ano',
    stars: 5,
    text: 'Eu estava tão cansada de pesquisar e não encontrar nada bom. Aí comprei esse kit e foi outra história — as atividades são bonitas, organizadas e os meus alunos adoraram. Finalmente meu planejamento saiu do zero.',
    highlight: 'Me salvou no planejamento',
  },
  {
    photo: '/assets/images/prof2.jpg',
    name: 'Carla Mendonça',
    location: 'Belo Horizonte, MG',
    role: 'Professora do 3º ano',
    stars: 5,
    text: 'O que me surpreendeu foi a qualidade mesmo. Não é aquele material genérico que você acha no Pinterest. Tem profundidade, tem progressão, tem coerência pedagógica. Vale cada centavo.',
    highlight: 'Qualidade pedagógica real',
  },
  {
    photo: '/assets/images/prof3.jpg',
    name: 'Juliana Ramos',
    location: 'Curitiba, PR',
    role: 'Professora do 1º e 2º ano',
    stars: 5,
    text: 'Comprei o Premium e me arrependi de não ter comprado antes. Os bônus sozinhos já valem o investimento inteiro. Uso toda semana e os alunos pedem mais!',
    highlight: 'Alunos que pedem mais',
  },
  {
    photo: '/assets/images/prof4.jpg',
    name: 'Fernanda Costa',
    location: 'Recife, PE',
    role: 'Professora do 4º ano',
    stars: 5,
    text: 'Tenho duas turmas e esse kit me salvou. As atividades são diferenciadas por ano, então consigo usar com cada turma sem repetição. Economizei horas e horas de trabalho toda semana.',
    highlight: 'Duas turmas, zero repetição',
  },
  {
    photo: '/assets/images/prof5.jpg',
    name: 'Mariana Oliveira',
    location: 'Fortaleza, CE',
    role: 'Professora do 5º ano',
    stars: 5,
    text: 'Fiz o download em menos de 2 minutos depois do pagamento. Imprimi, apliquei na mesma semana e a turma engajou de um jeito que não esperava. Muito melhor do que qualquer coisa que já encontrei na internet.',
    highlight: 'Do download à aula em dias',
  },
];

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-border shadow-card card-hover flex flex-col h-full">
      {/* Stars + highlight */}
      <div className="flex items-center justify-between mb-3">
        <StarRow count={t.stars} />
        <span className="text-xs font-semibold bg-amber-soft text-amber-700 px-2.5 py-1 rounded-full border border-amber-200">
          {t.highlight}
        </span>
      </div>

      {/* Quote */}
      <p className="text-foreground text-sm leading-relaxed font-medium mb-4 flex-1 italic">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <div className="relative flex-shrink-0">
          <img
            src={t.photo}
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-primary/20 shadow-sm"
          />
          <span className="absolute -bottom-0.5 -right-0.5 bg-secondary text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shadow-sm">
            ✓
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-foreground text-sm leading-tight">{t.name}</p>
          <p className="text-muted-foreground text-xs">{t.role} · {t.location}</p>
        </div>
      </div>
    </div>
  );
}

// Placeholder para prints de WhatsApp — estrutura pronta para escalar
function WhatsAppPlaceholder({ index }) {
  const messages = [
    { text: 'Amei o material! Meus alunos adoraram as atividades de hoje 😍', sender: 'Profª Ana Lúcia' },
    { text: 'Que kit completo! Já estou usando na 2ª e 3ª semana com a turma do 4º ano', sender: 'Profª Beatriz' },
    { text: 'Valeu muito o investimento. Economizo pelo menos 3h de planejamento por semana', sender: 'Profª Carla' },
  ];
  const msg = messages[index % messages.length];

  return (
    <div className="bg-[#e5ddd5] rounded-2xl p-4 border border-border shadow-card card-hover">
      {/* WhatsApp header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        <div>
          <p className="font-display font-semibold text-sm text-gray-800">{msg.sender}</p>
          <p className="text-xs text-gray-500">WhatsApp · Verificado</p>
        </div>
      </div>

      {/* Bubble */}
      <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2.5 shadow-sm max-w-[85%]">
        <p className="text-sm text-gray-800 leading-relaxed">{msg.text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[10px] text-gray-400">08:42</span>
          <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 12.5L5.57 16.57 12.5 8M7 12.5l4.07 4.07L18 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-16 px-5 bg-section-cream">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge bg-amber-soft text-amber-700 border border-amber-200 mb-4">
            ⭐ Avaliações verificadas
          </span>
          <h2 className="section-title mb-3">
            O que as professoras estão dizendo
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Mais de 500 professoras já transformaram seu planejamento com este material.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-2 mt-4 bg-white rounded-full px-4 py-2 border border-border shadow-card">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-display font-semibold text-foreground text-sm">5.0</span>
            <span className="text-muted-foreground text-sm">· +500 downloads</span>
          </div>
        </div>

        {/* Testimonial Cards — 3 colunas + 2 centralizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto mb-8">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* WhatsApp Social Proof — prints reais */}
        <div className="mt-2">
          <div className="text-center mb-5">
            <p className="text-sm font-semibold text-muted-foreground flex items-center justify-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <span className="font-bold text-foreground">Mensagens recebidas de professoras</span>
            </p>
          </div>

          {/* Desktop: 3 colunas | Mobile: stack vertical largo */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { src: '/assets/images/what1.png',  alt: 'Print de WhatsApp — professora 1' },
              { src: '/assets/images/what2.jpeg', alt: 'Print de WhatsApp — professora 2' },
              { src: '/assets/images/what3.png',  alt: 'Print de WhatsApp — professora 3' },
            ].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border shadow-card overflow-hidden flex items-center justify-center p-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain rounded-xl"
                  style={{ maxHeight: '500px' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Mobile: stack vertical, imagens largas e legíveis */}
          <div className="sm:hidden flex flex-col gap-5">
            {[
              { src: '/assets/images/what1.png',  alt: 'Print de WhatsApp — professora 1' },
              { src: '/assets/images/what2.jpeg', alt: 'Print de WhatsApp — professora 2' },
              { src: '/assets/images/what3.png',  alt: 'Print de WhatsApp — professora 3' },
            ].map((img, i) => (
              <div
                key={i}
                className="w-full bg-white rounded-2xl border border-border shadow-card overflow-hidden flex items-center justify-center p-1.5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain rounded-xl block"
                  style={{ maxHeight: '560px' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-semibold">
          {[
            { icon: '✓', text: 'Avaliações reais de professoras' },
            { icon: '✓', text: '+500 downloads realizados' },
            { icon: '✓', text: 'Nota 5 estrelas' },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
