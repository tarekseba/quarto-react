import "./Grid.css";
import Board from "./Board";
import HolderCard from "./HolderCard";
import { useSelector } from "react-redux";
import SourceCard from "./SourceCard";
import PlayIndicator from "./UI/PlayIndicator";

const Grid = (props) => {
  const game = useSelector((state) => state.game);
  console.log("chooseTurn" + game.chooseTurn);
  return (
    <div className="animated-grid">
      {/* <SourceCard setIsHolding={setIsHolding} area={"a"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"b"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"c"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"d"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"e"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"f"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"g"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"h"}></SourceCard>
      <SourceCard setIsHolding={setIsHolding} area={"i"} keyId="9"></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"j"}
        keyId="10"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"k"}
        keyId="11"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"l"}
        keyId="12"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"m"}
        keyId="13"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"n"}
        keyId="14"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"o"}
        keyId="16"
      ></SourceCard>
      <SourceCard
        setIsHolding={setIsHolding}
        area={"p"}
        keyId="15"
      ></SourceCard> */}
      {game.availablePieces.map((row, rowIndex) =>
        row.map((piece, columnIndex) => (
          <SourceCard
            key={
              "" +
              piece.piece.hollow +
              piece.piece.shape +
              piece.piece.size +
              piece.piece.color
            }
            available={piece.available}
            piece={piece.piece}
            column={columnIndex}
            row={rowIndex}
            chooseTurn={game.chooseTurn}
            playTurn={game.playTurn}
          ></SourceCard>
        ))
      )}
      <Board></Board>
      <HolderCard placeholder={game.placeholder}></HolderCard>
      <div className="indicators__container">
        <div className="indicator">
          <h4 style={{ color: "white" }}>Choose piece</h4>
          <PlayIndicator checked={!game.chooseTurn}></PlayIndicator>
        </div>
        <div className="indicator">
          <h4 style={{ color: "white" }}>Place piece</h4>
          <PlayIndicator checked={!game.playTurn}></PlayIndicator>
        </div>
      </div>
    </div>
  );
};

export default Grid;
