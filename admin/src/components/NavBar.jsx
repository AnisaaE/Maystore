import navprofile from "../../assestes/navprofile.png";
import navlogo from "../../assestes/navlogo.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Maystore Logo" className="nav-logo" />
      <img src={navprofile} alt="Maystore Logo" className="nav-profile" />
    </div>
  );
};

export default NavBar;
