import { FetchGenre } from '@/components/share/Genre/FetchGenre';
import { Genres } from './Genres';
import { Home } from './Home';
import { FetchInfomovie } from '@/components/share/Infomovie/FetchInfomovie';
import GenresSvg from '@assets/svg/genres.svg?react';

import { AccountPage } from './AccountPage';

export interface RouterType {
  title: string;
  path: string;
  element: JSX.Element;
  svg?: JSX.Element;
  child?: RouterType[];
}

export const pagesMenuData: RouterType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Главная',
  },
  {
    path: '/movie/genres',
    element: <Genres />,
    title: 'Жанры',
    svg: <GenresSvg />,
  },
];

export const pagesData: RouterType[] = [
  {
    path: '/movie/:movieId',
    element: <FetchInfomovie />,
    title: 'Фильм',
  },
  {
    path: '/movie/genres/:genre',
    element: <FetchGenre />,
    title: 'Жанр',
  },
  // {
  //   path: '/account',
  //   element: <AccountPage />,
  //   title: 'Аккаунт',
  // },
];
