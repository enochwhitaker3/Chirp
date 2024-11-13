import { Link } from "react-router-dom";
import Homesvg from "../../assets/Sidebar/homesvg";
import Plussvg from "../../assets/Sidebar/plus";
import Profilesvg from "../../assets/Sidebar/Profile";
import Searchsvg from "../../assets/Sidebar/search";
import Settingssvg from "../../assets/Sidebar/settigns";
import Trendingsvg from "../../assets/Sidebar/trending";

const LeftSidebar = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col justify-between items-start w-[300px] h-96 sticky top-20 ">
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
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <Profilesvg />
          <p className="dark:text-white text-black text-xl">Account</p>
        </div>
        <div className="flex flex-row justify-start items-center cursor-pointer">
          <Settingssvg />
          <p className="dark:text-white text-black text-xl">Settings</p>
        </div>
        <Link
          className="bg-brand-500 w-1/2 text-xl p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer "
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
