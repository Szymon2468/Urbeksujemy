import { sanityClient } from '../../sanity';
import styles from './index.module.scss';
import urlBuilder from '@sanity/image-url';
import { BsFillPersonFill, BsArrowRight } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import classNames from 'classnames';
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsFillStarFill
} from 'react-icons/bs';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { FiLink } from 'react-icons/fi';
import ArticleBody from '../../src/components/ArticleBody/ArticleBody';

import Aside from '../../src/components/Aside/Aside';
import Link from 'next/link';
import CommentsSection from '../../src/components/CommentsSection/CommentsSection';
import PhotosGallery from '../../src/components/PhotosGallery/PhotosGallery';
import useWindowSize from '../../src/hooks/useWindowSize';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

function ArticlePage({ article, comments }) {
  const {
    author,
    content,
    date,
    mainImage,
    placeseoDesc,
    seoKeyWords,
    slug,
    teaser,
    title,
    place
  } = article;

  const [isGalleryDisplayed, setIsGalleryDisplayed] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 576) {
      setIsGalleryDisplayed(false);
    } else {
      setIsGalleryDisplayed(true);
    }
  }, [windowSize.width]);

  function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }

  function copyTextToClipboard(text) {
    if (typeof navigator !== 'undefined' && !navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text).then(
        function () {
          console.log('Async: Copying to clipboard was successful!');
        },
        function (err) {
          console.error('Async: Could not copy text: ', err);
        }
      );
    }
  }
  console.log(comments);
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <img
          src={urlBuilder(sanityClient).image(mainImage).url() as string}
          className={styles.landingPage}
        />

        <div className={styles.headerContent}>
          <div className={classNames('container', styles.headerContainer)}>
            <div className={styles.headerInfo}>
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.dateAndAuthor}>
                <p className={styles.author}>
                  {' '}
                  <BsFillPersonFill /> {author.name}
                </p>
                <p className={styles.date}>
                  <MdDateRange /> {date}
                </p>
                <p className={styles.rating}>
                  <BsFillStarFill />
                  {place.ourRating}/10
                </p>
              </div>
            </div>
            <div className={styles.sharingAndRatingContainer}>
              <div className={styles.shareContainer}>
                <FacebookShareButton
                  url={typeof window !== 'undefined' && window.location.href}
                  quote='Udostępnij artykuł przez facebooka!'
                >
                  <BsFacebook className={styles.mediaIcon} />
                </FacebookShareButton>
                <div>
                  <BsInstagram className={styles.mediaIcon} />
                </div>

                <WhatsappShareButton
                  url={typeof window !== 'undefined' && window.location.href}
                  quote='Udostępnij artykuł przez facebooka!'
                >
                  <BsWhatsapp className={styles.mediaIcon} />
                </WhatsappShareButton>
                <div
                  onClick={copyTextToClipboard(
                    typeof window !== 'undefined' && window.location.href
                  )}
                >
                  <FiLink className={styles.mediaIcon} />
                </div>
                <a href=''></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vignette}></div>
        <div className={styles.topVignette}></div>
      </header>
      <div className={classNames('container', styles.container)}>
        <div className={styles.gridContainer}>
          <main className={styles.main}>
            <div className={styles.seed}>
              <Link href='/'>
                <p className={styles.seedLink}>STRONA GŁÓWNA</p>
              </Link>
              <BsArrowRight />
              <Link href='/'>
                <p className={styles.seedLink}>ARTYKUŁY</p>
              </Link>
              <BsArrowRight />

              <em className={styles.seedTitle}> {title}</em>
            </div>

            <ArticleBody body={content} />

            <div className={styles.gallery}>
              <h2 className={styles.title}>
                Przeglądaj zdjęcia z naszej wyprawy do tego miejsca
              </h2>

              {isGalleryDisplayed && <PhotosGallery images={place.photos} />}
              {!isGalleryDisplayed &&
                place.photos.map((el) => (
                  <img key={v4()} src={el.url} alt={el.alt} />
                ))}
            </div>

            <CommentsSection comments={comments} articleId={article._id} />
          </main>
          <span className={styles.aside}>
            <Aside />
          </span>
        </div>
      </div>
    </article>
  );
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
  `,
    { slug }
  );

  const articleId = article._id;

  const comments = await sanityClient.fetch(
    `
    *[_type == "comments" && references($articleId) && approved][] {
      article->,
      approved,
      author,
      rating,
      comment,
      _createdAt
    }
    `,
    { articleId }
  );

  article.place.photos = article.place.photos.map((photo) => {
    return {
      url: urlBuilder(sanityClient).image(photo.asset).url() as string,
      alt: photo.alt
    };
  });

  return {
    props: {
      article,
      comments
    }
  };
};

export default ArticlePage;
