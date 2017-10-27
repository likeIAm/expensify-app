import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
});

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('water'));



ReactDOM.render(<AppRouter />, document.getElementById('app'));