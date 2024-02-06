import { Routes, Route } from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
      </Route>
    </Routes>
  );
}
