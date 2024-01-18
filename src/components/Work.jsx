import "../styles/Work.css";
import "../styles/Pages.css";
import WorkCard from "./WorkCard";
// import Masonry from "@mui/lab/Masonry";
import LocalReturn from "./pages/LocalReturn";
import NMC from "./pages/NMC";
import CS111 from "./pages/CS111";
import BDH from "./pages/BDH";
import Craigslist from "./pages/Craigslist";
import Bluenos from "./pages/Bluenos";
import ASL from "./pages/ASL";
import Tunes from "./pages/Tunes";
import BDS from "./pages/BDS";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Work() {
  return (
    <div id="Work" className="section">
      <AnimatedOnScroll animationIn="fadeInUp">
        <h2>Work</h2>
      </AnimatedOnScroll>
      <div className="work">
        {/* <Masonry columns={2} spacing={2}> */}
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/nmc.png"
            title="New Majority Capital Dashboard"
            type="Web Development"
            page={<NMC />}
            modalID="nmcModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/cs111.png"
            title="CS 111 Website"
            type="Web Development"
            page={<CS111 />}
            modalID="cs111Modal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/local.png"
            title="Community Wealth Dashboard"
            type="Web Development"
            page={<LocalReturn />}
            modalID="localModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/bdh.png"
            title="Brown Daily Herald News Quiz"
            type="Web Development"
            page={<BDH />}
            modalID="bdhModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/blueno.png"
            title="Blueno's Bakery"
            type="Web Development"
            page={<Bluenos />}
            modalID="bluenoModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/craigslist.png"
            title="Craigslist Responsive Redesign"
            type="Web Development"
            page={<Craigslist />}
            modalID="craigModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/asl.png"
            title="ASL Alphabet Translator"
            type="Computer Vision"
            page={<ASL />}
            modalID="aslModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/bds.png"
            title="Data Storytelling"
            type="BDS Capstone"
            page={<BDS />}
            modalID="bdsModal"
          />
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="fadeInUp">
          <WorkCard
            path="images/work/covers/tunes.png"
            title="Tunes Over Time"
            type="Data Science"
            page={<Tunes />}
            modalID="tunesModal"
          />
        </AnimatedOnScroll>
        {/* </Masonry> */}
      </div>
    </div>
  );
}

export default Work;
