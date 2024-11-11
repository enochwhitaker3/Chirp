import { Post } from "../@types/Post";
import axios from "axios";

export const PostService = {
  GetAllPosts: async (): Promise<Post[]> => {
    try {
      const response = await axios.get<Post[]>(
        `${import.meta.env.VITE_URL}/Post/getallposts`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get posts");
      throw error;
    }
  },
};
