import { useDispatch } from "react-redux";
import "./GoModalContent.css";
import { gameActions } from "../../../store/game";
import { useNavigate } from "react-router-dom";

const GoModalResetContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetHandler = (event) => {
    event.stopPropagation();
    dispatch(gameActions.resetGame());
    dispatch(gameActions.setResetModal());
    navigate("/");
  };
  return (
    <div className="modal__content">
      <a
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "1rem",
          width: "2rem",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(1.8)",
          cursor: "pointer",
        }}
      >
        <i
          className="fa-solid fa-square-xmark"
          style={{
            color: "white",
            filter: "drop-shadow(0 0 2px var(--primary-color))",
          }}
        ></i>
      </a>
      <h2>
        Are you sure ?
      </h2>
      <button onClick={resetHandler} style={{ marginTop: "2rem" }}>
        RESTART
      </button>
    </div>
  );
};

export default GoModalResetContent;
