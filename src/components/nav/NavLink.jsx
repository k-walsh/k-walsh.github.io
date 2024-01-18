import { Link } from "react-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function NavLink(props) {
  const close = () => {
    console.log("close");
    if (props.open) {
      props.setOpen(false);
    }
  };

  const link = (
    <Link
      to={props.name}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
      delay={0}
      className="underlinelink"
      onClick={close}
    >
      {props.footer ? <p>{props.name}</p> : <h3>{props.name}</h3>}
    </Link>
  );

  // if collapsed, don't animate
  if (props.navCollapsed || props.footer) return link;
  else
    return (
      <AnimatedOnScroll
        animationIn="fadeIn"
        animationInDelay={1000}
        duration={1000}
      >
        {link}
      </AnimatedOnScroll>
    );
}

export default NavLink;
