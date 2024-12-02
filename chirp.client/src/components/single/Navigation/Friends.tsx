import { UserAccount } from "../../../@types/UserAccount";
import { Link } from "react-router-dom";
import Profilesvg from "../Sidebar/Profile";

const Friends = ({
  user,
  following,
  isLoading,
}: {
  user: UserAccount | undefined;
  following: UserAccount[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading)
    return (
      <>
        <p className="dark:text-white text-black font-bold text-xl">Friends</p>
        <hr className="w-full border-t-2 border-neutral-900" />
        <div className="flex flex-row justify-start items-center mt-2 cursor-pointer max-w-[150px]">
          <p className="dark:text-white text-black text-xl">Loading...</p>
        </div>
      </>
    );

  if (following == undefined)
    return (
      <>
        <p className="dark:text-white text-black font-bold text-xl">Friends</p>
        <hr className="w-full border-t-2 border-neutral-900" />
        <div className="flex flex-row justify-start items-center mt-2 cursor-pointer max-w-[150px]">
          <p className="dark:text-white text-black text-xl">
            Join now to add your friends!
          </p>
        </div>
      </>
    );

  return (
    <>
      <p className="dark:text-white text-black font-bold text-xl">Friends</p>
      <hr className="w-full border-t-2 border-neutral-900" />
      {following?.map((follow, i) => (
        <Link
          key={i}
          to={`/user/${follow.username}`}
          className="flex flex-row justify-start items-center mt-2 cursor-pointer"
        >
          {follow.userPFP && follow.userPFP != null ? (
            <img src={follow.userPFP} className="w-10 h-10 mr-2 rounded-full" />
          ) : (
            <Profilesvg />
          )}
          <p className="dark:text-white text-black text-xl">
            {follow.username}
          </p>
        </Link>
      ))}
      <Link
        className="border-2 border-neutral-800 rounded-lg p-2 mt-6 w-full flex justify-center cursor-pointer"
        to={user ? `/connections` : "/signup"}
      >
        <p className="dark:text-white text-black text-base">View all</p>
      </Link>
    </>
  );
};

export default Friends;
