import styles from './Comment.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import ArticleBody from '../ArticleBody/ArticleBody';

function Comment({ author, rating, comment, date }) {
  console.log('date', date);
  return (
    <div className={styles.comment}>
      <div className={styles.person}>
        <BsFillPersonFill />

        <div className={styles.commentInfo}>
          <div className={styles.nameAndRating}>
            <div className={styles.name}>{author}</div>
            <div className={styles.rating}>
              <BsFillStarFill />
              {rating}/10
            </div>
          </div>

          <div className={styles.date}>
            <MdOutlineWatchLater />
            {date}
          </div>
        </div>
      </div>
      <p className={styles.content}>
        <ArticleBody body={comment} />
      </p>
    </div>
  );
}

export default Comment;
