import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {Films, Film} from "./container";

export const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/films" component={Films}/>
            <Route path="/films/:id" component={Film}/>
        </Switch>
    </BrowserRouter>
);