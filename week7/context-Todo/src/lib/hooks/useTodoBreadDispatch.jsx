import { useContext } from "react";
import { TodoBreadDispatch } from "../../context/TodoBreadContext";

const useTodoBreadDispatch = () => {
  const context = useContext(TodoBreadDispatch);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export default useTodoBreadDispatch;
