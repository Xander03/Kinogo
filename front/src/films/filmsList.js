import React, {Component} from "react";
import {FilmListElementComponent} from "./filmListElement";
import {axios} from "axios";

class FilmsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        const URL = "http://localhost:8080/films";
        var axios = require('axios');

        axios.get(URL)
            .then(data => this.setState({films: data.data._embedded.films}));
    }

    render() {
        return(
            <ul>
                {this.state.films.map(film =>
                    <FilmListElementComponent key={film.id} film={film}/>
                )}
            </ul>
        );
    };
}

export const FilmsListComponent = FilmsList;