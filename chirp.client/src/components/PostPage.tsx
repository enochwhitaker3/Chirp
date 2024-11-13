import MainLayout from "../MainLayout";
import AddChirpForm from "./single/AddChirpForm";

const PostPage = () => {
  return (
    <MainLayout>
      <div className="text-white text-xl font-bold mb-4">Create Chirp</div>
      <AddChirpForm />
    </MainLayout>
  );
};

export default PostPage;
