import Profilesvg from "../../assets/Sidebar/Profile";
import ChirpLike from "../../assets/ChirpCard/chirplike";
import ChirpReply from "../../assets/ChirpCard/chirpreply";

const ChirpCard = () => {
  return (
    <div className="flex flex-row my-5 bg-neutral-900 w-[600px] max-w-[600px] text-white rounded-md h-fit pl-5 pt-5">
      <div className="flex flex-row justify-start  w-fit">
        <Profilesvg />
      </div>
      <div className="flex flex-col justify-start items-center mr-5">
        <div className="flex flex-row justify-start w-full">
          <p className="font-bold">Username&nbsp;</p>
          <p className="text-neutral-600"> - 34 mins ago</p>
        </div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </div>
        <div className="flex flex-row w-full justify-end my-5">
          <ChirpLike />
          <ChirpReply />
        </div>
      </div>
    </div>
  );
};

export default ChirpCard;
