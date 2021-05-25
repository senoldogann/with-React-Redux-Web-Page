import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import rootReducers from './reducers/rootReducers';
import {Provider} from "react-redux";
// state güncellemeleri dataların tutulduğu yer
const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);

reportWebVitals();
