import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  console.log(location.pathname === "/");
  let ballTop = 71;
  if (location.pathname === "/lol") ballTop += 45;
  if (location.pathname === "/about") ballTop = 938;
  // 116px => + 45
  return (
    <div className={`nav ${toggle && "nav_toggled"}`}>
      <hr className="separator"></hr>
      <div className="ball" style={{ top: ballTop }}></div>
      <div className="nav__toggle__button">
        <h5
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          QUATRO
        </h5>
        <a className="nav__item" onClick={() => setToggle((state) => !state)}>
          <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>

      <NavLink
        to="/"
        className={`item__container ${
          location.pathname == "/" ? "selected" : ""
        }`}
        style={({ isActive }) => ({
          textDecoration: "none",
          transform: isActive && "translateX(+10px)",
        })}
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          NEW GAME
        </h6>
        <i className="fa-solid fa-circle-play icon"></i>
      </NavLink>
      <NavLink
        to="/lol"
        className={`item__container ${
          location.pathname === "/lol" ? "selected" : ""
        }`}
        style={({ isActive }) =>
          isActive
            ? { transform: "translateX(10px)", textDecoration: "none" }
            : { textDecoration: "none" }
        }
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "6.2rem" : "0px",
          }}
        >
          DIFFICULTY
        </h6>
        <i class="fa-solid fa-vial icon"></i>
      </NavLink>
      <NavLink
        to="/about"
        className={`item__container ${
          location.pathname === "/about" ? "selected" : ""
        }`}
        style={({ isActive }) => ({
          marginTop: "auto",
          marginBottom: "1rem",
          transform: isActive && "translateX(+10px)",
          textDecoration: "none",
        })}
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          RULES
        </h6>
        <i className="fa-solid fa-circle-question icon"></i>
      </NavLink>
    </div>
  );
};

export default Navbar;
