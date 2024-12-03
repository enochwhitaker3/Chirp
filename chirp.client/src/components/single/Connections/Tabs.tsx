import { useEffect, useState } from "react";
import Tab from "./Tab";
import ConnectionList from "./ConnectionList";
import { FollowQueries } from "../../../hooks/Queries/FollowQueries";
import { useNavigate, useParams } from "react-router-dom";
import { UserAccountQueries } from "../../../hooks/Queries/UserAccountQueries";

const Tabs = () => {
  const navigate = useNavigate();
  const { userName } = useParams<{ userName: string }>();
  const { data: user, isLoading } = UserAccountQueries.useGetUserByUsername(
    userName!
  );

  const { data: following } = FollowQueries.useGetFollowingByUserId(
    user?.id ?? -1
  );
  const { data: followers } = FollowQueries.useGetFollowersByUserId(
    user?.id ?? -1
  );

  const [activeTab, setActiveTab] = useState<string>("Following");
  const tabs = ["Following", "Followers"];

  useEffect(() => {
    if (user?.id === 0) {
      navigate("/notfound");
    }
  }, [user, navigate]);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Loading...</h1>
      </div>
    );
  }

  if (!user || !following || !followers) {
    return (
      <div className="w-full flex flex-col items-start ">
        <h1 className="text-base text-neutral-600">Error Loading Connection</h1>
      </div>
    );
  }

  return (
    <div className="mobile:w-full mobile:px-0 w-screen px-4">
      <ul className="flex justify-start pb-4">
        {tabs.map((tab, key) => (
          <Tab
            key={key}
            TabName={tab}
            isActive={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </ul>
      <div className="mt-4 w-full">
        {activeTab === "Following" && <ConnectionList list={following} />}
        {activeTab === "Followers" && <ConnectionList list={followers} />}
      </div>
    </div>
  );
};

export default Tabs;
