import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import keys from "../hooks/QueryKeys/FollowKeys";
import { AddFollowRequest } from "../@types/Requests/Add/AddFollowRequest";
import { RemoveFollowRequest } from "../@types/Requests/Remove/RemoveFollowRequest";
import { FollowService } from "../ApiService/FollowService";

export const FollowQueries = {
  useAddFollow: (AddFollowRequest: AddFollowRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => FollowService.AddFollow(AddFollowRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.AddFollow(AddFollowRequest.followedUserId, AddFollowRequest.followingUserId),
        });
      },
    });
  },
  useGetFollowersByUserId: (id: number) => {
    return useQuery({
      queryFn: () => FollowService.GetFollowersByUserId(id),
      queryKey: keys.GetFollowersByUserId(id),
    });
  },
  useGetFollowingByUserId: (id: number) => {
    return useQuery({
      queryFn: () => FollowService.GetFollowingByUserId(id),
      queryKey: keys.GetFollowingByUserId(id),
    });
  },
  useUnfollow: (removeFollowRequest: RemoveFollowRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => FollowService.Unfollow(removeFollowRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: keys.Unfollow(removeFollowRequest.followedUserId, removeFollowRequest.followingUserId),
        });
      },
    });
  },
};
