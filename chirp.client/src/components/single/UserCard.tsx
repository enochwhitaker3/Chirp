import { UserAccount } from "../../@types/UserAccount";
import Contour from "../../assets/topographic.svg";
import ContourLight from "../../assets/topographic_light.svg";
import { useTheme } from "../../hooks/useTheme";
import FollowButton from "./Account/FollowButton";

const UserCard = ({ User }: { User: UserAccount }) => {
  const { theme } = useTheme();

  return (
    <div className="rounded-md border-2 dark:border-white border-black shadow-xl dark:shadow-zinc-950 my-4 ">
      <div
        className="avg:h-24 h-20 rounded-t-md border-b-2 dark:border-white border-black relative w-full  z-10"
        style={{
          backgroundImage: `url(${
            User.banner ??
            `${theme === "dark" ? `${Contour}` : `${ContourLight}`}`
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <img
        src={User?.userPFP}
        className="desk:w-28 desk:h-28 w-20 h-20 rounded-full shadow-xl absolute desk:mt-[-80px] mt-[-60px] mobile:ml-2 mobile:mx-0 mx-6 border-2 dark:border-white border-black z-20"
      />
      <div className="flex flex-row w-full dark:bg-neutral-900 bg-[#ffffff] dark:text-white text-black desk:p-6 p-4 rounded-b-md ">
        <div className="flex flex-col pt-4 w-full">
          <h1 className="text-xl font-bold">{User?.username}</h1>
          <h1 className="text-sm w-3/5 desk:block hidden">{User?.bio}</h1>
        </div>
        <div className="pt-4">
          <FollowButton AccountUser={User} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
