import axios from "axios";
import { UserAccount } from "../@types/UserAccount";

export const UserAccountService = {
  GetUserByUsername: async (
    username: string | undefined
  ): Promise<UserAccount> => {
    if (!username) {
      console.error("Username was undefined or empty");
      throw new Error("Username must be provided");
    }
    try {
      const response = await axios.get<UserAccount>(
        `${import.meta.env.VITE_URL}/User/getuserbyid`,
        {
          params: {
            username: username,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get user");
      throw error;
    }
  },
  GetAllUsers: async (): Promise<UserAccount[]> => {
    try {
      const response = await axios.get<UserAccount[]>(
        `${import.meta.env.VITE_URL}/User/getallusers`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get user");
      throw error;
    }
  },
};
