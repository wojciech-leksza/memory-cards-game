import { put, takeEvery, select, delay, call } from 'redux-saga/effects';
import generateCards from './cardsGenerator';
import {
    addMove,
    check,
    selectIsComplete,
    selectCheckedCards,
    setMatched,
    setStatus,
    uncheckAll,
    setLevel,
    selectLevel,
    setCards,
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

function* setLevelHandler() {
    const level = yield select(selectLevel);
    const cards = yield call(generateCards, level);
    yield put(setStatus("init"));
    yield put(setCards(cards));
};

export function* memoryGameSaga() {
    yield takeEvery(check.type, checkHandler);
    yield takeEvery(setLevel.type, setLevelHandler);
};