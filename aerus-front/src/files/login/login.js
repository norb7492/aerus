import React, { Component } from 'react';
import './login.scss';
import Languages from './../../strings/languages';

import LanguagesAdapter from './../../strings/languages-adapter';

import { Dropdown } from 'primereact/components/dropdown/Dropdown';

//Components
import LoginForm from './components/login-form';

export default class Login extends Component {
  
  constructor() {
    super();
  }
  state = {
    language: 'English',
    selectedLanguage: 'eng-en',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login'
  }
  changeLanguage(e) {
    console.log('Changing language', e.value);
    switch (e.value) {
      case 'eng-en':
        this.setState({
          language: 'English',
          selectedLanguage: 'eng-en'
        });
        break;
      case 'pt-br':
        this.setState({
          language: 'Português',
          selectedLanguage: 'pt-br'
        });
        break;
      case 'de':
        this.setState({
          language: 'Deutsch',
          selectedLanguage: 'de'
        });
        break;
      case 'jp':
        this.setState({
          language: '日本語',
          selectedLanguage: 'jp'
        });
        break;
    }
  }
  render() {
    return (
      <div className="Login" lang={this.state.selectedLanguage}>
        <div className="Container">
          <div className="ui-g">
            <div className="ui-g-4"></div>
            <div className="ui-g-4"><p className="loginTitle">{LanguagesAdapter.translate('login', this.state.selectedLanguage, 'login')}</p></div>
            <div className="ui-g-4"><Dropdown value={this.state.language} options={Languages.languagesAvaiable} onChange={(e) => this.changeLanguage(e)} style={{ width: '150px' }} /></div>
          </div>
          <LoginForm username={LanguagesAdapter.translate('username', this.state.selectedLanguage, 'login')} password={LanguagesAdapter.translate('password', this.state.selectedLanguage, 'login')} loginButton={LanguagesAdapter.translate('loginButton', this.state.selectedLanguage, 'login')}/>
        </div>
      </div>
    );
  }
}

