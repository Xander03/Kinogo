import React, {Component} from "react";

class FilmItem extends Component {

    render() {
        const film = this.props.film;
        const picture = film.pictures[0];
        return(
            <div>
                <h2>{film.name}</h2>
                <p>{film.description.data}</p>
                <img height={300} width={200} src={"../"+picture.src} title={picture.name}/>
                <p>{film.rating}</p>
            </div>
        );
    };
}

export const FilmItemComponent = FilmItem;