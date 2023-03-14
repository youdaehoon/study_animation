import React from "react";
import Png from "../../../assets/png";

import "./index.css";

const OnloadShowCard: React.FC = () => {
  return (
    <div className="showcard-container">
      <img src={Png.temp} className="pointer w-100" />
      <div className="flex space-between w-100 align-center">
        <div className="flex align-center">
          <span className="pointer">오늘 하루 보지 않기</span>
        </div>
        <div>
          <span className="pointer">닫기</span>
        </div>
      </div>
    </div>
  );
};

export default OnloadShowCard;
