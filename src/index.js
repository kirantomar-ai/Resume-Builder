import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/dist/modal";
import {BrowserRouter  as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './ReduxManager/Store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
      
    </Router>
 
);
