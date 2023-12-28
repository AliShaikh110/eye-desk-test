import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import OT from "./Components/MenuComp/OTcomp/OT";
import IPD from "./Components/MenuComp/IPDcomp/IPD";
import OPD from "./Components/MenuComp/OPDcomp/OPD";
import STORE from "./Components/MenuComp/STOREcomp/Store";
import Navbar from "./Components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OT" element={<OT />} />
        <Route path="/IPD" element={<IPD />} />
        <Route path="/OPD" element={<OPD />} />
        <Route path="/STORE" element={<STORE />} />
      </Routes>
    </div>
  );
}

export default App;
