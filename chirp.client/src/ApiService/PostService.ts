import { Post } from "../@types/Post";
import axios from "axios";
import { AddPostRequest } from "../@types/Requests/Add/AddPostRequest";
import { UpdatePostRequest } from "../@types/Requests/Update/UpdatePostRequest";

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
  GetPostById: async (id: number): Promise<Post> => {
    try {
      const response = await axios.get<Post>(
        `${import.meta.env.VITE_URL}/Post/getpostbyid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to load post");
      throw error;
    }
  },
  GetPostsByUserId: async (id: number): Promise<Post[]> => {
    try {
      const response = await axios.get<Post[]>(
        `${import.meta.env.VITE_URL}/Post/getpostsbyuserid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to load post");
      throw error;
    }
  },
  GetRepliesByUserId: async (id: number): Promise<Post[]> => {
    try {
      const response = await axios.get<Post[]>(
        `${import.meta.env.VITE_URL}/Post/getrepliesbyuserid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to load user replies");
      throw error;
    }
  },
  GetAllRepliesToPost: async (parentId: number): Promise<Post[]> => {
    try {
      const response = await axios.get<Post[]>(
        `${import.meta.env.VITE_URL}/Post/getrepliestopost?parentId=${parentId}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to load replies");
      throw error;
    }
  },
  UpdatePost: async (updatePostRequest: UpdatePostRequest): Promise<Post> => {
    if (!updatePostRequest) {
      console.error("update post request was undefined or empty");
      throw new Error("Add post request must be provided");
    }
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_URL}/Post/updatepost`,
        updatePostRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to update chirp");
      throw error;
    }
  },
  DeletePost: async (id: number) => {
    if (!id) {
      console.error("Post id was empty or not found");
      throw new Error("Post id was empty or not found");
    }
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_URL}/Post/deletepost?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to delete post", error);
      throw error;
    }
  },
};
