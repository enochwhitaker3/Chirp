import { FC } from "react";
import DarkModeSvg from "../../assets/Sidebar/darkmode";
import LightModeSvg from "../../assets/Sidebar/lightmode";
import { useTheme } from "../../hooks/useTheme";

const DisplayModeForm: FC<{ showText: boolean }> = ({ showText }) => {
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toggleTheme(); // Keep the functionality intact
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-start items-center cursor-pointer"
    >
      <button type="submit" className="flex flex-row items-center">
        {theme === "dark" ? <DarkModeSvg /> : <LightModeSvg />}
        {showText && (
          <p className="dark:text-white text-black text-xl">
            {theme === "dark" ? "Dark" : "Light"}
          </p>
        )}
      </button>
    </form>
  );
};

export default DisplayModeForm;
