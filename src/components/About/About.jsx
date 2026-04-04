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
    text: 'От нюда до самого жёсткого — всё реально.',
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
            Привет, я Маша
          </h2>
          <p className="section__lead" data-animate>
            Делаю ногти у себя дома — без пафоса, зато с душой и нормальным результатом.
          </p>
          <p className={styles.text} data-animate>
            Не важно, хочешь тихий нюд или что-то дерзкое и модное — придумаем вместе.
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
