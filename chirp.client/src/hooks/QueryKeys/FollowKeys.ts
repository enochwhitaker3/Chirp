const FollowKeys = {
  AddFollow: (followed_id: number, following_id: number) => ["Follow", "AddFollow", followed_id, following_id] as const,
  GetFollowersByUserId: (id: number) => ["Follow", "GetFollowersByUserId", id] as const,
  GetFollowingByUserId: (id: number) => ["Follow", "GetFollowingByUserId", id] as const,
  Unfollow: (followed_id: number, following_id: number) => ["Follow", "Unfollow", followed_id, following_id] as const,
};

export default FollowKeys;
