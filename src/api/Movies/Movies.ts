import { validateResponse } from '@/helpers/validateResponse';
import { Movie, MovieList, movieListSchema, movieSchema } from './type';
import { useDispatch } from 'react-redux';
import { addFavorite } from '@/store/slices/userSlice';

export async function GetmovieRandom(): Promise<Movie> {
  const response = await fetch(`/api/movie/random`);
  const data = await response.json();

  return movieSchema.parse(data);
}

export async function Getmovie(movieId: string): Promise<Movie> {
  const response = await fetch(`/api/movie/${movieId}`);
  const data = await response.json();

  return movieSchema.parse(data);
}

export async function GetmovieTop10(): Promise<MovieList> {
  const response = await fetch(`/api/movie/top10`);
  const data = await response.json();

  return movieListSchema.parse(data);
}

export async function GetGenreMovie(params: string, page?: number): Promise<MovieList> {
  let stroke = '';
  if (page) stroke = `page=${stroke + page}&`;

  const response = await fetch(`/api/movie?${stroke}${params}`);
  const data = await response.json();

  return movieListSchema.parse(data);
}

export async function GetFavorites(): Promise<MovieList> {
  const response = await fetch(`/api/favorites`);
  const data = await response.json();
  return movieListSchema.parse(data);
}

export async function PostFavorites(id: string): Promise<void> {
  const response = await fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id.toString() }),
  });
  await validateResponse(response);
}

export async function DeleteFavorites(id: string): Promise<void> {
  const response = await fetch(`/api/favorites/${id}`, {
    method: 'DELETE',
  });

  await validateResponse(response);
}
