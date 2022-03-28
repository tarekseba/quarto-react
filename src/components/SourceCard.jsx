import { useState } from "react";
import Piece from "./Piece";
import "./SourceCard.css";
const SourceCard = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <div
          className="card"
          style={{ gridArea: props.area }}
          onDoubleClick={() => {
            setIsVisible(false);
            props.setIsHolding(true);
          }}
        >
          <Piece keyId={props.keyId}></Piece>
        </div>
      )}
    </>
  );
};

export default SourceCard;
