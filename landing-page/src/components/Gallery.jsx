import { IMAGES } from '../config';

// Todas as imagens disponíveis
const allImages = [
  ...IMAGES.amostras,
  { src: '/assets/images/gallery_8.png', alt: 'Amostra de atividade 8' },
  { src: '/assets/images/gallery_9.png', alt: 'Amostra de atividade 9' },
  { src: '/assets/images/gallery_10.png', alt: 'Amostra de atividade 10' },
  { src: '/assets/images/gallery_11.png', alt: 'Amostra de atividade 11' },
  { src: '/assets/images/gallery_12.png', alt: 'Amostra de atividade 12' },
  { src: '/assets/images/gallery_13.png', alt: 'Amostra de atividade 13' },
  { src: '/assets/images/gallery_14.png', alt: 'Amostra de atividade 14' },
];

// Duplica para marquee infinito
const slides = [...allImages, ...allImages];

export default function Gallery() {
  return (
    <section className="py-14 sm:py-16 bg-section-cream overflow-hidden">
      <div className="section-wrapper mb-8 px-5">
        {/* Header */}
        <div className="text-center">
          <span className="badge bg-sage-soft text-secondary border border-green-200 mb-4">
            Amostra real do material
          </span>
          <h2 className="section-title mb-3">
            Veja algumas páginas do material 👀
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Essas são apenas algumas páginas — existem centenas dentro do kit, organizadas por ano e por tipo de atividade.
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
              className="w-44 sm:w-56 md:w-64 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden shadow-card border border-border bg-white group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="section-wrapper mt-6 px-5 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          📖 Essas são só algumas páginas — tem muito mais dentro do kit!
        </p>
      </div>
    </section>
  );
}
