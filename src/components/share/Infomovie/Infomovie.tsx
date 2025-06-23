import { Movie } from '@/api/Movies';
import { Film } from '../Film';

import style from './Infomovie.module.scss';
import { Container } from '../Container';
import { SpanTitle } from '@/components/ui/SpanTitle';

interface Props {
  movie: Movie;
}

export function Infomovie({ movie }: Props) {
  const INFO_MOVIE = [
    {
      title: 'Язык оригинала',
      result: movie.language,
    },
    {
      title: 'Бюджет',
      result: movie.budget && `${movie.budget} руб.`,
    },
    {
      title: 'Выручка',
      result: movie.revenue && `${movie.revenue} руб.`,
    },
    {
      title: 'Режиссёр',
      result: movie.director,
    },
    {
      title: 'Продакшен',
      result: movie.production,
    },
    {
      title: 'Награды',
      result: movie.awardsSummary,
    },
  ];

  return (
    <Container>
      <Film film={movie} />
      <div className={style.info}>
        <h3 className={style.FilmTitle}>О фильме</h3>
        <div className={style.someList}>
          <ul className={style.listTitle}>
            {INFO_MOVIE.map(
              (item) =>
                item.result && (
                  <li key={crypto.randomUUID()} className={style.item}>
                    <div className={style.blockTitle}>
                      <SpanTitle>{item.title}</SpanTitle>
                      <span className={style.dots} />
                    </div>
                    <div className={style.text}>{item.result}</div>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </Container>
  );
}
