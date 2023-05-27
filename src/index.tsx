import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/litera/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { loadHistory } from "./store/history/actions";
import { fetchCloseStations } from "./store/day/closeStations";

store.dispatch(loadHistory());
// store.dispatch(fetchCloseStations());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
