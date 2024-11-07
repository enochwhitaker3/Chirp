import { UserAccountQueries } from "../hooks/UserAccountQueries";

const HomePage = () => {
  const { data: Users } = UserAccountQueries.useGetAllUsers();
  console.log(Users);
  return (
    <div>
      <h1 id="tabelLabel" className="text-red-500">
        Users
      </h1>
      <ul>
        {Users?.map((user) => (
          <li key={user.id}>
            {user.id} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;