import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import { UserAccount } from "../../../@types/UserAccount";
import { AuthContextProps } from "react-oidc-context";

const ProfileButton = ({
  user,
  auth,
}: {
  user: UserAccount;
  auth: AuthContextProps;
}) => {
  const handleLogout = async () => {
    await auth.removeUser();
    document.cookie =
      "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
    window.location.href = "/";
  };
  return (
    <Menu
      as="div"
      className="text-base dark:text-white text-black flex justify-center"
    >
      <MenuButton className="underline">
        <img
          src={user.userPFP}
          className="h-10 w-10 rounded-full"
          alt="Profile"
        />
      </MenuButton>
      <MenuItems
        transition
        className="absolute z-10 mobile:-bottom-20 bottom-12 mr-12 w-fit origin-top-left rounded-md dark:bg-neutral-900 bg-[#ffffff] shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to={`/user/${user.username}`}
              className="block pr-8 pl-2 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:dark:text-white data-[focus]:dark:bg-neutral-800 dark:text-white text-black data-[focus]:outline-none"
            >
              Account
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={handleLogout}
              className="block pr-8 pl-2 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:dark:text-white data-[focus]:dark:bg-neutral-800 dark:text-white text-black data-[focus]:outline-none"
            >
              Logout
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ProfileButton;
