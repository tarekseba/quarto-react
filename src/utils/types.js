import { constructProperties } from "./solvers";

let val = -Infinity;

export const SHAPE = {
  CIRCLE: "CIRCLE",
  SQUARE: "SQUARE",
};

export const SIZE = {
  BIG: "BIG",
  SMALL: "SMALL",
};

export const COLOR = {
  LIGHT: "yellow",
  DARK: "black",
};

export const DIFFICULTY = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD",
};

class GamePiece {
  hollow;
  size;
  color;
  shape;

  setHollow(bool) {
    this.hollow = bool;
    return this;
  }
  setSize(size) {
    this.size = size;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  setShape(shape) {
    this.shape = shape;
    return this;
  }
}

export class TreeNode {
  // constructor(
  //   piece,
  //   currentAvailablePieces,
  //   currentAvailablePiecesCount,
  //   grid,
  //   line,
  //   col
  // ) {
  //   this.piece = piece;
  //   this.line = line;
  //   this.col = col;
  //   this.currentAvailablePieces = currentAvailablePieces;
  //   this.currentAvailablePiecesCount = currentAvailablePiecesCount;
  //   this.currentGrid = JSON.stringify(JSON.parse(grid));
  //   this.currentGrid[line][col] = { occupied: true, piece: this.piece };
  // }

  isRoot;
  isLeaf;
  isGameOver;
  piece;
  line;
  col;
  currentGrid;
  currentAvailablePieces;
  currentAvailablePiecesCount;
  parent;
  children;
  chosenPiece;
  value;
  player;

  constructor(player) {
    this.value = -Infinity;
    this.children = [];
    this.player = player;
    this.isRoot = false;
    this.isLeaf = false;
    this.isGameOver = false;
    this.parent = null;
  }

  setRoot = () => {
    this.isRoot = true;
    return this;
  };

  setParent = (parent) => {
    this.parent = parent;
    return this;
  };

  // ORDER = 1
  setPiece = (piece) => {
    this.piece = piece;
    return this;
  };

  // ORDER = 2
  setChosenPiece = (chosenPiece) => {
    this.chosenPiece = chosenPiece;
    return this;
  };

  // ORDER = 2
  setPosition = (line, col) => {
    this.line = line;
    this.col = col;
    return this;
  };

  // ORDER = 3
  setCurrentAvailablePieces = (
    currentAvailablePieces,
    currentAvailablePiecesCount
  ) => {
    this.currentAvailablePieces = JSON.parse(
      JSON.stringify(currentAvailablePieces)
    );
    this.currentAvailablePiecesCount = currentAvailablePiecesCount;
    return this;
  };

  // ORDER = 4
  setGrid = (grid) => {
    this.currentGrid = this.currentGrid = JSON.parse(JSON.stringify(grid));
    return this;
  };

