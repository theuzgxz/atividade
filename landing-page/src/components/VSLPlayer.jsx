import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   VSLPlayer — integração oficial VTurb SmartPlayer
   • Embed via Web Component (<vturb-smartplayer>)
   • Autoplay muted quando ≥50% visível (IntersectionObserver)
   • Contagem de 32 s via postMessage da VTurb → exibe CTA
   • Botão CTA aparece com animação suave e rola até #kits
   • Sem vídeo local — 100% hospedado na VTurb
────────────────────────────────────────────────────────────── */

const VTURB_PLAYER_ID   = 'vid-6a0b8f3e4b6ee00cb91fec5d';
const VTURB_SCRIPT_SRC  =
  'https://scripts.converteai.net/e274ba36-f4b5-421d-912e-87caa3b04d29/players/6a0b8f3e4b6ee00cb91fec5d/v4/player.js';
const CTA_THRESHOLD_SEC = 32;

export default function VSLPlayer() {
  const sectionRef   = useRef(null);
  const playerLoaded = useRef(false);
  const watchedRef   = useRef(0);
  const [ctaVisible, setCtaVisible] = useState(false);

  /* ── 1. Carrega o script VTurb apenas uma vez ── */
  useEffect(() => {
    if (playerLoaded.current) return;
    playerLoaded.current = true;

    const script = document.createElement('script');
    script.src   = VTURB_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  /* ── 2. IntersectionObserver: autoplay quando visível ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aguarda o custom element estar pronto
        const el = section.querySelector('vturb-smartplayer');
        if (!el) return;

        if (entry.intersectionRatio >= 0.5) {
          /* Tenta via API pública do SmartPlayer */
          try { el.play?.(); } catch (_) {}
          /* Fallback: dispara evento sintético para iniciar muted */
          el.dispatchEvent(new CustomEvent('vturb:autoplay', { detail: { muted: true } }));
        } else {
          try { el.pause?.(); } catch (_) {}
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ── 3. postMessage da VTurb → conta tempo assistido ── */
  useEffect(() => {
    const handleMessage = (event) => {
      // A VTurb emite eventos via postMessage com a estrutura abaixo
      // Aceita qualquer origem pois o player é cross-origin
      try {
        const data =
          typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

        // Evento de progresso de tempo (timeupdate do player interno)
        if (
          data?.event === 'timeupdate' ||
          data?.type  === 'timeupdate'  ||
          data?.name  === 'timeupdate'
        ) {
          const seconds =
            data?.currentTime ?? data?.seconds ?? data?.time ?? 0;

          if (seconds > watchedRef.current) {
            // Incrementa apenas se avançou (evita seek para trás inflar)
            const delta = seconds - watchedRef.current;
            if (delta > 0 && delta < 3) {
              watchedRef.current = seconds;
            }
          }

          if (!ctaVisible && watchedRef.current >= CTA_THRESHOLD_SEC) {
            setCtaVisible(true);
          }
        }

        // Alguns builds da VTurb emitem eventos de marcador/cue
        if (
          (data?.event === 'cuepoint' || data?.type === 'cuepoint') &&
          (data?.time ?? 0) >= CTA_THRESHOLD_SEC
        ) {
          setCtaVisible(true);
        }
      } catch (_) {}
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [ctaVisible]);

  /* ── 4. Fallback timer: exibe CTA após 32 s de página aberta
          Garante que funcione mesmo sem postMessage ── */
  useEffect(() => {
    if (ctaVisible) return;
    const timer = setTimeout(() => setCtaVisible(true), CTA_THRESHOLD_SEC * 1000);
    return () => clearTimeout(timer);
  }, [ctaVisible]);

  /* ── Scroll suave até os kits ── */
  const scrollToKits = () => {
    const section = document.getElementById('kits');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="vsl-section" ref={sectionRef} className="py-10 sm:py-12 px-5 bg-white">
      <div className="flex flex-col items-center">

        {/* ── Player VTurb ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          {/* Web Component oficial VTurb */}
          <vturb-smartplayer
            id={VTURB_PLAYER_ID}
            style={{
              display: 'block',
              margin: '0 auto',
              width: '100%',
              maxWidth: '400px',
            }}
          />
        </div>

        {/* ── CTA após 32 s ── */}
        <div
          style={{
            marginTop: '20px',
            width: '100%',
            maxWidth: '400px',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            pointerEvents: ctaVisible ? 'auto' : 'none',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #fef9ec 0%, #fef3c7 100%)',
              border: '2px solid #f59e0b',
              borderRadius: '18px',
              padding: '20px 22px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: '0 0 14px',
                fontWeight: 700,
                fontSize: '17px',
                color: '#1c1c1e',
                lineHeight: 1.4,
              }}
            >
              👇 Escolha o seu kit e comece agora
            </p>
            <button
              onClick={scrollToKits}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '16px',
                padding: '14px 20px',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(245,158,11,0.45)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 26px rgba(245,158,11,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.45)';
              }}
            >
              🎯 Ver kits e preços →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
