import DisplayMode from "../single/DisplayMode";
import { useContext } from "react";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";
import { FollowQueries } from "../../hooks/Queries/FollowQueries";
import Friends from "../single/Navigation/Friends";

const RightSidebar = () => {
  const { user, isLoading } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const { data: following } = FollowQueries.useGetFollowingByUserId(
    user?.id ?? -1
  );
  
  const limitedFollowing = following?.slice(0, 4);

  return (
    <div className="avg:flex avg:justify-center hidden">
      <div className="flex flex-col justify-between items-end desk:w-[300px] w-[200px] h-96 sticky top-20">
        <div className="flex flex-col justify-start items-start">
          <Friends
            user={user}
            following={limitedFollowing}
            isLoading={isLoading}
          />
          <p className="dark:text-white text-black font-bold text-xl mt-10">
            Mode
          </p>
          <hr className="w-full border-t-2 border-neutral-900" />
          <div className="border-2 border-neutral-800 rounded-lg p-2 mt-2 w-full flex justify-center cursor-pointer">
            <div>
              <DisplayMode showText={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
