import { performCounterReset, reset } from "./slice";
import {put, takeLatest } from
 'redux-saga/effects';

function* counterHandler () {
    try{
        yield put(reset());
    } catch(e) {
        console.log(e);
    }
}

export function* watchResetCounter() {
    yield takeLatest(
        performCounterReset.type,
    counterHandler
    )
}