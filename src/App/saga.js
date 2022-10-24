import { put, takeEvery, select } from 'redux-saga/effects';
import { addMove, check, selectCheckedCards, setMatched, uncheckAll } from './slice';

function* checkHandler() {
    const checkedCards = yield select(selectCheckedCards);

    if (checkedCards.length === 2) {
        if (checkedCards[0].number === checkedCards[1].number) {
            yield put(setMatched(checkedCards[0].number));
        };

        yield put(uncheckAll());
        yield put(addMove());
    };
};

export function* memoryGameSaga() {
    yield takeEvery(check.type, checkHandler);
};