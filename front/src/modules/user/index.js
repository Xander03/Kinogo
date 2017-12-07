import {fromJS} from "immutable";
import {takeLatest, takeEvery} from "redux-saga/effects";
import {getElement, sendElement} from "../../api/index";

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILED = "LOG_IN_FAILED";

const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILED = "SIGN_UP_FAILED";

const initialState = fromJS({
    user: null,
    loading: false,
    error: null
});

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOG_IN_REQUEST:
            return state
                .set("user", null)
                .set("loading", true)
                .set("error", null);

        case LOG_IN_SUCCESS:
            return state
                .set("user", action.payload)
                .set("loading", false)
                .set("error", null);

        case LOG_IN_FAILED:
            return state
                .set("user", null)
                .set("loading", false)
                .set("error", action.payload);

        case SIGN_UP_REQUEST:
            return state
                .set("user", action.payload)
                .set("loading", true)
                .set("error", null);

        case SIGN_UP_SUCCESS:
            return state
                .set("loading", false)
                .set("error", null);

        case SIGN_UP_FAILED:
            return state
                .set("loading", false)
                .set("error", action.payload);

        default:
            return state;
    }

}

export const logInRequest = (data) => ({
    type: LOG_IN_REQUEST,
    payload: data
});

export const logInSuccess = (data) => ({
    type: LOG_IN_SUCCESS,
    payload: data
});

export const logInFailed = (error) => ({
    type: LOG_IN_FAILED,
    payload: error
});

export const signUpRequest = (data) => ({
    type: SIGN_UP_REQUEST,
    payload: data
});

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
});

export const signUpFailed = (error) => ({
    type: SIGN_UP_FAILED,
    payload: error
});

function* getUser(action) {
    yield getElement("users", action.payload, logInSuccess, logInFailed);
}

function* sendUser(action) {
    yield sendElement("users", action.payload, signUpSuccess, signUpFailed);
}

export function* watchUserActions() {
    yield takeLatest(LOG_IN_REQUEST, getUser);
    yield takeEvery(SIGN_UP_REQUEST, sendUser);
}

export const selectUserContainer = (state) => state.containers.app.user.info;
export const selectUserData = (state) => selectUserContainer(state).get("user");