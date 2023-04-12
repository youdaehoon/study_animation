import React from "react";

const First = () => {
  const fullText = "안녕하세요 타이핑 애니메이션입니다.";
  const [text, setText] = React.useState<string>("");
  const [count, setCount] = React.useState<number>(0);
  const [signal, setSignal] = React.useState<"plus" | "minus">("plus");

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count >= fullText.length - 1) {
        setSignal("minus");
      }

      if (count < 2) {
        setSignal("plus");
      }

      setText((prev) => {
        let result = prev ? prev + fullText[count] : fullText[0];

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
      <span>{text.substring(0, text.length - 1)}</span>

      {text[text.length - 1] !== "" && (
        <span className="magnify-1">{text[text.length - 1]}</span>
      )}
    </div>
  );
};

export default First;
