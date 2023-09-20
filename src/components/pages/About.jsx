import "../../styles/App.css";
import "../../styles/pages/About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Add } from "@mui/icons-material";
import MyNav from "../MyNav";
import GoToTop from "../GoToTop";

export default function About() {
  return (
    <div className="about">
      <div className="top">
        <img src="images/profile/profile_pic.png" alt="profile pic" />
        <div className="greeting">
          <h1>About me!</h1>
          <h1 id="subh1">
            Here's a little bit about me: My name is Kiera Walsh! I am a senior
            at Brown University studying computer science and behavioral
            decision sciences.
          </h1>
        </div>
      </div>
      <div className="blurb">
        <p>
          I am interested in the intersection between psychology and computer
          science, specifically in regards to user experience, and I am
          passionate about presenting data with user experience in mind. I love
          thinking about how users can get the most out of an interface and
          projects that combine important data with frontend development.
        </p>
        <p>
          Outside of my work, I love working with other people as a Teaching
          Assistance and volunteering at local elementary schools to introduce
          computer science to young children. You can also find me enjoying the
          outdoors or spending hours inside with a needle and thread.
        </p>
        <p>I hope you enjoy my portfolio!</p>
        <p>
          <div className="socials">
            <MailOutlineRoundedIcon
              className="icon"
              fontSize="large"
              onClick={(event) =>
                (window.location.href =
                  "https://mail.google.com/mail/?view=cm&fs=1&to=kiera_walsh@brown.edu")
              }
            />
            <LinkedInIcon
              className="icon"
              fontSize="large"
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/kiera-walsh/")
              }
            />
          </div>
        </p>
      </div>

      <GoToTop />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
