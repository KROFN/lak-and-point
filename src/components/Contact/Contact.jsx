import { useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef, { y: 48, stagger: 0.12 });

  return (
    <section id="contact" ref={sectionRef} className={`section ${styles.contact}`}>
      <div className={styles.panel}>
        <div className={styles.overlay} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.copy}>
          <div className="section__eyebrow" data-animate>
            CONTACT
          </div>
          <h2 className="section__title" data-animate>
            Запишись
          </h2>
          <p className="section__lead" data-animate>
            Пиши куда удобно — отвечу быстро.
          </p>

          <div className={styles.actions} data-animate>
            <a
              className="button button--primary"
              href="https://t.me/the6_7lakandtochka0"
              target="_blank"
              rel="noreferrer"
            >
              Telegram ↗
            </a>
            <a
              className="button button--ghost"
              href="https://vk.com/merie_nain"
              target="_blank"
              rel="noreferrer"
            >
              ВКонтакте ↗
            </a>
          </div>
        </div>

        <footer className={styles.footer} data-animate>
          <p>Лак и Точка · Мария Кривец</p>
          <p>Кушва, Свердловская область</p>
        </footer>
      </div>
    </section>
  );
}
