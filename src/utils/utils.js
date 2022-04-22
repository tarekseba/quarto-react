import { constructProperties } from "./solvers";

export const findPiece = (piece, availablePieces) => {
  let properties = constructProperties(piece).join("");
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++) {
      let currentProp = constructProperties(availablePieces[i][j].piece).join(
        ""
      );
      if (currentProp === properties) return { i, j };
    }
};
