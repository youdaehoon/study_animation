import React from "react";

import "./index.css";

const Second = () => {
  const fullText = "안녕하세요 타이핑 애니메이션입니다.";
  const [text, setText] = React.useState<string>("");
  const [count, setCount] = React.useState<number>(0);
  const [signal, setSignal] = React.useState<"plus" | "minus">("plus");
  const magniftRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    console.log("useeffect");
    magniftRef.current?.classList.add("magnify");
    const interval = setInterval(() => {
      console.log("interver");

      if (count >= fullText.length - 1) {
        setSignal("minus");
      }

      if (count < 2) {
        setSignal("plus");
      }

      setText((prev) => {
        let result = prev ? prev + fullText[count] : fullText[0];

        console.log(prev, count);
        if (signal === "plus") {
          setCount(count + 1);
        } else {
          result = prev ? prev.substring(0, prev.length - 1) : fullText[0];

          setCount(count - 1);
        }

        magniftRef.current?.classList.remove("magnify");
        return result;
      });
      //   setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count, signal]);

  return (
    <div className="typing">
      <span>{text.substring(0, text.length - 1)}</span>

      {text[text.length - 1] !== "" && (
        <span ref={magniftRef}>{text[text.length - 1]}</span>
      )}
    </div>
  );
};

export default Second;
