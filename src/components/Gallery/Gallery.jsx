import { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import imageOne from '../../assets/images/work (1).jpg';
import imageTwo from '../../assets/images/work (2).jpg';
import imageThree from '../../assets/images/work (3).jpg';
import imageFour from '../../assets/images/work (4).jpg';
import imageFive from '../../assets/images/work (5).jpg';
import imageSix from '../../assets/images/work (6).jpg';
import styles from './Gallery.module.css';

const galleryItems = [
  { src: imageOne, alt: 'Работа Марии Кривец 1', height: 'large' },
  { src: imageTwo, alt: 'Работа Марии Кривец 2', height: 'small' },
  { src: imageThree, alt: 'Работа Марии Кривец 3', height: 'medium' },
  { src: imageFour, alt: 'Работа Марии Кривец 4', height: 'medium' },
  { src: imageFive, alt: 'Работа Марии Кривец 5', height: 'large' },
  { src: imageSix, alt: 'Работа Марии Кривец 6', height: 'small' },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef, { y: 44, stagger: 0.08 });

  return (
    <section id="gallery" ref={sectionRef} className={`section ${styles.gallery}`}>
      <div className={styles.heading}>
        <div className="section__eyebrow" data-animate>
          GALLERY
        </div>
        <h2 className="section__title" data-animate>
          Работы
        </h2>
        <p className="section__lead" data-animate>
          Несколько реальных работ, чтобы сразу почувствовать стиль, плотность и аккуратность.
        </p>
      </div>

      <div className={styles.grid}>
        {galleryItems.map((item) => (
          <article
            key={item.src}
            data-animate
            className={`${styles.card} ${styles[`card--${item.height}`]}`}
          >
            <LazyLoadImage
              src={item.src}
              alt={item.alt}
              effect="blur"
              wrapperClassName={styles.imageWrap}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span>Работа</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
