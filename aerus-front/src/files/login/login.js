import React, { Component } from 'react';
import './login.scss';
import Languages from './../../strings/languages';

import LanguagesAdapter from './../../strings/languages-adapter';

import {Dropdown} from 'primereact/components/dropdown/Dropdown';

export default class Login extends Component {

  constructor(){
    super();
    LanguagesAdapter.checkExistingLanguages();
  }
  state = {
    language: 'English'
  }

  changeLanguage(e){
    console.log('Changing language', e.value);
  }

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
               <Dropdown value={this.state.language} options={Languages.languagesAvaiable} onChange={this.changeLanguage} style={{width:'150px'}}/>
               <h1>{this.state.language}</h1>
               </div>
               </div> 

            </div>
        </div> 
      </div>
    );
  }
}

