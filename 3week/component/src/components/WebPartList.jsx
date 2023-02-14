import React from "react";
import WebPartItem from "./WebPartItem";

const webPartListItem = ["햅히", "32기", "WEB파트", "함께하자"];
const WebPartList = () => {
  return (
    <React.Fragment>
      {webPartListItem.map((item) => (
        <WebPartItem key={item} title={item}>
          {item === "햅히" && <strong>웹팟쟝입니다</strong>}
        </WebPartItem>
      ))}
    </React.Fragment>
  );
};

export default WebPartList;
