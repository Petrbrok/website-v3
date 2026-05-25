import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-28" style={{ background: '#0c0c0f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 'clamp(280px, 50vw, 480px)' }}>
              <img
                src="/images/master-danila.jpg"
                alt="Мастер Даниил"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,12,0.7) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl p-4 flex items-center gap-4"
              style={{ background: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(192,48,74,0.2)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #c0304a, #7a1528)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white">Даниил</div>
                <div className="text-white/50 text-sm">Мастер по тонировке и бронированию</div>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <div className="font-black text-white text-lg" style={{ color: '#c0304a' }}>5+</div>
                <div className="text-white/40 text-xs">лет опыта</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <div className="section-tag">О мастере</div>
            <h2 className="font-black text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Профессиональный мастер <span className="gradient-text">Даниил</span> —<br />
              тонировка и защита кузова
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Занимаюсь тонировкой и бронированием автомобилей уже более 5 лет. За это время
                через мои руки прошли сотни машин — от бюджетных до премиальных.
              </p>
              <p>
                Каждый автомобиль — это личная вещь владельца, и я отношусь к нему с уважением.
                Работаю аккуратно, без спешки, с полным вниманием к деталям.
              </p>
              <p>
                Использую только качественные материалы — тонировочные плёнки, PPF и защитные
                покрытия, которые не пузырятся, не желтеют и держатся годами.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { val: '500+', label: 'авто сделано' },
                { val: '4.7', label: 'рейтинг на Яндекс' },
                { val: '100%', label: 'гарантия' },
              ].map((stat, i) => (
                <div key={i} className="text-center rounded-xl py-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-black text-2xl gradient-text">{stat.val}</div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-8 space-y-3">
              {[
                'Работаю лично — без учеников и помощников',
                'Честные сроки и цены до начала работы',
                'Принимаю авто до 21:00 — удобно после работы',
                'Постоянным клиентам — скидки и приоритетная запись',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(192,48,74,0.15)' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#c0304a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/79052685333?text=Здравствуйте%2C%20Даниил!%20Хочу%20записаться."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Написать Даниилу
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
