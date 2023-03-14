import React from "react";
import OnloadFooter from "./footer";
import OnloadShowCard from "./showcard";

const PageOnload = () => {
  return (
    <div style={{ backgroundColor: "gray", height: "500px" }}>
      <OnloadShowCard />
      <OnloadFooter />
    </div>
  );
};

export default PageOnload;
