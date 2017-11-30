import React, {Component} from "react";

class NewComment extends Component {
    render() {
        return(
            <form onSubmit={this.props.onSubmit}>
                <p>Ваш комментарий</p>
                <input type="text"/>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

export const NewCommentComponent = NewComment;