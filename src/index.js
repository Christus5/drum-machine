import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from "react-redux";

import { keyPressed } from './store/actions';
import allReducer from './store/reducers/allReducers';

let store = createStore(allReducer);

function handleKeyPress(e){
  console.log(e.keyCode);
  store.dispatch(keyPressed(e));
}

document.addEventListener("keypress", handleKeyPress);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

