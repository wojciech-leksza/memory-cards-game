import { takeLatest, call, put, delay, takeEvery } from 'redux-saga/effects';

function* moveHandler() {

};

export function* memoryGameSaga() {
    yield takeEvery(move.type, moveHandler);
};