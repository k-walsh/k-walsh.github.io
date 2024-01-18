import { Link } from "react-scroll";
import "../styles/Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavLink from "./nav/NavLink";

function Footer() {
  return (
    <div>
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
        <ArrowUpwardIcon fontSize="large" />
      </Link>
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
          <NavLink name="About" navCollapsed={true} />
          <NavLink name="Work" navCollapsed={true} />
          <NavLink name="Contact" navCollapsed={true} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
