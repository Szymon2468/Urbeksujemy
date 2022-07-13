import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';
import styles from './CommentsSection.module.scss';

function CommentsSection() {
  return (
    <section>
      <div className={styles.titleContainer}>
        <div className={styles.belt}></div>
        <h2 className={styles.title}>Komentarze do tego miejsca</h2>
        <div className={styles.belt}></div>
      </div>
      <CommentInput />
      <Comment />
    </section>
  );
}

export default CommentsSection;
