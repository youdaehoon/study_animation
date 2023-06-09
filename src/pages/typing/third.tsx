import React from "react";
import "./index.css";

const Third = () => {
  const fullText = "안녕하세요 타이핑 애니메이션입니다.";
  const [text, setText] = React.useState<string>("");
  const [count, setCount] = React.useState<number>(0);
  const [signal, setSignal] = React.useState<"plus" | "minus">("plus");
  const magniftRef = React.useRef<HTMLSpanElement>(null);
  const testRef = React.useRef<HTMLSpanElement>(null);
  React.useLayoutEffect(() => {
    if (signal === "plus") {
      magniftRef.current?.classList.add("magnify");
    } else {
      magniftRef.current?.classList.add("zoom-out");
    }
  }, [text]);
  React.useEffect(() => {
    console.log("useeffect");

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
      <span ref={testRef}>{text.substring(0, text.length - 1)}</span>

      {text[text.length - 1] !== "" && (
        <span
          onAnimationEnd={(e) => {
            e.currentTarget.classList.remove("magnify");
            e.currentTarget.classList.remove("zoom-out");
          }}
          ref={magniftRef}
        >
          {text[text.length - 1]}
        </span>
      )}
    </div>
  );
};

export default Third;
