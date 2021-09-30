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
import Products from './pages/products/Products';
import Market from './pages/market/Market';
import Settings from './pages/settings/Settings';

const Root = () => (
  <Switch>
    <Route exact path="/" component={Statistics} />
    <Route  path="/orders" component={Orders} />
    <Route  path="/products" component={Products} />
    <Route  path="/market" component={Market} />
    <Route  path="/settings" component={Settings} />
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
