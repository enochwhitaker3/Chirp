import { useRef } from "react";
import { UserAccount } from "../../../@types/UserAccount";
import EditModal from "./EditModal";

const EditPfp = ({ User }: { User: UserAccount }) => {
  const editModalRef = useRef<(() => void) | null>(null);

  const handlePfpClick = () => {
    if (editModalRef.current) {
      editModalRef.current();
    }
  };

  const triggerModal = (openModal: () => void) => {
    editModalRef.current = openModal;
  };
  return (
    <>
      <img
        src={User?.userPFP}
        className="avg:w-28 avg:h-28 w-20 h-20 rounded-full shadow-xl absolute mt-20 mobile:ml-2 mobile:mx-0 mx-6 border-2 dark:border-white border-black z-20 hover:cursor-pointer hover:grayscale transition-all duration-300 ease-in-out"
        onClick={handlePfpClick}
      />
      <EditModal User={User} triggerModal={triggerModal} label="PFP" updateField={"userPFP"} />
    </>
  );
};

export default EditPfp;
