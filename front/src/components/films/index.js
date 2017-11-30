import React, {Component} from "react";
import {FilmItemComponent} from "./film/listItem";
import {Link} from "react-router-dom";

const URL = "films/"
const BUTTON_CAPTION = "Смотреть онлайн";

class Films extends Component {
    static createListItem(element) {
        return(
            <li key={element.id}>
                <FilmItemComponent film={element}/>
                <Link to={URL + element.id}><button>{BUTTON_CAPTION}</button></Link>
            </li>
        );
    }

    showFilms() {
        let code;

        if (this.props.elements.size === 0)
            code = <label>Нечего показывать...</label>
        else
            code = <ul>{this.props.elements.map(Films.createListItem)}</ul>

        return code;
    }

    render() {
        return (
            this.showFilms()
        );
    }
}

export const FilmsComponent = Films;