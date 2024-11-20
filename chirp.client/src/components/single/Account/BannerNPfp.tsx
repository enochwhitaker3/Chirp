import { UserAccount } from "../../../@types/UserAccount";

const BannerNPfp = ({ User }: { User: UserAccount }) => {
  return (
    <>
      <div
        className="avg:h-40 h-36 rounded-md relative border-2 dark:border-white border-black mobile:mx-0 mx-4 mobile:w-full w-[calc(100%-2rem)]"
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
        className="avg:w-28 avg:h-28 w-20 h-20 rounded-full shadow-xl absolute mt-20  mobile:ml-2 mobile:mx-0 mx-6 border-2 dark:border-white border-black"
      />
    </>
  );
};

export default BannerNPfp;
