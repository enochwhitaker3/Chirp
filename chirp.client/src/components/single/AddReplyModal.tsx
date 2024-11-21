
import React, { FC } from "react";
import { useRef, useState } from "react";
import ChirpReply from "../../assets/ChirpCard/chirpreply";
import AddChirpForm from "./AddChirpForm";
import { Post } from "../../@types/Post";

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
          className={`relative mobile:mx-auto w-full max-w-[48rem] h-auto rounded-lg overflow-hidden shadow-xl dark:shadow-gray-800 dark:bg-black bg-white dark:bg-clay-400 transition-transform duration-300 flex flex-col p-8 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex flex-col gap-4 p-6 mx-5">
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
