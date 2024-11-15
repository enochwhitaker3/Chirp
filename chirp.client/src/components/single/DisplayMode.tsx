import { FC } from "react";
import DarkModeSvg from "../../assets/Sidebar/darkmode";
import LightModeSvg from "../../assets/Sidebar/lightmode";
import { useTheme } from "../../hooks/useTheme";

const DisplayMode: FC<{ showText: boolean }> = ({ showText }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-row justify-start items-center cursor-pointer">
      <span onClick={toggleTheme} className="flex flex-row">
        {theme === "dark" ? <DarkModeSvg /> : <LightModeSvg />}
        {showText && (
          <p className="dark:text-white text-black text-xl">
            {theme === "dark" ? "Dark" : "Light"}
          </p>
        )}
      </span>
    </div>
  );
};

export default DisplayMode;
