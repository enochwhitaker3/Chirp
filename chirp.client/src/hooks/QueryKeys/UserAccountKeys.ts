const UserAccountKeys = {
  GetAllUser: ["UserAccount", "GetAllUsers"] as const,
  GetUserByUsername: (username: string) =>
    ["UserAccount", "GetUserbyUsername", username] as const,
  AddNewUser: ["UserAccount", "AddNewUser"] as const,
  GetUserByAuthId: ["UserAccount", "GetUserByAuthId"] as const,
};

export default UserAccountKeys;
