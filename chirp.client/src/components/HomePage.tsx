import { PostQueries } from "../hooks/PostQueries";
import MainLayout from "./layout/MainLayout";
import ChirpCard from "./single/ChirpCard";

const HomePage = () => {
  const { data: Posts } = PostQueries.useGetAllPosts();

  return (
    <MainLayout>
      {Posts?.map((post, i) => (
        <ChirpCard key={i} post={post} />
      ))}
    </MainLayout>
  );
};

export default HomePage;
