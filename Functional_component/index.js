import React from "react";
import ReactDOM from "react-dom/client";

// functinal components
const Title = () => (
     <h1 id="heading"> Functional component</h1>
);

//const HeadingComponent = () => (
// <h1 id="heading">
// Functional component
// </h1>
// );

const info = "You can put a react element inside a functional component using {} braces";
const HeadingComponent= () => (
   
    <div id="container">
        {info}
        {Title()}
        <Title></Title>
        <Title />
        <h1 id="heading" >React has a Parcel Dependency</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
 