import Star from '@assets/svg/star.svg?react';

import style from './RatingInfo.module.scss';

interface Props {
  rating: number;
  variant?: 'big' | 'small';
}

export function RatingInfo({ rating, variant = 'big' }: Props) {
  let color;
  (function colorRating() {
    if (rating >= 8.6) {
      color = '#a59400';
      return;
    }

    if (rating >= 7.5) {
      color = '#308e21';
      return;
    }

    if (rating >= 6.3) {
      color = '#777';
      return;
    }

    color = '#c82020';
  })();

  return (
    <div className={`${style.rating} ${style[variant]}`} style={{ backgroundColor: color }}>
      <Star />
      <span>{rating}</span>
    </div>
  );
}
