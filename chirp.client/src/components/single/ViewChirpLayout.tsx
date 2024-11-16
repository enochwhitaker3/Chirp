import { useParams } from "react-router-dom";
import { PostQueries } from "../../hooks/PostQueries";
import Reply from "./Reply";
import VIewSingleChirp from "./VIewSingleChirp";

const ViewChirp = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Post } = PostQueries.useGetPostById(Number(id));
  const { data: Replies } = PostQueries.useGetAllRepliesToPost(Post?.id!);

  return (
    <>
      {Post ? (
        <div className="flex flex-col mb-5 max-w-[600px] dark:text-white text-black rounded-md h-fit cursor-pointer w-screen mobile:px-0 px-4">
          <div className="sticky top-0 z-10">
            <VIewSingleChirp Post={Post} />
          </div>

          <div className="p-4 overflow-y-auto max-h-[400px]">
            {Replies?.map((reply, i) => (
              <>
                <Reply key={i} reply={reply} />
              </>
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
