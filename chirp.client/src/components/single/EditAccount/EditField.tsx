import React, { useRef, useState } from "react";
import { Errors } from "../../../@types/Errors";
import { UserAccount } from "../../../@types/UserAccount";
import { useEditAccount } from "../../../hooks/Queries/UserAccountQueries";
import { useNavigate } from "react-router-dom";

const EditField = ({
  User,
  label,
  field,
  maxLength,
  updateField,
}: {
  User: UserAccount;
  label: string;
  field: string;
  maxLength: number;
  updateField: keyof UserAccount;
}) => {
  const [errors, setErrors] = useState<Errors>({});
  const progressRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const { mutate: updateUser } = useEditAccount(User.username, User.authId);

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    const charCount = input.value.length;

    if (charCount >= maxLength) {
      setErrors({ body: `${label} must be less than ${maxLength} characters` });
    } else {
      setErrors({});
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = formData.get("body") as string;

    if (body.length > maxLength) {
      setErrors({ body: `Chirp must be less than ${maxLength} characters` });
    } else {
      setErrors({});
      if (User && User.id !== 0) {
        updateUser(
          {
            ...User,
            [updateField]: body,
          },
          {
            onSuccess: (updatedUser: UserAccount) => {
              navigate(`/user/${updatedUser.username}`);
            },
          }
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-base text-neutral-600">{label}</h1>
      <textarea
        placeholder={field}
        name="body"
        maxLength={maxLength}
        onInput={handleInput}
        ref={progressRef}
        className={`w-full dark:text-white text-black p-2 bg-transparent rounded-lg ${
          errors.body ? "border-red border-2" : "border-2 border-neutral-900"
        } outline-none h-12 resize-none`}
      />
      {errors.body && <div className="error text-red">{errors.body}</div>}
      <div className="flex justify-end mt-2">
        <button className="dark:bg-brand-500 dark:text-black bg-black text-brand-500 avg:max-w-[100px] mobile:max-w-[75px] max-w-[100px] avg:max-h-[35px] mobile:max-h-[25px] max-h-[35px] avg:text-sm mobile:text-xs text-sm p-2 rounded-lg flex justify-center items-center cursor-pointer">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditField;
