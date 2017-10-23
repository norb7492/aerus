import { createStore, combineReducers } from 'redux';
import reducerNavbar from './../files/components/navbar/reducerNavbar';
import reducerLanguage from './../strings/redux/reducerLanguage';

export default () => {
  const store = createStore(
    combineReducers({
      reducerNavbar: reducerNavbar,
      reducerLanguage: reducerLanguage
    })
  );

  return store;
};
