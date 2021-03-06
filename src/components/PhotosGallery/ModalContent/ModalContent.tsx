import styles from './ModalContent.module.scss';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';

function ModalContent({ src, onClose, images }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleArrowKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      handleLeftArrowClick();
    } else if (e.key === 'ArrowRight') {
      handleRightArrowClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleArrowKeyPress);

    return () => document.removeEventListener('keydown', handleArrowKeyPress);
  }, [handleArrowKeyPress]);

  const handleLeftArrowClick = () => {
    const currentImgIndex = images.findIndex((el) => el.url === imgSrc);
    if (currentImgIndex > 0) {
      setImgSrc(images[currentImgIndex - 1].url);
    }
  };

  const handleRightArrowClick = () => {
    const currentImgIndex = images.findIndex((el) => el.url === imgSrc);
    if (currentImgIndex < images.length - 1) {
      setImgSrc(images[currentImgIndex + 1].url);
    }
  };

  return (
    <>
      <div className={styles.closeIcon} onClick={() => onClose()}>
        <CgClose />
      </div>
      <div className={styles.imgContainer}>
        <IoIosArrowBack onClick={() => handleLeftArrowClick()} />
        <img
          src={imgSrc}
          alt='abandoned building photo'
          className={styles.img}
        />
        <IoIosArrowForward onClick={() => handleRightArrowClick()} />
      </div>
    </>
  );
}

export default ModalContent;
