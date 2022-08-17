import classNames from 'classnames';
import { v4 } from 'uuid';
import { sanityClient } from '../../sanity';
import ArticleCard from '../../src/components/ArticleCard/ArticleCard';
import styles from './index.module.scss';
import urlBuilder from '@sanity/image-url';
import PolandMap from '../../src/components/PolandMap/PolandMap';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function ArticlesPage({ articles, places }) {
  const [clickedState, setClickedState] = useState('');

  console.log(places);

  return (
    <main className={styles.placesMain}>
      <section>
        <div className={classNames(styles.polandMapContainer, 'container')}>
          <span className={styles.polandMapText}>
            <h1 className='h2'>
              Wybierz województwo, które Cię interesuje i przeglądaj
              zlokaliozowane tam mijescówki na urbex
            </h1>
            <div className={styles.displayedText}>
              <h3>
                Zerknij na 5 najlepiej ocenianych przez naszą grupę urbexową
                miejscówek:
              </h3>
              <div className={styles.linksContainer}>
                {places.map((place) => (
                  <span key={v4()} className={styles.link}>
                    <Link
                      href={`miejsca-na-urbex/${place.article.slug.current}`}
                    >
                      <a className={styles.topPlace}>
                        <BsArrowRight />
                        <p>{place.placeName}</p>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </span>
          <span className={styles.polandMapDiv}>
            <PolandMap setClickedState={setClickedState} />
          </span>
          <div className={styles.hiddenText}>
            <h3>
              Zerknij na 5 najlepiej ocenianych przez naszą grupę urbexową
              miejscówek:
            </h3>
            <div className={styles.linksContainer}>
              {places.map((place) => (
                <span key={v4()} className={styles.link}>
                  <Link href={`miejsca-na-urbex/${place.article.slug.current}`}>
                    <a className={styles.topPlace}>
                      <BsArrowRight />
                      <p>{place.placeName}</p>
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={classNames(styles.gridArticlesContainer, 'container')}>
          {clickedState === '' &&
            articles.map((article) => (
              <div key={v4()} className={styles.cardContainer}>
                <ArticleCard
                  title={article.place.placeName}
                  imgUrl={
                    urlBuilder(sanityClient)
                      .image(article.mainImage.asset)
                      .url() as string
                  }
                  imgAlt={article.mainImage.alt}
                  description={article.teaser}
                  date={article.date}
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
                      title={article.place.placeName}
                      imgUrl={
                        urlBuilder(sanityClient)
                          .image(article.mainImage.asset)
                          .url() as string
                      }
                      imgAlt={article.mainImage.alt}
                      description={article.teaser}
                      date={article.date}
                      slug={article.slug.current}
                    />
                  </div>
                )
            )}
        </div>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const articles = await sanityClient.fetch(
    `
    *[
      _type == "articles" && date < now()
    ][] {
      _id,
      author->,
      content,
      date,
      mainImage,
      place->{
        _id,
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
    }
  `
  );

  const places = await sanityClient.fetch(`
    *[_type == "place"] | order(ourRating desc)[] {
      placeName,
      city->{city},
      ourRating,
      article->{slug, mainImage, teaser},
      date
    }[0..4]
  `);

  return {
    props: {
      articles,
      places
    }
  };
};

export default ArticlesPage;
