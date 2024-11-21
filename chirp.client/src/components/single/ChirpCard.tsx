import Profilesvg from "./Sidebar/Profile";
import ChirpLike from "./ChirpCard/chirplike";
import ChirpReply from "./ChirpCard/chirpreply";
import { Post } from "../../@types/Post";
import { FC } from "react";
import { useCalcDaysAgo } from "../../hooks/useCalcDaysAgo";
import { useNavigate } from "react-router-dom";

const ChirpCard: FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

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
          <p className="text-neutral-600">
            - {useCalcDaysAgo(post.timePosted)}
          </p>
        </div>
        <div className="mt-2 w-full grow">{post.body}</div>
        <div className="flex flex-row w-full justify-end my-5">
          <ChirpLike />
          <ChirpReply />
        </div>
      </div>
    </div>
  );
};

export default ChirpCard;
