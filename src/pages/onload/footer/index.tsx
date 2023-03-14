import React from "react";
import Png from "../../../assets/png";

import "./index.css";

const OnloadFooter: React.FC = () => {
  const { temp, ...rest } = Png;
  let ArrImg = Object.values(rest);

  return (
    <div className="onload-footer-container">
      {ArrImg.map((el, idx) => {
        let delay: number = 1;
        switch (idx) {
          case 0:
          case 4:
            delay += 0.3;
            break;
          case 1:
          case 3:
            delay += 0.2;
            break;
          case 2:
            delay += 0.1;
            break;
        }
        return (
          <img
            style={{
              animation: `drop3 0.8s ${delay}s cubic-bezier(.215,.61,.355,1) both`,
            }}
            src={el}
          />
        );
      })}
    </div>
  );
};

export default OnloadFooter;
