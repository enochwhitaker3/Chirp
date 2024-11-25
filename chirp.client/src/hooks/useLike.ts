import { useContext, useEffect, useState } from "react";
import { UserAccountContextInterface } from "../@types/UserAccount";
import { UserAccountContext } from "../context/UserAccountContext";
import { LikeQueries } from "./Queries/LikeQueries";

export const useLike = (postId: number, initialLikes: { id: number }[]) => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const [isLiked, setIsLiked] = useState(
    initialLikes.some((like) => like.id === user?.id)
  );

  const { mutate: AddLike } = LikeQueries.useAddLike({
    userId: user?.id ?? 0,
    postId,
  });

  const { mutate: RemoveLike } = LikeQueries.useRemoveLike({
    userId: user?.id ?? 0,
    postId,
  });

  useEffect(() => {
    setIsLiked(initialLikes.some((like) => like.id === user?.id));
  }, [initialLikes, user]);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user && postId) {
      if (!isLiked) {
        AddLike();
        setIsLiked(true);
      } else {
        RemoveLike();
        setIsLiked(false);
      }
    }
  };

  return { isLiked, handleLikeToggle };
};
