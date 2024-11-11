import React, { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return <div className="flex flex-col mt-20">{children}</div>;
};

export default Center;
