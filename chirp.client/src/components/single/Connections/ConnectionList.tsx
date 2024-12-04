import { UserAccount } from "../../../@types/UserAccount";
import UserCard from "../UserCard";

const ConnectionList = ({ list }: { list: UserAccount[] }) => {
  if (list.length == 0) {
    return <p className="text-neutral-600">pretty empty in here...</p>;
  }
  return (
    <div>
      {list.map((list, i) => (
        <UserCard key={i} User={list} />
      ))}
    </div>
  );
};

export default ConnectionList;
