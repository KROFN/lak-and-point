import styles from './NailLengthCard.module.css';

const priceSteps = [
  { length: '3 мм', price: '950 ₽' },
  { length: '4–5 мм', price: '1 100 ₽' },
  { length: '6–10 мм', price: '1 200 ₽' },
  { length: '11–20 мм', price: '1 300 ₽' },
];

const diagramSteps = [
  { label: '3 мм', x: 26, width: 66, height: 116, opacity: 0.68 },
  { label: '4–5 мм', x: 120, width: 72, height: 136, opacity: 0.76 },
  { label: '6–10 мм', x: 224, width: 80, height: 164, opacity: 0.84 },
  { label: '11–20 мм', x: 346, width: 90, height: 196, opacity: 0.95 },
];

function LengthDiagram() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 -28 470 308"
      role="img"
      aria-label="Схема длины ногтей по миллиметрам"
    >
      <defs>
        <linearGradient id="nail-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c8a4d4" />
          <stop offset="100%" stopColor="#e8a598" />
        </linearGradient>
      </defs>

      <rect x="8" y="228" width="438" height="20" rx="10" fill="rgba(242, 238, 245, 0.05)" />

      {diagramSteps.map((item) => {
        const topY = 214 - item.height;
        const centerX = item.x + item.width / 2;

        return (
          <g key={item.label}>
            <path
              d={`M ${item.x + 2} 214 L ${item.x + 2} ${topY + 44} C ${item.x + 2} ${topY + 16}, ${
                item.x + 16
              } ${topY}, ${centerX} ${topY} C ${item.x + item.width - 16} ${topY}, ${
                item.x + item.width - 2
              } ${topY + 16}, ${item.x + item.width - 2} ${topY + 44} L ${
                item.x + item.width - 2
              } 190 C ${item.x + item.width - 12} 210, ${centerX + 16} 226, ${centerX} 232 C ${
                centerX - 18
              } 226, ${item.x + 12} 210, ${item.x + 2} 190 Z`}
              fill="url(#nail-fill)"
              opacity={item.opacity}
            />
            <rect
              x={item.x + 12}
              y={topY + 18}
              width={item.width - 24}
              height={Math.max(item.height - 46, 66)}
              rx={(item.width - 24) / 2}
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.08)"
            />
            <line
              x1={centerX}
              y1={topY - 18}
              x2={centerX}
              y2={topY - 2}
              stroke="rgba(242, 238, 245, 0.22)"
              strokeDasharray="3 4"
            />
            <text x={centerX} y={topY - 28} textAnchor="middle" className={styles.diagramLabel}>
              {item.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function NailLengthCard() {
  return (
    <article data-animate className={styles.card}>
      <div className={styles.texture} aria-hidden="true" />

      <div className={styles.topbar}>
        <p className={styles.kicker}>Наращивание</p>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h3 className={styles.title}>Длина под настроение, форму руки и твой комфорт.</h3>
          <p className={styles.description}>
            От аккуратной короткой базы до заметной длины. Форму и посадку подбираем вместе,
            чтобы ногти выглядели сильно, а не случайно.
          </p>
          <LengthDiagram />
        </div>

        <div className={styles.side}>
          <p className={styles.sideLabel}>Длины и цены</p>
          <div className={styles.prices}>
            {priceSteps.map((step) => (
              <div key={step.length} className={styles.row}>
                <span>{step.length}</span>
                <strong>{step.price}</strong>
              </div>
            ))}
          </div>
          <p className={styles.note}>Если сомневаешься по длине, решим на месте по руке и образу.</p>
        </div>
      </div>
    </article>
  );
}
