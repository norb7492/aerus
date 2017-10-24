import { connect } from 'react-redux';
const translate =  Translator.translate;

class About extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>{translate('aboutTitle', this.props.language, 'about')}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.reducerLanguage.language
    }
}
export default connect(mapStateToProps)(About);