import "../styles/App.css";
import "../styles/MyNav.css";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default function MyNav() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/">Giant Giraffe</Link>
      </div>
      <div className="right-navbar">
        <Link to="/home">home</Link>
        <div className="dropdown">
          <Link to={{ pathname: "/home", hash: "#work" }}>
            work&nbsp;
            <ExpandMoreRoundedIcon />
          </Link>
          <div className="dropdown-content">
            <Link to="/development">development</Link>
            <Link to="/iterative-design">iterative design</Link>
            <Link to="/responsive-redesign">responsive redesign</Link>
            <Link to="/community-wealth-dashboard">
              community wealth dashboard
            </Link>
          </div>
        </div>
        <Link to="/about">about</Link>
      </div>
    </div>
  );

  // return (
  //   <div className="navbar">
  //     <h1 className="left-navbar">
  //       <Link to="/">Giant Giraffe</Link>
  //     </h1>
  //     <div className="right-navbar">
  //       <h2>
  //         <Link to="/">home</Link>
  //       </h2>
  //       <h2>
  //         <Link to="/about">about</Link>
  //       </h2>
  //       <div className="dropdown-control">
  //         <h2>
  //           <Link to="/">
  //             work <ExpandMoreRoundedIcon />
  //           </Link>
  //         </h2>
  //         <div className="dropdown">
  //           <h2>
  //             <Link to="/development">Development</Link>
  //           </h2>
  //           <h2>
  //             <Link to="/iterative-design">Iterative Design</Link>
  //           </h2>
  //           <h2>
  //             <Link to="/responsive-redesign">Responsive Redesign</Link>
  //           </h2>
  //           <h2>
  //             <Link to="/community-wealth-dashboard">
  //               Community Wealth Dashboard
  //             </Link>
  //           </h2>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // <div className="mynav">
  //   <nav>
  //     <h1>
  //       <Link to="/">Giant Giraffe</Link>
  //     </h1>
  //     <div className="mynavlinks">
  //       <h2>
  //         <Link to="/">Home</Link>
  //       </h2>
  //       <h2>
  //         <Link to="/about">About</Link>
  //       </h2>
  //       <div className="dropdown">
  //         <button className="dropbtn">
  //           <h2>
  //             My Work <ExpandMoreRoundedIcon />
  //           </h2>
  //         </button>
  //         <div class="dropdown-content">
  //           <Link to="/iterative-design">
  //             <h2>Iterative Design</h2>
  //           </Link>
  //           <Link to="/development">
  //             <h2>Development</h2>
  //           </Link>
  //           <Link to="/responsive-redesign">
  //             <h2>Responsive Redesign</h2>
  //           </Link>
  //           <Link to="/personas">
  //             <h2>Personas</h2>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // </div>*/}
  // );
}
