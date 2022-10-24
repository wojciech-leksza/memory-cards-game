import { createSlice } from "@reduxjs/toolkit";

const memoryGameSlice = createSlice({
    name: "homePage",
    initialState: {
        isGameOn: true,
        moves: 0,
        time: 0,
        level: [4, 3],
        cards: [
            {
                id: 1,
                matched: false,
            },
            {
                id: 2,
                matched: false,
            },
            {
                id: 3,
                matched: false,
            },
            {
                id: 4,
                matched: false,
            },
            {
                id: 5,
                matched: false,
            },
            {
                id: 6,
                matched: false,
            },
        ],
    },
    reducers: {

    },
});

export const {

} = memoryGameSlice.actions;

const selectMemoryGameState = state => state.memoryGame;
export const selectIsGameOn = state => selectMemoryGameState(state).isGameOn;
export const selectMoves = state => selectMemoryGameState(state).moves;

export default memoryGameSlice.reducer;