import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import OT from "./Components/MenuComp/OTcomp/OT";
import IPD from "./Components/MenuComp/IPDcomp/IPD";
import OPD from "./Components/MenuComp/OPDcomp/OPD";
import STORE from "./Components/MenuComp/STOREcomp/Store";
import Login from "./Components/Authentication/LoginPage/Login";
import Signup from "./Components/Authentication/SignupPage/Signup";
import Payments from "./Components/PaymentGateway/Payments";
import { AppProvider } from "./AppContext/AppContext";
import Refraction from "./Components/RefractionComponent/Main";
import EyeTemplate from "./Components/EyeTemplate/Main/Main";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Refraction" element={<Refraction />} />
          <Route path="/EyeTemplate" element={<EyeTemplate />} />
          <Route path="/OT" element={<OT />} />
          <Route path="/IPD" element={<IPD />} />
          <Route path="/OPD" element={<OPD />} />
          <Route path="/STORE" element={<STORE />} />
          <Route path="/Payment" element={<Payments />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
