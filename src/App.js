import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/headerComp/Header.js"
import Body from "./components/bodyComp/Body.js";


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
