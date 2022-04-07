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
