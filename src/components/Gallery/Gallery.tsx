import styles from './Gallery.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Modal, ModalContent } from './ImageModal';

export interface IImage {
  url: string;
  alt: string;
}

interface IGalleryProps {
  images: IImage[];
}

const Gallery = ({ images }: IGalleryProps) => {
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'inherit';
  }, [isOpen]);

  const result: JSX.Element[] = [];
  images.map((el) => {
    result.push(
      <div key={uuidv4()} className={styles.galleryImg}>
        <Modal onOpen={showModal}>
          <div className={styles.holder}>
            <img src={el.url} alt={el.alt} />
          </div>
        </Modal>
        {isOpen && (
          <ModalContent onClose={() => setIsopen(false)}>
            <img src={el.url} alt='' />
          </ModalContent>
        )}
      </div>
    );
  });

  return <div className={styles.galleryContainer}>{result}</div>;
};

export default Gallery;
