import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import IncomeDomainStore from './IncomeDomainStore';
import App from './App';
import  './style';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider incomeDomainStore={new IncomeDomainStore()}>
  <App />
  </Provider>, 
  document.getElementById('root')
)
