import classNames from 'classnames';
import { v4 } from 'uuid';
import { sanityClient } from '../../sanity';
import ArticleCard from '../../src/components/ArticleCard/ArticleCard';
import styles from './index.module.scss';
import urlBuilder from '@sanity/image-url';
import PolandMap from '../../src/components/PolandMap/PolandMap';
import { useEffect, useState } from 'react';

function ArticlesPage({ articles }) {
  const [clickedState, setClickedState] = useState('');
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(!reload);
    console.log('clickedState', clickedState);
  }, [clickedState]);

  return (
    <main>
      <section>
        <div className={classNames(styles.polandMapContainer, 'container')}>
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

  return {
    props: {
      articles
    }
  };
};

export default ArticlesPage;
