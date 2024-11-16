const UserAccountKeys = {
  GetAllPosts: ["Post", "GetAllPosts"] as const,
  AddNewPost: ["Post", "AddNewPost"] as const,
  GetPostById: ["Post", "GetPostById"] as const,
  GetAllRepliesToPost: ["Post", "GetAllRepliesToPost"] as const,
};

export default UserAccountKeys;
