import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Container } from '../Container';
import style from './Layout.module.scss';

interface Props {}

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.content}> {children}</main>
      <Footer />
    </div>
  );
}
