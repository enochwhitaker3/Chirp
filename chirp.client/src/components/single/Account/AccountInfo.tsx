import { UserAccount } from "../../../@types/UserAccount";
import { formatJoinDate } from "../../../hooks/useCalcDaysAgo";

const AccountInfo = ({ User }: { User: UserAccount }) => {
  const timePosted = formatJoinDate(User?.dateJoined!);
  return (
    <div className="flex flex-col mt-8 dark:text-white text-black mobile:mx-0 mx-4">
      <h1 className="text-2xl font-bold">{User?.username}</h1>
      <h1 className="text-base ">{User?.bio}</h1>
      <h1 className="text-base text-neutral-600">{timePosted}</h1>
      <hr className="border-neutral-600 my-4" />
    </div>
  );
};

export default AccountInfo;
