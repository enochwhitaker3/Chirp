import { useQuery } from "@tanstack/react-query";
import { PostService } from "../ApiService/PostService";
import keys from "../hooks/QueryKeys/PostKeys";

export const PostQueries = {
  useGetAllPosts: () => {
    return useQuery({
      queryFn: () => PostService.GetAllPosts(),
      queryKey: keys.GetAllPosts,
    });
  },
};
