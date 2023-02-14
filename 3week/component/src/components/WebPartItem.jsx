import React from "react";
import { useRef } from "react";

const WebPartItem = (props) => {
  const { title, children } = props;

  const liRef = useRef();
  return (
    <li ref={liRef}>
      {title}
      <p>{children}</p>
    </li>
  );
};

export default WebPartItem;
