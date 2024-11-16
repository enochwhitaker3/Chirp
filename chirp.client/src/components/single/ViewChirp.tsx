import { useParams } from "react-router-dom";
import ChirpLike from "../../assets/ChirpCard/chirplike";
import ChirpReply from "../../assets/ChirpCard/chirpreply";
import Profilesvg from "../../assets/Sidebar/Profile";
import { PostQueries } from "../../hooks/PostQueries";
import { formatTimePosted } from "../../hooks/useCalcDaysAgo";

const ViewChirp = () => {
  const { id } = useParams<{ id: string }>();
  const { data: Post } = PostQueries.useGetPostById(Number(id));
  const timePosted = formatTimePosted(Post?.timePosted!);
  return (
    <>
      {Post ? (
        <div className="flex flex-row mb-5 max-w-[600px] dark:text-white text-black rounded-md h-fit cursor-pointer w-screen mobile:px-0 px-4">
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-row justify-start items-center w-full mb-4">
              {Post.userPFP && Post.userPFP != null ? (
                <img
                  src={Post.userPFP}
                  className="w-10 h-10 mr-2 rounded-full"
                />
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
              <ChirpReply />
            </div>
            <hr className="border-neutral-900 my-2" />
          </div>
        </div>
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export default ViewChirp;
