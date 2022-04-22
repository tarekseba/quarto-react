import { useDispatch } from "react-redux";
import "./GoModalContent.css";
import { gameActions } from "../../../store/game";

const GoModalContent = (props) => {
  const { winner } = props;
  const dispatch = useDispatch();
  const resetHandler = () => {
    dispatch(gameActions.resetGame());
  };
  return (
    <div className="modal__content">
      <h2>Game Over</h2>
      <h3>
        <span>{winner} Won</span>
      </h3>
      <button onClick={resetHandler}>Play again</button>
    </div>
  );
};

export default GoModalContent;
