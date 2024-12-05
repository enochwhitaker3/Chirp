import Profilesvg from "./Sidebar/Profile";
import ChirpLike from "./ChirpCard/chirplike";
import ChirpReply from "./ChirpCard/chirpreply";
import { Post } from "../../@types/Post";
import { FC } from "react";
import { useCalcDaysAgo } from "../../hooks/useCalcDaysAgo";
import { useNavigate } from "react-router-dom";
import { useLike } from "../../hooks/useLike";
import { preprocessText } from "../../hooks/usePreprocessText";

const ChirpCard: FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  const { isLiked, handleLikeToggle } = useLike(post.id, post.likes);

  const timePosted = useCalcDaysAgo(post.timePosted);

  return (
    <div
      className="flex flex-row mb-5 dark:bg-neutral-900 bg-[#ffffff] shadow-xl dark:shadow-zinc-950 max-w-[600px] dark:text-white text-black rounded-md h-fit pl-5 pt-5 cursor-pointer mobile:mx-0 mx-4"
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
        <div
          className={`mt-2 w-full overflow-hidden`}
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {preprocessText(post.body, 15)}
        </div>
        <div className="flex flex-row w-full justify-end my-5">
          <div
            className="flex flex-row items-center mr-2 text-sm"
            onClick={handleLikeToggle}
          >
            <ChirpLike isLiked={isLiked} />
            <p className="ml-1">{post.likes.length}</p>
          </div>
          <ChirpReply />
        </div>
      </div>
    </div>
  );
};

export default ChirpCard;
