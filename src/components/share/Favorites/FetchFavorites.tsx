import { useQuery } from '@tanstack/react-query';
import { queryClient } from '@api/queryClient';
import { GetFavorites } from '@api/Movies';
import { Loader } from '@components/ui/Loader';
import { Favorites } from './Favorites';

import style from './TopFilms.module.scss';

export function FetchFavorites() {
  const { data, isFetching, status, refetch, error } = useQuery(
    {
      queryFn: () => GetFavorites(),
      queryKey: ['movie', 'favorites'],
      staleTime: 0,
    },

    queryClient,
  );

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {status === 'success' && <Favorites data={data} />}
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
