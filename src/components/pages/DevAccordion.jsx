import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import p from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  //   `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&:before": {
  //     display: "none",
  //   },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  // theme.palette.mode === "theme"
  //   ? "rgba(255, 255, 255, .05)"
  //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0),
    // marginBottom: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: theme.spacing(0),
  marginTop: theme.spacing(0),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function DevAccordion() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p>Informative feedback for users</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                The add to cart buttons darken on hover and the mouse becomes a
                finger pointer to indicate that the button can be clicked, and
                the label of the button (add to cart) clearly indicates the
                button's function.
              </li>
              <li>
                When clicked, the button ripples to indicate it has been
                successfully clicked, and the user immediately sees an update in
                the cart.
              </li>
              <li>
                The heart icon also has a tooltip on hover and the mouse becomes
                pointy to tell the user that it can be clicked to add/remove an
                item from favorites.
              </li>
              <li>
                When an item is favorited, the heart is filled to indicate it
                has been favorited, and is unfilled when unfavorited.
              </li>
              <li>
                Furthermore, the plus and minus buttons in the cart provide
                immediate feedback by updating the count and price in the cart
                instantly.
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p>Preventing errors before they can happen</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                Users can only select one sort or filter from each category
                which prevents mutually exclusive filters from being selected
                (such as both bagels and drinks) which would result in a screen
                with no items. This is accomplished by having the sort/filter
                buttons automatically unselect when a new button is selected.
              </li>
              <li>
                Users can't go below 1 of an item in the cart, and if they
                attempt to, it is simply removed from the cart so there are no
                0s or negative counts of items.
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <p>Simple, efficient user experience</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                Users can adjust items the cart directly in the cart instead of
                going back to the item card to add more of an item.
              </li>
              <li>
                The interface is intuitive and its different parts are easy to
                predict what their functionality is (heart &rarr; favorite, add
                to cart &rarr; adds an item to the cart, selecting drinks &rarr;
                shown only drinks...)
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <p>Comfortable and simple interface to interact with</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                Only necessary information is shown with no extra complicated
                components.
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <p>Visual consistency</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                All filters/sort look the same and all of the item cards look
                the same with the same size headings and bodies.
              </li>
              <li>All buttons look the same for the same function.</li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <p>Hierarchy</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                The main title is large to convey it is a title, and it is
                clearly distinguished from the main content by its blue header.
              </li>
              <li>
                The sidebar contains all the sort/filter options and the cart,
                each of which are wrapped in their separate boxes to indicate
                different functionality, and this whole section is clearly
                distinct from the items.
              </li>
              <li>
                All the filters/sorts have the same format, with headings and
                spacing between each to indicate different functions.
              </li>
              <li>
                The text and spacing and bold/italics of the item card
                information conveys the importance of the info in a top-down
                manner with clear distinctions between sections and their
                relative importance.
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <p>Matching mental models</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                The cart and filtering/sorting operations match the mental model
                users already have of interacting with an ordering interface
                (such as clicking options to select them and using buttons and
                plus/minus to adjust the carts).
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <p>User control and freedom</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                Users have control over how to filter and sort items to control
                the display of the items.
              </li>
              <li>
                Users have freedom to adjust the cart as they please. No mistake
                is irreversible. If an item is added by mistake, it can be
                easily removed or added to if that is desired. Users can also
                completely clear the cart to start again.
              </li>
              <li>
                The "all" option on the filters allows users to reset the
                filters to see all the items if they pressed a category or
                favorites by mistake.
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <p>Help recognize and understand errors</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <ul>
              <li>
                Users are met with informative error messages if no items match
                their filters. Generally, users are prevented from selecting
                filters that are mutually exclusive in categories, but if a user
                tries to see favorites without adding something to their
                favorites first, or if they try to view bagels and favorites but
                they only have drinks in their favorites, no items will appear.
                Rather than having a blank screen, an informative message is
                displayed telling the user to add items to their favorites or
                that they have none of this category in their favorites (ex:
                bagel + favorites but no bagels in favorites yields the
                customized message: there are no bagels in your favorites).
              </li>
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
