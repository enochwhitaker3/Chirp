import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PostService } from "../ApiService/PostService";
import keys from "../hooks/QueryKeys/PostKeys";
import { AddPostRequest } from "../@types/Requests/Add/AddPostRequest";

export const PostQueries = {
  useGetAllPosts: () => {
    return useQuery({
      queryFn: () => PostService.GetAllPosts(),
      queryKey: keys.GetAllPosts,
      retry: false,
    });
  },
  useGetPostById: (id: number) => {
    return useQuery({
      queryFn: () => PostService.GetPostById(id),
      queryKey: keys.GetPostById(id),
    });
  },
  useGetAllRepliesToPost: (parentId: number) => {
    return useQuery({
      queryFn: () => PostService.GetAllRepliesToPost(parentId),
      queryKey: keys.GetAllRepliesToPost(parentId),
    });
  },
};

export const useAddNewPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (addPostRequest: AddPostRequest) =>
      PostService.AddNewPost(addPostRequest),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.AddNewPost });
      queryClient.invalidateQueries({ queryKey: keys.GetAllPosts });
    },
  });
};
