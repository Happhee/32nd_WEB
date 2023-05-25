import { useReducer } from "react";

import {
  todoBreadInfo,
  todoBreadReducer,
  TodoBreadContextInfo,
  TodoBreadDispatch,
} from "../context/TodoBreadContext";

const TodoBreadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoBreadReducer, todoBreadInfo);

  return (
    <TodoBreadContextInfo.Provider value={state}>
      <TodoBreadDispatch.Provider value={dispatch}>
        {children}
      </TodoBreadDispatch.Provider>
    </TodoBreadContextInfo.Provider>
  );
};

export default TodoBreadProvider;
