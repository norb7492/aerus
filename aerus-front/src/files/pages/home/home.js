import { connect } from 'react-redux';
const translate =  Translator.translate;

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>{translate('homeTitle', this.props.language, 'home')}</h1>
                <h1>{translate('me', this.props.language, 'home')}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.reducerLanguage.language
    }
}
export default connect(mapStateToProps)(Home);