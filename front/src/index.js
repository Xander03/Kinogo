import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";

import {store, history} from "./store";
import {routes} from "./routes";

import {Menu} from "./container";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Menu />
                <div>
                    {routes}
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
    ,document.getElementById('root')
);