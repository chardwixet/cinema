import { Outlet } from 'react-router';
import Heart from '@assets/svg/heart.svg?react';
import People from '@assets/svg/people.svg?react';
import { useSelector } from 'react-redux';

import { LinkMenu } from '@/components/ui/LinkMenu';

import style from './Account.module.scss';
import { RootState } from '@/store';

interface LinksAccount {
  to: string;
  child: {
    svg?: JSX.Element;
    text?: string;
  };
}

const LINKS_ACCOUNTS: LinksAccount[] = [
  {
    to: '/account/favorites',
    child: {
      svg: <Heart />,
      text: 'Избранные фильмы',
    },
  },
  {
    to: '/account/settings',
    child: {
      svg: <People />,
      text: 'Настройка аккаунта',
    },
  },
];

export function Account() {
  return (
    <>
      <h2 className={style.title}>Мой аккаунт</h2>
      <ul className={style.list}>
        {LINKS_ACCOUNTS.map((item) => (
          <li key={crypto.randomUUID()}>
            <LinkMenu to={item.to} childLink>
              {item.child.svg}
              {item.child.text}
            </LinkMenu>
          </li>
        ))}
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
}
