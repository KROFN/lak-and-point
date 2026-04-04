import styles from './ServiceCard.module.css';

export default function ServiceCard({
  title,
  price,
  accent = 'minimal',
  index = 0,
}) {
  return (
    <article
      data-animate
      className={`${styles.card} ${styles[`card--${accent}`] ?? ''}`.trim()}
    >
      <div className={styles.glow} />
      <p className={styles.label}>Услуга</p>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.footer}>
        <p className={styles.price}>{price}</p>
        <span className={styles.index}>0{index + 1}</span>
      </div>
    </article>
  );
}
