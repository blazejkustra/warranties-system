import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const app = document.getElementById('app');

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, app);
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, app);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

import {addWarranty, removeWarranty} from './actions/warranty';
import { setTextFilter, setCategorySell, setCategoryBuy, setCategoryAll} from './actions/filters';
import warranties from "./tests/fixtures/warranties";

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addWarranty(warranties[0]));
store.dispatch(addWarranty(warranties[1]));

store.dispatch(removeWarranty(warranties[1]));

store.dispatch(setTextFilter('xd'));
store.dispatch(setCategoryBuy());
store.dispatch(setCategoryAll);
store.dispatch(setCategorySell);

