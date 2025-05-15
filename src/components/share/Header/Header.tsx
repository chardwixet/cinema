import Logo from '@assets/svg/logo.svg?react';
import { Link } from 'react-router';
import style from './Header.module.scss';
import { WrapperMenu } from '../WrapperMenu/WrapperMenu';
import { Authorization } from '../Authorization';
import { Container } from '../Container';

export function Header() {
  return (
    <Container>
      <header className={style.header}>
        <Link to="/" className={style.link}>
          <h1>LogoCinema</h1>
        </Link>
        <WrapperMenu />
      </header>
    </Container>
  );
}
