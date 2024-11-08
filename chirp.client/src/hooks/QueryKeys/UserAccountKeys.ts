const UserAccountKeys = {
  GetAllUser: ["UserAccount", "GetAllUsers"] as const,
  GetUserByUsername: ["UserAccount", "GetUserByUsername"] as const,
  AddNewUser: ["UserAccount", "AddNewUser"] as const,
  GetUserByAuthId: ["UserAccount", "GetUserByAuthId"] as const,
};

export default UserAccountKeys;
