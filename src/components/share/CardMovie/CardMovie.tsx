import { Link } from 'react-router';
import { Movie } from '@/api/Movies';

import style from './CardMovie.module.scss';

interface Props {
  movie: Movie;
}

export function CardMovie({ movie }: Props) {
  return (
    <Link className={style.link} to={`/movie/${movie.id}`}>
      <img
        className={style.img}
        src={movie.posterUrl || `/src/assets/img/film-undefiend.jpg`}
        alt=""
      />
    </Link>
  );
}
