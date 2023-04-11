import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/dropdown")}>드롭다운</button>
      <button onClick={() => navigate("/onload")}>온로드</button>
      <button onClick={() => navigate("/observer")}>옵저버</button>
    </div>
  );
};

export default Main;
