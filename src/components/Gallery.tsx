import { useState, useEffect, useRef } from 'react';

const galleryItems = [
  {
    label: 'Тонировка стёкол',
    desc: 'Ниссан · тонировка 15%',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: 'Детейлинг кузова',
    desc: 'Полировка и защита кузова',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l3-9 3 4 2-6 3 5 2-3 3 9H3z" />
        <path d="M1 20h22" />
      </svg>
    ),
  },
  {
    label: 'Оклейка плёнкой',
    desc: 'Бронирование капота и крыльев',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function PhotoPlaceholder({ side, label }: { side: 'before' | 'after'; label: string }) {
  const colors = side === 'before'
    ? { from: 'rgba(30,30,35,1)', to: 'rgba(20,20,25,1)', accent: 'rgba(255,255,255,0.07)', text: 'rgba(255,255,255,0.25)' }
    : { from: 'rgba(0,60,80,1)', to: 'rgba(0,30,50,1)', accent: 'rgba(192,48,74,0.15)', text: 'rgba(192,48,74,0.5)' };

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
    >
      {/* Animated shimmer lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute h-px w-full"
            style={{
              top: `${pct}%`,
              background: `linear-gradient(to right, transparent, ${colors.accent}, transparent)`,
              animation: `shimmer ${2 + pct * 0.02}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      {/* Camera icon */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span className="text-xs text-center px-4 relative z-10" style={{ color: colors.text, maxWidth: '160px', lineHeight: 1.4 }}>
        Здесь будут ваши фото
      </span>
    </div>
  );
}

function BeforeAfterPlaceholder({ label, desc }: { label: string; desc: string }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-ew-resize select-none"
        style={{ height: '260px' }}
        onMouseDown={(e) => { setIsDragging(true); updatePosition(e.clientX); }}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* After placeholder (base) */}
        <PhotoPlaceholder side="after" label={label} />

        {/* Before placeholder (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="absolute inset-0" style={{ width: `${100 / (position / 100)}%`, maxWidth: 'none' }}>
            <PhotoPlaceholder side="before" label={label} />
          </div>
        </div>

        {/* Labels */}
        <div
          className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-white"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}
        >
          ДО
        </div>
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold text-white"
          style={{ background: 'rgba(192,48,74,0.7)', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}
        >
          ПОСЛЕ
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 pointer-events-none"
          style={{ left: `${position}%`, background: 'white', boxShadow: '0 0 12px rgba(255,255,255,0.5)' }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%`, background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M5 7H1M1 7l3-3M1 7l3 3M13 7h4M17 7l-3-3M17 7l-3 3" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="font-semibold text-white text-sm">{label}</div>
        <div className="text-white/40 text-xs mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

const staticPlaceholders = [
  { label: 'Интерьер', desc: 'Химчистка + детейлинг' },
  { label: 'Чистка салона', desc: 'Профессиональная химчистка' },
  { label: 'Полировка кузова', desc: 'Восстановительная полировка' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-28" style={{ background: '#0c0c0f' }}>
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: scaleX(0.6); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-tag mx-auto w-fit">Наши работы</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            До и после —<br />
            <span className="gradient-text">результат говорит сам</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Перетащите ползунок, чтобы сравнить результат до и после нашей работы
          </p>
        </div>

        {/* Before/After sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {galleryItems.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <BeforeAfterPlaceholder label={item.label} desc={item.desc} />
            </div>
          ))}
        </div>

        {/* Static placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {staticPlaceholders.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl overflow-hidden`}
              style={{ height: '200px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(20,20,28,1), rgba(10,10,18,1))' }}>
                <div className="absolute inset-0 overflow-hidden">
                  {[25, 50, 75].map((pct) => (
                    <div
                      key={pct}
                      className="absolute h-px w-full"
                      style={{
                        top: `${pct}%`,
                        background: 'linear-gradient(to right, transparent, rgba(192,48,74,0.1), transparent)',
                        animation: `shimmer ${2.5 + i * 0.3}s ease-in-out infinite`,
                        animationDelay: `${pct * 0.01}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>Здесь будут ваши фото</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="font-semibold text-white text-sm">{item.label}</div>
                <div className="text-white/60 text-xs">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
