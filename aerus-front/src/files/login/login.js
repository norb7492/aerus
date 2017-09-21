import React, { Component } from 'react';
import './login.scss';

import {Dropdown} from 'primereact/components/dropdown/Dropdown';

export default class Login extends Component {

languages = [
    {label: 'English', value: 'eng-en'},
    {label: 'Deutsch', value: 'de'},
    {label: 'Português', value: 'pt'},
    {label: '日本語', value: 'jp'},
    
];

  render() {
    return (
      <div className="Login">
          <div className="flexContainer">
            <div className="loginBox">
              <div className="loginMenu">
               <div className="loginTitle">
                  <p className="loginTitle">Login</p>
               </div>
               <div className="dropDown">
               <Dropdown value='teste' options={this.languages}  style={{width:'150px'}}/>
               </div>
               </div> 

            </div>
        </div> 
      </div>
    );
  }
}

