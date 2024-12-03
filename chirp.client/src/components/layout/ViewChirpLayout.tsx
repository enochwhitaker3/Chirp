import { useNavigate, useParams } from "react-router-dom";
import { PostQueries } from "../../hooks/Queries/PostQueries";
import VIewSingleChirp from "../single/VIewSingleChirp";
import Reply from "../single/Reply";
import { useEffect } from "react";

const ViewChirp = () => {
  const navigate = useNavigate();
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
          <div>
            <VIewSingleChirp Post={Post} />
          </div>
          <div className="mobile:p-4 mobile:w-full w-screen px-6">
            {Replies?.map((reply, i) => (
              <Reply key={i} reply={reply} />
            ))}
          </div>
        </div>
      ) : (
        <p>Error loading chirp</p>
      )}
    </>
  );
};

export default ViewChirp;
