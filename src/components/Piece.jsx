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
  console.log("piece rerender");
  return (
    <div
      className={"piece " + constructPiece(props.piece)}
      draggable={props.draggable ? true : false}
      style={{
        cursor: "pointer",
      }}
    ></div>
  );
};

export default Piece;
