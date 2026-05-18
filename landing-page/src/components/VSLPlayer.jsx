import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────
   VSLPlayer
   • Formato vertical 9:16 (TikTok/Reels)
   • Largura máx 400 px, responsivo
   • Autoplay muted quando ≥50% visível
   • Botão unmute no canto inferior-direito
   • CTA aparece após 32 s de vídeo assistido
───────────────────────────────────────── */
export default function VSLPlayer() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ctaVisible, setCtaVisible] = useState(false);
  const watchedRef = useRef(0);      // segundos acumulados
  const lastTimeRef = useRef(null);  // último timestamp registrado

  /* ── IntersectionObserver: play/pause ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  /* ── timeupdate: contagem real de tempo assistido ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const now = video.currentTime;

      if (lastTimeRef.current !== null && !video.paused) {
        const delta = now - lastTimeRef.current;
        // só conta se o delta for razoável (evita seek)
        if (delta > 0 && delta < 1.5) {
          watchedRef.current += delta;
          if (!ctaVisible && watchedRef.current >= 32) {
            setCtaVisible(true);
          }
        }
      }

      lastTimeRef.current = now;
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('pause', () => { lastTimeRef.current = null; });
    video.addEventListener('play', () => { lastTimeRef.current = video.currentTime; });

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [ctaVisible]);

  /* ── Toggle mute ── */
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  /* ── Scroll suave até os kits ── */
  const scrollToKits = () => {
    const section = document.getElementById('kits');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-10 sm:py-12 px-5 bg-white">
      <div className="flex flex-col items-center">

        {/* ── Player wrapper ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '9 / 16',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
            background: '#000',
          }}
        >
          <video
            ref={videoRef}
            src="/vsl.mp4"
            poster="/vsl-thumb.jpg"
            muted
            playsInline
            loop
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Botão unmute — canto inferior-direito */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Ativar som' : 'Silenciar'}
            style={{
              position: 'absolute',
              bottom: '14px',
              right: '14px',
              background: 'rgba(0,0,0,0.55)',
              border: 'none',
              borderRadius: '50px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.2s',
              zIndex: 10,
            }}
          >
            {muted ? (
              /* Ícone mudo */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V9.2l2.45 2.45c.03-.2.05-.41.05-.65zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              /* Ícone com som */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.97zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
            <span>{muted ? 'Ativar som' : 'Som ativo'}</span>
          </button>
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
