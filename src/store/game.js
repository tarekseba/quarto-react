import { createSlice } from "@reduxjs/toolkit";
import { SHAPE, SIZE, COLOR, DIFFICULTY, TreeNode } from "../utils/types";
import {
  columnIsFull,
  diagonalIsFull,
  gameOverSolver,
  lineIsFull,
} from "../utils/solvers";
import { findPiece } from "../utils/utils";

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
  playTurn: false,
  gameOver: false,
  resetModal: false,
  difficultyModal: false,
  difficulty: DIFFICULTY.EASY,
  availablePiecesCount: 16,
  winner: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    resetGame: (state) => {
      state.grid = initialState.grid;
      state.availablePieces = initialState.availablePieces;
      state.availablePiecesCount = 16;
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
      state.gameOver = gameOverSolver(
        state.grid,
        state.availablePiecesCount,
        state.difficulty
      );
      if (state.gameOver) state.winner = "You";
      lineIsFull(row, state.grid);
      columnIsFull(column, state.grid);
      diagonalIsFull(1, state.grid);
    },
    removeAvailablePiece: (state, action) => {
      state.availablePieces[action.payload.row][
        action.payload.column
      ].available = false;
    },
    setPlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
    AIPlay: (state, action) => {
      // if (state.difficulty !== DIFFICULTY.EASY) {
      const node = new TreeNode(1);
      const depth = state.availablePiecesCount > 8 ? 2 : 3;
      node
        .setRoot()
        .setChosenPiece({ ...state.placeholder.piece })
        .setGrid(state.grid)
        .setCurrentAvailablePieces(
          state.availablePieces,
          state.availablePiecesCount
        )
        .buildDescendants(depth, state.difficulty);

      console.log(node);
      let haha = node.negAlphaBeta(-Infinity, Infinity);
      const chosenPiece = findPiece(haha.chosenPiece, state.availablePieces);
      state.grid[haha.line][haha.col] = {
        occupied: true,
        id: state.grid[haha.line][haha.col].id,
        piece: state.placeholder.piece,
      };
      state.gameOver = gameOverSolver(
        state.grid,
        state.availablePiecesCount,
        state.difficulty
      );
      if (!state.gameOver) {
        state.placeholder = {
          isHolding: true,
          piece: state.availablePieces[chosenPiece.i][chosenPiece.j].piece,
        };
        state.availablePieces[chosenPiece.i][chosenPiece.j].available = false;
        state.availablePiecesCount -= 1;
        state.playTurn = true;
      } else state.winner = "AI";

      // } else {
      //   const play = calculateHeuristic(state.placeholder.piece, state.grid);
      //   state.grid[play.line][play.col] = {
      //     occupied: true,
      //     id: state.grid[play.line][play.col].id,
      //     piece: state.placeholder.piece,
      //   };
      //   state.gameOver = gameOverSolver(state.grid, state.availablePiecesCount);
      //   if (!state.gameOver) {
      //     let piece = [];
      //     for (let i = 0; i < 4; i++)
      //       for (let j = 0; j < 4; j++)
      //         if (state.availablePieces[i][j].available) piece.push({ i, j });

      //     let move = Math.floor(Math.random() * piece.length);
      //     state.placeholder = {
      //       isHolding: true,
      //       piece: state.availablePieces[piece[move].i][piece[move].j].piece,
      //     };
      //     state.availablePieces[piece[move].i][piece[move].j].available = false;
      //     state.availablePiecesCount -= 1;
      //     state.playTurn = true;
      //   } else state.winner = "AI";
      // }
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
    setResetModal: (state) => {
      state.resetModal = !state.resetModal;
      state.difficultyModal = false;
    },
    setDifficultyModal: (state) => {
      state.difficultyModal = !state.difficultyModal;
      state.resetModal = false;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    decrementAvailablePiecesCount: (state) => {
      state.availablePiecesCount -= 1;
    },
  },
});

export const AIPlayAction = (payload) => (dispatch) => {
};

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
