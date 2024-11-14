import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../authentication/LoginButton";
import Contour from "../../assets/topographic.svg";
import ContourLight from "../../assets/topographic_light.svg";
import ChirpLogoDark from "../../assets/chirp_logo_dark.svg";
import ChirpLogoLight from "../../assets/chirp_logo_light.svg";
import { useTheme } from "../../hooks/useTheme";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  const backgroundImage =
    theme === "dark" ? `url(${Contour})` : `url(${ContourLight})`;

  return (
    <nav
      className={`w-full border-b-2 ${
        theme === "dark" ? "shadow-lg shadow-gray-700/30" : "shadow-xl"
      } dark:border-b-neutral-900 border-b-neutral-300 text-white h-14 flex items-center justify-center fixed dark:bg-black bg-white`}
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between w-[1200px] max-w-[1200px]">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <img
            className="h-10 w-10"
            src={theme === "dark" ? ChirpLogoDark : ChirpLogoLight}
            alt="PP Logo"
          />
        </Link>

        <div className="w-auto flex flex-row" id="navbar-dropdown">
          <ul className="flex font-medium">
            <li className="py-2 px-3 text-white">
              <LoginButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
