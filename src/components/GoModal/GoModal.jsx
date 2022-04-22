import "./GoModal.css";
import { createPortal } from "react-dom";

const GoModal = (props) => {
  const { Content, close, action, difficulty, difficultyAction, winner } =
    props;
  return createPortal(
    <div
      className="modal__wrapper"
      onClick={
        close
          ? (event) => {
              close(action());
            }
          : null
      }
    >
      <Content
        difficulty={difficulty}
        dispatch={close}
        difficultyAction={difficultyAction}
        winner={winner}
      />
    </div>,
    document.body
  );
};

export default GoModal;
