import axios from "axios";
import { UserAccount } from "../@types/UserAccount";
import { AddUserRequest } from "../@types/Requests/Add/AddUserRequest";

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
  // GetAllUsersAuthOnly: async (id_token: string): Promise<UserAccount[]> => {
  //   try {
  //     const response = await axios.get<UserAccount[]>(
  //       `${import.meta.env.VITE_URL}/User/getallusersauthonly`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${id_token}`,
  //         },
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Failed to get user");
  //     throw error;
  //   }
  // },
  GetUserByAuthId: async (authId: string) => {
    if (!authId) {
      console.error("Auth id was undefined or empty");
      throw new Error("Auth id must be provided");
    }
    try {
      const response = await axios.get<UserAccount>(
        `${import.meta.env.VITE_URL}/User/getuserbyauthid`,
        {
          params: {
            authId: authId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get user by authid");
      throw error;
    }
  },
  AddNewUser: async (addUserRequest: AddUserRequest) => {
    if (!addUserRequest) {
      console.error("Add user request was undefined or empty");
      throw new Error("Add user request must be provided");
    }
    try {
      const response = await axios.post<boolean>(
        `${import.meta.env.VITE_URL}/User/addnewuser`,
        addUserRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to add user");
      throw error;
    }
  },
};
