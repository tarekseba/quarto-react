import { useSelector } from "react-redux";
import "./Board.css";
import TargetCard from "./TargetCard";

const Board = () => {
  const game = useSelector((state) => state.game);
  return (
    <div className="board">
      {game.grid.map((row, rowIndex) =>
        row.map((item, columnIndex) => (
          <TargetCard
            piece={item.piece}
            occupied={item.occupied}
            row={rowIndex}
            column={columnIndex}
            key={item.id}
            keyId={item.id}
          ></TargetCard>
        ))
      )}
    </div>
  );
};

export default Board;
