import styles from '../index.module.scss';
import classNames from 'classnames';
import Wave from '../../../public/assets/wave';

const SectionContent = ({ imgSrc, text, title }) => {
  return (
    <>
      <div className={styles.waveContainer}>
        <Wave />
      </div>
      <div className={classNames('container', styles.sectionContent)}>
        <img src={imgSrc} alt='abandoned building photo' />
        <div className={styles.textContainer}>
          <h2>{title}</h2>
          {text}
        </div>
      </div>
    </>
  );
};

export default SectionContent;
