import style from './Subtitle.module.scss';

interface Props {
  title: string;
  variant?: 'big' | 'small';
}

export function Subtitle({ title, variant = 'big' }: Props) {
  return <h2 className={`${style.subtitle} ${style[variant]}`}>{title}</h2>;
}
