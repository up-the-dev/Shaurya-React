import "./App.css";
import { Counter } from "./Counter";
import Demo, { UserName } from "./Demo";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {

  

  return (
    <>
      <nav className=" flex gap-10 ">
        <NavLink
          className={(element) => {
            return element.isActive ? "text-red-500" : "";
          }}
          to="/home"
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          className={(element) => {
            return element.isActive ? "text-red-500" : "";
          }}
          to="/about"
        >
          {" "}
          About{" "}
        </NavLink>
        <NavLink
          className={(element) => {
            return element.isActive ? "text-red-500" : "";
          }}
          to="/products"
        >
          {" "}
          Products{" "}
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
