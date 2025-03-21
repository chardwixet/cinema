import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MovieList } from '@/api/Movies';
import style from './DropDown.module.scss';
import { ShareInfoMovie } from '@/components/share/ShareInfoMovie';

import { offSearch } from '@/store/slices/modalSlice';
import useClickOutside from '@/hooks/use-clickOutside';

export interface Props {
  data: MovieList;
  isFocus: boolean;
  refSearch: any;
}

export function DropDown({ data, isFocus, refSearch }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const menuRef = useRef(null);

  function toogle() {
    setIsOpen((old) => !old);
  }

  useClickOutside(menuRef, refSearch, () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  });

  useEffect(() => {
    if (isFocus && data.length) {
      setIsOpen(true);
    }
  }, [isFocus, data]);

  return (
    isOpen && (
      <ul className={style.list} ref={menuRef}>
        {data.map((item) => (
          <li key={item.id} className={style.item}>
            <Link
              onClick={() => {
                dispatch(offSearch());
                toogle();
              }}
              className={`${style.link}`}
              to={`/movie/${item.id}`}
            >
              <img className={style.img} src={item.posterUrl} alt="" />
              <ShareInfoMovie
                tmdbRating={item.tmdbRating}
                releaseDate={item.releaseDate}
                genres={item.genres}
                runtime={item.runtime}
                title={item.title}
                variant="small"
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
