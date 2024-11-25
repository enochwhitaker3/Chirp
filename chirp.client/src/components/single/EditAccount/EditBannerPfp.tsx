import { UserAccount } from "../../../@types/UserAccount";
import EditBanner from "./EditBanner";
import EditPfp from "./EditPfp";

const EditBannerPfp = ({ User }: { User: UserAccount }) => {
  return (
    <>
      <EditBanner
        User={User}
      />
      <EditPfp
        User={User}
      />
    </>
  );
};

export default EditBannerPfp;
