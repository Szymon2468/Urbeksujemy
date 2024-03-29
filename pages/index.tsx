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
import PolandMap from '../src/components/PolandMap/PolandMap';
import ArticleCard from '../src/components/ArticleCard/ArticleCard';
import { sanityClient } from '../sanity';
import { v4 } from 'uuid';
import urlBuilder from '@sanity/image-url';
import IArticle from '../src/homepage.def';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { BsArrowRight } from 'react-icons/bs';

interface IHomeProps {
  articles: IArticle[];
  placesForPolandMap: any;
  places: any;
}

export default function Home({
  articles,
  placesForPolandMap,
  places
}: IHomeProps) {
  const [clickedState, setClickedState] = useState('');
  const [mapPlaces, setMapPlaces] = useState(placesForPolandMap);

  return (
    <>
      <main>
        <section className={styles.swiperSection}>
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
          <h3 className={styles.descTitle}>Czym jest urbex?</h3>
          <DescriptionSection />
        </section>

        <section>
          <h2 className={styles.title}>
            Wybierz województwo, które Cię interesuje
          </h2>
          <div className={classNames('container', styles.podiumContainer)}>
            <div className={styles.podium}>
              <div className={styles.pole}>
                <span>
                  <p>{places[0]?.placeName}</p>
                  <BsArrowRight />
                </span>
                <div className={styles.p1}> </div>
              </div>

              <div className={styles.pole}>
                <span>
                  <p>{places[1]?.placeName}</p>
                  <BsArrowRight />
                </span>
                <div className={styles.p2}> </div>
              </div>

              <div className={styles.pole}>
                <span>
                  <p>{places[2]?.placeName}</p>
                  <BsArrowRight />
                </span>
                <div className={styles.p3}></div>
              </div>
            </div>
            <div className={styles.map}>
              <PolandMap
                setClickedState={setClickedState}
                placesForPolandMap={mapPlaces}
              />
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <h2 className={styles.title}>
              Przeglądaj ostatnio odwiedzine przez nas miejsca
            </h2>
            <div className={styles.recentArticlesContainer}>
              {clickedState === '' &&
                articles.map((article) => (
                  <div key={v4()} className={styles.cardContainer}>
                    <ArticleCard
                      key={v4()}
                      title={article.place.placeName}
                      description={article.teaser}
                      imgAlt={article.mainImage.alt}
                      date={article.date}
                      imgUrl={
                        urlBuilder(sanityClient)
                          .image(article.mainImage)
                          .url() as string
                      }
                      slug={article.slug.current}
                    />
                  </div>
                ))}

              {clickedState !== '' &&
                articles.map(
                  (article) =>
                    article.place.city.state.state === clickedState && (
                      <div key={v4()} className={styles.cardContainer}>
                        <ArticleCard
                          key={v4()}
                          title={article.place.placeName}
                          description={article.teaser}
                          imgAlt={article.mainImage.alt}
                          date={article.date}
                          imgUrl={
                            urlBuilder(sanityClient)
                              .image(article.mainImage)
                              .url() as string
                          }
                          slug={article.slug.current}
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const DescriptionSection = () => {
  return (
    <>
      <div className={classNames('container', styles.DescContainer)}>
        <div className={styles.imgContainer}>
          <img src={photo1.src} alt='photo from an urbex' />
        </div>
        <div className={classNames(styles.textContainer, 'container')}>
          <p>
            Urbex (z ang. urban exploration — eksploracja miejska) — forma
            aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
            zapomnianych, niedostępnych czy ukrytych budynków i instalacji
            stworzonych przez człowieka. Celem osób uprawiających urbex jest
            filmowanie, fotografowanie lub po prostu zdobywanie informacji
            dotyczących danego miejsca. Wszystko odbywa się bez ingerencji w
            jego stan, zgodnie z zasadą take only pictures, leave only footsteps
            (zabierz tylko zdjęcia, zostaw tylko ślady stóp).
          </p>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const articles = await sanityClient.fetch(`
    *[
      _type == "articles" && date < now()
    ] | order(date desc)[] {
      author->{name},
      content,
      date,
      mainImage,
      place->{
        placeName,
        city->{
          city,
          state->{state}
        },
        coords,
        ourRating,
        date,
        description,
        article,
        photos
      },
      seoDesc,
      seoKeyWords,
      slug,
      teaser,
      title,
    }[0..5]
  `);

  let placesForPolandMap = await sanityClient.fetch(`
  *[_type == "place"] | order(ourRating desc)[] {
    placeName,
    coordN,
    coordE
  }[0..4]
`);

  const places = await sanityClient.fetch(`
*[_type == "place"] | order(ourRating desc)[] {
  placeName,
  city->{city},
  ourRating,
  article->{slug, mainImage, teaser},
  date
}[0..2]
`);

  placesForPolandMap = placesForPolandMap.map((el) => ({
    name: el.placeName,
    N: el.coordN,
    E: el.coordE,
    active: false
  }));

  return { props: { articles, placesForPolandMap, places } };
};
