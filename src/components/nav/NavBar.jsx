import "../../styles/NavBar.css";
import { Link } from "react-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useState, useEffect, useRef } from "react";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const burgerClass = hamburgerOpen ? "active" : "inactive";

  return (
    <>
      <div className="NavBar">
        <AnimatedOnScroll animationIn="fadeIn" animationInDelay={1000}>
          <Link
            to="HeyThere"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            delay={0}
          >
            <h2>Kiera Walsh</h2>
          </Link>
        </AnimatedOnScroll>
        <div className="navlinksTop">
          <NavLink name="About" />
          <NavLink name="Work" />
          <NavLink name="Contact" />
        </div>
        <div className="navLinksAndHam" ref={menuRef}>
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger burgerClass={burgerClass} />
          </div>
          <div className={`navlinksCollapsed ${burgerClass}`}>
            <NavLink
              name="About"
              collapsed={true}
              open={hamburgerOpen}
              setOpen={setHamburgerOpen}
              navCollapsed={true}
            />
            <NavLink
              name="Work"
              collapsed={true}
              open={hamburgerOpen}
              setOpen={setHamburgerOpen}
              navCollapsed={true}
            />
            <NavLink
              name="Contact"
              collapsed={true}
              open={hamburgerOpen}
              setOpen={setHamburgerOpen}
              navCollapsed={true}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .navlinksCollapsed {
            display: ${hamburgerOpen ? "inline" : "none"};
          }

          .navLinksAndHam {
            background-color: ${hamburgerOpen && "#c49b82"};
            /* height: ${hamburgerOpen ? "60vh" : "inherit"}; */
            opacity: ${hamburgerOpen && "100% !important"};
          }

          .burgerline {
            background-color: ${hamburgerOpen ? "#fce9d8" : "#c49b82"};
          }
        }
      `}</style>
    </>
  );
}
