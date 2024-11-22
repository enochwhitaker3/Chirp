const LikeKeys = {
  AddLike: (id: number) => ["Like", "AddLike", id] as const,
  LikeByUserId: (id: number) => ["Like", "LikeByUserId", id] as const,
  LikeByPostId: (id: number) => ["Like", "LikeByPostId", id] as const,
  RemoveLike: (id: number) => ["Like", "RemoveLike", id] as const,
};

export default LikeKeys;
