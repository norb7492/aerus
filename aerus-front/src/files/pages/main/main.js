import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import Navbar  from './../../components/navbar/navbar';
import MainRouter  from './../../routers/mainRouter'; 
import './main.scss';


export default class Main extends React.Component {

    render() {
        console.log(Navbar);
        return (
            <div className="container">
                <Header />
                 <MainRouter /> 
                <Footer />
            </div>
        )
    }
}