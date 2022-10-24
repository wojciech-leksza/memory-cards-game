import { put, takeEvery, select, delay } from 'redux-saga/effects';
import { addMove, check, selectCheckedCards, setMatched, setStatus, uncheckAll } from './slice';

function* checkHandler() {
    const checkedCards = yield select(selectCheckedCards);

    if (checkedCards.length === 2) {
        if (checkedCards[0].number === checkedCards[1].number) {
            yield put(setMatched(checkedCards[0].number));
        } else {
            yield put(setStatus("waiting"));
            yield delay(1500);
            yield put(setStatus("play"))
        };

        yield put(uncheckAll());
        yield put(addMove());
    };
};

export function* memoryGameSaga() {
    yield takeEvery(check.type, checkHandler);
};