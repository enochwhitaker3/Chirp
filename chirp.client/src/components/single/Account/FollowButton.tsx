import { UserAccount } from "../../../@types/UserAccount";
import { FollowQueries } from "../../../hooks/Queries/FollowQueries";
import { useFollow } from "../../../hooks/useFollow";

const FollowButton = ({ AccountUser }: { AccountUser: UserAccount }) => {
  const { data: FollowingList } = FollowQueries.useGetFollowersByUserId(
    AccountUser?.id ?? 0
  );

  const { isFollowed, handleFollowToggle } = useFollow(
    AccountUser?.id,
    FollowingList!
  );

  return (
    <div
      className="dark:bg-brand-500 dark:text-black bg-black text-brand-500 avg:max-w-[100px] mobile:max-w-[75px] max-w-[100px] avg:max-h-[35px] mobile:max-h-[25px] max-h-[35px] avg:text-sm mobile:text-xs text-sm p-2 rounded-lg flex flex-row justify-center items-center cursor-pointer mobile:mx-0 mx-4"
      onClick={handleFollowToggle}
    >
      {!isFollowed && (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 mx-1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Icon-Set-Filled"
              transform="translate(-362.000000, -1037.000000)"
              className="dark:fill-black fill-brand-500"
            >
              <path
                d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                id="plus"
              ></path>
            </g>
          </g>
        </svg>
      )}

      {isFollowed ? "Following" : "Follow"}
    </div>
  );
};

export default FollowButton;
