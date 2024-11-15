import React from "react";
import { Link } from "react-router-dom";
import Contour from "../../assets/topographic.svg";
import ContourLight from "../../assets/topographic_light.svg";
import { useTheme } from "../../hooks/useTheme";
import Homesvg from "../../assets/Bottombar/homesvg";
import ProfileSignIn from "../../assets/Bottombar/ProfileSignIn";
import Searchsvg from "../../assets/Bottombar/search";

const Bottombar: React.FC = () => {
  const { theme } = useTheme();

  const backgroundImage =
    theme === "dark" ? `url(${Contour})` : `url(${ContourLight})`;

  return (
    <nav
      className={`w-full border-t-2 mobile:hidden block ${
        theme === "dark" ? "shadow-lg shadow-gray-700/30" : "shadow-xl"
      } dark:border-t-neutral-900 border-t-neutral-300 text-white h-14 flex items-center justify-center fixed bottom-0 left-0 z-10 dark:bg-black bg-white`}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between desk:w-[1200px] desk:max-w-[1200px] w-full">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse sm:px-0 px-4"
          to="/"
        >
          <Homesvg />
        </Link>

        <div className="w-auto flex flex-row" id="navbar-dropdown">
          <ul className="flex font-medium">
            <li className="py-2 sm:px-3 px-4 text-white">
              <Searchsvg />
            </li>
          </ul>
        </div>

        <div className="w-auto flex flex-row" id="navbar-dropdown">
          <ul className="flex justify-center font-medium">
            <li className="sm:px-3 px-4 text-white flex justify-center">
              <ProfileSignIn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Bottombar;
