import { useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import ServiceCard from './ServiceCard/ServiceCard';
import NailLengthCard from './NailLengthCard/NailLengthCard';
import styles from './Services.module.css';

const services = [
  {
    title: 'Маникюр без покрытия',
    price: '200 ₽',
    accent: 'minimal',
  },
  {
    title: 'Маникюр с укреплением',
    price: '850 ₽',
    accent: 'accent',
  },
  {
    title: 'Снятие + маникюр + укрепляющий лак',
    price: '250 ₽',
    accent: 'soft',
  },
  {
    title: 'Стилет',
    price: '1500 ₽',
    accent: 'minimal',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef, { y: 56, stagger: 0.1 });

  return (
    <section id="services" ref={sectionRef} className={`section ${styles.services}`}>
      <div className={styles.heading}>
        <div className="section__eyebrow" data-animate>
          PRICE
        </div>
        <h2 className="section__title" data-animate>
          Прайс
        </h2>
        <p className="section__lead" data-animate>
          Дизайн — в подарок к любой услуге 💖
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            price={service.price}
            accent={service.accent}
            index={index}
          />
        ))}
        <NailLengthCard />
      </div>
    </section>
  );
}
