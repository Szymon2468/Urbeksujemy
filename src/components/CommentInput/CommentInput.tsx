import styles from './CommentInput.module.scss';
import { BsFillStarFill } from 'react-icons/bs';

function CommentInput() {
  const highlightStars = (ratingNr) => {
    let stars = Array.from(
      document.querySelectorAll('div[data-rating]')
    ).filter((el) => Number(el.dataset.rating) <= ratingNr);

    console.log(stars);

    for (const star of stars) {
      star.firstChild.style.fill = 'rgb(240, 240, 0)';
    }

    return;
  };

  const unhighlightStars = () => {
    const stars = Array.from(document.querySelectorAll('div[data-rating]'));

    for (const star of stars) {
      star.firstChild.style.fill = 'rgb(255, 255, 200)';
    }

    return;
  };

  const onStarClick = (e) => {
    console.log(e.currentTarget.dataset.rating);
  };

  const generateStars = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(
        <div
          data-rating={i}
          className={styles.star}
          onMouseEnter={() => highlightStars(i)}
          onMouseLeave={() => unhighlightStars()}
          onClick={(e) => onStarClick(e)}
        >
          <BsFillStarFill />
        </div>
      );
    }

    return result;
  };

  return (
    <div className={styles.titlePositioning}>
      <h3 className={styles.title}>Zostaw swój komentarz</h3>
      <div className={styles.commentInputContainer}>
        <div className={styles.smallInputs}>
          <input
            type='text'
            className={styles.smallInput}
            placeholder='Imię i nazwisko'
          />
          <div className={styles.stars}>{generateStars()}</div>
        </div>
        <textarea className={styles.bigInput} placeholder='Twój komentarz' />
        <div className={styles.btnContainer}>
          <button type='submit'>Wyślij</button>
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
