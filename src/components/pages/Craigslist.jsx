import PageHeader from "../PageHeader";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const original_craisglist = {
  imageUrl: "images/work/craigslist-before.png",
};
const redesigned_craigslist = {
  imageUrl: "images/work/craigslist-after.png",
};

function Craigslist() {
  return (
    <div>
      <PageHeader
        img="images/work/covers/craigslist.png"
        category="Web Development"
        title="Craigslist Responsive Redesign"
        description="We have all come across websites with confusing layouts, unclear
            sections, and unintuitive designs that just make our lives as users
            harder. For this project, I took a notoriously ugly and unresponsive
            website — Craigslist — and redesigned it with usability,
            accessibility, and responsiveness in mind."
        technologies="HTML, CSS"
        link="https://k-walsh.github.io/craigslist/"
        id="craigslist"
      />
      <div className="workpage">
        <div className="slider">
          <ReactBeforeSliderComponent
            firstImage={original_craisglist}
            secondImage={redesigned_craigslist}
          />
        </div>
      </div>
    </div>
  );
}

export default Craigslist;
