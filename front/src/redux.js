import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as filmsReducer} from "./modules/films";
import {reducer as filmReducer} from "./modules/film";
import {reducer as commentReducer} from "./modules/comment";
import {reducer as userReducer} from "./modules/user"
import {reducer as appReducer} from "./modules/app";

const containersReducer = {
    containers: combineReducers({
        films: combineReducers({
            list: filmsReducer,
            targetFilm: filmReducer,
        }),
        app: combineReducers({
            workSpace: appReducer,
            user: combineReducers({
                info: userReducer,
                comment: commentReducer,
            })
        })
    })
};

const globalReducer =
    combineReducers({
        ...containersReducer,
        route: routerReducer
    })
;

export default globalReducer;