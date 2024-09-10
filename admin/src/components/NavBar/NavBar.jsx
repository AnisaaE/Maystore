import navprofile from "../../assets/navprofile.jpg";
import navlogo from "../../assets/navlogo.jpg";

import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
  
          <img src={navlogo} alt="Maystore Logo" className="nav-logo"/>
        
      </div>
    </nav>
  );
};

export default NavBar;
