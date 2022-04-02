import "./GoModal.css";
import { createPortal } from "react-dom";
import { gameActions } from "../../store/game";

const GoModal = (props) => {
  const { left, Content, close } = props;
  return createPortal(
    <div
      className="modal__wrapper"
      style={{ left: left }}
      onClick={
        close
          ? (event) => {
              close(gameActions.setResetModal());
            }
          : null
      }
    >
      <Content />
    </div>,
    document.body
  );
};

export default GoModal;
