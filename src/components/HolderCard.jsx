import "./HolderCard.css";
import Piece from "./Piece";
const HolderCard = (props) => {
  const { placeholder } = props;
  return (
    <div className="holder-card">
      {placeholder.isHolding && (
        <Piece draggable={true} piece={placeholder.piece}></Piece>
      )}
    </div>
  );
};

export default HolderCard;
