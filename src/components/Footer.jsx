import { Link } from "react-scroll";
import "../styles/Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            delay={0}
            className="underlinelink"
          >
            <p>About</p>
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            delay={0}
            className="underlinelink"
          >
            <p>Work</p>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            delay={0}
            className="underlinelink"
          >
            <p>Contact</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
