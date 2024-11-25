import { UserAccount } from "../../../@types/UserAccount";
import EditField from "./EditField";

const EditAccountInfo = ({ User }: { User: UserAccount }) => {
  return (
    <div className="flex flex-col dark:text-white text-black mobile:mx-0 mx-4 w-full">
      <EditField
        label={"Username"}
        field={User.username}
        maxLength={25}
        User={User}
      />
      <EditField label={"Bio"} field={User.bio} maxLength={100} User={User} />
      <hr className="border-neutral-600 my-4" />
    </div>
  );
};

export default EditAccountInfo;
