import { UserAccount } from "../../../@types/UserAccount";
import { Link } from "react-router-dom";
import Profilesvg from "../Sidebar/Profile";
const ConnectionList = ({ list }: { list: UserAccount[] }) => {
  return (
    <div>
      {list.map((list, i) => (
        <Link
          key={i}
          to={`/user/${list.username}`}
          className="flex flex-row justify-start items-center mb-4 cursor-pointer border-2 border-neutral-800 rounded-lg p-2 w-full"
        >
          {list.userPFP && list.userPFP != null ? (
            <img src={list.userPFP} className="w-10 h-10 mr-2 rounded-full" />
          ) : (
            <Profilesvg />
          )}

          <div className="flex flex-col w-full">
            <p className="dark:text-white text-black text-xl">
              {list.username}
            </p>
            <p className="dark:text-neutral-600 text-black text-base">
              {list.bio}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ConnectionList;
