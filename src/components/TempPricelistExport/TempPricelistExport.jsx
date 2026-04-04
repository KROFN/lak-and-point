import { useRef, useState } from 'react';
import { extensionPricingCopy, extensionPricingRows } from '../Services/extensionPricingData';
import styles from './TempPricelistExport.module.css';

const telegramUrl = 'https://t.me/the6_7lakandtochka0';

const services = [
  {
    title: 'Маникюр без покрытия',
    titleLines: ['Маникюр без', 'покрытия'],
    price: '200 ₽',
    accent: 'minimal',
  },
  {
    title: 'Маникюр с укреплением',
    titleLines: ['Маникюр с', 'укреплением'],
    price: '850 ₽',
    accent: 'accent',
  },
  {
    title: 'Снятие + маникюр + укрепляющий лак',
    titleLines: ['Снятие + маникюр', '+ укрепляющий лак'],
    price: '250 ₽',
    accent: 'soft',
  },
  {
    title: 'Стилет',
    titleLines: ['Стилет'],
    price: '1500 ₽',
    accent: 'minimal',
  },
];

const artboard = {
  width: 1200,
  height: 1600,
};

const posterMarks = [
  { char: '✦', x: 28, y: 46, fill: 'rgba(242,238,245,0.10)', size: 18 },
  { char: '+', x: 102, y: 74, fill: 'rgba(232,165,152,0.10)', size: 17 },
  { char: '♡', x: 484, y: 54, fill: 'rgba(200,164,212,0.10)', size: 16 },
  { char: '✦', x: 712, y: 98, fill: 'rgba(242,238,245,0.08)', size: 16 },
  { char: '+', x: 910, y: 56, fill: 'rgba(242,238,245,0.10)', size: 22 },
  { char: '✦', x: 864, y: 126, fill: 'rgba(232,165,152,0.09)', size: 16 },
];

function ServicePosterCard({ service, index, x, y, width, height }) {
  const accentFill =
    service.accent === 'accent'
      ? 'url(#serviceAccentGlow)'
      : service.accent === 'soft'
        ? 'url(#serviceWarmGlow)'
        : 'url(#serviceMinimalGlow)';
  const titleLineHeight = 28;
  const titleAreaTop = 62;
  const titleAreaBottom = height - 72;
  const titleAreaCenter = (titleAreaTop + titleAreaBottom) / 2;
  const titleBlockHeight = (service.titleLines.length - 1) * titleLineHeight;
  const titleStartY = titleAreaCenter - titleBlockHeight / 2;

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx="28" fill="#241f29" stroke="rgba(200,164,212,0.22)" />
      <rect width={width} height={height} rx="28" fill={accentFill} opacity="0.88" />
      <rect width={width} height={height} rx="28" fill="rgba(255,255,255,0.025)" />

      <text
        x="28"
        y="26"
        fill="rgba(200,164,212,0.72)"
        fontFamily="Space Mono, monospace"
        fontSize="11"
        letterSpacing="2.2"
      >
        УСЛУГА
      </text>

      {service.titleLines.map((line, lineIndex) => (
        <text
          key={`${service.title}-${line}`}
          x="28"
          y={titleStartY + lineIndex * titleLineHeight}
          fill="#f2eef5"
          fontFamily="DM Sans, sans-serif"
          fontSize="23"
          fontWeight="700"
        >
          {line}
        </text>
      ))}

      <line x1="28" x2={width - 28} y1={height - 48} y2={height - 48} stroke="rgba(255,255,255,0.08)" />
      <text
        x="28"
        y={height - 16}
        fill="#c8a4d4"
        fontFamily="Space Mono, monospace"
        fontSize="22"
        letterSpacing="1"
      >
        {service.price}
      </text>
      <text
        x={width - 22}
        y={height - 16}
        fill="rgba(242,238,245,0.22)"
        fontFamily="Space Mono, monospace"
        fontSize="13"
        textAnchor="end"
        letterSpacing="2.6"
      >
        0{index + 1}
      </text>
    </g>
  );
}

