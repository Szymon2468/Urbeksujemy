import { v4 } from 'uuid';
import { sanityClient } from '../../../sanity';
import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';
import styles from './CommentsSection.module.scss';

function CommentsSection({ articleId, comments, articleTitle }) {
  return (
    <section>
      <div className={styles.titleContainer}>
        <div className={styles.belt}></div>
        <h2 className={styles.title}>Komentarze do tego miejsca</h2>
        <div className={styles.belt}></div>
      </div>
      <CommentInput articleId={articleId} articleTitle={articleTitle} />
      {comments.map((el) => (
        <Comment
          key={v4()}
          author={el.author}
          rating={el.rating}
          comment={el.comment}
          date={el._createdAt}
        />
      ))}
    </section>
  );
}

export default CommentsSection;
