import { put, takeEvery, select, delay } from 'redux-saga/effects';
import {
    addMove,
    check,
    selectIsComplete,
    selectCheckedCards,
    setMatched,
    setStatus,
    uncheckAll,
    selectDelay,
} from './slice';

function* checkHandler() {
    const checkedCards = yield select(selectCheckedCards);
    const delayTime = yield select(selectDelay);

    if (checkedCards.length === 2) {
        if (checkedCards[0].number === checkedCards[1].number) {
            yield put(setMatched(checkedCards[0].number));
        } else {
            yield put(setStatus("waiting"));
            yield delay(delayTime);
            yield put(setStatus("play"))
        };

        yield put(uncheckAll());
        yield put(addMove());

        const isComplete = yield select(selectIsComplete);

        if (isComplete) {
            yield put(setStatus("finish"));
        };
    };
};

export function* memoryGameSaga() {
    yield takeEvery(check.type, checkHandler);
};