import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import Statistics from './pages/statistics/Statistics';
import Orders from './pages/orders/Orders';
import Stock from './pages/stocks/Stock';
import Suppliers from './pages/suppliers/Suppliers';

const Root = () => (
  <Switch>
    <Route exact path="/" component={Statistics} />
    <Route  path="/orders" component={Orders} />
    <Route  path="/stocks" component={Stock} />
    <Route  path="/suppliers" component={Suppliers} />
  </Switch>
  
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
