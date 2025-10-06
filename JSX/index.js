import React from "react";
import ReactDOM from "react-dom/client";
//jsx 
const jsxHeading = <h1 className="heading">Hello From React!</h1>;

const heading = (
    <h2>
        React is JavaScript Library
    </h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
