import { useContext } from "react";
import { TodoBreadContextInfo } from "../../context/TodoBreadContext";

const useTodoBreadState = () => {
  const context = useContext(TodoBreadContextInfo);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }

  return context;
};

export default useTodoBreadState;
