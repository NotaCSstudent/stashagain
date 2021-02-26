import React from "react";
import "./Component1.css";

function Component1(props) {
  const { learn, discover, watch } = props;

  return (
    <div className="component-1">
      <div className="learn2 coda-extra-bold-monte-carlo-20px">{learn}</div>
      <div className="discover2 coda-extra-bold-aqua-deep-20px">{discover}</div>
      <div className="watch2 coda-extra-bold-aqua-deep-20px">{watch}</div>
    </div>
  );
}

export default Component1;
