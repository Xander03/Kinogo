import React, {Component} from "react";
import {connect} from "react-redux";

class AppContainer extends Component {
    render() {
        return(
            <div>
            </div>
        )
    }
}

export const App = connect(
    (state) => ({})
)(AppContainer);