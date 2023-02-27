import "../../styles/App.css";
import "../../styles/pages/Dash.css";
import GoToTop from "../GoToTop";

export default function Dashboard() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Community Wealth Dashboard</h1>
          <h2>How can we visualize community wealth across Rhode Island?</h2>
        </div>
      </div>
      <div className="section">
        <h3>Background</h3>
        <p>
          This past summer I interned at a local nonprofit in Rhode Island whose
          mission is to build community wealth in Rhode Island through ownership
          and investment. They work in collaboration with people and
          neighborhoods that have experienced historical disinvestment, where
          capital does not flow on its own. Over the course of the summer, I
          worked on researching data and designing a dashboard to visualize
          community wealth in communities across Rhode Island.{" "}
        </p>
      </div>
      <div className="section">
        <h3>Tools</h3>
        <p>Python, excel, pandas, tableau</p>
      </div>
      <div className="section">
        <h3>Process</h3>
        <p>
          This project consisted of many parts: first researching what exactly
          community wealth means, deciding what measures to include in the
          dashboard, finding data for every city in Rhode Island, designing the
          outline of the dashboard, and then creating the dashboard with
          tableau. The final dashboard can be used to view a snapshot of
          community wealth for each city/town in Rhode Island, using a set of
          indicators based on available local data (see sources linked below).
        </p>
      </div>
      <div className="section">
        <h3>Defining Community Wealth</h3>
        <p>
          While there is no one established definition of community wealth, the
          wealth of a community can be represented by a variety of indicators.
          On top of standard measures of wealth such as income, poverty rates,
          and unemployment, other factors like diversity, the environment,
          homeownership, diverse business scenes, property value, accessibility,
          and community engagement bring wealth to a community too.
        </p>
      </div>
      <div className="section">
        <h3>Collecting Data</h3>
        <p>
          Finding the data was a time consuming process given that many cities
          in Rhode Island have a very small population. The main data source
          ended up being the American Community Survey from the Census. You can
          view all the data and sources here [redacted] and see the data for all
          of RI here [redacted].
        </p>
      </div>
      <div className="section">
        <h3>Prototyping</h3>
        <p>
          Then I moved onto making prototypes to plan out how to portray this
          data. I had a lot of numbers and graphs but wanted to make something
          that was easy to look at and simple to understand. Below are my
          initial sketches and plans which I ended up altering as the process
          continued.
        </p>

        <div className="sketches-dash">
          <img src="images/dash/sketch1.png" alt="dash sketch" />
          <img src="images/dash/sketch2.png" alt="dash sketch" />
        </div>
      </div>
      <div className="section">
        <h3>Making the Dashboard</h3>
        <p>
          In making the dashboard, I used tableau which allowed me to link my
          data sources and build charts and interactive plots directly from the
          data. Since we wanted to make a different dashboard for each community
          in Rhode Island, using tableau, I was able to create a map of the
          state which acts as a filter for the dashboard. Clicking on one of the
          cities/towns will load the dashboard corresponding to that community.
          The use of tooltips also allowed me to provide extra information when
          a user hovered over a number or plot, which I used to contextualize
          the particular community by saying how it compared to Rhode Island
          overall.
        </p>
        <p>
          View the figma below to see what the dashboard for Providence looks
          like (note: it is not interactive here)
          <div className="dash-figma">
            <iframe
              title="community wealth dashboard"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxfoH3LQFaUaoKzOu9e0LPx%2FCommunity-Dashboard%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
              allowfullscreen
            ></iframe>
          </div>
        </p>
      </div>
      <div className="section">
        <h3>The Final Product</h3>
        <p>
          You can interact with the final product{" "}
          <a href="https://public.tableau.com/views/RITableau/Dashboard?:display_count=n&:origin=viz_share_link">
            here
          </a>
          . Enjoy!
        </p>
        {/* <div id="dash">
          <iframe
            id="dash-frame"
            title="dashboard"
            src="https://public.tableau.com/views/RITableau/Dashboard?:display_count=n&:origin=viz_share_link"
            // src="https://public.tableau.com/app/profile/kiera.walsh/viz/RITableau/Dashboard"
          />
        </div> */}
      </div>
      <div className="section">
        <h3>Conclusions</h3>
        <p>
          This was a very fun project to work on. If I had done this project
          after taking UI/UX, it probably would have been a lot easier. One area
          for improvement is that the dashboard is not responsive. I enjoyed
          being able to combine my passions for data and user design in this
          project and look forward to doing more work like this in the future.
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
