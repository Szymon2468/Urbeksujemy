import React from 'react';
import styles from './index.module.scss';
import HorizontalArticleCard from '../../src/components/ArticleCard/HorizontalArticleCard';
import photo1 from '../../public/assets/urbexPhotos/urbexPhoto1.webp';

function Index() {
  return (
    <div className='container'>
      <HorizontalArticleCard
        title='Fort Kraków'
        description='Urbex (z ang. urban exploration — eksploracja miejska) — forma
          aktywności polegająca na eksplorowaniu opuszczonych, zrujnowanych,
          zapomnianych, niedostępnych czy ukrytych budynków i instalacji'
        imgAlt='photo from an urbex'
        imgUrl={photo1}
      />
    </div>
  );
}

export default Index;
