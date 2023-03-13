import React from "react";
import Dropdown from "../dropdown";

const FirstDropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  return (
    <div>
      <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "Close" : "Open"}
      </button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default FirstDropdown;
