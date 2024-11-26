import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserAccountService } from "../../ApiService/UserAccountService";
import keys from "../QueryKeys/UserAccountKeys";
import { AddUserRequest } from "../../@types/Requests/Add/AddUserRequest";
import { UpdateUserRequest } from "../../@types/Requests/Update/UpdateUserRequest";
import toast from "react-hot-toast";

export const UserAccountQueries = {
  useGetAllUsers: () => {
    return useQuery({
      queryFn: () => UserAccountService.GetAllUsers(),
      queryKey: keys.GetAllUser,
    });
  },
  useGetUserByUsername: (username: string) => {
    return useQuery({
      queryFn: () => UserAccountService.GetUserByUsername(username),
      queryKey: keys.GetUserByUsername(username),
    });
  },
  useGetUserByAuthId: (authId: string) => {
    return useQuery({
      queryFn: () => UserAccountService.GetUserByAuthId(authId),
      queryKey: keys.GetUserByAuthId(authId),
    });
  },
  useAddNewUser: (addUserRequest: AddUserRequest) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: () => UserAccountService.AddNewUser(addUserRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.AddNewUser });
        queryClient.invalidateQueries({ queryKey: keys.GetAllUser });
      },
    });
  },
};

export const useEditAccount = (username: string, authId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updateUserRequest: UpdateUserRequest) =>
      UserAccountService.UpdateUser(updateUserRequest),
    onSuccess: () => {
      toast.success("Updated!");
      queryClient.invalidateQueries({ queryKey: keys.EditAccount(authId) });
      queryClient.invalidateQueries({
        queryKey: keys.GetUserByUsername(username),
      });
      queryClient.invalidateQueries({ queryKey: keys.GetUserByAuthId(authId) });
    },
  });
};
