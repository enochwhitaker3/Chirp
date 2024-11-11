import Profilesvg from "../../assets/Sidebar/Profile";
import ChirpLike from "../../assets/ChirpCard/chirplike";
import ChirpReply from "../../assets/ChirpCard/chirpreply";
import { Post } from "../../@types/Post";
import { FC } from "react";

const ChirpCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="flex flex-row mb-5 bg-neutral-900 w-[600px] max-w-[600px] text-white rounded-md h-fit pl-5 pt-5">
      <div className="flex flex-row justify-start  w-fit">
        <Profilesvg />
      </div>
      <div className="flex flex-col justify-start items-center mr-5 w-full">
        <div className="flex flex-row justify-start w-full">
          <p className="font-bold ">{post.username}&nbsp;</p>
          <p className="text-neutral-600"> - 34 mins ago</p>
        </div>
        <div className="mt-2 w-full">{post.body}</div>
        <div className="flex flex-row w-full justify-end my-5">
          <ChirpLike />
          <ChirpReply />
        </div>
      </div>
    </div>
  );
};

export default ChirpCard;
