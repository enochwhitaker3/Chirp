import Profilesvg from "../../assets/Sidebar/Profile";

const RightSidebar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between items-end w-[300px] h-96 sticky top-20">
        <div className="flex flex-col justify-start items-start">
          <p className="text-white font-bold text-xl">Friends</p>
          <hr className="w-full border-t-2 border-neutral-900" />
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="text-white text-xl">Cooluser1</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="text-white text-xl">DaMilkMan</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="text-white text-xl">Itsayboy</p>
          </div>
          <div className="flex flex-row justify-start items-center mt-2 cursor-pointer">
            <Profilesvg />
            <p className="text-white text-xl">Soydrinker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
