import { FetchmovieRandom } from '../movieRandom/FetchmovieRandom';
import { TopFilms } from '../TopFilms';

export function Content() {
  return (
    <>
      <FetchmovieRandom />
      <TopFilms />
    </>
  );
}
