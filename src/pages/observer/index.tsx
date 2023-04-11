import React from "react";
import ObserverOnload from "./onload";

const PageObserver: React.FC = () => {
  return (
    <div
      className="flex flex-column"
      style={{ gap: "60vh", fontSize: "20px", font: "white" }}
    >
      <div style={{ backgroundColor: "gray", height: "80vh" }}>
        <span>아래로 내려가시오</span>
      </div>
      <div style={{ backgroundColor: "purple", height: "80vh" }}>
        <ObserverOnload />
      </div>
    </div>
  );
};

export default PageObserver;
