import { useQuery } from '@tanstack/react-query';
import { queryClient } from '@api/queryClient';
import { Loader } from '@components/ui/Loader';

import { Link } from 'react-router';
import style from './GenreList.module.scss';
import { GetGenreList } from '@/api/Genres';
import { Container } from '../Container';

export function GenreList() {
  const { data, isFetching, status, refetch } = useQuery(
    {
      queryFn: () => GetGenreList(),
      queryKey: ['genres'],
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
            <Container>
              <section className={style.content}>
                <h2 className={style.FilmTitle}>Жанры фильмов</h2>
                <ul className={style.list}>
                  {data.map((genre) => (
                    <Link
                      key={crypto.randomUUID()}
                      className={style.link}
                      to={`/movie/genres/${genre}`}
                    >
                      <li className={style.item}>
                        <div className={style.imageBlock}>
                          <img className={style.img} src={`/src/assets/img/${genre}.jpg`} alt="" />
                        </div>
                        <div className={style.descr}>
                          <span className={style.text}>{genre}</span>
                        </div>
                        {/* <img
                        className={style.img}
                        src={genre.posterUrl ? genre.posterUrl : ''}
                        alt=""
                      /> */}
                      </li>
                    </Link>
                  ))}
                </ul>
              </section>
            </Container>
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
