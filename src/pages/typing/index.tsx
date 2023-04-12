import React, { useState } from "react";

import "./index.css";
import First from "./first";
import Second from "./second";
import Third from "./third";

const PageTyping = () => {
  return (
    <div className="typing-container flex flex-column">
      <h3>아래는 순서대로 업그레이드과정입니다.</h3>
      <First />
      <h6>
        위는 animation-iteration-count를 infinite로 주어야만 동작합니다.
        animation-iteration-count을 2로 준다면 "안"까지만 animation이
        적용됩니다. 아마도 classname의 경우 rerendering이 일어나더라도 캐싱되어
        있기 때문에 그렇지 않나 싶습니다. iteration count를 infinite로 주었기
        때문에 setinterval의 주기와 animation duration의 주기가 어긋나면서
        버그를 보여줍니다.
      </h6>
      <Second />
      <h6>
        위는 animation-iteration-count를 1로 주고, interval을 실행할때
        animation이 적용된 class를 classlist에서 remove하고 add하는 과정을
        반복합니다. 처음 버전에서 주기가 어긋나면서 보인 버그가 사라집니다.
      </h6>
      <Third />
      <h6>
        3의 경우 사라질때 animation을 zoom out으로 교체하였습니다. 글자가
        더해지는 상황인지 빠져야하는 상황인지를 새로운 state로 관리하여 분기를
        처리합니다. 구현하는데 다행인 점은 element에 class를 remove하는과정에서
        해당 class가 있는지 없는지 분기처리를 하지않아도 error를 뱉지않아
        분기처리 로직이 들어가지 않아도 되었기 때문에 쉽게 구현하였습니다.
      </h6>
    </div>
  );
};

export default PageTyping;
