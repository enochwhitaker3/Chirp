import { Link } from "react-router-dom";
import Homesvg from "../../assets/Sidebar/homesvg";
import Plussvg from "../../assets/Sidebar/plus";
import Profilesvg from "../../assets/Sidebar/Profile";
import Searchsvg from "../../assets/Sidebar/search";
import Settingssvg from "../../assets/Sidebar/settigns";
import Trendingsvg from "../../assets/Sidebar/trending";
import { useContext } from "react";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";

const LeftSidebar = () => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  return (
    <div className="mobile:flex mobile:justify-center hidden">
      <div className="flex flex-col justify-between items-start desk:w-[300px] w-[200px] h-96 sticky top-20 ">
        <Link
          className="flex flex-row justify-start items-center cursor-pointer"
          to="/"
        >
          <Homesvg />
          <p className="dark:text-white text-black text-xl">Home</p>
        </Link>
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <Searchsvg />
          <p className="dark:text-white text-black text-xl">Search</p>
        </div>
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <Trendingsvg />
          <p className="dark:text-white text-black text-xl">Popular</p>
        </div>
        <Link
          className="flex flex-row justify-start items-center cursor-pointer"
          to={user?.username ? `/account/${user.username}` : "#"}
        >
          <Profilesvg />
          <p className="dark:text-white text-black text-xl">Account</p>
        </Link>
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <Settingssvg />
          <p className="dark:text-white text-black text-xl">Settings</p>
        </div>
        <Link
          className="dark:bg-brand-500 dark:text-black bg-black text-brand-500 desk:w-1/2 avg:w-3/4 mobile:w-2/3 w-full text-xl p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer "
          to="/post"
        >
          <Plussvg />
          Post{" "}
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
