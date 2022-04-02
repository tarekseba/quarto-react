import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../store/game";
import Piece from "./Piece";
import "./TargetCard.css";

const TargetCard = (props) => {
  const { occupied, piece, row, column } = props;
  const dispatch = useDispatch();
  const { placeholder, playTurn } = useSelector((state) => state.game);
  const [isOver, setIsOver] = useState(false);
  const onDragEnterHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (!occupied) setIsOver(true);
    },
    [occupied]
  );
  const onDragLeaveHandler = useCallback((event) => {
    event.preventDefault();
    setIsOver(false);
  }, []);
  const onDropHandler = (event) => {
    event.preventDefault();
    if (!occupied && /*playTurn*/ true && placeholder.isHolding) {
      dispatch(gameActions.setGridPiece({ column, row }));
      dispatch(gameActions.initPlaceholder());
      dispatch(gameActions.setPlayTurn(false));
      dispatch(gameActions.setChooseTurn(true));
      // const id = event.dataTransfer.getData("id");
      // const element = document.getElementById(id);
      // if (element) {
      //   setIsEmpty(false);
      //   console.log("DROP HANDLER : " + id);
      //   event.target.appendChild(element);
      // } else {
      //   setIsOver(false);
      // }
    }
    setIsOver(false);
  };

  const onDragOverHandler = useCallback((event) => {
    event.preventDefault();
  }, []);
  return (
    <div
      className="target-card"
      style={{ outline: isOver ? "4px solid rgb(84 255 89)" : "none" }}
      onDragEnter={onDragEnterHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      {occupied && <Piece keyId={props.keyId} piece={piece}></Piece>}
    </div>
  );
};

export default TargetCard;
