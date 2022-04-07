import { DIFFICULTY } from "../../../utils/types";
import "./GoModalContent.css";
const GoModalDifficulty = (props) => {
  const { difficulty, dispatch, difficultyAction } = props;
  console.log(difficulty);
  return (
    <div className="modal__content">
      <h2>Difficulty :</h2>
      <div className="diff__container">
        <div onClick={() => dispatch(difficultyAction(DIFFICULTY.EASY))}>
          <input
            type="radio"
            id="easy"
            name="difficulty"
            style={
              difficulty === DIFFICULTY.EASY
                ? {
                    filter: "drop-shadow(0 0 10px var(--primary-color))",
                  }
                : null
            }
            value={DIFFICULTY.EASY}
            checked={difficulty === DIFFICULTY.EASY}
            onChange={(event) => event.preventDefault()}
            onClick={() => dispatch(difficultyAction(DIFFICULTY.EASY))}
          ></input>{" "}
          <label
            htmlFor="easy"
            style={
              difficulty === DIFFICULTY.EASY
                ? {
                    textShadow: "0 0 10px var(--primary-color)",
                  }
                : null
            }
          >
            EASY
          </label>
        </div>
        <div onClick={() => dispatch(difficultyAction(DIFFICULTY.MEDIUM))}>
          <input
            type="radio"
            id="medium"
            name="difficulty"
            style={
              difficulty === DIFFICULTY.MEDIUM
                ? {
                    filter: "drop-shadow(0 0 10px var(--primary-color))",
                  }
                : null
            }
            value={DIFFICULTY.MEDIUM}
            checked={difficulty === DIFFICULTY.MEDIUM}
            onChange={(event) => event.preventDefault()}
            onClick={() => dispatch(difficultyAction(DIFFICULTY.MEDIUM))}
          ></input>{" "}
          <label
            htmlFor="medium"
            style={
              difficulty === DIFFICULTY.MEDIUM
                ? {
                    textShadow: "0 0 10px var(--primary-color)",
                  }
                : null
            }
          >
            MEDIUM
          </label>
        </div>
        <div onClick={() => dispatch(difficultyAction(DIFFICULTY.HARD))}>
          <input
            type="radio"
            id="hard"
            name="difficulty"
            style={
              difficulty === DIFFICULTY.HARD
                ? {
                    filter: "drop-shadow(0 0 10px var(--primary-color))",
                  }
                : null
            }
            value={DIFFICULTY.HARD}
            checked={difficulty === DIFFICULTY.HARD}
            onChange={(event) => event.preventDefault()}
            onClick={() => dispatch(difficultyAction(DIFFICULTY.HARD))}
          ></input>{" "}
          <label
            htmlFor="hard"
            style={
              difficulty === DIFFICULTY.HARD
                ? {
                    textShadow: "0 0 10px var(--primary-color)",
                  }
                : null
            }
          >
            HARD
          </label>
        </div>
      </div>
    </div>
  );
};

export default GoModalDifficulty;
