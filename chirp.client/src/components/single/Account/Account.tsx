import { useParams } from "react-router-dom";
import { UserAccountQueries } from "../../../hooks/Queries/UserAccountQueries";
import BannerNPfp from "./BannerNPfp";
import AccountDropdown from "./AccountDropdown";
import AccountInfo from "./AccountInfo";
import { PostQueries } from "../../../hooks/Queries/PostQueries";
import { useState } from "react";
import AccountPosts from "./AccountPosts";
import { LikeQueries } from "../../../hooks/Queries/LikeQueries";
import FollowButton from "./FollowButton";

export const Account = () => {
  const { userName } = useParams<{ userName: string }>();
  const [selectedOption, setSelectedOption] = useState<string>("Chirps");

  const { data: User, isLoading } = UserAccountQueries.useGetUserByUsername(
    userName ?? ""
  );

  const { data: Posts } = PostQueries.useGetPostsByUserId(User?.id ?? 0);
  const { data: Replies } = PostQueries.useGetRepliesByUserId(User?.id ?? 0);
  const { data: Likes } = LikeQueries.useGetLikesByUserId(User?.id ?? 0);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Loading...</h1>
      </div>
    );
  }

  if (!User || !Posts || !Replies || !Likes) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">
          Error Loading User or Posts
        </h1>
      </div>
    );
  }

  return (
    <div key={userName} className="w-full flex flex-col items-start">
      <BannerNPfp User={User} />
      <div className="flex flex-row justify-between w-full h-fit mt-8 ">
        <AccountInfo User={User} />
        <FollowButton AccountUser={User} />
      </div>
      <AccountDropdown
        setSelectedFilter={setSelectedOption}
        selectedFilter={selectedOption}
      />
      <AccountPosts
        posts={
          selectedOption === "Chirps"
            ? Posts
            : selectedOption === "Replies"
            ? Replies
            : selectedOption === "Liked Chirps"
            ? Likes?.map((like) => like.post).flat() || []
            : []
        }
      />
    </div>
  );
};

export default Account;
