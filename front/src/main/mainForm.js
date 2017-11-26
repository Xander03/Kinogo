import React, { Component } from "react";
import {FilmsListComponent} from "../films/filmsList";

class MainForm extends Component {
    render() {
        return(
            <form>
                {/*<NavBar />*/}
                <FilmsListComponent />
                {/*<JenreMenu />*/}
            </form>
        );
    };
}

export const MainFormComponent = MainForm;