import React, { Component } from 'react';
import './login.scss';

import {Button} from 'primereact/components/button/Button';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <Button />
      </div>
    );
  }
}

