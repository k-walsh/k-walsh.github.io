import "../styles/About.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function About() {
  return (
    <div id="About" className="section">
      <AnimatedOnScroll animationIn="fadeInUp">
        <h2>About</h2>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInUp">
        <div className="about">
          <img src="images/me.png" alt="me (Kiera)" id="pic" />
          {/* <img src="images/hex.png" alt="me (Kiera)" id="pic" /> */}
          {/* <div className="bio"> */}
          <p id="bio">
            Hey! I'm Kiera, an aspiring software engineer passionate about
            building awesome web experiences. I'm currently a senior at Brown
            University, studying computer science and behavioral decision
            sciences.
            <br />
            <br />
            With my interdisciplinary background, I love weaving together code
            and human behavior to create seamless and engaging interfaces.
            <br />
            <br />
            When I'm not coding, I love watching sunsets or staring at the
            stars. You can also find me spending hours inside with a needle and
            thread.
          </p>
          {/* </div> */}
        </div>
      </AnimatedOnScroll>
    </div>
  );
}

export default About;
