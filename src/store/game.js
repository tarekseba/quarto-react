import { createSlice } from "@reduxjs/toolkit";
import { SHAPE, SIZE, COLOR } from "../utils/types";

const initialState = {
  grid: [
    [
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
    ],
    [
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
    ],
    [
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
    ],
    [
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
      { occupied: false, piece: null },
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
  turn: true,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    // setPiece: (state, action) => {
    //   state[action.payload.index] = {
    //     occupied: true,
    //     piece: action.payload.piece,
    //   };
    // },
    setPlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
