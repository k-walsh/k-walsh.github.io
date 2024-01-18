import { Link } from "react-scroll";
import "../styles/Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavLink from "./nav/NavLink";

function Footer() {
  return (
    <div>
      <div className="uppp">
        <Link
          to="HeyThere"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          delay={0}
          className="arrowUp"
        >
          {/* <ArrowUpwardIcon style={{ color: "#fce9d8" }} fontSize="large" /> */}
          <ArrowUpwardIcon fontSize="large" id="uparrow" />
          <img src="images/sun2.png" alt="sun" id="sunFoot" />
        </Link>
      </div>
      <footer>
        <div>
          <p>Kiera Walsh</p>
          <p>
            B.A. Candidate in Computer Science & <br />
            Behavioral Decision Sciences
          </p>
          <p>Brown University</p>
        </div>
        <div className="footerlinks">
          <NavLink name="About" footer={true} />
          <NavLink name="Work" footer={true} />
          <NavLink name="Contact" footer={true} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
