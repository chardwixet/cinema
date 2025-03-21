import { Link } from 'react-router';
import Arrow from '@assets/svg/arrow.svg?react';
import style from './Genre.module.scss';

interface Props {
  movies: any[];
  genre: string;
}

export function Genre({ genre, movies }: Props) {
  const title = genre[0].toUpperCase() + genre.slice(1, genre.length);

  return (
    <section className={style.content}>
      <Link className={style.linkTitle} to="/movie/genres">
        <Arrow />
        <h2 className={style.title}>{title}</h2>
      </Link>
      <ul className={style.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={style.item}>
            <Link to={`/movie/${movie.id}`}>
              <div className={style.imageBlock}>
                <img className={style.img} src={movie.posterUrl} alt="" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
