import Homesvg from "../../assets/Sidebar/homesvg";
import Plussvg from "../../assets/Sidebar/plus";
import Profilesvg from "../../assets/Sidebar/Profile";
import Searchsvg from "../../assets/Sidebar/search";
import Settingssvg from "../../assets/Sidebar/settigns";
import Trendingsvg from "../../assets/Sidebar/trending";

const LeftSidebar = () => {
  return (
    <div className="flex justify-center mt-5 ">
      <div className="flex flex-col justify-between items-start w-[300px] h-96 sticky top-20 ">
        <div className="flex flex-row justify-start items-center">
          <Homesvg />
          <p className="text-white text-xl">Home</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <Searchsvg />
          <p className="text-white text-xl">Search</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <Trendingsvg />
          <p className="text-white text-xl">Popular</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <Profilesvg />
          <p className="text-white text-xl">Account</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <Settingssvg />
          <p className="text-white text-xl">Settings</p>
        </div>
        <button className="bg-brand-500 w-3/4 text-xl p-2 rounded-lg flex flex-row justify-center items-center ">
          <Plussvg />
          Post{" "}
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
