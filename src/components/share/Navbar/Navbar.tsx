import { Button } from '@components/ui/Button';
import { NavLink } from 'react-router';

import style from './Navbar.module.scss';
import { pagesMenuData } from '@/pages/pageData';
import { LinkMenu } from '@/components/ui/LinkMenu';

export function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {pagesMenuData.map((item) => (
          <li className={style.item} key={crypto.randomUUID()}>
            <LinkMenu to={item.path}>
              <span className={style.logo}>{item.logo}</span>
              <span className={style.text}>{item.title}</span>
            </LinkMenu>
          </li>
        ))}
      </ul>
    </nav>
  );
}
