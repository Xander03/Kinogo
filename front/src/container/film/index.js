import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TargetFilmComponent} from "../../components";

import {selectFilmData, sendFilmRequest} from "../../modules/film/index";

class FilmContainer extends Component {

    componentWillMount() {
        this.props.actions.sendFilmRequest(this.props.match.params.id);
    }

    render() {
        return(
            <TargetFilmComponent
                element={this.props.film}
            />
        )
    }
}

export const Film = connect(
    (state) => ({
        film: selectFilmData(state)
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            sendFilmRequest
        }, dispatch)
    })
)(FilmContainer);