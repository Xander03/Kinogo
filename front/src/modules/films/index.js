import {fromJS} from "immutable";
import {getElements} from "../../api";
import {takeLatest} from "redux-saga/effects";

const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
const GET_FILMS_FAILED = "GET_FILMS_FAILED";

const initialState = fromJS({
    films: [],
    loading: false,
    error: null
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FILMS_REQUEST:
            return state
                .set("loading", true)
                .set("error", null);

        case GET_FILMS_SUCCESS:
            return state
                .set("films", action.payload)
                .set("loading", false)
                .set("error", null);

        case GET_FILMS_FAILED:
            return state
                .set("loading", false)
                .set("error", action.payload);

        default:
            return state;
    }
};

export const sendFilmsRequest = () => ({
    type: GET_FILMS_REQUEST
});

export const getFilmsSuccess = (data) => ({
    type: GET_FILMS_SUCCESS,
    payload: data,
});

export const getFilmsFailed = (error) => ({
    type: GET_FILMS_FAILED,
    payload: error
});

function* getFilms() {
    yield getElements("films", getFilmsSuccess, getFilmsFailed);
}

export function* watchFilmsActions() {
    yield takeLatest(GET_FILMS_REQUEST, getFilms);
}


export const selectFilmsContainers = (state) => state.containers.films.list;
export const selectFilmsData = (state) => selectFilmsContainers(state).get("films");