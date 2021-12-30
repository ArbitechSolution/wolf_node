import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHome from "./AppHome";
import AppPresale from "./AppPresale";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AppHome />} />
          <Route exact path="/presale" element={<AppPresale />} />
        </Routes>
      </BrowserRouter>
      {/* <AppHome /> */}
      {/* <Navbar/>
     <Home/> */}
    </div>
  );
}

export default App;
