export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10" style={{ background: '#07070a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c0304a, #7a1528)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="16" r="1" />
                <circle cx="20" cy="16" r="1" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Тонировка Авто бронирование</div>
              <div className="text-white/35 text-xs">Железнодорожная ул., 85А</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Услуги', 'Работы', 'О нас', 'Отзывы', 'Контакты'].map((link) => (
              <a
                key={link}
                href={`#${link === 'Услуги' ? 'services' : link === 'Работы' ? 'gallery' : link === 'О нас' ? 'about' : link === 'Отзывы' ? 'reviews' : 'contacts'}`}
                className="text-white/35 text-sm hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+79052685333"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              +7 (905) 268-53-33
            </a>
            <a
              href="https://wa.me/79052685333"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ background: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="section-divider my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-white/25 text-xs">
          <span>© {year} Тонировка Авто бронирование. Все права защищены.</span>
          <span>Работаем ежедневно до 21:00 · Железнодорожная ул., 85А</span>
        </div>
      </div>
    </footer>
  );
}
