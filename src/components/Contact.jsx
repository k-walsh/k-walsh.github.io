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
            Feel free to reach out! I'd love to chat - whether it's about a
            project, my experience, or waffles! Let's connect on Linkedin,
            Github, or send me an email! Thanks for looking over my work!{" "}
          </p>

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
