import { z } from 'zod';

export const GenreListShema = z.array(z.string());

export type GenreList = z.infer<typeof GenreListShema>;
