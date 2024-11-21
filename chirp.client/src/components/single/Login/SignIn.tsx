import { useTheme } from "../../../hooks/useTheme";
import Contour from "../../../assets/topographic.svg";
import ContourLight from "../../../assets/topographic_light.svg";
import SignInCard from "./SignInCard";

const SignIn = () => {
  const { theme } = useTheme();
  
  const backgroundImage =
    theme === "dark" ? `url(${Contour})` : `url(${ContourLight})`;

  return (
    <div
      className="flex flex-row justify-center items-center w-full min-h-screen border-2 border-neutral-600 dark:text-white text-black rounded-md cursor-pointer"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="avg:w-[600px] mobile:w-[500px] w-[300px] avg:h-96 h-80 flex justify-center items-center bg-white dark:bg-neutral-900  shadow-xl dark:shadow-gray-800/30 rounded-lg mobile:p-10 p-5 border-2 dark:border-neutral-800 border-neutral-600">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignIn;
