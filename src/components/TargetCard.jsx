import { useCallback, useState } from "react";
import "./TargetCard.css";

const TargetCard = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isOver, setIsOver] = useState(false);
  const onDragEnterHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (isEmpty) setIsOver(true);
    },
    [isEmpty]
  );
  const onDragLeaveHandler = useCallback(
    (event) => {
      event.preventDefault();
      setIsOver(false);
    },
    []
  );
  const onDropHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (isEmpty) {
        const id = event.dataTransfer.getData("id");
        const element = document.getElementById(id);
        if (element) {
          setIsEmpty(false);
          console.log("DROP HANDLER : " + id);
          event.target.appendChild(element);
        } else {
          setIsOver(false);
        }
      }
    },
    [isEmpty]
  );

  const onDragOverHandler = useCallback((event) => {
    event.preventDefault();
  }, []);
  return (
    <div
      className="target-card"
      style={{ outline: isOver ? "1px solid green" : "none" }}
      onDragEnter={onDragEnterHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    ></div>
  );
};

export default TargetCard;
