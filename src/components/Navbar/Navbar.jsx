import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const navItems = [
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'Обо мне' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Написать' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > Math.max(56, window.innerHeight * 0.18));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''} ${
        isMenuOpen ? styles['navbar--open'] : ''
      }`}
    >
      <div className={styles.inner}>
        <div className={styles.shell}>
          <a
            className={styles.brand}
            href="#top"
            aria-label="Лак и Точка"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={styles.brandMark}>✦</span>
            <span className={styles.brandText}>Лак и Точка</span>
          </a>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={isMenuOpen}
            aria-label="Открыть меню"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={styles.nav} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
