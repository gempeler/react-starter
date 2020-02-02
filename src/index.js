import React from "react";
import ReactDOM from "react-dom";
import "core-js"; // <- at the top of your entry point
import "./tailwind/tailwind.css";
import "./lib/i18n";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
