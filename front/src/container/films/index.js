import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {FilmsComponent} from "../../components/index";

import {selectFilmsData, sendFilmsRequest, getFilms} from "../../modules/films";

class FilmsContainer extends Component {

    componentWillMount() {
        this.props.actions.sendFilmsRequest();
    }

    render() {
        return(
            <div>
                <h3>Фильмы</h3>
                <div>
                    <FilmsComponent
                        elements={this.props.films}
                    />
                </div>
            </div>
        )
    }
}

export const Films = connect(
    (state) => ({
        films: selectFilmsData(state)
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            sendFilmsRequest
        }, dispatch)
    })
)(FilmsContainer);