function TempPricelistArtwork({ svgRef }) {
  const frameX = 72;
  const frameWidth = artboard.width - frameX * 2;
  const serviceGap = 20;
  const serviceCardWidth = (frameWidth - serviceGap) / 2;
  const serviceCardHeight = 160;
  const serviceStartY = 252;
  const serviceSecondRowY = serviceStartY + serviceCardHeight + 18;

  const largeCardY = 624;
  const largeCardHeight = 786;
  const largeCardPadding = 42;

  const tableShellX = frameX + largeCardPadding;
  const tableShellY = largeCardY + 244;
  const tableShellWidth = frameWidth - largeCardPadding * 2;
  const tableShellHeight = 520;

  const tableInset = 16;
  const cellGap = 12;
  const rowGap = 12;
  const headHeight = 52;
  const rowHeight = 96;
  const labelColWidth = 254;
  const valueColWidth = (tableShellWidth - tableInset * 2 - labelColWidth - cellGap * 2) / 2;

  const headX = tableShellX + tableInset;
  const headY = tableShellY + tableInset;
  const firstRowY = headY + headHeight + rowGap;

  return (
    <svg
      ref={svgRef}
      className={styles.artboard}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${artboard.width} ${artboard.height}`}
      role="img"
      aria-label="Прайс-лист в формате 3 на 4"
    >
      <defs>
        <linearGradient id="pageBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#17111e" />
          <stop offset="55%" stopColor="#0f0b13" />
          <stop offset="100%" stopColor="#14111a" />
        </linearGradient>
        <radialGradient id="pageGlowTop" cx="14%" cy="10%" r="36%">
          <stop offset="0%" stopColor="#e8a598" stopOpacity="0.18" />
          <stop offset="1" stopColor="#e8a598" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pageGlowRight" cx="84%" cy="12%" r="42%">
          <stop offset="0%" stopColor="#c8a4d4" stopOpacity="0.18" />
          <stop offset="1" stopColor="#c8a4d4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pageGlowBottom" cx="50%" cy="100%" r="48%">
          <stop offset="0%" stopColor="#9b6fa8" stopOpacity="0.18" />
          <stop offset="1" stopColor="#9b6fa8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="serviceAccentGlow" cx="100%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#c8a4d4" stopOpacity="0.22" />
          <stop offset="1" stopColor="#c8a4d4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="serviceWarmGlow" cx="0%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#e8a598" stopOpacity="0.2" />
          <stop offset="1" stopColor="#e8a598" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="serviceMinimalGlow" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="greenCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#43344d" />
          <stop offset="58%" stopColor="#33273c" />
          <stop offset="100%" stopColor="#271d2f" />
        </linearGradient>
        <linearGradient id="chipFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
        <linearGradient id="titleAccentFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(232,165,152,0.18)" />
          <stop offset="100%" stopColor="rgba(200,164,212,0.34)" />
        </linearGradient>
        <linearGradient id="tableShellFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(29,21,36,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
        </linearGradient>
        <linearGradient id="headLengthFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(57,44,68,0.72)" />
          <stop offset="100%" stopColor="rgba(44,34,53,0.64)" />
        </linearGradient>
        <linearGradient id="headExtensionFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(68,52,82,0.76)" />
          <stop offset="100%" stopColor="rgba(54,41,66,0.7)" />
        </linearGradient>
        <linearGradient id="headCorrectionFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(91,71,107,0.8)" />
          <stop offset="100%" stopColor="rgba(73,57,88,0.72)" />
        </linearGradient>
        <linearGradient id="lengthCellFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(55,42,67,0.8)" />
          <stop offset="100%" stopColor="rgba(44,34,54,0.74)" />
        </linearGradient>
        <linearGradient id="extensionCellFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(66,50,80,0.8)" />
          <stop offset="100%" stopColor="rgba(52,40,64,0.74)" />
        </linearGradient>
        <linearGradient id="correctionCellFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88,69,104,0.82)" />
          <stop offset="100%" stopColor="rgba(69,54,84,0.74)" />
        </linearGradient>
      </defs>

      <rect width={artboard.width} height={artboard.height} fill="url(#pageBg)" />
      <rect width={artboard.width} height={artboard.height} fill="url(#pageGlowTop)" />
      <rect width={artboard.width} height={artboard.height} fill="url(#pageGlowRight)" />
      <rect width={artboard.width} height={artboard.height} fill="url(#pageGlowBottom)" />

      <text x="72" y="86" fill="#c8a4d4" fontFamily="Space Mono, monospace" fontSize="18" letterSpacing="4">
        PRICE
      </text>
      <text x="72" y="176" fill="#f2eef5" fontFamily="Playfair Display, serif" fontSize="88" fontWeight="700">
        Прайс
      </text>
      <text x="72" y="222" fill="rgba(242,238,245,0.72)" fontFamily="DM Sans, sans-serif" fontSize="27">
        Дизайн — в подарок 💖
      </text>

      <ServicePosterCard service={services[0]} index={0} x={72} y={serviceStartY} width={serviceCardWidth} height={serviceCardHeight} />
      <ServicePosterCard service={services[1]} index={1} x={72 + serviceCardWidth + serviceGap} y={serviceStartY} width={serviceCardWidth} height={serviceCardHeight} />
      <ServicePosterCard service={services[2]} index={2} x={72} y={serviceSecondRowY} width={serviceCardWidth} height={serviceCardHeight} />
      <ServicePosterCard service={services[3]} index={3} x={72 + serviceCardWidth + serviceGap} y={serviceSecondRowY} width={serviceCardWidth} height={serviceCardHeight} />

      <g transform={`translate(${frameX} ${largeCardY})`}>
        <rect width={frameWidth} height={largeCardHeight} rx="44" fill="url(#greenCardFill)" stroke="rgba(255,255,255,0.1)" />
        <rect width={frameWidth} height={largeCardHeight} rx="44" fill="rgba(255,255,255,0.02)" />

        <g opacity="0.44">
          {posterMarks.map((mark) => (
            <text
              key={`${mark.char}-${mark.x}-${mark.y}`}
              x={mark.x}
              y={mark.y}
              fill={mark.fill}
              fontFamily="Space Mono, monospace"
              fontSize={mark.size}
            >
              {mark.char}
            </text>
          ))}
        </g>
      </g>

      <text
        x={frameX + largeCardPadding}
        y={largeCardY + 64}
        fill="rgba(242,238,245,0.72)"
        fontFamily="Space Mono, monospace"
        fontSize="16"
        letterSpacing="2.8"
      >
        {extensionPricingCopy.kicker.toUpperCase()}
      </text>
      <text
        x={frameX + largeCardPadding}
        y={largeCardY + 136}
        fill="#f2eef5"
        fontFamily="DM Sans, sans-serif"
        fontSize="62"
        fontWeight="700"
      >
        Наращивание
      </text>

      <g transform={`translate(${frameX + largeCardPadding - 4} ${largeCardY + 148})`}>
        <rect width="356" height="54" rx="27" fill="url(#titleAccentFill)" stroke="rgba(255,255,255,0.08)" />
        <text x="24" y="38" fill="#f9f3ff" fontFamily="DM Sans, sans-serif" fontSize="52" fontWeight="700">
          и коррекция
        </text>
      </g>

      <g transform={`translate(${frameX + frameWidth - 302} ${largeCardY + 34})`}>
        <rect width="230" height="52" rx="26" fill="url(#chipFill)" stroke="rgba(255,255,255,0.14)" />
        <text x="115" y="34" fill="#f2eef5" fontFamily="Space Mono, monospace" fontSize="14" textAnchor="middle" letterSpacing="1.2">
          {extensionPricingCopy.badge.toUpperCase()}
        </text>
      </g>

      <line
        x1={frameX + largeCardPadding}
        x2={frameX + frameWidth - largeCardPadding}
        y1={largeCardY + 220}
        y2={largeCardY + 220}
        stroke="rgba(255,255,255,0.08)"
      />

      <g transform={`translate(${tableShellX} ${tableShellY})`}>
        <rect width={tableShellWidth} height={tableShellHeight} rx="30" fill="url(#tableShellFill)" stroke="rgba(255,255,255,0.08)" />
        <rect x={tableShellWidth * 0.66} y="0" width={tableShellWidth * 0.34} height={tableShellHeight} rx="30" fill="rgba(216,192,224,0.03)" />
      </g>

      <g transform={`translate(${headX} ${headY})`}>
        <rect width={labelColWidth} height={headHeight} rx="25" fill="url(#headLengthFill)" stroke="rgba(255,255,255,0.08)" />
        <rect x={labelColWidth + cellGap} width={valueColWidth} height={headHeight} rx="25" fill="url(#headExtensionFill)" stroke="rgba(255,255,255,0.08)" />
        <rect x={labelColWidth + valueColWidth + cellGap * 2} width={valueColWidth} height={headHeight} rx="25" fill="url(#headCorrectionFill)" stroke="rgba(217,191,226,0.11)" />

        <text x="24" y="31" fill="rgba(242,238,245,0.66)" fontFamily="Space Mono, monospace" fontSize="15" letterSpacing="2">
          ДЛИНА
        </text>
        <text x={labelColWidth + cellGap + 24} y="31" fill="rgba(242,238,245,0.72)" fontFamily="Space Mono, monospace" fontSize="15" letterSpacing="2">
          НАРАЩИВАНИЕ
        </text>
        <text
          x={labelColWidth + valueColWidth + cellGap * 2 + 24}
          y="31"
          fill="rgba(242,238,245,0.82)"
          fontFamily="Space Mono, monospace"
          fontSize="15"
          letterSpacing="2"
        >
          КОРРЕКЦИЯ
        </text>
      </g>

      {extensionPricingRows.map((row, index) => {
        const y = firstRowY + index * (rowHeight + rowGap);

        return (
          <g key={row.length} transform={`translate(${headX} ${y})`}>
            <rect width={labelColWidth} height={rowHeight} rx="24" fill="url(#lengthCellFill)" stroke="rgba(255,255,255,0.07)" />
            <rect x={labelColWidth + cellGap} width={valueColWidth} height={rowHeight} rx="24" fill="url(#extensionCellFill)" stroke="rgba(255,255,255,0.08)" />
            <rect
              x={labelColWidth + valueColWidth + cellGap * 2}
              width={valueColWidth}
              height={rowHeight}
              rx="24"
              fill="url(#correctionCellFill)"
              stroke="rgba(217,191,226,0.11)"
            />

            <text x="24" y="60" fill="#f2eef5" fontFamily="Space Mono, monospace" fontSize="27" fontWeight="700">
              {row.length}
            </text>
            <text
              x={labelColWidth + cellGap + 24}
              y="60"
              fill="#f2eef5"
              fontFamily="Space Mono, monospace"
              fontSize="29"
              fontWeight="700"
            >
              {row.extensionPrice}
            </text>
            <text
              x={labelColWidth + valueColWidth + cellGap * 2 + 24}
              y="60"
              fill="#f2eef5"
              fontFamily="Space Mono, monospace"
              fontSize="29"
              fontWeight="700"
            >
              {row.correctionPrice}
            </text>
          </g>
        );
      })}

      <text
        x={artboard.width - 72}
        y={artboard.height - 100}
        fill="rgba(242,238,245,0.74)"
        fontFamily="Space Mono, monospace"
        fontSize="14"
        textAnchor="end"
        letterSpacing="0.6"
      >
        {telegramUrl}
      </text>
      <text
        x={artboard.width - 72}
        y={artboard.height - 62}
        fill="rgba(242,238,245,0.4)"
        fontFamily="Space Mono, monospace"
        fontSize="14"
        textAnchor="end"
        letterSpacing="2"
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
            link.download = 'pricelist-3x4.jpg';
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
            <h1 className={styles.title}>Временная страница выгрузки прайса 3:4</h1>
            <p className={styles.note}>Полный прайс собран как адаптированный вертикальный постер: можно скачать JPG или сделать clean screenshot с холста.</p>
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
