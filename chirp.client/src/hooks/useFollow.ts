import { useContext, useEffect, useState } from "react";
import { UserAccountContextInterface } from "../@types/UserAccount";
import { UserAccountContext } from "../context/UserAccountContext";
import { FollowQueries } from "./Queries/FollowQueries";

export const useFollow = (
  viewedUserId: number,
  followersList: { id: number }[]
) => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const [isFollowed, setIsFollowed] = useState(
    followersList?.some((x) => x.id === user?.id)
  );

  useEffect(() => {
    setIsFollowed(followersList?.some((x) => x.id === user?.id));
  }, [followersList, user?.id]);

  const { mutate: AddFollow } = FollowQueries.useAddFollow({
    followingUserId: user?.id ?? 0,
    followedUserId: viewedUserId,
  });

  const { mutate: RemoveFollow } = FollowQueries.useUnfollow({
    followingUserId: user?.id ?? 0,
    followedUserId: viewedUserId
  });

  const handleFollowToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user && viewedUserId) {
      if (!isFollowed) {
        AddFollow();
        setIsFollowed(true);
      } else {
        RemoveFollow();
        setIsFollowed(false);
      }
    }
  };

  return { isFollowed, handleFollowToggle };
};
