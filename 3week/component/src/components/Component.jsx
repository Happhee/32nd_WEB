import { useState } from "react";
import Child from "./Child";

const Component = ({ child }) => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount((c) => c + 1)}>자식 상태 변경</button>
      <p>자식상태: {count}</p>
      {child}
    </div>
  );
};

export default Component;
