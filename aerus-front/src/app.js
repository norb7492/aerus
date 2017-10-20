import ReactDOM from 'react-dom';
import Main from './files/pages/main/main';

//Redux
import configureStore from './store/storeConfig';
import {Provider} from 'react-redux';

import 'antd/dist/antd.css';
import './style.scss';

const store = configureStore();

const app = (
    <Provider store={store}> 
     <Main />
    </Provider> 
 );



ReactDOM.render(app, document.getElementById('root'));
