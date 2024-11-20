import { UserAccount } from "../../../@types/UserAccount";

const BannerNPfp = ({ User }: { User: UserAccount }) => {
  const backgroundImage =
    "https://pbs.twimg.com/profile_banners/1107345144531947520/1624915706/1500x500";
  return (
    <>
      <div
        className="w-full h-40 rounded-md relative border-2 border-black"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <img
        src={User?.userPFP}
        className="w-28 h-28 rounded-full shadow-xl absolute mt-20 ml-2 border-2 border-black"
      />
    </>
  );
};

export default BannerNPfp;
