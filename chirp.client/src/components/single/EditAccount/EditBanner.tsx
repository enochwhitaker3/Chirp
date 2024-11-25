import { useRef } from "react";
import { UserAccount } from "../../../@types/UserAccount";
import EditModal from "./EditModal";

const EditBanner = ({ User }: { User: UserAccount }) => {
  const editModalRef = useRef<(() => void) | null>(null);

  const handleBannerClick = () => {
    if (editModalRef.current) {
      editModalRef.current();
    }
  };

  const triggerModal = (openModal: () => void) => {
    editModalRef.current = openModal;
  };

  return (
    <>
      <div
        onClick={handleBannerClick}
        className="avg:h-40 h-36 rounded-md relative border-2 dark:border-white border-black mobile:mx-0 mx-4 mobile:w-full w-[calc(100%-2rem)] z-10 hover:cursor-pointer hover:grayscale transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${
            User.banner ??
            "https://walker-web.imgix.net/cms/Gradient_builder_2.jpg?fm=jpg&auto=format,compress&width=512&height=512&fit=max"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <EditModal User={User} triggerModal={triggerModal} label="Banner" />
    </>
  );
};

export default EditBanner;
