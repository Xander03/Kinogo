import {call, put} from "redux-saga/effects";
import axios from "axios";

const serverURL = "http://localhost:8080";

export function* getElements(url, successHandler, failHandler) {
    try {
        const response = yield call(axios.get, serverURL+"/"+url);
        yield put(successHandler(response.data._embedded.films));
    } catch (e) {
        yield put(failHandler(e.message));
    }
}

export function* getElement(url, id, successHandler, failHandler) {
    try {
        const response = yield call(axios.get, serverURL+"/"+url+"/"+id );
        yield put(successHandler(response.data));
    } catch (e) {
        yield put(failHandler(e.message));
    }
}