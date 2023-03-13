import React from "react";

import "./index.css";

interface IProps {
  children: React.ReactElement;
  visibility: boolean;
}

const Dropdown: React.FC<IProps> = ({ children, visibility }) => {
  const [animationVisibility, setAnimationVisibility] =
    React.useState<boolean>(false);

  const [repeat, setRepeat] = React.useState<null | NodeJS.Timeout>(null);

  React.useEffect(() => {
    if (visibility) {
      if (repeat) {
        clearTimeout(repeat);
        setRepeat(null);
      }
      setAnimationVisibility(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setAnimationVisibility(false);
        }, 200)
      );
    }
  }, [visibility]);

  return (
    <article
      className={`dropdown-second-container ${
        visibility ? "dropdown-fade-in" : "dropdown-fade-out"
      }`}
    >
      {animationVisibility && children}
    </article>
  );
};

export default Dropdown;
