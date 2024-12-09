import { UserAccount } from "../../../@types/UserAccount";
import EditField from "./EditField";

const EditAccountInfo = ({ User }: { User: UserAccount }) => {
  return (
    <div className="flex flex-col dark:text-white text-black my-4 mobile:mx-0 mx-4 w-full">
      <EditField
        label={"Username"}
        field={User.username}
        maxLength={25}
        User={User}
        updateField={"username"}
      />
      <EditField
        label={"Bio"}
        field={User.bio}
        maxLength={100}
        User={User}
        updateField={"bio"}
      />
    </div>
  );
};

export default EditAccountInfo;
