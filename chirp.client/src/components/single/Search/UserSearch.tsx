import { Link } from "react-router-dom";
import { UserAccountQueries } from "../../../hooks/Queries/UserAccountQueries";
import UserCard from "../UserCard";

const UserSearch = ({
  debouncedSearchQuery,
  searchQuery,
}: {
  debouncedSearchQuery: string;
  searchQuery: string;
}) => {
  const {
    data: allUsers,
    isLoading,
    error,
  } = UserAccountQueries.useGetAllUsers();

  const filteredUsers = allUsers?.filter((userAccount: { username: string }) =>
    userAccount.username
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase())
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
          {filteredUsers?.length ? (
            filteredUsers.map((user) => (
              <Link key={user.id} to={`/user/${user.username}`}>
                <UserCard key={user.id} User={user} />
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserSearch;
