import "./App.css";
import { Counter } from "./Counter";
import Demo, { UserName } from "./Demo";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/products"> Products </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
