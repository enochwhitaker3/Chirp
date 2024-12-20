import { FC } from "react";
import { Post } from "../../@types/Post";
import Profilesvg from "./Sidebar/Profile";
import ChirpLike from "./ChirpCard/chirplike";
import ChirpReply from "./ChirpCard/chirpreply";
import { useCalcDaysAgo } from "../../hooks/useCalcDaysAgo";
import { useLike } from "../../hooks/useLike";
import { useNavigate } from "react-router-dom";
import { preprocessText } from "../../hooks/usePreprocessText";

const Reply: FC<{ reply: Post }> = ({ reply }) => {
  const { isLiked, handleLikeToggle } = useLike(
    reply.id,
    reply.likes,
    reply.parentPostId
  );

  const timePosted = useCalcDaysAgo(reply.timePosted);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${reply.id}`);
  };

  return (
    <div
      className="mobile:mx-0 p-4 border-2 border-neutral-900 rounded-xl my-4"
      style={{ scrollbarGutter: "stable" }}
      onClick={handleCardClick}
    >
      <div className="flex flex-row justify-start items-center w-full mb-4 ">
        {reply.userPFP && reply.userPFP != null ? (
          <img src={reply.userPFP} className="w-10 h-10 mr-2 rounded-full" />
        ) : (
          <Profilesvg />
        )}
        <div className="w-full flex flex-row justify-between">
          <p className="font-bold ">{reply.username}&nbsp;</p>
          <p className=" text-neutral-600">{timePosted}</p>
        </div>
      </div>
      <div>
        <p
          className={`ml-1 my-2 w-full overflow-hidden`}
          style={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {preprocessText(reply.body, 1)}
        </p>
      </div>
      <div className="flex flex-row w-full justify-end">
        <div className="flex flex-row" onClick={handleLikeToggle}>
          <ChirpLike isLiked={isLiked} />
          <p className="mx-1">{reply.likes.length}</p>
        </div>
        <ChirpReply />
      </div>
    </div>
  );
};

export default Reply;
