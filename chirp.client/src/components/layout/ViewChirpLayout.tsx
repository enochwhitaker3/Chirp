import { useNavigate, useParams } from "react-router-dom";
import { PostQueries } from "../../hooks/Queries/PostQueries";
import VIewSingleChirp from "../single/ViewChirp/VIewSingleChirp";
import Reply from "../single/Reply";
import { useContext, useEffect } from "react";
import TextReplyModal from "../single/Post/TextReplyModal";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";

const ViewChirp = () => {
  const navigate = useNavigate();

  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const { id } = useParams<{ id: string }>();
  const { data: Post } = PostQueries.useGetPostById(Number(id));
  const { data: Replies } = PostQueries.useGetAllRepliesToPost(Post?.id ?? -1);

  useEffect(() => {
    if (Post?.id === 0) {
      navigate("/notfound");
    }
  }, [Post, navigate]);

  return (
    <>
      {Post ? (
        <div className="flex flex-col mb-5 dark:text-white text-black rounded-md h-fit cursor-pointer mobile:px-0">
          <div className="mobile:px-0 mobile:w-full w-screen px-6">
            <VIewSingleChirp Post={Post} />
          </div>

          {Replies && Replies.length > 0 ? (
            <div className="mobile:p-4 mobile:w-full w-screen px-6">
              {Replies?.map((reply, i) => (
                <Reply key={i} reply={reply} />
              ))}
            </div>
          ) : !user ? (
            <div className="text-neutral-600 py-6 flex justify-start mobile:w-full w-screen px-6">
              nothing to be found here...
            </div>
          ) : (
            <TextReplyModal post={Post} />
          )}
        </div>
      ) : (
        <p>Error loading chirp</p>
      )}
    </>
  );
};

export default ViewChirp;
