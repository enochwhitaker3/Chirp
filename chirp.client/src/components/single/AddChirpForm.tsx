import React, { useState, useRef, useContext } from "react";
import { Circle } from "rc-progress";
import "../../index.css";
import { useAddNewPost } from "../../hooks/PostQueries";
import { UserAccountContextInterface } from "../../@types/UserAccount";
import { UserAccountContext } from "../../context/UserAccountContext";
import { useNavigate } from "react-router-dom";

type Errors = {
  body?: string;
};

function AddChirpForm() {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const [errors, setErrors] = useState<Errors>({});
  const progressRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const { mutate: addNewPost } = useAddNewPost();

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    const charCount = input.value.length;

    if (charCount >= 250) {
      setErrors({ body: "Chirp must be less than 250 characters" });
    } else {
      setErrors({});
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = formData.get("body") as string;

    if (body.length > 250) {
      setErrors({ body: "Chirp must be less than 250 characters" });
    } else {
      setErrors({});
      if (user && user.id != 0) {
        addNewPost({
          userId: user?.id ?? 0,
          body: body,
          parentPostId: null,
          isReply: false,
        })
        navigate("/")
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex flex-col w-[600px] max-w-[600px] items-end"
    >
      <textarea
        placeholder="What's on your mind today?"
        name="body"
        maxLength={250}
        required
        onInput={handleInput}
        ref={progressRef}
        className={`w-full h-96 text-white p-2 bg-transparent rounded-lg ${
          errors.body ? "border-red border-2" : "border-2 border-neutral-900"
        } outline-none`}
      />
      {errors.body && <div className="error text-red">{errors.body}</div>}
      <div className="flex flex-row w-full items-center justify-end mt-2">
        <Circle
          percent={((progressRef.current?.value.length || 0) / 250) * 100}
          strokeWidth={4}
          strokeColor={`${
            progressRef.current?.value.length == 250 ? `#f74738` : `#F7E638`
          } `}
          className="w-8 h-8 mx-4"
        />
        <button
          type="submit"
          className={`${
            progressRef.current?.value.length == 0 ||
            progressRef.current?.value.length == 250
              ? `bg-brand-800`
              : `bg-brand-500`
          } w-1/6 text-black text-base p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddChirpForm;
