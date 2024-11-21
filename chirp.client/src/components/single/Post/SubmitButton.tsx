const SubmitButton = ({ chirpLength }: { chirpLength: number }) => {
  return (
    <button
      type="submit"
      className={`${
        chirpLength == 0 || chirpLength == 250
          ? `dark:bg-brand-800 bg-neutral-600 cursor-default`
          : `dark:bg-brand-500 bg-black`
      } avg:w-1/6 mobile:w-1/4 w-1/2 dark:text-black text-brand-500 text-base p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer`}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
