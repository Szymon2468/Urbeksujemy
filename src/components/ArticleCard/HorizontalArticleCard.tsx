import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ArticleCard.module.scss';

export default function ArticleCard({ title, imgUrl, imgAlt, description }) {
  return (
    <Card sx={{ maxWidth: 700 }} className={styles.HorizontalArticleCard}>
      <CardMedia
        component='img'
        height='180px'
        image={imgUrl.src}
        alt={imgAlt}
      />
      <div className={styles.cardContentContainer}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className={styles.title}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className={styles.horizontalDescription}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' className={styles.btn}>
            Udostępnij
          </Button>
          <Button size='small' className={styles.btn}>
            Czytaj więcej
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}