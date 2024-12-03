const PostKeys = {
  GetAllPosts: ["Post", "GetAllPosts"] as const,
  AddNewPost: ["Post", "AddNewPost"] as const,
  GetPostById: (id: number) => ["Post", "GetPostById", id] as const,
  GetPostByUserId: (id: number) => ["Post", "GetPostByUserId", id] as const,
  GetRepliesByUserId: (id: number) =>
    ["Post", "GetRepliesByUserId", id] as const,
  GetAllRepliesToPost: (parentId: number) =>
    ["Post", "GetAllRepliesToPost", parentId] as const,
};

export default PostKeys;
