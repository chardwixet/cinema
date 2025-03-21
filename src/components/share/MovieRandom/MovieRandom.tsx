import { Movie } from 'src/api/Movies/type';
import { Film } from '../Film';
import style from './movieRandom.module.scss';

export interface Props {
  movieRandom: Movie;
  refetch: () => void;
}

export function MovieRandom({ movieRandom, refetch }: Props) {
  return <Film film={movieRandom} refetch={refetch} />;
}
