import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from 'react-redux'
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./components/reducers.tsx";

const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
