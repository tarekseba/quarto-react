import "./HolderCard.css";
import Piece from "./Piece";
const HolderCard = (props) => {
  const { placeholder, playTurn } = props;
  return (
    <div
      className="holder-card"
      style={{
        animation: playTurn ? "pulse ease-in-out 1200ms infinite" : "none",
      }}
    >
      {placeholder.isHolding && (
        <Piece draggable={playTurn} piece={placeholder.piece}></Piece>
      )}
    </div>
  );
};

export default HolderCard;
