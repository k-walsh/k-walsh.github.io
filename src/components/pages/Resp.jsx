import "../../styles/App.css";
import "../../styles/pages/Resp.css";
import "../../styles/pages/Page.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { IconButton } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import GoToTop from "../GoToTop";

const original_craisglist = {
  imageUrl: "images/resp-redesign/og_craig.png",
};
const redesigned_craigslist = {
  imageUrl: "images/work-covers/craigslist-covers.png",
};

export default function Resp() {
  const [lofiNum, setLofiNum] = useState(1);
  const [figmaNum, setFigmaNum] = useState(1);

  function carouselImage() {
    if (lofiNum === 1) {
      return <img src="images/resp-redesign/desktop.png" alt="desktop" />;
    } else if (lofiNum === 2) {
      return <img src="images/resp-redesign/Tablet.png" alt="tablet" />;
    } else {
      return <img src="images/resp-redesign/Phone.png" alt="phone" />;
    }
  }

  function forward() {
    console.log("before", lofiNum);
    if (lofiNum < 3) {
      setLofiNum(lofiNum + 1);
    } else {
      setLofiNum(1);
    }
    console.log("forward, now:", lofiNum);
  }

  function backwards() {
    console.log("before", lofiNum);
    if (lofiNum > 1) {
      setLofiNum(lofiNum - 1);
    } else {
      setLofiNum(3);
    }
    console.log("backward, now:", lofiNum);
  }

  function forwardHighFi() {
    console.log("before", figmaNum);
    if (figmaNum < 4) {
      setFigmaNum(figmaNum + 1);
    } else {
      setFigmaNum(1);
    }
    console.log("forward, now:", figmaNum);
  }

  function backwardsHighFi() {
    console.log("before", figmaNum);
    if (figmaNum > 1) {
      setFigmaNum(figmaNum - 1);
    } else {
      setFigmaNum(4);
    }
    console.log("backward, now:", figmaNum);
  }

  function highfi() {
    if (figmaNum === 1) {
      return (
        <iframe
          title="style guide"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)," }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqWiUNlaHwC57LBD2qR30sb%2Fstyle-guide%3Fnode-id%3D1%253A95%26scaling%3Dcontain%26page-id%3D0%253A1"
          allowfullscreen
        ></iframe>
      );
    } else if (figmaNum === 2) {
      return (
        <iframe
          title="computer figma"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FISCvfClvQXrjucKkB443pt%2FCraigslist-Mac%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1"
          allowfullscreen
        ></iframe>
      );
    } else if (figmaNum === 3) {
      return (
        <iframe
          title="tablet figma"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FopjIx57cNvnWg30Mp4Ynen%2FCraigslist-iPad%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1"
          allowfullscreen
        ></iframe>
      );
    } else {
      return (
        <iframe
          title="iphone figma"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fz8OtbjhKG3Tp7yz1XOnFyH%2FCraigslist-iPhone%3Fnode-id%3D17%253A2%26scaling%3Dscale-down%26page-id%3D14%253A309"
          allowfullscreen
        ></iframe>
      );
    }
  }

  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Responsive Redesign</h1>
          <h2>How can we make a website usable across all devices?</h2>
          <h2>
            How can we improve the user experience of an existing website?
          </h2>
        </div>
      </div>
      <div className="section">
        <h3>Background</h3>
        <p>
          For this project, I was interested in taking a website that is pretty
          awful to navigate and making it better for users. We have all come
          across websites with confusing layouts, unclear sections, and
          unintuitive designs that just make our lives as users harder.
        </p>
        <p>
          From a psychological perspective, if we experience a hard time using a
          website, we are likely to associate these negative feelings and
          frustration with the brand/company itself. That is why it is so
          important for companies to have easy, accessible websites with clear
          learnability and memorability features that promote accessibility. And
          as a general rule of thumb, humans are very aesthetic beings and
          things that look good are associated with more positive associations
          with a company.
        </p>
        <p>
          So I decided to take one of the most notoriously ugly and unresponsive
          websites and make it better. Yes, you guessed it! For this project I
          will be redesigning Craigslist with usability, accessibility, and
          responsiveness in mind.
        </p>
      </div>

      <div className="section">
        <h3>Before & After</h3>
        <p>
          To get an idea of where this project is going, use the slider below to
          compare the redesigned product to the original Craigslist website:
        </p>
        <div className="slider">
          <ReactBeforeSliderComponent
            firstImage={original_craisglist}
            secondImage={redesigned_craigslist}
          />
        </div>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>
          For this project I used Balsamic and Figma for prototyping, and html,
          css, and bootstrap for redesigning the webiste.
        </p>
      </div>

      <div className="section">
        <h3>Identifying Usability Issues & Proposing Solutions</h3>
        <p>
          As a first step in this project, I needed to identify what exactly
          needs to be fixed for Craigslist (you can view the original website{" "}
          <a
            href="https://providence.craigslist.org/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          ). Some issues I found and how I addressed them are listed below:
        </p>
        <table>
          <tr>
            <th>Issue</th>
            <th></th>
            <th>Solution</th>
          </tr>
          <tr>
            <td>
              The left column (where users look first) has mostly useless links,
              whereas the right column (where the users would look last)
              actually has important information, like location, that they need
              to see first.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Location information and important sign-in buttons are now placed
              front and center at the top of the page whereas less important
              links are placed in the footer.
            </td>
          </tr>
          <tr>
            <td>
              Selecting location is a needlessly complicated task. There are
              many different categories with overlapping locations. There is
              also no option to indicate how far around that city you are
              willing to travel.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Location is now a set of dropdowns that intuitively follow one
              after another. The answer to the previous dropdown populates the
              options for the next selection. There is also a button now to
              indicate a location range.
            </td>
          </tr>
          <tr>
            <td>
              Links to the same place are repeatedly shown on the page under
              diffrent names and in different locations. Names aren’t clear or
              organized in any particular way.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Links are now condensed such that each link leads to its own page.
              Links are also renamed appropriately and combined into categories
              in the footer of the page.
            </td>
          </tr>
          <tr>
            <td>
              So much text is thrown at the user in the middle of the screen.
              The search bar isn’t featured front and center but rather hidden
              off towards the side.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Include a search bar front and center so users can search directly
              for what they want if they know what they are looking for.
            </td>
          </tr>
          <tr>
            <td>
              The links on the main screen are organized into large categories
              but each category still has an overwhelming amount of links simply
              listed in a column. This is too much info to process at once.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Categories are now collapsible so users can open only what they're
              interested in, limiting extra info. Links within each category are
              also organized into subcategories for easier finding.
            </td>
          </tr>
          <tr>
            <td>
              Links use abbreviated names (like "eco") that aren't always clear.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>Links are now labeled more descriptively.</td>
          </tr>
          <tr>
            <td>
              There is no button to sign in to your account or see if you are
              signed in.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Now there is a button to sign into your account and make a
              posting.
            </td>
          </tr>
          <tr>
            <td>
              There is no good hierarchy. The category titles don’t stand out
              and have a very similar font size.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Collapsible accordian blocks make the headings clear as well as
              establish a clear hierarchy.
            </td>
          </tr>
          <tr>
            <td>
              The webpage is not responsive. It does not resize well on mobile
              devices.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              Responsive design principles were used such that things shrink and
              resize appropriately.
            </td>
          </tr>
          <tr>
            <td>
              The calendar isn't labeled with the month, doesn't allow users to
              toggle between months, and is very small and doesn’t resize
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              A larger, better calendar is now displayed that will allow users
              to see the current day and click on a day to view events.
            </td>
          </tr>
          <tr>
            <td>
              Much of the site has small text which is an accessibility issue.
            </td>
            <td className="arrow-cell">
              <EastRoundedIcon fontSize="large" />
            </td>
            <td>
              The new design allows the text size to be larger and still fit.
            </td>
          </tr>
        </table>
      </div>

      <div className="section">
        <h3>Low-Fi Protoyping</h3>
        <p>
          With these issues in mind, I began the redesign process by making some
          lo-fi sketches, one for each of the devices. Scroll through the images
          below to see my designs.
        </p>
        <div className="carousel">
          <IconButton onClick={() => backwards()} className="arrow">
            <ArrowBackIosRoundedIcon />
          </IconButton>
          {carouselImage()}
          <IconButton onClick={() => forward()} className="arrow">
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="section">
        <h3>High-Fi Protoyping</h3>
        <p>
          After doing so, I made a figma mockup to put these ideas into a more
          reasonable website format. The first step involved making a visual
          design style guide with the fonts, colors, interactive elements, and
          icons I was planning to use in my design, as well as how they looked
          in different states. See the design guide and mockup figmas below:
        </p>
        <div className="carousel" id="figmas">
          <IconButton onClick={() => backwardsHighFi()} className="arrow">
            <ArrowBackIosRoundedIcon />
          </IconButton>
          {highfi()}
          <IconButton onClick={() => forwardHighFi()} className="arrow">
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="section">
        <h3>Final Product / Conclusions</h3>
        <p>
          Finally, I redesigned the website, following my designs. This was the
          first website I ever coded from scratch so it was quite the learning
          process. Click on the image below to see the final results. Feel free
          to explore the site (but note it is not completely interactive as this
          project was more design focused, not implementation oriented).
        </p>

        <a
          href="https://giantgiraffe123.github.io/craigslist/"
          target="_blank"
          rel="noreferrer"
          className="final-img"
        >
          <img
            src="images/resp-redesign/craig-final-comp.png"
            alt="final redesign ss"
          />
        </a>

        <p>
          I spent a lot of time wrestling with layouts and css, but eventually I
          got things to be responsive. The padding in the header isn’t as good
          as I would have liked, but it was a learning process. Now I actually
          understand what padding means :)
        </p>
        <p>
          Overall, this project taught me a lot about what to look for in
          designing for user experience such as learnability, memorability, and
          accessibility, as well as thinking about how the website would look
          across different screen sizes.
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
