import { createSlice } from "@reduxjs/toolkit";
import generateCards from "./cardsGenerator";

const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState: {
        status: "init",
        moves: 0,
        level: [4, 3],
        cards: generateCards([4, 3]),
    },
    reducers: {
        setCards: (state, { payload: cards }) => {
            state.cards = cards
        },
        addMove: (state) => {
            state.moves = state.moves + 1
        },
        check: (state, { payload: id }) => {
            state.cards.find(card => card.id === id).checked = true
        },
        uncheckAll: (state) => {
            state.cards = state.cards.map(card => ({ ...card, checked: false }))
        },
        setMatched: (state, { payload: number }) => {
            state.cards.forEach(card => {
                if (card.number === number) {
                    card.matched = true
                }
            })
        },
        setStatus: (state, { payload: status }) => {
            state.status = status
        },
        setLevel: (state, { payload: level }) => {
            state.level = level
        },
    },
});

export const {
    setCards,
    addMove,
    check,
    uncheckAll,
    setMatched,
    setStatus,
    setLevel,
} = memoryGameSlice.actions;

const selectMemoryGameState = state => state.memoryGame;

export const selectIsGameOn = state => selectMemoryGameState(state).isGameOn;
export const selectMoves = state => selectMemoryGameState(state).moves;
export const selectLevel = state => selectMemoryGameState(state).level;
export const selectCards = state => selectMemoryGameState(state).cards;
export const selectStatus = state => selectMemoryGameState(state).status;

export const selectCheckedCards = state => (
    selectMemoryGameState(state).cards.filter(({ checked }) => checked === true)
);

export const selectIsComplete = state => (
    selectMemoryGameState(state).cards.every(({ matched }) => matched === true)
);


export default memoryGameSlice.reducer;