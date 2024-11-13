import { Post } from "../@types/Post";
import axios from "axios";
import { AddPostRequest } from "../@types/Requests/Add/AddPostRequest";

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
  AddNewPost: async (addPostRequest: AddPostRequest) => {
    if (!addPostRequest) {
      console.error("Add psot request was undefined or empty");
      throw new Error("Add post request must be provided");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/Post/addnewpost`,
        addPostRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add post");
      throw error;
    }
  },
};
