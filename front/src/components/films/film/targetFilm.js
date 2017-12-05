import React, {Component} from "react";
import {FilmItemComponent} from "./listItem";
import {CommentsComponent} from "../../commnents/index";
import {Comment} from "../../../container/comment";

class TargetFilm extends Component {

    static createTargetFilm(element) {
        return(
            <div>
                <FilmItemComponent film={element}/>
                {/*<CommentsComponent comments={element.comments}/>*/}
                <Comment film={element}/>
            </div>
        )
    };

    showTargetFilm(element) {
        let code;
        if (element === null || element === undefined)
            code = <p>Нечего показывать...</p>
        else
            code = TargetFilm.createTargetFilm(element);

        return code;
    }

    render() {
        return(
            this.showTargetFilm(this.props.element)
        )
    }
}

export const TargetFilmComponent = TargetFilm;