import styles from '../index.module.scss';
import classNames from 'classnames';
import Wave from '../../../public/assets/wave';

const SectionContent = ({ imgSrc, text }) => {
  return (
    <>
      <div className={styles.waveContainer}>
        <Wave />
      </div>
      <div className={classNames('container', styles.sectionContent)}>
        <img src={imgSrc} alt='abandoned building photo' />
        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SectionContent;
