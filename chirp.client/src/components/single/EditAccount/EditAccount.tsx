import { useParams } from "react-router-dom";
import { UserAccountQueries } from "../../../hooks/Queries/UserAccountQueries";
import EditAccountInfo from "./EditAccountInfo";
import EditBannerPfp from "./EditBannerPfp";

export const EditAccount = () => {
  const { userName } = useParams<{ userName: string }>();

  const { data: User, isLoading } = UserAccountQueries.useGetUserByUsername(
    userName ?? ""
  );

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Loading...</h1>
      </div>
    );
  }

  if (!User) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">
          Error Loading User or Posts
        </h1>
      </div>
    );
  }

  return (
    <div
      key={userName}
      className="mobile:w-full w-screen flex flex-col items-start"
    >
      <EditBannerPfp User={User} />

      <div className="flex flex-row justify-between w-full h-fit mt-6 ">
        <EditAccountInfo User={User} />
      </div>
    </div>
  );
};

export default EditAccount;
