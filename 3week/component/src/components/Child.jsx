import React from "react";

const Child = () => {
  let start = new Date().getTime();
  for (; new Date().getTime() - start < 2000; ) {}
  return <div>오래걸리는 자식</div>;
};

export default Child;
