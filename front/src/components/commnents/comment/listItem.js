import React, {Component} from "react";

class CommentItem extends Component {
    render() {
        return(
            <div>
                <h4>{this.props.comment.user.login}</h4>
                <p>{this.props.comment.text}</p>
            </div>
        )
    }
}

export const CommentItemComponent = CommentItem;