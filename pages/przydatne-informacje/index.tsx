import classNames from 'classnames';
import Wave from '../../public/assets/wave';
import whatIsUrbexPhoto from '../../public/assets/whatIsUrbexPhoto.jpeg';
import styles from './index.module.scss';
import SectionContent from './sub-components/SectionContent';

function InfoPage() {
  return (
    <>
      <header className={styles.infoHeader}>
        <div>
          <h1>
            NAJWAŻNIEJSZE INFORMACJE O URBEXIE, O KTÓRYCH <span>MUSISZ </span>
            WIEDZIEĆ
          </h1>
        </div>
      </header>
      <main className={styles.infoMain}>
        <section className={styles.infoSection}>
          <SectionContent
            imgSrc={whatIsUrbexPhoto.src}
            text='
              Urbex (z ang. urban exploration — eksploracja miejska) — forma
              aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
              zapomnianych, niedostępnych czy ukrytych budynków i instalacji
              stworzonych przez człowieka. Celem osób uprawiających urbex jest
              filmowanie, fotografowanie lub po prostu zdobywanie informacji
              dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w jego
              stan, zgodnie z zasadą take only pictures, leave only footsteps
              (zabierz tylko zdjęcia, zostaw tylko ślady stóp).
            '
          />
        </section>

        <section className={styles.infoSection}>
          <SectionContent
            imgSrc={whatIsUrbexPhoto.src}
            text='
              Urbex (z ang. urban exploration — eksploracja miejska) — forma
              aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
              zapomnianych, niedostępnych czy ukrytych budynków i instalacji
              stworzonych przez człowieka. Celem osób uprawiających urbex jest
              filmowanie, fotografowanie lub po prostu zdobywanie informacji
              dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w jego
              stan, zgodnie z zasadą take only pictures, leave only footsteps
              (zabierz tylko zdjęcia, zostaw tylko ślady stóp).
            '
          />
        </section>
      </main>
    </>
  );
}

export default InfoPage;
