import React from "react";
import Icon from "../../../../../assets/icon";

import "./index.css";

interface IProps {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropdownButton: React.FC<IProps> = ({ visibility, setVisibility }) => {
  const [visibilityAnimation, setVisibilityAnimation] =
    React.useState<boolean>(false);

  return (
    <div
      className={`flex align-center dropdown-second-button ${
        visibility
          ? "dropdown-second-button-active"
          : "dropdown-second-button-unactive"
      }`}
      onClick={() => setVisibility(!visibility)}
    >
      <img className="dropdown-second-button-icon-menu" src={Icon.menu} />
      <span></span>Dropdown menu
      <img
        className={
          visibility
            ? "dropdown-second-button-icon-expand-active"
            : "dropdown-second-button-icon-expand"
        }
        src={Icon.expand}
      />
    </div>
  );
};

export default DropdownButton;
