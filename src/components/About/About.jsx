import { useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './About.module.css';

const strengths = [
  {
    title: 'Безупречный результат',
    text: 'Делаю аккуратно и без спешки.',
  },
  {
    title: 'Любой дизайн',
    text: 'От нюда до стилетов — сделаем то, что тебе правда хочется.',
  },
  {
    title: 'Своя атмосфера',
    text: 'Домашняя обстановка, честный разговор, никакого напряжения.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section id="about" ref={sectionRef} className={`section ${styles.about}`}>
      <div className={styles.layout}>
        <div className={styles.visual} data-animate aria-hidden="true">
          <div className={styles.symbol}>✶</div>
          <div className={styles.texture}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={styles.copy}>
          <div className="section__eyebrow" data-animate>
            ABOUT
          </div>
          <h2 className="section__title" data-animate>
            Привет,
            <br />
            я Маша
          </h2>
          <p className="section__lead" data-animate>
            Делаю ногти дома, спокойно и аккуратно, чтобы тебе правда нравилось.
          </p>
          <p className={styles.text} data-animate>
            Хочешь нюд, классику или что-то поострее, придумаем вместе.
          </p>

          <div className={styles.features}>
            {strengths.map((item) => (
              <article key={item.title} className={styles.feature} data-animate>
                <span className={styles.featureMark}>✦</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
