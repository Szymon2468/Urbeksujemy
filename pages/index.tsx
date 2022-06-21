import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import photo1 from '../public/assets/urbexPhotos/urbexPhoto1.webp';
import photo2 from '../public/assets/urbexPhotos/urbexPhoto2.webp';
import photo3 from '../public/assets/urbexPhotos/urbexPhoto3.webp';
import photo4 from '../public/assets/urbexPhotos/urbexPhoto4.webp';
import photo5 from '../public/assets/urbexPhotos/urbexPhoto5.webp';
import photo6 from '../public/assets/urbexPhotos/urbexPhoto6.webp';
import photo7 from '../public/assets/urbexPhotos/urbexPhoto7.webp';
import photo8 from '../public/assets/urbexPhotos/urbexPhoto8.webp';
import photo9 from '../public/assets/urbexPhotos/urbexPhoto9.webp';
import photo10 from '../public/assets/urbexPhotos/urbexPhoto10.webp';
import photo11 from '../public/assets/urbexPhotos/urbexPhoto11.webp';
import photo12 from '../public/assets/urbexPhotos/urbexPhoto12.webp';
import PolandMap from '../public/assets/PolandMap';

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            className={styles.swiper}
          >
            <SwiperSlide>
              <img src={photo1.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo2.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo3.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo4.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo5.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo6.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo7.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo8.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo9.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo10.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo11.src} alt='abandoned building photo' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={photo12.src} alt='abandoned building photo' />
            </SwiperSlide>
          </Swiper>
        </section>

        <section>
          <Description />
        </section>

        <section>
          <Map />
        </section>
      </main>
    </>
  );
}

const Description = () => {
  return (
    <div className={styles.DescContainer}>
      <div className={styles.imgContainer}>
        <img src={photo1.src} alt='photo from an urbex' />
      </div>
      <div className={styles.textContainer}>
        <p>
          Urbex (z ang. urban exploration — eksploracja miejska) — forma
          aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
          zapomnianych, niedostępnych czy ukrytych budynków i instalacji
          stworzonych przez człowieka. Celem osób uprawiających urbex jest
          filmowanie, fotografowanie lub po prostu zdobywanie informacji
          dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w jego
          stan, zgodnie z zasadą take only pictures, leave only footsteps
          (zabierz tylko zdjęcia, zostaw tylko ślady stóp).
        </p>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className='container'>
      <h2 className={styles.title}>
        Wybierz województwo, które Cię interesuje
      </h2>
      <div className={styles.map}>
        <PolandMap />
      </div>
    </div>
  );
};
