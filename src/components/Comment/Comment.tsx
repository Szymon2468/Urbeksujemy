import styles from './Comment.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';

function Comment() {
  return (
    <div className={styles.comment}>
      <div className={styles.person}>
        <BsFillPersonFill />

        <div className={styles.commentInfo}>
          <div className={styles.nameAndRating}>
            <div className={styles.name}>Szymon Chwila</div>
            <div className={styles.rating}>
              <BsFillStarFill />
              8/10
            </div>
          </div>

          <div className={styles.date}>
            <MdOutlineWatchLater />
            2022-09-29
          </div>
        </div>
      </div>
      <p className={styles.content}>
        Przede wszystkim nalezy określić granicę swoich możliwości — tak
        fizycznych, jak i psychicznych — i na tej podstawie wybierać cele swoich
        eksploracji. Zagrożenia występujące w niejednokrotnie zdewastowanych
        miejscach potrafią zaskoczyć nawet doświadczonych poszukiwaczu przygód,
        a co dopiero początkujących.
      </p>
    </div>
  );
}

export default Comment;
