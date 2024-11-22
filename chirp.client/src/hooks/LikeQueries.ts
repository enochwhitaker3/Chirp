import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../hooks/QueryKeys/LikeKeys";

import { LikeService } from "../ApiService/LikeService";
import { AddLikeRequest } from "../@types/Requests/Add/AddLikeRequest";
import { RemoveLikeRequest } from "../@types/Requests/Remove/RemoveLikeRequest";

export const LikeQueries = {
  useAddLike: (AddLikeRequest: AddLikeRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => LikeService.AddLike(AddLikeRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.AddLike(AddLikeRequest.postId),
        });
      },
    });
  },
  useGetLikesByUserId: (id: number) => {
    return useQuery({
      queryFn: () => LikeService.GetLikesByUserId(id),
      queryKey: keys.LikeByUserId(id),
    });
  },
  useGetLikesByPostId: (id: number) => {
    return useQuery({
      queryFn: () => LikeService.GetLikesByPostId(id),
      queryKey: keys.LikeByPostId(id),
    });
  },
  useRemoveLike: (removeLikeRequest: RemoveLikeRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => LikeService.RemoveLike(removeLikeRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.RemoveLike(removeLikeRequest.postId),
        });
      },
    });
  },
};
