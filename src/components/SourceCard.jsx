import { useState } from "react";
import { useDispatch } from "react-redux";
import Piece from "./Piece";
import "./SourceCard.css";
import { gameActions } from "../store/game";
const SourceCard = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const { column, row, piece, available } = props;
  const dblckickHandler = () => {
    dispatch(gameActions.setPlaceholder({ isHolding: true, piece }));
  };
  return (
    <>
      {available && (
        <div
          className="card"
          style={{ gridArea: props.area }}
          onDoubleClick={dblckickHandler}
        >
          <Piece keyId={props.keyId} piece={props.piece}></Piece>
        </div>
      )}
    </>
  );
};

export default SourceCard;
