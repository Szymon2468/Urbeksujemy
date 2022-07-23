import styles from './index.module.scss';

function Index() {
  return (
    <main>
      <section>
        <div className={styles.landingPage}>
          <div className='container'>
            <header>
              <h1>
                Zobacz ranking najlepszych miejsc na urbex, których nasza grupa
                urbexowa podjęła się eksploracji
              </h1>
            </header>
            <p>
              Urbex (z ang. urban exploration — eksploracja miejska) — forma
              aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
              zapomnianych, niedostępnych czy ukrytych budynków i instalacji
              stworzonych przez człowieka. Celem osób uprawiających urbex jest
              filmowanie, fotografowanie lub po prostu zdobywanie informacji
              dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w
              jego stan, zgodnie z zasadą take only pictures, leave only
              footsteps (zabierz tylko zdjęcia, zostaw tylko ślady stóp).
            </p>
            <br />
            <br />
            <p>
              Przede wszystkim nalezy określić granicę swoich możliwości — tak
              fizycznych, jak i psychicznych — i na tej podstawie wybierać cele
              swoich eksploracji. Zagrożenia występujące w niejednokrotnie
              zdewastowanych miejscach potrafią zaskoczyć nawet doświadczonych
              poszukiwaczu przygód, a co dopiero początkujących. Nie mając
              pojęcia o wspinaczce nie wybieramy obiektów wymagających tej
              umiejętności. Osoby słusznej budowy powinny unikać ciasnych
              przejść, grot czy osłabionych stropów itd.
            </p>
            <br />
            <br />
            <p>
              Przede wszystkim nalezy określić granicę swoich możliwości — tak
              fizycznych, jak i psychicznych — i na tej podstawie wybierać cele
              swoich eksploracji. Zagrożenia występujące w niejednokrotnie
              zdewastowanych miejscach potrafią zaskoczyć nawet doświadczonych
              poszukiwaczu przygód, a co dopiero początkujących. Nie mając
              pojęcia o wspinaczce nie wybieramy obiektów wymagających tej
              umiejętności. Osoby słusznej budowy powinny unikać ciasnych
              przejść, grot czy osłabionych stropów itd.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
