import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// API Call => Response
root.render(
  <div style={{ paddingLeft: "20px" }}>
    <App
      componentName="App Functional Component"
      componentType="Functional Component"
      response={{ name: "XXX", age: 20 }}
    />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
