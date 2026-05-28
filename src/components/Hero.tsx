import { useEffect, useRef, useState } from 'react';
import carVideo from '/0528 (1)(1).mp4';

function getWorkingStatus() {
  const now = new Date();
  const hour = now.getHours();
  const openHour = 9;
  const closeHour = 21;
  if (hour >= openHour && hour < closeHour) {
    return { open: true, text: `Открыто сейчас · до ${closeHour}:00` };
  } else {
    const nextOpen = hour >= closeHour ? openHour : openHour;
    return { open: false, text: `Закрыто · открытие в ${nextOpen}:00` };
  }
}

export default function Hero() {
  const counterRefs = useRef<HTMLSpanElement[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState(getWorkingStatus());

  useEffect(() => {
    const interval = setInterval(() => setStatus(getWorkingStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  useEffect(() => {
    const counters = [
      { el: counterRefs.current[0], target: 84, suffix: '' },
      { el: counterRefs.current[1], target: 4, suffix: '.7' },
      { el: counterRefs.current[2], target: 5, suffix: '+' },
    ];

    counters.forEach(({ el, target, suffix }) => {
      if (!el) return;
      let start = 0;
      const duration = 1800;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-20 md:items-center md:pb-0 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >

      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(192,48,74,0.4), transparent)' }} />

      {/* Video Background */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={carVideo} type="video/mp4" />
        </video>
        {/* Gray darkening overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Edge gradients to blend with background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, #0a0a0a 0%, transparent 15%),
              linear-gradient(to bottom, #0a0a0a 0%, #0a0a0a 8%, rgba(10,10,10,0.95) 15%, rgba(10,10,10,0.75) 25%, rgba(10,10,10,0.45) 35%, transparent 45%),
              linear-gradient(to top, #0a0a0a 0%, #0a0a0a 8%, rgba(10,10,10,0.95) 15%, rgba(10,10,10,0.75) 25%, rgba(10,10,10,0.45) 35%, transparent 45%)
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-5">
            <span className="section-tag">
              <span className={`w-2 h-2 rounded-full inline-block ${status.open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              {status.text}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.08 }}
          >
            Тонировка и<br />
            <span className="gradient-text">бронирование</span><br />
            вашего авто
          </h1>

          <p
            className="text-white/60 mb-8 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '480px' }}
          >
            Профессиональная защита кузова, тонирование и детейлинг.
            Работаем аккуратно, даём гарантию. Запись онлайн — без очереди.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://wa.me/79052685333?text=Здравствуйте!%20Хочу%20записаться%20на%20услугу"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Записаться в WhatsApp
            </a>
            <a
              href="tel:+79052685333"
              className="btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
              </svg>
              Позвонить
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pb-10">
            <div className="flex flex-col">
              <span
                className="font-black text-white"
                style={{ fontSize: '2rem' }}
                ref={(el) => { if (el) counterRefs.current[0] = el; }}
              >
                0
              </span>
              <span className="text-white/50 text-sm">отзывов на Яндекс</span>
            </div>
            <div className="w-px h-12 self-center" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="flex flex-col">
              <span
                className="font-black text-white"
                style={{ fontSize: '2rem' }}
                ref={(el) => { if (el) counterRefs.current[1] = el; }}
              >
                0
              </span>
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-white/50 text-sm">рейтинг</span>
              </div>
            </div>
            <div className="w-px h-12 self-center" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div className="flex flex-col">
              <span
                className="font-black text-white"
                style={{ fontSize: '2rem' }}
                ref={(el) => { if (el) counterRefs.current[2] = el; }}
              >
                0
              </span>
              <span className="text-white/50 text-sm">лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
