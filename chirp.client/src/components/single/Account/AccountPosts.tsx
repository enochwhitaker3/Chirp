import { Post } from "../../../@types/Post";
import ChirpCard from "../ChirpCard";

const AccountPosts = ({ posts }: { posts: Post[] }) => {
  if (posts.length == 0)
    return (
      <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] sm:px-0 text-neutral-600">
        Nothing to find here...
      </div>
    );
  return (
    <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] sm:px-0">
      {posts?.map((post, i) => (
        <ChirpCard key={i} post={post} />
      ))}
    </div>
  );
};

export default AccountPosts;
