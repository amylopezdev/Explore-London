import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">explore London</Link>
      </div>
      <div className="nav-links">
        <Link to="places" state={{ category: "all" }}>
          Places
        </Link>
        <span>|</span>
        <Link to="events">Events</Link>
      </div>
    </nav>
  );
};
