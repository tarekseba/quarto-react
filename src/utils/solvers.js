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
          console.log(properties);
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        console.log("WINNER!!!!!!!!!!!!");
        return true;
      } else {
        console.log("Game is still going!!");
      }
    }
  }
  console.log("columns");
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
          console.log(properties);
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        console.log("WINNER!!!!!!!!!!!!");
        return true;
      } else {
        console.log("Game is still going!!");
      }
    }
  }
  console.log("diagonal");
  if (grid[0][0].occupied) {
    const piece = grid[0][0].piece;
    let properties = constructProperties(piece);
    for (let i = 1; i < 4; i++) {
      if (grid[i][i].occupied) {
        let currentProperties = constructProperties(grid[i][i].piece);
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
        console.log(properties);
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      console.log("WINNER!!!!!!!!!!!!");
      return true;
    } else {
      console.log("Game is still going!!");
    }
  }

  if (grid[0][3].occupied) {
    console.log("diagonal 2");
    const piece = grid[0][3].piece;
    let properties = constructProperties(piece);
    for (let i = 2; i >= 0; i--) {
      if (grid[3 - i][i].occupied) {
        let currentProperties = constructProperties(grid[3 - i][i].piece);
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
        console.log(properties);
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      console.log("WINNER!!!!!!!!!!!!");
      return true;
    } else {
      console.log("Game is still going!!");
    }
  }
  return false;
};
