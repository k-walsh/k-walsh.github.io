import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="projectcard">
      <Link to={props.link}>
        <div className="img-hover-container">
          <img src={props.preview_img_path} alt={props.proj_name} />
          <div className="viewMore">
            <h3>view more</h3>
          </div>
        </div>
        <h3>{props.proj_name}</h3>
        <hr />
        <p>{props.display_txt}</p>
      </Link>
    </div>
  );
}
