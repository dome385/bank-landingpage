import styles from "./style";
import {
  Navbar,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Hero,
} from "./components";

const App = () => {
  return (
    //bg-primary Setzt den Hintergrund auf die Primärfarbe
    //w-full  Weist dem Element die volle Breite zu
    //overflow-hidden Blendet über den Rahmen hinausragenden Inhalt aus
    <div className="bg-primary w-full overflow-hidden">
      {/* Setzt den horizontalen Innenabstand auf 16 Pixel für kleine Bildschirme und auf 6 Pixel für alle anderen Bildschirmgrößen */}
      {/* Flexbox-Container mit zentriertem Inhalt sowohl horizontal als auch vertikal */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        {/* Setzt die maximale Breite auf 1280 Pixel für Extra-Large-Bildschirme und die volle Breite für alle anderen Bildschirmgrößen */}
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Flexbox-Container mit zentriertem Inhalt horizontal und vertikal oben ausgerichtet */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
