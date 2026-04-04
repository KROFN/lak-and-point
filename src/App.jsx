import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import TempPricelistExport from './components/TempPricelistExport/TempPricelistExport';

const tickerItems = [
  'МАНИКЮР',
  'НАРАЩИВАНИЕ',
  'ДИЗАЙН В ПОДАРОК',
  'ЛАК И ТОЧКА',
  'КУШВА',
];

function Ticker() {
  const sequence = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((group) => (
          <div key={group} className="ticker__group">
            {sequence.map((item, index) => (
              <span key={`${group}-${item}-${index}`} className="ticker__item">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  if (
    window.location.pathname === '/pricelist-export' ||
    window.location.pathname === '/pricelist-export.html'
  ) {
    return <TempPricelistExport />;
  }

  return (
    <div className="page-shell">
      <div className="page-shell__noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Ticker />
        <Services />
        <Ticker />
        <Gallery />
        <Ticker />
        <Contact />
      </main>
    </div>
  );
}
