import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createCommentRequest, selectCommentData} from "../../modules/comment/index";

let input;
let props;

class CommentContainer extends Component {

    static onSubmit(e) {
        e.preventDefault();
        props.actions.createCommentRequest({
            id: props.film.id,
            data:{
                user: props.user,
                comment: input
            }
        });
    }

    render() {
        props = this.props;
        return(
            <form onSubmit={CommentContainer.onSubmit}>
                <p>Ваш комментарий</p>
                <input type="text" onChange={value => input = value}/>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

export const Comment = connect(
    (state) => ({
        comment: selectCommentData(state)
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            createCommentRequest
        }, (dispatch))
    })
)(CommentContainer);