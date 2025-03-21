import { z } from 'zod';

export const movieSchema = z.object({
  id: z.number(),
  keywords: z.array(z.string()),
  backdropUrl: z.string().nullable(), // Может быть null
  production: z.string().nullable(), // Может быть null
  trailerYouTubeId: z.string().optional(), // Исправлено название поля
  language: z.string(),
  tmdbRating: z.number(),
  title: z.string(),
  cast: z.array(z.string()).nullable(), // Может быть null
  revenue: z.string().nullable(), // Может быть number или null
  posterUrl: z.string().nullable(),
  plot: z.string(),
  genres: z.array(z.string()),
  budget: z.union([z.string(), z.number()]).nullable(), // Может быть string, number или null
  languages: z.array(z.string()).nullable(), // Может быть null
  releaseDate: z.string(),
  director: z.string().nullable(), // Может быть null
  awardsSummary: z.string().nullable(), // Может быть null
  runtime: z.number(),
  trailerUrl: z.string(),
  releaseYear: z.number(), // Исправлено название поля
  countriesOfOrigin: z.array(z.string()).nullable(), // Может быть null
  originalTitle: z.string(),
  searchL: z.string(),
  homepage: z.string(),
  status: z.string(),
});

export type Movie = z.infer<typeof movieSchema>;

export const movieListSchema = z.array(movieSchema);

export type MovieList = z.infer<typeof movieListSchema>;
