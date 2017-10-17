import {
    Menu, Icon,
    Dropdown, Button, message
} from 'antd';
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Navbar extends React.Component {

    constructor() {
        super();
    }
    state = {
        current: 'home',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    /*  oddEvent = (match, location) => {
            if (!match) {
              return false
            }
        } */


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
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3d menu item</Menu.Item>
        </Menu>
    );
    render() {
        return (
            <nav>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
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

