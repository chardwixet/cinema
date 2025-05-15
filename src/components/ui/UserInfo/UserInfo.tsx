import { PropsWithChildren } from 'react';

import style from './UserInfo.module.scss';
import { SpanTitle } from '../SpanTitle';

interface Props {
  title: string;
  info: string;
}

export function UserInfo({ title, info, children }: PropsWithChildren<Props>) {
  return (
    <div className={style.content}>
      <div className={style.picture}>{children}</div>
      <div className={style.infoContent}>
        <SpanTitle>{title}</SpanTitle>
        <span className={style.info}>{info}</span>
      </div>
    </div>
  );
}
