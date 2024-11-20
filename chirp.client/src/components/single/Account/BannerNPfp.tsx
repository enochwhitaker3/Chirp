import { UserAccount } from "../../../@types/UserAccount";

const BannerNPfp = ({ User }: { User: UserAccount }) => {
  return (
    <>
      <div
        className="w-full h-40 rounded-md relative border-2 dark:border-white border-black"
        style={{
          backgroundImage: `url(${
            User.banner ??
            "https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?fm=jpg&auto=format,compress&width=512&height=512&fit=max"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <img
        src={User?.userPFP}
        className="w-28 h-28 rounded-full shadow-xl absolute mt-20 ml-2 border-2 dark:border-white border-black"
      />
    </>
  );
};

export default BannerNPfp;
