import React from "react";

import "./index.css";
import "../index.css";
interface IProps {
  content: string;
  date: string;
  solved: boolean;
  isLoad: boolean;
}

const Container: React.FC<IProps> = ({ content, date, solved, isLoad }) => {
  return (
    <article
      className={
        isLoad
          ? "obeserver-onload-card-container service_on"
          : "obeserver-onload-card-container"
      }
    >
      <span>{content}</span>
      <div className="flex">
        <span className="date">{date}</span>{" "}
        <span className={solved ? "reply" : "reply reply-pendding"}>
          {solved ? "답변완료" : "대기중"}
        </span>
      </div>
    </article>
  );
};

export default Container;
