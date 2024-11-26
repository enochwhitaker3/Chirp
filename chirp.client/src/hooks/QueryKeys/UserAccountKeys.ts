const UserAccountKeys = {
  GetAllUser: ["UserAccount", "GetAllUsers"] as const,
  GetUserByUsername: (username: string) =>
    ["UserAccount", "GetUserbyUsername", username] as const,
  AddNewUser: ["UserAccount", "AddNewUser"] as const,
  GetUserByAuthId: (authId: string) =>
    ["UserAccount", "GetUserByAuthId", authId] as const,
  EditAccount: (authId: string) =>
    ["UserAccount", "EditAccount", authId] as const,
};

export default UserAccountKeys;
