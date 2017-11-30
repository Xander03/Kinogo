import React, {Component} from "react";
import {CommentItemComponent} from "./comment/listItem";

let key;

class Comments extends Component {
    static createListItem(element) {
        return(
            <li key={++key}>
                <CommentItemComponent comment={element}/>
            </li>
        );
    }

    showComments() {
        let code = null;
        key = 0;
        if (this.props.comments.size !== 0)
            code = <ul>{this.props.comments.map(Comments.createListItem)}</ul>

        return code;
    }

    render() {
        return(
            this.showComments()
        );
    }
}

export const CommentsComponent = Comments;