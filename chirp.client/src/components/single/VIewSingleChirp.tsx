import { FC, useContext } from "react";
import { Post } from "../../@types/Post";
import ChirpLike from "./ChirpCard/chirplike";
import ChirpReply from "./ChirpCard/chirpreply";
import Profilesvg from "./Sidebar/Profile";
import { formatTimePosted } from "../../hooks/useCalcDaysAgo";
import AddReplyModal from "./Post/AddReplyModal";
import { Link } from "react-router-dom";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";

const VIewSingleChirp: FC<{ Post: Post }> = ({ Post }) => {
  const timePosted = formatTimePosted(Post?.timePosted!);
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

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
        {!user ? (
          <Link to="/signup">
            <ChirpReply />
          </Link>
        ) : (
          <AddReplyModal post={Post} />
        )}
      </div>
      <hr className="border-neutral-900 my-2" />
      <div>
        <p className=" text-neutral-600">Replies</p>
      </div>
    </div>
  );
};

export default VIewSingleChirp;
