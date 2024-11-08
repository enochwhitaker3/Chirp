import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../authentication/LoginButton";
import Contour from "../../assets/topographic.svg";
import ChirpLogoDark from "../../assets/chirp_logo_dark.svg";

const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full border-b-2 border-b-neutral-900 text-white h-14 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Contour})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between px-4 w-[1200px] max-w-[1200px]">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <img className="h-10 w-10" src={ChirpLogoDark} alt="PP Logo" />
        </Link>

        <div className="block w-auto" id="navbar-dropdown">
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
