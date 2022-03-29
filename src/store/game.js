import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
];

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPiece: (state, action) => {
      state[action.payload.index] = {
        occupied: true,
        piece: action.payload.piece,
      };
    },
  },
});
