import SourceCard from "./SourceCard";
import "./Grid.css";
import Board from "./Board";
import HolderCard from "./HolderCard";
import { useState } from "react";

const Grid = (props) => {
  const [isHolding, setIsHolding] = useState(false);
  return (
    <div className="animated-grid">
      <SourceCard setIsHolding={setIsHolding} area={"a"}></SourceCard>
      <SourceCard area={"b"}></SourceCard>
      <SourceCard area={"c"}></SourceCard>
      <SourceCard area={"d"}></SourceCard>
      <SourceCard area={"e"}></SourceCard>
      <SourceCard area={"f"}></SourceCard>
      <SourceCard area={"g"}></SourceCard>
      <SourceCard area={"h"}></SourceCard>
      <SourceCard area={"i"} keyId="9"></SourceCard>
      <SourceCard area={"j"} keyId="10"></SourceCard>
      <SourceCard area={"k"} keyId="11"></SourceCard>
      <SourceCard area={"l"} keyId="12"></SourceCard>
      <SourceCard area={"m"} keyId="13"></SourceCard>
      <SourceCard area={"n"} keyId="14"></SourceCard>
      <SourceCard area={"o"} keyId="16"></SourceCard>
      <SourceCard area={"p"} keyId="15"></SourceCard>
      <Board></Board>
      <HolderCard isHolding={isHolding}></HolderCard>
    </div>
  );
};

export default Grid;
