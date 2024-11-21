import MainLayout from "../layout/MainLayout";
import AddChirpForm from "../single/Post/AddChirpForm";

const PostPage = () => {
  return (
    <MainLayout>
      <div className="dark:text-white text-black text-xl font-bold mb-4 mobile:px-0 px-4">
        Create Chirp
      </div>
      <AddChirpForm />
    </MainLayout>
  );
};

export default PostPage;
