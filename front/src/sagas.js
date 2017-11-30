import {fork, all} from "redux-saga/effects";

import {watchFilmsActions} from "./modules/films/index";
import {watchFilmActions} from "./modules/film/index";

const sagas = [
    watchFilmsActions,
    watchFilmActions
];

export default function* globalSagas () {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}