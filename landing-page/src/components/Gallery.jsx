const allImages = [
  { src: '/assets/images/es_gallery_1.png', alt: 'Muestra de actividad 1' },
  { src: '/assets/images/es_gallery_2.png', alt: 'Muestra de actividad 2' },
  { src: '/assets/images/es_gallery_3.png', alt: 'Muestra de actividad 3' },
  { src: '/assets/images/es_gallery_4.png', alt: 'Muestra de actividad 4' },
];

// Duplica para marquee infinito
const slides = [...allImages, ...allImages, ...allImages, ...allImages];

export default function Gallery() {
  return (
    <section className="py-14 sm:py-16 bg-section-cream overflow-hidden">
      <div className="section-wrapper mb-8 px-5">
        {/* Header */}
        <div className="text-center">
          <span className="badge bg-sage-soft text-secondary border border-green-200 mb-4">
            Muestra real del material
          </span>
          <h2 className="section-title mb-3">
            Mira algunas páginas del material 👀
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Estas son solo algunas páginas — hay cientos dentro del kit, organizadas por grado y por tipo de actividad.
          </p>
        </div>
      </div>

      {/* Carrossel marquee com fade lateral */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex gap-4 sm:gap-5 animate-marquee w-max">
          {slides.map((img, i) => (
            <div
              key={i}
              className="w-44 sm:w-56 md:w-64 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden shadow-premium border border-border bg-white group p-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="section-wrapper mt-6 px-5 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          📖 ¡Estas son solo algunas páginas — hay mucho más dentro del kit!
        </p>
      </div>
    </section>
  );
}
