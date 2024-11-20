import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const AccountDropdown: React.FC<{
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selectedFilter, setSelectedFilter }) => {
  const handleSelect = (option: string) => {
    setSelectedFilter(option);
  };

  return (
    <Menu as="div" className="relative inline-block text-left ml-6">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md dark:bg-neutral-900 bg-[#ffffff]  px-3 py-2 text-sm font-semibold dark:text-white text-black shadow-sm ring-1 ring-inset dark:ring-neutral-700 ring-gray-300 ">
          {selectedFilter}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md dark:bg-neutral-900 bg-[#ffffff]  shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              onClick={() => handleSelect("Chirps")}
              className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:dark:text-white data-[focus]:dark:bg-neutral-800 dark:text-white text-black data-[focus]:outline-none"
            >
              Chirps
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => handleSelect("Replies")}
              className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:dark:bg-neutral-800 data-[focus]:dark:text-white dark:text-white text-black data-[focus]:outline-none"
            >
              Replies
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => handleSelect("Liked Chirps")}
              className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:dark:text-white data-[focus]:dark:bg-neutral-800 dark:text-white text-black data-[focus]:outline-none"
            >
              Liked Chirps
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default AccountDropdown;
