import style from './FilmTitle.module.scss';

interface Props {
  title: string;
  variant?: 'big' | 'small';
}

export function FilmTitle({ title, variant = 'big' }: Props) {
  return <h2 className={`${style.filmTitle} ${style[variant]}`}>{title}</h2>;
}
