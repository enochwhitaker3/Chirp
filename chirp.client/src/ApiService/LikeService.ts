import axios from "axios";
import { AddLikeRequest } from "../@types/Requests/Add/AddLikeRequest";
import { RemoveLikeRequest } from "../@types/Requests/Remove/RemoveLikeRequest";
import { Like } from "../@types/Like";

export const LikeService = {
  AddLike: async (AddLikeRequest: AddLikeRequest) => {
    if (!AddLikeRequest) {
      console.error("Add like request was undefined or empty");
      throw new Error("Add like request must be provided");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/Like/addlike`,
        AddLikeRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add like");
      throw error;
    }
  },
  GetLikesByPostId: async (id: number): Promise<Like[]> => {
    try {
      const response = await axios.get<Like[]>(
        `${import.meta.env.VITE_URL}/Like/getlikesbypostid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get likes");
      throw error;
    }
  },
  GetLikesByUserId: async (id: number): Promise<Like[]> => {
    try {
      const response = await axios.get<Like[]>(
        `${import.meta.env.VITE_URL}/Like/getlikesbyuserid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get likes");
      throw error;
    }
  },
  RemoveLike: async (removeLikeRequest: RemoveLikeRequest) => {
    if (!removeLikeRequest) {
      console.error("Like id was empty or not found");
      throw new Error("Like id was empty or not found");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/Like/removelike`,
        removeLikeRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to remove like", error);
      throw error;
    }
  },
};
