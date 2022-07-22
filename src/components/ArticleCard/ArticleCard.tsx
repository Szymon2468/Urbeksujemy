import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './ArticleCard.module.scss';

export default function ArticleCard({
  title,
  imgUrl,
  imgAlt,
  description,
  date
}) {
  return (
    <div className={styles.card}>
      <BsArrowRightCircle />
      <img src={imgUrl} alt={imgAlt} />
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
  // <Card sx={{ maxWidth: 300 }} className={styles.articleCard}>
  //   <CardMedia component='img' height='180' image={imgUrl} alt={imgAlt} />
  //   <CardContent>
  //     <Typography
  //       gutterBottom
  //       variant='h5'
  //       component='div'
  //       className={styles.title}
  //     >
  //       {title}
  //     </Typography>
  //     <Typography
  //       variant='body2'
  //       color='text.secondary'
  //       className={styles.description}
  //     >
  //       {description}
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size='small' className={styles.btn}>
  //       Udostępnij
  //     </Button>
  //     <Button size='small' className={styles.btn}>
  //       Czytaj więcej
  //     </Button>
  //   </CardActions>
  // </Card>
}
