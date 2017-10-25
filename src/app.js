import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../node_modules/normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));