import React from "react";
import { Link } from "react-router-dom";
import Contour from "../../assets/topographic.svg";
import ContourLight from "../../assets/topographic_light.svg";
import ChirpLogoDark from "../../assets/chirp_logo_dark.svg";
import ChirpLogoLight from "../../assets/chirp_logo_light.svg";
import { useTheme } from "../../hooks/useTheme";
import DisplayMode from "./DisplayMode";
import ProfileSignIn from "./Navigation/ProfileSignIn";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  const backgroundImage =
    theme === "dark" ? `url(${Contour})` : `url(${ContourLight})`;

  return (
    <nav
      className={`w-full border-b-2 z-50 ${
        theme === "dark" ? "shadow-lg shadow-zinc-950/30" : "shadow-xl"
      } dark:border-b-neutral-900 border-b-neutral-300 text-white mobile:h-14 h-24 flex items-center justify-center fixed dark:bg-black bg-white`}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between max-w-[1200px] desk:w-[1200px] avg:w-[800px] w-[500px]">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse sm:px-0 px-4"
          to="/"
        >
          <img
            className="h-10 w-10"
            src={theme === "dark" ? ChirpLogoDark : ChirpLogoLight}
            alt="PP Logo"
          />
        </Link>

        <div className="w-auto flex flex-row" id="navbar-dropdown">
          <ul className="mobile:flex hidden font-medium">
            <li className="py-2 sm:px-3 px-4 text-white flex justify-center">
              <ProfileSignIn />
            </li>
          </ul>
          <ul className="mobile:hidden flex font-medium justify-center items-center">
            <li className="py-2 sm:px-3 px-4 text-white">
              <DisplayMode showText={false} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
