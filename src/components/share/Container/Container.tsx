import style from './Container.module.scss';

export function Container({ children }: React.PropsWithChildren) {
  return <div className={style.container}>{children}</div>;
}
