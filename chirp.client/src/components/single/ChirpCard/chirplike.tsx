const ChirpLike = ({ isLiked }: { isLiked?: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 cursor-pointer"
    >
      <path
        d="M7.3,11.4,10.1,3a.6.6,0,0,1,.8-.3l1,.5a2.6,2.6,0,0,1,1.4,2.3V9.4h6.4a2,2,0,0,1,1.9,2.5l-2,8a2,2,0,0,1-1.9,1.5H4.3a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h3v10"
        fill="none"
        className={`${
          isLiked
            ? "fill-brand-500 stroke-neutral-950"
            : `dark:stroke-white stroke-black`
        }`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={`${isLiked ? "2" : "2.5"}`}
      />
    </svg>
  );
};

export default ChirpLike;
