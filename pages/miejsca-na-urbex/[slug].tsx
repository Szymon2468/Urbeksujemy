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
import Gallery from '../../src/components/Gallery/Gallery';
import urbexImg from '../../public/assets/whatIsUrbexPhoto.jpeg';
import cavePhoto from '../../public/assets/cavePhoto.webp';
import eqPhoto from '../../public/assets/eqPhoto.jpeg';
import Link from 'next/link';
import { useState } from 'react';

function ArticlePage({ article }) {
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

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
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

  const [isMouseOn, setIsMouseOn] = useState(false);

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
      <div className='container'>
        <div className={styles.gridContainer}>
          <main className={styles.main}>
            <ArticleBody body={content} />
            <div className={styles.gallery}>
              <h2 className={styles.title}>
                Przeglądaj zdjęcia z naszej wyprawy do tego miejsca
              </h2>
              <Gallery images={place.photos} />
            </div>
          </main>
          <aside className={styles.aside}>
            <h2 className={styles.title}>Co to jest urbex?</h2>
            <img
              src={urbexImg.src}
              alt='abandoned building photo'
              className={styles.urbexImg}
            />
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

            <h2 className={styles.title}>Jak zacząć przygodę?</h2>
            <img
              src={cavePhoto.src}
              alt='cave photo'
              className={styles.urbexImg}
            />
            <p>
              Przede wszystkim nalezy określić granicę swoich możliwości — tak
              fizycznych, jak i psychicznych — i na tej podstawie wybierać cele
              swoich eksploracji. Zagrożenia występujące w niejednokrotnie
              zdewastowanych miejscach potrafią zaskoczyć nawet doświadczonych
              poszukiwaczu przygód, a co dopiero początkujących. Nie mając
              pojęcia o wspinaczce nie wybieramy obiektów wymagających tej
              umiejętności. Osoby słusznej budowy powinny unikać ciasnych
              przejść, grot czy osłabionych stropów itd. Mając lęk wysokości,
              unikamy wysoko położonych podestów, dachów czy grani. Wszelkie
              fobie dotyczące pająków, szczurów czy robactwa też mogą być
              przyczyną ataków paniki podczas eksplorowania opuszczonych stref,
              etc.
            </p>

            <h2 className={styles.title}>Ekwipunek na urbex</h2>
            <img
              src={eqPhoto.src}
              alt='cave photo'
              className={styles.urbexImg}
            />
            <p className={styles.listTitle}>Naley wziąć ze sobą:</p>
            <ul>
              <li>Odzież wierzchnia</li>
              <li>Latarka</li>
              <li>Mapa obiektu / terenu</li>
              <li>Informacje o miejscu</li>
              <li>Współrzędne GPS</li>
              <li>Apteczka</li>
              <li>Nóz / scyzoryk</li>
              <li>Maska przeciwpyłowa / gazowa</li>
              <li>Licznik Geigera</li>
              <li>Lina</li>
              <li>Wodę pitną</li>
            </ul>

            <h2 className={styles.title}>Zasady urbexu</h2>
            <p>
              Dwiema najważniejszymi zasadami są: #akcjalokalizacja i
              #urbextoniewandalizm. Pierwsza polega na ukryciu nazwy zwiedzanego
              miejsca po to, żeby utrudnić dostęp wandalom. Druga wiąże się z
              zakazem niszczenia obiektu, kradzieży zastanych w nim przedmiotów,
              wyłamywaniu drzwi i okien w celu wejścia do środka. Zarówno
              #akcjalokalizacjam jak i #urbextoniewandalizm wynikają z
              najważniejszej zasady urban exploration, czyli zabierz tylko
              zdjęcia, zostaw tylko ślady stóp.
            </p>

            {/* <h3>
              Dowiedz się więcej na naszej podstronie poświęconej temu tematowi
            </h3> */}
            <Link href='/przydatne-informacje'>
              <div
                className={classNames(
                  styles.btn
                  // isMouseOn && styles.animatedHeightBelt,
                  // isMouseOn && styles.animatedWidthBelt
                  // !isMouseOn && styles.animatedHeightBeltBack,
                  // !isMouseOn && styles.animatedWidthBeltBack
                )}
                onMouseEnter={() => setIsMouseOn(true)}
                onMouseLeave={() => setIsMouseOn(false)}
              >
                <div className={styles.belt}></div>
                <div className={styles.horizontalBelt}></div>
                <div className={styles.animatedWidthBelt}></div>
                <div className={styles.animatedHeightBelt}></div>
                <p>Czytaj więcej</p> <BsArrowRight />
              </div>
            </Link>
          </aside>
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

  article.place.photos = article.place.photos.map((photo) => {
    return {
      url: urlBuilder(sanityClient).image(photo.asset).url() as string,
      alt: photo.alt
    };
  });

  return {
    props: {
      article
    }
  };
};

export default ArticlePage;
