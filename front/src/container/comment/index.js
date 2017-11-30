import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {NewCommentComponent} from "../../components/commnents/comment/newComment";
import {createCommentRequest, selectCommentData} from "../../modules/comment/index";

class CommentContainer extends Component {

    onSubmit() {
        console.log(this);
        createCommentRequest({
            id: this.props.match.params.id,
            data:{
                user: this.props.user,
                comment: this.props.children.input.value
            }
        })
    }

    render() {
        return(
            <NewCommentComponent onSubmit={this.onSubmit}/>
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