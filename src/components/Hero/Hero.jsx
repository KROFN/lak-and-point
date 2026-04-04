import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const headlineRows = ['НОГОТОЧКИ', 'ПО-НАСТОЯЩЕМУ', 'ХОРОШО'];

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!heroRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .from('[data-hero-badge]', {
          autoAlpha: 0,
          y: 22,
          duration: 0.55,
        })
        .from(
          '[data-hero-line]',
          {
            autoAlpha: 0,
            yPercent: 100,
            duration: 0.9,
            stagger: 0.14,
          },
          '-=0.2',
        )
        .from(
          '[data-hero-copy]',
          {
            autoAlpha: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.12,
          },
          '-=0.85',
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section id="top" ref={heroRef} className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className="section__eyebrow" data-hero-badge>
            ✦ Кушва · Запись открыта
          </div>

          <h1 className={styles.title}>
            {headlineRows.map((line, index) => (
              <span
                key={line}
                data-hero-line
                className={`${styles.line} ${index === 1 ? styles.lineAccent : ''} ${
                  index === 2 ? styles.lineOutline : ''
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.subtitle} data-hero-copy>
            Маникюр, наращивание и дизайн —<br />
            без спешки, с атмосферой и честным результатом.
          </p>

          <div className={styles.actions} data-hero-copy>
            <a className="button button--primary" href="#services">
              Смотреть прайс →
            </a>
            <a
              className="button button--ghost"
              href="https://t.me/dEDussikm"
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
