import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import "../styles/Contact.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Contact() {
  return (
    <div id="Contact" className="section">
      <AnimatedOnScroll animationIn="fadeInUp">
        <h2>Contact</h2>
      </AnimatedOnScroll>

      <div className="contact">
        <AnimatedOnScroll animationIn="fadeInUp">
          <p>
            Thanks for buzzing around my portfolio! I'm always excited to
            connect with potential collaborators, meet people interested in the
            intersection of tech and psychology, or chat about anything under
            the ~sun~. Feel free to explore my projects on GitHub, connect with
            me on LinkedIn, or send me a message via email. Have a bee-autiful
            day!
          </p>

          <img src="images/sun2.png" alt="sun" id="sunContact" />

          <div className="contactlinks">
            <a
              href="https://github.com/k-walsh"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <GitHubIcon className="icon" fontSize="large" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kiera_walsh@brown.edu"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <MailOutlineRoundedIcon className="icon" fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/in/kiera-walsh/"
              target="_blank"
              rel="noreferrer"
              className="underlinelink"
            >
              <LinkedInIcon className="icon" fontSize="large" />
            </a>
          </div>

          {/* TODO: add resume */}
          {/* <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=kiera_walsh@brown.edu"
        target="_blank"
        rel="noreferrer"
      >
        <ContactPageOutlinedIcon className="icon" fontSize="large" />
      </a> */}
        </AnimatedOnScroll>
      </div>
    </div>
  );
}

export default Contact;
