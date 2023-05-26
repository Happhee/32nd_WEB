import { combineReducers } from "redux";
import WebPartReducer from "./WebPart";

const rootReducer = combineReducers({
  webInfo: WebPartReducer,
});

export default rootReducer;
