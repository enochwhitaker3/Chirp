import { Post } from "../../../@types/Post";
import ChirpCard from "../ChirpCard";

const AccountPosts = ({ posts }: { posts: Post[] }) => {
  if (posts.length == 0)
    return (
      <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] w-screen px-4 ">
        <div className="flex flex-row mb-5 text-neutral-600 h-fit  mobile:mx-0 mx-4">
          Nothing to find here...
        </div>
      </div>
    );
  return (
    <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] w-screen">
      {posts?.map((post, i) => (
        <ChirpCard key={i} post={post} />
      ))}
    </div>
  );
};

export default AccountPosts;
