import { useEffect, useRef } from 'react';

const advantages = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Качественные материалы',
    desc: 'Используем только проверенные плёнки и материалы. Никаких дешёвых аналогов.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Работаем до 21:00',
    desc: 'Принимаем авто в удобное для вас время, включая вечерние часы.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      </svg>
    ),
    title: 'Гарантия на работу',
    desc: 'Даём гарантию на все выполненные работы. Если что-то не так — исправим.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Постоянные клиенты',
    desc: 'Многие клиенты возвращаются снова и приводят друзей. Это лучшая оценка работы.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Честные цены',
    desc: 'Никаких скрытых доплат. Цена, названная до работы — это финальная цена.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Опытный мастер',
    desc: 'Более 5 лет практики. Мастер Даниил лично выполняет все работы — без учеников.',
  },
];

export default function Advantages() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-tag mx-auto w-fit">Почему выбирают нас</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Наши <span className="gradient-text">преимущества</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Мы не просто делаем работу — мы делаем её правильно. С первого раза.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover rounded-2xl p-6 flex gap-5`}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(192,48,74,0.08)', color: '#c0304a' }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating bar */}
        <div className="reveal mt-14 rounded-2xl p-6 md:p-8" style={{ background: 'rgba(192,48,74,0.05)', border: '1px solid rgba(192,48,74,0.15)' }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-black text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>4.7</span>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="70%" stopColor="#f59e0b" />
                      <stop offset="70%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" />
                </svg>
              </div>
              <span className="text-white/40 text-sm mt-1.5">84 оценки на Яндекс Картах</span>
            </div>

            <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />

            <div className="flex-1 w-full">
              {[
                { label: 'Качество работы', pct: 95 },
                { label: 'Сервис и общение', pct: 90 },
                { label: 'Скорость выполнения', pct: 85 },
                { label: 'Соотношение цена/качество', pct: 92 },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                  <span className="text-white/60 text-xs w-44 flex-shrink-0">{bar.label}</span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${bar.pct}%`,
                        background: 'linear-gradient(135deg, #c0304a, #7a1528)',
                      }}
                    />
                  </div>
                  <span className="text-white/40 text-xs w-8 text-right">{bar.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
