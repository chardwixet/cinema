import { Link } from 'react-router';
import style from './Header.module.scss';
import { WrapperMenu } from '../WrapperMenu/WrapperMenu';
import { Authorization } from '../Authorization';

export function Header() {
  return (
    <header className={style.header}>
      <Link to="/" className={style.link}>
        <h1 className={style.logo}>LogoKino</h1>
      </Link>
      <WrapperMenu />

      <Authorization />
    </header>
  );
}
