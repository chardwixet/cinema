import { RatingInfo } from '@/components/ui/RatingInfo';
import style from './ShareInfoMovie.module.scss';
import { Subtitle } from '@/components/ui/Subtitle';

interface Props {
  tmdbRating: number;
  releaseDate: string;
  genres: string[];
  runtime: number;
  title: string;
  variant?: 'big' | 'small';
}

export function ShareInfoMovie({
  tmdbRating,
  releaseDate,
  genres,
  runtime,
  title,
  variant = 'big',
}: Props) {
  function hourMin(min: number) {
    const hour = Math.ceil(min / 60);

    if (hour) {
      return `${hour} ч ${Math.round(min / hour)} мин`;
    }
    return `${min} мин`;
  }

  const time = hourMin(runtime);

  return (
    <div className={`${style.content} ${style[variant]}`}>
      <div className={`${style.topInfo}`}>
        <RatingInfo rating={Number(tmdbRating.toFixed(1))} variant={variant} />
        <span>{releaseDate.slice(0, 4)}</span>
        <span>{genres[0]}</span>
        <span>{time}</span>
      </div>
      <Subtitle title={title} variant={variant} />
    </div>
  );
}
