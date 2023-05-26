import { useRef } from "react";

const Happhee = ({ setName }) => {
  const inputRef = useRef(null);

  const handleNameValue = (e) => {
    e.preventDefault();
    setName(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleNameValue}>
        이름 변경하기
      </button>
    </div>
  );
};

export default Happhee;
