import { gameActions } from "../store/game";
import { calculateHeuristic } from "./solvers";
export const AILevel1 = (piece, availablePieces, grid, setGridPiece) => {
  const play = calculateHeuristic(piece, grid);
  setGridPiece({ column: play.col, row: play.row });
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++)
      if (availablePieces[i][j].available) return { i, j };
};
