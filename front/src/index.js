import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import {store} from "./store";
import {routes} from "./routes";

ReactDOM.render(
    <Provider store={store}>
        <div>
            {routes}
        </div>
    </Provider>
    ,document.getElementById('root')
);