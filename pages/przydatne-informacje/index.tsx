import classNames from 'classnames';
import Wave from '../../public/assets/wave';
import whatIsUrbexPhoto from '../../public/assets/whatIsUrbexPhoto.jpeg';
import styles from './index.module.scss';
import SectionContent from './sub-components/SectionContent';
import '../../public/assets/cavePhoto.webp';
import eqPhoto from '../../public/assets/eqPhoto.jpeg';
import forestImg from '../../public/assets/forest.jpeg';
import vandalismPhoto from '../../public/assets/vandalismPhoto.jpeg';

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
            text={
              <p>
                Urbex (z ang. urban exploration — eksploracja miejska) — forma
                aktywności polegająca na eksplorowaniu opuszczonych,
                zrujnowanych, zapomnianych, niedostępnych czy ukrytych budynków
                i instalacji stworzonych przez człowieka. Celem osób
                uprawiających urbex jest filmowanie, fotografowanie lub po
                prostu zdobywanie informacji dotyczących danego miejsca.
                Wszystko odbywa się bez ingerencji w jego stan, zgodnie z zasadą
                take only pictures, leave only footsteps (zabierz tylko zdjęcia,
                zostaw tylko ślady stóp).
              </p>
            }
            title='Co to jest urbex?'
          />
        </section>

        <section className={styles.infoSection}>
          <SectionContent
            imgSrc={forestImg.src}
            text={
              <p>
                Przede wszystkim nalezy określić granicę swoich możliwości — tak
                fizycznych, jak i psychicznych — i na tej podstawie wybierać
                cele swoich eksploracji. Zagrożenia występujące w
                niejednokrotnie zdewastowanych miejscach potrafią zaskoczyć
                nawet doświadczonych poszukiwaczu przygód, a co dopiero
                początkujących. Nie mając pojęcia o wspinaczce nie wybieramy
                obiektów wymagających tej umiejętności. Osoby słusznej budowy
                powinny unikać ciasnych przejść, grot czy osłabionych stropów
                itd.
              </p>
            }
            title='Jak zacząć przygodę?'
          />
        </section>

        <section className={styles.infoSection}>
          <SectionContent
            imgSrc={eqPhoto.src}
            text={
              <p>
                Dwiema najważniejszymi zasadami są: #akcjalokalizacja i
                #urbextoniewandalizm. Pierwsza polega na ukryciu nazwy
                zwiedzanego miejsca po to, żeby utrudnić dostęp wandalom. Druga
                wiąże się z zakazem niszczenia obiektu, kradzieży zastanych w
                nim przedmiotów, wyłamywaniu drzwi i okien w celu wejścia do
                środka. Zarówno #akcjalokalizacjam jak i #urbextoniewandalizm
                wynikają z najważniejszej zasady urban exploration, czyli
                zabierz tylko zdjęcia, zostaw tylko ślady stóp.
              </p>
            }
            title='Ekwipunek na urbex'
          />
        </section>

        <section className={styles.infoSection}>
          <SectionContent
            imgSrc={vandalismPhoto.src}
            text={
              <p>
                Dwiema najważniejszymi zasadami są: #akcjalokalizacja i
                #urbextoniewandalizm. Pierwsza polega na ukryciu nazwy
                zwiedzanego miejsca po to, żeby utrudnić dostęp wandalom. Druga
                wiąże się z zakazem niszczenia obiektu, kradzieży zastanych w
                nim przedmiotów, wyłamywaniu drzwi i okien w celu wejścia do
                środka. Zarówno #akcjalokalizacjam jak i #urbextoniewandalizm
                wynikają z najważniejszej zasady urban exploration, czyli
                zabierz tylko zdjęcia, zostaw tylko ślady stóp.
              </p>
            }
            title='Zasady urbexu'
          />
        </section>
      </main>
    </>
  );
}

export default InfoPage;
