import Profilesvg from "./Sidebar/Profile";
import ChirpLike from "./ChirpCard/chirplike";
import ChirpReply from "./ChirpCard/chirpreply";
import { Post } from "../../@types/Post";
import { FC, useContext, useEffect, useState } from "react";
import { useCalcDaysAgo } from "../../hooks/useCalcDaysAgo";
import { useNavigate } from "react-router-dom";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";
import { LikeQueries } from "../../hooks/LikeQueries";

const ChirpCard: FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  const { user, isLoading } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const { mutate: AddLike } = LikeQueries.useAddLike({
    userId: user?.id ?? 0,
    postId: post.id,
  });

  const { mutate: RemoveLike } = LikeQueries.useRemoveLike({
    userId: user?.id ?? 0,
    postId: post.id,
  });

  const [isLiked, setIsLiked] = useState(
    post.likes.some((like) => like.id === user?.id)
  );

  useEffect(() => {
    setIsLiked(post.likes.some((like) => like.id === user?.id));
  }, [post.likes, user]);

  const timePosted = useCalcDaysAgo(post.timePosted);
  const handleAddLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (user && post && !isLiked) {
      AddLike();
      setIsLiked(true);
    } else if (user && post && isLiked) {
      RemoveLike();
      setIsLiked(false);
    }
  };

  if (isLoading) {
    return "";
  }

  return (
    <div
      className="flex flex-row mb-5 dark:bg-neutral-900 bg-[#ffffff] shadow-xl dark:shadow-gray-800/30 max-w-[600px] dark:text-white text-black rounded-md h-fit pl-5 pt-5 cursor-pointer mobile:mx-0 mx-4"
      onClick={handleCardClick}
    >
      <div className="flex flex-row justify-start w-fit">
        {post.userPFP && post.userPFP != null ? (
          <img src={post.userPFP} className="w-8 h-8 mr-4 rounded-full" />
        ) : (
          <Profilesvg />
        )}
      </div>
      <div className="flex flex-col justify-start items-center mr-5 mt-1 w-full">
        <div className="flex flex-row justify-start w-full">
          <p className="font-bold ">{post.username}&nbsp;</p>
          <p className="text-neutral-600">- {timePosted}</p>
        </div>
        <div className="mt-2 w-full grow">{post.body}</div>
        <div className="flex flex-row w-full justify-end my-5">
          <div onClick={handleAddLike}>
            <ChirpLike isLiked={isLiked} />
          </div>
          <ChirpReply />
        </div>
      </div>
    </div>
  );
};

export default ChirpCard;
