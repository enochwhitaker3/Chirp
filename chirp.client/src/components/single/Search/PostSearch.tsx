import { PostQueries } from "../../../hooks/Queries/PostQueries";
import ChirpCard from "../ChirpCard";

const PostSearch = ({
  debouncedSearchQuery,
  searchQuery,
}: {
  debouncedSearchQuery: string;
  searchQuery: string;
}) => {
  const { data: allPosts, isLoading, error } = PostQueries.useGetAllPosts();

  const filteredPosts = allPosts?.filter((post: { body: string }) =>
    post.body.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
      {!isLoading &&
        !error &&
        searchQuery !== "" &&
        debouncedSearchQuery === "" && <p>Searching...</p>}
      {!isLoading && !error && debouncedSearchQuery !== "" && (
        <div className="w-full">
          {filteredPosts?.length ? (
            filteredPosts.map((post) => <ChirpCard key={post.id} post={post} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PostSearch;
