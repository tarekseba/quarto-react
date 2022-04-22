export const constructProperties = (piece) => {
  let properties = [];
  properties.push(piece.size);
  properties.push(piece.shape);
  properties.push(piece.color);
  properties.push(piece.hollow ? "hollow" : "full");
  return properties;
};

export const gameOverSolver = (grid, availablePiecesCount) => {
  if (availablePiecesCount === 0) return true;
  for (let i = 0; i < 4; i++) {
    if (grid[i][0].occupied) {
      const piece = grid[i][0].piece;
      let properties = constructProperties(piece);
      for (let j = 1; j < 4; j++) {
        if (grid[i][j].occupied) {
          let currentProperties = constructProperties(grid[i][j].piece);
          properties = properties.filter((property) =>
            currentProperties.includes(property)
          );
          //console.log(properties);
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        //console.log("WINNER!!!!!!!!!!!!");
        return true;
      } else {
        //console.log("Game is still going!!");
      }
    }
  }
  //console.log("columns");
  for (let j = 0; j < 4; j++) {
    if (grid[0][j].occupied) {
      const piece = grid[0][j].piece;
      let properties = constructProperties(piece);
      for (let i = 1; i < 4; i++) {
        if (grid[i][j].occupied) {
          let currentProperties = constructProperties(grid[i][j].piece);
          properties = properties.filter((property) =>
            currentProperties.includes(property)
          );
          //console.log(properties);
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        //console.log("WINNER!!!!!!!!!!!!");
        return true;
      } else {
        //console.log("Game is still going!!");
      }
    }
  }
  //console.log("diagonal");
  if (grid[0][0].occupied) {
    const piece = grid[0][0].piece;
    let properties = constructProperties(piece);
    for (let i = 1; i < 4; i++) {
      if (grid[i][i].occupied) {
        let currentProperties = constructProperties(grid[i][i].piece);
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
        //console.log(properties);
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      //console.log("WINNER!!!!!!!!!!!!");
      return true;
    } else {
      //console.log("Game is still going!!");
    }
  }

  if (grid[0][3].occupied) {
    //console.log("diagonal 2");
    const piece = grid[0][3].piece;
    let properties = constructProperties(piece);
    for (let i = 2; i >= 0; i--) {
      if (grid[3 - i][i].occupied) {
        let currentProperties = constructProperties(grid[3 - i][i].piece);
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
        //console.log(properties);
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      //console.log("WINNER!!!!!!!!!!!!");
      return true;
    } else {
      //console.log("Game is still going!!");
    }
  }
  return false;
};

export const lineIsFull = (line, grid) => {
  //console.log("line is full done");
  if (line < 0 || line > 3) return false;
  for (let i = 0; i < 4; i++)
    if (grid[line][i].occupied === false) return false;
  //console.log("line Is FULL");
  return true;
};

export const columnIsFull = (col, grid) => {
  if (col < 0 || col > 3) return false;
  for (let i = 0; i < 4; i++) if (grid[i][col].occupied === false) return false;
  //console.log("column Is FULL");
  return true;
};

export const diagonalIsFull = (diagonal, grid) => {
  if (diagonal === 0) {
    for (let i = 0; i < 4; i++) if (grid[i][i].occupied === false) return false;
  } else {
    const col = 3;
    for (let i = 0; i < 4; i++)
      if (grid[i][col - i].occupied === false) return false;
  }
  //console.log("DIAGONAL FULL");
  return true;
};

export const calculateHeuristic = (piece, grid) => {
  const heuristicMatrix = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j].occupied) {
        heuristicMatrix[i][j] = { playable: false, heuristic: 0 };
      } else {
        // LINE TEST
        let emptySpots = 1;
        let properties = constructProperties(piece);
        for (let k = 0; k < 4; k++) {
          if (k === j) continue;
          if (!grid[i][k].occupied) {
            emptySpots++;
          } else {
            const currentProperties = constructProperties(grid[i][k].piece);
            properties = properties.filter((item) =>
              currentProperties.includes(item)
            );
          }
        }
        if (emptySpots === 1 && properties.length > 0)
          heuristicMatrix[i][j] = { playable: true, heuristic: 10 };
        if (emptySpots === 2 && properties.length > 0)
          heuristicMatrix[i][j] = { playable: true, heuristic: -10 };
        if (emptySpots === 3 && properties.length > 0)
          heuristicMatrix[i][j] = { playable: true, heuristic: 5 };
        if (properties.length === 0 || emptySpots === 4)
          heuristicMatrix[i][j] = { playable: true, heuristic: 0 };
        //console.log(
        //   heuristicMatrix[i][j].heuristic + " after LINE" + i + " " + j
        // );

        // COLUMN TEST
        emptySpots = 1;
        properties = constructProperties(piece);
        for (let k = 0; k < 4; k++) {
          if (k === i) continue;
          if (!grid[k][j].occupied) {
            emptySpots++;
          } else {
            const currentProperties = constructProperties(grid[k][j].piece);
            properties = properties.filter((item) =>
              currentProperties.includes(item)
            );
          }
        }
        if (emptySpots === 1 && properties.length > 0)
          heuristicMatrix[i][j] = { playable: true, heuristic: 10 };
        if (emptySpots === 2 && properties.length > 0)
          heuristicMatrix[i][j] = { playable: true, heuristic: -10 };
        if (
          emptySpots === 3 &&
          properties.length > 0 &&
          heuristicMatrix[i][j].heuristic >= 0 &&
          heuristicMatrix[i][j].heuristic < 8
        ) {
          if (heuristicMatrix[i][j].heuristic >= 5)
            heuristicMatrix[i][j] = {
              playable: true,
              heuristic: heuristicMatrix[i][j].heuristic + 1,
            };
          else heuristicMatrix[i][j] = { playable: true, heuristic: 5 };
        }
        if (
          (properties.length === 0 || emptySpots === 4) &&
          heuristicMatrix[i][j] === null
        ) {
          //console.log("IN");
          //console.log(emptySpots + " EMPTYSPOTS");
          //console.log("PROPERTIES.LENGTH " + properties.length);
          heuristicMatrix[i][j] = { playable: true, heuristic: 0 };
        }
        //console.log(
        //   heuristicMatrix[i][j].heuristic + " after COLUMN" + i + " " + j
        // );

        // DIAGONAL 1
        if (i === j) {
          emptySpots = 1;
          properties = constructProperties(piece);
          for (let k = 0; k < 4; k++) {
            if (k === i) continue;
            if (!grid[k][k].occupied) {
              emptySpots++;
            } else {
              const currentProperties = constructProperties(grid[k][k].piece);
              properties = properties.filter((item) =>
                currentProperties.includes(item)
              );
            }
          }
          if (emptySpots === 1 && properties.length > 0)
            heuristicMatrix[i][j] = { playable: true, heuristic: 10 };
          if (emptySpots === 2 && properties.length > 0)
            heuristicMatrix[i][j] = { playable: true, heuristic: -10 };
          if (
            emptySpots === 3 &&
            properties.length > 0 &&
            heuristicMatrix[i][j].heuristic >= 0 &&
            heuristicMatrix[i][j].heuristic < 8
          )
            if (heuristicMatrix[i][j].heuristic >= 5)
              heuristicMatrix[i][j] = {
                playable: true,
                heuristic: heuristicMatrix[i][j].heuristic + 1,
              };
            else heuristicMatrix[i][j] = { playable: true, heuristic: 5 };
          if (
            (properties.length === 0 || emptySpots === 4) &&
            heuristicMatrix[i][j] === null
          )
            heuristicMatrix[i][j] = { playable: true, heuristic: 0 };
          //console.log(
          //   heuristicMatrix[i][j].heuristic + " after DIAGONAL 1" + i + " " + j
          // );
        }
        // DIAGONAL 2
        if (i === 3 - j) {
          emptySpots = 1;
          properties = constructProperties(piece);
          for (let k = 0; k < 4; k++) {
            if (k === i) continue;
            if (!grid[k][3 - k].occupied) {
              emptySpots++;
            } else {
              const currentProperties = constructProperties(
                grid[k][3 - k].piece
              );
              properties = properties.filter((item) =>
                currentProperties.includes(item)
              );
            }
          }
          if (emptySpots === 1 && properties.length > 0)
            heuristicMatrix[i][j] = { playable: true, heuristic: 10 };
          if (emptySpots === 2 && properties.length > 0)
            heuristicMatrix[i][j] = { playable: true, heuristic: -10 };
          if (
            emptySpots === 3 &&
            properties.length > 0 &&
            heuristicMatrix[i][j].heuristic >= 0 &&
            heuristicMatrix[i][j].heuristic < 8
          )
            if (heuristicMatrix[i][j].heuristic >= 5)
              heuristicMatrix[i][j] = {
                playable: true,
                heuristic: heuristicMatrix[i][j].heuristic + 1,
              };
            else heuristicMatrix[i][j] = { playable: true, heuristic: 5 };
          if (
            (properties.length === 0 || emptySpots === 4) &&
            heuristicMatrix[i][j] === null
          )
            heuristicMatrix[i][j] = { playable: true, heuristic: 0 };
          //console.log(
          //   heuristicMatrix[i][j].heuristic + " after DIAGONAL 2" + i + " " + j
          // );
        }
      }
    }
  }
  //console.log(heuristicMatrix);
  let max = null;
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++) {
      if (heuristicMatrix[i][j].playable)
        if (max === null)
          max = { line: i, col: j, heur: heuristicMatrix[i][j] };
        else if (max.heur.heuristic < heuristicMatrix[i][j].heuristic)
          max = { line: i, col: j, heur: heuristicMatrix[i][j] };
    }
  return max;
};


