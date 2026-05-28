import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Алексей М.',
    date: '2 месяца назад',
    rating: 5,
    text: 'Делал тонировку на Kia Optima. Даниил сделал всё чисто и аккуратно, без пузырей и полос. Видно что человек любит своё дело. Уже второй раз обращаюсь — первый раз делал бронирование фар. Рекомендую без сомнений!',
    service: 'Тонировка авто',
  },
  {
    name: 'Наталья В.',
    date: '3 месяца назад',
    rating: 5,
    text: 'Наконец-то нашла нормального мастера! Оклеивала зоны риска на Hyundai. Работа выполнена очень аккуратно, плёнка легла ровно. Цена адекватная, без навязывания лишнего. Буду постоянным клиентом.',
    service: 'Оклейка зон риска',
  },
  {
    name: 'Дмитрий К.',
    date: '4 месяца назад',
    rating: 5,
    text: 'Делал полную оклейку матовой плёнкой. Результат превзошёл ожидания — машина смотрится шикарно. Мастер объяснил всё доступно, предложил варианты. Работал без спешки, всё сделал за день.',
    service: 'Матовые плёнки',
  },
  {
    name: 'Игорь С.',
    date: '5 месяцев назад',
    rating: 5,
    text: 'Делал химчистку салона. Честно, не ожидал такого результата — машина как новая. Сиденья, потолок, торпеда — всё чистое. Работают до 21:00, что очень удобно после работы. Цена более чем разумная.',
    service: 'Химчистка салона',
  },
  {
    name: 'Андрей Т.',
    date: '6 месяцев назад',
    rating: 4,
    text: 'Хорошая мастерская. Делал тонировку в круг. Работа аккуратная, плёнка легла без пузырей. Чуть дольше ждал чем планировал, но результатом доволен. Цена честная. Рекомендую.',
    service: 'Тонировка авто',
  },
  {
    name: 'Светлана Р.',
    date: '7 месяцев назад',
    rating: 5,
    text: 'Отличный мастер! Бронировала фары на Toyota — теперь не переживаю за камни и ультрафиолет. Даниил всё объяснил, показал материалы, ответил на вопросы. Работает аккуратно и с душой. Советую!',
    service: 'Бронирование фар',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= count ? '#f59e0b' : '#374151'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto rotate on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-20 md:py-28 premium-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-tag mx-auto w-fit">Отзывы клиентов</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            <span className="gradient-text">84 отзыва</span> на Яндекс Картах
          </h2>

          {/* Yandex rating badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white font-black text-xs"
              style={{ background: '#fc3f1d' }}
            >
              Я
            </div>
            <span className="text-white font-semibold text-sm">Яндекс Карты</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <svg width="13" height="13" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="half2">
                    <stop offset="70%" stopColor="#f59e0b" />
                    <stop offset="70%" stopColor="#374151" />
                  </linearGradient>
                </defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half2)" />
              </svg>
            </div>
            <span className="font-bold text-white text-sm">4.7</span>
            <span className="text-white/40 text-xs">· 84 оценки</span>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} testimonial-card`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 55) % 360},60%,35%), hsl(${(i * 55 + 60) % 360},60%,25%))`,
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="text-white/35 text-xs">{review.date}</div>
                  </div>
                </div>
                <div
                  className="w-6 h-6 rounded flex items-center justify-center text-white font-black text-xs flex-shrink-0"
                  style={{ background: '#fc3f1d' }}
                >
                  Я
                </div>
              </div>

              <Stars count={review.rating} />

              <p className="text-white/60 text-sm leading-relaxed mt-3">{review.text}</p>

              <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="service-badge">{review.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div className="testimonial-card reveal">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(activeIdx * 55) % 360},60%,35%), hsl(${(activeIdx * 55 + 60) % 360},60%,25%))`,
                    }}
                  >
                    {reviews[activeIdx].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{reviews[activeIdx].name}</div>
                    <div className="text-white/35 text-xs">{reviews[activeIdx].date}</div>
                  </div>
                </div>
                <div
                  className="w-6 h-6 rounded flex items-center justify-center text-white font-black text-xs"
                  style={{ background: '#fc3f1d' }}
                >
                  Я
                </div>
              </div>
              <Stars count={reviews[activeIdx].rating} />
              <p className="text-white/60 text-sm leading-relaxed mt-3">{reviews[activeIdx].text}</p>
              <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="service-badge">{reviews[activeIdx].service}</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? '24px' : '8px',
                  height: '8px',
                  background: i === activeIdx ? '#c0304a' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-white/40 text-sm mb-4">Убедились в качестве? Запишитесь прямо сейчас</p>
          <a
            href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex animate-pulse-glow"
          >
            Записаться сейчас →
          </a>
        </div>
      </div>
    </section>
  );
}
