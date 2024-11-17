const UserAccountKeys = {
  GetAllPosts: ["Post", "GetAllPosts"] as const,
  AddNewPost: ["Post", "AddNewPost"] as const,
  GetPostById: (id: number) => ["Post", "GetPostById", id] as const,
  GetAllRepliesToPost: (parentId: number) =>
    ["Post", "GetAllRepliesToPost", parentId] as const,
};

export default UserAccountKeys;
