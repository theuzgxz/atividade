import { useEffect, useState } from 'react';
import { CHECKOUT_LINKS } from '../config';
import { trackPixelEvent } from '../utils/pixel';
import { buildCheckoutUrl } from '../utils/utm';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Visível apenas em mobile (lg:hidden)
    <div
      className={`sticky-cta-bar lg:hidden ${visible ? 'visible' : ''}`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        {/* Preço compacto */}
        <div className="flex-shrink-0 text-left">
          <p className="text-xs text-muted-foreground font-medium leading-none mb-0.5">267+ actividades listas</p>
          <p className="font-display font-bold text-foreground text-base leading-none">$4.90</p>
        </div>

        {/* CTA */}
        <a
          id="sticky-cta-btn"
          href={buildCheckoutUrl(CHECKOUT_LINKS.essencial)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixelEvent('InitiateCheckout', { value: 4.90, currency: 'USD', content_name: 'Kit Esencial — Sticky' })}
          className="btn-cta flex-1 text-sm py-3 px-4"
        >
          📚 DESCARGAR AHORA
        </a>
      </div>
    </div>
  );
}
