import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from './../components/navbar/navbar';



//Pages
import Home from './../pages/home/home';
import About from './../pages/about/about';


const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

export default class MainRouter extends React.Component {
    constructor(){
        super();
        console.log(this);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

