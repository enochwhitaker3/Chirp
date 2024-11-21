import { useTheme } from "../../../hooks/useTheme";
import ChirpLogoDark from "../../../assets/chirp_logo_dark.svg";
import ChirpLogoLight from "../../../assets/chirp_logo_light.svg";
import { useAuth } from "react-oidc-context";

const SignInCard = () => {
  const { theme } = useTheme();
  const auth = useAuth();
  return (
    <div className="w-fit flex mobile:flex-row flex-col items-center">
      <img
        className="mobile:h-32 mobile:w-32 w-16 h-16 mobile:mb-0 mb-8"
        src={theme === "dark" ? ChirpLogoDark : ChirpLogoLight}
        alt="PP Logo"
      />
      <div className="h-32 w-1 bg-neutral-600 rounded-xl mx-12 mobile:block hidden"></div>
      <div className="flex flex-col items-center w-full">
        <div
          className="dark:bg-brand-500 dark:text-black bg-black text-brand-500 w-full text-xl p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer "
          onClick={() => void auth.signinRedirect()}
        >
          Sign up
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="dark:text-neutral-600 text-black text-sm font-bold mobile:px-0 pt-8 pb-2">
            Already have an account?
          </div>
          <div
            className="border-2 dark:text-brand-500 border-brand-500 bg-white dark:bg-neutral-900 text-black w-full text-xl p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer "
            onClick={() => void auth.signinRedirect()}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
