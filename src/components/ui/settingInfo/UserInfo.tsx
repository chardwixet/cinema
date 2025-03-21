import { PropsWithChildren } from 'react';

import style from './UserInfo.module.scss';

interface Props {
  title: string;
  info: string;
}

export function UserInfo({ title, info, children }: PropsWithChildren<Props>) {
  return (
    <div className={style.content}>
      <div className={style.picture}>{children}</div>
      <div className={style.infoContent}>
        <span className={style.title}>{title}</span>
        <span className={style.info}>{info}</span>
      </div>
    </div>
  );
}
