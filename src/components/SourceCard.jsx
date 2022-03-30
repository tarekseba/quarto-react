import { useDispatch } from "react-redux";
import Piece from "./Piece";
import "./SourceCard.css";
import { gameActions } from "../store/game";
const SourceCard = (props) => {
  const dispatch = useDispatch();
  const { column, row, piece, available, chooseTurn, playTurn } = props;
  const dblckickHandler = () => {
    if (chooseTurn) {
      dispatch(gameActions.setPlaceholder({ isHolding: true, piece }));
      dispatch(gameActions.removeAvailablePiece({ column, row }));
      dispatch(gameActions.setChooseTurn(false));
    }
  };
  return (
    <>
      <div
        className="card"
        style={{ gridArea: props.area }}
        onDoubleClick={dblckickHandler}
      >
        {available && <Piece keyId={props.keyId} piece={props.piece}></Piece>}
      </div>
    </>
  );
};

export default SourceCard;
