import "./HolderCard.css";
import Piece from "./Piece";
const HolderCard = (props) => {
  return (
    <div className="holder-card">
      {props.isHolding && <Piece draggable={true}></Piece>}
    </div>
  );
};

export default HolderCard;
