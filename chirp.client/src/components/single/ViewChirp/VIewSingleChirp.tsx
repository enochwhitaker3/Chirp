import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../@types/Post";
import { UserAccountContextInterface } from "../../../@types/UserAccount";
import { UserAccountContext } from "../../../context/UserAccountContext";
import { formatTimePosted } from "../../../hooks/useCalcDaysAgo";
import { useLike } from "../../../hooks/useLike";
import { preprocessText } from "../../../hooks/usePreprocessText";
import ChirpLike from "../ChirpCard/chirplike";
import ChirpReply from "../ChirpCard/chirpreply";
import AddReplyModal from "../Post/ReplyBubbleModal";
import Profilesvg from "../Sidebar/Profile";
import PostActions from "./PostActions";

const VIewSingleChirp: FC<{ Post: Post }> = ({ Post }) => {
  const { user, isLoading } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const { isLiked, handleLikeToggle } = useLike(Post.id, Post.likes);
  const timePosted = formatTimePosted(Post.timePosted);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start w-full">
      <div className="flex flex-row justify-start items-center w-full mb-4">
        <Link to={`/user/${Post.username}`}>
          {Post.userPFP && Post.userPFP != null ? (
            <img src={Post.userPFP} className="w-10 h-10 mr-2 rounded-full" />
          ) : (
            <Profilesvg />
          )}
        </Link>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row">
            <Link to={`/user/${Post.username}`}>
              <p className="font-bold ">{Post.username}&nbsp;</p>
            </Link>
            {Post.isReply && (
              <Link
                className="text-neutral-600 underline"
                to={`/post/${Post.parentPostId}`}
              >
                see parent post
              </Link>
            )}
          </div>
          <div className="flex flex-row">
            <p className=" text-neutral-600 mx-2">{timePosted}</p>
            {user?.id == Post.userId && <PostActions post={Post} />}
          </div>
        </div>
      </div>
      <div>
        <div
          className={`ml-1 w-full overflow-hidden flex flex-row`}
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {preprocessText(Post.body, 2)}
        </div>
      </div>
      <div className="flex flex-row w-full justify-end my-4">
        <div
          className="flex flex-row items-center mr-2 text-sm"
          onClick={handleLikeToggle}
        >
          <ChirpLike isLiked={isLiked} />
          <p className="ml-1">{Post.likes.length}</p>
        </div>
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
