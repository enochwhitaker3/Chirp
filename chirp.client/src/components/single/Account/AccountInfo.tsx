import { useContext } from "react";
import {
  UserAccount,
  UserAccountContextInterface,
} from "../../../@types/UserAccount";
import { UserAccountContext } from "../../../context/UserAccountContext";
import { FollowQueries } from "../../../hooks/Queries/FollowQueries";
import { formatJoinDate } from "../../../hooks/useCalcDaysAgo";
import EditButton from "../EditAccount/EditButton";
import { Link } from "react-router-dom";

const AccountInfo = ({ User }: { User: UserAccount }) => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const timePosted = formatJoinDate(User.dateJoined);
  const { data: FollowerCount } = FollowQueries.useGetFollowersByUserId(
    User?.id ?? 0
  );
  const { data: FollowingCount } = FollowQueries.useGetFollowingByUserId(
    User?.id ?? 0
  );

  return (
    <div className="flex flex-col dark:text-white text-black mobile:mx-0 mx-4">
      <h1 className="text-2xl font-bold">{User?.username}</h1>
      <h1 className="text-base ">{User?.bio}</h1>
      <div className="flex flex-row">
        <Link
          className="text-base text-neutral-600 mr-1 hover:underline cursor-pointer"
          to={`/connections/${user?.username}`}
        >
          {FollowerCount?.length} Followers
        </Link>
        <Link
          className="text-base text-neutral-600 mx-1 hover:underline cursor-pointer"
          to={`/connections/${user?.username}`}
        >
          {FollowingCount?.length} Following
        </Link>
      </div>
      <h1 className="text-base text-neutral-600">{timePosted}</h1>
      {user?.username == User.username && <EditButton User={User} />}
      <hr className="border-neutral-600 my-4" />
    </div>
  );
};

export default AccountInfo;
