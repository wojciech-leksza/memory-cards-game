import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import memoryGameReducer from "./slice"
import { memoryGameSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        memoryGame: memoryGameReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(memoryGameSaga);

export default store;