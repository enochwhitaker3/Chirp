import Profilesvg from "../../assets/Sidebar/Profile";
import DisplayMode from "../single/DisplayMode";

const RightSidebar = () => {
  return (
    <div className="avg:flex avg:justify-center hidden">
      <div className="flex flex-col justify-between items-end desk:w-[300px] w-[200px] h-96 sticky top-20">
        <div className="flex flex-col justify-start items-start">
          <p className="dark:text-white text-black font-bold text-xl">
            Friends
          </p>
          <hr className="w-full border-t-2 border-neutral-900" />
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="dark:text-white text-black text-xl">Cooluser1</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="dark:text-white text-black text-xl">DaMilkMan</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="dark:text-white text-black text-xl">Itsayboy</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="dark:text-white text-black text-xl">Soydrinker</p>
          </div>
          <p className="dark:text-white text-black font-bold text-xl mt-20">
            Mode
          </p>
          <hr className="w-full border-t-2 border-neutral-900" />
          <div className="border-2 border-neutral-800 rounded-lg p-2 mt-2 w-full flex justify-center">
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
