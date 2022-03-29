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
      ></SourceCard>
      <Board></Board>
      <HolderCard isHolding={isHolding}></HolderCard>
    </div>
  );
};

export default Grid;
