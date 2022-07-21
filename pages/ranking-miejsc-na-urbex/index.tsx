import React from 'react';
import styles from './index.module.scss';
import photo1 from '../../public/assets/urbexPhotos/urbexPhoto1.webp';
import { sanityClient } from '../../sanity';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import classNames from 'classnames';
import { v4 } from 'uuid';

const filledStarScore = (ourRating) => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= ourRating) {
      result.push(
        <AiFillStar
          className={styles.star}
          style={{
            fill: 'rgb(240, 240, 0)',
            stroke: '#000',
            strokeWidth: '20'
          }}
        />
      );
    } else {
      result.push(
        <AiFillStar
          className={styles.star}
          style={{
            fill: 'rgb(255, 255, 200)',
            stroke: '#000',
            strokeWidth: '20'
          }}
        />
      );
    }
  }

  return result;
};

const RankItem = ({ placeName, ourRating, slug, city, date, nr }) => {
  return (
    <div className={styles.rankItemContainer}>
      <div className={styles.rankNumber}>{nr}</div>
      <Link href={`/miejsca-na-urbex/${slug}`}>
        <div className={styles.place}>
          <div className={styles.placeInfo}>
            <h3 className={styles.placeName}>{placeName}</h3>
            <p className={styles.city}>{city}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <div className={styles.ourRating}>
            {filledStarScore(ourRating)}
            <p>{ourRating}/10</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

function RankingPage({ places }) {
  return (
    <main>
      <section className={styles.landingSection}>
        <div className={styles.landingPage}>
          <header>
            <div>
              <h1>
                Zobacz ranking najlepszych miejsc na urbex, których nasza grupa
                urbexowa podjęła się eksploracji
              </h1>
            </div>
          </header>
        </div>
      </section>

      <div className={classNames('container', styles.rankingContainer)}>
        <section className={styles.section}>
          {places.map((el, index) => (
            <RankItem
              key={v4()}
              placeName={el.placeName}
              ourRating={el.ourRating}
              slug={el.article.slug.current}
              city={el.city.city}
              date={el.date}
              nr={index + 1}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export const getStaticProps = async (context: any) => {
  const places = await sanityClient.fetch(`
    *[_type == "place"] | order(ourRating desc)[] {
      placeName,
      city->{city},
      ourRating,
      article->{slug},
      date
    }[0..9]
  `);

  return {
    props: {
      places
    }
  };
};

export default RankingPage;
