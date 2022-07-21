import blockTools from '@sanity/block-tools';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import styles from './CommentInput.module.scss';
import Schema from '@sanity/schema';
import { v4 } from 'uuid';

const defaultSchema = Schema.compile({
  name: 'myBlog',
  types: [
    {
      type: 'object',
      name: 'blogPost',
      fields: [
        {
          title: 'Title',
          type: 'string',
          name: 'title'
        },
        {
          title: 'Body',
          name: 'body',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ]
    }
  ]
});

const blockContentType = defaultSchema
  .get('blogPost')
  .fields.find((field) => field.name === 'body').type;

function CommentInput({ articleId }) {
  const [state, setState] = useState({ author: '', comment: '' });
  const [rating, setRating] = useState(0);
  const [isCommentSent, setIsCommentSent] = useState(false);

  useEffect(() => {
    let stars = Array.from(document.querySelectorAll('div[data-rating]'));

    for (const star of stars) {
      // @ts-ignore
      if (Number(star.dataset.rating) <= Number(rating)) {
        // @ts-ignore
        star.firstChild.style.fill = 'rgb(240, 240, 0)';
      } else {
        // @ts-ignore
        star.firstChild.style.fill = 'rgb(255, 255, 200)';
      }
    }
  }, [rating]);

  const highlightStars = (ratingNr) => {
    let stars = Array.from(
      document.querySelectorAll('div[data-rating]')
      // @ts-ignore
    ).filter((el) => Number(el.dataset.rating) <= ratingNr);

    if (rating <= 0) {
      for (const star of stars) {
        // @ts-ignore
        star.firstChild.style.fill = 'rgb(240, 240, 0)';
      }
    }

    return;
  };

  const unhighlightStars = () => {
    if (rating > 0) {
      return;
    }

    const stars = Array.from(document.querySelectorAll('div[data-rating]'));

    if (rating <= 0) {
      for (const star of stars) {
        // @ts-ignore
        star.firstChild.style.fill = 'rgb(255, 255, 200)';
      }
    }

    return;
  };

  const onStarClick = (e) => {
    setRating(e.currentTarget.dataset.rating);
  };

  const generateStars = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(
        <div
          key={v4()}
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

  const handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const blocks = blockTools.htmlToBlocks(state.comment, blockContentType);

    const projectId = 'd03ndplx';
    const dataset = 'production';
    const tokenWithWriteAccess =
      'skyMd9KBTNtS3cqaZVM6Jg3kvsfZfrE2cgAQWWz9VIB3Y3PTSVuhUDRoAgIPMqU2BtdteyNpV21jSCevs7oco3qHHEYrxogQKeY45gBAC3iTEmTvDJ4CXCma2CYGC5QpxkgVI9zb1GtjF8yCxIGcu081wRtQziw4jYaOUPBtIB7XUCld0SXx';

    const createMutations = [
      {
        create: {
          _type: 'comments',
          author: state.author,
          comment: blocks,
          rating: Number(rating),
          article: { _type: 'reference', _ref: articleId }
        }
      }
    ];

    const { data } = await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
      { mutations: createMutations },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${tokenWithWriteAccess}`
        }
      }
    );
  };

  return (
    <div className={styles.titlePositioning}>
      {!isCommentSent && (
        <h3 className={styles.title}>Zostaw swój komentarz</h3>
      )}
      {isCommentSent && (
        <h3 className={styles.title}>Dziękujemy za komentarz</h3>
      )}
      <div className={styles.commentInputContainer}>
        <form
          onSubmit={handleSubmit}
          style={{ display: isCommentSent ? 'none' : 'initial' }}
        >
          <div className={styles.smallInputs}>
            <input
              name='author'
              type='text'
              className={styles.smallInput}
              placeholder='Imię i nazwisko'
              onChange={handleChange}
            />
            <div className={styles.stars}>{generateStars()}</div>
          </div>
          <textarea
            name='comment'
            className={styles.bigInput}
            placeholder='Twój komentarz'
            onChange={handleChange}
          />
          <div className={styles.btnContainer}>
            <button type='submit' onClick={() => setIsCommentSent(true)}>
              Wyślij
            </button>
          </div>
        </form>
        {isCommentSent && (
          <p className={styles.commentSentMsg}>
            Twój komentarz zostanie dodany po weryfikacji przez administratorów
            naszej strony.
          </p>
        )}
      </div>
    </div>
  );
}

export default CommentInput;
