import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { Getmovie } from '@/api/Movies';
import { queryClient } from '@/api/queryClient';
import { Loader } from '@/components/ui/Loader';
import { Infomovie } from './Infomovie';

export function FetchInfomovie() {
  const { movieId } = useParams();

  const { data, isFetching, status, refetch } = useQuery(
    {
      queryFn: () => Getmovie(movieId),
      queryKey: [`movieId${movieId}`],
      staleTime: Infinity,
    },

    queryClient,
  );

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {status === 'success' && <Infomovie movie={data} />}
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
