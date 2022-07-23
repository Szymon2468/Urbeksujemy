import classNames from 'classnames';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { v4 } from 'uuid';
import { sanityClient } from '../../sanity';
import styles from './index.module.scss';
import urlBuilder from '@sanity/image-url';
import medalImg from '../../public/assets/medal.png';
import { BsArrowRight } from 'react-icons/bs';

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

{
  /* <div className={styles.rankNumber}>{nr}</div>
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
        <div className={styles.rankItemContainer}>
 */
}

const RankItem = ({
  placeName,
  ourRating,
  slug,
  city,
  date,
  nr,
  imgSrc,
  imgAlt,
  teaser
}) => {
  return (
    <div className={styles.rankItem}>
      <div className={styles.photo}>
        <div className={styles.vignette}></div>
        <img src={imgSrc} alt={imgAlt} />

        <span>
          <div className={styles.medal}>
            <p>{nr}</p>
            <img src={medalImg.src} alt='medal photo' />
          </div>
          <div className={styles.ourRating}>
            {filledStarScore(ourRating)}
            <p>{ourRating}/10</p>
          </div>
        </span>
      </div>

      <div className={styles.info}>
        <h2>
          {city}, {placeName}
        </h2>
        <p className={styles.teaser}>{teaser}</p>
        <span>
          <p>{date}</p>
          <Link href={`miejsca-na-urbex/${slug}`}>
            <div className={styles.readMore}>
              Czytaj więcej <BsArrowRight />
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

function RankingPage({ places }) {
  return (
    <main className={styles.rankingMain}>
      <header>
        <div className='container'>
          <h1>
            Zobacz ranking najlepszych miejsc na urbex, których nasza grupa
            urbexowa podjęła się eksploracji
          </h1>
        </div>
      </header>

      <section className={classNames('container', styles.rankingContainer)}>
        {places.map((el, index) => (
          <RankItem
            key={v4()}
            placeName={el.placeName}
            ourRating={el.ourRating}
            slug={el.article.slug.current}
            city={el.city.city}
            date={el.date}
            nr={index + 1}
            imgSrc={
              urlBuilder(sanityClient)
                .image(el.article.mainImage.asset)
                .url() as string
            }
            teaser={el.article.teaser}
            imgAlt={el.article.mainImage.alt}
          />
        ))}
      </section>
    </main>
  );
}

export const getStaticProps = async (context: any) => {
  const places = await sanityClient.fetch(`
    *[_type == "place"] | order(ourRating desc)[] {
      placeName,
      city->{city},
      ourRating,
      article->{slug, mainImage, teaser},
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
