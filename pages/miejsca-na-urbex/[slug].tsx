import { sanityClient } from '../../sanity';
import styles from './index.module.scss';

function ArticlePage({ article }) {
  console.log(article);
  return <div></div>;
}

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(`
    *[_type == "articles" && date < now()][].slug.current
  `);

  return {
    paths: paths.map((slug: string) => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
};

export const getStaticProps = async (context: any) => {
  const { slug = '' } = context.params;
  const article = await sanityClient.fetch(
    `
    *[
      _type == "articles" && date < now() && slug.current == $slug
    ][0] {
      author->,
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
    }
  `,
    { slug }
  );

  return {
    props: {
      article
    }
  };
};

export default ArticlePage;
