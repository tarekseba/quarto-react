import { createSlice } from "@reduxjs/toolkit";
import { SHAPE, SIZE, COLOR } from "../utils/types";
import { gameOverSolver } from "../utils/solvers";

const initialState = {
  grid: [
    [
      { occupied: false, id: 1, piece: null },
      { occupied: false, id: 2, piece: null },
      { occupied: false, id: 3, piece: null },
      { occupied: false, id: 4, piece: null },
    ],
    [
      { occupied: false, id: 5, piece: null },
      { occupied: false, id: 6, piece: null },
      { occupied: false, id: 7, piece: null },
      { occupied: false, id: 8, piece: null },
    ],
    [
      { occupied: false, id: 9, piece: null },
      { occupied: false, id: 10, piece: null },
      { occupied: false, id: 11, piece: null },
      { occupied: false, id: 12, piece: null },
    ],
    [
      { occupied: false, id: 13, piece: null },
      { occupied: false, id: 14, piece: null },
      { occupied: false, id: 15, piece: null },
      { occupied: false, id: 16, piece: null },
    ],
  ],
  availablePieces: [
    [
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.BIG,
          color: COLOR.LIGHT,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.BIG,
          color: COLOR.LIGHT,
          shape: SHAPE.CIRCLE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.SMALL,
          color: COLOR.LIGHT,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.SMALL,
          color: COLOR.LIGHT,
          shape: SHAPE.CIRCLE,
        },
      },
    ],
    [
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.BIG,
          color: COLOR.DARK,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.BIG,
          color: COLOR.DARK,
          shape: SHAPE.CIRCLE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.SMALL,
          color: COLOR.DARK,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: false,
          size: SIZE.SMALL,
          color: COLOR.DARK,
          shape: SHAPE.CIRCLE,
        },
      },
    ],
    [
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.BIG,
          color: COLOR.LIGHT,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.BIG,
          color: COLOR.LIGHT,
          shape: SHAPE.CIRCLE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.SMALL,
          color: COLOR.LIGHT,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.SMALL,
          color: COLOR.LIGHT,
          shape: SHAPE.CIRCLE,
        },
      },
    ],
    [
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.BIG,
          color: COLOR.DARK,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.BIG,
          color: COLOR.DARK,
          shape: SHAPE.CIRCLE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.SMALL,
          color: COLOR.DARK,
          shape: SHAPE.SQUARE,
        },
      },
      {
        available: true,
        piece: {
          hollow: true,
          size: SIZE.SMALL,
          color: COLOR.DARK,
          shape: SHAPE.CIRCLE,
        },
      },
    ],
  ],
  placeholder: { isHolding: false, piece: null },
  chooseTurn: true,
  playTurn: true,
  gameOver: false,
  availablePiecesCount: 12,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    resetGame: (state) => {
      state.grid = initialState.grid;
      state.availablePieces = initialState.availablePieces;
      state.availablePiecesCount = 12;
      state.gameOver = false;
      state.playTurn = initialState.playTurn;
      state.placeholder = initialState.placeholder;
      state.chooseTurn = initialState.chooseTurn;
    },
    setGridPiece: (state, action) => {
      const { row, column } = action.payload;
      state.grid[row][column] = {
        occupied: true,
        id: state.grid[row][column].id,
        piece: state.placeholder.piece,
      };
      state.gameOver = gameOverSolver(state.grid, state.availablePiecesCount);
    },
    removeAvailablePiece: (state, action) => {
      state.availablePieces[action.payload.row][
        action.payload.column
      ].available = false;
    },
    setPlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
    initPlaceholder: (state) => {
      state.placeholder = { isHolding: false, piece: null };
    },
    setPlayTurn: (state, action) => {
      state.playTurn = action.payload;
    },
    setChooseTurn: (state, action) => {
      state.chooseTurn = action.payload;
    },
    decrementAvailablePiecesCount: (state) => {
      state.availablePiecesCount -= 1;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
