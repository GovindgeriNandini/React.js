import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading-el"}, "Hello from Nandini srinivas!");
const rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(heading);