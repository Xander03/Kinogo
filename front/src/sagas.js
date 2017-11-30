import {fork, all} from "redux-saga/effects";

import {watchFilmsActions} from "./modules/films/index";
import {watchFilmActions} from "./modules/film/index";
import {watchCommentActions} from "./modules/comment";
import {watchUserActions} from "./modules/user"

const sagas = [
    watchFilmsActions,
    watchFilmActions,
    watchCommentActions,
    watchUserActions
];

export default function* globalSagas () {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}