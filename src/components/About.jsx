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
            building awesome web experiences. In May 2024, I graduated from
            Brown University with degrees in computer science and behavioral
            decision sciences.
            <br />
            <br />
            With my interdisciplinary background, I love weaving together code
            and human behavior to create seamless and engaging interfaces. And
            when I'm not coding, I also love creating - whether it's with yarn
            and a hook or scraps of paper and a gluestick!
            <br />
            <br />
            Post-grad I am currently living in Italy where I am working as an au
            pair and studying Italian! I'm excited to take this time to see the
            world and grow as a person before I take on the next phase of my
            life!
          </p>
          {/* </div> */}
        </div>
      </AnimatedOnScroll>
    </div>
  );
}

export default About;
