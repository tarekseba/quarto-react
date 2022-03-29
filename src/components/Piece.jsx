import { useCallback, useState } from "react";
import "./Piece.css";

const Piece = (props) => {
  const [isDragged, setIsDragged] = useState(false);

  const onDragStartHandler = useCallback(
    (event) => {
      console.log(props.draggable);
      event.preventDefault();
      if (props.draggable) {
        setTimeout(() => {
          setIsDragged(true);
        }, 0);
        console.log("dragged");
      }
    },
    [props.draggable]
  );

  const onDragEndHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (props.draggable) {
        setIsDragged(false);
        console.log("drag end");
      }
    },
    [props.draggable]
  );

  return (
    <div
      id={props.keyId}
      className="piece"
      draggable={props.draggable ? true : false}
      style={{
        display: isDragged ? "none" : "block",
        cursor: "pointer",
      }}
      onDrag={onDragStartHandler}
      onDragStart={
        props.draggable
          ? (event) => {
              console.log(props.draggable);
              if (props.draggable) {
                event.dataTransfer.setData("id", event.target.id);
                console.log(event.dataTransfer.getData("id"));
              }
            }
          : null
      }
      onDragEnd={onDragEndHandler}
    ></div>
  );
};

export default Piece;
