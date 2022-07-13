import styles from './Aside.module.scss';
import urbexImg from '../../../public/assets/whatIsUrbexPhoto.jpeg';
import cavePhoto from '../../../public/assets/cavePhoto.webp';
import eqPhoto from '../../../public/assets/eqPhoto.jpeg';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import classNames from 'classnames';

function Aside() {
  const [isMouseOn, setIsMouseOn] = useState(false);

  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Co to jest urbex?</h2>
      <img
        src={urbexImg.src}
        alt='abandoned building photo'
        className={styles.urbexImg}
      />
      <p>
        Urbex (z ang. urban exploration — eksploracja miejska) — forma
        aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
        zapomnianych, niedostępnych czy ukrytych budynków i instalacji
        stworzonych przez człowieka. Celem osób uprawiających urbex jest
        filmowanie, fotografowanie lub po prostu zdobywanie informacji
        dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w jego
        stan, zgodnie z zasadą take only pictures, leave only footsteps (zabierz
        tylko zdjęcia, zostaw tylko ślady stóp).
      </p>

      <h2 className={styles.title}>Jak zacząć przygodę?</h2>
      <img src={cavePhoto.src} alt='cave photo' className={styles.urbexImg} />
      <p>
        Przede wszystkim nalezy określić granicę swoich możliwości — tak
        fizycznych, jak i psychicznych — i na tej podstawie wybierać cele swoich
        eksploracji. Zagrożenia występujące w niejednokrotnie zdewastowanych
        miejscach potrafią zaskoczyć nawet doświadczonych poszukiwaczu przygód,
        a co dopiero początkujących. Nie mając pojęcia o wspinaczce nie
        wybieramy obiektów wymagających tej umiejętności. Osoby słusznej budowy
        powinny unikać ciasnych przejść, grot czy osłabionych stropów itd. Mając
        lęk wysokości, unikamy wysoko położonych podestów, dachów czy grani.
        Wszelkie fobie dotyczące pająków, szczurów czy robactwa też mogą być
        przyczyną ataków paniki podczas eksplorowania opuszczonych stref, etc.
      </p>

      <h2 className={styles.title}>Ekwipunek na urbex</h2>
      <img src={eqPhoto.src} alt='cave photo' className={styles.urbexImg} />
      <p className={styles.listTitle}>Naley wziąć ze sobą:</p>
      <ul>
        <li>Odzież wierzchnia</li>
        <li>Latarka</li>
        <li>Mapa obiektu / terenu</li>
        <li>Informacje o miejscu</li>
        <li>Współrzędne GPS</li>
        <li>Apteczka</li>
        <li>Nóz / scyzoryk</li>
        <li>Maska przeciwpyłowa / gazowa</li>
        <li>Licznik Geigera</li>
        <li>Lina</li>
        <li>Wodę pitną</li>
      </ul>

      <h2 className={styles.title}>Zasady urbexu</h2>
      <p>
        Dwiema najważniejszymi zasadami są: #akcjalokalizacja i
        #urbextoniewandalizm. Pierwsza polega na ukryciu nazwy zwiedzanego
        miejsca po to, żeby utrudnić dostęp wandalom. Druga wiąże się z zakazem
        niszczenia obiektu, kradzieży zastanych w nim przedmiotów, wyłamywaniu
        drzwi i okien w celu wejścia do środka. Zarówno #akcjalokalizacjam jak i
        #urbextoniewandalizm wynikają z najważniejszej zasady urban exploration,
        czyli zabierz tylko zdjęcia, zostaw tylko ślady stóp.
      </p>

      {/* <h3>
    Dowiedz się więcej na naszej podstronie poświęconej temu tematowi
  </h3> */}
      <Link href='/przydatne-informacje'>
        <div
          className={classNames(
            styles.btn
            // isMouseOn && styles.animatedHeightBelt,
            // isMouseOn && styles.animatedWidthBelt
            // !isMouseOn && styles.animatedHeightBeltBack,
            // !isMouseOn && styles.animatedWidthBeltBack
          )}
          onMouseEnter={() => setIsMouseOn(true)}
          onMouseLeave={() => setIsMouseOn(false)}
        >
          <div className={styles.belt}></div>
          <div className={styles.horizontalBelt}></div>
          <div className={styles.animatedWidthBelt}></div>
          <div className={styles.animatedHeightBelt}></div>
          <p>Czytaj więcej</p> <BsArrowRight />
        </div>
      </Link>
    </aside>
  );
}

export default Aside;
