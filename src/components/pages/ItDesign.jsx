import "../../styles/App.css";
import "../../styles/pages/ItDesign.css";
import "../../styles/pages/Page.css";
import GoToTop from "../GoToTop";

export default function ItDesign() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Iterative Design</h1>
          <h2>
            How can we prototype an app from conception to finish, incorporating
            user feedback along the way?
          </h2>
        </div>
      </div>
      <div className="section">
        <h3>Background</h3>
        <p>
          Designing intuitive and effective UIs requires a thorough process that
          includes research, user testing, receiving feedback, and revising
          designs. In this project, I worked with a group of four to explore how
          we could create an interface for KIWI, a Y Combinator-accelerated
          startup that allows mobile users to send and receive music to each
          other’s home screens. We did not look at the current interface design
          until our version had been completed.
        </p>

        <p>
          Our process was as follows:
          <ul>
            <li>Initial sketches, prototypes, and wireframe</li>
            <li>Creation of high fidelity, interactive prototypes</li>
            <li>Revision of prototypes based on peer feedback</li>
            <li>Submission of the final design to user testing</li>
          </ul>
        </p>
      </div>
      <div className="section">
        <h3>Tools</h3>
        <p>
          For this project I used a variety of design tools ranging from pen and
          paper sketching to Figma for an interactive final prototype.
        </p>
      </div>
      <div className="section">
        <h3>Identifying Purpose</h3>
        <p>
          As a first step in the design process, we first needed to ascertain
          both the purpose of the app and what our users would want. The premise
          of this startup is pretty simple. Kiwi is a mobile app that allows
          users to send songs to their friends’ homescreens. We designed our
          prototype for a mobile app that has a homescreen widget.{" "}
        </p>
        <p>
          We believe that users of all ages will use our interface, particularly
          users who are interested in music and the social aspect of sharing
          music with friends. We anticipate users will want an easy interface
          that makes the process of sending, receiving, and exploring music
          simple and fun.
        </p>
      </div>

      <div className="section">
        <h3>Sketching and Wireframing</h3>
        <p>
          To get ideas flowing, our group created four total initial designs,
          each consisting of three screens of our choice. This gave us twelve
          total initial sketches for us to work with, each showing some
          different components and ideas:
        </p>

        <div className="it-sketches">
          <img
            id="sketches"
            src="images/iterative-design/sketches.png"
            alt="sketches"
          />
        </div>

        <p>
          After talking with our group about which parts we wanted to include
          from each sketch, we combined the sketches into our initial wireframe
          shown below
        </p>

        <img
          id="wireframes"
          src="images/iterative-design/wifreframes.png"
          alt="final wireframe"
        />
      </div>

      <div className="section">
        <h3>High-Fidelity Mockup</h3>
        <p>
          We then created a brief style guide before transforming our wireframe
          into a high fidelity prototype using Figma. We incorporated our style
          design guidelines, and adhered to a minimalist color scheme with a few
          pops of color. Our initial prototype is shown below.
        </p>

        <img
          id="initial-figmas"
          src="images/iterative-design/initial_figmas.png"
          alt="first-figma"
        />
      </div>

      <div className="section">
        <h3>Critique</h3>
        <p>
          An important part of the design process is receiving feedback, so we
          brought our mockup to our peers to get their thoughts. Our peers
          mentioned issues related to font size, navigation, icon accessibility,
          and affordances. They suggested the initial font size was too small
          and we could use different font weights to emphasize hierarchy. They
          also thought the navigation buttons were too big and bulky and
          slightly ambiguous which could be limited by adding labels. Other
          small affordances like the direction the settings page slides in/out
          from were brought up which would improve the user experience.
        </p>
      </div>

      <div className="section">
        <h3>Updating our Prototype</h3>
        <p>
          Incorporating the feedback from the critiques, we made the following
          adjustments to reveal our final hi-fi prototype. Interact with the
          prototype below as if it were an app on your phone!
        </p>
        <div className="it-figma">
          <iframe
            title="it-figmas"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1);",
            }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrMDKfJ6h2rF3s6s31KWtwR%2FKiwi-Wireframes-and-Mockups%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="section">
        <h3>User Testing</h3>
        <p>
          Lastly we sent our prototype to usertesting.com to have some users
          complete some tasks and get their feedback. We asked users to open the
          app and send a kiwi to Mark Zuckerberg with the song "August" by
          Taylor Swift. The next task was to find the settings page.
        </p>

        <p>
          After users completed the tasks, we asked them questions about their
          experience. Users told us that they found the app’s design nice and
          aesthetically pleasing. They were able to complete both tasks fairly
          quickly and easily and noted that our app’s layout and design was very
          intuitive.
        </p>

        <p>
          Some feedback that we would incorporate into a future iteration of
          this project would be more clearly marking the kiwi widget on the
          homescreen, as some users noted that they were unsure of where the
          actual app was. Another user mentioned perhaps moving the profile page
          to be an icon in the corner rather than its own page at the bottom.
        </p>
      </div>

      <div className="section">
        <h3>Conclusions</h3>
        <p>
          This project taught me a lot about the design process and the steps
          involved in taking an idea from an idea to reality. It is important to
          start with sketches to brainstorm ideas and then work with others to
          combine these first into one wireframe which can then be developed
          into a functioning high-fi prototype. Of course, after prototyping
          there is still a lot to do with development before an app can be
          deployed, but the design and user feedback portion is just as, if not
          more, important!
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
