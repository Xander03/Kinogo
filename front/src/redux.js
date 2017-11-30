import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import {reducer as filmsReducer} from "./modules/films";
import {reducer as filmReducer} from "./modules/film";

const containersReducer = {
    containers: combineReducers({
        films: combineReducers({
            list: filmsReducer,
            targetFilm: filmReducer
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