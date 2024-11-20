import React from "react";
import Center from "./Center";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <div className="flex w-screen justify-center min-h-screen">
      <div className="flex desk:w-[1200px] desk:max-w-[1200px] avg:w-[800px] mobile:w-[500px]">
        <LeftSidebar />
        <Center>{children}</Center>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
