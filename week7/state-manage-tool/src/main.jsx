import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/index.js";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
