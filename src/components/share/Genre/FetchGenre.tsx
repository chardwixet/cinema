import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { GetGenreMovie } from '@/api/Movies';
import { queryClient } from '@/api/queryClient';
import { Loader } from '@/components/ui/Loader';
import { Genre } from './Genre';
import { Button } from '@/components/ui/Button';

import style from './Genre.module.scss';

export function FetchGenre() {
  let count = 15;

  const { genre } = useParams();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching, status, refetch } =
    useInfiniteQuery(
      {
        queryFn: ({ pageParam }) => GetGenreMovie(`count=${count}&genre=${genre}`, pageParam),
        queryKey: [`movie`, genre],
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.length > 0) {
            if (allPages.length > 0 && count !== 10) count = 10;
            return allPages.length + 1;
          }
          return undefined;
        },
        select: (result) => result.pages.flatMap((page) => page),
      },

      queryClient,
    );

  return (
    <div>
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          {status === 'success' && (
            <div className={style.container}>
              <Genre genre={genre} movies={data} />

              <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>

              <Button
                type="button"
                variant="primary"
                onClick={() => fetchNextPage()}
                isDisabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Загружается...'
                  : hasNextPage
                    ? 'Показать ещё'
                    : 'Нечего загружать'}
              </Button>
            </div>
          )}
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
