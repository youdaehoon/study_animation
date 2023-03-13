import React from "react";
import Icon from "../../../../assets/icon";
import DropdownButton from "./button";
import Dropdown from "./dropdown";

const SecondDropdown = () => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  return (
    <div>
      <DropdownButton visibility={visibility} setVisibility={setVisibility} />
      <Dropdown visibility={visibility}>
        <ul>
          <li>
            <img src={Icon.home} />
            Home
          </li>
          <li>
            <img src={Icon.mail} />
            Messages
          </li>

          <li>
            <img src={Icon.setting} />
            Settings
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default SecondDropdown;
