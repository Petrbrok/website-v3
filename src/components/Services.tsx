import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Оклейка зон риска',
    desc: 'Защита уязвимых мест: пороги, бамперы, арки.',
    price: 'от 2 000 ₽',
    badge: 'Популярное',
    highlight: false,
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: 'Полировка и защита фар',
    desc: 'Восстановление прозрачности и защитная плёнка.',
    price: 'от 5 000 ₽',
    badge: null,
    highlight: false,
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Матовые защитные плёнки',
    desc: 'Оклейка кузова матовой PPF-плёнкой.',
    price: 'от 20 000 ₽',
    badge: 'Топ',
    highlight: true,
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 4v6h6" />
        <path d="M23 20v-6h-6" />
        <path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15" />
      </svg>
    ),
    title: 'Тонирование авто',
    desc: 'Качественные плёнки. ГОСТ-тонировка.',
    price: 'от 5 000 ₽',
    badge: null,
    highlight: false,
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.97" />
      </svg>
    ),
    title: 'Бронирование фар',
    desc: 'Надёжная защита оптики от сколов и царапин.',
    price: 'По запросу',
    badge: null,
    highlight: false,
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Антигравийная плёнка',
    desc: 'Защита кузова от гравия и камней.',
    price: 'По запросу',
    badge: null,
    highlight: false,
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Виниловая оклейка кузова',
    desc: 'Изменение цвета и стиля автомобиля.',
    price: 'По запросу',
    badge: null,
    highlight: false,
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Предпродажная подготовка',
    desc: 'Комплексная подготовка авто перед продажей.',
    price: 'По запросу',
    badge: null,
    highlight: false,
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4 4 4" />
        <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-4" />
      </svg>
    ),
    title: 'Химчистка салона',
    desc: 'Профессиональная чистка салона автомобиля.',
    price: 'По запросу',
    badge: null,
    highlight: false,
    featured: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredServices = services.filter(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-28 premium-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 reveal">
          <div className="section-tag mx-auto w-fit">Наши услуги</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Всё для защиты<br />
            <span className="gradient-text">вашего автомобиля</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Работаем с проверенными материалами. Гарантия качества.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mobile: show featured or all if showAll is true */}
          {(showAll ? services : featuredServices).map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover relative rounded-2xl p-6 flex flex-col gap-4 md:hidden ${
                service.highlight ? 'gradient-border' : ''
              }`}
              style={{
                background: service.highlight
                  ? 'linear-gradient(135deg, rgba(192,48,74,0.08), rgba(122,21,40,0.04))'
                  : 'rgba(255,255,255,0.03)',
                border: service.highlight ? 'none' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Badge */}
              {service.badge && (
                <span className="service-badge absolute top-4 right-4">{service.badge}</span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: service.highlight
                    ? 'linear-gradient(135deg, rgba(192,48,74,0.2), rgba(122,21,40,0.15))'
                    : 'rgba(192,48,74,0.08)',
                  color: '#c0304a',
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-white text-base mb-1.5">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="font-bold text-lg" style={{ color: '#c0304a' }}>{service.price}</span>
                <a
                  href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-1"
                >
                  Записаться
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Desktop: always show all services */}
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover relative rounded-2xl p-6 flex-col gap-4 hidden md:flex ${
                service.highlight ? 'gradient-border' : ''
              }`}
              style={{
                background: service.highlight
                  ? 'linear-gradient(135deg, rgba(192,48,74,0.08), rgba(122,21,40,0.04))'
                  : 'rgba(255,255,255,0.03)',
                border: service.highlight ? 'none' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Badge */}
              {service.badge && (
                <span className="service-badge absolute top-4 right-4">{service.badge}</span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: service.highlight
                    ? 'linear-gradient(135deg, rgba(192,48,74,0.2), rgba(122,21,40,0.15))'
                    : 'rgba(192,48,74,0.08)',
                  color: '#c0304a',
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-white text-base mb-1.5">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="font-bold text-lg" style={{ color: '#c0304a' }}>{service.price}</span>
                <a
                  href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white/80 transition-colors flex items-center gap-1"
                >
                  Записаться
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button - Mobile Only */}
        {!showAll && otherServices.length > 0 && (
          <div className="text-center mt-8 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary inline-flex items-center gap-2"
              style={{ minHeight: '48px', padding: '0 24px', fontSize: '16px' }}
            >
              Показать все услуги ({otherServices.length})
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12 reveal">
          <p className="text-white/40 mb-4 text-sm">Не нашли нужную услугу? Свяжитесь с нами.</p>
          <a
            href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20уточнить%20информацию"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            style={{ minHeight: '48px', padding: '0 24px', fontSize: '16px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
