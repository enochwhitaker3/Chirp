import Homesvg from "../assets/homesvg";

const HomePage = () => {
  // const { data: Users } = UserAccountQueries.useGetAllUsers();
  {
    /* <h1 id="tabelLabel" className="text-red-500">
    Users
  </h1>
  <ul>
    {Users?.map((user) => (
      <li key={user.id}>
        {user.id} - {user.username}
      </li>
    ))}
  </ul>
  <LoginButton /> */
  }
  return (
    <div>
      <div className="flex flex-row">
        <Homesvg />
        <p className="text-white text-xl">Home</p>
      </div>
    </div>
  );
};

export default HomePage;
