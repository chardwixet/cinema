import { PropsWithChildren } from 'react';
import style from './SpanTitle.module.scss';

export function SpanTitle({ children }: PropsWithChildren) {
  return <span className={`${style.spanTitle}`}>{children}</span>;
}
