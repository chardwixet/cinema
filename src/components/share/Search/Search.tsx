import SearchSvg from '@assets/svg/search-icon.svg?react';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import style from './Search.module.scss';
import { DropDown } from '@/components/ui/DropDown';
import { queryClient } from '@/api/queryClient';
import { GetGenreMovie } from '@/api/Movies';

export function Search() {
  const [input, setInput] = useState('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const refSearch = useRef(null);
  const { data, status } = useQuery(
    {
      queryFn: () => GetGenreMovie(`count=5&title=${input}`),
      queryKey: ['movieDrop', input],
      enabled: Boolean(input),
    },
    queryClient,
  );

  return (
    <div className={style.content}>
      <label htmlFor="search" className={style.label} ref={refSearch}>
        <button type="button" className={`${style.btnReset} ${style.btn}`}>
          <SearchSvg className={style.icon} />
        </button>
        <input
          id="search"
          type="text"
          className={`${style.searchReset} ${style.search}`}
          placeholder="Поиск"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => {
            if (e.target.value) {
              setTimeout(() => {
                setInput(e.target.value.trim());
              }, 2000);
            } else {
              setInput(e.target.value);
            }
          }}
        />
      </label>
      {status === 'success' && <DropDown isFocus={isFocus} data={data} refSearch={refSearch} />}
    </div>
  );
}
