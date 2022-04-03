import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { gameActions } from "../store/game";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname === "/");
  let ballTop = 70;
  if (location.pathname === "/lol") ballTop += 45 + 45;
  if (location.pathname === "/about") ballTop = 938;
  // 116px => + 42.5
  return (
    <div className={`nav ${toggle && "nav_toggled"}`}>
      <hr className="separator"></hr>
      <div
        className="ball"
        style={
          location.pathname === "/about"
            ? { top: "calc(100% - 50px)" }
            : { top: ballTop }
        }
      ></div>
      <div className="nav__toggle__button">
        <h5
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          QUARTO
        </h5>
        <a className="nav__item" onClick={() => setToggle((state) => !state)}>
          <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>

      <NavLink
        to="/"
        onClick={() => setToggle(false)}
        className={`item__container ${
          location.pathname === "/" ? "selected" : ""
        }`}
        style={({ isActive }) => ({
          textDecoration: "none",
          transform: isActive && "translateX(+12px)",
        })}
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          PLAY
        </h6>
        <i className="fa-solid fa-circle-play icon"></i>
      </NavLink>
      <a
        className={`item__container`}
        onClick={() => {
          dispatch(gameActions.setResetModal());
          setToggle(false);
        }}
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "5.5rem" : "0px",
          }}
        >
          RESET
        </h6>
        <i className="fa-solid fa-repeat icon"></i>
      </a>
      <NavLink
        to="/lol"
        onClick={() => setToggle(false)}
        className={`item__container ${
          location.pathname === "/lol" ? "selected" : ""
        }`}
        style={({ isActive }) =>
          isActive
            ? { transform: "translateX(12px)", textDecoration: "none" }
            : { textDecoration: "none" }
        }
      >
        <h6
          style={{
            opacity: toggle ? "1" : "0",
            width: toggle ? "6.19rem" : "0px",
          }}
        >
          DIFFICULTY
        </h6>
        <i className="fa-solid fa-vial icon"></i>
      </NavLink>
      <NavLink
        onClick={() => setToggle(false)}
        to="/about"
        className={`item__container ${
          location.pathname === "/about" ? "selected" : ""
        }`}
        style={({ isActive }) => ({
          marginTop: "auto",
          marginBottom: "1rem",
          transform: isActive && "translateX(+12px)",
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
