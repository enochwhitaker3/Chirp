import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Post } from "../../../@types/Post";
import EditPostModal from "./EditPostModal";
import DeletePostModal from "./DeletePostModal";

const PostActions = ({ post }: { post: Post }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const openEditModal = () => setIsEditOpen(true);
  const closeEditModal = () => setIsEditOpen(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteOpen(true);
  const closeDeleteModal = () => setIsDeleteOpen(false);

  return (
    <div className="relative">
      <Menu
        as="div"
        className="text-base dark:text-white text-black flex justify-center"
      >
        <MenuButton className="underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.055 32.055"
            className="w-5 h-5 fill-neutral-600"
          >
            <g>
              <path
                d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
				C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
				s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
				c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
              />
            </g>
          </svg>
        </MenuButton>
        <MenuItems
          transition
          className="absolute mt-5 mr-12 w-fit origin-top-left rounded-md dark:bg-neutral-900 bg-[#ffffff] shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1 flex flex-col hover:bg-neutral-100 hover:dark:bg-neutral-950 transition-all px-4 whitespace-nowrap">
            <MenuItem>
              <div onClick={openEditModal}>Edit</div>
            </MenuItem>
          </div>
          <div className="py-1 flex flex-col hover:bg-neutral-100 hover:dark:bg-neutral-950 transition-all px-4 whitespace-nowrap">
            <MenuItem>
              <div onClick={openDeleteModal}>Delete</div>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>

      <EditPostModal
        post={post}
        isOpen={isEditOpen}
        closeEditModal={closeEditModal}
      />
      <DeletePostModal
        post={post}
        isOpen={isDeleteOpen}
        closeDeleteModal={closeDeleteModal}
      />
    </div>
  );
};

export default PostActions;
