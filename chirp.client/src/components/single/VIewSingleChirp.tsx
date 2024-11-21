import { FC } from "react";
import { Post } from "../../@types/Post";
import ChirpLike from "../../assets/ChirpCard/chirplike";
import Profilesvg from "../../assets/Sidebar/Profile";
import { formatTimePosted } from "../../hooks/useCalcDaysAgo";
import AddReplyModal from "./Post/AddReplyModal";

const VIewSingleChirp: FC<{ Post: Post }> = ({ Post }) => {
  const timePosted = formatTimePosted(Post?.timePosted!);
  return (
    <div className="flex flex-col justify-start w-full mobile:px-0 px-4">
      <div className="flex flex-row justify-start items-center w-full mb-4">
        {Post.userPFP && Post.userPFP != null ? (
          <img src={Post.userPFP} className="w-10 h-10 mr-2 rounded-full" />
        ) : (
          <Profilesvg />
        )}
        <div className="w-full flex flex-row justify-between">
          <p className="font-bold ">{Post.username}&nbsp;</p>
          <p className=" text-neutral-600">{timePosted}</p>
        </div>
      </div>
      <div>
        <p className="ml-1">{Post.body}</p>
      </div>
      <div className="flex flex-row w-full justify-end my-4">
        <ChirpLike />
        <AddReplyModal post={Post} />
      </div>
      <hr className="border-neutral-900 my-2" />
      <div>
        <p className=" text-neutral-600">Replies</p>
      </div>
    </div>
  );
};

export default VIewSingleChirp;
