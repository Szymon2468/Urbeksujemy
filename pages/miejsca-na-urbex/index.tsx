import classNames from 'classnames';
import { v4 } from 'uuid';
import { sanityClient } from '../../sanity';
import ArticleCard from '../../src/components/ArticleCard/ArticleCard';
import styles from './index.module.scss';
import urlBuilder from '@sanity/image-url';
import PolandMap from '../../src/components/PolandMap/PolandMap';
import { useState } from 'react';

function ArticlesPage({ articles, places }) {
  const [clickedState, setClickedState] = useState('');

  console.log(places);

  return (
    <main className={styles.placesMain}>
      <section>
        <div className={classNames(styles.polandMapContainer, 'container')}>
          <span>
            <h3>
              Wybierz województwo, które Cię interesuje i przeglądaj
              zlokaliozowane tam mijescówki na urbex
            </h3>
            <p>
              Zerknij na 5 najlepiej ocenianych przez naszą grupę urbexową
              miejscówek
            </p>
            <ul>
              {places.map((place) => (
                <li key={v4()}>{place.placeName}</li>
              ))}
            </ul>
          </span>
          <PolandMap setClickedState={setClickedState} />
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
                      slug={article.slug}
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
