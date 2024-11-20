import { useParams } from "react-router-dom";
import { UserAccountQueries } from "../../../hooks/UserAccountQueries";
import BannerNPfp from "./BannerNPfp";
import AccountDropdown from "./AccountDropdown";
import AccountInfo from "./AccountInfo";
import { PostQueries } from "../../../hooks/PostQueries";
import { useState } from "react";
import AccountPosts from "./AccountPosts";

export const Account = () => {
  const { userName } = useParams<{ userName: string }>();
  const [selectedOption, setSelectedOption] = useState<string>("Chirps");

  const { data: User, isLoading } = UserAccountQueries.useGetUserByUsername(
    userName ?? ""
  );

  const { data: Posts } = PostQueries.useGetPostsByUserId(User?.id ?? 0);
  const { data: Replies } = PostQueries.useGetRepliesByUserId(User?.id ?? 0);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Loading...</h1>
      </div>
    );
  }

  if (!User || !Posts || !Replies) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">
          Error Loading User or Posts
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-start">
      <BannerNPfp User={User} />
      <AccountInfo User={User} />
      <AccountDropdown
        setSelectedFilter={setSelectedOption}
        selectedFilter={selectedOption}
      />
      <AccountPosts posts={selectedOption == "Chirps" ? Posts : Replies} />
    </div>
  );
};

export default Account;
