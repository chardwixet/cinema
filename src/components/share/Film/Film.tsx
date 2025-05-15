import { Movie } from 'src/api/Movies/type';
import { Button } from '@components/ui/Button';
import Refresh from '@assets/svg/refresh.svg?react';
import Heart from '@assets/svg/heart.svg?react';
import HeartFill from '@assets/svg/heart-fill.svg?react';
import { Link } from 'react-router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';

import ReactPlayer from 'react-player';
import { ShareInfoMovie } from '../ShareInfoMovie';
import { DeleteFavorites, PostFavorites } from '@/api/Movies';
import { queryClient } from '@/api/queryClient';

import style from './Film.module.scss';
import { RootState } from '@/store';

import { addFavoriteAction, deleteFavoriteAction } from '@/store/slices/userSlice';
import { Player, YtPlayer } from '../YtPlayer';
import { useModal } from '@/hooks/use-modal';
import { useAddFavorite, useDeleteFavorite } from '@/hooks/use-favorite';

export interface Props {
  film: Movie;
  refetch?: () => void;
}

export function Film({ film, refetch }: Props) {
  const user = useSelector((state: RootState) => state.user);
  const [isEnable, isSetEnable] = useState<boolean>(false);
  const [isShowingModalPlayer, toogleModalPlayer] = useModal('trailer');
  const [, toogleModal] = useModal('auth');
  const dispatch = useDispatch();

  const addFavorite = useAddFavorite();
  const deleteFavorite = useDeleteFavorite();

  useLayoutEffect(() => {
    if (user.favorites && user.favorites.indexOf(film.id.toString()) !== -1) {
      isSetEnable(true);
    }
  }, [isEnable, user.favorites, film.id]);

  function toogle() {
    isSetEnable(!isEnable);
  }

  function handleFavorite() {
    if (user.email) {
      if (!isEnable) {
        addFavorite.mutate(film.id.toString());
        dispatch(addFavoriteAction(film.id));
      } else {
        deleteFavorite.mutate(film.id.toString());
        dispatch(deleteFavoriteAction(film.id));
      }

      toogle();
    } else {
      toogleModal();
    }
  }

  return (
    <div className={style.content}>
      <YtPlayer
        url={film.trailerUrl}
        isShowingModal={isShowingModalPlayer}
        onCloseModal={toogleModalPlayer}
      />

      <div className={style.info}>
        <ShareInfoMovie
          tmdbRating={film.tmdbRating}
          releaseDate={film.releaseDate}
          genres={film.genres}
          runtime={film.runtime}
          title={film.title}
        />
        <p className={style.descr}>{film.plot}</p>
        <div className={`${style.footer} ${refetch && style.footerMobile}`}>
          <div className={`${style.footerBtn} ${refetch && style.footerWithRefetch}`}>
            <Button type="button" onClick={toogleModalPlayer}>
              Трейлер
            </Button>
          </div>

          {refetch && (
            <Link className={style.link} to={`/movie/${film.id}`}>
              <Button variant="secondary" type="button">
                О фильме
              </Button>
            </Link>
          )}
          <Button
            onClick={() => handleFavorite()}
            variant="icon"
            textSize="text-none"
            padding="padding-icon"
            type="button"
          >
            {isEnable ? <HeartFill /> : <Heart />}
          </Button>
          {refetch && (
            <Button
              onClick={refetch}
              variant="icon"
              padding="padding-icon"
              textSize="text-none"
              type="button"
            >
              <Refresh />
            </Button>
          )}
        </div>
      </div>
      <div className={style.poster}>
        <img className={style.img} src={film.posterUrl} alt="" />
      </div>
    </div>
  );
}
