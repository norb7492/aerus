import { createStore, combineReducers } from 'redux';
import reducerNavbar from './../files/components/navbar/reducerNavbar';

export default () => {
  const store = createStore(
    combineReducers({
      reducerNavbar: reducerNavbar
    })
  );

  return store;
};
