import { Circle } from "rc-progress";
import { FC, useContext, useState, useRef } from "react";
import { Errors } from "../../../@types/Errors";
import { UserAccountContextInterface } from "../../../@types/UserAccount";
import { UserAccountContext } from "../../../context/UserAccountContext";
import { useEditPost } from "../../../hooks/Queries/PostQueries";
import { useTheme } from "../../../hooks/useTheme";
import SubmitButton from "../Post/SubmitButton";
import { Post } from "../../../@types/Post";

const EditPostForm: FC<{
  post: Post;
  onSuccess?: () => void;
}> = ({ post, onSuccess }) => {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;
  const { theme } = useTheme();

  const [errors, setErrors] = useState<Errors>({});
  const progressRef = useRef<HTMLTextAreaElement>(null);

  const { mutate: updatePost } = useEditPost(post.id);

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
        updatePost({
          Id: post.id,
          Body: body,
          TimePosted: new Date(new Date().getTime() + 14 * 60 * 60 * 1000),
        });
        onSuccess!();
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`dark:text-white text-black flex flex-col items-end w-full`}
      >
        <textarea
          placeholder={post.body}
          name="body"
          maxLength={250}
          required
          onInput={handleInput}
          defaultValue={post.body}
          ref={progressRef}
          className={`w-full dark:text-white text-black p-2 bg-transparent rounded-lg ${
            errors.body ? "border-red border-2" : "border-2 border-neutral-900"
          } outline-none h-24 `}
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
          <SubmitButton
            chirpLength={Number(progressRef.current?.value.length)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
