import "../../styles/App.css";
import "../../styles/pages/Dev.css";
import "../../styles/pages/Page.css";
import GoToTop from "../GoToTop";
import DevAccordion from "./DevAccordion";

export default function Dev() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Development</h1>
          <h2>
            How can we develop a bakery website with user experience in mind?
          </h2>
        </div>
      </div>

      <div className="section">
        <h3>Background</h3>
        <p>
          For this project, I designed a website for Blueno's Bagel Shop. This
          was an exercise in creating a website from scratch and getting
          comfortable with React’s components and states. In doing so, I first
          considered user stories to understand what a user would want from this
          website, and then used React to make this website a reality while
          ensuring to include many usability principles to make the user
          experience as smooth as possible.
        </p>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>
          In this project, I used React, react components and states,
          javascript, html, and css.
        </p>
      </div>

      <div className="section">
        <h3>User Needs</h3>
        <p>
          To start this process, I thought about what a user of this website
          would want to be able to do. Given that this is a bakery website,
          users are coming to this site both to view the options my shop has and
          to possibly place an order. Thus, I came up with a list of a few key
          features a user would want:
          <ul>
            <li>
              See all the options clearly laid out with images, prices, and
              descriptions
            </li>
            <li>
              Filter by category to view only certain items (ie if they know
              they want a drink, they can go right to that section)
            </li>
            <li>Sort by different options such as price or calories</li>
            <li>Save favorites so users can go back to them later</li>
            <li>
              Add and remove items from my cart and see in real time how that
              affects the total price
            </li>
          </ul>
        </p>
      </div>

      <div className="section">
        <h3>Goals of the Application</h3>
        <p>
          The goal of this application is to allow users to see the different
          foods and beverages Blueno's Bagel Shop offers. It is a simple and
          easy to navigate interface that allows users to sort and filter by
          things that are important to them in dining at Blueno's Bagels.
          Customers can sort by price or calories, and filter the options to
          look at only certain types of food, as well as add their favorite
          items to their favorites, making the checkout process more efficient
          in the future.
        </p>
        <p>
          Aside from exploring Blueno's Bagels many options, this application
          also allows users to add items to their cart to place an order which
          is valuable for customers who prefer to order online. The easy to find
          add-to-cart button adds the item to the user's cart, and then they can
          either press that button multiple times, or increase the number of the
          item in the cart or decrease it with the plus/minus buttons if they
          change their mind.
        </p>
        <p>
          Customers can also get an idea of the total cost of the order since
          the cart aggregates the total cost of the items in the user's cart. If
          a user decides they don't want to order today, they can clear the cart
          and go about their day without a bagel.
        </p>
        <p>
          Overall, this application's goal is to assist Blueno's Bagel customers
          in viewing the shop's many options based on a customer's preferences
          and allow customers to add items to their cart.
        </p>
      </div>

      <div className="section">
        <h3>The Application</h3>
        <p>
          Scroll through the figma below to see how the website is laid out.
        </p>
        <div className="blueno-figma">
          <iframe
            title="blueno-view"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1);" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FluaRLBZPPbGkpegmgj3Z2Q%2FBlueno's-Bagel-Shop%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="section">
        <h3>Usability Principles Considered</h3>
        <p>
          In this application I considered many usability principles including:
          <DevAccordion />
        </p>
      </div>

      <div className="section">
        <h3>Final Product</h3>
        <p>
          Click on the image below to view and interact with the site! Enjoy
          your bagel!
          {/* <a href="https://giantgiraffe123.github.io/development/">here</a>! */}
        </p>

        <a
          href="https://giantgiraffe123.github.io/development/"
          target="_blank"
          rel="noreferrer"
          className="final-img"
          id="blueno-final"
        >
          <img
            src="images/work-covers/blueno-comp.png"
            alt="final blueno page"
          />
        </a>
      </div>

      <div className="section">
        <h3>Lessons</h3>
        <p>
          This project taught me a lot about how to use react, especially to
          pass down data through components and have things that update when a
          state is changed. I ran into a lot of bugs and confusion along the
          way, but I feel a lot more comfortable working with React now. I
          understand how useState works and how to write functions in javascript
          in combination with html to build cool features like an interactive
          cart.
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
