import { Loader } from '@components/ui/Loader';
import { useQuery } from '@tanstack/react-query';

import { queryClient } from '@api/queryClient';
import { GetmovieRandom } from '@api/Movies';
import { MovieRandom } from './MovieRandom';

export function FetchmovieRandom() {
  const { data, isFetching, status, refetch } = useQuery(
    {
      queryFn: () => GetmovieRandom(),
      queryKey: ['movieRandom'],
    },

    queryClient,
  );

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {status === 'success' && <MovieRandom movieRandom={data} refetch={refetch} />}
          {status === 'error' && (
            <div>
              <span>Произошла ошибка</span>
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
