import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';

export default class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <div className="ui-g">
                    <div className="ui-g-4"><p>{this.props.username}</p></div>
                    <div className="ui-g-4"><InputText /></div>
                </div>
                <div className="ui-g">
                    <div className="ui-g-4"><p>{this.props.password}</p></div>
                    <div className="ui-g-4"><InputText type="password"/></div>
                </div>
                <div className="ui-g">
                    <div className="ui-g-4"></div>
                    <div className="ui-g-4"><Button label={this.props.loginButton}/></div>
                </div>
            </div>
            
        )
    }
}