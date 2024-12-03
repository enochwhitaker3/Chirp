import { useState } from "react";
import Tab from "../Connections/Tab";
import PostSearch from "./PostSearch";
import UserSearch from "./UserSearch";

const Tabs = ({
  debouncedSearchQuery,
  searchQuery,
}: {
  debouncedSearchQuery: string;
  searchQuery: string;
}) => {
  const [activeTab, setActiveTab] = useState<string>("Chirps");
  const tabs = ["Chirps", "Users"];

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
        {activeTab === "Chirps" && (
          <PostSearch
            debouncedSearchQuery={debouncedSearchQuery}
            searchQuery={searchQuery}
          />
        )}
        {activeTab === "Users" && (
          <UserSearch
            debouncedSearchQuery={debouncedSearchQuery}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
