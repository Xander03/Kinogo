import React, {Component} from "react";
import {FilmComponent} from "./film";

const BUTTON_CAPTION = "Смотреть онлайн";

class FilmListElement extends Component {
    render() {
        return(
            <li>
                <div>
                    <FilmComponent film={this.props.film} />
                    <a src={this.props.film._links.film.href}><button>{BUTTON_CAPTION}</button></a>
                </div>
            </li>
        );
    };
}

export const FilmListElementComponent = FilmListElement;