import { Post } from "../../../@types/Post";
import { PostQueries } from "../../../hooks/Queries/PostQueries";

const DeletePostButton = ({ post }: { post: Post }) => {
  const { mutate: deletePost } = PostQueries.useDeletePost(post.id);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    deletePost();
  };

  return (
    <button
      type="submit"
      className={`border-2 border-red avg:w-1/6 mobile:w-1/4 w-1/2 text-black dark:text-white text-base p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer`}
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};

export default DeletePostButton;
