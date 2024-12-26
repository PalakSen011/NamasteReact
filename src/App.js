import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/headerComp/Header.js";
import Body from "./components/bodyComp/Body.js";
import About from "./components/aboutComp/About.js";
import Contact from "./components/contactComp/Contact.js"
import Error from "./components/errorComp/Error.js";

// Main App Component
const App = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />
      
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error/>
  }
]);

// Render the App Component into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
