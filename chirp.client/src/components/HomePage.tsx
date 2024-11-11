import { PostQueries } from "../hooks/PostQueries";
import Center from "./layout/Center";
import LeftSidebar from "./layout/LeftSidebar";
import RightSidebar from "./layout/RightSidebar";
import ChirpCard from "./single/ChirpCard";

const HomePage = () => {
  /* const { data: Users } = UserAccountQueries.useGetAllUsers();
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
  <LoginButton /> */

  const { data: Posts } = PostQueries.useGetAllPosts();

  console.log("posts", Posts);

  return (
    <div className="flex w-screen justify-center">
      <div className=" flex w-[1200px] max-w-[1200px]">
        <LeftSidebar />
        <Center>
          {Posts?.map((post) => (
            <ChirpCard post={post} />
          ))}
        </Center>
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
