import { UserAccount } from "../../../@types/UserAccount";
import { Link } from "react-router-dom";
import UserCard from "../UserCard";

const ConnectionList = ({ list }: { list: UserAccount[] }) => {
  return (
    <div>
      {list.map((list, i) => (
        <Link key={i} to={`/user/${list.username}`}>
          <UserCard User={list} />
        </Link>
      ))}
    </div>
  );
};

export default ConnectionList;
