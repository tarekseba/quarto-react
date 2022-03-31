import "./GoModal.css";
import { createPortal } from "react-dom";
import GoModalContent from "./GoModalContent/GoModalContent";

const GoModal = () => {
  return createPortal(<div className="modal__wrapper">
      <GoModalContent></GoModalContent>
  </div>, document.body);
};

export default GoModal;