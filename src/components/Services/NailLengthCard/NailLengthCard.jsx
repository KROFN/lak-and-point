import { extensionPricingCopy, extensionPricingRows } from '../extensionPricingData';
import styles from './NailLengthCard.module.css';

export default function NailLengthCard() {
  return (
    <article data-animate className={styles.card}>
      <div className={styles.texture} aria-hidden="true" />
      <div className={styles.marks} aria-hidden="true">
        <span className={`${styles.mark} ${styles.markFarLeftTop}`}>+</span>
        <span className={`${styles.mark} ${styles.markLeftTop}`}>✦</span>
        <span className={`${styles.mark} ${styles.markLeftMid}`}>+</span>
        <span className={`${styles.mark} ${styles.markUpperCenter}`}>✦</span>
        <span className={`${styles.mark} ${styles.markCenterTop}`}>♡</span>
        <span className={`${styles.mark} ${styles.markCenterRight}`}>✦</span>
        <span className={`${styles.mark} ${styles.markTopRight}`}>+</span>
        <span className={`${styles.mark} ${styles.markNearBadge}`}>♡</span>
        <span className={`${styles.mark} ${styles.markUpperRight}`}>✦</span>
        <span className={`${styles.mark} ${styles.markMidLeft}`}>+</span>
        <span className={`${styles.mark} ${styles.markLowerCenter}`}>+</span>
        <span className={`${styles.mark} ${styles.markMidRight}`}>♡</span>
        <span className={`${styles.mark} ${styles.markBottomLeft}`}>✦</span>
        <span className={`${styles.mark} ${styles.markBottomRight}`}>+</span>
      </div>

      <div className={styles.header}>
        <div className={styles.headline}>
          <p className={styles.kicker}>{extensionPricingCopy.kicker}</p>
          <h3 className={styles.title}>
            <span className={styles.titleLine}>Наращивание</span>
            <span className={`${styles.titleLineSecondary} ${styles.titleAccent}`}>
              <span className={styles.titleConnector}>и</span>
              <span>коррекция</span>
            </span>
          </h3>
        </div>
        <p className={styles.badge}>{extensionPricingCopy.badge}</p>
      </div>

      <div className={styles.tableShell}>
        <div className={styles.matrix} role="table" aria-label="Цены на наращивание и коррекцию по длине">
          <div className={styles.matrixHead} role="row">
            <span className={styles.headCell}>Длина</span>
            <span className={styles.headCell}>Наращивание</span>
            <span className={`${styles.headCell} ${styles.headCellCorrection}`}>Коррекция</span>
          </div>

          <div className={styles.rows}>
            {extensionPricingRows.map((row) => (
              <div key={row.length} className={styles.row} role="row">
                <div className={styles.lengthCell}>{row.length}</div>

                <div className={styles.priceCell}>
                  <span className={styles.mobileLabel}>Наращивание</span>
                  <strong>{row.extensionPrice}</strong>
                </div>

                <div className={`${styles.priceCell} ${styles.priceCellCorrection}`}>
                  <span className={styles.mobileLabel}>Коррекция</span>
                  <strong>{row.correctionPrice}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
