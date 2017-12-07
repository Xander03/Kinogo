import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class MenuContainer extends Component {
    render() {
        return(
            <div>
                {/*<Link to={"/"}><label>Главная</label></Link>*/}
                <Link to={"/films"}><button>Фильмы</button></Link>
                <Link to={"/login"}><button>Войти</button></Link>
            </div>
        )
    }
}

export const Menu = connect(
    (state) => ({})
)(MenuContainer);