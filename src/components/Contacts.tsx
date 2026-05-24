import { useEffect, useRef } from 'react';

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
        </svg>
      ),
      label: 'Телефон',
      value: '+7 (905) 268-53-33',
      href: 'tel:+79052685333',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Адрес',
      value: 'Железнодорожная ул., 85А',
      href: 'https://yandex.ru/maps/?text=Железнодорожная+ул.+85А',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Режим работы',
      value: 'Ежедневно до 21:00',
      href: null,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: 'Написать сейчас',
      href: 'https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться',
    },
  ];

  return (
    <section id="contacts" ref={sectionRef} className="py-20 md:py-28" style={{ background: '#0c0c0f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-tag mx-auto w-fit">Контакты</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Приезжайте или <span className="gradient-text">напишите</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto text-sm">
            Мы работаем ежедневно до 21:00. Просто напишите в WhatsApp — ответим быстро.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-3 reveal-left">
            {contactItems.map((item, i) => (
              <div key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-400/20"
                      style={{ background: 'rgba(192,48,74,0.08)', color: '#c0304a' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">{item.label}</div>
                      <div className="text-white font-semibold text-sm mt-0.5 group-hover:text-blue-400 transition-colors">{item.value}</div>
                    </div>
                    <svg className="ml-auto text-white/20 group-hover:text-blue-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(192,48,74,0.08)', color: '#c0304a' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs">{item.label}</div>
                      <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                    </div>
                    {(() => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;

  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <span
      className="ml-auto px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1"
      style={{
        background: isOpen
          ? 'rgba(74,222,128,0.15)'
          : 'rgba(248,113,113,0.15)',
        color: isOpen ? '#4ade80' : '#f87171'
      }}
    >
      <span
        className={`w-2 h-2 rounded-full inline-block ${
          isOpen ? 'bg-green-400' : 'bg-red-400'
        }`}
      />
      {isOpen
        ? `Открыто · до ${closeHour}:00`
        : `Закрыто · открытие в ${openHour}:00`}
    </span>
  );
})()}
                      
                  </div>
                )}
              </div>
            ))}

            {/* CTA Block */}
            <div
              className="rounded-2xl p-6 mt-4"
              style={{ background: 'linear-gradient(135deg, rgba(192,48,74,0.08), rgba(122,21,40,0.05))', border: '1px solid rgba(192,48,74,0.15)' }}
            >
              <h3 className="font-bold text-white mb-2">Готовы записаться?</h3>
              <p className="text-white/50 text-sm mb-4">Напишите нам — ответим в течение нескольких минут и выберем удобное время.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+79052685333"
                  className="btn-secondary justify-center"
                >
                  Позвонить
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal-right">
            <div className="rounded-2xl overflow-hidden" style={{ height: '460px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a883cb945e902053c4f5dda7431da59365c80a163f486546edc013cf18b5fca&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
                title="Карта"
              />
            </div>
            <div
              className="mt-3 p-3 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0304a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-white/60 text-sm">Железнодорожная ул., 85А — удобный въезд с улицы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
