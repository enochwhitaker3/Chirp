import { UserAccount } from "../../../@types/UserAccount";
import { useTheme } from "../../../hooks/useTheme";
import Contour from "../../../assets/topographic.svg";
import ContourLight from "../../../assets/topographic_light.svg";

const BannerNPfp = ({ User }: { User: UserAccount }) => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className="avg:h-40 h-36 rounded-md relative border-2 dark:border-white border-black mobile:mx-0 mx-4 mobile:w-full w-[calc(100%-2rem)] z-10"
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
        className="avg:w-28 avg:h-28 w-20 h-20 rounded-full shadow-xl absolute mt-20  mobile:ml-2 mobile:mx-0 mx-6 border-2 dark:border-white border-black z-20"
      />
    </>
  );
};

export default BannerNPfp;
