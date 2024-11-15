import React, { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <div className="flex flex-col mobile:mt-20 mt-28 desk:w-[600px] avg:w-[400px] mobile:w-[300px] sm:px-0 px-4">
      {children}
    </div>
  );
};

export default Center;
