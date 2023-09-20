import "../../styles/App.css";
import "../../styles/pages/Home.css";
import Work from "../Work";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link } from "react-router-dom";
import MyNav from "../MyNav";
import GoToTop from "../GoToTop";

export default function Home() {
  return (
    <div>
      <div className="home">
        <img src="images/profile/profile_pic.png" alt="profile pic" />
        <div className="greeting">
          <h1>
            Hi! My name is Kiera and I'm a senior at Brown University passionate
            about all things related to design, data, and psychology.
          </h1>
          <Link to="/about">
            <div className="to-about">
              <p>Read more about me</p> <EastRoundedIcon className="arrow" />
            </div>
          </Link>
        </div>
      </div>
      <Work id="work" />

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
