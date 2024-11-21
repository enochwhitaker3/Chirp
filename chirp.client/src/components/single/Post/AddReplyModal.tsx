import { FC, useState, useRef } from "react";
import { Post } from "../../../@types/Post";
import ChirpReply from "../../../assets/ChirpCard/chirpreply";
import AddChirpForm from "./AddChirpForm";

const AddReplyModal: FC<{ post: Post }> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };
  return (
    <>
      <button onClick={openModal} className="" type="button">
        <ChirpReply />
      </button>
      <div
        onClick={handleBackdropClick}
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20  backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={modalRef}
          className={`flex flex-col relative mobile:mx-auto desk:w-1/3 mobile:w-1/2 w-3/4 max-w-[48rem] h-auto rounded-lg overflow-hidden shadow-xl dark:shadow-gray-800 dark:bg-black bg-white dark:bg-clay-400 transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex flex-col p-6 w-full">
            <div>Reply to {post.username}'s Chirp</div>
            <AddChirpForm
              replyPostId={post.id}
              isReply={true}
              onSuccess={closeModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReplyModal;
