import "../styles/variables.css";
import "../styles/Portfolio.css";
import NavBar from "./nav/NavBar";
import HeyThere from "./HeyThere";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
// import Cursor from "./cursor/OldCursor";
import Cursor from "./cursor/Cursor";

function Portfolio() {
  return (
    <div>
      <Cursor />
      <div className="Portfolio">
        <NavBar />
        <HeyThere />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
    // <Cursor>
    //   <div className="Portfolio">
    //     <NavBar />
    //     <HeyThere />
    //     <About />
    //     <Work />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </Cursor>
  );
}

export default Portfolio;
