import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import Utils from './../../../utils/utils';

export default class LoginForm extends Component {


    state = {
        username: '',
        password: '',
        usernameEmpty: false,
        passwordEmpty: false,
        usernameSmall: true,
        passwordSmall: true,
        buttonHide: true
    }

    login(e) {
        e.preventDefault();
        this.validate();

    }

    formValidation(e, formInput) {
        switch (formInput) {
            case 'username':
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
        }
    }
    validate() {
        if (Utils.isEmptyOrNull(this.state.username)) {
            this.setState({
                usernameEmpty: true
            });
        } else {
            this.setState({
                usernameEmpty: false
            });
        }
        if (Utils.isEmptyOrNull(this.state.password)) {
            this.setState({
                passwordEmpty: true
            });
        } else {
            this.setState({
                passwordEmpty: false
            });
        }

    }

    render() {
        return (
            <div className="LoginForm">
                <form onSubmit={(e) => this.login(e)}>
                    <div className="ui-g">
                        <div className="ui-g-3"><label>{this.props.username}</label></div>
                        <div className="ui-g-5"><InputText type="text" onChange={(e) => this.formValidation(e, 'username')} />
                            <br />
                            {this.state.usernameEmpty ? <label>{this.props.usernameEmpty}</label> : ''}
                        </div>
                    </div>
                    <div className="ui-g">
                        <div className="ui-g-3"><label>{this.props.password}</label></div>
                        <div className="ui-g-5"><InputText type="password" onChange={(e) => this.formValidation(e, 'password')} />
                            <br />
                            {this.state.passwordEmpty ? <label>{this.props.passwordEmpty}</label> : ''}
                        </div>
                    </div>
                    <div className="ui-g">
                        <div className="ui-g-4"></div>
                        <div className="ui-g-4"><Button label={this.props.loginButton} type="submit" /></div>
                    </div>
                </form>
            </div>

        )
    }
}