import { useMutation } from '@tanstack/react-query';
import { DeleteFavorites, PostFavorites } from '@/api/Movies';

export function useDeleteFavorite() {
  return useMutation({
    mutationFn: DeleteFavorites,
  });
}

export function useAddFavorite() {
  return useMutation({
    mutationFn: PostFavorites,
  });
}
