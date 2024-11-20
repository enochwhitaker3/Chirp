import { useParams } from "react-router-dom";
import { UserAccountQueries } from "../../hooks/UserAccountQueries";
import { formatTimePosted } from "../../hooks/useCalcDaysAgo";

export const Account = () => {
  const { userName } = useParams<{ userName: string }>();
  const { data: User } = UserAccountQueries.useGetUserByUsername(
    userName ?? ""
  );

  const timePosted = formatTimePosted(User?.dateJoined!);

  return (
    <div className="w-full  flex flex-row items-center">
      <img src={User?.userPFP} className="w-32 h-32 rounded-full " />
      <h1 className="text-2xl font-bold">{User?.username}</h1>
      <h1 className="text-2xl font-bold">{timePosted}</h1>
    </div>
  );
};

export default Account;
