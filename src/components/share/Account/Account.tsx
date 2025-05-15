import { Outlet } from 'react-router';
import Heart from '@assets/svg/heart.svg?react';
import User from '@assets/svg/user.svg?react';
import { useSelector } from 'react-redux';

import { LinkMenu } from '@/components/ui/LinkMenu';

import style from './Account.module.scss';
import { RootState } from '@/store';
import { Container } from '../Container';

interface LinksAccount {
  to: string;
  child: {
    svg: JSX.Element;
    text: string;
    textMobile: string;
  };
}

const LINKS_ACCOUNTS: LinksAccount[] = [
  {
    to: '/account/favorites',
    child: {
      svg: <Heart />,
      text: 'Избранные фильмы',
      textMobile: 'Избранное',
    },
  },
  {
    to: '/account/settings',
    child: {
      svg: <User />,
      text: 'Настройка аккаунта',
      textMobile: 'Настройки',
    },
  },
];

export function Account() {
  return (
    <>
      <Container>
        <h2 className={style.title}>Мой аккаунт</h2>
        <ul className={style.list}>
          {LINKS_ACCOUNTS.map((item) => (
            <li key={crypto.randomUUID()}>
              <LinkMenu to={item.to} childLink>
                {item.child.svg}
                <span className={style.linkText}>{item.child.text}</span>
                <span className={style.linkMobileText}>{item.child.textMobile}</span>
              </LinkMenu>
            </li>
          ))}
        </ul>
      </Container>

      <div>
        <Outlet />
      </div>
    </>
  );
}
