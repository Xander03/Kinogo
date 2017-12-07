import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createCommentRequest} from "../../modules/comment";
import {selectUserData} from "../../modules/user";
import {selectFilmData} from "../../modules/film";

let props;
let text;

class CommentContainer extends Component {

    static onSubmit(e) {
        e.preventDefault();
        props.actions.createCommentRequest({
            id: 10,
            film: props.film._links.self.href,
            text: text.value,
            user: props.user._links.self.href
        });
    }

    render() {
        props = this.props;
        return(
            <form onSubmit={CommentContainer.onSubmit}>
                <p>Ваш комментарий</p>
                <input type="text" ref={input => {text = input}}/>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

export const Comment = connect(
    (state) => ({
        user: selectUserData(state),
        film: selectFilmData(state)
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            createCommentRequest,
        }, (dispatch))
    })
)(CommentContainer);