import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import style from './Layout.module.scss';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.content}> {children}</main>
      <Footer />
    </div>
  );
}
