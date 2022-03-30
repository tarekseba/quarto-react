import { useCallback, useState } from "react";
import "./Piece.css";
import { SHAPE, SIZE, COLOR } from "../utils/types";

const constructPiece = (piece) => {
  let className = "";
  if (piece.size === SIZE.BIG) className += "big";
  else className += " small";
  if (piece.color === COLOR.DARK) className += " dark";
  else className += " light";
  if (piece.shape === SHAPE.SQUARE) className += " square";
  else className += " circle";
  if (piece.hollow) {
    if (piece.color === COLOR.DARK) className += " hollow__dark";
    else className += " hollow__light";
  } else {
    if (piece.color === COLOR.DARK) className += " full__dark";
    else className += " full__light";
  }
  return className;
};

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
      className={"piece " + constructPiece(props.piece)}
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
