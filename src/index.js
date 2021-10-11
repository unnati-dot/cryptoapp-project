import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import store from "./App/store"
import {Provider} from "react-redux"
import 'antd/dist/antd.css'
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />

    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


