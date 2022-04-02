import "./Grid.css";
import Board from "./Board";
import HolderCard from "./HolderCard";
import { useSelector } from "react-redux";
import SourceCard from "./SourceCard";
import PlayIndicator from "./UI/PlayIndicator";
import GoModal from "./GoModal/GoModal";
import GoModalContent from "./GoModal/GoModalContent/GoModalContent";

const Grid = (props) => {
  const game = useSelector((state) => state.game);
  return (
    <div className="animated-grid">
      {game.gameOver && <GoModal left="0px" Content={GoModalContent}></GoModal>}
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
          ></SourceCard>
        ))
      )}
      <Board></Board>
      <HolderCard
        placeholder={game.placeholder}
        playTurn={/*game.playTurn*/ true}
      ></HolderCard>
      <div className="indicators__container">
        <div className="indicator">
          <h5 style={{ color: "white" }}>Choose piece</h5>
          <PlayIndicator checked={!game.chooseTurn}></PlayIndicator>
        </div>
        <div className="indicator">
          <h5 style={{ color: "white" }}>Place piece</h5>
          <PlayIndicator checked={!game.playTurn}></PlayIndicator>
        </div>
      </div>
    </div>
  );
};

export default Grid;
