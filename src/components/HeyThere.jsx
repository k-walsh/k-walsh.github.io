import "../styles/HeyThere.css";
import { Link } from "react-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function HeyThere() {
  return (
    <div id="HeyThere" className="HeyThere">
      <img src="images/sun.png" alt="sun" id="sun" />
      <AnimatedOnScroll animationIn="fadeIn" animationInDuration={1000}>
        <h1>
          Hey there! <br /> I'm Kiera
        </h1>
      </AnimatedOnScroll>
      {/* <AnimatedOnScroll animationIn="fadeIn" animationInDuration={2000}>
        <h1>Hey there!</h1>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="fadeIn"
        animationInDuration={2000}
        animationInDelay={1000}
      >
        <h1>I'm Kiera</h1>
      </AnimatedOnScroll> */}
      <AnimatedOnScroll
        animationIn="fadeIn"
        animationInDuration={1000}
        animationInDelay={500}
        // animationOut="fadeOut"
        // animationOutDuration={2000}
      >
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          delay={0}
        >
          <img src="images/arrow bee.png" alt="arrow to continue" id="bee" />
        </Link>
      </AnimatedOnScroll>
    </div>
  );
}

export default HeyThere;
