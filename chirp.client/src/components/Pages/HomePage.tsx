import { Link } from "react-router-dom";
import { PostQueries } from "../../hooks/PostQueries";
import MainLayout from "../layout/MainLayout";
import ChirpCard from "../single/ChirpCard";
import Plussvg from "../single/Sidebar/plus";

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
      <Link
        className="mobile:hidden block fixed bottom-16 left-2 dark:bg-brand-500 dark:text-black bg-black p-2 rounded-full cursor-pointer "
        to="/post"
      >
        <Plussvg />
      </Link>
    </MainLayout>
  );
};

export default HomePage;
