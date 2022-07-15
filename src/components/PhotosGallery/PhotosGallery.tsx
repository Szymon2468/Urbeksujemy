import { useEffect, useState } from 'react';
import styles from './PhotosGallery.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ModalContent from './ModalContent/ModalContent';

export interface IImage {
  url: string;
  alt: string;
}

interface IGalleryProps {
  images: IImage[];
}

function PhotosGallery({ images }: IGalleryProps) {
  const [isOpen, setIsopen] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'inherit';
  }, [isOpen]);

  const result: JSX.Element[] = [];
  images.map((el) => {
    result.push(
      <div key={uuidv4()} className={styles.galleryImg}>
        <div className={styles.holder} onClick={() => setIsopen(true)}>
          <img
            src={el.url}
            alt={el.alt}
            className={styles.img}
            onClick={(e) => setModalImgUrl(e.currentTarget.src)}
          />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.galleryContainer}>
      {result}
      {isOpen && (
        <ModalContent
          onClose={() => setIsopen(false)}
          src={modalImgUrl}
          images={images}
        />
      )}
    </div>
  );
}

export default PhotosGallery;
