import React from "react";
import {Switch, Route} from "react-router-dom";

import {Films, Film, User, App} from "./container";

export const routes = (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/films" component={Films}/>
        <Route path="/films/:id" component={Film}/>
        <Route path="/login" component={User}/>
    </Switch>
);