import {fromJS} from "immutable";

import {getElement} from "../../api/index";

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILED = "LOG_IN_FAILED";

const initialState = fromJS({
    user: {
        login: "admin",
    },
    guest: true,
    loading: false,
    error: null
});

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOG_IN_REQUEST:
            return state
                .set("loading", true);

        case LOG_IN_SUCCESS:
            return state
                .set("user", action.payload)
                .set("guest", false)
                .set("loading", false);

        case LOG_IN_FAILED:
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

function* getUser(action) {
    yield getElement("users", action.payload, logInSuccess, logInFailed);
}

export function* watchUserActions() {
    yield getUser(LOG_IN_REQUEST, getUser);
}

export const selectUserContainer = (state) => state.containers.user;
export const selectUserData = (state) => selectUserContainer(state).get("user");