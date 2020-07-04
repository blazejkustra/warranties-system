import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filtersReducer from "../reducers/filters";
import warrantyReducer from "../reducers/warranty";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        auth: authReducer,
        filters: filtersReducer,
        warranties: warrantyReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
