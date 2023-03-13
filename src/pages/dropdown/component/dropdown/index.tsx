import React from "react";

import "./index.css";

interface IProps {
  children: React.ReactElement;
  visibility: boolean;
}
const Dropdown: React.FC<IProps> = ({ children, visibility }) => {
  const [visibilityAnimation, setVisibilityAnimation] =
    React.useState<boolean>(false);
  const [repeat, setRepeat] = React.useState<null | NodeJS.Timeout>(null);

  React.useEffect(() => {
    if (visibility) {
      if (repeat !== null) {
        clearTimeout(repeat);
      }

      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400)
      );
    }
  }, [visibility]);
  return (
    <article
      className={`dropdown-container ${
        visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {visibilityAnimation && children}
    </article>
  );
};

export default Dropdown;
