import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import {selectUserData, logInRequest, signUpRequest} from "../../modules/user/index";
import {Redirect} from "react-router-dom";

let login;
let password;
let props;

class UserContainer extends Component {

    onLogIn() {
        props.actions.logInRequest({
            login: login,
            password: password
        });
    }

    onSignUp() {
        props.actions.signUpRequest({
            login: login,
            password: password
        });
    }

    logIn() {
        let form;
        props = this.props;

        if (this.props.user !== null)
            form = <Redirect to={"/films"}/>
        else
            form =
                <div>
                    <p>Login</p>
                    <input type="text" onChange={e => login = "search/getUserByLogin?login=" + e.target.value}/>
                    <input type="text" onChange={e => password = "search/getUserByLogin?login=" + e.target.value}/>
                    <input type="button" value={"LogIn"} onClick={this.onLogIn}/>
                    <input type="button" value={"SignUp"} onClick={this.onSignUp}/>
                </div>

        return form;
    }

    render() {
        return(
            this.logIn()
        )
    }

}

export const User = connect(
    (state) => ({
        user: selectUserData(state)
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            logInRequest,
            signUpRequest
        }, dispatch)
    })
)(UserContainer);