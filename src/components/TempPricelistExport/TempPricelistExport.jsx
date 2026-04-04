import { useRef, useState } from 'react';
import { extensionPricingCopy, extensionPricingRows } from '../Services/extensionPricingData';
import styles from './TempPricelistExport.module.css';

const artboard = {
  width: 1600,
  height: 1200,
};

function TempPricelistArtwork({ svgRef }) {
  const cardX = 112;
  const cardY = 286;
  const cardWidth = 1376;
  const cardHeight = 800;
  const innerLeft = cardX + 56;
  const headerY = cardY + 82;
  const labelColCenter = innerLeft + 110;
  const extensionColCenter = innerLeft + 438;
  const correctionColCenter = innerLeft + 816;
  const rowStartY = cardY + 278;
  const rowGap = 102;

  return (
    <svg
      ref={svgRef}
      className={styles.artboard}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${artboard.width} ${artboard.height}`}
      role="img"
      aria-label="Прайс-лист по длине: наращивание и коррекция"
    >
      <defs>
        <linearGradient id="pageBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#17111e" />
          <stop offset="55%" stopColor="#0e0b12" />
          <stop offset="100%" stopColor="#121019" />
        </linearGradient>
        <radialGradient id="pageGlowTop" cx="14%" cy="10%" r="36%">
          <stop offset="0%" stopColor="#e8a598" stopOpacity="0.18" />
          <stop offset="1" stopColor="#e8a598" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pageGlowRight" cx="86%" cy="12%" r="42%">
          <stop offset="0%" stopColor="#c8a4d4" stopOpacity="0.18" />
          <stop offset="1" stopColor="#c8a4d4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="posterCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#35594d" />
          <stop offset="100%" stopColor="#243f36" />
        </linearGradient>
        <linearGradient id="badgeFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8a598" />
          <stop offset="100%" stopColor="#c8a4d4" />
        </linearGradient>
      </defs>

      <rect width={artboard.width} height={artboard.height} fill="url(#pageBg)" />
      <rect width={artboard.width} height={artboard.height} fill="url(#pageGlowTop)" />
      <rect width={artboard.width} height={artboard.height} fill="url(#pageGlowRight)" />

      <text x="112" y="108" fill="#c8a4d4" fontFamily="Space Mono, monospace" fontSize="22" letterSpacing="4.4">
        ЛАК И ТОЧКА
      </text>
      <text x="112" y="194" fill="#f2eef5" fontFamily="Playfair Display, serif" fontSize="108" fontWeight="700">
        Прайс по длине
      </text>
      <text x="112" y="246" fill="rgba(242,238,245,0.72)" fontFamily="DM Sans, sans-serif" fontSize="30">
        Наращивание и коррекция в одной системе
      </text>

      <g transform="translate(1144 88)">
        <rect width="344" height="58" rx="29" fill="rgba(255,255,255,0.05)" stroke="rgba(200,164,212,0.22)" />
        <circle cx="38" cy="29" r="7" fill="url(#badgeFill)" />
        <text x="60" y="37" fill="#f2eef5" fontFamily="Space Mono, monospace" fontSize="21" letterSpacing="1.4">
          {extensionPricingCopy.badge}
        </text>
      </g>

      <g transform={`translate(${cardX} ${cardY})`}>
        <rect width={cardWidth} height={cardHeight} rx="48" fill="url(#posterCardFill)" stroke="rgba(255,255,255,0.12)" />
        <rect
          x="0"
          y="0"
          width={cardWidth}
          height={cardHeight}
          rx="48"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.04)"
        />
      </g>

      <text x={innerLeft} y={headerY} fill="rgba(242,238,245,0.72)" fontFamily="Space Mono, monospace" fontSize="21" letterSpacing="3">
        {extensionPricingCopy.kicker.toUpperCase()}
      </text>
      <text x={innerLeft} y={headerY + 86} fill="#f2eef5" fontFamily="DM Sans, sans-serif" fontSize="68" fontWeight="700">
        {extensionPricingCopy.title}
      </text>
      <g transform={`translate(${innerLeft} ${cardY + 182})`}>
        <rect width="220" height="54" rx="27" fill="rgba(17,28,24,0.28)" stroke="rgba(255,255,255,0.1)" />
        <rect x="276" width="324" height="54" rx="27" fill="rgba(17,28,24,0.28)" stroke="rgba(255,255,255,0.1)" />
        <rect x="654" width="324" height="54" rx="27" fill="rgba(200,164,212,0.14)" stroke="rgba(200,164,212,0.18)" />

        <text x="110" y="35" fill="rgba(242,238,245,0.72)" fontFamily="Space Mono, monospace" fontSize="18" textAnchor="middle" letterSpacing="2.2">
          ДЛИНА
        </text>
        <text x="438" y="35" fill="rgba(242,238,245,0.84)" fontFamily="Space Mono, monospace" fontSize="18" textAnchor="middle" letterSpacing="2.2">
          НАРАЩИВАНИЕ
        </text>
        <text x="816" y="35" fill="#f2eef5" fontFamily="Space Mono, monospace" fontSize="18" textAnchor="middle" letterSpacing="2.2">
          КОРРЕКЦИЯ
        </text>
      </g>

      {extensionPricingRows.map((row, index) => {
        const y = rowStartY + index * rowGap;

        return (
          <g key={row.length}>
            <rect
              x={innerLeft}
              y={y}
              width="1264"
              height="84"
              rx="28"
              fill={index % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)'}
              stroke="rgba(255,255,255,0.08)"
            />
            <text
              x={labelColCenter}
              y={y + 52}
              fill="#f2eef5"
              fontFamily="Space Mono, monospace"
              fontSize="28"
              fontWeight="700"
              textAnchor="middle"
            >
              {row.length}
            </text>
            <text
              x={extensionColCenter}
              y={y + 52}
              fill="#f2eef5"
              fontFamily="Space Mono, monospace"
              fontSize="30"
              fontWeight="700"
              textAnchor="middle"
            >
              {row.extensionPrice}
            </text>
            <text
              x={correctionColCenter}
              y={y + 52}
              fill="#f2eef5"
              fontFamily="Space Mono, monospace"
              fontSize="30"
              fontWeight="700"
              textAnchor="middle"
            >
              {row.correctionPrice}
            </text>
          </g>
        );
      })}

      <line
        x1={innerLeft}
        x2={innerLeft + 1264}
        y1={cardY + 694}
        y2={cardY + 694}
        stroke="rgba(255,255,255,0.08)"
      />

      <text
        x={innerLeft + 1264}
        y={cardY + 748}
        fill="rgba(242,238,245,0.82)"
        fontFamily="Space Mono, monospace"
        fontSize="20"
        textAnchor="end"
        letterSpacing="1.8"
      >
        t.me/dEDussikm
      </text>
      <text
        x={innerLeft + 1264}
        y={cardY + 790}
        fill="rgba(242,238,245,0.52)"
        fontFamily="Space Mono, monospace"
        fontSize="18"
        textAnchor="end"
        letterSpacing="2.4"
      >
        КУШВА · ЛАК И ТОЧКА
      </text>
    </svg>
  );
}

export default function TempPricelistExport() {
  const svgRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownloadJpg() {
    if (!svgRef.current || isDownloading) {
      return;
    }

    setIsDownloading(true);

    try {
      const serializer = new XMLSerializer();
      const rawSvg = serializer.serializeToString(svgRef.current);
      const svgBlob = new Blob([rawSvg], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = artboard.width;
        canvas.height = artboard.height;

        const context = canvas.getContext('2d');

        if (!context) {
          URL.revokeObjectURL(svgUrl);
          setIsDownloading(false);
          return;
        }

        context.fillStyle = '#120f16';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(svgUrl);

            if (!blob) {
              setIsDownloading(false);
              return;
            }

            const jpgUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = jpgUrl;
            link.download = 'pricelist.jpg';
            link.click();
            URL.revokeObjectURL(jpgUrl);
            setIsDownloading(false);
          },
          'image/jpeg',
          0.96,
        );
      };

      image.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        setIsDownloading(false);
      };

      image.src = svgUrl;
    } catch {
      setIsDownloading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.meta}>
            <p className={styles.eyebrow}>Temporary Export</p>
            <h1 className={styles.title}>Временная страница выгрузки прайса</h1>
            <p className={styles.note}>Открой `/pricelist-export.html`, скачай JPG или просто сделай clean screenshot с холста.</p>
          </div>

          <div className={styles.actions}>
            <a className={styles.button} href="/">
              На сайт
            </a>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonPrimary}`}
              onClick={handleDownloadJpg}
            >
              {isDownloading ? 'Готовлю JPG…' : 'Скачать JPG'}
            </button>
          </div>
        </div>

        <div className={styles.stage}>
          <TempPricelistArtwork svgRef={svgRef} />
        </div>
      </div>
    </div>
  );
}
