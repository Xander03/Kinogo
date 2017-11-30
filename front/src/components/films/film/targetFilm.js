import React, {Component} from "react";

class TargetFilm extends Component {

    static createTargetFilm(element) {
        const picture = element.pictures[0];
        return(
            <div>
                <h2>{element.name}</h2>
                <p>{element.description.data}</p>
                <img height={300} width={200} src={"../" + picture.src} title={picture.name}/>
                <p>{element.rating}</p>
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