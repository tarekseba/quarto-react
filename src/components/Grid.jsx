import "./Grid.css";
import Board from "./Board";
import HolderCard from "./HolderCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SourceCard from "./SourceCard";

const Grid = (props) => {
  const game = useSelector((state) => state.game);
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
        row.map((piece, columnIndex) =>
          piece.available ? (
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
            ></SourceCard>
          ) : (
            <></>
          )
        )
      )}
      <Board></Board>
      <HolderCard placeholder={game.placeholder}></HolderCard>
    </div>
  );
};

export default Grid;
