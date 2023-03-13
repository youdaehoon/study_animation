import React from "react";
import FirstDropdown from "./component/First";
import SecondDropdown from "./component/second";

const PageDropdown: React.FC = () => {
  return (
    <div
      className="flex flex-row"
      style={{ gap: "20px", backgroundColor: "#333", height: "300px" }}
    >
      <FirstDropdown />
      <SecondDropdown />
    </div>
  );
};

export default PageDropdown;
