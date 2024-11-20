import { PostQueries } from "../hooks/PostQueries";
import MainLayout from "./layout/MainLayout";
import ChirpCard from "./single/ChirpCard";

const HomePage = () => {
  const { data: Posts, error, isLoading } = PostQueries.useGetAllPosts();

  if (isLoading && !error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center">
          <div className="dark:text-white text-black">Loading...</div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center">
          <div className="dark:text-white text-black">
            Failed to load posts: {(error as Error).message}
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {Posts?.map((post, i) => (
        <ChirpCard key={i} post={post} />
      ))}
    </MainLayout>
  );
};

export default HomePage;
