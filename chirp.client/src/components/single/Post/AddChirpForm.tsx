import { Circle } from "rc-progress";
import { FC, useContext, useState, useRef } from "react";
import { UserAccountContextInterface } from "../../../@types/UserAccount";
import { UserAccountContext } from "../../../context/UserAccountContext";
import { useAddNewPost } from "../../../hooks/PostQueries";
import { useTheme } from "../../../hooks/useTheme";
import "../../../index.css";
import SubmitButton from "./SubmitButton";
// import { useNavigate } from "react-router-dom";

type Errors = {
  body?: string;
};

const AddChirpForm: FC<{
  replyPostId?: number;
  isReply?: boolean;
  onSuccess?: () => void;
}> = ({ replyPostId, isReply, onSuccess }) => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;
  const { theme } = useTheme();

  const [errors, setErrors] = useState<Errors>({});
  const progressRef = useRef<HTMLTextAreaElement>(null);
  // const navigate = useNavigate();

  const { mutate: addNewPost } = useAddNewPost(replyPostId!);

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
          ParentId: replyPostId ?? null,
          isReply: isReply ?? false,
        });
        onSuccess!();
        // navigate("/");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`dark:text-white text-black flex flex-col items-end mobile:w-full  ${
        isReply ? "w-full" : ""
      }`}
    >
      <textarea
        placeholder={isReply ? `What do they need to hear?` : `What's on your mind today?`}
        name="body"
        maxLength={250}
        required
        onInput={handleInput}
        ref={progressRef}
        className={`w-full dark:text-white text-black p-2 bg-transparent rounded-lg ${
          errors.body ? "border-red border-2" : "border-2 border-neutral-900"
        } outline-none ${isReply ? "h-24" : "h-48"}`}
      />
      {errors.body && <div className="error text-red">{errors.body}</div>}
      <div className="flex flex-row w-full items-center justify-end mt-2">
        <Circle
          percent={((progressRef.current?.value.length || 0) / 250) * 100}
          strokeWidth={15}
          strokeColor={`${
            progressRef.current?.value.length == 250 ? `#f74738` : `#F7E638`
          } `}
          trailColor={theme == "light" ? `#1D1D1D` : "#D9D9D9"}
          trailWidth={8}
          className="w-8 h-8 mx-4"
        />
        <SubmitButton chirpLength={Number(progressRef.current?.value.length)} />
      </div>
    </form>
  );
};

export default AddChirpForm;
