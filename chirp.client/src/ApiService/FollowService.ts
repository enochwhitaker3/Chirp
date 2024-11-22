import axios from "axios";
import { AddFollowRequest } from "../@types/Requests/Add/AddFollowRequest";
import { RemoveFollowRequest } from "../@types/Requests/Remove/RemoveFollowRequest";
import { UserAccount } from "../@types/UserAccount";

export const FollowService = {
  AddFollow: async (AddFollowRequest: AddFollowRequest) => {
    if (!AddFollowRequest) {
      console.error("Add follow request was undefined or empty");
      throw new Error("Add follow request must be provided");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/Follow/addfollow`,
        AddFollowRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to follow");
      throw error;
    }
  },
  GetFollowersByUserId: async (id: number): Promise<UserAccount[]> => {
    try {
      const response = await axios.get<UserAccount[]>(
        `${import.meta.env.VITE_URL}/Follow/getfollowersbyuserid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get followers");
      throw error;
    }
  },
  GetFollowingByUserId: async (id: number): Promise<UserAccount[]> => {
    try {
      const response = await axios.get<UserAccount[]>(
        `${import.meta.env.VITE_URL}/Follow/getfollowingbyuserid?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get following users");
      throw error;
    }
  },
  Unfollow: async (removeFollowRequest: RemoveFollowRequest) => {
    if (!removeFollowRequest) {
      console.error("Follow id was empty or not found");
      throw new Error("Follow id was empty or not found");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/Follow/unfollow`,
        removeFollowRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to remove Follow", error);
      throw error;
    }
  },
};
