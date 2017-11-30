import {fromJS} from "immutable";
import {getElement} from "../../api";
import {takeLatest} from "redux-saga/effects";

const GET_FILM_REQUEST = "GET_FILM_REQUEST";
const GET_FILM_SUCCESS = "GET_FILM_SUCCESS";
const GET_FILM_FAILED = "GET_FILM_FAILED";

const initialState = fromJS({
    film: null,
    loading: false,
    error: null
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FILM_REQUEST:
            return state
                .set("loading", true)
                .set("error", null);

        case GET_FILM_SUCCESS:
            return state
                .set("film", action.payload)
                .set("loading", false)
                .set("error", null);

        case GET_FILM_FAILED:
            return state
                .set("loading", false)
                .set("error", action.payload);

        default:
            return state;

    }
};

export const sendFilmRequest = (data) => ({
    type: GET_FILM_REQUEST,
    payload: data
});

export const getFilmSuccess = (data) => ({
    type: GET_FILM_SUCCESS,
    payload: data
});

export const getFilmFailed = (error) => ({
    type: GET_FILM_FAILED,
    payload: error
});

function* getFilm(action) {
    yield getElement("films", action.payload, getFilmSuccess, getFilmFailed);
}

export function* watchFilmActions () {
    yield takeLatest(GET_FILM_REQUEST, getFilm);
}

export const selectFilmContainer = (state) => state.containers.films.targetFilm;
export const selectFilmData = (state) => selectFilmContainer(state).get("film");