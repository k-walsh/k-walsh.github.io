import "../styles/App.css";
import About from "./pages/About";
import MyNav from "./MyNav";
import Home from "./pages/Home.jsx";
import Dev from "./pages/Dev";
import ItDesign from "./pages/ItDesign";
import Resp from "./pages/Resp";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MyNav />
        <Routes>
          {/* note that the switch component will render the first route that matches the pattern
      so / and then /first will always render /, so need to put in order of most specific -> least
      aka / is last */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community-wealth-dashboard" element={<Dashboard />} />
          <Route path="/responsive-redesign" element={<Resp />} />
          <Route path="/development" element={<Dev />} />
          <Route path="/iterative-design" element={<ItDesign />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
