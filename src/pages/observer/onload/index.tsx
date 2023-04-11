import React from "react";
import Container from "./container";

import "./index.css";

const ObserverOnload: React.FC = () => {
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const observerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoad(true);
        } else {
          setIsLoad(false);
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <span className="observer" ref={observerRef}>
        observer
      </span>
      <div className="service_list">
        <Container
          content="급여프로그램 사용자입니다(재질문)"
          date="19시간전"
          solved={true}
          isLoad={isLoad}
        />
        <Container
          content="서식변경요청"
          date="3시간전"
          solved={true}
          isLoad={isLoad}
        />
        <Container
          content="근로소득세 수정요청입니다"
          date="32분전"
          solved={true}
          isLoad={isLoad}
        />
        <Container
          content="매출매입 수정요청합니다"
          date="31분전"
          solved={false}
          isLoad={isLoad}
        />
      </div>
      <button
        onClick={() => {
          setIsLoad(true);
        }}
      >
        애니메이션
      </button>
    </div>
  );
};

export default ObserverOnload;
