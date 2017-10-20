import {
    Menu, Icon,
    Dropdown, Button, message
} from 'antd';
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


import {connect} from 'react-redux';
import {setTab} from './actionNavbar';

class Navbar extends React.Component {

    constructor() {
        super();
    }


    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });

        this.props.dispatch(setTab(e.key));
    }

    handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
    }

    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
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
                        <NavLink to="/" exact={true}>Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <NavLink to="/about">About</NavLink>
                    </Menu.Item>
                    <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menu}>
                        Dropdown
                     </Dropdown.Button>
                </Menu>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('Navbar',state.reducerNavbar);
  return {
    current: state.reducerNavbar.current
  }
}
export default connect(mapStateToProps)(Navbar);