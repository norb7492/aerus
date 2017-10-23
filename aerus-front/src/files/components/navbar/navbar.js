import {
    Menu, Icon,
    Dropdown, Button, message
} from 'antd';
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


import { connect } from 'react-redux';
import { setTab } from './actionNavbar';

const translate =  Translator.translate;
const setLanguage = ActionLanguage.setLanguage;

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.props.dispatch(setTab(e.key));
    }

    handleButtonClick = (e) =>{
        console.log('click left button', e);
    }

    handleMenuClick = (e) =>{
        switch (parseInt(e.key)) {
            case 1:
                this.props.dispatch(setLanguage('eng-en'));
                message.info('English Selected');
                break;
            case 2:
                this.props.dispatch(setLanguage('de'));
                message.info('German Selected');
                break;
            case 3:
                this.props.dispatch(setLanguage('pt-br'));
                message.info('Portuguese Selected');
                break;
            case 4:
                this.props.dispatch(setLanguage('jp'));
                message.info('Japanese Selected');
                break;
        }
    }

    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">English</Menu.Item>
            <Menu.Item key="2">Deutsch</Menu.Item>
            <Menu.Item key="3">Português</Menu.Item>
            <Menu.Item key="4">日本語</Menu.Item>
        </Menu>
    );
    render() {
        console.log('props', this.props.current);
        return (
            <nav>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.props.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <NavLink to="/" exact={true}>{translate('home', this.props.language, 'navBar')}</NavLink>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <NavLink to="/about">{translate('about', this.props.language, 'navBar')}</NavLink>
                    </Menu.Item>
                </Menu>
                <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menu}>
                        {translate('selectedLanguage', this.props.language, 'navBar')}
                </Dropdown.Button>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('Navbar', state);
    return {
        current: state.reducerNavbar.current,
        language: state.reducerLanguage.language
    }
}
export default connect(mapStateToProps)(Navbar);