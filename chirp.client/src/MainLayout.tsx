// components/layout/MainLayout.tsx

import React from "react";
import Center from "./components/layout/Center";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen justify-center min-h-screen">
      <div className="flex w-[1200px] max-w-[1200px]">
        <LeftSidebar />
        <Center>{children}</Center>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
