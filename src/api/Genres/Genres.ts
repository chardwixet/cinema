import { GenreList, GenreListShema } from './type';

export async function GetGenreList(): Promise<GenreList> {
  const response = await fetch(`/api/movie/genres`);
  const data = await response.json();

  return GenreListShema.parse(data);
}