export const colPlayHeuristic = (col, piece, grid) => {
  let emptySpots = 0;
  let properties = constructProperties(piece);
  for (let i = 0; i < 4; i++) {
    if (!grid[i][col].occupied) {
      emptySpots++;
    } else {
      const currentProperties = constructProperties(grid[i][col].piece);
      properties = properties.filter((item) =>
        currentProperties.includes(item)
      );
    }
  }
  if (emptySpots === 0) return { playable: false, heuristic: 0 };
  if (emptySpots === 1 && properties.length > 0)
    return { playable: true, heuristic: 10 };
  if (emptySpots === 2 && properties.length > 0)
    return { playable: true, heuristic: -10 };
  if (emptySpots === 3 && properties.length > 0)
    return { playable: true, heuristic: 5 };
  return { playable: true, heuristic: 0 };
};

export const diagPlayHeuristic = (diag, piece, grid) => {
  let emptySpots = 0;
  let properties = constructProperties(piece);
  if (diag === 0) {
    for (let i = 0; i < 4; i++) {
      if (!grid[i][i].occupied) {
        emptySpots++;
      } else {
        const currentProperties = constructProperties(grid[i][i].piece);
        properties = properties.filter((item) =>
          currentProperties.includes(item)
        );
      }
    }
  } else {
    for (let i = 0; i < 4; i++) {
      if (!grid[i][3 - i].occupied) {
        emptySpots++;
      } else {
        const currentProperties = constructProperties(grid[i][3 - i].piece);
        properties = properties.filter((item) =>
          currentProperties.includes(item)
        );
      }
    }
  }
  if (emptySpots === 0) return { playable: false, heuristic: 0 };
  if (emptySpots === 1 && properties.length > 0)
    return { playable: true, heuristic: 10 };
  if (emptySpots === 2 && properties.length > 0)
    return { playable: true, heuristic: -10 };
  if (emptySpots === 3 && properties.length > 0)
    return { playable: true, heuristic: 5 };
  return { playable: true, heuristic: 0 };
};
