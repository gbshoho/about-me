import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Link } from "react-router-dom";
import {Information} from "./pages/Information";

function App(){
  return (
  <BrowserRouter>
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
    <Route path="/" element={<Home />}/> 
    <Route path="/Information" element={<Information />}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App