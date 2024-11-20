import { Post } from "../../../@types/Post";
import ChirpCard from "../ChirpCard";

const AccountPosts = ({ posts }: { posts: Post[] }) => {
  if (posts.length == 0)
    return (
      <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] sm:px-0 ">
        <div className="flex flex-row mb-5 text-neutral-600 h-fit  mobile:mx-0 mx-4">
          Nothing to find here...
        </div>
        <hr
          className="w-screen"
          style={{
            visibility: "hidden",
            height: "0",
            border: "none",
          }}
        />
      </div>
    );
  return (
    <div className="flex flex-col mt-4 desk:w-[600px] avg:w-[400px] mobile:w-[300px] mobile:max-w-none max-w-[499px] sm:px-0">
      {posts?.map((post, i) => (
        <ChirpCard key={i} post={post} />
      ))}
      <hr
        className="w-screen"
        style={{
          visibility: "hidden",
          height: "0",
          border: "none",
        }}
      />
    </div>
  );
};

export default AccountPosts;
