import { useQuery } from '@tanstack/react-query';
import { queryClient } from '@api/queryClient';
import { GetmovieTop10 } from '@api/Movies';
import { Loader } from '@components/ui/Loader';
import style from './TopFilms.module.scss';
import { CardMovie } from '../CardMovie';

export function TopFilms() {
  const { data, isFetching, status, refetch } = useQuery(
    {
      queryFn: () => GetmovieTop10(),
      queryKey: ['movieTop10'],
    },

    queryClient,
  );

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {status === 'success' && (
            <section className={style.content}>
              <h2 className={style.FilmTitle}>Топ 10 фильмов</h2>

              <ul className={style.list}>
                {data.map((movie, index) => (
                  <li className={style.item} key={movie.id}>
                    <div className={style.card}>
                      <span className={style.id}>{index + 1}</span>
                      <CardMovie movie={movie} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {status === 'error' && (
            <div>
              <span>Произошла ошибка </span>
              <button type="button" onClick={() => refetch()}>
                Повторить запрос
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
