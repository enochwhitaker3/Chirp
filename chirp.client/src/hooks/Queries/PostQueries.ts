import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PostService } from "../../ApiService/PostService";
import keys from "../QueryKeys/PostKeys";
import { AddPostRequest } from "../../@types/Requests/Add/AddPostRequest";
import toast from "react-hot-toast";
import { UpdatePostRequest } from "../../@types/Requests/Update/UpdatePostRequest";
import { useNavigate } from "react-router-dom";

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
  useGetPostsByUserId: (id: number) => {
    return useQuery({
      queryFn: () => PostService.GetPostsByUserId(id),
      queryKey: keys.GetPostById(id),
    });
  },
  useGetRepliesByUserId: (id: number) => {
    return useQuery({
      queryFn: () => PostService.GetRepliesByUserId(id),
      queryKey: keys.GetRepliesByUserId(id),
    });
  },
  useGetAllRepliesToPost: (parentId: number) => {
    return useQuery({
      queryFn: () => PostService.GetAllRepliesToPost(parentId),
      queryKey: keys.GetAllRepliesToPost(parentId),
    });
  },
  useDeletePost: (id: number) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => PostService.DeletePost(id),
      onSuccess: () => {
        navigate("/");
        toast.success("Deleted Chirp!");
        queryClient.invalidateQueries({
          queryKey: keys.GetAllPosts,
        });
      },
    });
  },
};

export const useAddNewPost = (parentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (addPostRequest: AddPostRequest) =>
      PostService.AddNewPost(addPostRequest),
    onSuccess: () => {
      toast.success("Posted Chirp!");
      queryClient.invalidateQueries({ queryKey: keys.AddNewPost });
      queryClient.invalidateQueries({ queryKey: keys.GetAllPosts });
      queryClient.invalidateQueries({
        queryKey: keys.GetAllRepliesToPost(parentId),
      });
    },
  });
};

export const useEditPost = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatePostRequest: UpdatePostRequest) =>
      PostService.UpdatePost(updatePostRequest),
    onSuccess: () => {
      toast.success("Updated!");
      queryClient.invalidateQueries({ queryKey: keys.GetAllPosts });
      queryClient.invalidateQueries({ queryKey: keys.GetPostById(id) });
    },
  });
};
