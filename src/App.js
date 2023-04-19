import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Link } from "react-router-dom";
import {Information} from "./pages/Information";

function App(){
  return (
  <>
  <nav>
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Information">Information</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Information" element={<Information />}></Route>
  </Routes>
  </>
  )
}
export default App