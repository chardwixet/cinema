import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '@/api/Movies';
import { CardMovie } from '../CardMovie';
import { ButtonEx } from '@/components/ui/ButtonEx';
import { useDeleteFavorite } from '@/hooks/use-favorite';

import style from './Favorites.module.scss';
import { RootState } from '@/store';
import { deleteFavoriteAction } from '@/store/slices/userSlice';

interface Props {
  data: Movie[];
}

export function Favorites({ data }: Props) {
  const deleteFavorite = useDeleteFavorite();

  const favoriteArr = useSelector((state: RootState) => state.user.favorites);

  const res = data.sort((a, b) => {
    return favoriteArr.indexOf(a.id.toString()) - favoriteArr.indexOf(b.id.toString());
  });

  const [data1, setData1] = useState(res.reverse());

  const dispatch = useDispatch();

  function some(movieId: number) {
    const arr = data1.filter((item) => {
      return item.id !== movieId;
    });

    deleteFavorite.mutate(movieId.toString());
    dispatch(deleteFavoriteAction(movieId));
    setData1(arr);
  }
  return (
    <section className={style.content}>
      <ul className={style.list}>
        {data1.map((movie) => (
          <li className={style.item} key={movie.id}>
            <div className={style.btn}>
              <ButtonEx onClick={() => some(movie.id)} positionFor="card" />
            </div>
            <CardMovie movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}