  // ORDER = 6
  setGameOver = () => {
    let properties = constructProperties(this.piece);
    for (let i = 0; i < 4; i++) {
      if (i === this.col) continue;
      if (this.currentGrid[this.line][i].occupied) {
        let currentProperties = constructProperties(
          this.currentGrid[this.line][i].piece
        );
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      this.isGameOver = true;
      return this;
    } else {
    }

    properties = constructProperties(this.piece);
    for (let i = 0; i < 4; i++) {
      if (i === this.line) continue;
      if (this.currentGrid[i][this.col].occupied) {
        let currentProperties = constructProperties(
          this.currentGrid[i][this.col].piece
        );
        properties = properties.filter((property) =>
          currentProperties.includes(property)
        );
      } else {
        properties = [];
        break;
      }
    }
    if (properties.length > 0) {
      this.isGameOver = true;
      return this;
    } else {
    }

    if (this.line === this.col) {
      properties = constructProperties(this.piece);
      for (let i = 0; i < 4; i++) {
        if (i === this.line) continue;
        if (this.currentGrid[i][i].occupied) {
          let currentProperties = constructProperties(
            this.currentGrid[i][i].piece
          );
          properties = properties.filter((property) =>
            currentProperties.includes(property)
          );
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        this.isGameOver = true;
        return this;
      } else {
      }
    }

    if (this.line === 3 - this.col) {
      properties = constructProperties(this.piece);
      for (let i = 0; i < 4; i++) {
        if (i === this.line) continue;
        if (this.currentGrid[i][3 - i].occupied) {
          let currentProperties = constructProperties(
            this.currentGrid[i][3 - i].piece
          );
          properties = properties.filter((property) =>
            currentProperties.includes(property)
          );
        } else {
          properties = [];
          break;
        }
      }
      if (properties.length > 0) {
        this.isGameOver = true;
        return this;
      } else {
      }
    }

    this.isGameOver = false;
    return this;
  };

  chosenPieceGameOverChecker = () => {
    if (!this.isGameOver) {
      for (let k = 0; k < 4; k++)
        for (let l = 0; l < 4; l++) {
          if (!this.currentGrid[k][l].occupied) {
            let properties = constructProperties(this.chosenPiece);
            for (let i = 0; i < 4; i++) {
              if (i === l) continue;
              if (this.currentGrid[k][i].occupied) {
                let currentProperties = constructProperties(
                  this.currentGrid[k][i].piece
                );
                properties = properties.filter((property) =>
                  currentProperties.includes(property)
                );
              } else {
                properties = [];
                break;
              }
            }
            if (properties.length > 0) {
              this.value = this.player === -1 ? 10 : -10;
              this.isLeaf = true;
              return true;
            }

            properties = constructProperties(this.chosenPiece);
            for (let i = 0; i < 4; i++) {
              if (i === k) continue;
              if (this.currentGrid[i][l].occupied) {
                let currentProperties = constructProperties(
                  this.currentGrid[i][l].piece
                );
                properties = properties.filter((property) =>
                  currentProperties.includes(property)
                );
              } else {
                properties = [];
                break;
              }
            }
            if (properties.length > 0) {
              this.value = this.player === -1 ? 10 : -10;
              this.isLeaf = true;
              return true;
            }

            if (k === l) {
              properties = constructProperties(this.chosenPiece);
              for (let i = 0; i < 4; i++) {
                if (i === k) continue;
                if (this.currentGrid[i][i].occupied) {
                  let currentProperties = constructProperties(
                    this.currentGrid[i][i].piece
                  );
                  properties = properties.filter((property) =>
                    currentProperties.includes(property)
                  );
                } else {
                  properties = [];
                  break;
                }
              }
              if (properties.length > 0) {
                this.value = this.player === -1 ? 10 : -10;
                this.isLeaf = true;
                return true;
              }
            }

            if (k === 3 - l) {
              properties = constructProperties(this.chosenPiece);
              for (let i = 0; i < 4; i++) {
                if (i === this.line) continue;
                if (this.currentGrid[i][3 - i].occupied) {
                  let currentProperties = constructProperties(
                    this.currentGrid[i][3 - i].piece
                  );
                  properties = properties.filter((property) =>
                    currentProperties.includes(property)
                  );
                } else {
                  properties = [];
                  break;
                }
              }
              if (properties.length > 0) {
                this.value = this.player === -1 ? 10 : -10;
                this.isLeaf = true;
                return true;
              }
            }
          }
        }
    }
  };

  // ORDER = 5
  playMove = () => {
    this.currentGrid[this.line][this.col] = {
      occupied: true,
      piece: this.piece,
    };
    return this;
  };

  // ORDER = 7
  buildDescendants = (depth) => {
    if (
      depth >= 1 &&
      !this.isGameOver &&
      !(this.currentAvailablePiecesCount === 0)
    ) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.currentAvailablePieces[i][j].available) {
            const availablePieces = JSON.parse(
              JSON.stringify(this.currentAvailablePieces)
            );
            availablePieces[i][j].available = false;
            //console.log("------------ INSIDE DEPTH ----------------");
            for (let line = 0; line < 4; line++)
              for (let col = 0; col < 4; col++) {
                if (!this.currentGrid[line][col].occupied) {
                  const node = new TreeNode(this.player * -1);
                  node
                    .setParent(this)
                    .setPiece(this.chosenPiece)
                    .setChosenPiece(availablePieces[i][j].piece)
                    .setPosition(line, col)
                    .setGrid(this.currentGrid)
                    .playMove()
                    .setGameOver()
                    .setCurrentAvailablePieces(
                      availablePieces,
                      this.currentAvailablePiecesCount - 1
                    );
                  // if (!node.chosenPieceGameOverChecker()) {
                  node.buildDescendants(depth - 1);
                  // } else {
                  // node.calculateHeuristic();
                  // }
                  this.children.push(node);
                }
              }
          }
        }
      }
    } else {
      this.isLeaf = true;
      this.calculateHeuristic();
      // this.chosenPieceGameOverChecker();
    }
  };

  calculateHeuristic = () => {
    // LINE TEST
    let emptySpots = 1;
    let properties = constructProperties(this.piece);
    for (let k = 0; k < 4; k++) {
      if (k === this.col) continue;
      if (!this.currentGrid[this.line][k].occupied) {
        emptySpots++;
      } else {
        const currentProperties = constructProperties(
          this.currentGrid[this.line][k].piece
        );
        properties = properties.filter((item) =>
          currentProperties.includes(item)
        );
      }
    }
    if (emptySpots === 1 && properties.length > 0) this.value = 20;
    if (emptySpots === 2 && properties.length > 0) this.value = -10;
    if (emptySpots === 3 && properties.length > 0) this.value = 5;
    if (properties.length === 0 || emptySpots === 4) this.value = 0;

    // COLUMN TEST
    emptySpots = 1;
    properties = constructProperties(this.piece);
    for (let k = 0; k < 4; k++) {
      if (k === this.line) continue;
      if (!this.currentGrid[k][this.col].occupied) {
        emptySpots++;
      } else {
        const currentProperties = constructProperties(
          this.currentGrid[k][this.col].piece
        );
        properties = properties.filter((item) =>
          currentProperties.includes(item)
        );
      }
    }
    if (emptySpots === 1 && properties.length > 0) this.value = 20;
    if (emptySpots === 2 && properties.length > 0 && this.value !== 20)
      this.value = -10;
    if (
      emptySpots === 3 &&
      properties.length > 0 &&
      this.value >= 0 &&
      this.value < 8
    ) {
      if (this.value >= 5) this.value = this.value + 1;
      else this.value = 5;
    }
    if ((properties.length === 0 || emptySpots === 4) && this.value === null) {
      this.value = 0;
    }

    // DIAGONAL 1
    if (this.line === this.col) {
      emptySpots = 1;
      properties = constructProperties(this.piece);
      for (let k = 0; k < 4; k++) {
        if (k === this.line) continue;
        if (!this.currentGrid[k][k].occupied) {
          emptySpots++;
        } else {
          const currentProperties = constructProperties(
            this.currentGrid[k][k].piece
          );
          properties = properties.filter((item) =>
            currentProperties.includes(item)
          );
        }
      }
      if (emptySpots === 1 && properties.length > 0) this.value = 20;
      if (emptySpots === 2 && properties.length > 0 && this.value !== 20)
        this.value = -10;
      if (
        emptySpots === 3 &&
        properties.length > 0 &&
        this.value >= 0 &&
        this.value < 8
      )
        if (this.value >= 5) this.value = this.value + 1;
        else this.value = 5;
      if ((properties.length === 0 || emptySpots === 4) && this.value === null)
        this.value = 0;
    }
    // DIAGONAL 2
    if (this.line === 3 - this.col) {
      emptySpots = 1;
      properties = constructProperties(this.piece);
      for (let k = 0; k < 4; k++) {
        if (k === this.line) continue;
        if (!this.currentGrid[k][3 - k].occupied) {
          emptySpots++;
        } else {
          const currentProperties = constructProperties(
            this.currentGrid[k][3 - k].piece
          );
          properties = properties.filter((item) =>
            currentProperties.includes(item)
          );
        }
      }
      if (emptySpots === 1 && properties.length > 0) this.value = 20;
      if (emptySpots === 2 && properties.length > 0 && this.value !== 20)
        this.value = -10;
      if (
        emptySpots === 3 &&
        properties.length > 0 &&
        this.value >= 0 &&
        this.value < 8
      )
        if (this.value >= 5) this.value = this.value + 1;
        else this.value = 5;
      if ((properties.length === 0 || emptySpots === 4) && this.value === null)
        this.value = 0;
    }
    this.value = this.player === -1 ? this.value * -1 : this.value;
    return this;
  };

  negAlphaBeta = (ALPHA, BETA) => {
    let val = {
      value: -Infinity,
      piece: null,
      chosenPiece: null,
      line: null,
      col: null,
      lol: null,
    };
    if (this.isLeaf) {
      return {
        value: this.value,
        piece: this.piece,
        chosenPiece: this.chosenPiece,
        line: this.line,
        col: this.col,
        lol: this,
      };
    } else {
      for (let i = 0; i < this.children.length && ALPHA < BETA; i++) {
        let evaluation = this.children[i].negAlphaBeta(-BETA, -ALPHA);
        evaluation.value = -evaluation.value;
        if (val.value < evaluation.value) {
          val = { ...evaluation };
          this.value = val.value;
          if (!this.isRoot) {
            val.chosenPiece = this.chosenPiece;
            val.piece = this.piece;
          }
        }
        ALPHA = Math.max(ALPHA, val.value);
      }
    }
    return val;
  };

  toString = () => {
    return (
      "PIECE : " +
      this.piece.hollow +
      " " +
      this.piece.size +
      " " +
      this.piece.color +
      " " +
      this.piece.shape +
      " " +
      this.line +
      " " +
      this.col +
      "\n CHOSEN PIECE : " +
      this.chosenPiece.hollow +
      " " +
      this.chosenPiece.size +
      " " +
      this.chosenPiece.color +
      " " +
      this.chosenPiece.shape
    );
  };
}
